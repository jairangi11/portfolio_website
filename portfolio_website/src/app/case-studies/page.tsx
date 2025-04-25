"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiFilter, FiX } from 'react-icons/fi';
import { cn } from '@/lib/utils';

export default function CaseStudiesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

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

  const drawerVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { type: "spring", damping: 25, stiffness: 150 } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.3 } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
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
          className="mb-16 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/20 hidden md:flex flex-wrap justify-center gap-3"
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

        <div className="mb-8 text-center md:hidden"> 
          <Button 
            variant="outline"
            onClick={() => setIsFilterDrawerOpen(true)}
            className="inline-flex items-center gap-2 bg-card/50 border-border/40 hover:bg-accent"
          >
            <FiFilter className="h-4 w-4" />
            Filter by Tag
            {selectedTags.length > 0 && (
              <span className="ml-1.5 inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {selectedTags.length}
              </span>
            )}
          </Button>
        </div>

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

      <AnimatePresence>
        {isFilterDrawerOpen && (
          <>
            <motion.div
              key="filter-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsFilterDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              key="filter-drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border rounded-t-2xl shadow-2xl max-h-[60vh] overflow-y-auto md:hidden"
            >
               <div className="flex justify-between items-center p-4 border-b border-border sticky top-0 bg-background z-10">
                 <h3 className="text-lg font-semibold text-foreground">Filter by Tag</h3>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setIsFilterDrawerOpen(false)}
                   className="text-muted-foreground hover:text-foreground"
                   aria-label="Close filters"
                 >
                   <FiX size={20} />
                 </Button>
               </div>
               <div className="p-6 flex flex-wrap gap-3">
                  {allTags.map(tag => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "cursor-pointer transition-all duration-200 ease-in-out",
                        "px-3 py-1 text-sm rounded-full border",
                        selectedTags.includes(tag)
                          ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90'
                          : 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80'
                      )}
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
               </div>
               <div className="p-4 sticky bottom-0 bg-background border-t border-border mt-auto">
                 <Button onClick={() => setIsFilterDrawerOpen(false)} className="w-full">
                   View Results ({filteredStudies.length})
                 </Button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </Layout>
  );
} 