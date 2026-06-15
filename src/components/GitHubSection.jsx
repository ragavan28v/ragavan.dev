import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Github, Star } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp, stagger } from '../lib/animations';

const repos = [
  {
    name: 'SpendMap',
    description: 'AI-assisted personal finance app with secure mobile architecture.',
    language: 'TypeScript',
    stars: '128',
  },
  {
    name: 'web-monitoring-agent',
    description: 'Real-time crawling, deduplication, and summary generation pipeline.',
    language: 'Python',
    stars: '92',
  },
  {
    name: 'k8s-ai-monitor',
    description: 'Kubernetes discovery and analysis dashboard with AI insights.',
    language: 'Python',
    stars: '74',
  },
];

export default function GitHubSection() {
  const { ref, controls } = useInView();

  return (
    <section id="github" className="section-shell min-h-screen flex items-center bg-surface scroll-mt-0">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Open Source</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">GitHub Activity</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 overflow-hidden rounded-xl glass-effect p-6 shadow-md">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-4">Contributions</h3>
            <div className="overflow-x-auto">
              <img
                src="https://ghchart.vercel.app/ragavanv?color=%231d4ed8"
                alt="GitHub contribution graph"
                loading="lazy"
                className="min-w-[600px] w-full rounded-lg"
              />
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <article key={repo.name} className="card-shell flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-primary truncate">{repo.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-secondary line-clamp-2">{repo.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-[11px] text-secondary font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
                    {repo.stars}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="https://github.com/ragavanv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              View all repositories <Github className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
