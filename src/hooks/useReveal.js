import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const targets = section.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return ref;
}
