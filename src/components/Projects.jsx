import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const projects = [
  {
    lead: true,
    tag: 'Giga-Project', idx: '01',
    title: 'NEOM High-Density Residential & Central Amenities',
    meta: ['Tabuk', 'Client: Al-Fanar', '301,610 m²'],
    scope: '23+ residential buildings with full infrastructure — sewerage, storm, water, firewater, telecom, irrigation, landscape and roads — plus a central amenities district for the NEOM community.',
    delay: '',
  },
  {
    tag: 'Hospitality', idx: '02',
    title: 'AMAALA 20,000-Worker Community',
    meta: ['Red Sea · Al-Wajh', '500,000 m²'],
    scope: 'Design & construction supervision for a 20,000-person workers\' village serving AMAALA\'s luxury Red Sea destination.',
    delay: '1',
  },
  {
    tag: 'Environment', idx: '03',
    title: 'Green Riyadh Central Nursery',
    meta: ['Riyadh · RCRC', '2.2M m²'],
    scope: 'A centre of excellence producing trees and shrubs for one of the world\'s largest urban-forestation programmes.',
    delay: '2',
  },
  {
    tag: 'Giga-Project', idx: '04',
    title: 'Qiddiya Workers Villages',
    meta: ['Riyadh', '350,912 m²'],
    scope: 'Detailed design of two independent 10,000-person camps for the Kingdom\'s flagship entertainment, sports & culture city.',
    delay: '1',
  },
  {
    tag: 'Data Centre', idx: '05',
    title: 'QST Hyperscale Data Centre',
    meta: ['Dammam · SPARK', '22,298 m²'],
    scope: 'State-of-the-art hyperscale data centre and office building inside King Salman Energy Park.',
    delay: '2',
  },
  {
    tag: 'Industrial', idx: '06',
    title: 'DUSSUR–SeAH Seamless Steel Plant',
    meta: ['Dammam · SPARK', '181,138 m²'],
    scope: 'Stainless / alloy seamless pipe & tube plant supplying the Kingdom\'s oil, gas and energy industries.',
    delay: '3',
  },
];

function PCard({ project }) {
  return (
    <article className={`pcard${project.lead ? ' lead' : ''}`} data-reveal data-reveal-d={project.delay || undefined}>
      <div className="img-ph" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <span>{project.title}</span>
      </div>
      <div className="scrim" />
      <span className="ptag">{project.tag}</span>
      <span className="pidx">{project.idx}</span>
      <div className="pcontent">
        <h3>{project.title}</h3>
        <div className="pmeta">
          {project.meta.map((m, i) => (
            <span key={i}>{i > 0 && <span className="dot" />}{m}</span>
          ))}
        </div>
        <p className="pscope">{project.scope}</p>
      </div>
      <span className="pline" />
    </article>
  );
}

export default function Projects() {
  const ref = useReveal();
  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <div className="eyebrow on-dark">Selected Works</div>
            <h2 className="h-section" style={{ marginTop: 18 }}>Projects defining Saudi Arabia's transformation</h2>
            <p className="lead on-dark" style={{ marginTop: 18, maxWidth: '48ch' }}>
              A selection from <b style={{ color: '#fff', fontWeight: 600 }}>1,000+ projects</b> delivered across the Kingdom — giga-project communities, industrial complexes, data centres and national infrastructure.
            </p>
          </div>
          <a href="#projects" className="viewall">View all projects <span>→</span></a>
        </div>
        <div className="proj-grid">
          {projects.map(p => <PCard key={p.idx} project={p} />)}
        </div>
      </div>
    </section>
  );
}
