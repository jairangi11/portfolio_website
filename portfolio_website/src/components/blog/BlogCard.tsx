import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardFooter 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
  variant?: 'default' | 'featured';
}

export default function BlogCard({ post, index, variant = 'default' }: BlogCardProps) {
  const isFeatured = variant === 'featured';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * (index + 1)
      }}
      className={cn(
        "h-full",
        isFeatured && "md:col-span-2"
      )}
    >
      <Card className={cn(
        "h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border border-border/50",
        isFeatured ? "md:flex md:flex-row" : ""
      )}>
        <div className={cn(
          "relative overflow-hidden",
          isFeatured ? "md:w-1/2 h-60 md:h-auto" : "h-48 w-full"
        )}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary text-primary-foreground border-none">
            {post.category}
          </Badge>
        </div>
        
        <div className={cn(
          "flex flex-col",
          isFeatured ? "md:w-1/2" : ""
        )}>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex items-center text-xs text-muted-foreground">
                <FiCalendar className="mr-1 h-3 w-3" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <FiClock className="mr-1 h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Link 
              href={`/blog/${post.slug}`} 
              className="group-hover:text-primary transition-colors"
            >
              <h3 className={cn(
                "font-bold leading-tight transition-colors group-hover:text-primary line-clamp-2",
                isFeatured ? "text-2xl" : "text-xl"
              )}>
                {post.title}
              </h3>
            </Link>
          </CardHeader>
          
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="bg-muted/30 text-muted-foreground hover:bg-muted/40 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between items-center mt-auto pt-4">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
            
            <Link 
              href={`/blog/${post.slug}`} 
              className="text-sm font-medium text-primary flex items-center hover:underline transition-all"
            >
              Read more
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
} 