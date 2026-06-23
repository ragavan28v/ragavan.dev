import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BrainCircuit,
  Briefcase,
  Download,
  FolderGit2,
  Moon,
  Send,
  Sun,
  Trophy,
  UserRound,
  Cpu,
  Terminal,
} from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';

const links = [
  { label: 'About', id: 'about', icon: UserRound },
  { label: 'Skills', id: 'skills', icon: BrainCircuit },
  { label: 'Projects', id: 'projects', icon: FolderGit2 },
  { label: 'Achievements', id: 'achievements', icon: Trophy },
  { label: 'Certifications', id: 'certifications', icon: Award },
  { label: 'Experience', id: 'experience', icon: Briefcase },
  { label: 'Contact', id: 'contact', icon: Send },
];

const sectionIds = ['home', ...links.map((link) => link.id)];

const yMap = {
  home: 38,
  about: 110,
  skills: 165,
  projects: 220,
  achievements: 275,
  certifications: 330,
  experience: 385,
  contact: 440,
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
      L 64,478
      A 32,32 0 0,1 0,478
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
    L 64,478
    A 32,32 0 0,1 0,478
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

  // Four custom design styles: 'classic' | 'holographic' | 'orbital' | 'matrix'
  const [navStyle, setNavStyle] = useState(() => {
    return localStorage.getItem('portfolio-nav-style') || 'classic';
  });
  const [showSelector, setShowSelector] = useState(false);
  const [isOrbitalOpen, setIsOrbitalOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    if (spyActiveId && !isClickScrolling.current) {
      setLocalActiveId(spyActiveId);
    }
  }, [spyActiveId]);

  // Click outside to close nav style dropdown selector
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setShowSelector(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const handleStyleChange = (style) => {
    setNavStyle(style);
    localStorage.setItem('portfolio-nav-style', style);
    setShowSelector(false);
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
        {/* Style Selector Console */}
        <div className="relative" ref={selectorRef}>
          <button
            type="button"
            onClick={() => setShowSelector(!showSelector)}
            className="inline-flex h-10 px-4 items-center justify-center gap-2 rounded-full bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-xs font-mono font-bold text-primary hover:text-[var(--accent)] dark:hover:text-white transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 shadow-sm"
            aria-label="Select nav style"
          >
            <Terminal className="h-4 w-4 text-accent" />
            <span className="hidden sm:inline">NAV: {navStyle.toUpperCase()}</span>
          </button>
          
          <AnimatePresence>
            {showSelector && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2 shadow-lg z-50"
              >
                <div className="text-[9px] font-mono text-secondary px-3 py-1.5 border-b border-slate-200/50 dark:border-slate-800/50 mb-1">
                  NAV_STYLE_SELECTOR
                </div>
                {[
                  { value: 'classic', label: 'Classic Morph' },
                  { value: 'holographic', label: 'Holo Rail' },
                  { value: 'orbital', label: 'Orbital Dial' },
                  { value: 'matrix', label: 'Matrix Terminal' },
                ].map((style) => (
                  <button
                    key={style.value}
                    type="button"
                    onClick={() => handleStyleChange(style.value)}
                    className={`w-full text-left px-3 py-2 text-xs font-mono rounded-lg transition-colors flex items-center justify-between ${
                      navStyle === style.value
                        ? 'bg-[var(--accent)] text-white'
                        : 'text-secondary hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{style.label}</span>
                    <span className="text-[9px] opacity-60">
                      {navStyle === style.value ? '[ACTIVE]' : ''}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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

      {/* STYLE 1: CLASSIC SIDE NAVIGATION */}
      {navStyle === 'classic' && (
        <nav
          className="fixed z-50 left-8 top-1/2 -translate-y-1/2 w-16 h-[510px] hidden lg:block"
          aria-label="Classic Navigation"
        >
          {/* DESKTOP BACKGROUND SVG WITH MORPHING KEYHOLE CUTOUT */}
          <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
            <svg
              width="64"
              height="510"
              viewBox="0 0 64 510"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-md backdrop-blur-md overflow-visible"
            >
              <motion.path
                animate={{ d: getPath(activeY, activeId === 'home') }}
                transition={{ type: 'tween', ease: [0.25, 1, 0.5, 1], duration: 0.35 }}
                className="fill-transparent stroke-[var(--accent)] dark:stroke-slate-700"
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
                  ? 'bg-[var(--accent)] text-white scale-110 shadow-sm border-transparent'
                  : 'bg-[var(--accent)]/10 dark:bg-white/10 text-primary border-slate-200 dark:border-white/20 hover:bg-[var(--accent)]/20 dark:hover:bg-white/20'
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
                        ? 'text-[var(--accent)] scale-120 font-bold'
                        : 'text-secondary/60 hover:text-primary hover:bg-slate-300/20 dark:hover:bg-slate-800/30'
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
                        {`[ 0${i + 1} // ${link.label.toUpperCase()} ]`}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </nav>
      )}

      {/* STYLE 2: HOLOGRAPHIC RAIL SIDE NAVIGATION */}
      {navStyle === 'holographic' && (
        <nav
          className="fixed z-50 left-8 top-1/2 -translate-y-1/2 w-16 bg-slate-50/20 dark:bg-slate-950/20 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 rounded-2xl py-6 flex flex-col items-center gap-6 hidden lg:flex shadow-sm min-h-[460px] justify-between relative"
          aria-label="Holographic Navigation"
        >
          {/* Cyber Corner Brackets on the main nav panel */}
          <span className="cyber-panel-corner cyber-corner-tl" />
          <span className="cyber-panel-corner cyber-corner-tr" />
          <span className="cyber-panel-corner cyber-corner-bl" />
          <span className="cyber-panel-corner cyber-corner-br" />

          {/* Vertical Track Line */}
          <div className="absolute top-16 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800/60 pointer-events-none -z-10" />

          {/* Logo RV */}
          <button
            type="button"
            onClick={handleHomeClick}
            className={`h-10 w-10 flex items-center justify-center rounded-full font-extrabold text-xs border transition-all duration-200 z-10 ${
              activeId === 'home'
                ? 'bg-[var(--accent)] text-white scale-110 shadow-sm border-transparent'
                : 'bg-slate-100 dark:bg-slate-800 text-primary border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
            aria-label="Scroll to top"
          >
            RV
          </button>

          {/* Links aligned in a flex container */}
          <div className="flex flex-col gap-4 relative items-center justify-center flex-1 w-full mt-4">
            {links.map((link, i) => {
              const active = activeId === link.id;
              const Icon = link.icon;

              return (
                <div
                  key={link.id}
                  className="relative flex items-center justify-center w-11 h-11"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Sliding Holographic Frame Box */}
                  {active && (
                    <motion.div
                      layoutId="holoActiveFrame"
                      className="absolute inset-0 border border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 shadow-[0_0_12px_rgba(29,78,216,0.18)] rounded-xl pointer-events-none z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    >
                      {/* cyber corners */}
                      <span className="cyber-panel-corner cyber-corner-tl" />
                      <span className="cyber-panel-corner cyber-corner-tr" />
                      <span className="cyber-panel-corner cyber-corner-bl" />
                      <span className="cyber-panel-corner cyber-corner-br" />
                      <span className="scanner-sweep" />
                    </motion.div>
                  )}

                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 z-10 ${
                      active
                        ? 'text-[var(--accent)] scale-110'
                        : 'text-secondary/60 hover:text-primary hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                    }`}
                    aria-label={`Scroll to ${link.label}`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </button>

                  {/* Holographic terminal tooltips */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-14 rounded-md bg-slate-900/90 dark:bg-slate-100/90 px-2.5 py-1 text-xs font-mono font-bold text-white dark:text-slate-950 shadow-md backdrop-blur-sm pointer-events-none whitespace-nowrap border border-white/10"
                      >
                        {`[0${i + 1}::${link.label.toUpperCase()}_NODE]`}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </nav>
      )}

      {/* STYLE 3: ORBITAL COMMAND WHEEL */}
      {navStyle === 'orbital' && (
        <div className="fixed bottom-8 left-8 z-50 lg:block hidden">
          {/* Dial Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOrbitalOpen(!isOrbitalOpen)}
            className="relative w-14 h-14 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Open navigation wheel"
          >
            {/* Outer rotating dash track */}
            <span className="absolute inset-0 rounded-full border border-dashed border-white/40 animate-[spin_20s_linear_infinite]" />
            <Cpu className={`h-6 w-6 transition-transform duration-500 ${isOrbitalOpen ? 'rotate-180 scale-90' : ''}`} />
          </button>
          
          {/* Circular dial items */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Outer scan ring when open */}
            {isOrbitalOpen && (
              <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-dashed border-[var(--accent)]/30 rounded-full animate-[spin_40s_linear_infinite]" />
            )}

            {links.map((link, index) => {
              const active = activeId === link.id;
              const Icon = link.icon;
              const radius = 120;
              const startAngle = 10;
              const angle = startAngle + index * (70 / 6);
              const rad = (angle * Math.PI) / 180;
              const x = isOrbitalOpen ? radius * Math.cos(rad) : 0;
              const y = isOrbitalOpen ? radius * Math.sin(rad) : 0;
              
              return (
                <div
                  key={link.id}
                  style={{
                    transform: `translate(${x}px, ${-y}px)`,
                    opacity: isOrbitalOpen ? 1 : 0,
                    scale: isOrbitalOpen ? 1 : 0,
                    transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.04}s`,
                  }}
                  className="absolute bottom-2 left-2 pointer-events-auto"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md transition-all duration-200 ${
                      active
                        ? 'text-[var(--accent)] border-[var(--accent)] scale-110 shadow-lg shadow-[var(--accent)]/10'
                        : 'text-secondary/70 hover:text-primary hover:border-slate-400 dark:hover:border-slate-600'
                    }`}
                    aria-label={link.label}
                  >
                    {/* Corner Brackets on Active Link */}
                    {active && (
                      <>
                        <span className="cyber-panel-corner cyber-corner-tl" />
                        <span className="cyber-panel-corner cyber-corner-tr" />
                        <span className="cyber-panel-corner cyber-corner-bl" />
                        <span className="cyber-panel-corner cyber-corner-br" />
                      </>
                    )}
                    <Icon className="h-4.5 w-4.5" />
                  </button>
                  
                  {/* Arc floating tooltip */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        className="absolute left-12 top-1.5 rounded-md bg-slate-900/90 dark:bg-slate-100/90 px-2 py-0.5 text-[10px] font-mono font-bold text-white dark:text-slate-950 shadow-md backdrop-blur-sm pointer-events-none whitespace-nowrap border border-white/10"
                      >
                        {`[${link.label.toUpperCase()}]`}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STYLE 4: MINIMAL MATRIX TERMINAL */}
      {navStyle === 'matrix' && (
        <nav
          className="fixed z-50 left-8 top-1/2 -translate-y-1/2 bg-slate-50/5 dark:bg-slate-950/5 border-l border-slate-200/50 dark:border-slate-800/50 pl-4 py-8 flex flex-col gap-5 items-start hidden lg:flex font-mono"
          aria-label="Matrix Navigation"
        >
          {/* Root status prefix */}
          <button
            type="button"
            onClick={handleHomeClick}
            className={`text-[10px] tracking-wider transition-colors pb-1 mb-2 border-b flex items-center gap-1 ${
              activeId === 'home' 
                ? 'text-[var(--accent)] border-[var(--accent)] font-bold' 
                : 'text-secondary/60 border-transparent hover:text-primary'
            }`}
          >
            <span>&gt;&gt;</span>
            <span>RV_ROOT.EXE</span>
          </button>

          {/* Monospace Code Menu links */}
          {links.map((link, i) => {
            const active = activeId === link.id;

            return (
              <div
                key={link.id}
                className="relative flex items-center text-[10px]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left transition-all duration-200 leading-none ${
                    active ? 'text-[var(--accent)] font-extrabold scale-105' : 'text-secondary/50 hover:text-primary'
                  }`}
                >
                  {active ? (
                    <span className="flex items-center gap-1.5">
                      <span className="text-[var(--accent)]">&gt;&gt;</span>
                      <span>{`[0${i+1}:${link.label.toUpperCase()}]`}</span>
                      <span className="w-1 h-3.5 bg-[var(--accent)] animate-[pulse_0.8s_infinite] shrink-0" />
                    </span>
                  ) : (
                    <span>{`   0${i+1}:${link.label.toUpperCase()}`}</span>
                  )}
                </button>
              </div>
            );
          })}
        </nav>
      )}

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
