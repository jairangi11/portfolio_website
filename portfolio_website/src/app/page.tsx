"use client";

import { motion, AnimatePresence, useMotionValue, useAnimationControls, useAnimationFrame, wrap } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FiArrowRight, FiCode, FiLayers, FiCpu, FiGrid } from "react-icons/fi";
import { ProfileCard } from "@/components/ui/profile-card";
import { resumeData } from "@/data/resumeData";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  // Add router for navigation detection
  const router = useRouter();
  const pathname = usePathname();
  
  // Flag to track if navigation is in progress
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Listen for route changes to prevent animation during navigation
  useEffect(() => {
    // When this component mounts, set isNavigating to false
    setIsNavigating(false);
    
    // Create a navigation start handler to add to all navigation triggers
    const handleNavigationStart = () => {
      setIsNavigating(true);
    };
    
    // Add click listeners to all navigation elements
    const addNavigationListeners = () => {
      document.querySelectorAll('a[href], button[onclick]').forEach(element => {
        // Skip elements that already have the listener
        if (!(element as any).__hasNavigationListener) {
          element.addEventListener('click', handleNavigationStart);
          (element as any).__hasNavigationListener = true;
        }
      });
    };
    
    // Initial addition of listeners
    addNavigationListeners();
    
    // Set up a MutationObserver to detect dynamically added elements
    const observer = new MutationObserver(() => {
      addNavigationListeners();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      // Clean up on unmount
      observer.disconnect();
      document.querySelectorAll('a[href], button[onclick]').forEach(element => {
        element.removeEventListener('click', handleNavigationStart);
        delete (element as any).__hasNavigationListener;
      });
    };
  }, [pathname]);

  const expertiseItems = [
    { 
      icon: <FiCpu className="h-6 w-6" />,
      title: "AI Solutions", 
      description: "Developing AI-powered products with a focus on natural language processing and machine learning." 
    },
    { 
      icon: <FiLayers className="h-6 w-6" />,
      title: "Product Strategy", 
      description: "Creating data-driven product roadmaps aligned with business goals and user needs."
    },
    { 
      icon: <FiCode className="h-6 w-6" />,
      title: "SaaS & B2B", 
      description: "Building scalable software solutions with optimized user experiences."
    },
    { 
      icon: <FiGrid className="h-6 w-6" />,
      title: "PropTech", 
      description: "Leveraging technology to transform the real estate industry."
    }
  ];

  // Company information for the logos section with matching image files
  const companies = [
    {
      name: "Quara Holdings",
      logo: "/images/company_logos/Quara_holding.png",
      role: "Product Manager - AI",
      period: "08/2023 – 03/2025",
      description: "AI-powered PropTech insights platform",
      website: "https://www.quaraholding.com/"
    },
    {
      name: "foundit",
      logo: "/images/company_logos/foundit.png",
      role: "Associate Product Manager",
      period: "01/2022 – 08/2023",
      description: "UX and onboarding across 9 markets",
      website: "https://www.foundit.in/"
    },
    {
      name: "Freecharge",
      logo: "/images/company_logos/Freecharge_logo.png",
      role: "Associate Product Manager",
      period: "02/2021 – 01/2022",
      description: "Digital payments & fintech solutions",
      website: "https://www.freecharge.in/"
    },
    {
      name: "Shaadi.com",
      logo: "/images/company_logos/Shaadi.png",
      role: "Management Trainee - Product",
      period: "06/2020 – 02/2021",
      description: "AI-driven matchmaking optimization",
      website: "https://www.shaadi.com/"
    },
    {
      name: "Lenskart",
      logo: "/images/company_logos/Lenskart-Logo.png",
      role: "MBA Internship",
      period: "04/2019 – 05/2019",
      description: "Sales & market optimization",
      website: "https://www.lenskart.com/"
    },
    {
      name: "Petrofac",
      logo: "/images/company_logos/Petrofac.png",
      role: "Software Engineering Intern",
      period: "01/2017 – 07/2017",
      description: "Remote monitoring system development",
      website: "https://www.petrofac.com/"
    }
  ];

  // Skills animation implementation
  const skills = ["AI-powered solutions", "Machine Learning", "SaaS", "B2B PropTech"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timerProgress, setTimerProgress] = useState(0);
  const timerProgressRef = useRef(0); // For direct updates without re-renders
  const animationFrameIdRef = useRef<number | null>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  
  // Scroll position state for scroll indicator
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 100; // Show scroll indicator only when scroll position is less than this value

  // For carousel auto-scrolling
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Infinite scroll setup
  const baseX = useMotionValue(0);
  const animationControls = useAnimationControls();
  const scrollSpeed = -100;
  const dragFactor = 0.05;

  // Duplicate companies for infinite scroll
  const displayedCompanies = [...companies, ...companies];

  // Handle timer animation
  useEffect(() => {
    let startTime: number;
    
    // Function to stop all animations immediately
    const stopAllAnimations = () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
    
    // Function to start timer animation
    const startTimerAnimation = () => {
      startTime = performance.now();
      
      const animateTimer = (timestamp: number) => {
        if (document.hidden) {
          // Don't animate when page is not visible
          animationFrameIdRef.current = requestAnimationFrame(animateTimer);
          return;
        }
        
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / 3000, 1);
        
        // Use ref for direct updates without re-renders
        timerProgressRef.current = progress;
        // Only update state at a reasonable rate to avoid excessive re-renders
        setTimerProgress(progress);
        
        if (progress < 1 && animationFrameIdRef.current !== null) {
          animationFrameIdRef.current = requestAnimationFrame(animateTimer);
        }
      };
      
      animationFrameIdRef.current = requestAnimationFrame(animateTimer);
    };
    
    // Main interval for skill rotation
    const setupSkillRotation = () => {
      // Clear any existing interval
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
      
      intervalIdRef.current = setInterval(() => {
        setIsAnimating(true);
        timerProgressRef.current = 0;
        setTimerProgress(0);
        
        setTimeout(() => {
          setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
          setIsAnimating(false);
          
          // Reset and start timer animation
          if (animationFrameIdRef.current !== null) {
            cancelAnimationFrame(animationFrameIdRef.current);
          }
          startTimerAnimation();
        }, 500);
      }, 3000);
    };
    
    // Initialize animations
    setupSkillRotation();
    startTimerAnimation();
    
    // Setup event listeners for visibility changes and navigation attempts
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is not visible, pause animations to save resources
        if (animationFrameIdRef.current !== null) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
      } else {
        // Page is visible again, restart animations
        startTime = performance.now() - (timerProgressRef.current * 3000);
        startTimerAnimation();
      }
    };
    
    // Handle navigation attempts
    const handleBeforeUnload = () => {
      stopAllAnimations();
    };
    
    // Handle clicks on links that might navigate away
    const handleLinkClick = () => {
      stopAllAnimations();
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', (e) => {
      // Check if click was on a link or button
      if (e.target instanceof HTMLAnchorElement || 
          e.target instanceof HTMLButtonElement ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        handleLinkClick();
      }
    });
    
    // Cleanup
    return () => {
      stopAllAnimations();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    // Initial position
    setScrollPosition(window.scrollY);
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateCarouselWidths = () => {
      if (carouselRef.current && carouselInnerRef.current) {
        const innerElement = carouselInnerRef.current;
        const totalWidth = innerElement.scrollWidth;
        const originalSetWidth = totalWidth / 2;
        setCarouselWidth(originalSetWidth);
        setContentWidth(totalWidth);
      }
    };

    // Initial update
    updateCarouselWidths();

    // Update on resize
    const resizeObserver = new ResizeObserver(updateCarouselWidths);
    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }
    if (carouselInnerRef.current) {
        resizeObserver.observe(carouselInnerRef.current);
    }
    
    window.addEventListener('resize', updateCarouselWidths);

    return () => {
      if (carouselRef.current) {
        resizeObserver.unobserve(carouselRef.current);
      }
       if (carouselInnerRef.current) {
           resizeObserver.unobserve(carouselInnerRef.current);
       }
       window.removeEventListener('resize', updateCarouselWidths);
    };
  }, []);

  // Infinite scrolling animation logic
  useAnimationFrame((time, delta) => {
    if (!shouldAnimate || !carouselWidth || isNavigating) return;

    let moveBy = (delta / 1000) * scrollSpeed;

    let newBaseX = baseX.get() + moveBy;
    
    if (newBaseX < -carouselWidth) {
      newBaseX = newBaseX % carouselWidth;
    } else if (newBaseX > 0) {
      newBaseX = (newBaseX % carouselWidth) - carouselWidth;
    }

    baseX.set(newBaseX);
  });

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (isNavigating) return;
    setShouldAnimate(false);
  };
  
  const handleMouseLeave = () => {
    if (isNavigating) return;
    setShouldAnimate(true);
  };

  return (
    <Layout>
      {/* Hero Section with matching header background */}
      <section className="relative min-h-[85vh] overflow-hidden bg-background">
        {/* Simple background elements */}
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"></div>
          <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-primary/10 blur-2xl"></div>
        </div>
        
        <div className="relative z-20 h-full container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[85vh]">
            <div className="md:col-span-7 mb-10 md:mb-0 pt-10 md:pt-0">
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-primary">Jay</span> Rangi
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-1 w-16 bg-primary my-6 rounded-full"
              />
              
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mt-6 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-foreground/80 font-normal">Data-driven </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary/80 to-primary/60 bg-clip-text text-transparent font-semibold">Product Manager</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/50"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                  />
                </span>
                <span className="text-foreground/80 font-normal"> specializing in </span>
                <span className="relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentSkillIndex}
                      className="text-primary font-medium inline-block min-w-[180px]"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skills[currentSkillIndex]}
                    </motion.span>
                  </AnimatePresence>
                  
                  {/* Timer animation */}
                  <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-zinc-800/30 overflow-hidden rounded-full">
                    <div 
                      className="h-full bg-primary/30 transition-none"
                      style={{ width: `${timerProgress * 100}%` }}
                    />
                  </div>
                </span>
              </motion.h2>
              
              <motion.div 
                className="mt-10 flex flex-row gap-4 items-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild size="lg" className="group shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <Link href="/resume" className="flex items-center">
                    View Resume
                    <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                {/* Improved Secondary Button with consistent arrow behavior */}
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg" 
                  className="bg-secondary/30 border border-secondary/30 hover:bg-secondary/40 text-foreground shadow-lg hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 group"
                >
                  <Link href="/case-studies" className="flex items-center">
                    Explore Case Studies
                    <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Profile Card Column */}
            <motion.div 
              className="md:col-span-5 flex justify-center md:justify-end h-[420px] md:h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <ProfileCard 
                name={resumeData.name}
                title={resumeData.title}
                subtitle="AI/ML Product Manager"
              />
            </motion.div>
          </div>
          
          <AnimatePresence>
            {scrollPosition < scrollThreshold && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex flex-col items-center gap-2 text-sm text-foreground/60 group cursor-pointer">
                  <span className="font-medium tracking-wide">Scroll Down</span>
                  <div className="relative h-10 w-6 border-2 border-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      animate={{ 
                        y: [0, 12, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <motion.div 
                    className="absolute h-12 w-12 rounded-full border border-foreground/10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background/60 to-background/95 relative border-t border-border/5">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-80 h-80 border border-border/10 rounded-full opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-60 h-60 border border-border/5 rounded-full opacity-5"></div>
          <motion.div 
            className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary rounded-full"
            animate={{ 
              scale: [1, 15, 1],
              opacity: [0, 0.15, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              repeatType: "reverse"
            }}
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="relative inline-block">
                Companies I've Worked With
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
              </span>
            </motion.h2>
          </div>
          
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Gradient overlay for left edge */}
            <div className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-background/95 to-transparent"></div>
            
            {/* Gradient overlay for right edge */}
            <div className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-l from-background/95 to-transparent"></div>
            
            {/* Inner carousel with smooth scrolling motion */}
            <motion.div
              ref={carouselInnerRef}
              className="flex space-x-6 px-10"
              style={{ x: baseX }}
              drag={isNavigating ? false : "x"}
              dragConstraints={{ left: -contentWidth + (carouselRef.current?.offsetWidth ?? 0), right: 0 }}
              onDrag={(e, info) => {
                 baseX.set(baseX.get() + info.delta.x);
              }}
              onDragEnd={(e, info) => {
                if (isNavigating) return;
                
                let finalX = baseX.get();
                
                const velocityFactor = 0.2;
                animationControls.start({
                  x: finalX + info.velocity.x * velocityFactor,
                  transition: { type: "spring", stiffness: 100, damping: 20 }
                }).then(() => {
                  let currentX = baseX.get();
                  if (currentX < -carouselWidth) {
                     baseX.set(currentX % carouselWidth, false);
                  } else if (currentX > 0) {
                      baseX.set((currentX % carouselWidth) - carouselWidth, false);
                  }
                });

                if (finalX < -carouselWidth) {
                  baseX.set(finalX % carouselWidth, false);
                } else if (finalX > 0) {
                   baseX.set((finalX % carouselWidth) - carouselWidth, false);
                }
              }}
            >
              {/* Use displayedCompanies (doubled array) */}
              {displayedCompanies.map((company, index) => (
                <motion.div 
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 w-[280px] md:w-[300px] group"
                  whileHover={{ 
                    y: -5, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <Card className="h-full bg-card/40 backdrop-blur-sm group-hover:bg-card/60 border-border/20 transition-all duration-300 overflow-hidden relative">
                    {/* Shiny overlay effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"></div>
                      <motion.div 
                        className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 skew-x-12"
                        animate={{
                          left: ['0%', '200%'],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      />
                    </div>
                    
                    <CardContent className="p-5 relative z-10">
                      {/* Timeline indicator */}
                      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Company Logo */}
                      <div className="h-16 mb-4 relative flex items-center justify-center">
                        <div className="relative w-full h-12 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                          <Image 
                            src={company.logo} 
                            alt={`${company.name} logo`} 
                            height={60}
                            width={120}
                            className="object-contain max-h-12 max-w-[140px]"
                          />
                          <motion.div 
                            className="absolute inset-0 bg-primary/5 rounded-md opacity-0 group-hover:opacity-100"
                            animate={{ 
                              boxShadow: ['0 0 0px rgba(var(--primary-rgb), 0)', '0 0 20px rgba(var(--primary-rgb), 0.2)', '0 0 0px rgba(var(--primary-rgb), 0)']
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2.5,
                              ease: "easeInOut"
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Company Name with Link */}
                      <div className="mb-2 text-center">
                        <Link 
                          href={company.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                        >
                          <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                            {company.name}
                          </span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-200" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                            />
                          </svg>
                        </Link>
                      </div>
                      
                      {/* Company Details */}
                      <div className="space-y-1 text-center">
                        <Badge variant="outline" className="bg-background/50 text-xs px-2 py-0.5">
                          {company.period}
                        </Badge>
                        <h3 className="text-foreground font-medium text-base mt-2 group-hover:text-primary transition-colors duration-200">
                          {company.role}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {company.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Carousel position indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            <motion.div 
              className="w-20 h-1 rounded-full bg-foreground/5 relative overflow-hidden"
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary/30"
                animate={{ 
                  x: ["0%", "100%", "0%"]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 40,
                  ease: "linear",
                  repeatType: "loop",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-background/95 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-40 h-40 border border-border/20 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 -right-20 w-60 h-60 border border-border/10 rounded-full opacity-10"></div>
          <motion.div 
            className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary rounded-full"
            animate={{ 
              scale: [1, 15, 1],
              opacity: [0, 0.2, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary rounded-full"
            animate={{ 
              scale: [1, 20, 1],
              opacity: [0, 0.1, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 12,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Areas of <span className="relative inline-block">
                Specialization
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/30 via-primary/80 to-primary/30"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="max-w-2xl mx-auto text-muted-foreground text-lg mt-4"
            >
              Leveraging technology to solve complex business challenges and deliver exceptional user experiences.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseItems.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="relative h-full border-none bg-card/30 backdrop-blur-sm transition-all duration-200 group overflow-hidden shadow-sm hover:shadow-md">
                  {/* Shiny reflective surface effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div 
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 blur-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardContent className="p-6 relative z-10">
                    {/* Modern icon with glowing effect */}
                    <div className="mb-5 relative">
                      <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-background/80 to-background border border-border/20 shadow-inner">
                        <div className="text-primary">
                          {React.cloneElement(item.icon, { 
                            className: "h-6 w-6 z-10 group-hover:text-primary transition-colors duration-300"
                          })}
                        </div>
                        <motion.div 
                          className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100"
                          animate={{ 
                            boxShadow: ['0 0 0px rgba(var(--primary-rgb), 0)', '0 0 15px rgba(var(--primary-rgb), 0.3)', '0 0 0px rgba(var(--primary-rgb), 0)']
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                      <motion.div 
                        className="absolute inset-0 rounded-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          background: 'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.15) 0%, rgba(var(--primary-rgb), 0) 70%)',
                        }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">
                      {item.description}
                    </p>
                  </CardContent>
                  
                  {/* Bottom highlight line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-background/50 to-background/95 border-t border-border/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[250px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl opacity-30"></div>
          <div className="absolute left-1/4 top-1/4 w-32 h-32 border border-border/20 rounded-full opacity-20"></div>
          <div className="absolute right-1/4 bottom-1/4 w-48 h-48 border border-border/10 rounded-full opacity-10"></div>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(var(--primary-rgb), 0.3) 50%, transparent 100%)'
            }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Work <span className="relative inline-block">
                <span className="text-primary">Together</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Looking for a Product Manager who can drive results through data-driven decisions and AI innovation?
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get in Touch
                  <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Decorative circles */}
            <div className="relative h-20 w-full mt-12 opacity-60">
              <motion.div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/50 rounded-full"
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-primary/10 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-border/10 rounded-full"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.1, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
