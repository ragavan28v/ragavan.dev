import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import useInView from '../hooks/useInView';
import { blogPosts } from '../data/blog';
import { fadeUp, stagger } from '../lib/animations';

export default function Blog() {
  const { ref, controls } = useInView();

  return (
    <section id="blog" className="section-shell min-h-screen flex items-center bg-white dark:bg-page scroll-mt-0">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Writing</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Technical Articles</h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="card-shell overflow-hidden flex flex-col justify-between p-0"
              >
                <div>
                  <div className="h-1 bg-accent" />
                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-[#EFF6FF] text-[#1D4ED8] dark:bg-[#1E293B] dark:text-[#3B82F6] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {post.tag}
                    </span>
                    <h3 className="mt-4 text-base font-bold text-primary leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between mt-4 text-[11px] text-secondary font-medium">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 text-accent hover:underline font-semibold"
                    >
                      Read post <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
