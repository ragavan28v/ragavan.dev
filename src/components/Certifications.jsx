import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { certifications } from '../data/certifications';
import { fadeUp, stagger } from '../lib/animations';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { ref, controls } = useInView();

  return (
    <section id="certifications" className="section-shell min-h-screen flex items-center bg-surface scroll-mt-0">
      <div className="section-inner">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Certifications</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">Professional Credentials</h2>
            <p className="mt-2 text-base text-secondary max-w-2xl">
              Industry certifications, verified technical skills, and coursework.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="card-shell flex flex-col justify-between p-6 bg-slate-50/55 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                    <Award className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-xs font-semibold text-secondary/80 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-secondary/70">{cert.date}</p>
                  {cert.credentialId && (
                    <p className="text-[11px] font-mono text-secondary/60 mt-1">ID: {cert.credentialId}</p>
                  )}
                </div>
                {cert.link && (
                  <div className="mt-4 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-85 transition-opacity"
                    >
                      Verify Credential <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
