"use client";

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiTag, FiExternalLink } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';
import { RiMindMap } from "react-icons/ri";
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';
import { cn } from '@/lib/utils';

type CaseStudyPageParams = {
  id: string;
};

export default function CaseStudyPage() {
  const params = useParams<CaseStudyPageParams>();
  const id = params.id;
  const currentCaseStudy = caseStudies.find(study => study.id === id);

  if (!currentCaseStudy) {
    notFound();
  }

  const otherCaseStudies = caseStudies.filter(study => study.id !== id);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <Layout>
      <div className="relative container mx-auto px-4 py-12 lg:py-16 max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">

          <aside className="hidden lg:block lg:col-span-2 sticky top-24 self-start max-h-[calc(100vh-10rem)] overflow-y-auto pr-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4 tracking-wider">Other Case Studies</h3>
              <nav>
                <ul>
                  {otherCaseStudies.map((study) => (
                    <li key={study.id} className="mb-2">
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className={cn(
                          "block text-sm py-1 text-gray-600 hover:text-gray-900 transition-colors duration-200",
                        )}
                      >
                        {study.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </aside>

          <main className="lg:col-span-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={sectionVariants} className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentCaseStudy.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center border border-gray-200"
                    >
                      <FiTag className="mr-1.5" size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 leading-tight">{currentCaseStudy.title}</h1>
                
                <div className="flex items-center text-gray-500 mb-6 text-sm">
                  <span className="font-medium">{currentCaseStudy.company}</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  {currentCaseStudy.summary}
                </p>
              </motion.div>

              <motion.div variants={sectionVariants} className="mb-12 relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  src={currentCaseStudy.coverImage}
                  alt={currentCaseStudy.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                />
              </motion.div>

              {[
                { title: 'The Challenge', content: currentCaseStudy.challenge },
                { title: 'The Solution', content: currentCaseStudy.solution },
                { title: 'Approach', content: currentCaseStudy.approach },
                { title: 'Results', content: currentCaseStudy.results },
                { title: 'Key Learnings', content: currentCaseStudy.learnings },
              ].map((section, index) => (
                <motion.section 
                  key={index} 
                  variants={sectionVariants} 
                  className="mb-12 prose prose-gray max-w-none prose-headings:font-semibold prose-headings:text-gray-800 prose-a:text-indigo-600 hover:prose-a:text-indigo-800"
                >
                  <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">{section.title}</h2>
                  <div className="text-gray-700 leading-relaxed">
                    <p>{section.content}</p> 
                  </div>
                </motion.section>
              ))}

            </motion.div>
          </main>

          <aside className="hidden lg:block lg:col-span-2 sticky top-24 self-start max-h-[calc(100vh-10rem)] overflow-y-auto overflow-x-hidden">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="pl-4 overflow-hidden"
             >
                {(currentCaseStudy.figmaLink || currentCaseStudy.whimsicalLink) && (
                  <>
                    <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4 tracking-wider">Project Links</h3>
                    <div className="space-y-3">
                      {currentCaseStudy.figmaLink && currentCaseStudy.figmaLink !== '#' && (
                        <a 
                          href={currentCaseStudy.figmaLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                        >
                          <SiFigma className="mr-2 text-pink-500 flex-shrink-0" size={16} />
                          <span className="mr-1 truncate group-hover:underline">Figma</span>
                          <FiExternalLink className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0" size={14}/>
                        </a>
                      )}
                      {currentCaseStudy.whimsicalLink && currentCaseStudy.whimsicalLink !== '#' && (
                         <a 
                          href={currentCaseStudy.whimsicalLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                        >
                          <RiMindMap className="mr-2 text-blue-500 flex-shrink-0" size={16} /> 
                          <span className="mr-1 truncate group-hover:underline">Whimsical</span>
                           <FiExternalLink className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0" size={14}/>
                        </a>
                      )}
                    </div>
                  </>
                )}
            </motion.div>
          </aside>
        </div>
      </div>
    </Layout>
  );
} 