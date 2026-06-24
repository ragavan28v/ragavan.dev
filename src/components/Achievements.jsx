import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import useInView from '../hooks/useInView';
import { achievements } from '../data/achievements';
import { fadeUp, stagger } from '../lib/animations';

export default function Achievements() {
  const { ref, controls } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showAllDetails, setShowAllDetails] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeAchievement = useMemo(
    () => achievements[activeIndex] ?? achievements[0],
    [activeIndex]
  );

  return (
    <section
      id="achievements"
      className="section-shell min-h-[74vh] lg:min-h-[82vh] flex items-center bg-surface scroll-mt-0 relative overflow-hidden py-4 lg:py-5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(var(--accent-surface)_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      <div className="section-inner relative z-10 w-full">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp} className="mb-4 lg:mb-5">
              <p className="section-kicker">Achievements</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary">Milestones & Honors</h2>
            <p className="mt-1.5 text-sm text-secondary max-w-2xl font-sans leading-relaxed">
              Key accomplishments, competition victories, and community contributions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-start">
            {/* Left Detail Console (swapped) */}
            <div className="lg:col-span-8 min-w-0">
              <div className="cyber-panel relative border border-slate-200/50 dark:border-slate-800 bg-slate-50/45 dark:bg-slate-950/16 shadow-sm p-3 lg:p-4 h-[380px] lg:h-[440px]">
                <span className="cyber-panel-corner cyber-corner-tl z-30" />
                <span className="cyber-panel-corner cyber-corner-tr z-30" />
                <span className="cyber-panel-corner cyber-corner-bl z-30" />
                <span className="cyber-panel-corner cyber-corner-br z-30" />
                <div className="scanner-sweep z-20 opacity-60" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="grid gap-2 border-b border-slate-200/50 dark:border-slate-800/50 pb-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase">
                        RESOLVING STATE: {activeAchievement.date}
                      </p>
                      <h3 className="mt-2 text-[1.05rem] lg:text-[1.25rem] font-semibold text-primary leading-tight">
                          {activeAchievement.title}
                      </h3>
                        <p className="mt-1 text-[12px] text-secondary">{activeAchievement.organization}</p>
                    </div>
                    <span className="inline-flex w-fit max-w-full rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-semibold text-[#1D4ED8] dark:bg-[#1E293B] dark:text-[#3B82F6] truncate lg:justify-self-end">
                      {activeAchievement.project}
                    </span>
                  </div>

                <div className="mt-3 lg:mt-3 grid gap-3 lg:grid-cols-[1.2fr_0.8fr] p-0 flex-1 overflow-auto items-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeAchievement.title}-summary`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-2"
                    >
                      <p className="text-[12px] leading-snug text-secondary pr-2">
                        {activeAchievement.summary}
                      </p>

                      <div className="space-y-2">
                        {(showAllDetails ? activeAchievement.details : activeAchievement.details.slice(0, 2)).map((point) => (
                          <p key={point} className="flex gap-2 text-[12px] lg:text-[13px] leading-relaxed text-secondary">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </p>
                        ))}

                        {activeAchievement.details.length > 2 && (
                          <button
                            type="button"
                            onClick={() => setShowAllDetails((v) => !v)}
                            className="mt-2 text-[11px] font-semibold text-accent hover:underline"
                          >
                            {showAllDetails ? 'Show less' : 'Show more'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeAchievement.title}-tech`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="self-start rounded-xl border border-theme bg-white/30 dark:bg-slate-950/20 p-2.5 lg:p-3"
                    >
                      <span className="text-[8px] font-mono font-bold tracking-widest text-secondary/60 uppercase mb-2.5 block">
                        TECHNOLOGY_STACK:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeAchievement.technologies.split(',').map((tech) => (
                          <span
                            key={tech.trim()}
                            className="rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-[9px] leading-none font-semibold text-blue-700 shadow-sm shadow-blue-100/60 transition-colors duration-200 hover:bg-blue-100 hover:border-blue-300"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                  <div className="mt-auto pt-3 border-t border-theme">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-secondary">
                      <span>Signal locked</span>
                      <span className="inline-flex items-center gap-1 text-accent">
                        Active <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Directory (vertical single column) */}
            <div className="lg:col-span-4 min-w-0 flex flex-col gap-2 h-[380px] lg:h-[440px]">
              <span className="text-[10px] font-bold tracking-widest text-secondary uppercase px-2 mb-0.5 block">
                Achievement Directory
              </span>
              <div className="flex flex-col gap-2 pr-1">
                {achievements.map((item, idx) => {
                  const active = activeIndex === idx;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsPaused(true);
                        setShowAllDetails(false);
                      }}
                      onMouseEnter={() => {
                        setActiveIndex(idx);
                        setIsPaused(true);
                      }}
                      onMouseLeave={() => setIsPaused(false)}
                      className={`relative flex items-start gap-3.5 px-3 py-2 text-left border rounded-xl transition-all duration-300 w-full ${
                        active
                          ? 'border-accent bg-accent/5 dark:bg-accent/10 shadow-[0_0_12px_rgba(6,34,63,0.06)]'
                          : 'border-slate-200/50 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20 hover:border-accent/40'
                      }`}
                    >
                      {active && (
                        <>
                          <span className="cyber-panel-corner cyber-corner-tl" />
                          <span className="cyber-panel-corner cyber-corner-tr" />
                          <span className="cyber-panel-corner cyber-corner-bl" />
                          <span className="cyber-panel-corner cyber-corner-br" />
                        </>
                      )}

                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${active ? 'text-accent bg-accent/10' : 'text-secondary/50'}`}>
                        <Trophy className="h-4 w-4 stroke-[2]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[10px] lg:text-[11px] font-bold text-primary leading-tight">
                            {item.title}
                          </h3>
                          <span className="text-[8px] font-mono text-secondary/60 shrink-0">{item.date}</span>
                        </div>
                          <p className="mt-0.5 text-[8px] lg:text-[9px] text-secondary">{item.organization}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="text-[9px] font-mono text-secondary flex items-center justify-between px-2 pt-1">
                <span>MODULE_SYS_VER: 2.1.2</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  ACTIVE_LINK_STABLE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
