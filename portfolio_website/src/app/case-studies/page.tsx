"use client";

import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';

export default function CaseStudiesPage() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my work through detailed case studies showcasing the challenges, solutions, and results.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} caseStudy={study} index={index} />
          ))}
        </motion.div>
      </main>
    </Layout>
  );
} 