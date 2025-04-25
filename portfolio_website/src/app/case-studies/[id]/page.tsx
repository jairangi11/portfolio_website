"use client";

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTag, FiExternalLink, FiList, FiLink, FiX, FiLayout } from 'react-icons/fi';
import { SiGooglesheets } from 'react-icons/si';
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

  const [isStudiesDrawerOpen, setIsStudiesDrawerOpen] = useState(false);
  const [isLinksDrawerOpen, setIsLinksDrawerOpen] = useState(false);

  if (!currentCaseStudy) {
    notFound();
  }

  const otherCaseStudies = caseStudies.filter(study => study.id !== id);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const hasProjectLinks = (currentCaseStudy?.figmaLink && currentCaseStudy.figmaLink !== '#') ||
                         (currentCaseStudy?.whimsicalLink && currentCaseStudy.whimsicalLink !== '#') ||
                         (currentCaseStudy?.sheetsLink && currentCaseStudy.sheetsLink !== '#');

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
                {(currentCaseStudy.figmaLink || currentCaseStudy.whimsicalLink || currentCaseStudy.sheetsLink) && (
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
                          <FiLayout className="mr-2 text-purple-500 flex-shrink-0" size={16} />
                          <span className="mr-1 truncate group-hover:underline">Wireframes</span>
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
                      {currentCaseStudy.sheetsLink && currentCaseStudy.sheetsLink !== '#' && (
                         <a 
                          href={currentCaseStudy.sheetsLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                        >
                          <SiGooglesheets className="mr-2 text-green-500 flex-shrink-0" size={16} /> 
                          <span className="mr-1 truncate group-hover:underline">Sheets</span>
                           <FiExternalLink className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0" size={14}/>
                        </a>
                      )}
                    </div>
                  </>
                )}
            </motion.div>
          </aside>
        </div>

        <div className="lg:hidden fixed bottom-4 right-4 z-40 flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsStudiesDrawerOpen(true)}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            aria-label="Show other case studies"
          >
            <FiList size={20} />
          </motion.button>
          {hasProjectLinks && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsLinksDrawerOpen(true)}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-500 transition-colors"
              aria-label="Show project links"
            >
              <FiLink size={20} />
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {isStudiesDrawerOpen && (
            <>
              <motion.div
                key="studies-backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsStudiesDrawerOpen(false)}
                className="fixed inset-0 bg-black/30 z-50 lg:hidden"
              />
              <motion.div
                key="studies-drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed bottom-0 left-0 right-0 z-50 bg-white p-6 rounded-t-2xl shadow-2xl max-h-[70vh] overflow-y-auto lg:hidden"
              >
                 <div className="flex justify-between items-center mb-4 pb-2 border-b">
                   <h3 className="text-lg font-semibold text-gray-800">Other Case Studies</h3>
                   <button
                     onClick={() => setIsStudiesDrawerOpen(false)}
                     className="text-gray-500 hover:text-gray-800"
                     aria-label="Close"
                   >
                     <FiX size={24} />
                   </button>
                 </div>
                <nav>
                  <ul>
                    {otherCaseStudies.map((study) => (
                      <li key={study.id} className="mb-2">
                        <Link
                          href={`/case-studies/${study.id}`}
                          className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                          onClick={() => setIsStudiesDrawerOpen(false)}
                        >
                          {study.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </>
          )}

          {isLinksDrawerOpen && hasProjectLinks && (
             <>
              <motion.div
                key="links-backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsLinksDrawerOpen(false)}
                className="fixed inset-0 bg-black/30 z-50 lg:hidden"
              />
              <motion.div
                key="links-drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed bottom-0 left-0 right-0 z-50 bg-white p-6 rounded-t-2xl shadow-2xl max-h-[70vh] overflow-y-auto lg:hidden"
              >
                 <div className="flex justify-between items-center mb-4 pb-2 border-b">
                   <h3 className="text-lg font-semibold text-gray-800">Project Links</h3>
                   <button
                     onClick={() => setIsLinksDrawerOpen(false)}
                     className="text-gray-500 hover:text-gray-800"
                     aria-label="Close"
                   >
                     <FiX size={24} />
                   </button>
                 </div>
                <div className="space-y-4">
                   {currentCaseStudy.figmaLink && currentCaseStudy.figmaLink !== '#' && (
                     <a
                       href={currentCaseStudy.figmaLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 group"
                     >
                       <FiLayout className="mr-3 text-purple-500 flex-shrink-0" size={18} />
                       <span className="mr-1 group-hover:underline">Wireframes</span>
                       <FiExternalLink className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0 ml-auto" size={16}/>
                     </a>
                   )}
                   {currentCaseStudy.whimsicalLink && currentCaseStudy.whimsicalLink !== '#' && (
                      <a
                       href={currentCaseStudy.whimsicalLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 group"
                     >
                       <RiMindMap className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                       <span className="mr-1 group-hover:underline">Whimsical Board</span>
                        <FiExternalLink className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0 ml-auto" size={16}/>
                     </a>
                   )}
                   {currentCaseStudy.sheetsLink && currentCaseStudy.sheetsLink !== '#' && (
                      <a
                       href={currentCaseStudy.sheetsLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 group"
                     >
                       <SiGooglesheets className="mr-3 text-green-500 flex-shrink-0" size={18} />
                       <span className="mr-1 group-hover:underline">Google Sheet</span>
                        <FiExternalLink className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0 ml-auto" size={16}/>
                     </a>
                   )}
                 </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </Layout>
  );
} 