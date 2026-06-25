import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Github, Star } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp, stagger } from '../lib/animations';

const githubUser = 'ragavan28v';

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
    <section id="github" className="section-shell bg-surface scroll-mt-0 py-6 overflow-visible">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp} className="mb-3">
            <p className="section-kicker">Open Source</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary">GitHub HUD</h2>
            <p className="mt-1 text-sm text-secondary max-w-2xl font-sans leading-relaxed">
              A single-column cyber HUD emphasizing a clean, readable summary — no duplicated panels.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="cyber-panel p-4 relative overflow-visible">
            <span className="cyber-panel-corner cyber-corner-tl" />
            <span className="cyber-panel-corner cyber-corner-tr" />
            <span className="cyber-panel-corner cyber-corner-bl" />
            <span className="cyber-panel-corner cyber-corner-br" />
            <div className="scanner-sweep z-20 opacity-70" />

            <div className="relative z-10 grid gap-3">
              <div className="flex flex-col gap-2 pb-2 border-b border-slate-200/40 dark:border-slate-800/60 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-[0.35em] text-secondary">REPO HUD</p>
                  <h3 className="text-lg font-bold text-primary">Activity Overview</h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-[9px] font-mono text-secondary">SYNC: ONLINE</div>
                  <a href={`https://github.com/${githubUser}`} target="_blank" rel="noreferrer" className="text-accent text-sm font-semibold">
                    View all repositories <Github className="inline-block h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="grid gap-2 lg:grid-cols-[1.6fr_1fr]">
                  <div className="rounded-lg bg-white/90 p-2 border border-slate-200/60 dark:bg-slate-950/40 dark:border-slate-800 min-h-[12rem] overflow-hidden">
                    <img
                      src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=transparent&hide_border=true&cache_seconds=86400`}
                      alt="GitHub stats overview"
                      loading="eager"
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="rounded-lg bg-white/90 p-2 border border-slate-200/60 dark:bg-slate-950/40 dark:border-slate-800 min-h-[5.75rem] overflow-hidden">
                      <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&theme=transparent&hide_border=true&cache_seconds=86400`}
                        alt="GitHub streak stats"
                        loading="eager"
                        className="w-full h-full rounded-lg object-contain"
                      />
                    </div>
                    <div className="rounded-lg bg-white/90 p-2 border border-slate-200/60 dark:bg-slate-950/40 dark:border-slate-800 min-h-[5.75rem] overflow-hidden">
                      <img
                        src={`https://ghchart.rshah.org/${githubUser}?color=%231d4ed8`}
                        alt="GitHub contribution heatmap"
                        loading="eager"
                        className="w-full h-full rounded-lg object-contain"
                      />
                    </div>
                  </div>
                </div>

              </div>

              <div className="grid gap-2 md:grid-cols-3">
                {repos.map((r) => (
                  <div key={r.name} className="rounded-lg p-2.5 bg-white/90 border border-slate-200/60 dark:bg-slate-950/30 dark:border-slate-800">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-primary truncate">{r.name}</div>
                        <div className="text-[10px] text-secondary truncate">{r.language} • {r.stars}★</div>
                      </div>
                    </div>
                    <p className="text-xs text-secondary line-clamp-2">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
