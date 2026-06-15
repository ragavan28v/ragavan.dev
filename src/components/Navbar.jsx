import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BrainCircuit,
  Briefcase,
  Download,
  FolderGit2,
  Moon,
  Send,
  Sun,
  UserRound,
} from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';

const links = [
  { label: 'About', id: 'about', icon: UserRound },
  { label: 'Skills', id: 'skills', icon: BrainCircuit },
  { label: 'Projects', id: 'projects', icon: FolderGit2 },
  { label: 'Experience', id: 'experience', icon: Briefcase },
  { label: 'Contact', id: 'contact', icon: Send },
];

const sectionIds = ['home', ...links.map((link) => link.id)];

const yMap = {
  home: 38,
  about: 110,
  skills: 165,
  projects: 220,
  experience: 275,
  contact: 330,
};

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Generate the keyhole cutout path dynamically based on active item vertical position
const getPath = (activeY, isHome) => {
  if (isHome) {
    return `
      M 32,0
      A 32,32 0 0,1 64,32
      L 64,368
      A 32,32 0 0,1 0,368
      L 0,32
      A 32,32 0 0,1 32,0
      Z
    `;
  }
  return `
    M 32,0
    A 32,32 0 0,1 64,32
    L 64,${activeY - 20.4}
    A 10,10 0 0,1 46.67,${activeY - 13.6}
    A 20,20 0 1,0 46.67,${activeY + 13.6}
    A 10,10 0 0,1 64,${activeY + 20.4}
    L 64,368
    A 32,32 0 0,1 0,368
    L 0,32
    A 32,32 0 0,1 32,0
    Z
  `;
};

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
          className="text-lg font-bold text-[#06223F] dark:text-white"
        >
          RV
        </button>
      </div>

      {/* Unified Top Right Quick Actions (always at the top right corner) */}
      <div className="fixed top-6 right-6 lg:right-10 z-40 flex items-center gap-3">
        <a
          href="https://example.com/ragavan-v-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-[#06223F] dark:text-white transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 shadow-sm"
          aria-label="Resume"
        >
          <Download className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-[#06223F] dark:text-white transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 shadow-sm"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      {/* DESKTOP SIDE NAVIGATION */}
      <nav
        className="fixed z-50 left-8 top-1/2 -translate-y-1/2 w-16 h-[400px] hidden lg:block"
        aria-label="Primary Desktop"
      >
        {/* DESKTOP BACKGROUND SVG WITH MORPHING KEYHOLE CUTOUT */}
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          <svg
            width="64"
            height="400"
            viewBox="0 0 64 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md backdrop-blur-md overflow-visible"
          >
            <motion.path
              animate={{ d: getPath(activeY, activeId === 'home') }}
              transition={{ type: 'tween', ease: [0.25, 1, 0.5, 1], duration: 0.35 }}
              className="fill-slate-200/65 dark:fill-slate-900/65 stroke-[#06223F] dark:stroke-slate-700"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative w-full h-full">
          {/* Logo RV */}
          <button
            type="button"
            onClick={handleHomeClick}
            className={`absolute top-4 left-[10px] h-11 w-11 flex items-center justify-center rounded-full font-extrabold text-sm border transition-all duration-200 ${
              activeId === 'home'
                ? 'bg-[#06223F] text-white dark:bg-white dark:text-slate-950 scale-110 shadow-sm border-transparent'
                : 'bg-[#06223F]/10 dark:bg-white/10 text-[#06223F] dark:text-white border-[#06223F]/20 dark:border-white/20 hover:bg-[#06223F]/20 dark:hover:bg-white/20'
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
                  className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
                    active
                      ? 'text-[#06223F] dark:text-white scale-120'
                      : 'text-[#06223F]/60 dark:text-slate-400 hover:text-[#06223F] dark:hover:text-white hover:bg-slate-300/20 dark:hover:bg-slate-800/30'
                  }`}
                  aria-label={`Scroll to ${link.label}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.75} />
                </button>

                {/* Tooltips */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="absolute left-14 rounded-md bg-slate-900/90 dark:bg-slate-100/90 px-2.5 py-1 text-xs font-semibold text-white dark:text-slate-950 shadow-md backdrop-blur-sm pointer-events-none whitespace-nowrap border border-white/10"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav
        className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 flex h-16 w-[90%] max-w-md items-center justify-around rounded-full px-6 bg-slate-200/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 shadow-lg text-[#06223F] dark:text-slate-200 lg:hidden"
        aria-label="Primary Mobile"
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
                  ? 'text-white dark:text-slate-950 scale-110'
                  : 'text-[#06223F]/60 dark:text-slate-300 hover:text-[#06223F] dark:hover:text-white'
              }`}
              aria-label={`Scroll to ${link.label}`}
            >
              {active && (
                <motion.div
                  layoutId="mobileActiveIndicator"
                  className="absolute inset-0 bg-[#06223F] dark:bg-white rounded-full shadow-md -z-10"
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
