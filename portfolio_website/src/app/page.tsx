"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import HeroScene from "@/components/3d/HeroScene";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with 3D Background */}
      <section className="relative">
        <HeroScene />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Jay Rangi
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Product Manager specializing in AI-powered solutions, Machine Learning (ML), SaaS, and B2B PropTech
          </motion.h2>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href="/resume" 
              className="px-6 py-3 rounded-md bg-accent-main text-white hover:bg-accent-main/90 transition-colors"
            >
              View Resume
            </Link>
            <Link 
              href="/case-studies" 
              className="px-6 py-3 rounded-md border border-accent-main text-accent-main hover:bg-accent-main/10 transition-colors"
            >
              Explore Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Areas of Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "AI Solutions", 
                description: "Developing AI-powered products with a focus on natural language processing and machine learning." 
              },
              { 
                title: "Product Strategy", 
                description: "Creating data-driven product roadmaps aligned with business goals and user needs."
              },
              { 
                title: "SaaS & B2B", 
                description: "Building scalable software solutions with optimized user experiences."
              },
              { 
                title: "PropTech", 
                description: "Leveraging technology to transform the real estate industry."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-accent-main/5">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Looking for a Product Manager who can drive results through data-driven decisions and AI innovation?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="px-6 py-3 rounded-md bg-accent-main text-white hover:bg-accent-main/90 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
