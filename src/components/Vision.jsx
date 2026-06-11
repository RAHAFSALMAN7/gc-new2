import { useReveal } from '../hooks/useReveal';
import './Vision.css';

export default function Vision() {
  const ref = useReveal();
  return (
    <section className="vision" id="vision" ref={ref}>
      <div className="vision-bg">
        <div className="img-ph" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <span>Vision 2030 / Riyadh Skyline</span>
        </div>
      </div>
      <div className="vision-num">2030</div>
      <div className="container">
        <div className="vision-inner">
          <div className="eyebrow on-dark" data-reveal>Vision 2030 Impact</div>
          <h2 data-reveal data-reveal-d="1">Engineering the Kingdom's <span className="gold">transformation</span></h2>
          <p data-reveal data-reveal-d="2">
            Saudi Arabia's Vision 2030 is reshaping the nation — and Gulf Consult is engineering it on the ground. From NEOM and AMAALA to Qiddiya and Green Riyadh, our teams deliver the design, supervision and project management behind the giga-projects driving economic diversification and sustainable development.
          </p>
          <div className="vision-pillars" data-reveal data-reveal-d="3">
            <div className="vp"><div className="vpn">01</div><h5>Economic Diversification</h5><p>Industrial, energy and logistics facilities building a post-oil economy.</p></div>
            <div className="vp"><div className="vpn">02</div><h5>Sustainable Development</h5><p>Green infrastructure, urban forestation and environmental consulting.</p></div>
            <div className="vp"><div className="vpn">03</div><h5>Quality of Life</h5><p>New communities, tourism destinations and world-class amenities.</p></div>
          </div>
          <div className="giga" data-reveal data-reveal-d="4">
            {['NEOM', 'AMAALA', 'Qiddiya', 'Green Riyadh', 'Red Sea', 'Sawani · PIF'].map(g => (
              <span key={g} className="g"><i></i>{g}</span>
            ))}
          </div>
          <a href="#projects" className="btn btn-gold" data-reveal data-reveal-d="5">
            See our Vision 2030 portfolio <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
