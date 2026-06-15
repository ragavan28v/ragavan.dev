import { useEffect, useState } from 'react';

export default function useScrollSpy(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');
  const serializedIds = sectionIds.join(',');

  useEffect(() => {
    let elements = [];
    let observer;

    const setupObserver = () => {
      elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { threshold: 0.05, rootMargin: '-15% 0px -50% 0px' }
      );

      elements.forEach((element) => observer.observe(element));
    };

    setupObserver();

    // Self-healing check to wait for lazy-loaded sections inside Suspense
    let retryTimeout;
    const checkAndRetry = () => {
      setupObserver();
      if (elements.length < sectionIds.length) {
        retryTimeout = setTimeout(checkAndRetry, 250);
      }
    };

    if (elements.length < sectionIds.length) {
      retryTimeout = setTimeout(checkAndRetry, 250);
    }

    // Force top or bottom sections when scrolled near boundaries
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (window.scrollY < 100) {
        setActiveId(sectionIds[0] ?? '');
      } else if (isAtBottom) {
        setActiveId(sectionIds[sectionIds.length - 1] ?? '');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      clearTimeout(retryTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [serializedIds]);

  return activeId;
}
