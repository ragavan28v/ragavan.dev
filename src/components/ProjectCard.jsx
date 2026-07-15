import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Brain,
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  Cloud,
  Cog,
  Cpu,
  Database,
  Flame,
  GitBranch,
  Globe,
  LayoutDashboard,
  MapPin,
  Navigation,
  Network,
  Radar,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  WifiOff,
  Zap,
} from 'lucide-react';
import Carousel from './Carousel';
import ArchitectureFlow from './ArchitectureFlow';
import { fadeUp } from '../lib/animations';

const iconMap = {
  Activity,
  BarChart3,
  Brain,
  BrainCircuit,
  Cloud,
  Cog,
  Cpu,
  Database,
  Flame,
  Fire: Flame,
  GitBranch,
  Globe,
  LayoutDashboard,
  MapPin,
  Navigation,
  Network,
  Radar,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  WifiOff,
  Zap,
};

function highlightIcon(name) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className="h-4 w-4 text-accent" />;
}

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      className="cyber-panel relative p-0 shadow-sm border border-slate-200/50 dark:border-slate-800 bg-slate-50/25 dark:bg-slate-900/10 hover:border-accent/40 hover:shadow-md transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
    >
      <span className="cyber-panel-corner cyber-corner-tl z-30" />
      <span className="cyber-panel-corner cyber-corner-tr z-30" />
      <span className="cyber-panel-corner cyber-corner-bl z-30" />
      <span className="cyber-panel-corner cyber-corner-br z-30" />

      <div className="scanner-sweep z-20 opacity-75" />

      <div className="relative z-10 overflow-hidden rounded-[12px]">
        <div className="grid min-w-0 gap-0 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          className="min-w-0 p-4 lg:p-5 flex flex-col justify-between bg-white/10 dark:bg-slate-950/15 gap-3.5 lg:gap-4"
        >
          <div className="flex-1 flex flex-col justify-center">
            <Carousel slides={project.images} title={project.title} />
          </div>

          <div className="border border-theme rounded-xl p-2.5 lg:p-3 bg-white/30 dark:bg-slate-950/25">
            <span className="text-[8px] lg:text-[9px] font-mono font-bold tracking-widest text-secondary/70 uppercase mb-1.5 lg:mb-2 block">
              SYSTEM_FEATURES_MANIFEST:
            </span>
            <div className="space-y-1.5">
              {project.features.map((row) => (
                <div key={row.feature} className="flex gap-2 items-start text-[10px] lg:text-[11px] leading-snug">
                  <span className="h-1 w-1 rounded-full bg-accent mt-1.5 shrink-0" />
                  <p className="text-secondary">
                    <strong className="text-primary font-semibold">{row.feature}:</strong> {row.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="min-w-0 p-4 lg:p-5 bg-white/25 dark:bg-slate-900/25 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex rounded-full bg-[#EFF6FF] text-[#1D4ED8] dark:bg-[#1E293B] dark:text-[#3B82F6] px-3 py-1 text-[11px] font-semibold">
                {project.badge}
              </span>
              <span className="text-[9px] font-mono text-secondary/60 tracking-wider">
                SYS_DEV_LINK_OK
              </span>
            </div>

            <h3 className="mt-3 lg:mt-4 text-lg lg:text-xl font-bold text-primary leading-tight">{project.title}</h3>
            <p className="mt-2 text-[13px] lg:text-sm text-secondary leading-relaxed">{project.tagline}</p>

            <div className="mt-4 lg:mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-3">
              {project.highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center rounded-lg border border-theme bg-surface dark:bg-page p-2.5 lg:p-3 text-center transition-colors duration-200 hover:border-accent/30"
                >
                  {highlightIcon(item.icon)}
                  <p className="mt-1.5 lg:mt-2 text-[10px] lg:text-[11px] font-medium text-secondary leading-snug">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 lg:mt-5">
              <span className="text-[8px] lg:text-[9px] font-mono font-bold tracking-widest text-secondary/60 uppercase mb-1.5 lg:mb-2 block">
                SYSTEM_ARCHITECTURE_FLOW:
              </span>
              <ArchitectureFlow nodes={project.architecture} />
            </div>

            <div className="mt-4 lg:mt-5">
              <span className="text-[8px] lg:text-[9px] font-mono font-bold tracking-widest text-secondary/60 uppercase mb-1.5 lg:mb-2 block">
                CORE_TECHNOLOGY_STACK:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full bg-[#EFF6FF] text-[#1D4ED8] dark:bg-[#1E293B] dark:text-[#3B82F6] px-2.5 py-0.5 text-[11px] font-semibold hover:opacity-90 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-theme">
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline px-3 py-1.5 text-[11px] inline-flex items-center gap-1 border-accent"
                >
                  GitHub <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid px-3 py-1.5 text-[11px] inline-flex items-center gap-1"
                >
                  Live Demo <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary hover:text-accent transition-colors"
              >
                Engineering notes {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pt-3 border-t border-theme space-y-2.5 text-[11px] leading-relaxed text-secondary">
                    <p>
                      <span className="font-semibold text-primary block mb-0.5">Challenges Faced</span>
                      Ensuring high-efficiency performance and managing synchronization across offline states.
                    </p>
                    <p>
                      <span className="font-semibold text-primary block mb-0.5">Architecture Decisions</span>
                      Separating core processing logic from presentation components for scale and modulatory isolation.
                    </p>
                    <p>
                      <span className="font-semibold text-primary block mb-0.5">Performance Choices</span>
                      Deferred API updates and local database caching to minimize render blocking and bandwidth overhead.
                    </p>
                    <p>
                      <span className="font-semibold text-primary block mb-0.5">Next Steps</span>
                      Optimizing database query paths and introducing rigorous end-to-end integration testing.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
