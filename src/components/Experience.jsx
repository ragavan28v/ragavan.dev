import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp, stagger } from '../lib/animations';

const experiences = [
  {
    company: 'G Zoft Tech Solutions',
    role: 'MERN Stack Developer Intern',
    period: 'January 2025',
    station: 'GZOFT_NODE_01',
    description: 'Engineered SkillSwap, a MERN stack–based skill exchange platform. Built JWT-authenticated Node.js/Express endpoints with responsive UI components for stateless session handling. Optimised MongoDB schemas for efficient querying, and integrated real-time chat and push notifications to boost user engagement and platform interactivity.',
    skills: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB Optimization', 'JWT Authentication', 'Real-Time Chat', 'Push Notifications']
  },
  {
    company: 'Codeboosters Tech',
    role: 'AI Agents Intern',
    period: 'July 2025',
    station: 'CODEBOOSTERS_NODE_02',
    description: 'Architected a career path planning platform combining FastAPI and Groq API with protected server endpoints, database-driven workflows, and AI-powered roadmap generation. Visualised skill progression and milestones via React Flow career roadmaps. Embedded a context-aware AI assistant and fine-tuned system architecture for low-latency performance and responsiveness.',
    skills: ['FastAPI', 'Groq API', 'React Flow', 'AI Roadmaps', 'AI Agents', 'Low-Latency Architecture', 'API Protection']
  }
];

export default function Experience() {
  const { ref, controls } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto loop chronology nodes every 6 seconds (resets on manual tab click)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="experience" className="section-shell min-h-[85vh] lg:min-h-screen flex items-center bg-surface scroll-mt-0 relative overflow-hidden py-10 lg:py-16">
      {/* HUD scanning background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--accent-surface)_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      <div className="section-inner relative z-10 w-full">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8 text-center lg:text-left">
            <p className="section-kicker">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary">Work History</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Console: Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="border border-slate-200/50 dark:border-slate-800 bg-slate-50/45 dark:bg-slate-950/20 p-5 rounded-xl relative shadow-sm h-full flex flex-col justify-between">
                {/* Corners */}
                <span className="cyber-panel-corner cyber-corner-tl" />
                <span className="cyber-panel-corner cyber-corner-tr" />
                <span className="cyber-panel-corner cyber-corner-bl" />
                <span className="cyber-panel-corner cyber-corner-br" />

                <div>
                  <div className="border-b border-slate-200/50 dark:border-slate-800/50 pb-2.5 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase block">
                      EXPERIENCE REGISTRY [DB_MODE]
                    </span>
                    <p className="mt-1 text-[11px] text-secondary font-sans leading-relaxed">
                      Select a registry node to decode internship archives, systems engineering logs, and specific competencies.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {experiences.map((exp, idx) => {
                      const active = activeIndex === idx;
                      return (
                        <button
                          key={exp.company}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative group flex flex-col ${
                            active
                              ? 'border-[var(--accent)] bg-slate-100/50 dark:bg-slate-900/40 shadow-sm'
                              : 'border-slate-200/50 dark:border-slate-800 bg-transparent hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          {/* Corners for active tab */}
                          {active && (
                            <>
                              <span className="cyber-panel-corner cyber-corner-tl" />
                              <span className="cyber-panel-corner cyber-corner-tr" />
                              <span className="cyber-panel-corner cyber-corner-bl" />
                              <span className="cyber-panel-corner cyber-corner-br" />
                            </>
                          )}
                          
                          <span className={`text-[10px] font-mono font-bold transition-colors ${active ? 'text-[var(--accent)]' : 'text-secondary'}`}>
                            {exp.period.toUpperCase()}
                          </span>
                          <span className="text-xs font-extrabold text-primary mt-1 leading-tight group-hover:text-accent transition-colors">
                            {exp.company}
                          </span>
                          <span className="text-[9px] font-mono text-secondary mt-1 max-w-full truncate">
                            {exp.role}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-2.5 mt-6 text-[9px] font-mono text-secondary flex justify-between">
                  <span>DB_STATUS: LOADED</span>
                  <span>INDEX_SIZE: 02_NODES</span>
                </div>
              </div>
            </div>

            {/* Right Console: Telemetry Output Card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-8 cyber-panel p-5 lg:p-6 flex flex-col justify-between shadow-sm bg-slate-50/45 dark:bg-slate-950/20"
            >
              {/* Corners */}
              <span className="cyber-panel-corner cyber-corner-tl" />
              <span className="cyber-panel-corner cyber-corner-tr" />
              <span className="cyber-panel-corner cyber-corner-bl" />
              <span className="cyber-panel-corner cyber-corner-br" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Registry header */}
                    <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                          TELEMETRY_LOG // {experiences[activeIndex].station}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-secondary">DECRYPT: SUCCESS</span>
                    </div>

                    <div className="mt-2">
                      <h3 className="text-lg font-bold text-primary leading-tight">
                        {experiences[activeIndex].role}
                      </h3>
                      <p className="text-xs text-accent font-semibold mt-1 font-mono">
                        @{experiences[activeIndex].company}
                      </p>
                      
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-secondary font-mono">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        <span>{experiences[activeIndex].period}</span>
                      </div>

                      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-secondary font-sans">
                        {experiences[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Gained Skills Section */}
                  <div className="mt-6 border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                    <span className="text-[9px] font-mono text-secondary uppercase block mb-2 tracking-wider">
                      COMPETENCY_LOG // relative_skills_gained
                    </span>
                    
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeIndex].skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 px-3.5 py-1 text-xs font-sans font-medium text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-102 hover:border-[var(--accent)] hover:text-[var(--accent)] shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
