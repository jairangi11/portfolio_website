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
  DeelCaseStudyDetails,
  FunctionalRequirement,
  NonFunctionalRequirement,
  InformationArchitectureItem,
  UserFlow,
  RolloutPhase,
  BusinessImpact,
  Risk
} from '@/data/deel-global-payroll-data';
import {
  renderDetailedSection,
  renderBulletList
} from './CaseStudyComponents';

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
        <h5 className="font-semibold text-gray-700">{flow.name} ({flow.actor})</h5>
        <p className="text-sm"><strong className='font-medium text-gray-600'>Flow:</strong> {flow.flowSteps.join(' -> ')}</p>
        <p className="text-sm"><strong className='font-medium text-gray-600'>Optimization Focus:</strong> {flow.optimizationFocus}</p>
      </div>
    ))}
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

interface DeelCaseStudyProps {
  study: CaseStudy & { detailedData: DeelCaseStudyDetails };
}

const DeelCaseStudy: React.FC<DeelCaseStudyProps> = ({ study }) => {
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
                      <TableHead className="text-gray-600">Internal Specialist</TableHead>
                      <TableHead className="text-gray-600">Startup HR/Payroll Mgr</TableHead>
                      <TableHead className="text-gray-600">Enterprise Finance Dir</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                    {detailedData.research.primaryResearch.personasTable.map((persona, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{persona.attribute}</TableCell>
                        <TableCell>{persona.internalSpecialist}</TableCell>
                        <TableCell>{persona.startupHRPayrollMgr}</TableCell>
                        <TableCell>{persona.enterpriseFinanceDir}</TableCell>
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
                      <TableHead className="text-gray-600">Competitor</TableHead>
                      <TableHead className="text-gray-600">Positioning</TableHead>
                      <TableHead className="text-gray-600">Strengths</TableHead>
                      <TableHead className="text-gray-600">Weaknesses</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                    {detailedData.research.competitorAnalysis.competitorsTable.map((comp, i) => (
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
             <h4 className="font-semibold text-gray-800 mb-1">Solution Hypothesis</h4>
             <p>{detailedData.solutionFraming.solutionHypothesis}</p>
           </div>
           <div>
             <h4 className="font-semibold text-gray-800 mb-1">Value Proposition</h4>
             <p><strong className='text-blue-600'>For Clients:</strong> {detailedData.solutionFraming.valueProposition.forClients}</p>
             <p><strong className='text-purple-600'>For Internal:</strong> {detailedData.solutionFraming.valueProposition.forInternal}</p>
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
                 src="https://whimsical.com/embed/SWF4dwiPDQzafhAw97XLgD@VsSo8s35VJ818wfvk9KJST"
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
                 src="https://jairangi11.github.io/portfolio_website/case-studies-content/deel-global-payroll/wireframes/admin_dashboard.html"
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
                 src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSja6R_oBjjIh5N3yvxfKs154AMAztYeKrwhtvEL2k5VHYFbrgAq7M7BRRJpGzcDkcnEL5y0JBWZOZ8/pubhtml?widget=true&amp;headers=false"
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
                <p><strong>Target:</strong> {detailedData.metricsMeasurement.northStarMetric.target}</p>
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
                    {detailedData.metricsMeasurement.kpisByCategory.map((kpi, i) => (
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
                <p><strong>Data Collection:</strong> {detailedData.metricsMeasurement.trackingPlan.dataCollection}</p>
                <p><strong>Baseline:</strong> {detailedData.metricsMeasurement.trackingPlan.baseline}</p>
                <p><strong>Reporting:</strong> {detailedData.metricsMeasurement.trackingPlan.reporting}</p>
                <p><strong>Monitoring:</strong> {detailedData.metricsMeasurement.trackingPlan.monitoring}</p>
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
                {renderBulletList(detailedData.goToMarket.targetAudienceSegments, 'text-sm')}
              </div>
              <div>
                <h5 className="font-semibold text-gray-700">Communication Strategy</h5>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Internal:</strong> {detailedData.goToMarket.communicationStrategy.internal.join(', ')}</p>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Client Beta:</strong> {detailedData.goToMarket.communicationStrategy.clientBeta.join(', ')}</p>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Client General:</strong> {detailedData.goToMarket.communicationStrategy.clientGeneral.join(', ')}</p>
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

export default DeelCaseStudy; 