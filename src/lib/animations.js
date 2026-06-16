export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.98, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: i * 0.12,
    },
  }),
};
