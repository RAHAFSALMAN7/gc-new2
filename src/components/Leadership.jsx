import { useReveal } from '../hooks/useReveal';
import './Leadership.css';

const team = [
  { name: 'Executive Leadership', role: 'Chief Executive Officer', delay: '1' },
  { name: 'Operations', role: 'Chief Operating Officer', delay: '2' },
  { name: 'Technical Direction', role: 'Technical Director', delay: '3' },
  { name: 'Project Delivery', role: 'Director of Projects', delay: '4' },
];

export default function Leadership() {
  const ref = useReveal();
  return (
    <section className="section leadership" id="leadership" ref={ref}>
      <div className="container">
        <div className="lead-top">
          <div className="lead-founder" data-reveal>
            <div className="lead-portrait">
              <div className="img-ph" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <span>Founder Portrait</span>
              </div>
            </div>
            <div className="lf-badge">Founder &amp; Chairman · Since 1980</div>
          </div>
          <div className="lead-quote" data-reveal data-reveal-d="2">
            <div className="eyebrow">Leadership</div>
            <blockquote>
              "For four decades we have built Gulf Consult on the relentless efforts of our people and an unwavering commitment to{' '}
              <span className="gold">engineering excellence</span>."
            </blockquote>
            <div className="lq-name">Mr. Ali Al-Harbi</div>
            <div className="lq-role">Founder &amp; Chairman</div>
          </div>
        </div>

        <div className="lead-grid">
          {team.map(m => (
            <div key={m.role} className="lcard" data-reveal data-reveal-d={m.delay}>
              <div className="lcard-photo">
                <div className="img-ph" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <span>Portrait</span>
                </div>
              </div>
              <div className="lname">{m.name}</div>
              <div className="lrole">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
