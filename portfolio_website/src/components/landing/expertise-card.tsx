"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
// Import Badge if uncommenting the skills section later
// import { Badge } from "@/components/ui/badge"; 

// Replicate the ExpertiseArea interface from page.tsx for props typing
interface ExpertiseArea {
  title: string;
  icon: React.ReactElement;
  description: string;
  skills: string[]; // Keep skills even if not displayed yet
}

interface ExpertiseCardProps {
  item: ExpertiseArea;
  // Pass variants from the parent if they need to be dynamic
  // itemVariants?: any; // Example if needed
}

export function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <motion.div
      // Apply itemVariants passed from parent or define locally
      // variants={itemVariants || defaultItemVariants} 
      whileHover={{ 
        y: -6, 
        scale: 1.03,
        boxShadow: '0 10px 25px -5px rgba(var(--primary-rgb), 0.1), 0 8px 10px -6px rgba(var(--primary-rgb), 0.1)',
        transition: { duration: 0.25, ease: "easeOut" } 
      }}
      className="h-full" // Ensure motion div takes full height for consistent layout
    >
      {/* Apply styling from Skills card */}
      <Card className="relative h-full border border-border/50 bg-card/50 group-hover:bg-card/60 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 group overflow-hidden">
        {/* Background gradient from Skills card */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none z-0" />

        {/* Keep existing Inner border highlight on hover, ensure z-index is appropriate */}
        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-300 pointer-events-none z-10"></div>
        
        {/* Keep existing Subtle glow effect, adjust z-index if needed */}
        <motion.div 
          className="absolute -inset-2 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-400 rounded-xl blur-lg z-10"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Ensure CardContent is above gradients/effects */}
        <CardContent className="p-6 relative z-20 flex flex-col h-full"> {/* Flex column for alignment */}
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

            {/* Optional: Display a few key skills from the list - kept commented out */}
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
          // The whileHover on the parent motion.div handles the animation
          // Apply hover effect directly here if preferred or needed
          // whileHover={{ width: "100%", transition: { duration: 0.3, ease: 'easeOut' } }} 
        />
      </Card>
    </motion.div>
  );
} 