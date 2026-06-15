import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp } from '../lib/animations';

const tags = [
  'AI Agents',
  'React Native',
  'RAG Pipelines',
  'MERN Stack',
  'Real-Time Systems'
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

      {/* Light blue/grey backdrop panel on the right side of the screen matching reference */}
      <div className="absolute right-0 top-0 bottom-0 w-[28%] lg:w-[32%] bg-[#d3e3fd]/40 dark:bg-slate-900/40 border-l border-[#d3e3fd]/20 dark:border-slate-800/40 hidden lg:block -z-10" />

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
              Full-Stack MERN + AI Systems
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Ragavan V
            </h1>
            <h2 className="mt-4 text-xl font-normal leading-relaxed text-secondary sm:text-2xl max-w-xl">
              Building AI-driven systems, mobile experiences, and intelligent software.
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
                href="https://example.com/ragavan-v-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline border-accent"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="link-accent inline-flex items-center gap-1 hover:opacity-80"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
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

      {/* Desktop Right Column: Hero Photo & Vertical Rotated Text (Absolutely aligned to the bottom-right on desktop viewports) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="absolute right-0 bottom-0 z-10 hidden lg:flex items-end justify-center w-[40%] h-[90vh] pointer-events-none"
      >
        {/* Transparent photo sitting directly at the bottom edge */}
        <img
          src="/hero-photo.png"
          alt="Ragavan V"
          className="h-full w-auto object-contain object-bottom select-none pointer-events-auto"
        />

        {/* Vertical Name Text on the right half backdrop */}
        <div className="absolute right-8 bottom-16 z-0 flex flex-col items-center justify-end select-none pointer-events-none">
          <span
            className="text-7xl lg:text-8xl font-black text-slate-300/35 dark:text-slate-800/30 tracking-widest uppercase select-none"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            RAGAVAN
          </span>
        </div>
      </motion.div>
    </section>
  );
}
