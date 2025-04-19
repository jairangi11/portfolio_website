"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExpertiseCard } from "@/components/landing/expertise-card";

// Define the shape of expertise item data
interface ExpertiseArea {
  title: string;
  icon: React.ReactElement;
  description: string;
  skills: string[];
}

interface ExpertiseSectionProps {
  expertiseItems: ExpertiseArea[];
  containerVariants: Variants;
  itemVariants: Variants;
}

export function ExpertiseSection({
  expertiseItems,
  containerVariants,
  itemVariants
}: ExpertiseSectionProps) {
  return (
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
        {/* Wrap text block for container variant animation */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants} // Use container variants
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            variants={itemVariants} // Use item variants
          >
            Areas of <span className="relative inline-block text-primary">
              Specialization
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                // Keep underline animation separate as it's specific
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-muted-foreground text-lg mt-4"
            variants={itemVariants} // Use item variants
          >
            Leveraging technology to solve complex business challenges and deliver exceptional user experiences across various domains.
          </motion.p>
        </motion.div>

        {/* Animated Grid Container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants} // Use passed variants
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger earlier for smoother feel
        >
          {expertiseItems.map((item) => (
            // Pass itemVariants down to ExpertiseCard if it needs them for internal motion elements
            // Currently ExpertiseCard defines its own whileHover, but itemVariants could control the initial appearance
            <motion.div key={item.title} variants={itemVariants} className="h-full">
              <ExpertiseCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 