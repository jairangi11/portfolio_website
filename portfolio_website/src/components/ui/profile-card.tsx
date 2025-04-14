"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiUser, FiAward, FiBriefcase } from "react-icons/fi";
import { resumeData } from "@/data/resumeData";

interface ProfileCardProps {
  name?: string;
  title?: string;
  subtitle?: string;
  cardNumber?: string;
}

export function ProfileCard({
  name = resumeData.name,
  title = resumeData.title,
  subtitle = "AI & PropTech Specialist",
  cardNumber = "PM 4323 7645 2828 0713"
}: ProfileCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shinePosition, setShinePosition] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Get top skills from resumeData
  const topSkills = resumeData.skills
    .filter(skill => skill.type === "product" || skill.type === "ai")
    .slice(0, 5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to card center
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from center (normalized -1 to 1)
      const rotateYValue = -((e.clientX - cardCenterX) / (rect.width / 2)) * 10;
      const rotateXValue = ((e.clientY - cardCenterY) / (rect.height / 2)) * 10;
      
      // Calculate shine position (0-100%)
      const shineX = ((e.clientX - rect.left) / rect.width) * 100;
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
      setShinePosition(shineX);
    };
    
    // Add initial tilt when component mounts
    setRotateX(8);
    setRotateY(-3);
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-full perspective-1000" ref={cardRef}>
      <motion.div
        className="relative w-96 h-[420px] rounded-xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        animate={{
          rotateX,
          rotateY,
          rotateZ: -3
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 30
        }}
      >
        {/* Card Background with Dark Glassmorphism */}
        <div className="absolute inset-0 glass-dark rounded-xl" />
        
        {/* Shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full h-full"
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
        <div className="relative w-full h-full p-7 flex flex-col text-white">
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <div className="text-2xl font-bold tracking-wide text-white">{title}</div>
              <div className="text-lg font-semibold text-white mt-1">{name}</div>
              <div className="text-sm text-gray-400 mt-1">{subtitle}</div>
            </div>
            <div className="rounded-full bg-primary/20 p-2.5">
              <FiUser className="w-6 h-6" />
            </div>
          </div>
          
          {/* Key Skills */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FiAward className="w-4 h-4 text-primary mr-2" />
              <div className="text-sm font-medium">Key Skills</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill, index) => (
                <div key={index} className="text-xs bg-white/5 rounded-full px-3 py-1.5 border border-white/5">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          
          {/* Current Role */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <FiBriefcase className="w-4 h-4 text-primary mr-2" />
              <div className="text-sm font-medium">Current Role</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
              <div className="text-sm font-medium text-white">
                {resumeData.experience[0].title}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {resumeData.experience[0].company}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {resumeData.experience[0].period}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-auto pt-3 border-t border-white/10">
            <div className="text-xs tracking-widest text-gray-500 text-center">{cardNumber}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 