import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const ref = useReveal();
  return (
    <section className="section section-paper" id="about" ref={ref}>
      <div className="container">
        <div className="about-top">
          <div className="about-lead" data-reveal>
            <div className="eyebrow">Who We Are</div>
            <h2>Four decades engineering the Kingdom's most <em>ambitious</em> projects.</h2>
            <div className="about-body">
              <p>Founded in 1980 under the leadership of Mr.&nbsp;Ali Al-Harbi, Gulf Consult (A&amp;E) has grown over four decades into one of Saudi Arabia's leading engineering consultancies — built on the relentless efforts of a dedicated team and guided by visionary leadership.</p>
              <p>Today we are known for a strategic, innovative approach: delivering complex projects on time and within budget while minimising risk — from giga-project communities and industrial facilities to hyperscale data centres and national infrastructure.</p>
            </div>
          </div>
          <div className="about-side" data-reveal data-reveal-d="2">
            <div className="about-portrait">
              <div className="img-ph"><span>Headquarters</span></div>
            </div>
            <div className="about-badge">
              <div className="bv">1980</div>
              <div className="bl">Established in Al&nbsp;Khobar, Kingdom of Saudi Arabia</div>
            </div>
          </div>
        </div>

        <div className="vm" data-reveal>
          <div className="vm-mark">"</div>
          <blockquote>
            To be one of the leading engineering consultancies in Saudi Arabia — recognised for innovative solutions, technical excellence and a commitment to <b>sustainable development</b> that shapes the future of the Kingdom.
            <span style={{ display: 'block', marginTop: 22, fontFamily: 'var(--f-mono)', fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--slate-2)' }}>— Our Vision</span>
          </blockquote>
        </div>

        <div className="corner">
          <div className="c" data-reveal data-reveal-d="1">
            <div className="cn">01 — Cornerstone</div>
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>
              <path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>
            </svg>
            <h4>Optimization &amp; Value Engineering</h4>
            <p>We treat optimization as foundational — continually refining processes and innovating to deliver every project with maximum efficiency and cost-effectiveness.</p>
          </div>
          <div className="c" data-reveal data-reveal-d="2">
            <div className="cn">02 — Cornerstone</div>
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"/><path d="M16.2 7.8 13 13l-5.2 3.2L11 11z"/>
            </svg>
            <h4>Problem Solving</h4>
            <p>We turn challenges into opportunities — combining creative design, deep technical expertise and collaborative teamwork to solve the hardest engineering problems.</p>
          </div>
          <div className="c" data-reveal data-reveal-d="3">
            <div className="cn">03 — Cornerstone</div>
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/>
              <circle cx="17" cy="9" r="2.4"/><path d="M16 14.4a5 5 0 0 1 4.5 4.6"/>
            </svg>
            <h4>Human Relations</h4>
            <p>Our people come first. We foster a positive, inclusive workplace that supports well-being, growth and collaboration — the foundation of every successful project.</p>
          </div>
        </div>

        <div className="trust" data-reveal>
          <span className="tl">Accredited &amp; Certified</span>
          <span className="chip"><i></i>Saudi Council of Engineers</span>
          <span className="chip"><i></i>ISO 9001 — Quality</span>
          <span className="chip"><i></i>ISO 14001 — Environment</span>
          <span className="chip"><i></i>ISO 45001 — Safety</span>
        </div>
      </div>
    </section>
  );
}
