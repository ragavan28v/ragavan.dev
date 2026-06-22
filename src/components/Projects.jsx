import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInView from '../hooks/useInView';
import { projects } from '../data/projects';
import { fadeUp, stagger } from '../lib/animations';
import ProjectCard from './ProjectCard';

const filters = ['All', 'AI System', 'Mobile App', 'Infrastructure'];

export default function Projects() {
  const { ref, controls } = useInView();
  const [filter, setFilter] = useState('All');

  const orderedProjects = [...projects].sort((a, b) => a.priority - b.priority);
  const filteredProjects = orderedProjects.filter(
    (project) => filter === 'All' || project.badge === filter
  );

  return (
    <section id="projects" className="section-shell min-h-screen flex items-center bg-surface scroll-mt-0">
      <div className="section-inner w-full">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Things I&apos;ve built.</h2>
          </motion.div>

          {/* Futuristic Filter Bar */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3 items-center border-b border-slate-200/50 dark:border-slate-800 pb-6 mb-8"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase mr-2">
              FILTER_TARGET:
            </span>
            <div className="flex flex-wrap gap-2">
              {filters.map((opt) => {
                const isActive = filter === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFilter(opt)}
                    className={`relative px-4 py-2 text-xs font-mono font-bold uppercase transition-all duration-300 rounded-lg border ${
                      isActive
                        ? 'border-accent bg-accent/5 dark:bg-accent/10 text-accent'
                        : 'border-slate-200/50 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/10 text-secondary hover:border-accent/40'
                    }`}
                  >
                    {isActive && (
                      <>
                        <span className="cyber-panel-corner cyber-corner-tl" />
                        <span className="cyber-panel-corner cyber-corner-tr" />
                        <span className="cyber-panel-corner cyber-corner-bl" />
                        <span className="cyber-panel-corner cyber-corner-br" />
                      </>
                    )}
                    <span className="flex items-center gap-1.5">
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />}
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Animating Projects Grid */}
          <motion.div layout className="mt-8 space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
