import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import React from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const renderDetailedSection = (title: string, content: React.ReactNode, icon?: React.ReactNode) => (
  <motion.div variants={sectionVariants} className="mb-8">
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardHeader className="border-b border-gray-100 px-6 py-4 bg-gray-50/50">
        <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
          {icon && <span className="mr-3 text-gray-500">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 text-gray-700 leading-relaxed">
        {content}
      </CardContent>
    </Card>
  </motion.div>
);

export const renderBulletList = (items: string[], className?: string) => (
  <ul className={cn("list-disc list-inside space-y-1 text-gray-700", className)}>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

// Deel Specific Helpers (Example, if needed - currently none seem specific enough to move here)
// export const renderDeelMarketTrendsTable = ...

// Flipkart Specific Helpers
/*
export const renderFlipkartMarketTrendsTable = ...
export const renderFlipkartPersonasTable = ...
export const renderFlipkartCompetitorsTable = ...
export const renderFlipkartMetricsTable = ...
export const renderFlipkartRolloutTable = ...
export const renderFlipkartRisksTable = ...
*/ 