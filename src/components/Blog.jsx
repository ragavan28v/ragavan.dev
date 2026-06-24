import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import useInView from '../hooks/useInView';
import { blogPosts } from '../data/blog';
import { fadeUp, stagger } from '../lib/animations';

export default function Blog() {
  const { ref, controls } = useInView();

  return (
    <section id="blog" className="section-shell min-h-[calc(100vh-4.5rem)] flex items-center bg-surface scroll-mt-0 py-8">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp} className="mb-6">
            <p className="section-kicker">Writing</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Technical Articles</h2>
            <p className="mt-1.5 text-sm text-secondary max-w-2xl font-sans leading-relaxed">
              Key insights and recent technical write-ups presented as a single visible cyber timeline.
            </p>
          </motion.div>

          <article className="cyber-panel p-6 relative overflow-visible">
            <span className="cyber-panel-corner cyber-corner-tl" />
            <span className="cyber-panel-corner cyber-corner-tr" />
            <span className="cyber-panel-corner cyber-corner-bl" />
            <span className="cyber-panel-corner cyber-corner-br" />
            <div className="scanner-sweep z-20 opacity-60" />

            <div className="relative z-10 flex gap-6">
              <div className="w-14 flex flex-col items-center">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <div className="h-full w-[2px] bg-slate-200/40 mt-2" />
              </div>

              <div className="flex-1">
                <div className="space-y-6">
                  {blogPosts.map((post, idx) => (
                    <div key={post.title} className="p-4 rounded-lg bg-white/90 border border-slate-200/60 dark:bg-slate-950/40 dark:border-slate-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-slate-100 text-accent">{idx + 1}</span>
                          <div>
                            <div className="text-sm font-semibold text-primary">{post.title}</div>
                            <div className="text-xs text-secondary">{post.tag} • {post.readTime}</div>
                          </div>
                        </div>
                        <a href={post.href} target="_blank" rel="noreferrer" className="text-accent font-semibold">Open <ArrowUpRight className="inline h-3 w-3" /></a>
                      </div>
                      {post.description && <p className="mt-3 text-sm text-secondary line-clamp-3">{post.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
