"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";

interface CtaSectionProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export function CtaSection({ containerVariants, itemVariants }: CtaSectionProps) {
  return (
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
          className="max-w-3xl mx-auto text-center" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight"
            variants={itemVariants}
          >
            Let&apos;s <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Build</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }} 
              />
            </span> Great Products
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
             Seeking a product leader passionate about crafting exceptional user experiences and driving innovation? Let&apos;s discuss how I can contribute to your team.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
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
          
        </motion.div>
      </div>
    </section>
  );
} 