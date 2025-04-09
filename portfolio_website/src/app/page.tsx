"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import HeroScene from "@/components/3d/HeroScene";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FiArrowRight, FiCode, FiLayers, FiCpu, FiGrid } from "react-icons/fi";

export default function Home() {
  const expertiseItems = [
    { 
      icon: <FiCpu className="h-6 w-6" />,
      title: "AI Solutions", 
      description: "Developing AI-powered products with a focus on natural language processing and machine learning." 
    },
    { 
      icon: <FiLayers className="h-6 w-6" />,
      title: "Product Strategy", 
      description: "Creating data-driven product roadmaps aligned with business goals and user needs."
    },
    { 
      icon: <FiCode className="h-6 w-6" />,
      title: "SaaS & B2B", 
      description: "Building scalable software solutions with optimized user experiences."
    },
    { 
      icon: <FiGrid className="h-6 w-6" />,
      title: "PropTech", 
      description: "Leveraging technology to transform the real estate industry."
    }
  ];

  return (
    <Layout>
      {/* Hero Section with 3D Background */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background z-10" />
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2 mb-2"
          >
            <Badge className="mb-4 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
              Product Manager
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-primary">Jay</span> Rangi
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 w-12 bg-primary my-6 mx-auto rounded-full"
          />
          
          <motion.h2 
            className="text-xl md:text-2xl text-foreground/80 mt-4 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Specializing in <span className="text-primary font-medium">AI-powered solutions</span>, 
            <span className="text-primary font-medium"> Machine Learning</span>, 
            <span className="text-primary font-medium"> SaaS</span>, and 
            <span className="text-primary font-medium"> B2B PropTech</span>
          </motion.h2>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="group">
              <Link href="/resume">
                View Resume
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                Explore Case Studies
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-bounce">
              <span>Scroll Down</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Badge className="mb-4 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
                Expertise
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Areas of Specialization
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-muted-foreground text-lg"
            >
              Leveraging technology to solve complex business challenges and deliver exceptional user experiences.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseItems.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-background/50 to-background/95 border-t border-border/20">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Looking for a Product Manager who can drive results through data-driven decisions and AI innovation?
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Get in Touch
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
