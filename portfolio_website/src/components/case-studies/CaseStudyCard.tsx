import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * (index + 1)
      }}
    >
      <Card className="relative h-full border border-border/50 bg-card/50 group-hover:bg-card/60 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none z-0" />
        
        <div className="relative z-10">
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={caseStudy.thumbnailImage || caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <CardHeader className="pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {caseStudy.tags.slice(0, 3).map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
              {caseStudy.tags.length > 3 && (
                <Badge 
                  variant="outline" 
                  className="bg-muted/30 text-muted-foreground border-muted/20"
                >
                  +{caseStudy.tags.length - 3}
                </Badge>
              )}
            </div>
            <Link 
              href={`/case-studies/${caseStudy.id}`} 
              className="group-hover:text-primary transition-colors"
            >
              <h3 className="text-xl font-bold leading-tight line-clamp-2 transition-colors group-hover:text-primary">
                {caseStudy.title}
              </h3>
            </Link>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <span className="font-medium">{caseStudy.company}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <FiCalendar className="mr-1 h-3 w-3" />
                {caseStudy.period}
              </span>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">
              {caseStudy.summary}
            </p>
          </CardContent>
          
          <CardFooter>
            <Link 
              href={`/case-studies/${caseStudy.id}`} 
              className="text-sm font-medium text-primary flex items-center hover:underline transition-all"
            >
              View case study
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
} 