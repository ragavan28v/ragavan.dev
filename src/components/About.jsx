import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Bot, Cpu, Database, Smartphone } from 'lucide-react';
import useInView from '../hooks/useInView';
import { cardReveal, fadeDown, fadeUp, stagger } from '../lib/animations';

const focusAreas = [
  { label: 'Full-Stack Web Applications', icon: Cpu },
  { label: 'AI Integration in Products', icon: Bot },
  { label: 'React Native Mobile Development', icon: Smartphone },
  { label: 'API Design & Data Flow', icon: Database },
  { label: 'Real-Time Systems', icon: Activity },
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
          <motion.div variants={stagger}>
            <motion.p variants={fadeDown} className="section-kicker text-sm">
              About
            </motion.p>
            <motion.h2 variants={fadeDown} className="mt-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              What I Build
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-secondary">
              I build full-stack applications and integrate AI where it adds real value. My work spans MERN-based web apps, API-driven products, and mobile experiences with React Native. I&apos;m also actively learning and building in the mobile space so I can create products that feel consistent across web and app.
            </motion.p>
          </motion.div>

          {/* Right Column: Focus Areas Stack */}
          <motion.div variants={stagger} className="flex flex-col gap-3">
            <motion.h3 variants={fadeDown} className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary mb-2">
              Currently focused on
            </motion.h3>
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  custom={index}
                  variants={cardReveal}
                  className="flex items-center gap-4 rounded-xl glass-effect p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{area.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
