'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FiInfo, FiTrendingUp, FiCheckSquare, FiLayout, FiTarget, FiActivity,
  FiBarChart2, FiAlertTriangle, FiThumbsUp, FiLink, FiExternalLink
} from 'react-icons/fi';
import { SiGooglesheets } from 'react-icons/si';
import { RiMindMap } from "react-icons/ri";
import { CaseStudy } from '@/data/caseStudiesData';
import { AwsLambdaCaseStudyDetails } from '@/data/aws-lambda-developer-ux-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { renderDetailedSection, renderBulletList } from './CaseStudyComponents';

// Define Props Interface
interface AWSLambdaDeveloperUXProps {
  study: CaseStudy & { detailedData: AwsLambdaCaseStudyDetails };
}

const AWSLambdaDeveloperUX: React.FC<AWSLambdaDeveloperUXProps> = ({ study }) => {
  // Access detailed data via prop
  const data = study.detailedData;

  // --- Content Rendering Functions (Further simplified, structure aligned with Deel) ---

  const renderIntroductionContent = () => (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Problem Statement</h4>
        <p>{data.introduction.problemStatement}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Scope</h4>
          <p className="text-sm mb-2"><strong className='text-green-600'>In Scope:</strong> {data.introduction.scope.inScope}</p>
          <p className="text-sm"><strong className='text-red-600'>Out of Scope:</strong> {data.introduction.scope.outOfScope}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Objectives</h4>
          {renderBulletList(data.introduction.objectives, 'text-sm')}
          <Separator className="my-3" />
          <h4 className="font-semibold text-gray-800 mb-2">Assumptions</h4>
          {renderBulletList(data.introduction.assumptions, 'text-sm')}
        </div>
      </div>
    </div>
  );

  const renderResearchContent = () => (
     <Accordion type="single" collapsible className="w-full">
       {/* Market Research */}
       <AccordionItem value="market-research">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">Market Research</AccordionTrigger>
         <AccordionContent className="pt-4 space-y-4">
           <p>{data.research.marketResearch.summary}</p>
           <Table>
             <TableHeader>
                <TableRow>
                    <TableHead className="text-gray-600">Area</TableHead>
                    <TableHead className="text-gray-600">Trend</TableHead>
                    <TableHead className="text-gray-600">Relevance</TableHead>
                    <TableHead className="text-gray-600">Source</TableHead>
                </TableRow>
             </TableHeader>
             <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                {data.research.marketResearch.trendsTable.map((trend, index) => (
                    <TableRow key={index}>
                    <TableCell className="font-medium">{trend.area}</TableCell>
                    <TableCell>{trend.trend}</TableCell>
                    <TableCell>{trend.relevance}</TableCell>
                    <TableCell>{trend.source}</TableCell>
                    </TableRow>
                ))}
             </TableBody>
           </Table>
         </AccordionContent>
       </AccordionItem>

       {/* Primary Research */}
       <AccordionItem value="primary-research">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">Primary Research (Personas & Findings)</AccordionTrigger>
         <AccordionContent className="pt-4 space-y-6">
           <div>
             <h4 className="font-semibold mb-2">Personas Defined:</h4>
             <div className="flex flex-wrap gap-2 mb-4">
               {data.research.primaryResearch.personasDefined.map((persona, index) => (
                  <Badge key={index} variant="secondary">{persona.name}: {persona.role}</Badge>
               ))}
             </div>
           </div>
            <div>
             <h4 className="font-semibold mb-2">Synthesized Findings:</h4>
             <div className="space-y-2">
                 {data.research.primaryResearch.synthesizedFindings.map((finding, index) => (
                     <div key={index} className="border-b pb-3 last:border-b-0">
                        <h5 className="font-medium text-gray-700 mb-1">{finding.title}</h5>
                        {renderBulletList(finding.findings, 'text-sm')}
                     </div>
                 ))}
             </div>
           </div>
           <div>
              <h4 className="font-semibold mb-2 mt-4">Personas Detailed Comparison:</h4>
               <Table>
                  <TableHeader>
                    <TableRow>
                    <TableHead className="text-gray-600">Attribute</TableHead>
                    <TableHead className="text-gray-600">Novice Explorer</TableHead>
                    <TableHead className="text-gray-600">Backend Developer</TableHead>
                    <TableHead className="text-gray-600">DevOps Engineer</TableHead>
                    </TableRow>
                 </TableHeader>
                 <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                    {data.research.primaryResearch.personasTable.map((personaAttr, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{personaAttr.attribute}</TableCell>
                        <TableCell>{personaAttr.noviceExplorer}</TableCell>
                        <TableCell>{personaAttr.backendDeveloper}</TableCell>
                        <TableCell>{personaAttr.devOpsEngineer}</TableCell>
                    </TableRow>
                    ))}
                 </TableBody>
             </Table>
           </div>
         </AccordionContent>
       </AccordionItem>

       {/* Competitor Analysis */}
       <AccordionItem value="competitor-analysis">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">Competitor Analysis</AccordionTrigger>
         <AccordionContent className="pt-4 space-y-4">
             <p>{data.research.competitorAnalysis.summary}</p>
             <Table>
                 <TableHeader>
                     <TableRow>
                     <TableHead className="text-gray-600">Competitor</TableHead>
                     <TableHead className="text-gray-600">Platform</TableHead>
                     <TableHead className="text-gray-600">Strengths</TableHead>
                     <TableHead className="text-gray-600">Weaknesses</TableHead>
                     <TableHead className="text-gray-600">Relevance</TableHead>
                     </TableRow>
                 </TableHeader>
                 <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
                     {data.research.competitorAnalysis.competitorsTable.map((competitor, index) => (
                     <TableRow key={index}>
                         <TableCell className="font-medium">{competitor.competitor}</TableCell>
                         <TableCell>{competitor.platform}</TableCell>
                         <TableCell>{competitor.strengths}</TableCell>
                         <TableCell>{competitor.weaknesses}</TableCell>
                         <TableCell>{competitor.relevance}</TableCell>
                     </TableRow>
                     ))}
                 </TableBody>
             </Table>
         </AccordionContent>
       </AccordionItem>

       {/* Pain Points */}
       <AccordionItem value="pain-points">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">Prioritized Pain Points</AccordionTrigger>
         <AccordionContent className="pt-4 space-y-4">
           <h4 className="font-semibold mb-2 text-red-600">High Priority (P0):</h4>
           <div className="space-y-2">
               {data.research.painPoints.highPriority.map((point, index) => (
                 <Card key={`high-${index}`} className="border-destructive/50 shadow-sm">
                     <CardHeader className="p-3 bg-destructive/5">
                         <CardTitle className="text-base text-destructive font-medium">{point.title}</CardTitle>
                     </CardHeader>
                     <CardContent className="p-3 pt-2 space-y-1 text-sm">
                         <p><strong>Core Issue:</strong> {point.coreIssue}</p>
                         <p><strong>Manifestations:</strong> {point.manifestations}</p>
                         <p><strong>Impact:</strong> {point.impact}</p>
                     </CardContent>
                 </Card>
               ))}
           </div>
           <h4 className="font-semibold mb-2 mt-4 text-yellow-600">Medium Priority (P1):</h4>
           <div className="space-y-2">
               {data.research.painPoints.mediumPriority.map((point, index) => (
                 <Card key={`medium-${index}`} className="border-yellow-500/50 shadow-sm">
                     <CardHeader className="p-3 bg-yellow-500/5">
                         <CardTitle className="text-base text-yellow-700 font-medium">{point.title}</CardTitle>
                     </CardHeader>
                     <CardContent className="p-3 pt-2 space-y-1 text-sm">
                         <p><strong>Core Issue:</strong> {point.coreIssue}</p>
                         <p><strong>Manifestations:</strong> {point.manifestations}</p>
                         <p><strong>Impact:</strong> {point.impact}</p>
                     </CardContent>
                 </Card>
               ))}
           </div>
            {data.research.painPoints.lowPriority.length > 0 && (
               <>
                 <h4 className="font-semibold mb-2 mt-4 text-gray-500">Low Priority:</h4>
                  <div className="space-y-2">
                     {data.research.painPoints.lowPriority.map((point, index) => (
                         <Card key={`low-${index}`} className="border-gray-200 shadow-sm">
                             <CardHeader className="p-3 bg-gray-50/50">
                                 <CardTitle className="text-base text-gray-700 font-medium">{point.title}</CardTitle>
                             </CardHeader>
                             <CardContent className="p-3 pt-2 space-y-1 text-sm">
                                 <p><strong>Core Issue:</strong> {point.coreIssue}</p>
                                 <p><strong>Manifestations:</strong> {point.manifestations}</p>
                                 <p><strong>Impact:</strong> {point.impact}</p>
                             </CardContent>
                         </Card>
                     ))}
                  </div>
               </>
            )}
         </AccordionContent>
       </AccordionItem>
     </Accordion>
  );

  const renderSolutionFramingContent = () => (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Solution Hypothesis</h4>
        <p>{data.solutionFraming.solutionHypothesis}</p>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div>
             <h4 className="font-semibold text-gray-800 mb-2">Value Proposition (Developers)</h4>
             <p><strong className='text-blue-600'>For Developers:</strong> {data.solutionFraming.valueProposition.forDevelopers}</p>
         </div>
         <div>
             <h4 className="font-semibold text-gray-800 mb-2">Value Proposition (AWS)</h4>
             <p><strong className='text-purple-600'>For AWS:</strong> {data.solutionFraming.valueProposition.forAWS}</p>
         </div>
     </div>
     <div>
        <h4 className="font-semibold text-gray-800 mb-2">High-Level Features</h4>
        <Accordion type="multiple" className="w-full">
            {data.solutionFraming.keyFeatures.map((feature) => (
                <AccordionItem value={feature.id} key={feature.id}>
                    <AccordionTrigger>{feature.name}</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-sm">
                        <p><strong>Description:</strong> {feature.description}</p>
                        <p><strong>Functionality:</strong> {feature.functionality}</p>
                        <p><strong>Pain Points Addressed:</strong> <Badge variant="outline">{feature.painPointsAddressed}</Badge></p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
     </div>
    </div>
  );

  // Helper to render Functional Requirements section for Detailed Design
  const renderFunctionalRequirements = (requirements: typeof data.detailedDesign.functionalRequirements) => (
    <div className="space-y-3">
      {requirements.map(featureReq => (
        <div key={featureReq.featureId}>
          <h5 className="font-semibold text-gray-700">{featureReq.featureName}</h5>
          {renderBulletList(featureReq.requirements.map(req => `${req.id}: ${req.description}`), 'text-sm')}
        </div>
      ))}
    </div>
  );

  // Helper to render Non-Functional Requirements section for Detailed Design
  const renderNonFunctionalRequirements = (requirements: typeof data.detailedDesign.nonFunctionalRequirements) => (
     <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="text-gray-600">Category</TableHead>
                <TableHead className="text-gray-600">Requirements</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
            {requirements.map((nfr, index) => (
                <TableRow key={index}>
                    <TableCell className="font-medium">{nfr.category}</TableCell>
                    <TableCell>{renderBulletList(nfr.requirements, 'text-sm')}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  );

  // Helper to render Information Architecture for Detailed Design
  const renderInformationArchitecture = (items: typeof data.detailedDesign.informationArchitecture) => (
     <Table>
        <TableHeader>
            <TableRow>
            <TableHead className="text-gray-600">Level</TableHead>
            <TableHead className="text-gray-600">Item</TableHead>
            <TableHead className="text-gray-600">Description</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
        {items.map((item, index) => (
             <TableRow key={index}>
                <TableCell><Badge variant={item.level === 'primary' ? 'default' : item.level === 'secondary' ? 'secondary' : 'outline'}>{item.level}</Badge></TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell className="text-sm">{item.description}</TableCell>
            </TableRow>
            // TODO: Render subItems recursively if needed
         ))}
        </TableBody>
    </Table>
  );

  // Helper to render User Flows for Detailed Design (matching Deel style)
  const renderUserFlows = (flows: typeof data.detailedDesign.userFlows) => (
    <div className="space-y-4">
        {flows.map((flow) => (
             <div key={flow.id} className="border-b pb-3 last:border-b-0">
                <h5 className="font-semibold text-gray-700">{flow.name} ({flow.persona})</h5>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Goal:</strong> {flow.goal}</p>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Benefit:</strong> {flow.benefit}</p>
                <h6 className="font-semibold text-sm mt-1">Steps:</h6>
                <ol className="list-decimal pl-5 space-y-0.5 text-sm">
                    {flow.flowSteps.map((step, idx) => <li key={idx}>{step}</li>)}
                </ol>
            </div>
        ))}
    </div>
  );

  const renderDetailedDesignContent = () => (
     <Accordion type="single" collapsible className="w-full">
       <AccordionItem value="functional-requirements">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">Functional Requirements</AccordionTrigger>
         <AccordionContent className="pt-4">
           {renderFunctionalRequirements(data.detailedDesign.functionalRequirements)}
         </AccordionContent>
       </AccordionItem>
       <AccordionItem value="non-functional-requirements">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">Non-Functional Requirements</AccordionTrigger>
         <AccordionContent className="pt-4">
           {renderNonFunctionalRequirements(data.detailedDesign.nonFunctionalRequirements)}
         </AccordionContent>
       </AccordionItem>
       <AccordionItem value="information-architecture">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">Information Architecture</AccordionTrigger>
         <AccordionContent className="pt-4">
             <p className="text-muted-foreground text-sm mb-2">[IA Tree Placeholder - Table View Below]</p>
             {renderInformationArchitecture(data.detailedDesign.informationArchitecture)}
         </AccordionContent>
       </AccordionItem>
       <AccordionItem value="user-flows">
         <AccordionTrigger className="text-lg font-medium hover:no-underline">User Flows</AccordionTrigger>
         <AccordionContent className="pt-4">
           {renderUserFlows(data.detailedDesign.userFlows)}
         </AccordionContent>
       </AccordionItem>
       {/* Whimsical/Wireframes moved to Artifacts Section */}
     </Accordion>
  );

  // Helper to render Metrics Table
  const renderMetricsTable = (metrics: typeof data.metricsMeasurement.kpisByCategory) => (
    <Table>
        <TableHeader>
            <TableRow>
            <TableHead className="text-gray-600">Category</TableHead>
            <TableHead className="text-gray-600">KPI ID</TableHead>
            <TableHead className="text-gray-600">KPI</TableHead>
            <TableHead className="text-gray-600">Target</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
            {metrics.map((kpi, index) => (
            <TableRow key={index}>
                <TableCell className="font-medium">{kpi.category}</TableCell>
                <TableCell>{kpi.kpiId}</TableCell>
                <TableCell>{kpi.kpi}</TableCell>
                <TableCell>{kpi.target}</TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
  );

  const renderMetricsContent = () => (
    <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="north-star">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">North Star Metric</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1">
            <p><strong>Metric:</strong> {data.metricsMeasurement.northStarMetric.metric}</p>
            {/* Add target if it exists in your data structure */}
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="kpis">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Key Performance Indicators (KPIs)</AccordionTrigger>
            <AccordionContent className="pt-4">
            {renderMetricsTable(data.metricsMeasurement.kpisByCategory)}
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tracking-plan">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Tracking Plan</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
            <p><strong>Summary:</strong> {data.metricsMeasurement.trackingPlan.summary}</p>
            <h5 className="font-semibold text-gray-700">Methods:</h5>
            {renderBulletList(data.metricsMeasurement.trackingPlan.methods, 'text-sm')}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );

  // Helper to render GTM Table
  const renderRolloutTable = (rollout: typeof data.goToMarket.rolloutPlan) => (
    <Table>
        <TableHeader>
            <TableRow>
            <TableHead className="text-gray-600">Phase</TableHead>
            <TableHead className="text-gray-600">Name</TableHead>
            <TableHead className="text-gray-600">Duration</TableHead>
            <TableHead className="text-gray-600">Scope</TableHead>
            <TableHead className="text-gray-600">Goal</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
            {rollout.map((phase) => (
            <TableRow key={phase.phase}>
                <TableCell className="font-medium">{phase.phase}</TableCell>
                <TableCell>{phase.name}</TableCell>
                <TableCell>{phase.duration}</TableCell>
                <TableCell>{phase.scope}</TableCell>
                <TableCell>{phase.goal}</TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
  );

  const renderGTMContent = () => (
    <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="gtm-strategy">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">GTM Strategy</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
            <div>
                <h5 className="font-semibold text-gray-700">Target Audience</h5>
                <p className="text-sm">{data.goToMarket.gtmStrategy.targetAudience}</p>
            </div>
            <div>
                <h5 className="font-semibold text-gray-700">Key Messaging</h5>
                {renderBulletList(data.goToMarket.gtmStrategy.keyMessaging, 'text-sm')}
            </div>
            <div>
                <h5 className="font-semibold text-gray-700">Channels</h5>
                <p className="text-sm"><strong className='font-medium text-gray-600'>Internal:</strong> {data.goToMarket.gtmStrategy.channels.internal}</p>
                <p className="text-sm"><strong className='font-medium text-gray-600'>External:</strong> {data.goToMarket.gtmStrategy.channels.external}</p>
            </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rollout-plan">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Rollout Plan</AccordionTrigger>
            <AccordionContent className="pt-4">
                {renderRolloutTable(data.goToMarket.rolloutPlan)}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );

  // Helper to render Business Impact
  const renderBusinessImpact = (impacts: typeof data.businessAspects.businessImpact) => (
    <div className="space-y-3">
        {impacts.map((impact, index) => (
            <div key={index}>
                <h5 className="font-semibold text-gray-700">{impact.area}</h5>
                {renderBulletList(impact.points, 'text-sm')}
            </div>
        ))}
    </div>
  );

  const renderBusinessAspectsContent = () => (
    <div className="space-y-4">
        <div>
            <h4 className="font-semibold text-gray-800 mb-1">Monetization & Pricing</h4>
            <p>{data.businessAspects.monetizationPricing}</p>
        </div>
         <div>
            <h4 className="font-semibold text-gray-800 mb-2">Business Impact Analysis</h4>
            {renderBusinessImpact(data.businessAspects.businessImpact)}
        </div>
    </div>
  );

  // Helper to render Risks Table
  const renderRisksTable = (risks: typeof data.risksMitigation.potentialRisks) => (
     <Table>
        <TableHeader>
            <TableRow>
            <TableHead className="text-gray-600">Risk</TableHead>
            <TableHead className="text-gray-600">Mitigation</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className="[&>tr:nth-child(odd)]:bg-gray-50/50">
            {risks.map((risk) => (
            <TableRow key={risk.id}>
                <TableCell className="font-medium">{risk.risk}</TableCell>
                <TableCell>{risk.mitigation}</TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
  );

  const renderRisksContent = () => (
    <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="risk-register">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">Risk Register</AccordionTrigger>
            <AccordionContent className="pt-4">
            {renderRisksTable(data.risksMitigation.potentialRisks)}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );

  const renderConclusionContent = () => (
    <div className="space-y-4">
        <div>
            <h4 className="font-semibold text-gray-800 mb-1">Summary</h4>
            <p>{data.conclusion.summary}</p>
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 mb-1">Future Considerations</h4>
            {renderBulletList(data.conclusion.futureConsiderations, 'text-sm')}
        </div>
    </div>
  );

  const renderReferencesContent = () => (
     <p className="text-muted-foreground italic text-sm">{data.references}</p>
  );

  // --- Reimplement Artifacts Section to match Deel --- 
  const renderArtifactsContent = () => (
    <div className="space-y-10">
        {/* Whimsical Embed (Matches Deel's logic) */}
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
                    <FiExternalLink className="ml-1.5 text-blue-500 opacity-70 group-hover:opacity-100" size={14}/>
                </a>
                <iframe
                    style={{border: '1px solid #e2e8f0', borderRadius: '8px'}}
                    width="100%"
                    height="450"
                    // Attempt to extract embed URL - needs careful construction
                    src={study.whimsicalLink.replace("whimsical.com/","whimsical.com/embed/")}
                    title="Whimsical Board Embed"
                    loading="lazy"
                ></iframe>
             </div>
        )}

        {/* Sheets Embed (Matches Deel's logic) */}
        {study.sheetsLink && study.sheetsLink !== '#' && (
             <div>
                <a
                    href={study.sheetsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 mb-3"
                    >
                    <h4 className="font-semibold flex items-center">
                        <SiGooglesheets className="mr-2 text-green-500 flex-shrink-0"/> Google Sheet
                    </h4>
                    <FiExternalLink className="ml-1.5 text-green-500 opacity-70 group-hover:opacity-100" size={14}/>
                </a>
                 {/* Use the specific embed URL provided by the user for AWS */}
                <iframe
                    style={{border: '1px solid #e2e8f0', borderRadius: '8px'}}
                    width="100%"
                    height="500"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQfkb3sNm2eVaXXaMMiBVDNpZt7YevWMkvcZOEhZ-tBgaJttIxrL8yxPxnVTUWbb1-tvW89H-O-ahR3/pubhtml?widget=true&amp;headers=false" // Correct embed URL
                    title="Google Sheets Embed"
                    loading="lazy"
                 ></iframe>
            </div>
        )}

        {/* Wireframes Embed (Matches Deel's logic) */}
        {study.wireframeLink && study.wireframeLink !== '#' && (
            <div>
                <a
                    href={study.wireframeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-200 mb-3"
                    >
                    <h4 className="font-semibold flex items-center">
                        <FiLayout className="mr-2 text-purple-500 flex-shrink-0"/> Wireframes
                    </h4>
                     <FiExternalLink className="ml-1.5 text-purple-500 opacity-70 group-hover:opacity-100" size={14}/>
                </a>
                 <div className="border rounded-lg overflow-hidden bg-white shadow-sm aspect-[16/9] max-w-full w-full">
                     <iframe
                        src={study.wireframeLink} // Use the direct link
                        width="100%"
                        height="100%"
                        className="border-0"
                        title="AWS Lambda Wireframes Preview"
                        loading="lazy"
                    ></iframe>
                 </div>
                 {/* Optionally keep key screens list if needed */}
                 {data.detailedDesign.wireframes?.keyScreens && (
                    <div className="text-xs mt-2 text-muted-foreground">
                        Key Screens (Descriptions):
                        {renderBulletList(data.detailedDesign.wireframes.keyScreens.map(screen => `${screen.id}: ${screen.description}`), 'mt-1')}
                    </div>
                 )}
            </div>
        )}

    </div>
  );

  // --- Main Return --- 
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="space-y-0"
    >
      {renderDetailedSection("Introduction", renderIntroductionContent(), <FiInfo />)}
      {renderDetailedSection("Research", renderResearchContent(), <FiTrendingUp />)}
      {renderDetailedSection("Solution Framing", renderSolutionFramingContent(), <FiCheckSquare />)}
      {renderDetailedSection("Detailed Design", renderDetailedDesignContent(), <FiLayout />)}
      {renderDetailedSection("Artifacts", renderArtifactsContent(), <FiLink />)}
      {renderDetailedSection("Metrics & Measurement", renderMetricsContent(), <FiTarget />)}
      {renderDetailedSection("Go-to-Market Strategy & Rollout", renderGTMContent(), <FiActivity />)}
      {renderDetailedSection("Business Aspects", renderBusinessAspectsContent(), <FiBarChart2 />)}
      {renderDetailedSection("Risks & Mitigation", renderRisksContent(), <FiAlertTriangle />)}
      {renderDetailedSection("Conclusion & Future Considerations", renderConclusionContent(), <FiThumbsUp />)}
      {data.references && data.references !== "Placeholder for specific references if needed." && (
          renderDetailedSection("References", renderReferencesContent(), <FiLink />)
      )}
    </motion.div>
  );
};

export default AWSLambdaDeveloperUX; 