import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArchitectureFlow({ nodes }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 120, damping: 12 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className="flex min-w-0 flex-wrap items-center gap-2"
    >
      {nodes.map((node, index) => (
        <motion.div
          key={node}
          variants={itemVariants}
          className="flex min-w-0 items-center gap-1.5"
        >
          <span className="rounded-full border border-theme bg-surface dark:bg-page px-3 py-1 text-[11px] font-semibold text-primary select-none cursor-default hover:border-accent hover:text-accent transition-colors duration-200">
            {node}
          </span>
          {index < nodes.length - 1 ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.1 }}
            >
              <ArrowRight className="h-3.5 w-3.5 text-secondary shrink-0" />
            </motion.div>
          ) : null}
        </motion.div>
      ))}
    </motion.div>
  );
}
