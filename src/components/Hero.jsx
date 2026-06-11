import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const slides = [
  { tag: 'NEOM · Tabuk', name: 'NEOM High-Density Residential & Central Amenities' },
  { tag: 'AMAALA · Red Sea', name: 'AMAALA 20,000-Worker Community' },
  { tag: 'Qiddiya · Riyadh', name: 'Qiddiya Workers Villages' },
  { tag: 'Riyadh · RCRC', name: 'Green Riyadh Central Nursery' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(v => (v + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (i) => {
    setActive(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(v => (v + 1) % slides.length), 5000);
  };

  return (
    <section className={`hero${ready ? ' ready' : ''}`} id="top">
      <div className="hero-bp bp-grid" />
      <svg className="hero-contour" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#2454B4" strokeWidth="1" opacity="0.5">
          <path d="M-50,720 C260,640 420,760 700,690 C980,620 1160,720 1500,640"/>
          <path d="M-50,770 C260,690 420,810 700,740 C980,670 1160,770 1500,690"/>
          <path d="M-50,820 C260,740 420,860 700,790 C980,720 1160,820 1500,740"/>
        </g>
        <g fill="none" stroke="#C9A24B" strokeWidth="1" opacity="0.35">
          <path d="M-50,665 C260,590 430,705 700,640 C980,575 1170,668 1500,592"/>
        </g>
      </svg>

      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow eyebrow on-dark">Est. 1980 — Al Khobar, Saudi Arabia</div>
          <h1>
            <span className="ln"><span>Engineering</span></span>
            <span className="ln"><span>Saudi Arabia's <span className="gold">Future</span></span></span>
            <span className="ln"><span>Since 1980</span></span>
          </h1>
          <p className="hero-sub">Gulf Consult (Architects&nbsp;&amp; Engineers) is a leading Saudi engineering consultancy delivering the Kingdom's most ambitious infrastructure, urban and industrial projects — on time, within budget, and aligned to Vision&nbsp;2030.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-gold">Explore Our Projects <span className="arrow">→</span></a>
            <a href="#about" className="btn btn-ghost">Our Capabilities</a>
          </div>
          <div className="hero-mini">
            <div className="m"><div className="mv"><b>45</b>+</div><div className="ml">Years Experience</div></div>
            <div className="m"><div className="mv"><b>1000</b>+</div><div className="ml">Projects Delivered</div></div>
            <div className="m"><div className="mv"><b>500</b>+</div><div className="ml">Clients Served</div></div>
            <div className="m"><div className="mv"><b>150</b>+</div><div className="ml">Professionals</div></div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stage">
            {slides.map((s, i) => (
              <div key={i} className={`hero-slide${active === i ? ' active' : ''}`}>
                <div className="img-ph" style={{ position: 'absolute', inset: 0 }}>
                  <span>{s.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-caption">
            <div className="hero-cap-tag"><span>{slides[active].tag}</span></div>
            <div className="hero-cap-name">{slides[active].name}</div>
          </div>
          <div className="hero-rot">
            <span className="idx">0{active + 1} / 04</span>
            <div className="hero-dots">
              {slides.map((_, i) => (
                <button key={i} className={active === i ? 'active' : ''} aria-label={`Project ${i + 1}`} onClick={() => go(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll"><span className="bar" /> Scroll</div>
    </section>
  );
}
