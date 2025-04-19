"use client";

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudiesData';
import Layout from '@/components/layout/Layout';

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id as string;
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to all case studies
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {caseStudy.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  <FiTag className="mr-1" size={14} />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold mb-3">{caseStudy.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <span className="font-medium mr-4">{caseStudy.company}</span>
              <span className="flex items-center">
                <FiCalendar className="mr-1" />
                {caseStudy.period}
              </span>
            </div>
            
            <p className="text-xl text-gray-700 mb-8">
              {caseStudy.summary}
            </p>
          </div>

          <div className="mb-12 relative aspect-video w-full">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-700">
              {caseStudy.challenge}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-700">
              {caseStudy.solution}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Approach</h2>
            <div className="text-gray-700">
              <p>{caseStudy.approach}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <div className="text-gray-700">
              <p>{caseStudy.results}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
            <div className="text-gray-700">
              <p>{caseStudy.learnings}</p>
            </div>
          </section>

          {caseStudy.testimonial && (
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="italic text-gray-700 mb-4">
                &quot;{caseStudy.testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center">
                {caseStudy.testimonial.avatar && (
                  <div className="mr-3 relative w-12 h-12">
                    <Image
                      src={caseStudy.testimonial.avatar}
                      alt={caseStudy.testimonial.name}
                      className="rounded-full"
                      fill
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{caseStudy.testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{caseStudy.testimonial.title}</p>
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </main>
    </Layout>
  );
} 