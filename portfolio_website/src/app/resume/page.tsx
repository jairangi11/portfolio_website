"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import SkillMap from "@/components/resume/SkillMap";
import { resumeData, type Education, type Certification } from "@/data/resumeData";

// Tab types
type ResumeTab = "summary" | "experience" | "education" | "skills" | "certifications";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<ResumeTab>("summary");

  // Tab switching handler
  const handleTabChange = (tab: ResumeTab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Product Manager specializing in AI-powered solutions, Machine Learning, SaaS, and B2B PropTech.
        </motion.p>
        
        {/* Download Resume Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="px-4 py-2 bg-accent-main text-white rounded-md flex items-center gap-2 hover:bg-accent-main/90 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume PDF
          </button>
        </motion.div>
        
        {/* Resume Tabs */}
        <div className="border rounded-lg overflow-hidden">
          <div className="flex flex-wrap">
            {[
              { id: "summary", label: "Summary" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" },
              { id: "certifications", label: "Certifications" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as ResumeTab)}
                className={`px-4 py-3 text-sm md:text-base font-medium ${
                  activeTab === tab.id
                    ? "bg-accent-main/10 border-b-2 border-accent-main text-accent-main"
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            {/* Tab Content */}
            {activeTab === "summary" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {resumeData.summary.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}
            
            {activeTab === "experience" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-accent-main pl-4">
                    <h3 className="text-xl font-semibold">{exp.title}, {exp.company}</h3>
                    <p className="text-muted-foreground">{exp.period} | {exp.location}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
            
            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {(resumeData.education as Education[]).map((edu, index) => (
                  <div key={index} className="border p-4 rounded-md">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution} ({edu.period})</p>
                    {edu.description && <p className="mt-2">{edu.description}</p>}
                  </div>
                ))}
              </motion.div>
            )}
            
            {activeTab === "skills" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Skill Map Visualization */}
                <SkillMap skills={resumeData.skills} title="Interactive Skill Map" />
                
                {/* Categorized Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills
                        .filter(skill => skill.category === "Technical")
                        .map(skill => (
                          <span key={skill.name} className="px-3 py-1 bg-accent-main/10 text-accent-main rounded-full text-sm">
                            {skill.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Product Management</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills
                        .filter(skill => skill.category === "Product")
                        .map(skill => (
                          <span key={skill.name} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                            {skill.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">AI & Data Science</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills
                        .filter(skill => skill.category === "AI")
                        .map(skill => (
                          <span key={skill.name} className="px-3 py-1 bg-accent-secondary/10 text-accent-secondary rounded-full text-sm">
                            {skill.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills
                        .filter(skill => skill.category === "Industry")
                        .map(skill => (
                          <span key={skill.name} className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
                            {skill.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === "certifications" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {resumeData.certifications.length > 0 ? (
                  (resumeData.certifications as Certification[]).map((cert, index) => (
                    <div key={index} className="border p-4 rounded-md">
                      <h3 className="text-xl font-semibold">{cert.name}</h3>
                      <p className="text-muted-foreground">
                        {cert.issuer} - {cert.date}
                      </p>
                      {cert.url && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-accent-main hover:underline mt-2 inline-block"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">Certifications will be added soon.</p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 