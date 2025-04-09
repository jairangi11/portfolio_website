"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { resumeData, type Education, type Certification } from "@/data/resumeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FiDownload, FiArrowRight, FiBriefcase, FiBook, FiAward, FiStar, FiCpu } from "react-icons/fi";

// Tab types
type ResumeTab = "summary" | "experience" | "education" | "skills" | "certifications";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<ResumeTab>("summary");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Define skill categories
  const skillCategories = {
    technical: {
      title: "Technical",
      skills: resumeData.skills.filter(skill => 
        ["frontend", "backend", "database", "tools", "design"].includes(skill.type)
      )
    },
    product: {
      title: "Product Management",
      skills: resumeData.skills.filter(skill => skill.type === "product" || skill.type === "devops")
    },
    ai: {
      title: "AI & Data Science",
      skills: resumeData.skills.filter(skill => skill.type === "ai")
    },
    industry: {
      title: "Industry Knowledge",
      skills: resumeData.skills.filter(skill => skill.type === "industry")
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-3"
            >
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/10">
                Product Manager
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Resume
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specializing in AI-powered solutions, Machine Learning, SaaS, and B2B PropTech
            </motion.p>
          </div>
          
          {/* Download Resume Button */}
          <motion.div 
            className="mb-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild className="group">
              <a href="/resume/Jay_Rangi_Resume.pdf" download>
                <FiDownload className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume PDF
              </a>
            </Button>
          </motion.div>
          
          {/* Resume Tabs */}
          <Tabs defaultValue="summary" className="w-full" onValueChange={(value) => setActiveTab(value as ResumeTab)}>
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger 
                value="summary" 
                className="group flex flex-col items-center justify-center gap-2 py-4 data-[state=active]:text-primary transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-data-[state=active]:bg-primary/20 transition-colors">
                  <FiStar className="h-4 w-4 text-primary group-data-[state=active]:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-data-[state=active]:text-foreground">Summary</span>
              </TabsTrigger>
              <TabsTrigger 
                value="experience" 
                className="group flex flex-col items-center justify-center gap-2 py-4 data-[state=active]:text-primary transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-data-[state=active]:bg-primary/20 transition-colors">
                  <FiBriefcase className="h-4 w-4 text-primary group-data-[state=active]:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-data-[state=active]:text-foreground">Experience</span>
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="group flex flex-col items-center justify-center gap-2 py-4 data-[state=active]:text-primary transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-data-[state=active]:bg-primary/20 transition-colors">
                  <FiBook className="h-4 w-4 text-primary group-data-[state=active]:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-data-[state=active]:text-foreground">Education</span>
              </TabsTrigger>
              <TabsTrigger 
                value="skills" 
                className="group flex flex-col items-center justify-center gap-2 py-4 data-[state=active]:text-primary transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-data-[state=active]:bg-primary/20 transition-colors">
                  <FiCpu className="h-4 w-4 text-primary group-data-[state=active]:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-data-[state=active]:text-foreground">Skills</span>
              </TabsTrigger>
              <TabsTrigger 
                value="certifications" 
                className="group flex flex-col items-center justify-center gap-2 py-4 data-[state=active]:text-primary transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-data-[state=active]:bg-primary/20 transition-colors">
                  <FiAward className="h-4 w-4 text-primary group-data-[state=active]:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-data-[state=active]:text-foreground">Certifications</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-8 min-h-[600px] mb-12">
              <TabsContent value="summary" className="mt-0">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="space-y-6"
                >
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
                    <CardContent className="pt-6">
                      {resumeData.summary.map((paragraph, index) => (
                        <motion.p 
                          key={index}
                          variants={fadeInUp} 
                          className="mb-4 text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="experience" className="mt-0">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-6"
                >
                  {resumeData.experience.map((exp, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                              <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                              <CardDescription className="text-muted-foreground">
                                {exp.company} · {exp.location}
                              </CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                              {exp.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <FiArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="education" className="mt-0">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-6"
                >
                  {(resumeData.education as Education[]).map((edu, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                              <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                              <CardDescription className="text-muted-foreground">
                                {edu.institution}
                              </CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                              {edu.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        {edu.description && (
                          <CardContent className="pb-6 text-muted-foreground">
                            {edu.description}
                          </CardContent>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="skills" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle>Professional Skills</CardTitle>
                      <CardDescription>My technical expertise and professional capabilities</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2 pb-6">
                      <div className="space-y-10">
                        {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
                          <motion.div 
                            key={key}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
                          >
                            <div className="mb-5">
                              <h3 className="text-lg font-medium mb-3 flex items-center gap-2 pb-1 border-b border-border/50">
                                {key === "technical" && <FiCpu className="h-4 w-4 text-primary" />}
                                {key === "product" && <FiBriefcase className="h-4 w-4 text-primary" />}
                                {key === "ai" && <FiStar className="h-4 w-4 text-primary" />}
                                {key === "industry" && <FiBook className="h-4 w-4 text-primary" />}
                                {category.title}
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill.name}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                                  whileHover={{ y: -2, scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                  <Badge 
                                    className="px-3 py-1.5 text-sm font-medium bg-card hover:bg-card/90 border-border hover:border-primary/30 transition-colors shadow-sm"
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
              </TabsContent>
              
              <TabsContent value="certifications" className="mt-0">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-6"
                >
                  {resumeData.certifications.length > 0 ? (
                    (resumeData.certifications as Certification[]).map((cert, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-xl font-bold">{cert.name}</CardTitle>
                            <CardDescription className="text-muted-foreground">
                              {cert.issuer} · {cert.date}
                            </CardDescription>
                          </CardHeader>
                          {cert.url && (
                            <CardFooter>
                              <Button asChild variant="ghost" className="gap-2">
                                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                  View Certificate
                                  <FiArrowRight className="h-4 w-4" />
                                </a>
                              </Button>
                            </CardFooter>
                          )}
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
                      <CardContent className="pt-6 text-center">
                        <p className="text-muted-foreground italic py-8">Certifications will be added soon.</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
} 