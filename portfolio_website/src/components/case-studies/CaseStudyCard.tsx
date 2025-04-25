import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiArrowRight, FiLayout } from 'react-icons/fi';
import { RiMindMap } from "react-icons/ri";
import { SiGooglesheets } from 'react-icons/si';
import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element && e.target.closest('a, button')) {
      return; 
    }
    router.push(`/case-studies/${caseStudy.id}`);
  };

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
      <Card 
        className="group relative h-full border border-border/40 bg-card/50 hover:border-border/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none z-0" />
        
        <div className="relative z-10 flex flex-col flex-grow">
          <div className="relative h-48 w-full overflow-hidden bg-muted/20">
            <Image
              src={caseStudy.thumbnailImage || caseStudy.coverImage}
              alt={`${caseStudy.title} cover image`}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          <CardHeader className="pb-3 pt-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {caseStudy.tags.slice(0, 3).map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-primary/20 text-xs px-2 py-0.5"
                >
                  {tag}
                </Badge>
              ))}
              {caseStudy.tags.length > 3 && (
                <Badge 
                  variant="outline" 
                  className="bg-muted/30 text-muted-foreground border-muted/20 text-xs px-2 py-0.5"
                >
                  +{caseStudy.tags.length - 3}
                </Badge>
              )}
            </div>
            <h3 className="text-lg font-semibold leading-snug line-clamp-2 transition-colors group-hover:text-primary">
              {caseStudy.title}
            </h3>
            <div className="text-sm text-muted-foreground mt-1 font-medium">
              {caseStudy.company}
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow pb-3">
            <p className="text-muted-foreground line-clamp-3 text-sm">
              {caseStudy.summary}
            </p>
          </CardContent>
          
          <CardFooter className="pt-4 pb-4 flex justify-between items-center border-t border-border/20 mt-auto">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              {caseStudy.figmaLink && (
                <Link 
                  href={caseStudy.figmaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Interactive Wireframes"
                  className="flex items-center space-x-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-1 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiLayout className="h-4 w-4 text-purple-500 transition-transform group-hover/link:scale-110" />
                  <span className="hidden sm:inline text-xs">Wireframes</span>
                </Link>
              )}
              {caseStudy.figmaLink && caseStudy.whimsicalLink && (
                <span className="text-muted-foreground/30">|</span>
              )}
              {caseStudy.whimsicalLink && (
                <Link 
                  href={caseStudy.whimsicalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Whimsical board"
                  className="flex items-center space-x-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-1 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <RiMindMap className="h-4 w-4 text-blue-500 transition-transform group-hover/link:scale-110" />
                  <span className="hidden sm:inline text-xs">Whimsical</span>
                </Link>
              )}
              {((caseStudy.figmaLink || caseStudy.whimsicalLink)) && caseStudy.sheetsLink && (
                <span className="text-muted-foreground/30">|</span>
              )}
              {caseStudy.sheetsLink && (
                <Link 
                  href={caseStudy.sheetsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Google Sheets file"
                  className="flex items-center space-x-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-1 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SiGooglesheets className="h-4 w-4 text-green-500 transition-transform group-hover/link:scale-110" />
                  <span className="hidden sm:inline text-xs">Sheets</span>
                </Link>
              )}
            </div>
            <div className="text-primary opacity-70 group-hover:opacity-100 transition-opacity">
              <FiArrowRight className="h-5 w-5" />
            </div>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
} 