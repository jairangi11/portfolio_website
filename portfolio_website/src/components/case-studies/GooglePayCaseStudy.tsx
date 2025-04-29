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
  GooglePayCaseStudyDetails,
  MarketTrend,
  PersonaSummary,
  CompetitorSummary,
  FunctionalRequirement,
  NonFunctionalRequirement,
  InformationArchitectureItem,
  UserFlow,
  Metric,
  RolloutPhase,
  BusinessImpact,
  Risk
} from '@/data/google-pay-merchant-onboarding-data';
import {
  renderDetailedSection,
  renderBulletList
} from './CaseStudyComponents';

// --- Helper Functions for Rendering Tables --- //

const renderMarketTrendsTable = (trends: MarketTrend[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Area</TableHead>
        <TableHead className="text-gray-600">Key Trend/Observation</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {trends.map((trend, i) => (
        <TableRow key={i}>
          <TableCell className="font-medium">{trend.area}</TableCell>
          <TableCell>{trend.trend}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const renderPersonasSummaryTable = (personas: PersonaSummary[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Attribute</TableHead>
        <TableHead className="text-gray-600">Solo Online Seller</TableHead>
        <TableHead className="text-gray-600">Local Cafe Owner</TableHead>
        <TableHead className="text-gray-600">Growing Services Provider</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {personas.map((persona, i) => (
        <TableRow key={i}>
          <TableCell className="font-medium">{persona.attribute}</TableCell>
          <TableCell>{persona.soloOnlineSeller}</TableCell>
          <TableCell>{persona.localCafeOwner}</TableCell>
          <TableCell>{persona.growingServiceProvider}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const renderCompetitorsTable = (competitors: CompetitorSummary[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Competitor</TableHead>
        <TableHead className="text-gray-600">Strengths</TableHead>
        <TableHead className="text-gray-600">Weaknesses</TableHead>
        <TableHead className="text-gray-600">Relevance to Google Pay Goal</TableHead>
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

// Re-use or adapt functions from Deel/shared components where possible
const renderFunctionalRequirements = (requirements: FunctionalRequirement[]) => (
  <div className="space-y-3">
    {requirements.map(area => (
      <div key={area.area}>
        <h5 className="font-semibold text-gray-700">{area.area}</h5>
        {renderBulletList(area.requirements, 'text-sm')}
      </div>
    ))}
  </div>
);

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

const renderInformationArchitecture = (items: InformationArchitectureItem[]) => (
  <div className="space-y-3">
    {items.map(item => (
      <div key={item.area}>
        <h5 className="font-semibold text-gray-700">{item.area}</h5>
        <p className="text-sm text-gray-600">{item.description}</p>
        {item.subItems && item.subItems.length > 0 && (
          <div className="pl-4 mt-1">
            {renderInformationArchitecture(item.subItems)}
          </div>
        )}
      </div>
    ))}
  </div>
);

const renderUserFlows = (flows: UserFlow[]) => (
  <div className="space-y-4">
    {flows.map(flow => (
      <div key={flow.id} className="border-b pb-3 last:border-b-0">
        <h5 className="font-semibold text-gray-700">{flow.name}</h5>
        <p className="text-sm text-gray-600">{flow.description}</p>
      </div>
    ))}
  </div>
);

const renderMetricsTable = (kpis: Metric[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Category</TableHead>
        <TableHead className="text-gray-600">Metric</TableHead>
        <TableHead className="text-gray-600">Description</TableHead>
        <TableHead className="text-gray-600">Target</TableHead>
        <TableHead className="text-gray-600">Tracking Method</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {kpis.map((kpi, i) => (
        <TableRow key={i}>
          <TableCell className="font-medium">{kpi.category}</TableCell>
          <TableCell>{kpi.metric}</TableCell>
          <TableCell>{kpi.description || 'N/A'}</TableCell>
          <TableCell>{kpi.target}</TableCell>
          <TableCell>{kpi.trackingMethod || 'N/A'}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const renderRolloutTable = (rollout: RolloutPhase[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Phase</TableHead>
        <TableHead className="text-gray-600">Name</TableHead>
        <TableHead className="text-gray-600">Duration</TableHead>
        <TableHead className="text-gray-600">Goal</TableHead>
        <TableHead className="text-gray-600">Activities</TableHead>
        <TableHead className="text-gray-600">Metrics Focus</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {rollout.map((phase) => (
        <TableRow key={phase.phase}>
          <TableCell className="font-medium">{phase.phase}</TableCell>
          <TableCell>{phase.name}</TableCell>
          <TableCell>{phase.duration}</TableCell>
          <TableCell>{phase.goal}</TableCell>
          <TableCell>{phase.activities}</TableCell>
          <TableCell>{phase.metricsFocus || 'N/A'}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

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
          <TableCell>{risk.mitigation}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

// --- Main Component --- //

interface GooglePayCaseStudyProps {
  study: CaseStudy & { detailedData: GooglePayCaseStudyDetails };
}

const GooglePayCaseStudy: React.FC<GooglePayCaseStudyProps> = ({ study }) => {
  const detailedData = study.detailedData;

  // Links from user query
  const whimsicalLink = "https://whimsical.com/portfolio-case-study-SWF4dwiPDQzafhAw97XLgD@8ADn3nfZADnAnXsKYVDk5R3FUEMPtxCCNXyu";
  const sheetsLink = "https://docs.google.com/spreadsheets/d/1R98Ja63Xf1KNMGexGby94sz_dYe8_K9xlzgbDKacl3A/edit?usp=sharing";
  const wireframeLink = "https://jairangi11.github.io/portfolio_website/case-studies-content/google-pay-merchant-onboarding/wireframes/welcome.html";

  // Embed URLs from user query
  const whimsicalEmbed = "https://whimsical.com/embed/SWF4dwiPDQzafhAw97XLgD@8ADn3nfZADnAnXsKYVDk5R3FUEMPtxCCNXyu";
  const sheetsEmbed = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS3Qq-oJjQEft-HNd_81lK54aZDwXoci4drFsfAQeLBRkUAECJIN9f0wnZZnaQOQncAn8l6uYvhyk0g/pubhtml?widget=true&amp;headers=false";
  const wireframeEmbed = wireframeLink; // Simple link embed for HTML wireframe

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
              <p>{detailedData.research.marketResearch.summary}</p>
              {renderMarketTrendsTable(detailedData.research.marketResearch.trendsTable)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="primary-research">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Primary Research (Simulated)</AccordionTrigger>
             <AccordionContent className="pt-4 space-y-4">
               <p>{detailedData.research.primaryResearch.simulationSummary}</p>
               <h5 className="font-semibold">Personas Defined:</h5>
               <div className="space-y-3">
                 {detailedData.research.primaryResearch.personasDefined.map(p => (
                   <div key={p.name}>
                     <h6 className="font-medium text-gray-700">{p.name}</h6>
                     <p className="text-sm"><strong>Description:</strong> {p.description}</p>
                     <p className="text-sm"><strong>Goals:</strong> {p.goals}</p>
                     <p className="text-sm"><strong>Needs:</strong> {p.needs}</p>
                     <p className="text-sm"><strong>Frustrations:</strong> {p.frustrations}</p>
                   </div>
                 ))}
               </div>
               <h5 className="font-semibold mt-4">Synthesized Findings / Pain Points:</h5>
               {renderBulletList(detailedData.research.primaryResearch.synthesizedFindings)}
               <h5 className="font-semibold mt-4">Personas Summary Table:</h5>
               {renderPersonasSummaryTable(detailedData.research.primaryResearch.personasTable)}
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="competitor-analysis">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Competitor Analysis</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
               <p>{detailedData.research.competitorAnalysis.summary}</p>
               {renderCompetitorsTable(detailedData.research.competitorAnalysis.competitorsTable)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pain-points">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Synthesized & Prioritized Pain Points</AccordionTrigger>
             <AccordionContent className="pt-4 space-y-4">
               <h5 className="font-semibold text-red-600">P0 - Highest Priority:</h5>
               {detailedData.research.painPoints.highPriority.map((p, i) => (
                 <div key={i} className="mb-2">
                   <p><strong>{p.point}</strong></p>
                   <p className="text-sm"><em>Impact:</em> {p.impact}</p>
                   <p className="text-sm"><em>Evidence:</em> {p.evidence}</p>
                 </div>
               ))}
                <h5 className="font-semibold text-yellow-600 mt-3">P1 - Medium Priority:</h5>
               {detailedData.research.painPoints.mediumPriority.map((p, i) => (
                 <div key={i} className="mb-2">
                   <p><strong>{p.point}</strong></p>
                   <p className="text-sm"><em>Impact:</em> {p.impact}</p>
                   <p className="text-sm"><em>Evidence:</em> {p.evidence}</p>
                 </div>
               ))}
               <h5 className="font-semibold text-gray-500 mt-3">P2 - Lower Priority:</h5>
               {detailedData.research.painPoints.lowPriority.map((p, i) => (
                 <div key={i} className="mb-2">
                   <p><strong>{p.point}</strong></p>
                   <p className="text-sm"><em>Impact:</em> {p.impact}</p>
                   <p className="text-sm"><em>Evidence:</em> {p.evidence}</p>
                 </div>
               ))}
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
             <p><strong className='text-blue-600'>For Merchants:</strong> {detailedData.solutionFraming.valueProposition.forMerchants}</p>
             <p><strong className='text-purple-600'>For Google Pay:</strong> {detailedData.solutionFraming.valueProposition.forGooglePay}</p>
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

      {renderDetailedSection("Detailed Design",
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="func-req">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Functional Requirements</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderFunctionalRequirements(detailedData.detailedDesign.functionalRequirements)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="nfr">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Non-Functional Requirements (NFRs)</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderNonFunctionalRequirements(detailedData.detailedDesign.nonFunctionalRequirements)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ia">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Information Architecture (IA)</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderInformationArchitecture(detailedData.detailedDesign.informationArchitecture)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flows">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Key User Flows</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderUserFlows(detailedData.detailedDesign.userFlows)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="wireframes-desc">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Wireframes/Mockups (Description)</AccordionTrigger>
            <AccordionContent className="pt-4">
              <p className="text-sm italic text-gray-600">Actual HTML wireframes are linked in the Artifacts section.</p>
              <p>{detailedData.detailedDesign.wireframesDescription}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
        <FiLayout />
      )}

      {renderDetailedSection("Artifacts",
        <div className="space-y-10">
           {whimsicalLink && whimsicalEmbed && (
             <div>
               <a
                href={whimsicalLink}
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
           {wireframeLink && wireframeEmbed && (
             <div>
               <a
                 href={wireframeLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group inline-flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-200 mb-3"
               >
                 <h4 className="font-semibold flex items-center">
                   <FiLayout className="mr-2 text-purple-500 flex-shrink-0"/> Wireframe (Welcome Screen)
                 </h4>
                 <FiExternalLink className="ml-1.5 text-purple-500" size={14}/>
               </a>
               <iframe
                 style={{border: '1px solid #e2e8f0', borderRadius: '8px'}}
                 width="100%"
                 height="450"
                 src={wireframeEmbed} // Note: Embedding external HTML might have security/browser restrictions
                 title="Wireframe Embed"
                 loading="lazy"
               ></iframe>
             </div>
           )}
           {sheetsLink && sheetsEmbed && (
             <div>
               <a
                 href={sheetsLink}
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
            <AccordionItem value="north-star">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">North Star Metric</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-1">
                 <p><strong>Metric:</strong> {detailedData.metricsMeasurement.northStarMetric.metric}</p>
                 <p><strong>Description:</strong> {detailedData.metricsMeasurement.northStarMetric.description}</p>
                 <p><strong>Target:</strong> {detailedData.metricsMeasurement.northStarMetric.target}</p>
                 <p><strong>Tracking:</strong> {detailedData.metricsMeasurement.northStarMetric.trackingMethod}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kpis">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Key Performance Indicators (KPIs)</AccordionTrigger>
              <AccordionContent className="pt-4">
                 {renderMetricsTable(detailedData.metricsMeasurement.kpisByCategory)}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="tracking-plan">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Tracking Methods Summary</AccordionTrigger>
              <AccordionContent className="pt-4">
                <p>{detailedData.metricsMeasurement.trackingMethodsSummary}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>,
          <FiTarget />
       )}

      {renderDetailedSection("Go-To-Market (GTM) Strategy & Rollout Plan",
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="gtm-strategy">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">GTM Strategy</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
              <p><strong>Target Audience:</strong> {detailedData.goToMarket.gtmStrategy.targetAudience}</p>
              <p><strong>Positioning:</strong> {detailedData.goToMarket.gtmStrategy.positioning}</p>
              <div>
                <h5 className="font-semibold text-gray-700">Key Messaging</h5>
                {renderBulletList(detailedData.goToMarket.gtmStrategy.keyMessaging, 'text-sm')}
              </div>
              <div>
                <h5 className="font-semibold text-gray-700">Communication Channels</h5>
                 <p className="text-sm"><strong className='font-medium text-gray-600'>Internal:</strong> {detailedData.goToMarket.gtmStrategy.communicationChannels.internal}</p>
                 <p className="text-sm"><strong className='font-medium text-gray-600'>External:</strong> {detailedData.goToMarket.gtmStrategy.communicationChannels.external}</p>
                 <p className="text-sm"><strong className='font-medium text-gray-600'>In-Product:</strong> {detailedData.goToMarket.gtmStrategy.communicationChannels.inProduct}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rollout-plan">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Rollout Plan</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderRolloutTable(detailedData.goToMarket.rolloutPlan)}
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
        </div>,
        <FiBarChart2 />
      )}

      {renderDetailedSection("Risk Analysis & Mitigation",
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="risk-register">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Risk Analysis</AccordionTrigger>
            <AccordionContent className="pt-4">
              {renderRisksTable(detailedData.risksMitigation.riskAnalysis)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
        <FiAlertTriangle />
      )}

       {renderDetailedSection("Conclusion & Future Considerations",
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Conclusion</h4>
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

export default GooglePayCaseStudy; 