import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import useInView from '../hooks/useInView';
import { cardReveal, fadeDown, fadeUp, stagger } from '../lib/animations';

const tags = ['MERN Stack', 'Mobile Apps', 'Full Stack Development', 'AI Integration', 'React Native'];

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
          variants={stagger}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column: Copy & Actions */}
          <motion.div variants={stagger} className="flex flex-col justify-center text-left">
            <motion.span variants={fadeDown} className="hero-kicker">
              Portfolio
            </motion.span>
            <motion.h1 variants={fadeDown} className="mt-4 hero-name whitespace-nowrap">
              Software Engineer
            </motion.h1>
            <motion.h2 variants={fadeUp} className="mt-4 hero-copy hero-copy-sm whitespace-nowrap max-w-none">
              Full-Stack Development | AI Systems | Mobile Apps
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 hero-desc hero-desc-lg max-w-xl lg:max-w-2xl">
              Building scalable software systems, AI-powered applications, and modern mobile experiences.
            </motion.p>

            {/* Cycling Tag Strip */}
            <motion.div variants={fadeUp} className="mt-6 flex h-8 items-center gap-2 overflow-hidden">
              <span className="hero-focus-label">Focused on:</span>
              <div className="relative w-48 h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tags[tagIndex]}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="hero-focus absolute left-0 inline-block whitespace-nowrap"
                  >
                    {tags[tagIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA row */}
            <motion.div variants={stagger} className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                variants={fadeUp}
                className="btn-solid"
              >
                Build Archive
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1tfAqFMEOjnK1-TJiCBkj9PM4BhfcrCFY/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                className="btn-outline border-accent"
              >
                Developer Profile
              </motion.a>
              <motion.div variants={stagger} className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/ragavan28v"
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-[#06223F] dark:text-white shadow-md transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 hover:shadow-lg"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ragavan-v-15a2b3292/"
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 text-[#06223F] dark:text-white shadow-md transition-all duration-150 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 hover:shadow-lg"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile Right Column: Hero Photo (Visible only on mobile/tablet inside the grid flow) */}
          <motion.div variants={cardReveal} className="relative flex items-center justify-center h-[340px] w-full lg:hidden">
            <img
              src="/hero-photo.png"
              alt="Ragavan V"
              className="h-full w-auto object-contain select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Vertical Name Text on the right half backdrop (pinned to right of section) */}
      <motion.div
        variants={fadeDown}
        initial="hidden"
        animate={controls}
        className="absolute right-0 top-0 bottom-0 z-30 hidden lg:block select-none pointer-events-none hero-banner-wrap"
      >
        <div className="hero-banner-word hero-banner-last">VENKATESAN</div>
        <div className="hero-banner-word hero-banner-first">RAGAVAN</div>
      </motion.div>

      {/* Desktop Right Column: Hero Photo (Absolutely aligned to the bottom, shifted leftward) */}
      <motion.div
        variants={cardReveal}
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
