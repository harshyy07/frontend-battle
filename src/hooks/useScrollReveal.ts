import { useEffect, useRef } from 'react';

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(threshold = 0.1) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove hidden state
          element.classList.remove('opacity-0', 'translate-y-12');
          // Add visible state
          element.classList.add('opacity-100', 'translate-y-0');
          // Disconnect observer so it only animates once
          observer.unobserve(element);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return ref;
};
