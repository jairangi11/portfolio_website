"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiBriefcase } from "react-icons/fi";
import { resumeData } from "@/data/resumeData";

interface ProfileCardProps {
  name?: string;
  title?: string;
  subtitle?: string;
  imagePath?: string;
}

export function ProfileCard({
  name = resumeData.name,
  title = resumeData.title,
  subtitle = "AI/ML Product Manager",
  imagePath = "/images/Jay Rangi.jpg" // Adding leading slash for public directory
}: ProfileCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shinePosition, setShinePosition] = useState(0);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Get top skills from resumeData
  const topSkills = resumeData.skills
    .filter(skill => skill.type === "product" || skill.type === "ai")
    .slice(0, 5);
    
  // Extract key accomplishments from current role
  const createAccomplishmentSummary = () => {
    const currentRole = resumeData.experience[0];
    // Look for achievements with metrics and AI references
    const keyPoints = currentRole.description
      .filter(desc => 
        desc.includes("AI") || 
        desc.includes("increased") || 
        desc.includes("improving") || 
        desc.includes("boosting") ||
        desc.includes("%") ||
        desc.includes("$")
      )
      .slice(0, 2); // Take top 2 accomplishments
      
    if (keyPoints.length > 0) {
      // Extract the key metrics and achievements
      return keyPoints.map(point => {
        // Shorten the point by removing extra details
        return point
          .replace(/Spearheaded technical product management for /g, '')
          .replace(/, generating over \$100,000 in ARR/g, '')
          .replace(/across the Gulf region/g, '');
      }).join(' ');
    }
    
    // Fallback to first description if no key points found
    return currentRole.description[0];
  };

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
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
      setShinePosition(shineX);
    };
    
    // Add initial tilt when component mounts
    setRotateX(2);
    setRotateY(-1);
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-full perspective-1000" ref={cardRef}>
      <motion.div
        className="relative w-[500px] h-[700px] rounded-2xl overflow-hidden"
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
          type: "spring",
          stiffness: 80,
          damping: 30
        }}
      >
        {/* Shiny Black Background */}
        <div className="absolute inset-0 bg-black rounded-2xl backdrop-blur-xl border border-zinc-800" />
        
        {/* Shiny Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-80 rounded-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(60,60,60,0.3),rgba(0,0,0,0))] rounded-2xl" />
        
        {/* Accent Design Elements */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-zinc-500/10 rounded-full blur-3xl -translate-y-12 translate-x-12 opacity-40" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-zinc-400/10 rounded-full blur-3xl translate-y-8 -translate-x-8 opacity-40" />
        
        {/* Enhanced Shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent w-full h-full"
          style={{
            backgroundSize: "200% 100%",
            transformStyle: "preserve-3d",
          }}
          animate={{
            x: `${shinePosition}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 30
          }}
        />
        
        {/* Card Content */}
        <div className="relative w-full h-full p-9 flex flex-col text-white">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="text-3xl font-bold tracking-tight text-white">{title}</div>
              <div className="text-2xl font-semibold text-white mt-2">{name}</div>
              <div className="text-base text-zinc-300 font-medium mt-2">{subtitle}</div>
            </div>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-700 shadow-lg bg-zinc-800 flex items-center justify-center">
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
          <div className="mb-14">
            <div className="flex items-center mb-4">
              <FiBriefcase className="w-5 h-5 text-zinc-400 mr-2.5" />
              <div className="text-base font-medium text-white">Latest Role</div>
            </div>
            <div className="bg-zinc-900/80 rounded-xl p-5 border border-zinc-800 backdrop-blur-sm shadow-inner">
              <div className="text-lg font-medium text-white">
                {resumeData.experience[0].title}
              </div>
              <div className="text-sm text-zinc-300 mt-2">
                {resumeData.experience[0].company}
              </div>
              <div className="text-sm text-zinc-400 mt-1">
                {resumeData.experience[0].period}
              </div>
              <div className="text-sm text-zinc-300 mt-3 leading-relaxed line-clamp-3">
                Led AI product initiatives for PropTech insights platform, developing LLM-powered search features and predictive models.
              </div>
            </div>
          </div>
          
          {/* Key Skills */}
          <div>
            <div className="flex items-center mb-4">
              <FiAward className="w-5 h-5 text-zinc-400 mr-2.5" />
              <div className="text-base font-medium text-white">Key Skills</div>
            </div>
            <div className="flex flex-wrap gap-3">
              {topSkills.map((skill, index) => (
                <div key={index} className="text-sm bg-zinc-800 rounded-full px-4 py-2 border border-zinc-700 shadow-sm">
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