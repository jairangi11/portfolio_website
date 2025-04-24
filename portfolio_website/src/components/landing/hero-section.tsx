"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/ui/profile-card";
import { FiArrowRight } from "react-icons/fi";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
// Assuming resumeData structure is defined elsewhere or passed in
// import { resumeData } from "@/data/resumeData"; 

interface ResumeSummary {
  name: string;
  title: string;
  // Add other fields from resumeData if needed by ProfileCard
}

interface HeroSectionProps {
  resumeData: ResumeSummary; // Use a specific type for needed data
  // isNavigating is no longer needed here unless passed to Typewriter directly
  // isNavigating: boolean; 
}

// Define skills array within the component or pass as prop if needed elsewhere
const skills = ["AI-powered solutions", "Machine Learning", "SaaS", "B2B PropTech"];
// Scroll threshold can be moved to ScrollIndicator or kept here if used elsewhere
const scrollThreshold = 100; 

// New component for the scroll indicator
interface ScrollIndicatorProps {
  handleScrollDown: () => void;
}

function ScrollIndicator({ handleScrollDown }: ScrollIndicatorProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll tracking logic moved here
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    // Set initial position
    handleScroll(); 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition < scrollThreshold && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group z-30" // Ensure high z-index
          onClick={handleScrollDown} // Use passed handler
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground/40 group-hover:text-foreground/60 transition-colors duration-300"
            animate={{ y: ["0%", "20%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            <path
              d="M19.5 8.25L12 15.75L4.5 8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function HeroSection({ resumeData }: HeroSectionProps) {
  // Skills animation state (Typewriter effect will handle its own internal logic)
  // Remove scroll position state from HeroSection
  // const [scrollPosition, setScrollPosition] = useState(0);

  // Removed the scroll tracking useEffect from HeroSection
  
  // Scroll tracking logic is now in ScrollIndicator component

  // Function to scroll to the next section
  const handleScrollDown = () => {
    const section = document.getElementById('companies-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Make sure the parent section is relative for absolute positioning of the indicator
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
              className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mt-6 max-w-3xl md:max-w-xl lg:max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-foreground/80 font-normal">Data-driven </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary/80 to-primary/60 bg-clip-text text-transparent font-semibold">Product Manager</span>
              </span>
              <span className="text-foreground/80 font-normal"> specializing in </span>
              <span className="relative inline-block min-w-[200px] md:min-w-[250px] lg:min-w-[300px] min-h-[40px]"> 
                <TypewriterEffect 
                  words={skills.map(skill => ({ text: skill, className: "text-primary font-medium" }))} 
                  cursorClassName="bg-primary"
                  className="inline-block" // Ensures proper layout
                  // Pass the isNavigating prop to pause the effect if needed
                  // isPaused={isNavigating} // Uncomment if TypewriterEffect supports pausing
                />
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
            // Add margin-top on mobile (default), remove fixed height on mobile
            className="md:col-span-5 flex justify-center md:justify-end mt-12 md:mt-0 h-auto" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <ProfileCard 
              name={resumeData.name} // Passed via props
              title={resumeData.title} // Passed via props
              subtitle="AI/ML Product Manager" // Keep subtitle specific here or add to props if dynamic
            />
          </motion.div>
        </div>
        
        {/* Render the isolated ScrollIndicator component */}
        <ScrollIndicator handleScrollDown={handleScrollDown} />
      </div>
    </section>
  );
} 