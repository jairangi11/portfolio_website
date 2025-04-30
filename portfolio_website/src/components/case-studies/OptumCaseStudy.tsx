import React from 'react';
import { motion } from 'framer-motion';
import {
  FiInfo, FiTrendingUp, FiCheckSquare, FiLink, FiTarget, FiThumbsUp,
  FiExternalLink, FiLayout, FiActivity, FiBarChart2, FiAlertTriangle
} from 'react-icons/fi';
import { SiGooglesheets } from 'react-icons/si';
import { RiMindMap } from "react-icons/ri";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { CaseStudy } from '@/data/caseStudiesData';
import {
  OptumCaseStudyDetails,
  FunctionalRequirement, // Assuming similar structure
  NonFunctionalRequirement, // Assuming similar structure
  InformationArchitectureChange, // Adapted from Deel's IAItem
  UserFlow, // Assuming similar structure
  RolloutPhase, // Assuming similar structure
  BusinessImpact, // Assuming similar structure
  Risk, // Assuming similar structure
  Metric // Assuming similar structure
} from '@/data/optum-prior-auth-optimization-data';
import {
  renderDetailedSection,
  renderBulletList
} from './CaseStudyComponents';

// Helper to render Functional Requirements (similar to Deel)
const renderFunctionalRequirements = (requirements: FunctionalRequirement[]) => (
  <div className="space-y-3">
    {requirements.map(area => (
      <div key={area.featureArea}> {/* Adapted key */} 
        <h5 className="font-semibold text-gray-700">{area.featureArea}</h5>
        {renderBulletList(area.requirements, 'text-sm')}
      </div>
    ))}
  </div>
);

// Helper to render Non-Functional Requirements (similar to Deel)
const renderNonFunctionalRequirements = (requirements: NonFunctionalRequirement[]) => (
  <div className="space-y-3">
    {requirements.map(cat => (
      <div key={cat.category}>
        <h5 className="font-semibold text-gray-700">{cat.category}</h5>
        {renderBulletList(cat.requirements, 'text-sm')}
      </div>
    ))}
  </div>
);

// Helper for Information Architecture Changes
const renderInformationArchitecture = (items: InformationArchitectureChange[]) => (
  <div className="space-y-3">
    {items.map(item => (
      <div key={item.area}>
        <h5 className="font-semibold text-gray-700">{item.area}</h5>
        <p className="text-sm text-gray-600">{item.description}</p>
        {item.details && item.details.length > 0 && (
            <div className="pl-4 mt-1">
                {renderBulletList(item.details, 'text-xs text-gray-500')} 
            </div>
        )}
      </div>
    ))}
  </div>
);

// Helper to render User Flows (similar to Deel)
const renderUserFlows = (flows: UserFlow[]) => (
  <div className="space-y-4">
    {flows.map(flow => (
      <div key={flow.id} className="border-b pb-3 last:border-b-0">
        <h5 className="font-semibold text-gray-700">{flow.name} ({flow.actor})</h5>
        <p className="text-sm"><strong className='font-medium text-gray-600'>Flow:</strong> {flow.flowSteps.join(' -> ')}</p>
        {/* Optimization Focus removed as it wasn't in the Optum data structure */}
      </div>
    ))}
  </div>
);

