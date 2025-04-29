import React from 'react';
import { motion } from 'framer-motion';
import {
  FiInfo, FiTrendingUp, FiCheckSquare, FiLink, FiTarget, FiThumbsUp,
  FiExternalLink, FiLayout, FiActivity, FiBarChart2, FiAlertTriangle,
  FiUsers, FiSearch, FiFilter, FiDatabase, FiList, FiSettings, FiGrid
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
  MagicBricksCaseStudyDetails,
  // Import sub-types if they weren't reused from Deel (assuming reuse for now)
  // MarketTrend, Persona, Competitor, FunctionalRequirement, etc.
} from '@/data/magicbricks-property-recommendation-data';
import {
  // Reusing common types from Deel data if applicable
  FunctionalRequirement,
  NonFunctionalRequirement,
  InformationArchitectureItem,
  UserFlow,
  RolloutPhase,
  BusinessImpact,
  Risk,
} from '@/data/deel-global-payroll-data';
import {
  renderDetailedSection,
  renderBulletList
} from './CaseStudyComponents'; // Assuming common renderers are sufficient

// --- Render Helper Functions specific to MagicBricks structure (if needed) ---
// If the structure differs significantly from Deel, create specific renderers.
// Example: If Market Trends table structure is different
const renderMarketTrendsTable = (trends: { area: string, trend: string }[]) => (
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

const renderPersonas = (personas: { role: string; details: { profile: string; goals: string; painPoints: string[]; helpfulInfo: string[]; } }[]) => (
    <Accordion type="single" collapsible className="w-full">
        {personas.map((persona, index) => (
            <AccordionItem value={`persona-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-medium hover:no-underline">{persona.role}</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3">
                    <p><strong>Profile:</strong> {persona.details.profile}</p>
                    <p><strong>Goals:</strong> {persona.details.goals}</p>
                    <div>
                        <h5 className="font-semibold text-gray-700">Key Pain Points:</h5>
                        {renderBulletList(persona.details.painPoints, 'text-sm')}
                    </div>
                     <div>
                        <h5 className="font-semibold text-gray-700">Helpful Information:</h5>
                        {renderBulletList(persona.details.helpfulInfo, 'text-sm')}
                    </div>
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

const renderCompetitorTable = (competitors: { competitor: string; strengths: string; weaknesses: string; aiRecsFocus: string; }[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Competitor</TableHead>
        <TableHead className="text-gray-600">Strengths</TableHead>
        <TableHead className="text-gray-600">Weaknesses</TableHead>
        <TableHead className="text-gray-600">AI/Recs Focus</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {competitors.map((comp, i) => (
        <TableRow key={i}>
          <TableCell className="font-medium">{comp.competitor}</TableCell>
          <TableCell>{comp.strengths}</TableCell>
          <TableCell>{comp.weaknesses}</TableCell>
          <TableCell>{comp.aiRecsFocus}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const renderPrioritizedPainPoints = (points: { p0: string[]; p0_5: string[]; p1: string[]; p2: string[]; focus: string; }) => (
    <div className="space-y-4">
        <h5 className="font-semibold text-red-600 flex items-center"><FiAlertTriangle className="mr-2"/> High Priority (P0):</h5>
        {renderBulletList(points.p0)}
        <h5 className="font-semibold text-orange-600 flex items-center"><FiDatabase className="mr-2"/> Foundational (P0.5):</h5>
        {renderBulletList(points.p0_5)}
        <h5 className="font-semibold text-yellow-600 flex items-center"><FiFilter className="mr-2"/> Medium-High Priority (P1):</h5>
        {renderBulletList(points.p1)}
        <h5 className="font-semibold text-gray-500 flex items-center"><FiList className="mr-2"/> Lower Priority (P2):</h5>
        {renderBulletList(points.p2)}
        <p><strong className="font-semibold">Focus for AI Solution:</strong> {points.focus}</p>
    </div>
);

const renderHighLevelFeatures = (features: { id: string; name: string; description: string; }[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map(feature => (
            <div key={feature.id} className="border border-gray-200 p-4 rounded-lg bg-gray-50 shadow-sm">
                <h5 className="font-medium text-gray-700 mb-1">{feature.name}</h5>
                <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
        ))}
    </div>
);

const renderFunctionalRequirements = (requirements: FunctionalRequirement[]) => (
    <div className="space-y-4">
        {requirements.map(area => (
            <div key={area.area}>
                <h5 className="font-semibold text-gray-700 mb-1 flex items-center">
                    <FiCheckSquare className="mr-2 text-blue-500" /> {area.area}
                </h5>
                {renderBulletList(area.requirements, 'text-sm pl-6')}
            </div>
        ))}
    </div>
);

const renderNonFunctionalRequirements = (requirements: NonFunctionalRequirement[]) => (
    <div className="space-y-4">
        {requirements.map(cat => (
            <div key={cat.category}>
                <h5 className="font-semibold text-gray-700 mb-1 flex items-center">
                    <FiSettings className="mr-2 text-purple-500" /> {cat.category}
                </h5>
                {renderBulletList(cat.requirements, 'text-sm pl-6')}
            </div>
        ))}
    </div>
);

const renderInformationArchitecture = (items: InformationArchitectureItem[]) => (
  <div className="space-y-4">
    {items.map(item => (
      <div key={item.area}>
        <h5 className="font-semibold text-gray-700 flex items-center">
            {item.area === 'Frontend/UI' ? <FiLayout className="mr-2 text-indigo-500"/> : <FiGrid className="mr-2 text-teal-500"/>} {item.area}
        </h5>
        <p className="text-sm text-gray-600 ml-7 mb-2">{item.description}</p>
        {item.subItems && item.subItems.length > 0 && (
          <div className="pl-7 mt-1 border-l-2 border-gray-200 ml-3">
            {renderInformationArchitecture(item.subItems)}
          </div>
        )}
      </div>
    ))}
  </div>
);

const renderUserFlows = (flows: UserFlow[]) => (
  <div className="space-y-5">
    {flows.map(flow => (
      <div key={flow.id} className="border-b border-gray-100 pb-4 last:border-b-0">
        <h5 className="font-semibold text-gray-700 mb-1">{flow.name}</h5>
        <p className="text-sm text-gray-500 mb-1"><strong>Actor:</strong> {flow.actor}</p>
        <p className="text-sm"><strong className='font-medium text-gray-600'>Flow:</strong> {flow.flowSteps.join(' -> ')}</p>
        <p className="text-sm italic text-blue-600"><strong className='font-medium text-gray-600 not-italic'>Optimization:</strong> {flow.optimizationFocus}</p>
      </div>
    ))}
  </div>
);

const renderMetricsTable = (metrics: { category: string; metric: string; definition: string; target: string; rationale: string; }[], title: string) => (
    <div>
        <h5 className="font-semibold text-gray-700 mb-2">{title}</h5>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-gray-600">Metric</TableHead>
                    <TableHead className="text-gray-600">Definition</TableHead>
                    <TableHead className="text-gray-600">Target</TableHead>
                    <TableHead className="text-gray-600">Rationale</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                {metrics.map((kpi, i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">{kpi.metric}</TableCell>
                        <TableCell>{kpi.definition}</TableCell>
                        <TableCell>{kpi.target}</TableCell>
                        <TableCell>{kpi.rationale}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
);

const renderGuardrailMetrics = (metrics: { metric: string; condition: string }[]) => (
    <div>
        <h5 className="font-semibold text-gray-700 mb-2">Guardrail Metrics</h5>
        {renderBulletList(metrics.map(m => `${m.metric}: ${m.condition}`), 'text-sm')}
    </div>
);

const renderRolloutTable = (rollout: RolloutPhase[]) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="text-gray-600">Phase</TableHead>
        <TableHead className="text-gray-600">Description</TableHead>
        <TableHead className="text-gray-600">Duration</TableHead>
        <TableHead className="text-gray-600">Activities</TableHead>
        <TableHead className="text-gray-600">Goal</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
      {rollout.map((phase, i) => (
        <TableRow key={i}>
          <TableCell className="font-medium">{phase.phase}</TableCell>
          <TableCell>{phase.description}</TableCell>
          <TableCell>{phase.duration}</TableCell>
          <TableCell>{phase.activities}</TableCell>
          <TableCell>{phase.goal}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const renderBusinessImpact = (impacts: { area: string; target?: string; description: string }[]) => (
    <div className="space-y-3">
        {impacts.map(impact => (
            <div key={impact.area} className="mb-2">
                <h5 className="font-medium text-gray-700">
                    {impact.area}
                    {impact.target && <span className="ml-2 text-sm font-semibold text-green-600">({impact.target})</span>}
                </h5>
                <p className="text-sm text-gray-600">{impact.description}</p>
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

// --- Main Component ---
interface MagicBricksCaseStudyProps {
  study: CaseStudy & { detailedData: MagicBricksCaseStudyDetails };
}

const MagicBricksCaseStudy: React.FC<MagicBricksCaseStudyProps> = ({ study }) => {
  const detailedData = study.detailedData;

  // Use provided embed URLs/HTML
  const whimsicalEmbedSrc = "https://whimsical.com/embed/SWF4dwiPDQzafhAw97XLgD@26TL6NGLXm17RWDPQ7i9JXSVjKj1bPH";
  const wireframeEmbedSrc = "https://jairangi11.github.io/portfolio_website/case-studies-content/magicbricks-property-recommendation/wireframes/homepage_with_recommendations.html";
  const sheetsEmbedSrc = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQmrTdLg2cgVzGchwaZqrB6YoBoVb_QqYOScA9k7XyNdhp0GIrpHeSoXT_dSAaczRyzIPvzhEgfZuVB/pubhtml?widget=true&amp;headers=false";

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
            <h5 className="font-medium text-green-600 mt-2">In Scope:</h5>
            {renderBulletList(detailedData.introduction.scope.inScope, 'text-sm')}
            <h5 className="font-medium text-red-600 mt-2">Out of Scope:</h5>
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
              <p>{detailedData.research.secondaryResearch.summary}</p>
              {renderMarketTrendsTable(detailedData.research.secondaryResearch.trendsTable)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="primary-research">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Primary Research (Personas)</AccordionTrigger>
             <AccordionContent className="pt-4 space-y-4">
                {renderPersonas(detailedData.research.primaryResearch.personas)}
                <h5 className="font-semibold pt-4 border-t mt-4">Synthesized Key Pain Points Across Personas:</h5>
                {renderBulletList(detailedData.research.primaryResearch.synthesizedPainPoints)}
             </AccordionContent>
          </AccordionItem>
           <AccordionItem value="competitor-analysis">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Competitor Analysis</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
               <p>{detailedData.research.competitorAnalysis.summary}</p>
               {renderCompetitorTable(detailedData.research.competitorAnalysis.competitorsTable)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pain-points">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Synthesized & Prioritized Pain Points</AccordionTrigger>
             <AccordionContent className="pt-4 space-y-4">
                 {renderPrioritizedPainPoints(detailedData.research.prioritizedPainPoints)}
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
             <p><strong className='text-blue-600'>For Property Seekers (Buyers/Renters):</strong> {detailedData.solutionFraming.valueProposition.forPropertySeekers}</p>
             <p><strong className='text-green-600'>For Property Investors:</strong> {detailedData.solutionFraming.valueProposition.forPropertyInvestors}</p>
             <p><strong className='text-purple-600'>For Property Listers/Agents:</strong> {detailedData.solutionFraming.valueProposition.forPropertyListers}</p>
           </div>
           <div>
             <h4 className="font-semibold text-gray-800 mb-1">High-Level Features</h4>
             {renderHighLevelFeatures(detailedData.solutionFraming.highLevelFeatures)}
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
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Information Architecture</AccordionTrigger>
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

      {renderDetailedSection("Artifacts",
        <div className="space-y-10">
           {study.whimsicalLink && study.whimsicalLink !== '#' && ( // Check if link exists before rendering
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
                 src={whimsicalEmbedSrc}
                 title="Whimsical Board Embed"
                 loading="lazy"
               ></iframe>
             </div>
           )}
           {study.wireframeLink && study.wireframeLink !== '#' && ( // Check if link exists
             <div>
               <a
                 href={study.wireframeLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group inline-flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-200 mb-3"
               >
                 <h4 className="font-semibold flex items-center">
                   <FiLayout className="mr-2 text-purple-500 flex-shrink-0"/> Wireframe Preview
                 </h4>
                 <FiExternalLink className="ml-1.5 text-purple-500" size={14}/>
               </a>
               <iframe
                 style={{border: '1px solid #e2e8f0', borderRadius: '8px'}}
                 width="100%"
                 height="450"
                 src={wireframeEmbedSrc}
                 title="Wireframe Embed"
                 loading="lazy"
               ></iframe>
             </div>
           )}
           {study.sheetsLink && study.sheetsLink !== '#' && ( // Check if link exists
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
                 src={sheetsEmbedSrc}
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
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Key Performance Indicators (KPIs)</AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                 {renderMetricsTable(detailedData.metricsMeasurement.primaryKPIs, 'Primary KPIs')}
                 {renderMetricsTable(detailedData.metricsMeasurement.secondaryKPIs, 'Secondary KPIs')}
                 {renderGuardrailMetrics(detailedData.metricsMeasurement.guardrailMetrics)}
              </AccordionContent>
            </AccordionItem>
            {/* Add other measurement sections if needed */}
          </Accordion>, 
          <FiTarget />
       )}

      {renderDetailedSection("Go-To-Market & Rollout",
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="gtm-strategy">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">GTM Strategy</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
              <p><strong>Target Audience:</strong> {detailedData.goToMarket.strategy.targetAudience}</p>
              <p><strong>Positioning:</strong> {detailedData.goToMarket.strategy.positioning}</p>
              <p><strong>Key Channels:</strong> {detailedData.goToMarket.strategy.keyChannels}</p>
              <p><strong>Communication:</strong> {detailedData.goToMarket.strategy.communication}</p>
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
            {renderBulletList(detailedData.businessAspects.monetizationPricing, 'text-sm')}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Business Impact Analysis</h4>
            {renderBusinessImpact(detailedData.businessAspects.businessImpact)}
          </div>
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

export default MagicBricksCaseStudy; 