"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/layout/Layout";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isXPEarned, setIsXPEarned] = useState(false);
  
  // Find the blog post with matching slug
  const post = blogPosts.find((post) => post.slug === slug);
  
  // If post not found, return 404
  if (!post) {
    notFound();
  }

  // Calculate read progress and award XP
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom (80% of content)
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
      
      // If user has read 80% of the article, award XP
      if (scrollPercentage > 0.8 && !isXPEarned) {
        setIsXPEarned(true);
        
        // Get current XP from localStorage or default to 0
        const currentXP = parseInt(localStorage.getItem("portfolioXP") || "0");
        
        // Award 50 XP for reading a blog post
        localStorage.setItem("portfolioXP", (currentXP + 50).toString());
        
        // Show a toast or notification
        // This would use a toast component in a real implementation
        console.log("You earned 50 XP for reading this article! 🎉");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isXPEarned]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-muted-foreground">
              {formatDate(post.date)} · {post.readTime}
            </div>
            <div className="text-sm font-medium">
              By {post.author}
            </div>
          </div>

          <div className="relative h-80 md:h-96 w-full mb-10 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 pt-8 border-t"
        >
          <h2 className="text-2xl font-bold mb-6">Keep Exploring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(otherPost => otherPost.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="border rounded-lg overflow-hidden flex bg-card hover:bg-muted/50 transition-all duration-200">
                    <div className="relative w-24 h-24">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(relatedPost.date)} · {relatedPost.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </article>
    </Layout>
  );
} 