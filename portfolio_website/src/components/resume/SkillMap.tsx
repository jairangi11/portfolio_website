"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 1-10
  category: string;
  color: string;
}

interface SkillMapProps {
  skills: Skill[];
  title?: string;
}

export default function SkillMap({ skills, title = "Skills Visualization" }: SkillMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Draw the skill map on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    
    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    // Set up dimensions
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 50;
    
    // Draw central hub
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#6366f1'; // accent-main
    ctx.fill();
    
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 16px Inter';
    ctx.fillStyle = 'white';
    ctx.fillText('Skills', centerX, centerY);
    
    // Group skills by category
    const categories: Record<string, Skill[]> = {};
    skills.forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = [];
      }
      categories[skill.category].push(skill);
    });
    
    // Draw skills in a circular pattern by category
    const categoryKeys = Object.keys(categories);
    const categoryAngle = (Math.PI * 2) / categoryKeys.length;
    
    categoryKeys.forEach((category, categoryIndex) => {
      const angle = categoryIndex * categoryAngle;
      const categorySkills = categories[category];
      
      // Draw category label
      const labelRadius = maxRadius - 20;
      const labelX = centerX + Math.cos(angle) * labelRadius;
      const labelY = centerY + Math.sin(angle) * labelRadius;
      
      ctx.save();
      ctx.translate(labelX, labelY);
      ctx.rotate(angle + Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.font = 'bold 14px Inter';
      ctx.fillStyle = '#09090b'; // foreground color
      ctx.fillText(category, 0, 0);
      ctx.restore();
      
      // Draw skills in category
      categorySkills.forEach((skill, skillIndex) => {
        const skillRadius = 40 + (skill.level * 15);
        const skillAngleOffset = ((skillIndex - (categorySkills.length - 1) / 2) * 0.3);
        const skillAngle = angle + skillAngleOffset;
        
        const x = centerX + Math.cos(skillAngle) * (maxRadius * 0.6);
        const y = centerY + Math.sin(skillAngle) * (maxRadius * 0.6);
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = skill.color + '80'; // Add transparency
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw skill node
        ctx.beginPath();
        ctx.arc(x, y, skillRadius / 3, 0, Math.PI * 2);
        ctx.fillStyle = skill.color;
        ctx.fill();
        
        // Draw skill name
        ctx.font = '12px Inter';
        ctx.fillStyle = '#09090b'; // foreground color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Break long skill names into multiple lines
        const words = skill.name.split(' ');
        let line = '';
        let lineHeight = 15;
        let offsetY = 0;
        
        if (words.length === 1 && words[0].length < 10) {
          ctx.fillText(words[0], x, y);
        } else {
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            if (testLine.length > 10 && n > 0) {
              ctx.fillText(line, x, y + offsetY);
              line = words[n] + ' ';
              offsetY += lineHeight;
            } else {
              line = testLine;
            }
          }
          ctx.fillText(line, x, y + offsetY);
        }
        
        // Draw skill level
        ctx.font = 'bold 14px Inter';
        ctx.fillStyle = 'white';
        ctx.fillText(skill.level.toString(), x, y - skillRadius / 3);
      });
    });
    
  }, [skills]);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="bg-card border rounded-lg p-4 w-full">
        <canvas 
          ref={canvasRef} 
          className="w-full h-[500px]"
          style={{ touchAction: 'none' }}
        />
      </div>
    </motion.div>
  );
} 