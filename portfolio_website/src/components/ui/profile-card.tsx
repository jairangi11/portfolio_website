"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiBriefcase } from "react-icons/fi";
import { resumeData } from "@/data/resumeData";

interface ProfileCardProps {
  name?: string;
  title?: string;
  imagePath?: string;
}

export function ProfileCard({
  name = resumeData.name,
  title = resumeData.title,
  imagePath = "/images/Jay Rangi.jpg" // Adding leading slash for public directory
}: ProfileCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shinePosition, setShinePosition] = useState(0);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Define the specific skills to display
  const keySkills = [
    { name: "Product Strategy" },
    { name: "AI/ML Products" },
    { name: "GTM Strategy" },
    { name: "SaaS Platforms" }, 
    { name: "Data-Driven Decisions" },
  ];
    

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to card center
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from center (normalized -1 to 1)
      // Increased sensitivity from 4 to 6 for more responsive movement
      const rotateYValue = -((e.clientX - cardCenterX) / (rect.width / 2)) * 6;
      const rotateXValue = ((e.clientY - cardCenterY) / (rect.height / 2)) * 6;
      
      // Calculate shine position (0-100%)
      const shineX = ((e.clientX - rect.left) / rect.width) * 100;
      
      // Use requestAnimationFrame for smoother updates during mouse movement
      requestAnimationFrame(() => {
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        setShinePosition(shineX);
      });
    };
    
    // Add initial tilt when component mounts
    setRotateX(2);
    setRotateY(-1);
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-full perspective-1000 px-4 sm:px-0" ref={cardRef}>
      <motion.div
        className="relative w-full max-w-[500px] h-auto rounded-2xl overflow-visible"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        animate={{
          rotateX,
          rotateY,
          rotateZ: -1
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "linear"
        }}
      >
        {/* Shiny Black Background - using pure black */}
        <div className="absolute inset-0 bg-black rounded-2xl backdrop-blur-xl border border-zinc-800 z-10" />
        
        {/* Shiny Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-80 rounded-2xl z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(60,60,60,0.3),rgba(0,0,0,0))] rounded-2xl z-30" />
        
        {/* Accent Design Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-zinc-500/10 rounded-full blur-3xl -translate-y-12 translate-x-12 opacity-40 z-40" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-zinc-400/10 rounded-full blur-3xl translate-y-8 -translate-x-8 opacity-40 z-40" />
        
        {/* Enhanced Shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent w-full h-full z-40"
          style={{
            backgroundSize: "200% 100%",
            transformStyle: "preserve-3d",
            pointerEvents: "none", // Ensures shine doesn't capture clicks
          }}
          animate={{
            x: `${shinePosition}%`,
          }}
          transition={{
            type: "tween",
            duration: 0.1,
            ease: "linear"
          }}
        />
        
        {/* Card Content */}
        <div className="relative w-full h-full p-6 sm:p-9 flex flex-col text-white z-50">
          {/* Header */}
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</div>
              <div className="text-xl sm:text-2xl font-semibold text-white mt-1 sm:mt-2">{name}</div>
            </div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-zinc-700 shadow-lg bg-zinc-800 flex items-center justify-center shrink-0">
              {!imageError ? (
                <Image 
                  src={imagePath} 
                  alt={name}
                  width={96}
                  height={96}
                  style={{ 
                    objectFit: "cover", 
                    objectPosition: "top center",
                    height: "100%",
                    width: "100%"
                  }}
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-xs text-center text-zinc-400">{name.charAt(0)}{name.split(' ')[1]?.charAt(0)}</span>
              )}
            </div>
          </div>
          
          {/* Current Role */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center mb-3 sm:mb-4">
              <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 mr-2 sm:mr-2.5" />
              <div className="text-sm sm:text-base font-medium text-white">Latest Role</div>
            </div>
            <div className="bg-zinc-900/80 rounded-xl p-4 sm:p-5 border border-zinc-800 backdrop-blur-sm shadow-inner">
              <div className="text-base sm:text-lg font-medium text-white">
                {resumeData.experience[0].title}
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 mt-1 sm:mt-2">
                {resumeData.experience[0].company}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-0.5 sm:mt-1">
                {resumeData.experience[0].period}
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 mt-2 sm:mt-3 leading-relaxed line-clamp-2 sm:line-clamp-3">
                Spearheaded technical product management for an AI-driven PropTech platform, developing predictive models, LLM search, and chatbots in collaboration with cross-functional teams.
              </div>
            </div>
          </div>
          
          {/* Key Skills */}
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <FiAward className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 mr-2 sm:mr-2.5" />
              <div className="text-sm sm:text-base font-medium text-white">Key Skills</div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {keySkills.map((skill, index) => (
                <div key={index} className="text-xs sm:text-sm bg-zinc-800 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-zinc-700 shadow-sm">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 