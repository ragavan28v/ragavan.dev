import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-theme bg-white dark:bg-page py-6">
      <div className="section-inner flex flex-col gap-3 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between font-medium">
        <p>© 2025 Ragavan V</p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ragavan-v-15a2b3292/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-effect transition-colors hover:text-accent"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/ragavan28v"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-effect transition-colors hover:text-accent"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:ragavan@example.com"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-effect transition-colors hover:text-accent"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1tfAqFMEOjnK1-TJiCBkj9PM4BhfcrCFY"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-effect transition-colors hover:text-accent"
            aria-label="Resume"
            title="Resume"
          >
            <FileText className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
