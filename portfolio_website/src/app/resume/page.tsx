"use client";

import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { resumeData, type Education, type Certification } from "@/data/resumeData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiDownload, FiArrowRight, FiBriefcase, FiBook, FiStar, FiCpu, FiCalendar, FiMapPin } from "react-icons/fi";
import Image from 'next/image';

// Timeline item component
const TimelineItem = ({ 
  children, 
  isLast = false,
  position = "right" 
}: { 
  children: React.ReactNode; 
  isLast?: boolean;
  position?: "left" | "right";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  
  return (
    <div ref={ref} className={`relative mb-20 flex items-start ${position === "left" ? "flex-row-reverse" : "flex-row"}`}>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-0.5 h-[calc(100%+5rem)] bg-gradient-to-b from-primary/80 to-primary/20 dark:from-primary/60 dark:to-primary/5" />
      )}
      
      {/* Center dot */}
      <div className="absolute left-1/2 top-3 -translate-x-1/2 flex items-center justify-center w-6 h-6 z-10">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }} 
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          className="w-3 h-3 rounded-full bg-primary shadow-glow"
        />
      </div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: position === "left" ? 20 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: position === "left" ? 20 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`w-[calc(50%-2rem)] mx-8 ${position === "left" ? "text-left" : "text-left"}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Skills section component
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  
  // Define skill categories
  const skillCategories = {
    technical: {
      title: "Technical",
      skills: resumeData.skills.filter(skill => 
        ["frontend", "backend", "database", "tools", "design"].includes(skill.type)
      ),
      icon: <FiCpu className="h-5 w-5 text-primary" />
    },
    product: {
      title: "Product Management",
      skills: resumeData.skills.filter(skill => skill.type === "product" || skill.type === "devops"),
      icon: <FiBriefcase className="h-5 w-5 text-primary" />
    },
    ai: {
      title: "AI & Data Science",
      skills: resumeData.skills.filter(skill => skill.type === "ai"),
      icon: <FiStar className="h-5 w-5 text-primary" />
    },
    industry: {
      title: "Industry Knowledge",
      skills: resumeData.skills.filter(skill => skill.type === "industry"),
      icon: <FiBook className="h-5 w-5 text-primary" />
    }
  };
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="mt-32 mb-24"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Professional Skills
        </h2>
      </div>
      
      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none" />
        <CardContent className="pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
              <motion.div 
                key={key}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                <div className="mb-5">
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-2 pb-2 border-b border-border/50">
                    {category.icon}
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                      whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <Badge 
                        className="px-3 py-1.5 text-sm font-medium bg-card hover:bg-card/80 border-border hover:border-primary/30 transition-colors shadow-sm"
                        variant="outline"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Certifications section component
const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  
  // Use actual certifications directly
  const certifications = resumeData.certifications as Certification[];
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Professional Certifications
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none" />
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-lg font-semibold leading-snug mb-1">{cert.name}</CardTitle> 
                <CardDescription className="text-sm flex items-center gap-2 text-muted-foreground">
                  {cert.logo && (
                    <Image 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      width={20} 
                      height={20} 
                      className="object-contain rounded-sm" 
                    />
                  )}
                  <span className="font-medium">{cert.issuer}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function ResumePage() {
  return (
    <Layout>
      <div className="container max-w-5xl mx-auto px-4 py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        </div>
        
        {/* Download Resume Button */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300">
            <a href="/resume/Jay_Rangi_Resume.pdf" download className="px-6 py-6 flex items-center gap-2">
              <FiDownload className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume PDF</span>
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
            </a>
          </Button>
        </motion.div>
        
        {/* Timeline - Experience Section */}
        <div className="relative">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Experience
            </h2>
          </div>
          
          {resumeData.experience.map((exp, index) => (
            <TimelineItem 
              key={index} 
              isLast={index === resumeData.experience.length - 1 && resumeData.education.length === 0}
              position={index % 2 === 0 ? "right" : "left"}
            >
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none" />
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <CardDescription className="text-base flex items-center gap-1 mt-1">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-1">•</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <FiMapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm flex items-center gap-1 shadow-sm">
                      <FiCalendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TimelineItem>
          ))}
        </div>
        
        {/* Timeline - Education Section */}
        {resumeData.education.length > 0 && (
          <div className="relative mt-28">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Education
              </h2>
            </div>
            
            {(resumeData.education as Education[]).map((edu, index) => (
              <TimelineItem
                key={index}
                isLast={index === resumeData.education.length - 1}
                position={index % 2 === 0 ? "right" : "left"}
              >
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none" />
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          <span className="font-medium">{edu.institution}</span>
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm flex items-center gap-1 shadow-sm">
                        <FiCalendar className="h-3 w-3" />
                        <span>{edu.period}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  {edu.description && (
                    <CardContent className="pb-6 text-muted-foreground">
                      {edu.description}
                    </CardContent>
                  )}
                </Card>
              </TimelineItem>
            ))}
          </div>
        )}
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Certifications Section */}
        <CertificationsSection />
      </div>

      {/* Add global styles */}
      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 15px 2px rgba(var(--primary-rgb), 0.3);
        }
      `}</style>
    </Layout>
  );
} 