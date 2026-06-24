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
    <section id="github" className="section-shell min-h-[calc(100vh-4.5rem)] flex items-center bg-surface scroll-mt-0 py-10 overflow-visible">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp} className="mb-6">
            <p className="section-kicker">Open Source</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">GitHub HUD</h2>
            <p className="mt-1.5 text-sm text-secondary max-w-3xl font-sans leading-relaxed">
              A single-column cyber HUD emphasizing a clean, readable summary — no duplicated panels.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="cyber-panel p-6 relative overflow-visible">
            <span className="cyber-panel-corner cyber-corner-tl" />
            <span className="cyber-panel-corner cyber-corner-tr" />
            <span className="cyber-panel-corner cyber-corner-bl" />
            <span className="cyber-panel-corner cyber-corner-br" />
            <div className="scanner-sweep z-20 opacity-70" />

            <div className="relative z-10 grid gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-[0.35em] text-secondary">REPO HUD</p>
                  <h3 className="text-2xl font-bold text-primary">Contribution Overview</h3>
                </div>
                <div className="text-[11px] font-mono text-secondary">SYNC: ONLINE</div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                <div className="flex-1 rounded-2xl bg-white/90 p-4 border border-slate-200/60 dark:bg-slate-950/40 dark:border-slate-800">
                  <img
                    src="https://ghchart.vercel.app/ragavanv?color=%231d4ed8"
                    alt="GitHub contribution graph"
                    loading="lazy"
                    className="w-full rounded-xl"
                  />
                </div>

                <div className="w-full lg:w-72 flex flex-col gap-3">
                  <div className="rounded-lg bg-white/90 p-3 border border-slate-200/60 dark:bg-slate-950/30 dark:border-slate-800">
                    <p className="text-[10px] font-semibold text-secondary uppercase">Streak</p>
                    <p className="text-2xl font-bold text-primary">12 days</p>
                  </div>
                  <div className="rounded-lg bg-white/90 p-3 border border-slate-200/60 dark:bg-slate-950/30 dark:border-slate-800">
                    <p className="text-[10px] font-semibold text-secondary uppercase">Top language</p>
                    <p className="text-2xl font-bold text-primary">Python</p>
                  </div>
                  <div className="rounded-lg bg-white/90 p-3 border border-slate-200/60 dark:bg-slate-950/30 dark:border-slate-800">
                    <p className="text-[10px] font-semibold text-secondary uppercase">Weekly commits</p>
                    <p className="text-2xl font-bold text-primary">18</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {repos.map((r) => (
                  <div key={r.name} className="rounded-lg p-3 bg-white/90 border border-slate-200/60 dark:bg-slate-950/30 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-blue-700">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-primary truncate">{r.name}</div>
                        <div className="text-xs text-secondary truncate">{r.language} • {r.stars}★</div>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-secondary line-clamp-3">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-6 text-right">
            <a href="https://github.com/ragavanv" target="_blank" rel="noreferrer" className="text-accent font-semibold">View all repositories <Github className="inline-block h-4 w-4" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
