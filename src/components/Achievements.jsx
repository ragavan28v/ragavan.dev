import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { achievements } from '../data/achievements';
import { fadeUp, stagger } from '../lib/animations';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  const { ref, controls } = useInView();

  return (
    <section id="achievements" className="section-shell min-h-screen flex items-center bg-white dark:bg-page scroll-mt-0">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Achievements</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Milestones & Honors</h2>
            <p className="mt-2 text-base text-secondary max-w-2xl">
              Key accomplishments, competition victories, and community contributions.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="card-shell flex flex-col md:flex-row gap-4 items-start p-6 bg-slate-50/55 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Trophy className="h-6 w-6 stroke-[2]" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <span className="text-xs font-semibold text-accent bg-accent/5 px-2 py-0.5 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-secondary/90">{item.organization}</p>
                  <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
