"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { resumeData } from "@/data/resumeData";
import React from "react";
import { useNavigationAnimationControl } from "@/hooks/useNavigationAnimationControl";
import { HeroSection } from "@/components/landing/hero-section";
import { CompaniesSection } from "@/components/landing/companies-section";
import { ExpertiseSection } from "@/components/landing/expertise-section";
import { CtaSection } from "@/components/landing/cta-section";

// Define types for dynamic expertise data
interface ExpertiseArea {
  title: string;
  icon: React.ReactElement;
  description: string;
  skills: string[];
}

// Function to categorize skills and generate expertise areas
const getExpertiseAreas = (): ExpertiseArea[] => {
  const { FiCpu, FiLayers, FiCode, FiGrid, FiTool } = require("react-icons/fi");

  const skills = resumeData.skills;

  // Define categories and their corresponding icons and descriptions
  const areasMap: { [key: string]: Omit<ExpertiseArea, 'skills'> } = {
    ai: {
      title: "AI & Data Science",
      icon: <FiCpu className="h-6 w-6" />,
      description: "Leveraging AI/ML models like NLP, Prediction, Classification, and Generative AI to build intelligent solutions and drive data-driven insights.",
    },
    product: {
      title: "Product Management & Strategy",
      icon: <FiLayers className="h-6 w-6" />,
      description: "Defining product vision, creating strategic roadmaps, managing backlogs (including KPIs), and leading Go-to-Market strategies with a focus on growth.",
    },
    tech: { // Combine relevant technical types
      title: "Technical Proficiency",
      icon: <FiCode className="h-6 w-6" />,
      description: "Developing robust solutions using Python, SQL, API integrations, Cloud technologies, and applying Agile methodologies for efficient development.",
    },
    industry: {
      title: "Industry Expertise",
      icon: <FiGrid className="h-6 w-6" />,
      description: "Applying product and technical skills within SaaS, Fintech, PropTech, and E-commerce domains to address specific industry challenges.",
    },
     // Add a category for tools/design if needed, or merge into tech/product
     tools: {
       title: "Tools & Analytics",
       icon: <FiTool className="h-6 w-6" />, // Example, replace if needed
       description: "Utilizing Power BI, Tableau, Mixpanel, CleverTap, Adobe Analytics, Figma, and JIRA for analysis, design, and project management."
     }
  };

  // Group skills by category
  const groupedSkills: { [key: string]: string[] } = {};
  skills.forEach(skill => {
    let categoryKey = skill.type;
    // Consolidate technical skills
    if (['frontend', 'database', 'backend', 'devops', 'cloud'].includes(skill.type)) {
      categoryKey = 'tech';
    }
    // Assign KPIs to product management
    if (skill.name === 'KPIs') {
      categoryKey = 'product';
    }
     // Consolidate tools/design
     if (['tools', 'design'].includes(skill.type)) {
       categoryKey = 'tools';
     }

    if (!groupedSkills[categoryKey]) {
      groupedSkills[categoryKey] = [];
    }
    // Avoid duplicating KPIs if already listed under product type
    if (!(categoryKey === 'product' && skill.name === 'KPIs' && groupedSkills[categoryKey].includes(skill.name))) {
         groupedSkills[categoryKey].push(skill.name);
    }
  });

  // Build the final expertise areas array
  const expertiseItems: ExpertiseArea[] = Object.keys(areasMap)
    .filter(key => groupedSkills[key] && groupedSkills[key].length > 0) // Only include areas with skills
    .map(key => ({
      ...areasMap[key],
      skills: groupedSkills[key],
    }));

  // Ensure we have 4 main areas by combining if necessary or selecting top 4
  // For simplicity, let's stick to the defined main categories if they exist
  const primaryKeys = ['ai', 'product', 'tech', 'industry'];
  let finalAreas = primaryKeys
    .map(key => expertiseItems.find(item => item.title === areasMap[key].title))
    .filter((item): item is ExpertiseArea => item !== undefined); // Type guard

   // If we have fewer than 4, add 'Tools & Analytics' if available
   if (finalAreas.length < 4) {
     const toolsArea = expertiseItems.find(item => item.title === "Tools & Analytics");
     if (toolsArea) {
       finalAreas.push(toolsArea);
     }
   }

   // Limit to 4 if more were generated
   return finalAreas.slice(0, 4);
};

export default function Home() {
  const isNavigating = useNavigationAnimationControl();
  
  const expertiseItems = getExpertiseAreas();
  const companies = [
    {
      name: "Quara Holdings",
      logo: "/images/company_logos/Quara_holding.png",
      role: "Product Manager - AI",
      period: "08/2023 – 03/2025",
      description: "AI-powered PropTech insights platform",
      website: "https://www.quaraholding.com/"
    },
    {
      name: "foundit",
      logo: "/images/company_logos/foundit.png",
      role: "Associate Product Manager",
      period: "01/2022 – 08/2023",
      description: "UX and onboarding across 9 markets",
      website: "https://www.foundit.in/"
    },
    {
      name: "Freecharge",
      logo: "/images/company_logos/Freecharge_logo.png",
      role: "Associate Product Manager",
      period: "02/2021 – 01/2022",
      description: "Digital payments & fintech solutions",
      website: "https://www.freecharge.in/"
    },
    {
      name: "Shaadi.com",
      logo: "/images/company_logos/Shaadi.png",
      role: "Management Trainee - Product",
      period: "06/2020 – 02/2021",
      description: "AI-driven matchmaking optimization",
      website: "https://www.shaadi.com/"
    },
    {
      name: "Lenskart",
      logo: "/images/company_logos/Lenskart-Logo.png",
      role: "Marketing Intern",
      period: "04/2019 – 05/2019",
      description: "Sales & market optimization",
      website: "https://www.lenskart.com/"
    },
    {
      name: "Petrofac",
      logo: "/images/company_logos/Petrofac.png",
      role: "Software Developer",
      period: "01/2017 – 07/2017",
      description: "Remote monitoring system development",
      website: "https://www.petrofac.com/"
    }
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15,
      },
    },
  };

  // Define the subset of resumeData needed by HeroSection
  const heroResumeData = {
      name: resumeData.name,
      title: resumeData.title
  };

  return (
    <Layout>
      {/* Render Hero Section */}
      <HeroSection resumeData={heroResumeData} isNavigating={isNavigating} />

      {/* Render Companies Section */}
      <CompaniesSection companies={companies} isNavigating={isNavigating} />

      {/* Render Expertise Section */}
      <ExpertiseSection 
        expertiseItems={expertiseItems} 
        containerVariants={containerVariants} 
        itemVariants={itemVariants} 
      />

      {/* Render CTA Section */}
      <CtaSection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants} 
      />
    </Layout>
  );
}
