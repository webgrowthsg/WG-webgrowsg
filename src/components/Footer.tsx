import { Link } from "react-router-dom";
import { SITE, WA } from "../lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" aria-label="WebGrow SG — Home">
              <span className="logo-mark" aria-hidden="true">
                <svg viewBox="0 0 40 40" width="32" height="32">
                  <rect width="40" height="40" rx="10" fill="currentColor" />
                  <circle cx="16" cy="16" r="9" fill="none" stroke="#f2c14e" strokeWidth="3" />
                  <line x1="23" y1="23" x2="33" y2="33" stroke="#f2c14e" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="3" fill="#f2c14e" />
                </svg>
              </span>
              <span className="logo-text">WebGrow<span className="logo-sg">SG</span></span>
            </Link>
            <p className="footer-tagline">Websites Built to Be Found.</p>
            <p className="footer-desc muted text-sm">
              Professional websites for Singapore businesses — designed for customers and structured for Google.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><Link to="/web-design-singapore/">Web Design</Link></li>
              <li><Link to="/website-maintenance/">Website Maintenance</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">SEO</h4>
            <ul>
              <li><Link to="/seo/">SEO Services</Link></li>
              <li><Link to="/local-seo/">Local SEO</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link to="/pricing/">Pricing</Link></li>
              <li><Link to="/about/">About</Link></li>
              <li><a href={WA.general} target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Our Work</h4>
            <ul>
              <li><Link to="/work/reddot-emergency/">RedDot Emergency</Link></li>
              <li><Link to="/work/singapore-carpentry/">Singapore Carpentry</Link></li>
              <li><Link to="/work/where-is-the-next-spot/">Where Is The Next Spot</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-smaller muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-smaller muted">
            WhatsApp <a href={WA.general} target="_blank" rel="noopener noreferrer">{SITE.whatsappDisplay}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
