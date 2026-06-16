import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

export default function useInView(options) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -8% 0px',
      ...(options ?? {}),
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      observerOptions
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [controls, options]);

  return { ref, controls };
}
