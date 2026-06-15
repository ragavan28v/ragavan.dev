import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp } from '../lib/animations';

export default function Experience() {
  const { ref, controls } = useInView();

  return (
    <section id="experience" className="section-shell min-h-screen flex items-center bg-white dark:bg-page scroll-mt-0">
      <div className="section-inner">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp}>
          <p className="section-kicker">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Work History</h2>

          <div className="mt-12 max-w-3xl">
            <div className="relative border-l border-theme pl-6 ml-3 space-y-10">
              {/* Timeline marker */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-theme bg-white dark:bg-page">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <article className="card-shell">
                  <h3 className="text-base font-bold text-primary">
                    AI Engineering Intern <span className="text-secondary font-normal">·</span> TechLab Solutions
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-secondary font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>June 2025 – Present</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    Designed and built agentic AI systems, developed RAG architectures, and orchestrated large language models. Integrated real-time data ingestion pipelines with web and mobile platforms, resolving critical scalability roadblocks in production infrastructure.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Agentic AI Systems', 'RAG Architecture', 'LLM Orchestration', 'Real-Time Integrations'].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full bg-[#EFF6FF] text-[#1D4ED8] dark:bg-[#1E293B] dark:text-[#3B82F6] px-3 py-0.5 text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
