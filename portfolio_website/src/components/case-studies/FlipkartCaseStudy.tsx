import React from 'react';
import { motion } from 'framer-motion';
import {
  FiInfo, FiTrendingUp, FiCheckSquare, FiLayout, FiLink, FiTarget, FiActivity, FiBarChart2, FiAlertTriangle, FiThumbsUp, FiExternalLink
} from 'react-icons/fi';
import { SiGooglesheets } from 'react-icons/si';
import { RiMindMap } from "react-icons/ri";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CaseStudy } from '@/data/caseStudiesData';
import {
  FlipkartCaseStudyDetails,
  MarketTrend as FlipkartMarketTrend,
  Persona as FlipkartPersona,
  Competitor as FlipkartCompetitor,
  Metric as FlipkartKpi,
  RolloutPhase as FlipkartRolloutPhase,
  Risk as FlipkartRisk
} from '@/data/flipkart-logistics-optimization-data';
import {
  renderDetailedSection,
  renderBulletList,
} from './CaseStudyComponents';

const renderFlipkartMarketTrendsTable = (trends: FlipkartMarketTrend[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-600">Area</TableHead>
          <TableHead className="text-gray-600">Key Trend/Observation</TableHead>
          <TableHead className="text-gray-600">Relevance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
        {trends.map((trend, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{trend.area}</TableCell>
            <TableCell>{trend.trend}</TableCell>
            <TableCell>{trend.relevance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

const renderFlipkartPersonasTable = (personas: FlipkartPersona[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-600">Attribute</TableHead>
          <TableHead className="text-gray-600">Anxious Anaya</TableHead>
          <TableHead className="text-gray-600">Operations Om</TableHead>
          <TableHead className="text-gray-600">Support Samira</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
        {personas.map((persona, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{persona.attribute}</TableCell>
            <TableCell>{persona.anxiousAnaya}</TableCell>
            <TableCell>{persona.operationsOm}</TableCell>
            <TableCell>{persona.supportSamira}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

const renderFlipkartCompetitorsTable = (competitors: FlipkartCompetitor[]) => (
     <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-600">Competitor</TableHead>
          <TableHead className="text-gray-600">Strengths</TableHead>
          <TableHead className="text-gray-600">Weaknesses</TableHead>
          <TableHead className="text-gray-600">Relevance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
        {competitors.map((comp, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{comp.competitor}</TableCell>
            <TableCell>{comp.strengths}</TableCell>
            <TableCell>{comp.weaknesses}</TableCell>
            <TableCell>{comp.relevance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

const renderFlipkartMetricsTable = (kpis: FlipkartKpi[]) => (
     <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-600">Category</TableHead>
          <TableHead className="text-gray-600">KPI</TableHead>
          <TableHead className="text-gray-600">Target</TableHead>
          <TableHead className="text-gray-600">Measurement</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
        {kpis.map((kpi, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{kpi.category}</TableCell>
            <TableCell>{kpi.kpi}</TableCell>
            <TableCell>{kpi.target}</TableCell>
            <TableCell>{kpi.measurementMethod || '-'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

const renderFlipkartRolloutTable = (rollout: FlipkartRolloutPhase[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-600">Phase</TableHead>
          <TableHead className="text-gray-600">Activities</TableHead>
          <TableHead className="text-gray-600">Focus</TableHead>
          <TableHead className="text-gray-600">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
        {rollout.map((phase, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{phase.phase}</TableCell>
            <TableCell>{phase.activities}</TableCell>
            <TableCell>{phase.focus}</TableCell>
            <TableCell>{phase.duration || '-'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

const renderFlipkartRisksTable = (risks: FlipkartRisk[]) => (
     <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-600">Category</TableHead>
          <TableHead className="text-gray-600">Description</TableHead>
          <TableHead className="text-gray-600">Likelihood</TableHead>
          <TableHead className="text-gray-600">Impact</TableHead>
          <TableHead className="text-gray-600">Mitigation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
        {risks.map((risk, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{risk.category}</TableCell>
            <TableCell>{risk.description}</TableCell>
            <TableCell>{risk.likelihood || '-'}</TableCell>
            <TableCell>{risk.impact || '-'}</TableCell>
            <TableCell>{risk.mitigation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

interface FlipkartCaseStudyProps {
  study: CaseStudy & { detailedData: FlipkartCaseStudyDetails };
}

const FlipkartCaseStudy: React.FC<FlipkartCaseStudyProps> = ({ study }) => {
  const detailedData = study.detailedData;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
       {renderDetailedSection("Introduction",
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Problem Statement</h4>
              <p>{detailedData.introduction.problemStatement}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Context</h4>
              <p>{detailedData.introduction.context}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Scope</h4>
              <h5 className="text-sm font-medium text-green-700 mt-2 mb-1">In Scope:</h5>
              {renderBulletList(detailedData.introduction.scope.inScope, 'text-sm')}
              <h5 className="text-sm font-medium text-red-700 mt-2 mb-1">Out of Scope:</h5>
              {renderBulletList(detailedData.introduction.scope.outOfScope, 'text-sm')}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Objectives</h4>
              {renderBulletList(detailedData.introduction.objectives)}
            </div>
             <div>
              <h4 className="font-semibold text-gray-800 mb-1">Assumptions</h4>
              {renderBulletList(detailedData.introduction.assumptions)}
            </div>
          </div>,
          <FiInfo />
        )}

        {renderDetailedSection("Research",
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="market-trends">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Market & Trends</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <p>{detailedData.research.marketTrends.summary}</p>
                {renderFlipkartMarketTrendsTable(detailedData.research.marketTrends.trendsTable)}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="primary-research">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Primary Research</AccordionTrigger>
               <AccordionContent className="pt-4 space-y-4">
                 <p>{detailedData.research.primaryResearch.simulationSummary}</p>
                 <h5 className="font-semibold">Personas Defined:</h5>
                 {renderBulletList(detailedData.research.primaryResearch.personasDefined)}
                 <h5 className="font-semibold">Synthesized Findings (Key Pain Points):</h5>
                 {renderBulletList(detailedData.research.primaryResearch.synthesizedFindings)}
                 <h5 className="font-semibold">Personas Summary:</h5>
                 {renderFlipkartPersonasTable(detailedData.research.primaryResearch.personasTable)}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="competitor-analysis">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Competitor Analysis</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                 <p>{detailedData.research.competitorAnalysis.summary}</p>
                 {renderFlipkartCompetitorsTable(detailedData.research.competitorAnalysis.competitorsTable)}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pain-points">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Prioritized Pain Points</AccordionTrigger>
               <AccordionContent className="pt-4 space-y-4">
                 <h5 className="font-semibold text-red-600">High Priority:</h5>
                 {renderBulletList(detailedData.research.painPoints.highPriority)}
                  <h5 className="font-semibold text-yellow-600">Medium Priority:</h5>
                 {renderBulletList(detailedData.research.painPoints.mediumPriority)}
                 <h5 className="font-semibold text-gray-500">Low Priority:</h5>
                 {renderBulletList(detailedData.research.painPoints.lowPriority)}
                 <p><strong className="font-semibold">Rationale:</strong> {detailedData.research.painPoints.rationale}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>,
          <FiTrendingUp />
        )}

        {renderDetailedSection("Solution Framing",
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Refined User Personas</h4>
               <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="persona-anaya">
                   <AccordionTrigger className="text-md font-medium hover:no-underline text-blue-700">Anxious Anaya (Shopper)</AccordionTrigger>
                   <AccordionContent className="pt-2 space-y-1 text-sm">
                     <p><strong>Goals:</strong> {detailedData.solutionFraming.userPersonasRefined.anxiousAnaya.goals}</p>
                     <p><strong>Pain Points:</strong> {detailedData.solutionFraming.userPersonasRefined.anxiousAnaya.painPoints}</p>
                   </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="persona-om">
                   <AccordionTrigger className="text-md font-medium hover:no-underline text-purple-700">Operations Om (Logistics Mgr)</AccordionTrigger>
                    <AccordionContent className="pt-2 space-y-1 text-sm">
                     <p><strong>Goals:</strong> {detailedData.solutionFraming.userPersonasRefined.operationsOm.goals}</p>
                     <p><strong>Pain Points:</strong> {detailedData.solutionFraming.userPersonasRefined.operationsOm.painPoints}</p>
                   </AccordionContent>
                 </AccordionItem>
                  <AccordionItem value="persona-samira">
                   <AccordionTrigger className="text-md font-medium hover:no-underline text-green-700">Support Samira (Agent)</AccordionTrigger>
                    <AccordionContent className="pt-2 space-y-1 text-sm">
                     <p><strong>Goals:</strong> {detailedData.solutionFraming.userPersonasRefined.supportSamira.goals}</p>
                     <p><strong>Pain Points:</strong> {detailedData.solutionFraming.userPersonasRefined.supportSamira.painPoints}</p>
                   </AccordionContent>
                 </AccordionItem>
               </Accordion>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Solution Hypothesis</h4>
              <p>{detailedData.solutionFraming.solutionHypothesis}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Value Proposition</h4>
              <p><strong className='text-blue-600'>For Customers:</strong> {detailedData.solutionFraming.valueProposition.forCustomers}</p>
              <p><strong className='text-purple-600'>For Operations:</strong> {detailedData.solutionFraming.valueProposition.forOperations}</p>
              <p><strong className='text-green-600'>For Support:</strong> {detailedData.solutionFraming.valueProposition.forSupport}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">High-Level Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {detailedData.solutionFraming.highLevelFeatures.map(feature => (
                  <div key={feature.id} className="border border-gray-200 p-3 rounded-md bg-gray-50">
                    <h5 className="font-medium text-gray-700">{feature.name}</h5>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>,
          <FiCheckSquare />
        )}

         {renderDetailedSection("Detailed Design (Conceptual)",
           <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="func-req">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Functional Requirements</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3">
                 {detailedData.detailedDesign.functionalRequirements.map(area => (
                   <div key={area.area}>
                     <h5 className="font-semibold text-gray-700">{area.area}</h5>
                     {renderBulletList(area.requirements, 'text-sm')}
                   </div>
                 ))}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="nfr">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Non-Functional Requirements</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3">
                 {detailedData.detailedDesign.nonFunctionalRequirements.map(cat => (
                   <div key={cat.category}>
                     <h5 className="font-semibold text-gray-700">{cat.category}</h5>
                     {renderBulletList(cat.requirements, 'text-sm')}
                   </div>
                 ))}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="ia">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Information Architecture</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3">
                 {detailedData.detailedDesign.informationArchitecture.map(item => (
                   <div key={item.area}>
                     <h5 className="font-semibold text-gray-700">{item.area}</h5>
                     <p className="text-sm text-gray-600">{item.description}</p>
                   </div>
                 ))}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="flows">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">User Flows</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                 {detailedData.detailedDesign.userFlows.map(flow => (
                   <div key={flow.id} className="border-b pb-3 last:border-b-0">
                     <h5 className="font-semibold text-gray-700">{flow.name}</h5>
                     <p className="text-sm"><strong className='font-medium text-gray-600'>Trigger:</strong> {flow.trigger}</p>
                     <p className="text-sm"><strong className='font-medium text-gray-600'>Flow:</strong> {flow.flow}</p>
                     <p className="text-sm"><strong className='font-medium text-gray-600'>Outcome:</strong> {flow.outcome}</p>
                   </div>
                 ))}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="wireframes-desc">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Wireframes (Conceptual)</AccordionTrigger>
              <AccordionContent className="pt-4">
                  {renderBulletList(detailedData.detailedDesign.wireframesDescription)}
              </AccordionContent>
            </AccordionItem>
           </Accordion>,
            <FiLayout />
         )}

          {renderDetailedSection("Artifacts",
            <div className="space-y-10">
              {study.wireframeLink && study.wireframeLink !== '#' && (
                <div>
                  <a
                    href={study.wireframeLink}
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
                    src={study.wireframeLink}
                    title="Wireframe Embed"
                    loading="lazy"
                  ></iframe>
              </div>
              )}
               {study.whimsicalLink && study.whimsicalLink !== '#' && (
                <div>
                  <a
                    href={study.whimsicalLink}
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
                    src="https://whimsical.com/embed/SWF4dwiPDQzafhAw97XLgD@8ADn3nfZACasJLPEVMsfUScHLE21jh3KzpZH"
                    title="Whimsical Board Embed"
                    loading="lazy"
                  ></iframe>
                </div>
              )}
              {study.sheetsLink && study.sheetsLink !== '#' && (
                <div>
                  <a
                    href={study.sheetsLink}
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
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR0_XmIci2X3_uEfRt77fxORtFyZFdG2bp-eI7Tu5v4tsf3GGrskQnzEJ3ThVd5BpvUXGSKfJp3nCXU/pubhtml?widget=true&amp;headers=false"
                    title="Google Sheets Embed"
                    loading="lazy"
                  >
                  </iframe>
                </div>
              )}
            </div>,
            <FiLink />
        )}

        {renderDetailedSection("Metrics & Measurement",
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="north-star">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">North Star Metric</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-1">
                <p><strong>Metric:</strong> {detailedData.metricsMeasurement.northStarMetric.metric}</p>
                <p><strong>Description:</strong> {detailedData.metricsMeasurement.northStarMetric.description}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kpis">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Key Performance Indicators (KPIs)</AccordionTrigger>
              <AccordionContent className="pt-4">
                  {renderFlipkartMetricsTable(detailedData.metricsMeasurement.kpisByCategory)}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tracking-plan">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Tracking & Reporting Plan</AccordionTrigger>
              <AccordionContent className="pt-4">
                <p>{detailedData.metricsMeasurement.trackingPlan}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>,
          <FiTarget />
        )}

         {renderDetailedSection("Go-To-Market & Rollout",
            <Accordion type="single" collapsible className="w-full">
               <AccordionItem value="gtm-strategy">
                 <AccordionTrigger className="text-lg font-medium hover:no-underline">GTM Strategy</AccordionTrigger>
                 <AccordionContent className="pt-4 space-y-3">
                    <div>
                       <h5 className="font-semibold text-gray-700">Target Audience Segments</h5>
                       {renderBulletList(detailedData.goToMarket.gtmStrategy.targetAudienceSegments, 'text-sm')}
                     </div>
                     <div>
                       <h5 className="font-semibold text-gray-700">Communication Strategy</h5>
                       <p><strong className='font-medium text-gray-600'>Internal:</strong> {detailedData.goToMarket.gtmStrategy.communicationStrategy.internal}</p>
                       <p><strong className='font-medium text-gray-600'>External:</strong> {detailedData.goToMarket.gtmStrategy.communicationStrategy.external}</p>
                     </div>
                 </AccordionContent>
               </AccordionItem>
               <AccordionItem value="rollout-plan">
                 <AccordionTrigger className="text-lg font-medium hover:no-underline">Rollout Plan</AccordionTrigger>
                 <AccordionContent className="pt-4">
                   {renderFlipkartRolloutTable(detailedData.goToMarket.rolloutPlan)}
                 </AccordionContent>
               </AccordionItem>
            </Accordion>,
            <FiActivity />
         )}

         {renderDetailedSection("Business Aspects",
           <div className="space-y-4">
             <div>
               <h4 className="font-semibold text-gray-800 mb-1">Monetization/Pricing</h4>
               <p>{detailedData.businessAspects.monetizationPricing}</p>
             </div>
             <div>
               <h4 className="font-semibold text-gray-800 mb-1">Business Impact Analysis</h4>
               {detailedData.businessAspects.businessImpactAnalysis.map(impact => (
                 <div key={impact.area} className="mb-2">
                   <h5 className="font-medium text-gray-700">{impact.area}</h5>
                   {renderBulletList(impact.points, 'text-sm')}
                 </div>
               ))}
             </div>
           </div>,
           <FiBarChart2 />
         )}

         {renderDetailedSection("Risks & Mitigation",
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="risk-register">
               <AccordionTrigger className="text-lg font-medium hover:no-underline">Risk Register</AccordionTrigger>
                <AccordionContent className="pt-4">
                 {renderFlipkartRisksTable(detailedData.risksMitigation.riskAnalysis.risks)}
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="mitigation-overview">
               <AccordionTrigger className="text-lg font-medium hover:no-underline">Mitigation Overview</AccordionTrigger>
                <AccordionContent className="pt-4">
                 <p>{detailedData.risksMitigation.riskAnalysis.mitigationStrategiesOverview}</p>
               </AccordionContent>
            </AccordionItem>
          </Accordion>,
          <FiAlertTriangle />
         )}

         {renderDetailedSection("Conclusion",
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Summary</h4>
              <p>{detailedData.conclusion.summary}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Future Considerations</h4>
              {renderBulletList(detailedData.conclusion.futureConsiderations)}
            </div>
          </div>,
          <FiThumbsUp />
        )}
    </motion.div>
  );
};

export default FlipkartCaseStudy; 