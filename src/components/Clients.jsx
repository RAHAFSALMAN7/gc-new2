import { useReveal } from '../hooks/useReveal';
import './Clients.css';

const row1 = ['NEOM', 'AMAALA', 'Qiddiya', 'Royal Commission\nRiyadh City', 'Al-Fanar', 'Tamimi Group', 'DUSSUR', 'SeAH'];
const row2 = ['ISUZU', '3M', 'EBARA', 'TAQA', 'Linde', 'NUPCO', 'PepsiCo', 'Sawani\nPIF'];

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee${reverse ? ' rev' : ''}`} data-reveal data-reveal-d={reverse ? '3' : '2'}>
      <div className="marquee-track">
        {doubled.map((c, i) => {
          const [name, sub] = c.split('\n');
          return (
            <span key={i} className="client-cell">
              {name}{sub && <span className="cc-sub">{sub}</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Clients() {
  const ref = useReveal();
  return (
    <section className="section clients" id="clients" ref={ref}>
      <div className="container">
        <div className="eyebrow" data-reveal>Trusted By</div>
        <h2 data-reveal data-reveal-d="1">Partners to government &amp; the Kingdom's developers</h2>
        <p className="lead" data-reveal data-reveal-d="2">
          Over <b style={{ color: 'var(--gc-ink)', fontWeight: 600 }}>500 clients</b> — from Vision 2030 giga-project developers to global industry leaders and government authorities.
        </p>
      </div>
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </section>
  );
}
