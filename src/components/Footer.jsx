import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/gc-logo-white.png" alt="Gulf Consult Architects & Engineers" />
            <p>Engineering Saudi Arabia's future since 1980. A leading multidisciplinary engineering consultancy delivering Vision 2030.</p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#about">About Us</a>
            <a href="#leadership">Leadership</a>
            <a href="#careers">Careers</a>
            <a href="#clients">Clients</a>
          </div>
          <div className="footer-col">
            <h5>Expertise</h5>
            <a href="#projects">Projects</a>
            <a href="#sectors">Sectors</a>
            <a href="#services">Services</a>
            <a href="#vision">Vision 2030</a>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="#contact">Contact Us</a>
            <a href="https://www.gc-eng.com" target="_blank" rel="noopener">gc-eng.com</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="fb-copy">© 2025 Gulf Consult — Architects &amp; Engineers. All rights reserved.</div>
          <div className="fb-cert">
            <span>Saudi Council of Engineers</span>
            <span>ISO 9001</span>
            <span>ISO 14001</span>
            <span>ISO 45001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
