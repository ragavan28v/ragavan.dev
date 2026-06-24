import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BrainCircuit,
  Briefcase,
  Download,
  FolderGit2,
  Github,
  Moon,
  Send,
  Sun,
  Trophy,
  UserRound,
} from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';

const links = [
  { label: 'About', id: 'about', icon: UserRound },
  { label: 'Skills', id: 'skills', icon: BrainCircuit },
  { label: 'Projects', id: 'projects', icon: FolderGit2 },
  { label: 'Achievements', id: 'achievements', icon: Trophy },
  { label: 'Certifications', id: 'certifications', icon: Award },
  { label: 'Experience', id: 'experience', icon: Briefcase },
  { label: 'GitHub', id: 'github', icon: Github },
  { label: 'Contact', id: 'contact', icon: Send },
];

const sectionIds = ['home', ...links.map((link) => link.id)];

const yMap = {
  home: 38,
  about: 104,
  skills: 158,
  projects: 212,
  achievements: 266,
  certifications: 320,
  experience: 374,
  github: 428,
  contact: 482,
};

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar({ darkMode, onToggleDarkMode }) {
  const spyActiveId = useScrollSpy(sectionIds);
  const [localActiveId, setLocalActiveId] = useState('');
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef(null);

  useEffect(() => {
    if (spyActiveId && !isClickScrolling.current) {
      setLocalActiveId(spyActiveId);
    }
  }, [spyActiveId]);

  const handleNavClick = (id) => {
    setLocalActiveId(id);
    
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }
    isClickScrolling.current = true;
    
    scrollToSection(id);
    
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800); // covers smooth scroll duration
  };

  const handleHomeClick = () => {
    setLocalActiveId('home');
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }
    isClickScrolling.current = true;
    scrollToSection('home');
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  const activeId = localActiveId || spyActiveId;
  const activeY = yMap[activeId] || 110;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Top Left Logo (mobile only) */}
      <div className="fixed top-6 left-6 z-40 lg:hidden">
        <button
          type="button"
          onClick={handleHomeClick}
          className="text-lg font-bold text-primary"
        >
          RV
        </button>
      </div>

      {/* Unified Top Right Quick Actions (always at the top right corner) */}
      <div className="fixed top-6 right-6 lg:right-10 z-40 flex items-center gap-3">
        <a
          href="https://drive.google.com/uc?export=download&id=1tfAqFMEOjnK1-TJiCBkj9PM4BhfcrCFY"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-primary transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 shadow-sm"
          aria-label="Resume"
        >
          <Download className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-primary transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 shadow-sm"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      {/* DESKTOP SIDE NAVIGATION (Cyber Panel Style) */}
      <nav
        className="fixed z-50 left-8 top-1/2 -translate-y-1/2 w-16 h-[510px] hidden lg:block cyber-panel shadow-sm bg-slate-50/40 dark:bg-slate-950/20 rounded-2xl border border-slate-200/50 dark:border-slate-800"
        aria-label="Desktop Side Navigation"
      >
        {/* Cyber corners for outer nav container */}
        <span className="cyber-panel-corner cyber-corner-tl" />
        <span className="cyber-panel-corner cyber-corner-tr" />
        <span className="cyber-panel-corner cyber-corner-bl" />
        <span className="cyber-panel-corner cyber-corner-br" />

        {/* Central rail track line */}
        <div className="absolute top-6 bottom-6 left-[31px] w-[1px] bg-slate-200/80 dark:bg-slate-800/40 pointer-events-none z-0" />

        <div className="relative w-full h-full">
          {/* Sliding active frame indicator */}
          <motion.div
            animate={{ top: `${activeY}px` }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="absolute left-[10px] -translate-y-1/2 w-11 h-11 border border-[var(--accent)] rounded-xl bg-[var(--accent)]/10 dark:bg-[var(--accent)]/15 pointer-events-none z-0"
          >
            {/* Cyber corners on the active frame */}
            <span className="absolute w-1.5 h-1.5 border-t border-l border-[var(--accent)] top-[-1px] left-[-1px] rounded-tl-[3px]" />
            <span className="absolute w-1.5 h-1.5 border-t border-r border-[var(--accent)] top-[-1px] right-[-1px] rounded-tr-[3px]" />
            <span className="absolute w-1.5 h-1.5 border-b border-l border-[var(--accent)] bottom-[-1px] left-[-1px] rounded-bl-[3px]" />
            <span className="absolute w-1.5 h-1.5 border-b border-r border-[var(--accent)] bottom-[-1px] right-[-1px] rounded-br-[3px]" />
            
            {/* Pulsing micro-scanline */}
            <motion.div
              animate={{ y: [-14, 14] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, ease: "linear" }}
              className="absolute inset-x-1 h-[1.5px] bg-[var(--accent)] opacity-50 pointer-events-none"
              style={{ top: '50%' }}
            />
          </motion.div>

          {/* Logo RV */}
          <button
            type="button"
            onClick={handleHomeClick}
            className={`absolute top-4 left-[10px] h-11 w-11 flex items-center justify-center font-extrabold text-sm transition-all duration-200 rounded-xl z-10 ${
              activeId === 'home'
                ? 'text-[var(--accent)] scale-110 font-extrabold'
                : 'text-primary hover:text-[var(--accent)]'
            }`}
            aria-label="Scroll to top"
          >
            RV
          </button>

          {/* Links positioned absolutely matching their activeY coordinates */}
          {links.map((link, i) => {
            const active = activeId === link.id;
            const Icon = link.icon;
            const topY = yMap[link.id];

            return (
              <div
                key={link.id}
                style={{ top: `${topY}px` }}
                className="absolute left-[10px] -translate-y-1/2 flex items-center"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 z-10 ${
                    active
                      ? 'text-[var(--accent)] scale-110 font-bold'
                      : 'text-secondary/60 hover:text-[var(--accent)]'
                  }`}
                  aria-label={`Scroll to ${link.label}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.75} />
                </button>

                {/* Cyber Matrix Terminal style tooltip */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="absolute left-14 rounded bg-white/95 dark:bg-slate-950/95 px-3 py-1.5 text-[10px] font-mono font-bold text-[var(--accent)] shadow-lg border border-slate-200 dark:border-[var(--accent)]/40 backdrop-blur-md pointer-events-none whitespace-nowrap flex items-center gap-1.5"
                    >
                      <span>&gt;&gt;</span>
                      <span>{`[0${i + 1}:${link.label.toUpperCase()}]`}</span>
                      <span className="w-1.5 h-3 bg-[var(--accent)] animate-[pulse_0.8s_infinite]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION (Matches color theme dynamically) */}
      <nav
        className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 flex h-16 w-[92%] max-w-lg items-center justify-around rounded-full px-6 bg-slate-200/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 shadow-lg text-secondary dark:text-slate-200 lg:hidden"
        aria-label="Mobile Navigation"
      >
        {links.map((link, i) => {
          const active = activeId === link.id;
          const Icon = link.icon;

          return (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
                active
                  ? 'text-white dark:text-slate-950 scale-110 font-bold'
                  : 'text-secondary/60 dark:text-slate-300 hover:text-[var(--accent)] dark:hover:text-white'
              }`}
              aria-label={`Scroll to ${link.label}`}
            >
              {active && (
                <motion.div
                  layoutId="mobileActiveIndicator"
                  className="absolute inset-0 bg-[var(--accent)] dark:bg-white rounded-full shadow-md -z-10"
                  transition={{ type: 'tween', ease: [0.25, 1, 0.5, 1], duration: 0.35 }}
                />
              )}
              <Icon className="h-5 w-5 z-10" strokeWidth={2.75} />
            </button>
          );
        })}
      </nav>
    </>
  );
}
