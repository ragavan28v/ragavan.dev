import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { projects } from '../data/projects';
import { fadeUp, stagger } from '../lib/animations';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { ref, controls } = useInView();
  const orderedProjects = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <section id="projects" className="section-shell min-h-screen flex items-center bg-surface scroll-mt-0">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Things I&apos;ve built.</h2>
          </motion.div>

          <div className="mt-12 space-y-8">
            {orderedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
