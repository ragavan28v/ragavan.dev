import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Bot, Cpu, Database, Smartphone } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp, stagger } from '../lib/animations';

const focusAreas = [
  { label: 'AI Agents & Automation', icon: Bot },
  { label: 'React Native Mobile Development', icon: Smartphone },
  { label: 'Retrieval-Augmented Generation (RAG)', icon: Database },
  { label: 'Kubernetes Monitoring Systems', icon: Cpu },
  { label: 'Real-Time Data Pipelines', icon: Activity },
];

export default function About() {
  const { ref, controls } = useInView();

  return (
    <section id="about" className="section-shell min-h-screen flex items-center bg-surface scroll-mt-0">
      <div className="section-inner">
        <motion.div
          ref={ref}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          variants={stagger}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column: Copy */}
          <motion.div variants={fadeUp}>
            <p className="section-kicker">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Core Focus</h2>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              I build intelligent software systems that sit at the intersection of full-stack engineering, AI, and product thinking. My work spans MERN applications, React Native mobile apps, RAG pipelines, and real-time infrastructure. I care about systems that are scalable, well-structured, and genuinely useful.
            </p>
          </motion.div>

          {/* Right Column: Focus Areas Stack */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
              Currently focused on
            </h3>
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.label}
                  className="flex items-center gap-4 rounded-xl glass-effect p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{area.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
