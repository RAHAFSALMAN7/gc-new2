import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Stats.css';

function useCounter(target, inView) {
  const elRef = useRef(null);
  useEffect(() => {
    if (!inView || !elRef.current) return;
    const el = elRef.current;
    const duration = 1600;
    const startTime = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);
  return elRef;
}

function Stat({ value, suffix, label, idx, delay, inView }) {
  const numRef = useCounter(value, inView);
  return (
    <div className="stat" data-reveal data-reveal-d={delay}>
      <div className="sv">
        <span ref={numRef}>0</span>
        {suffix && <span className="suf">{suffix}</span>}
      </div>
      <div className="sl">{label}</div>
      <div className="sk">{String(idx).padStart(2, '0')}</div>
    </div>
  );
}

const stats = [
  { value: 45, suffix: '+', label: 'Years of Excellence', idx: 1, delay: '1' },
  { value: 1000, suffix: '+', label: 'Projects Delivered', idx: 2, delay: '1' },
  { value: 500, suffix: '+', label: 'Clients Served', idx: 3, delay: '2' },
  { value: 150, suffix: '+', label: 'Engineering Professionals', idx: 4, delay: '2' },
  { value: 5, suffix: '', label: 'Regional Offices', idx: 5, delay: '3' },
  { value: 4, suffix: '', label: 'Countries Presence', idx: 6, delay: '3' },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const revealRef = useReveal();
  const inViewTracked = useRef(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !inViewTracked.current) {
        inViewTracked.current = true;
        setInView(true);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const setRefs = (el) => {
    sectionRef.current = el;
    revealRef.current = el;
  };

  return (
    <section className="section stats" id="numbers" ref={setRefs}>
      <div className="stats-watermark">GC</div>
      <div className="container">
        <div className="stats-head">
          <div data-reveal>
            <div className="eyebrow on-dark">By the Numbers</div>
            <h2 style={{ marginTop: 16 }}>A track record measured at national scale.</h2>
          </div>
          <p className="lead on-dark" data-reveal data-reveal-d="2" style={{ maxWidth: '34ch', marginBottom: 6 }}>
            Four decades. A thousand projects. One uncompromising standard of engineering excellence.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map(s => (
            <Stat key={s.idx} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
