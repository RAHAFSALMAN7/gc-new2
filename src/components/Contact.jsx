import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();
  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left" data-reveal>
            <div className="eyebrow">Contact</div>
            <h2>Let's engineer<br />what's next.</h2>
            <p className="lead">Whether you're a government entity, a giga-project developer or an industry leader — our team is ready to discuss your project.</p>
            <div className="offices">
              <div className="office hq">
                <div className="o-city">Al Khobar <span className="o-tag">HQ</span></div>
                <div className="o-addr">
                  Gulf Consult Architects &amp; Engineers<br />
                  Eastern Province, Kingdom of Saudi Arabia<br />
                  <a href="https://www.gc-eng.com" target="_blank" rel="noopener">www.gc-eng.com</a>
                </div>
              </div>
              <div className="office">
                <div className="o-city">Riyadh</div>
                <div className="o-addr">Regional Office<br />Central Region</div>
              </div>
              <div className="office">
                <div className="o-city">Jeddah</div>
                <div className="o-addr">Regional Office<br />Western Region</div>
              </div>
            </div>
          </div>

          <div className="form" data-reveal data-reveal-d="2">
            <form onSubmit={e => e.preventDefault()}>
              <div className="frow">
                <div className="field"><label>Full Name</label><input type="text" placeholder="Your name" /></div>
                <div className="field"><label>Organisation</label><input type="text" placeholder="Company / entity" /></div>
              </div>
              <div className="frow">
                <div className="field"><label>Email</label><input type="email" placeholder="you@company.com" /></div>
                <div className="field"><label>Phone</label><input type="tel" placeholder="+966" /></div>
              </div>
              <div className="field">
                <label>Project Type</label>
                <select>
                  <option>Select a sector…</option>
                  <option>Giga-Project / Urban Development</option>
                  <option>Industrial &amp; Manufacturing</option>
                  <option>Energy, Oil &amp; Gas</option>
                  <option>Data Centres &amp; Technology</option>
                  <option>Transportation &amp; Infrastructure</option>
                  <option>Environment &amp; Sustainability</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field"><label>How can we help?</label><textarea placeholder="Tell us about your project…" /></div>
              <button type="submit" className="btn btn-primary">Send enquiry <span className="arrow">→</span></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
