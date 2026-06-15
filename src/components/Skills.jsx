import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { skillCategories } from '../data/skills';
import { fadeUp, stagger } from '../lib/animations';

export default function Skills() {
  const { ref, controls } = useInView();

  return (
    <section id="skills" className="section-shell min-h-screen flex items-center bg-white dark:bg-page scroll-mt-0">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Technical Capabilities</h2>
            <p className="mt-2 text-base text-secondary max-w-2xl">
              Intelligent systems development, modern full-stack web architectures, and native mobile infrastructure.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <motion.div key={category.label} variants={fadeUp} className="card-shell min-w-0">
                <h3 className="text-sm font-semibold text-primary mb-4">{category.label}</h3>

                <motion.div variants={stagger} className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={fadeUp}
                      className="inline-flex items-center rounded-full border border-theme bg-[#F3F4F6] text-[#374151] dark:bg-[#1E293B] dark:text-[#F1F5F9] dark:border-[#334155] px-3 py-1 text-xs font-medium transition-colors duration-150 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