// Helper to render Metrics Table
const renderMetricsTable = (metrics: Metric[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Category</TableHead>
        <TableHead className="text-gray-600">Metric</TableHead>
        <TableHead className="text-gray-600">Definition</TableHead>
        <TableHead className="text-gray-600">Target</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {metrics.map((kpi, i) => (
        <TableRow key={i}>
          <TableCell className="font-medium">{kpi.category}</TableCell>
          <TableCell>{kpi.metric}</TableCell>
          <TableCell>{kpi.definition}</TableCell>
          <TableCell>{kpi.target}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

// Helper to render Rollout Plan Table (complex structure)
const renderRolloutPlan = (phases: RolloutPhase[]) => (
    <div className="space-y-4">
        {phases.map((phase, i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-md bg-gray-50/50">
                <h5 className="font-semibold text-gray-800 mb-2">{phase.phase} ({phase.duration})</h5>
                <p className="text-sm mb-1"><strong className='font-medium text-gray-600'>Target Users:</strong> {phase.targetUsers}</p>
                <p className="text-sm mb-1"><strong className='font-medium text-gray-600'>Goal:</strong> {phase.goal}</p>
                <div className="mt-2">
                    <h6 className="font-medium text-gray-700 text-xs uppercase tracking-wider mb-1">Key Activities:</h6>
                    {renderBulletList(phase.keyActivities, 'text-xs')}
                </div>
                 <div className="mt-2">
                    <h6 className="font-medium text-gray-700 text-xs uppercase tracking-wider mb-1">Success Criteria:</h6>
                    {renderBulletList(phase.successCriteria, 'text-xs')}
                </div>
                 {phase.rollbackConditions && phase.rollbackConditions.length > 0 && (
                    <div className="mt-2">
                        <h6 className="font-medium text-red-700 text-xs uppercase tracking-wider mb-1">Rollback Conditions:</h6>
                        {renderBulletList(phase.rollbackConditions, 'text-xs text-red-600')}
                    </div>
                )}
            </div>
        ))}
    </div>
);

// Helper to render Business Impact (similar to Deel)
const renderBusinessImpact = (impacts: BusinessImpact[]) => (
  <div className="space-y-3">
    {impacts.map(impact => (
      <div key={impact.area} className="mb-2">
        <h5 className="font-medium text-gray-700">{impact.area}</h5>
        {renderBulletList(impact.points, 'text-sm')}
      </div>
    ))}
  </div>
);

// Helper to render Risks Table (similar to Deel, adjusted mitigation)
const renderRisksTable = (risks: Risk[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">ID</TableHead>
        <TableHead className="text-gray-600">Category</TableHead>
        <TableHead className="text-gray-600">Description</TableHead>
        <TableHead className="text-gray-600">Likelihood</TableHead>
        <TableHead className="text-gray-600">Impact</TableHead>
        <TableHead className="text-gray-600">Mitigation</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {risks.map((risk) => (
        <TableRow key={risk.id}>
          <TableCell className="font-medium">{risk.id}</TableCell>
          <TableCell>{risk.category}</TableCell>
          <TableCell>{risk.description}</TableCell>
          <TableCell>{risk.likelihood}</TableCell>
          <TableCell>{risk.impact}</TableCell>
          <TableCell className="text-xs">{risk.mitigation.join('; ')}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

interface OptumCaseStudyProps {
  study: CaseStudy & { detailedData: OptumCaseStudyDetails };
}

const OptumCaseStudy: React.FC<OptumCaseStudyProps> = ({ study }) => {
  const detailedData = study.detailedData;

  // Default embed links - replace with actual data if available
  const whimsicalEmbed = "https://whimsical.com/embed/SWF4dwiPDQzafhAw97XLgD@26TL6NGLXm18M44WpXaXRa6Ywmeyp19";
  const sheetsEmbed = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSyamlzEm54EAB9WI7xXbTVA6ntRA184XNVVJFxWIT8V5n4DkPs5gVipf6ed-WJYSpPLyITX1fxCAvO/pubhtml?widget=true&amp;headers=false";
  const wireframeEmbed = "https://jairangi11.github.io/portfolio_website/case-studies-content/optum-prior-auth-optimization/wireframes/provider_dashboard.html";

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
            <p><strong className='text-green-600'>In Scope:</strong> {detailedData.introduction.scope.inScope}</p>
            <p><strong className='text-red-600'>Out of Scope:</strong> {detailedData.introduction.scope.outOfScope}</p>
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-600">Area</TableHead>
                    <TableHead className="text-gray-600">Key Trend/Observation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                  {detailedData.research.marketTrends.trendsTable.map((trend, i) => (
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
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Primary Research</AccordionTrigger>
             <AccordionContent className="pt-4 space-y-4">
               <p>{detailedData.research.primaryResearch.simulationSummary}</p>
               <h5 className="font-semibold">Personas Defined:</h5>
               {renderBulletList(detailedData.research.primaryResearch.personasDefined)}
               <h5 className="font-semibold">Synthesized Findings:</h5>
               {renderBulletList(detailedData.research.primaryResearch.synthesizedFindings)}
               <h5 className="font-semibold">Personas Summary:</h5>
               <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-600">Attribute</TableHead>
                      <TableHead className="text-gray-600">Auth Coordinator Annie</TableHead>
                      <TableHead className="text-gray-600">Busy Physician Dr. Carter</TableHead>
                      <TableHead className="text-gray-600">Optum Review Nurse Rachel</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                    {detailedData.research.primaryResearch.personasTable.map((persona, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{persona.attribute}</TableCell>
                        <TableCell>{persona.authCoordinatorAnnie}</TableCell>
                        <TableCell>{persona.busyPhysicianBenCarter}</TableCell>
                        <TableCell>{persona.optumReviewNurseRachel}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="competitor-analysis">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Competitor Analysis</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
               <p>{detailedData.research.competitorAnalysis.summary}</p>
               <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-600">Competitor/Type</TableHead>
                      <TableHead className="text-gray-600">Offering/Focus</TableHead>
                      <TableHead className="text-gray-600">Strengths</TableHead>
                      <TableHead className="text-gray-600">Weaknesses</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                    {detailedData.research.competitorAnalysis.competitorsTable.map((comp, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{comp.competitorType}</TableCell>
                        <TableCell>{comp.offeringFocus}</TableCell>
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
               <h5 className="font-semibold text-red-600">Highest Priority (P0):</h5>
               {renderBulletList(detailedData.research.painPoints.highestPriority)}
                <h5 className="font-semibold text-yellow-600">Medium Priority (P1):</h5>
               {renderBulletList(detailedData.research.painPoints.mediumPriority)}
               <h5 className="font-semibold text-gray-500">Low Priority (P2):</h5>
               {renderBulletList(detailedData.research.painPoints.lowPriority)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
         <FiTrendingUp />
      )}

       {renderDetailedSection("Solution Framing",
         <div className="space-y-4">
           <div>
             <h4 className="font-semibold text-gray-800 mb-1">Solution Hypothesis</h4>
             <p>{detailedData.solutionFraming.solutionHypothesis}</p>
           </div>
           <div>
             <h4 className="font-semibold text-gray-800 mb-1">Value Proposition</h4>
             <p><strong className='text-blue-600'>For Providers:</strong> {detailedData.solutionFraming.valueProposition.forProviders}</p>
             <p><strong className='text-purple-600'>For Optum:</strong> {detailedData.solutionFraming.valueProposition.forOptum}</p>
             <p><strong className='text-green-600'>For Patients:</strong> {detailedData.solutionFraming.valueProposition.forPatients}</p>
           </div>
           <div>
             <h4 className="font-semibold text-gray-800 mb-1">Key Features</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
               {detailedData.solutionFraming.keyFeatures.map(feature => (
                <div key={feature.id} className="border border-gray-200 p-3 rounded-md bg-gray-50">
                  <h5 className="font-medium text-gray-700">{feature.name}</h5>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                  <p className="text-xs text-gray-500 mt-1">Addresses: {feature.addressesPainPoints.join(', ')}</p>
                </div>
               ))}
             </div>
           </div>
         </div>,
         <FiCheckSquare />
       )}

      {renderDetailedSection("Detailed Design",
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="func-req">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Functional Requirements</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderFunctionalRequirements(detailedData.detailedDesign.functionalRequirements)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="nfr">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Non-Functional Requirements</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderNonFunctionalRequirements(detailedData.detailedDesign.nonFunctionalRequirements)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ia">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Information Architecture Changes</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderInformationArchitecture(detailedData.detailedDesign.informationArchitecture)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flows">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">User Flows</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderUserFlows(detailedData.detailedDesign.userFlows)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
        <FiLayout />
      )}

      {/* Artifacts Section with Embeds */} 
      {renderDetailedSection("Artifacts",
        <div className="space-y-10">
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
                 src={whimsicalEmbed}
                 title="Whimsical Board Embed"
                 loading="lazy"
               ></iframe>
             </div>
           )}
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
                 src={wireframeEmbed} 
                 title="Wireframe Embed"
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
                 src={sheetsEmbed}
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
            <AccordionItem value="kpis">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Success Metrics & KPIs</AccordionTrigger>
              <AccordionContent className="pt-4">
                 {renderMetricsTable(detailedData.metricsMeasurement.metrics)}
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
                <h5 className="font-semibold text-gray-700 mb-1">Target Audience</h5>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Pilot/Beta:</strong> {detailedData.goToMarket.targetAudience.initialPilotBeta}</p>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Phase 1:</strong> {detailedData.goToMarket.targetAudience.phase1Rollout}</p>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Wider:</strong> {detailedData.goToMarket.targetAudience.widerRollout}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-1">Positioning & Messaging</h5>
                 <p className="text-sm mb-1"><strong className='font-medium text-gray-600'>Core Message:</strong> {detailedData.goToMarket.positioningMessaging.coreMessage}</p>
                 <h6 className="font-medium text-gray-600 text-xs uppercase tracking-wider mt-2 mb-1">Value Props:</h6>
                 {renderBulletList(detailedData.goToMarket.positioningMessaging.valueProps, 'text-sm')}
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-1">Communication Channels</h5>
                 <p className="text-sm"><strong className='font-medium text-gray-600'>Pre-Launch:</strong> {detailedData.goToMarket.communicationChannels.preLaunch.join(', ')}</p>
                 <p className="text-sm"><strong className='font-medium text-gray-600'>Launch/Wider:</strong> {detailedData.goToMarket.communicationChannels.launchWider.join(', ')}</p>
              </div>
               <div>
                <h5 className="font-semibold text-gray-700 mb-1">Sales & Support Enablement</h5>
                {renderBulletList(detailedData.goToMarket.salesSupportEnablement, 'text-sm')}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rollout-plan">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Rollout Plan Summary</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderRolloutPlan(detailedData.goToMarket.rolloutPlanSummary)}
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
            {renderBusinessImpact(detailedData.businessAspects.businessImpactAnalysis)}
          </div>
          {detailedData.businessAspects.overallSummary && (
            <div>
                <h4 className="font-semibold text-gray-800 mb-1">Overall Summary</h4>
                <p>{detailedData.businessAspects.overallSummary}</p>
            </div>
          )}
        </div>,
        <FiBarChart2 />
      )}

      {renderDetailedSection("Risks & Mitigation",
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="risk-register">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Risk Register</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderRisksTable(detailedData.risksMitigation.riskRegister)}
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

export default OptumCaseStudy; 