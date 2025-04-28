"use client";

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTag, FiExternalLink, FiList, FiLink, FiX, FiLayout, FiBriefcase } from 'react-icons/fi';
import { SiGooglesheets } from 'react-icons/si';
import { RiMindMap } from "react-icons/ri";
import Link from 'next/link';
import { caseStudies, CaseStudy } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";

// Import the new specific components
import DeelCaseStudy from '@/components/case-studies/DeelCaseStudy';
import FlipkartCaseStudy from '@/components/case-studies/FlipkartCaseStudy';
import GenericCaseStudy from '@/components/case-studies/GenericCaseStudy';
import AWSLambdaDeveloperUX from '@/components/case-studies/AWSLambdaDeveloperUX';

// Import specific detail types
import { DeelCaseStudyDetails } from '@/data/deel-global-payroll-data';
import { AwsLambdaCaseStudyDetails } from '@/data/aws-lambda-developer-ux-data';
import { FlipkartCaseStudyDetails } from '@/data/flipkart-logistics-optimization-data';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

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

  const hasProjectLinks = (currentCaseStudy?.wireframeLink && currentCaseStudy.wireframeLink !== '#') ||
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

  // Function to render the appropriate detailed content component
  const renderCaseStudyContent = (study: CaseStudy) => {
    switch (study.id) {
      case 'deel-global-payroll':
        // Use specific type assertion
        return <DeelCaseStudy study={study as CaseStudy & { detailedData: DeelCaseStudyDetails }} />;
      case 'flipkart-logistics-optimization':
        // Use specific type assertion
        return <FlipkartCaseStudy study={study as CaseStudy & { detailedData: FlipkartCaseStudyDetails }} />;
      case 'aws-lambda-developer-ux':
        // Use specific type assertion
        return <AWSLambdaDeveloperUX study={study as CaseStudy & { detailedData: AwsLambdaCaseStudyDetails }} />;
      // Add cases for other specific studies here...
      default:
        // Check if detailedData exists conceptually, even if not rendered specifically
        if (study.detailedData) {
            // Potentially render a generic detailed view or the specific one if needed
            console.warn(`Rendering GenericCaseStudy for ${study.id} which has detailedData. Consider creating a specific component.`);
            return <GenericCaseStudy />;
        } else {
            return <GenericCaseStudy />;
        }
    }
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
               <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4 tracking-wider">Other Studies</h3>
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
                    <Badge key={index} variant="secondary" className="font-medium">
                      <FiTag className="mr-1.5" size={12} />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 leading-tight">{currentCaseStudy.title}</h1>
                
                <div className="flex items-center text-gray-500 mb-6 text-sm">
                  <FiBriefcase className="mr-1.5" />
                  <span className="font-medium mr-4">{currentCaseStudy.company}</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  {currentCaseStudy.summary}
                </p>
              </motion.div>

              <motion.div variants={sectionVariants} className="mb-12 relative aspect-video w-full overflow-hidden rounded-lg shadow-lg border border-gray-200">
                <Image
                  src={currentCaseStudy.coverImage}
                  alt={`${currentCaseStudy.title} cover image`}
                  fill
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105 bg-gray-50"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                />
              </motion.div>

              {/* Detailed Content Section (Conditional Rendering) */}
              <motion.div variants={sectionVariants} className="mb-12">
                {renderCaseStudyContent(currentCaseStudy)}
              </motion.div>

            </motion.div>
          </main>

          <aside className="hidden lg:block lg:col-span-2 sticky top-24 self-start max-h-[calc(100vh-10rem)] overflow-y-auto overflow-x-hidden">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="pl-4 overflow-hidden"
             >
                {hasProjectLinks && (
                  <>
                    <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4 tracking-wider">Project Links</h3>
                    <div className="space-y-3">
                      {currentCaseStudy.wireframeLink && currentCaseStudy.wireframeLink !== '#' && (
                        <a 
                          href={currentCaseStudy.wireframeLink} 
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
                   {currentCaseStudy.wireframeLink && currentCaseStudy.wireframeLink !== '#' && (
                     <a
                       href={currentCaseStudy.wireframeLink}
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