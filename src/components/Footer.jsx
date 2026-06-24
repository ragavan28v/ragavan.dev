import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/40 dark:border-slate-800/60 bg-surface py-6">
      <div className="section-inner flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">© {new Date().getFullYear()} Ragavan V</p>
          <p className="text-xs text-secondary mt-1">Full-stack MERN + AI systems developer.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/ragavan28v"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/70 text-primary transition hover:border-accent hover:text-accent"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ragavan-v-15a2b3292/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/70 text-primary transition hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:ragavvenkat269@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/70 text-primary transition hover:border-accent hover:text-accent"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
