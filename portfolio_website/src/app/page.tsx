"use client";

import { motion, AnimatePresence, useMotionValue, useAnimationControls, useAnimationFrame, wrap } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FiArrowRight, FiCode, FiLayers, FiCpu, FiGrid, FiTool } from "react-icons/fi";
import { ProfileCard } from "@/components/ui/profile-card";
import { resumeData } from "@/data/resumeData";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

// Define types for dynamic expertise data
interface ExpertiseArea {
  title: string;
  icon: React.ReactElement;
  description: string;
  skills: string[];
}

// Function to categorize skills and generate expertise areas
const getExpertiseAreas = (): ExpertiseArea[] => {
  const skills = resumeData.skills;

  // Define categories and their corresponding icons and descriptions
  const areasMap: { [key: string]: Omit<ExpertiseArea, 'skills'> } = {
    ai: {
      title: "AI & Data Science",
      icon: <FiCpu className="h-6 w-6" />,
      description: "Leveraging AI/ML models like NLP, Prediction, Classification, and Generative AI to build intelligent solutions and drive data-driven insights.",
    },
    product: {
      title: "Product Management & Strategy",
      icon: <FiLayers className="h-6 w-6" />,
      description: "Defining product vision, creating strategic roadmaps, managing backlogs (including KPIs), and leading Go-to-Market strategies with a focus on growth.",
    },
    tech: { // Combine relevant technical types
      title: "Technical Proficiency",
      icon: <FiCode className="h-6 w-6" />,
      description: "Developing robust solutions using Python, SQL, API integrations, Cloud technologies, and applying Agile methodologies for efficient development.",
    },
    industry: {
      title: "Industry Expertise",
      icon: <FiGrid className="h-6 w-6" />,
      description: "Applying product and technical skills within SaaS, Fintech, PropTech, and E-commerce domains to address specific industry challenges.",
    },
     // Add a category for tools/design if needed, or merge into tech/product
     tools: {
       title: "Tools & Analytics",
       icon: <FiTool className="h-6 w-6" />, // Example, replace if needed
       description: "Utilizing Power BI, Tableau, Mixpanel, CleverTap, Adobe Analytics, Figma, and JIRA for analysis, design, and project management."
     }
  };

  // Group skills by category
  const groupedSkills: { [key: string]: string[] } = {};
  skills.forEach(skill => {
    let categoryKey = skill.type;
    // Consolidate technical skills
    if (['frontend', 'database', 'backend', 'devops', 'cloud'].includes(skill.type)) {
      categoryKey = 'tech';
    }
    // Assign KPIs to product management
    if (skill.name === 'KPIs') {
      categoryKey = 'product';
    }
     // Consolidate tools/design
     if (['tools', 'design'].includes(skill.type)) {
       categoryKey = 'tools';
     }

    if (!groupedSkills[categoryKey]) {
      groupedSkills[categoryKey] = [];
    }
    // Avoid duplicating KPIs if already listed under product type
    if (!(categoryKey === 'product' && skill.name === 'KPIs' && groupedSkills[categoryKey].includes(skill.name))) {
         groupedSkills[categoryKey].push(skill.name);
    }
  });

  // Build the final expertise areas array
  const expertiseItems: ExpertiseArea[] = Object.keys(areasMap)
    .filter(key => groupedSkills[key] && groupedSkills[key].length > 0) // Only include areas with skills
    .map(key => ({
      ...areasMap[key],
      skills: groupedSkills[key],
    }));

  // Ensure we have 4 main areas by combining if necessary or selecting top 4
  // For simplicity, let's stick to the defined main categories if they exist
  const primaryKeys = ['ai', 'product', 'tech', 'industry'];
  let finalAreas = primaryKeys
    .map(key => expertiseItems.find(item => item.title === areasMap[key].title))
    .filter((item): item is ExpertiseArea => item !== undefined); // Type guard

   // If we have fewer than 4, add 'Tools & Analytics' if available
   if (finalAreas.length < 4) {
     const toolsArea = expertiseItems.find(item => item.title === "Tools & Analytics");
     if (toolsArea) {
       finalAreas.push(toolsArea);
     }
   }

   // Limit to 4 if more were generated
   return finalAreas.slice(0, 4);
};

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
    const handleNavigationStart = (event: Event) => {
      // Check if the clicked element is an anchor opening in a new tab
      const targetElement = event.target as HTMLElement;
      const anchorElement = targetElement.closest('a');
      if (anchorElement && anchorElement.target === '_blank') {
        // Don't set navigating flag if opening in a new tab
        return;
      }
      // Otherwise, assume same-tab navigation and set the flag
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

  // Get dynamic expertise items
  const expertiseItems = getExpertiseAreas();

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
      role: "Marketing Intern",
      period: "04/2019 – 05/2019",
      description: "Sales & market optimization",
      website: "https://www.lenskart.com/"
    },
    {
      name: "Petrofac",
      logo: "/images/company_logos/Petrofac.png",
      role: "Software Developer",
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
    const handleLinkClick = (event: MouseEvent) => {
      // Check if the clicked element is an anchor opening in a new tab
      const targetElement = event.target as HTMLElement;
      const anchorElement = targetElement.closest('a');
      if (anchorElement && anchorElement.target === '_blank') {
        // Don't stop animations if opening in a new tab
        return;
      }
      // Otherwise, stop animations for same-tab navigation
      stopAllAnimations();
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', (e) => {
      // Check if click was on a link or button potentially causing navigation
      const targetElement = e.target as HTMLElement;
      if (targetElement.closest('a[href]') || targetElement.closest('button[onclick]') || targetElement.closest('button[type="submit"]') || targetElement.closest('button:not([type])')) {
        handleLinkClick(e);
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

  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15,
      },
    },
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
                initial={{ opacity: 0, y: 10 }} // Start slightly lower
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group" // Reduced bottom margin
              >
                {/* Optional: Text Label */}
                {/* <span className="text-xs text-foreground/50 mb-2 group-hover:text-foreground/70 transition-colors duration-300 tracking-widest uppercase">Scroll</span> */}
                
                {/* Animated Chevron */}
                <motion.svg
                  width="24" // Slightly larger for better visibility
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-foreground/40 group-hover:text-foreground/60 transition-colors duration-300"
                  animate={{
                    y: ["0%", "20%", "0%"], // Subtle vertical bounce
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M19.5 8.25L12 15.75L4.5 8.25" // Standard chevron down shape
                    stroke="currentColor"
                    strokeWidth="1.5" // Thinner stroke for sleekness
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
                
                {/* Removed the old circle and dot animation */}
                {/* Removed the pulsing outer circle */}
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

      {/* Expertise Section - REFACTORED */}
      <section className="py-24 px-4 bg-gradient-to-b from-background/90 to-background relative overflow-hidden">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 z-0 opacity-50">
          {/* Subtle grid pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(var(--border-rgb), 0.1)" strokeWidth="0.5"/>
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)"/>
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(var(--border-rgb), 0.15)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Gradient blobs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-30 animation-delay-2000 animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Areas of <span className="relative inline-block text-primary">
                Specialization
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-muted-foreground text-lg mt-4"
            >
              Leveraging technology to solve complex business challenges and deliver exceptional user experiences across various domains.
            </motion.p>
          </div>

          {/* Animated Grid Container */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger earlier for smoother feel
          >
            {expertiseItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -6, 
                  scale: 1.03,
                  boxShadow: '0 10px 25px -5px rgba(var(--primary-rgb), 0.1), 0 8px 10px -6px rgba(var(--primary-rgb), 0.1)',
                  transition: { duration: 0.25, ease: "easeOut" } 
                }}
                className="h-full" // Ensure motion div takes full height for consistent layout
              >
                {/* Updated Card Design */}
                <Card className="relative h-full border border-border/10 bg-gradient-to-br from-card/60 via-card/50 to-card/60 backdrop-blur-md transition-all duration-300 group overflow-hidden shadow-md hover:shadow-lg hover:border-primary/30">
                  {/* Inner border highlight on hover */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-300 pointer-events-none"></div>
                  
                  {/* Subtle glow effect */}
                  <motion.div 
                    className="absolute -inset-2 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-400 rounded-xl blur-lg"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />

                  <CardContent className="p-6 relative z-10 flex flex-col h-full"> {/* Flex column for alignment */}
                    {/* Modern icon with background */}
                    <div className="mb-5">
                      <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-tr from-background/80 to-background/95 border border-border/20 shadow-inner group-hover:border-primary/30 transition-colors duration-300">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        {/* Icon pulse */}
                        <motion.div 
                          className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-50"
                          animate={{ scale: [1, 1.3, 1], opacity: [0, 0.5, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-200 text-sm leading-relaxed flex-grow"> {/* flex-grow makes paragraph take remaining space */}
                      {item.description}
                    </p>

                     {/* Optional: Display a few key skills from the list */}
                     {/* <div className="mt-4 pt-3 border-t border-border/10">
                       <p className="text-xs text-muted-foreground mb-1">Key Skills:</p>
                       <div className="flex flex-wrap gap-1.5">
                         {item.skills.slice(0, 3).map(skill => (
                           <Badge key={skill} variant="secondary" className="text-xs px-1.5 py-0.5 bg-background/60 border-border/20">{skill}</Badge>
                         ))}
                       </div>
                     </div> */}
                  </CardContent>

                  {/* Bottom highlight line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    style={{ transformOrigin: 'left' }} // Animate from left
                    variants={{ // Animate width on hover within the parent's variants
                      hidden: { width: 0 },
                      visible: { width: 0 }, // Default state
                    }}
                    whileHover={{ width: "100%", transition: { duration: 0.3, ease: 'easeOut' } }} // Override on hover
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-t from-background/60 via-background/80 to-background border-t border-border/10 relative overflow-hidden">
        {/* Enhanced Background: Subtle Animated Mesh Gradient */}
        <div className="absolute inset-0 z-0 opacity-40">
          <motion.div
            className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-primary/10 via-transparent to-transparent filter blur-3xl"
            animate={{
              x: ['-10%', '10%', '-10%'],
              y: ['-10%', '10%', '-10%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-gradient-radial from-secondary/5 via-transparent to-transparent filter blur-3xl"
            animate={{
              x: ['10%', '-10%', '10%'],
              y: ['10%', '-10%', '10%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 5,
            }}
          />
           {/* Animated Grid Lines */}
           <div className="absolute inset-0 z-0 opacity-15">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
               <defs>
                 <pattern id="ctaGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                   <motion.path 
                     d="M 80 0 L 0 0 0 80" 
                     fill="none" 
                     stroke="rgba(var(--border-rgb), 0.5)" 
                     strokeWidth="0.5"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                   />
                 </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#ctaGrid)" />
             </svg>
           </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center" // Slightly reduced max-width for better focus
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants} // Use the container variants for staggered effect
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight" // Adjusted sizes
              variants={itemVariants} // Animate this item
            >
              Let's Build <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Something</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }} // Synchronized delay
                />
              </span> Amazing
            </motion.h2>
            
            <motion.p
              variants={itemVariants} // Animate this item
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind or looking for a Product leader to drive AI innovation? Let's connect.
            </motion.p>
            
            <motion.div
              variants={itemVariants} // Animate this item
            >
              {/* Enhanced Button with subtle animation */}
              <Button 
                asChild 
                size="lg" 
                className="group shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Link href="/contact" className="flex items-center">
                  Get in Touch
                  {/* Icon with subtle scale and rotation */}
                  <motion.div 
                    className="ml-2"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            {/* Removed old decorative circles, replaced by animated grid background */}
            
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
