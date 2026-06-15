import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-theme bg-white dark:bg-page py-6">
      <div className="section-inner flex flex-col gap-3 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between font-medium">
        <p>© 2025 Ragavan V</p>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:ragavan@example.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
