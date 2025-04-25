"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function CaseStudiesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    caseStudies.forEach(study => {
      study.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  const filteredStudies = useMemo(() => {
    if (selectedTags.length === 0) {
      return caseStudies;
    }
    return caseStudies.filter(study =>
      selectedTags.every(tag => study.tags.includes(tag))
    );
  }, [selectedTags]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const tagItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <Layout>
      <motion.main 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Case Studies
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my work through detailed case studies showcasing the challenges, solutions, and results.
          </p>
        </div>

        <motion.div 
          className="mb-16 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/20 flex flex-wrap justify-center gap-3"
          variants={tagContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {allTags.map(tag => (
            <motion.div
              key={tag}
              variants={tagItemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="outline"
                className={cn(
                  "cursor-pointer transition-all duration-300 ease-in-out",
                  "px-4 py-1.5 text-sm font-medium rounded-full border",
                  selectedTags.includes(tag) 
                    ? 'bg-primary text-primary-foreground border-primary shadow-md hover:bg-primary/90'
                    : 'bg-background/50 text-foreground/80 border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent'
                )}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStudies.length > 0 ? (
             filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                layout
              >
                <CaseStudyCard caseStudy={study} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-muted-foreground mt-8"
            >
              No case studies match the selected tags.
            </motion.p>
          )}
        </motion.div>
      </motion.main>
    </Layout>
  );
} 