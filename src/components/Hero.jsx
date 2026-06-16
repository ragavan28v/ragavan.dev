import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp } from '../lib/animations';

const tags = [
  'Full-Stack Development',
  'AI Integration',
  'React Native',
  'MERN Stack',
  'Mobile Apps'
];

export default function Hero() {
  const { ref, controls } = useInView();
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % tags.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-white dark:bg-page scroll-mt-0 py-12 lg:py-0 overflow-hidden"
    >
      {/* Subtle grid pattern in the background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Solid light blue backdrop panel on the right side of the screen matching reference */}
      <div className="absolute right-0 top-0 bottom-0 w-[23%] bg-[#c2d9ff] dark:bg-slate-900 hidden lg:block z-0" />

      <div className="section-inner relative z-10 w-full">
        <motion.div
          ref={ref}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8"
          initial="hidden"
          animate={controls}
        >
          {/* Left Column: Copy & Actions */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center text-left">
            <span className="section-kicker text-sm font-semibold tracking-wider text-accent uppercase">
              Full-Stack Developer
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Ragavan V
            </h1>
            <h2 className="mt-4 text-xl font-normal leading-relaxed text-secondary sm:text-2xl max-w-xl">
              Building full-stack applications, integrating AI where it adds value, and learning React Native for mobile experiences.
            </h2>

            {/* Cycling Tag Strip */}
            <div className="mt-6 flex h-8 items-center gap-2 text-sm font-semibold text-accent overflow-hidden">
              <span className="text-secondary font-medium">Focused on:</span>
              <div className="relative w-48 h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tags[tagIndex]}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute left-0 inline-block whitespace-nowrap"
                  >
                    {tags[tagIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-solid"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1tfAqFMEOjnK1-TJiCBkj9PM4BhfcrCFY/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="btn-outline border-accent"
              >
                Download Resume
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ragavan28v"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-[#06223F] dark:text-white shadow-md transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 hover:shadow-lg"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ragavan-v-15a2b3292/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-[#06223F] dark:text-white shadow-md transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 hover:shadow-lg"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mobile Right Column: Hero Photo (Visible only on mobile/tablet inside the grid flow) */}
          <div className="relative flex items-center justify-center h-[340px] w-full lg:hidden">
            <img
              src="/hero-photo.png"
              alt="Ragavan V"
              className="h-full w-auto object-contain select-none pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

      {/* Vertical Name Text on the right half backdrop (pinned to right of section) */}
      <div className="absolute right-[8%] lg:right-[10%] top-[8vh] bottom-[8vh] z-10 hidden lg:flex flex-col justify-between items-center select-none pointer-events-none text-white font-black uppercase text-6xl lg:text-[8vh] xl:text-[10vh] leading-none">
        {'RAGAVAN'.split('').map((char, idx) => (
          <span key={idx}>{char}</span>
        ))}
      </div>

      {/* Desktop Right Column: Hero Photo (Absolutely aligned to the bottom, shifted leftward) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="absolute right-[8%] lg:right-[10%] bottom-0 z-20 hidden lg:flex items-end justify-center w-[40%] h-[90vh] pointer-events-none"
      >
        {/* Transparent photo sitting directly at the bottom edge */}
        <img
          src="/hero-photo.png"
          alt="Ragavan V"
          className="h-full w-auto object-contain object-bottom select-none pointer-events-auto"
        />
      </motion.div>
    </section>
  );
}
