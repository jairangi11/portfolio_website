"use client";

import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';

export default function CaseStudiesPage() {
  return (
    <Layout>
      <motion.main 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Case Studies
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my work through detailed case studies showcasing the challenges, solutions, and results.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.05), duration: 0.4 }}
            >
              <CaseStudyCard caseStudy={study} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.main>
    </Layout>
  );
} 