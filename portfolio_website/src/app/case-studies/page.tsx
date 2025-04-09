"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';

export default function CaseStudiesPage() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore my work through detailed case studies showcasing the challenges, solutions, and results.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * (index + 1)
              }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/case-studies/${study.id}`} className="block group">
                <div className="relative h-56 w-full">
                  <Image
                    src={study.thumbnailImage || study.coverImage}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                        +{study.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-2 transition-colors group-hover:text-indigo-600">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {study.company} • {study.period}
                  </p>
                  <p className="text-gray-700 line-clamp-3">
                    {study.summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </Layout>
  );
} 