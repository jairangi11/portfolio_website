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
import { FiArrowRight } from 'react-icons/fi';
import { RiMindMap } from "react-icons/ri";
import { SiFigma } from 'react-icons/si';
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
      className="h-full"
    >
      <Card className="relative h-full border border-border/40 bg-card/50 hover:border-border/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none z-0" />
        
        <div className="relative z-10 flex flex-col flex-grow">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={caseStudy.thumbnailImage || caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <CardHeader className="pb-3 pt-4">
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
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <h3 className="text-lg font-semibold leading-snug line-clamp-2 transition-colors group-hover:text-primary">
                {caseStudy.title}
              </h3>
            </Link>
            <div className="text-sm text-muted-foreground mt-1 font-medium">
              {caseStudy.company}
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow pb-3">
            <p className="text-muted-foreground line-clamp-3 text-sm">
              {caseStudy.summary}
            </p>
          </CardContent>
          
          <CardFooter className="pt-3 pb-4 flex justify-between items-center">
            <Link 
              href={`/case-studies/${caseStudy.id}`} 
              className="group text-sm font-medium text-primary flex items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              View case study
              <FiArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              {caseStudy.figmaLink && (
                <Link 
                  href={caseStudy.figmaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Figma file"
                  className="flex items-center space-x-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
                >
                  <SiFigma className="h-4 w-4 text-pink-500" />
                  <span>Figma</span>
                </Link>
              )}
              {caseStudy.figmaLink && caseStudy.whimsicalLink && (
                <span className="text-muted-foreground/50">|</span>
              )}
              {caseStudy.whimsicalLink && (
                <Link 
                  href={caseStudy.whimsicalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Whimsical board"
                  className="flex items-center space-x-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
                >
                  <RiMindMap className="h-4 w-4 text-blue-500" />
                  <span>Whimsical</span>
                </Link>
              )}
            </div>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
} 