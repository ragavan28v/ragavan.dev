import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInView from '../hooks/useInView';
import { skillCategories } from '../data/skills';
import { fadeUp, stagger } from '../lib/animations';
import { Cpu, Terminal, Shield, Wrench, Layers, Smartphone } from 'lucide-react';

const iconsMap = {
  'Frontend': Layers,
  'Backend': Terminal,
  'AI & ML': Cpu,
  'Mobile': Smartphone,
  'Infra': Shield,
  'Tools': Wrench,
};

export default function Skills() {
  const { ref, controls } = useInView();
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay loop for skills categories
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
  };

  const activeCatData = skillCategories[activeCategory] || skillCategories[0];
  const CategoryIcon = iconsMap[activeCatData.label] || Cpu;

  return (
    <section id="skills" className="section-shell min-h-screen flex items-center bg-white dark:bg-page scroll-mt-0 relative overflow-hidden py-8 lg:py-12">
      {/* HUD scanning background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--accent-surface)_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

      <div className="section-inner relative z-10 w-full">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp} className="mb-6">
            <p className="section-kicker">Systems Matrix</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary">Technical Capabilities</h2>
            <p className="mt-1.5 text-sm text-secondary max-w-2xl font-sans leading-relaxed">
              Deploying advanced multi-agent systems, highly scalable MERN infrastructure, and performance-tuned mobile environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Console: Category Selector */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-secondary uppercase px-2 mb-0.5 block">
                Console Directory
              </span>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-2 scrollbar-hide">
                {skillCategories.map((category, idx) => {
                  const IconComponent = iconsMap[category.label] || Cpu;
                  const isActive = activeCategory === idx;
                  return (
                    <button
                      key={category.label}
                      type="button"
                      onClick={() => {
                        setActiveCategory(idx);
                        setIsPaused(true);
                      }}
                      onMouseEnter={() => {
                        setIsPaused(true);
                        setActiveCategory(idx);
                      }}
                      onMouseLeave={() => setIsPaused(false)}
                      className={`relative flex items-center gap-3.5 px-4 py-2.5 text-left border rounded-xl transition-all duration-300 shrink-0 lg:shrink-1 ${
                        isActive
                          ? 'border-accent bg-accent/5 dark:bg-accent/10 shadow-[0_0_12px_rgba(6,34,63,0.06)] dark:shadow-[0_0_15px_rgba(194,217,255,0.04)]'
                          : 'border-slate-200/50 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20 hover:border-accent/40'
                      }`}
                    >
                      {/* Corner Brackets on Active Panel */}
                      {isActive && (
                        <>
                          <span className="cyber-panel-corner cyber-corner-tl" />
                          <span className="cyber-panel-corner cyber-corner-tr" />
                          <span className="cyber-panel-corner cyber-corner-bl" />
                          <span className="cyber-panel-corner cyber-corner-br" />
                          <span className="scanner-sweep" />
                        </>
                      )}

                      <div className={`p-1.5 rounded-lg ${isActive ? 'text-accent bg-accent/10' : 'text-secondary/50'}`}>
                        <IconComponent className="h-4 w-4 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-primary leading-none">{category.label}</h3>
                        <span className="text-[9px] text-secondary font-mono mt-0.5 block">
                          SYSTEM_BUS_{category.skills.length.toString().padStart(2, '0')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right HUD: Holographic Visualizer */}
            <div className="lg:col-span-8 cyber-panel p-5 lg:p-6 min-h-[310px] lg:h-full flex flex-col justify-between overflow-hidden shadow-sm bg-slate-50/45 dark:bg-slate-950/20">
              {/* Corner brackets */}
              <span className="cyber-panel-corner cyber-corner-tl" />
              <span className="cyber-panel-corner cyber-corner-tr" />
              <span className="cyber-panel-corner cyber-corner-bl" />
              <span className="cyber-panel-corner cyber-corner-br" />

              <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                    RESOLVING STATE: {activeCatData.label.toUpperCase()}
                  </span>
                </div>
                <div className="text-[9px] font-mono text-secondary">
                  LATENCY: &lt;1.0ms
                </div>
              </div>

              {/* Orbital Skill Cluster Layout */}
              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-2 md:grid-cols-3 gap-3"
                  >
                    {activeCatData.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -1 }}
                        className="relative group p-3 border border-slate-200/50 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/40 rounded-lg hover:border-accent dark:hover:border-accent transition-all duration-200 cursor-default overflow-hidden flex flex-col justify-between min-h-[76px]"
                      >
                        {/* Interactive inner border glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono text-secondary/50">0x{idx.toString(16).toUpperCase()}</span>
                          <span className="h-1 w-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                        </div>
                        <h4 className="text-xs font-semibold text-primary group-hover:text-accent transition-colors relative z-10">
                          {skill}
                        </h4>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-3 mt-4 flex items-center justify-between text-[9px] font-mono text-secondary">
                <span>MODULE_SYS_VER: 2.1.2</span>
                <span className="flex items-center gap-1">
                  <CategoryIcon className="h-2.5 w-2.5 animate-spin" style={{ animationDuration: '8s' }} />
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
