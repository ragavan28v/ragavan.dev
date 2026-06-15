import React from 'react';
import { ArrowUpRight, Mail, MapPin, Sparkles, Zap } from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'GitHub', id: 'github' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

export default function AtlasRail() {
  const activeId = useScrollSpy(['home', ...links.map((link) => link.id)]);

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="surface-card relative overflow-hidden rounded-[2rem] border-slate-200/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.08),_transparent_34%)]" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-lg font-semibold text-brand-700">
                RV
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-brand-600">Portfolio Atlas</p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Ragavan V
              </h1>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Full-Stack MERN + AI Systems Developer
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
              <Sparkles className="h-5 w-5 text-brand-600" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: 'AI', value: 'Systems' },
              { label: 'Mobile', value: 'MERN + Expo' },
              { label: 'Infra', value: 'Real-time' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-xs font-medium text-slate-800 dark:text-slate-100">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Zap className="h-4 w-4 text-brand-600" />
              Current focus
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Shipping intelligent software systems with clean architecture, fast interfaces, and practical AI layers.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
              <MapPin className="h-3.5 w-3.5" />
              India - Remote-friendly
            </div>
          </div>

          <nav className="mt-6 space-y-2" aria-label="Atlas navigation">
            {links.map((link, index) => {
              const active = activeId === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition duration-200 ${
                    active
                      ? 'border-brand-200 bg-brand-50 text-brand-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </span>
                  <ArrowUpRight className={`h-4 w-4 transition ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </nav>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="https://example.com/ragavan-v-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-600 bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:ragavan@example.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:text-slate-200"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
