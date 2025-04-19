"use client";

import React, { useState, useEffect, useRef, useCallback, Children, useMemo } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

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

  const baseX = useMotionValue(0);

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
    if (!shouldAnimate || !carouselWidth || isNavigating || scrollSpeed === 0) return;

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

  const handleMouseEnter = () => {
    if (isNavigating) return;
    setShouldAnimate(false);
  };

  const handleMouseLeave = () => {
    if (isNavigating) return;
    setShouldAnimate(true);
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
        className={`flex ${innerClassName}`}
        style={{ x: baseX }}
        drag={isNavigating ? false : "x"}
        dragConstraints={carouselRef}
        onDragEnd={(_e, _info) => {
          if (isNavigating) return;
          
          const finalX = baseX.get();
          // Apply immediate wrap logic based on drag end position
          if (finalX < -carouselWidth) {
            baseX.set(finalX % carouselWidth);
          } else if (finalX > 0) {
            baseX.set((finalX % carouselWidth) - carouselWidth);
          }
        }}
      >
        {/* Render duplicated children */}
        {[...duplicatedChildren, ...duplicatedChildren].map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </motion.div>
    </div>
  );
} 