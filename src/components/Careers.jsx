import { useReveal } from '../hooks/useReveal';
import './Careers.css';

const stats = [
  { v: '150+', l: 'Professionals' },
  { v: '20+', l: 'Nationalities' },
  { v: '45+', l: 'Years of Growth' },
  { v: '5', l: 'Regional Offices' },
  { v: '1000+', l: 'Projects to Learn From' },
  { v: '∞', l: 'Opportunity to Build' },
];

export default function Careers() {
  const ref = useReveal();
  return (
    <section className="section careers" id="careers" ref={ref}>
      <div className="careers-bg">
        <div className="img-ph" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <span>Team / Site Photo</span>
        </div>
      </div>
      <div className="container">
        <div className="careers-grid">
          <div data-reveal>
            <div className="eyebrow on-dark">Careers</div>
            <h2>Build the Kingdom's <span className="gold">future</span> with us</h2>
            <p className="lead on-dark">Join 150+ engineers, architects and consultants delivering the projects that define Saudi Arabia's transformation. We invest in our people — their growth, well-being and the chance to work at national scale.</p>
            <a href="#contact" className="btn btn-gold">View open positions <span className="arrow">→</span></a>
          </div>
          <div className="careers-stats" data-reveal data-reveal-d="2">
            {stats.map(s => (
              <div key={s.l} className="cs">
                <div className="csv">{s.v}</div>
                <div className="csl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
