"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the type for the company prop
interface CompanyData {
  name: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  website: string;
}

interface CompanyCardProps {
  company: CompanyData;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <motion.div 
      className="flex-shrink-0 w-[280px] md:w-[300px] group"
      whileHover={{ 
        y: -5, 
        transition: { duration: 0.2 } 
      }}
    >
      <Card className="h-full border border-border/50 bg-card/50 group-hover:bg-card/60 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden relative">
        {/* Background gradient from Skills card */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none z-0" />

        {/* Existing Shiny overlay effect on hover - keep it for visual flair, ensure z-index allows gradient below */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
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
        
        {/* Ensure CardContent is above gradients */}
        <CardContent className="p-5 relative z-20">
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
  );
} 