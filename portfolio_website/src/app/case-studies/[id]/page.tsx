"use client";

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTag, FiExternalLink, FiList, FiLink, FiX, FiLayout, FiCheckCircle, FiBriefcase, FiUsers, FiBarChart2, FiSettings, FiAlertTriangle, FiShield, FiTrendingUp, FiZap } from 'react-icons/fi';
import { SiGooglesheets } from 'react-icons/si';
import { RiMindMap } from "react-icons/ri";
import Link from 'next/link';
import { caseStudies, CaseStudy } from '@/data/caseStudiesData';
import { DeelCaseStudyDetails } from '@/data/deel-global-payroll-data';
import Layout from '@/components/layout/Layout';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const renderBulletList = (items: string[]) => (
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

const renderDetailedSection = (title: string, content: React.ReactNode, icon?: React.ReactNode) => (
  <motion.div variants={sectionVariants} className="mb-8">
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
      <CardHeader className="border-b border-gray-100 px-6 py-4">
        <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
          {icon && <span className="mr-2 text-gray-500">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 text-gray-700 leading-relaxed">
        {content}
      </CardContent>
    </Card>
  </motion.div>
);

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

  const hasDetailedData = (study: CaseStudy): study is CaseStudy & { detailedData: DeelCaseStudyDetails } => {
    return study.id === 'deel-global-payroll' && study.detailedData !== undefined;
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

              {hasDetailedData(currentCaseStudy) ? (
                <>
                  {renderDetailedSection("Introduction", 
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Problem Statement</h4>
                        <p>{currentCaseStudy.detailedData.introduction.problemStatement}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Context</h4>
                        <p>{currentCaseStudy.detailedData.introduction.context}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Scope</h4>
                        <p><strong className='text-green-600'>In Scope:</strong> {currentCaseStudy.detailedData.introduction.scope.inScope}</p>
                        <p><strong className='text-red-600'>Out of Scope:</strong> {currentCaseStudy.detailedData.introduction.scope.outOfScope}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Objectives</h4>
                        {renderBulletList(currentCaseStudy.detailedData.introduction.objectives)}
                      </div>
                       <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Assumptions</h4>
                        {renderBulletList(currentCaseStudy.detailedData.introduction.assumptions)}
                      </div>
                    </div>
                  )}

                  {renderDetailedSection("Research", 
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="market-trends">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">Market & Trends</AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-4">
                          <p>{currentCaseStudy.detailedData.research.marketTrends.summary}</p>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-gray-600">Area</TableHead>
                                <TableHead className="text-gray-600">Key Trend/Observation</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                              {currentCaseStudy.detailedData.research.marketTrends.trendsTable.map((trend, i) => (
                                <TableRow key={i}>
                                  <TableCell className="font-medium">{trend.area}</TableCell>
                                  <TableCell>{trend.trend}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="primary-research">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">Primary Research (Simulated)</AccordionTrigger>
                         <AccordionContent className="pt-4 space-y-4">
                           <p>{currentCaseStudy.detailedData.research.primaryResearch.simulationSummary}</p>
                           <h5 className="font-semibold">Personas Defined:</h5>
                           {renderBulletList(currentCaseStudy.detailedData.research.primaryResearch.personasDefined)}
                           <h5 className="font-semibold">Synthesized Findings:</h5>
                           {renderBulletList(currentCaseStudy.detailedData.research.primaryResearch.synthesizedFindings)}
                           <h5 className="font-semibold">Personas Summary:</h5>
                           <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-gray-600">Attribute</TableHead>
                                  <TableHead className="text-gray-600">Maria Garcia</TableHead>
                                  <TableHead className="text-gray-600">David Chen</TableHead>
                                  <TableHead className="text-gray-600">Priya Sharma</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                                {currentCaseStudy.detailedData.research.primaryResearch.personasTable.map((persona, i) => (
                                  <TableRow key={i}>
                                    <TableCell className="font-medium">{persona.attribute}</TableCell>
                                    <TableCell>{persona.mariaGarcia}</TableCell>
                                    <TableCell>{persona.davidChen}</TableCell>
                                    <TableCell>{persona.priyaSharma}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="competitor-analysis">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">Competitor Analysis</AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-4">
                           <p>{currentCaseStudy.detailedData.research.competitorAnalysis.summary}</p>
                           <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-gray-600">Competitor</TableHead>
                                  <TableHead className="text-gray-600">Positioning</TableHead>
                                  <TableHead className="text-gray-600">Strengths</TableHead>
                                  <TableHead className="text-gray-600">Weaknesses</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                                {currentCaseStudy.detailedData.research.competitorAnalysis.competitorsTable.map((comp, i) => (
                                  <TableRow key={i}>
                                    <TableCell className="font-medium">{comp.competitor}</TableCell>
                                    <TableCell>{comp.positioning}</TableCell>
                                    <TableCell>{comp.strengths}</TableCell>
                                    <TableCell>{comp.weaknesses}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="pain-points">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">Prioritized Pain Points</AccordionTrigger>
                         <AccordionContent className="pt-4 space-y-4">
                           <h5 className="font-semibold text-red-600">High Priority:</h5>
                           {renderBulletList(currentCaseStudy.detailedData.research.painPoints.highPriority)}
                            <h5 className="font-semibold text-yellow-600">Medium Priority:</h5>
                           {renderBulletList(currentCaseStudy.detailedData.research.painPoints.mediumPriority)}
                           <h5 className="font-semibold text-gray-500">Low Priority:</h5>
                           {renderBulletList(currentCaseStudy.detailedData.research.painPoints.lowPriority)}
                           <p><strong className="font-semibold">Rationale:</strong> {currentCaseStudy.detailedData.research.painPoints.rationale}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                  
                   {renderDetailedSection("Solution Framing", 
                     <div className="space-y-4">
                       <div>
                         <h4 className="font-semibold text-gray-800 mb-1">Solution Hypothesis</h4>
                         <p>{currentCaseStudy.detailedData.solutionFraming.solutionHypothesis}</p>
                       </div>
                       <div>
                         <h4 className="font-semibold text-gray-800 mb-1">Value Proposition</h4>
                         <p><strong className='text-blue-600'>For Clients:</strong> {currentCaseStudy.detailedData.solutionFraming.valueProposition.forClients}</p>
                         <p><strong className='text-purple-600'>For Internal:</strong> {currentCaseStudy.detailedData.solutionFraming.valueProposition.forInternal}</p>
                       </div>
                       <div>
                         <h4 className="font-semibold text-gray-800 mb-1">High-Level Features</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                           {currentCaseStudy.detailedData.solutionFraming.highLevelFeatures.map(feature => (
                            <div key={feature.id} className="border border-gray-200 p-3 rounded-md bg-gray-50">
                              <h5 className="font-medium text-gray-700">{feature.name}</h5>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                           ))}
                         </div>
                       </div>
                     </div>
                   )}
                   
                  {renderDetailedSection("Artifacts", 
                    <div className="space-y-10">
                       {currentCaseStudy.whimsicalLink && currentCaseStudy.whimsicalLink !== '#' && (
                         <div>
                           <a 
                            href={currentCaseStudy.whimsicalLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group inline-flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-200 mb-3"
                           >
                             <h4 className="font-semibold flex items-center">
                               <RiMindMap className="mr-2 text-blue-500 flex-shrink-0"/> Whimsical Board
                             </h4>
                             <FiExternalLink className="ml-1.5 text-blue-500" size={14}/>
                           </a>
                           <iframe 
                             style={{border: '1px solid #e2e8f0', borderRadius: '8px'}} 
                             width="100%" 
                             height="450" 
                             src="https://whimsical.com/embed/SWF4dwiPDQzafhAw97XLgD@VsSo8s35VJ818wfvk9KJST"
                             title="Whimsical Board Embed"
                             loading="lazy"
                           ></iframe>
                         </div>
                       )}
                       {currentCaseStudy.wireframeLink && currentCaseStudy.wireframeLink !== '#' && (
                         <div>
                           <a 
                             href={currentCaseStudy.wireframeLink} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="group inline-flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-200 mb-3"
                           >
                             <h4 className="font-semibold flex items-center">
                               <FiLayout className="mr-2 text-purple-500 flex-shrink-0"/> Wireframe Dashboard
                             </h4>
                             <FiExternalLink className="ml-1.5 text-purple-500" size={14}/>
                           </a>
                           <iframe 
                             style={{border: '1px solid #e2e8f0', borderRadius: '8px'}} 
                             width="100%" 
                             height="450" 
                             src="https://jairangi11.github.io/portfolio_website/case-studies-content/deel-global-payroll/wireframes/admin_dashboard.html" 
                             title="Wireframe Embed"
                             loading="lazy"
                           ></iframe>
                         </div>
                       )}
                       {currentCaseStudy.sheetsLink && currentCaseStudy.sheetsLink !== '#' && (
                         <div>
                           <a 
                             href={currentCaseStudy.sheetsLink} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="group inline-flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 mb-3"
                           >
                             <h4 className="font-semibold flex items-center">
                               <SiGooglesheets className="mr-2 text-green-500 flex-shrink-0"/> Supporting Data Sheets
                             </h4>
                             <FiExternalLink className="ml-1.5 text-green-500" size={14}/>
                           </a>
                           <iframe 
                             style={{border: '1px solid #e2e8f0', borderRadius: '8px'}} 
                             width="100%" 
                             height="450" 
                             src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSja6R_oBjjIh5N3yvxfKs154AMAztYeKrwhtvEL2k5VHYFbrgAq7M7BRRJpGzcDkcnEL5y0JBWZOZ8/pubhtml?widget=true&amp;headers=false"
                             title="Google Sheets Embed"
                             loading="lazy"
                             >
                           </iframe>
                         </div>
                       )}
                     </div>
                  )}

                   {renderDetailedSection("Metrics & Measurement", 
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="north-star">
                          <AccordionTrigger className="text-lg font-medium hover:no-underline">North Star Metric</AccordionTrigger>
                          <AccordionContent className="pt-4 space-y-1">
                            <p><strong>Metric:</strong> {currentCaseStudy.detailedData.metricsMeasurement.northStarMetric.metric}</p>
                            <p><strong>Target:</strong> {currentCaseStudy.detailedData.metricsMeasurement.northStarMetric.target}</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="kpis">
                          <AccordionTrigger className="text-lg font-medium hover:no-underline">Key Performance Indicators (KPIs)</AccordionTrigger>
                          <AccordionContent className="pt-4">
                             <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-gray-600">Category</TableHead>
                                  <TableHead className="text-gray-600">Metric</TableHead>
                                  <TableHead className="text-gray-600">Target</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                                {currentCaseStudy.detailedData.metricsMeasurement.kpisByCategory.map((kpi, i) => (
                                  <TableRow key={i}>
                                    <TableCell className="font-medium">{kpi.category}</TableCell>
                                    <TableCell>{kpi.metric}</TableCell>
                                    <TableCell>{kpi.target}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="tracking-plan">
                          <AccordionTrigger className="text-lg font-medium hover:no-underline">Tracking & Reporting Plan</AccordionTrigger>
                          <AccordionContent className="pt-4 space-y-3">
                            <p><strong>Data Collection:</strong> {currentCaseStudy.detailedData.metricsMeasurement.trackingPlan.dataCollection}</p>
                            <p><strong>Baseline:</strong> {currentCaseStudy.detailedData.metricsMeasurement.trackingPlan.baseline}</p>
                            <p><strong>Reporting:</strong> {currentCaseStudy.detailedData.metricsMeasurement.trackingPlan.reporting}</p>
                            <p><strong>Monitoring:</strong> {currentCaseStudy.detailedData.metricsMeasurement.trackingPlan.monitoring}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                   )}

                   {renderDetailedSection("Conclusion", 
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Summary</h4>
                        <p>{currentCaseStudy.detailedData.conclusion.summary}</p>
                      </div>
                       <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Future Considerations</h4>
                        {renderBulletList(currentCaseStudy.detailedData.conclusion.futureConsiderations)}
                      </div>
                    </div>
                  )}
                  
                </>
              ) : (
                <>
                  {/* Removed the mapping logic as challenge, solution etc. no longer exist 
                  {[
                    { title: 'The Challenge', content: currentCaseStudy.challenge },
                    { title: 'The Solution', content: currentCaseStudy.solution },
                    { title: 'Approach', content: currentCaseStudy.approach },
                    { title: 'Results', content: currentCaseStudy.results },
                    { title: 'Key Learnings', content: currentCaseStudy.learnings },
                  ].map((section, index) => (
                    section.content && (
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
                    )
                  ))}
                  */}
                </>
              )}

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