import { useReveal } from '../hooks/useReveal';
import './Services.css';

const services = [
  { n: '01', title: 'Architecture & Engineering Design', desc: 'Architectural, civil, structural and MEP design across buildings, communities and industrial facilities.' },
  { n: '02', title: 'Construction Supervision', desc: 'On-site engineering supervision, quality assurance and contract administration to delivery.' },
  { n: '03', title: 'Project & Construction Management', desc: 'End-to-end PMC — programme, cost, risk and stakeholder management for complex programmes.' },
  { n: '04', title: 'Infrastructure & Utilities', desc: 'Roads, water, sewerage, storm, firewater, telecom, irrigation and landscape networks.' },
  { n: '05', title: 'Transportation & Traffic Studies', desc: 'Transport master-planning, traffic impact and mobility studies for cities and developments.' },
  { n: '06', title: 'Environmental Consulting — AHEC', desc: 'Environmental and ecological assessment, sustainability and forestation through our subsidiary.' },
];

export default function Services() {
  const ref = useReveal();
  return (
    <section className="section services" id="services" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <div className="eyebrow">Our Services</div>
            <h2 className="h-section" style={{ marginTop: 18 }}>Full-lifecycle engineering consultancy</h2>
          </div>
          <p className="lead">From first concept to final commissioning, Gulf Consult delivers integrated, multidisciplinary services under one accountable partner — minimising risk and maximising value at every stage.</p>
        </div>
        <div className="svc-list">
          {services.map(s => (
            <div key={s.n} className="svc" data-reveal>
              <div className="svc-n">{s.n}</div>
              <div className="svc-main">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
              <div className="svc-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
