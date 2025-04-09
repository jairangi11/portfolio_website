"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  type: string;
}

interface SkillMapProps {
  skills: Skill[];
  className?: string;
}

const SkillMap: React.FC<SkillMapProps> = ({ skills, className = '' }) => {
  // Group skills by type
  const skillsByType = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort skill types by name for consistent display
  const skillTypes = Object.keys(skillsByType).sort();

  // Color mapping for different skill types (using Tailwind classes)
  const colorMap: Record<string, { bg: string, text: string, border: string }> = {
    'frontend': { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
    'backend': { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200' },
    'design': { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-200' },
    'database': { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200' },
    'devops': { bg: 'bg-violet-100', text: 'text-violet-800', border: 'border-violet-200' },
    'tools': { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-200' },
    'product': { bg: 'bg-cyan-100', text: 'text-cyan-800', border: 'border-cyan-200' },
    'ai': { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-200' },
    'data': { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200' },
    'industry': { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-200' },
  };

  // Default styling for types not in the map
  const defaultStyle = { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Get the display name for a skill type category
  const getDisplayName = (type: string) => {
    switch(type) {
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend';
      case 'database': return 'Database';
      case 'devops': return 'DevOps';
      case 'tools': return 'Tools';
      case 'product': return 'Product Management';
      case 'ai': return 'AI';
      case 'data': return 'Data Science';
      case 'industry': return 'Industry Expertise';
      case 'design': return 'Design';
      default: return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="grid">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
              Grid View
            </div>
          </TabsTrigger>
          <TabsTrigger value="cloud">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="9" x2="15" y1="9" y2="9" /><line x1="9" x2="15" y1="15" y2="15" /><line x1="9" x2="9" y1="9" y2="15" /><line x1="15" x2="15" y1="9" y2="15" /></svg>
              Tag Cloud
            </div>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="grid" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillTypes.map(type => (
              <motion.div
                key={type}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <Card className="overflow-hidden backdrop-blur-sm border border-opacity-20 hover:shadow-md transition-all">
                  <CardHeader className={`py-3 px-4 ${colorMap[type]?.bg || defaultStyle.bg}`}>
                    <CardTitle className={`text-lg font-medium ${colorMap[type]?.text || defaultStyle.text}`}>
                      {getDisplayName(type)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {skillsByType[type].map(skill => (
                        <motion.div key={skill.name} variants={itemVariants}>
                          <Badge 
                            variant="outline" 
                            className={`
                              px-3 py-1.5 border text-sm font-medium
                              ${colorMap[type]?.border || defaultStyle.border}
                              ${colorMap[type]?.text || defaultStyle.text}
                              hover:${colorMap[type]?.bg || defaultStyle.bg} transition-colors
                            `}
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="cloud" className="w-full">
          <motion.div 
            className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm border border-opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3 p-4">
              {skillTypes.map(type => (
                <React.Fragment key={type}>
                  {skillsByType[type].map(skill => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5,
                        delay: Math.random() * 0.5  // Random delay for organic feel
                      }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="transition-all"
                    >
                      <Badge 
                        className={`
                          py-1.5 px-3 text-sm font-medium rounded-full border-2
                          ${colorMap[type]?.border || defaultStyle.border} 
                          ${colorMap[type]?.bg || defaultStyle.bg}
                          ${colorMap[type]?.text || defaultStyle.text}
                          hover:shadow-md transition-all
                        `}
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Hover over tags to interact with them. Cloud view shows all skills across categories.
              </p>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillMap; 