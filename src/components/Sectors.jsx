import { useReveal } from '../hooks/useReveal';
import './Sectors.css';

const sectors = [
  {
    n: '01', title: 'Giga-Projects & Urban Development',
    desc: 'Master-planned communities and amenities for the Kingdom\'s landmark giga-projects.',
    count: '40+', clients: 'NEOM · AMAALA · Qiddiya', delay: '1',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><path d="M3 21h18M5 21V8l5-3 5 3v13M9 21v-4h2v4M14 21V11l5-2.5V21"/></svg>,
  },
  {
    n: '02', title: 'Industrial & Manufacturing',
    desc: 'Factories, plants and complexes for global manufacturers and industry leaders.',
    count: '120+', clients: 'ISUZU · 3M · EBARA', delay: '2',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><path d="M3 21h18M4 21V11l6 4V11l6 4V8l4-2v15"/><path d="M7 21v-3M11 21v-3"/></svg>,
  },
  {
    n: '03', title: 'Energy, Oil & Gas',
    desc: 'Facilities and infrastructure across the Kingdom\'s energy value chain.',
    count: '60+', clients: 'TAQA · Linde · DUSSUR', delay: '3',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10z"/></svg>,
  },
  {
    n: '04', title: 'Data Centres & Technology',
    desc: 'Hyperscale data centres and mission-critical facilities for the digital economy.',
    count: '15+', clients: 'QST · SFC · MIS', delay: '4',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/></svg>,
  },
  {
    n: '05', title: 'Transportation & Infrastructure',
    desc: 'Roads, bridges, maritime works, transport master-plans and traffic studies.',
    count: '80+', clients: 'MOT · RCJY · RCU', delay: '1',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20 12 4l8 16M9 14h6"/><path d="M3 20h18"/></svg>,
  },
  {
    n: '06', title: 'Healthcare & Logistics',
    desc: 'Warehousing, distribution and logistics centres for healthcare and FMCG.',
    count: '30+', clients: 'NUPCO · PepsiCo', delay: '2',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M3 11h18M12 14v3M10.5 15.5h3"/></svg>,
  },
  {
    n: '07', title: 'Environment & Sustainability',
    desc: 'Environmental and ecological consulting through our AHEC subsidiary.',
    count: '25+', clients: 'RCRC · Red Sea', delay: '3',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-5-2-8-6-8-11 6 0 10 3 11 8M12 21c0-4 2-8 7-9"/></svg>,
  },
  {
    n: '08', title: 'Hospitality & Tourism',
    desc: 'Resorts, marinas and mixed-use destinations along the Kingdom\'s coasts.',
    count: '20+', clients: 'Dana Bay · AMAALA', delay: '4',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21h16M6 21v-9M18 21v-9M4 12c3-2 5-2 8 0 3-2 5-2 8 0M12 12V6M12 6c0-1.5 2-2.5 3.5-2C15 5.5 13.5 6 12 6zM12 6c0-1.5-2-2.5-3.5-2C9 5.5 10.5 6 12 6z"/></svg>,
  },
];

export default function Sectors() {
  const ref = useReveal();
  return (
    <section className="section sectors" id="sectors" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 className="h-section" style={{ marginTop: 18 }}>Engineering expertise across every sector</h2>
          </div>
          <p className="lead" style={{ maxWidth: '30ch', marginBottom: 6 }}>
            From giga-project communities to national infrastructure — a single multidisciplinary partner.
          </p>
        </div>
        <div className="sec-grid">
          {sectors.map(s => (
            <div key={s.n} className="sec" data-reveal data-reveal-d={s.delay}>
              <div className="sec-n">{s.n}</div>
              <div className="sec-ico">{s.icon}</div>
              <h4>{s.title}</h4>
              <p className="sec-d">{s.desc}</p>
              <div className="sec-foot">
                <span className="sec-count">{s.count}</span>
                <span className="sec-clab">{s.clients}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
