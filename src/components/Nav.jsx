import { useState, useEffect } from 'react';
import './Nav.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Vision 2030', href: '#vision' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Services', href: '#services' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Careers', href: '#careers' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cls = ['nav', scrolled ? 'scrolled' : 'at-top', menuOpen ? 'menu-open' : ''].filter(Boolean).join(' ');

  return (
    <header className={cls}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="Gulf Consult home">
          <img src="/gc-logo.png" alt="Gulf Consult Architects & Engineers" />
        </a>
        <nav className="nav-links">
          {links.map(l => (
            <a key={l.label} className="nav-link" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            <button className="active" data-lang="en">EN</button>
            <button className="ar" data-lang="ar" aria-label="Arabic">ع</button>
          </div>
          <a href="#contact" className="nav-cta">Contact Us</a>
          <button
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className="nav-menu" aria-hidden={!menuOpen}>
        <nav className="nav-menu-links">
          {links.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              <span className="mi">0{i + 1}</span>{l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-gold nav-menu-cta" onClick={() => setMenuOpen(false)}>
          Contact Us <span className="arrow">→</span>
        </a>
      </div>
    </header>
  );
}
