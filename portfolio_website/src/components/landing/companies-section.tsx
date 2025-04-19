"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InfiniteCarousel } from "@/components/ui/infinite-carousel";
import { CompanyCard } from "@/components/landing/company-card";

// Define the shape of a single company object (could be imported if defined globally)
interface CompanyData {
  name: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  website: string;
}

interface CompaniesSectionProps {
  companies: CompanyData[];
  isNavigating: boolean;
}

export function CompaniesSection({ companies, isNavigating }: CompaniesSectionProps) {
  return (
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
              Companies I&apos;ve Worked With
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
        <InfiniteCarousel 
          isNavigating={isNavigating} 
          scrollSpeed={-100} 
          innerClassName="space-x-6 px-10" 
        >
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </InfiniteCarousel>
        
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
  );
} 