import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp, stagger } from '../lib/animations';

const contactLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'Email', href: 'mailto:ragavan@example.com', icon: Mail },
  { label: 'Resume', href: 'https://example.com/ragavan-v-resume.pdf', icon: FileText },
];

export default function Contact() {
  const { ref, controls } = useInView();

  return (
    <section id="contact" className="section-shell min-h-screen flex items-center bg-surface scroll-mt-0">
      <div className="section-inner">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Get in touch</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Open to internships, collaborations, and interesting problems.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-secondary max-w-md mx-auto">
              If you have a role available, a project you would like to discuss, or just want to connect, feel free to reach out.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex flex-col items-center gap-1.5 text-secondary hover:text-accent transition-colors duration-150"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full glass-effect shadow-md hover:border-accent hover:text-accent transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold">{link.label}</span>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
