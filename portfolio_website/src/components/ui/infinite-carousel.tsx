"use client";

import React, { useState, useEffect, useRef, useCallback, Children, useMemo } from 'react';
import { motion, useMotionValue, useAnimationFrame, useAnimation } from 'framer-motion';

interface InfiniteCarouselProps {
  children: React.ReactNode;
  scrollSpeed?: number; // Pixels per second, negative for left scroll
  isNavigating?: boolean; // Flag to pause drag/animation
  className?: string; // Allow custom styling for the outer container
  innerClassName?: string; // Allow custom styling for the inner flex container
}

export function InfiniteCarousel({
  children,
  scrollSpeed = -100,
  isNavigating = false,
  className = "",
  innerClassName = ""
}: InfiniteCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isDragging, setIsDragging] = useState(false); // Track drag state

  const baseX = useMotionValue(0);
  // Use animation controls for smoother start/stop/resume
  const controls = useAnimation(); 

  // Duplicate children for seamless looping
  const duplicatedChildren = useMemo(() => Children.toArray(children), [children]);

  const updateCarouselWidths = useCallback(() => {
    if (carouselRef.current && carouselInnerRef.current) {
      const innerElement = carouselInnerRef.current;
      // Calculate width based on the original set of children
      const totalWidth = innerElement.scrollWidth / 2; // Divide by 2 because we doubled children
      setCarouselWidth(totalWidth); // Width of one full set of items
    }
  }, []);

  useEffect(() => {
    updateCarouselWidths();

    const resizeObserver = new ResizeObserver(updateCarouselWidths);
    const innerEl = carouselInnerRef.current;
    if (innerEl) {
      resizeObserver.observe(innerEl);
    }
    window.addEventListener('resize', updateCarouselWidths);

    return () => {
      if (innerEl) {
        resizeObserver.unobserve(innerEl);
      }
      window.removeEventListener('resize', updateCarouselWidths);
    };
  }, [updateCarouselWidths, duplicatedChildren]); // Re-run if children change

  useAnimationFrame((time, delta) => {
    if (!shouldAnimate || isDragging || !carouselWidth || isNavigating || scrollSpeed === 0) return;

    const moveBy = (delta / 1000) * scrollSpeed;
    let newBaseX = baseX.get() + moveBy;

    // Wrap the position
    if (scrollSpeed < 0 && newBaseX < -carouselWidth) { // Scrolling left
      newBaseX = newBaseX % carouselWidth;
    } else if (scrollSpeed > 0 && newBaseX > 0) { // Scrolling right (if needed)
        newBaseX = (newBaseX % carouselWidth) - carouselWidth;
    } else if (scrollSpeed < 0 && newBaseX > 0) { // Handle dragging right past start when scrolling left
        newBaseX = (newBaseX % carouselWidth) - carouselWidth; 
    } else if (scrollSpeed > 0 && newBaseX < -carouselWidth) { // Handle dragging left past end when scrolling right
        newBaseX = newBaseX % carouselWidth;
    }

    baseX.set(newBaseX);
  });

  useEffect(() => {
    controls.start({
      x: baseX.get(), // Start from the current motion value
      transition: {
        type: 'spring', // Use spring for smoother transitions after drag
        stiffness: 300, 
        damping: 50, 
        mass: 0.5, 
      }
    });
  }, [baseX, controls]); // Re-run when baseX changes or controls are initialized

  const handleMouseEnter = () => {
    if (isNavigating || isDragging) return; // Don't pause if currently dragging
    setShouldAnimate(false);
  };

  const handleMouseLeave = () => {
    if (isNavigating || isDragging) return; // Don't resume if currently dragging
    setShouldAnimate(true);
  };

  // Drag Handlers
  const handleDragStart = () => {
    if (isNavigating) return;
    setIsDragging(true);
    setShouldAnimate(false); // Explicitly stop animation loop
    controls.stop(); // Stop any ongoing motion animation
  };

  const handleDragEnd = () => {
    if (isNavigating) return;
    setIsDragging(false);
    
    // No need to manually set baseX here as drag updates it.
    // The wrap logic needs to be applied correctly after drag.
    let finalX = baseX.get();
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const dragOutOfBoundsRatio = 0.1; // Allow dragging slightly out of bounds

    // Apply wrap logic based on drag end position immediately for seamless loop
    if (carouselWidth > 0) { // Ensure carouselWidth is calculated
        if (scrollSpeed < 0) { // Scrolling left
            if (finalX < -carouselWidth * (1 + dragOutOfBoundsRatio)) {
                // If dragged far left beyond one loop, wrap back
                finalX = (finalX % carouselWidth); 
            } else if (finalX > containerWidth * dragOutOfBoundsRatio) {
                // If dragged right past the start edge, wrap around
                 finalX = (finalX % carouselWidth) - carouselWidth;
            }
        } else { // Scrolling right (if implemented)
            if (finalX > containerWidth * dragOutOfBoundsRatio) {
                 // If dragged far right beyond the start, wrap back
                 finalX = (finalX % carouselWidth) - carouselWidth;
            } else if (finalX < -carouselWidth * (1 + dragOutOfBoundsRatio)) {
                // If dragged left past the end edge, wrap around
                 finalX = (finalX % carouselWidth);
            }
        }
         // Immediately set the motion value to the wrapped position
         baseX.set(finalX); 
    }

    // Resume animation only if mouse is not over the element
    // Check if mouse is still over after drag ends
    if (carouselRef.current && !carouselRef.current.matches(':hover')) {
      setShouldAnimate(true);
    }
  };

  return (
    <div
      ref={carouselRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay for left edge */}
      <div className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-background/95 to-transparent"></div>
      
      {/* Gradient overlay for right edge */}
      <div className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-l from-background/95 to-transparent"></div>

      {/* Inner carousel */}
      <motion.div
        ref={carouselInnerRef}
        className={`flex cursor-grab active:cursor-grabbing ${innerClassName}`}
        style={{ x: baseX }}
        drag={isNavigating ? false : "x"}
        dragConstraints={{ left: -carouselWidth * 1.5, right: carouselWidth * 0.5 }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
        {/* Render duplicated children */}
        {[...duplicatedChildren, ...duplicatedChildren].map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </motion.div>
    </div>
  );
} 