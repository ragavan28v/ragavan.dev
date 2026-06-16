import React from 'react';
import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));
const Experience = lazy(() => import('./components/Experience'));
const GitHubSection = lazy(() => import('./components/GitHubSection'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return <div className="section-shell min-h-screen flex items-center" aria-hidden="true" />;
}

function LazySection({ children }) {
  return <Suspense fallback={<SectionFallback />}>{children}</Suspense>;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored) {
      setDarkMode(stored === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-page text-primary relative overflow-hidden">
      {/* Background decoration for glassmorphism */}
      <div className="pointer-events-none absolute left-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[120px] dark:bg-blue-600/10" />
      <div className="pointer-events-none absolute right-[-10%] top-[30%] h-[600px] w-[600px] rounded-full bg-purple-400/15 blur-[130px] dark:bg-purple-600/10" />
      <div className="pointer-events-none absolute left-[15%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[120px] dark:bg-cyan-600/10" />

      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((value) => !value)} />
      <main className="transition-all duration-300">
        <Hero />
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Achievements />
        </LazySection>
        <LazySection>
          <Certifications />
        </LazySection>
        <LazySection>
          <Experience />
        </LazySection>
        <LazySection>
          <GitHubSection />
        </LazySection>
        <LazySection>
          <Blog />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
        <LazySection>
          <Footer />
        </LazySection>
      </main>
    </div>
  );
}
