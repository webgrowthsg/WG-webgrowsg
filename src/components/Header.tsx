import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { WA } from "../lib/site";

const workLinks = [
  { to: "/work/reddot-emergency/", label: "RedDot Emergency" },
  { to: "/work/singapore-carpentry/", label: "Singapore Carpentry" },
  { to: "/work/where-is-the-next-spot/", label: "Where Is The Next Spot" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSeoOpen(false);
    setWorkOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = location.pathname === "/";

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${isDark && !scrolled ? "on-hero" : ""}`}>
      <div className="container-wide header-inner">
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

        <nav className="nav-desktop" aria-label="Primary">
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-trigger" aria-expanded={servicesOpen} aria-haspopup="true">
              Services
              <ChevronIcon />
            </button>
            {servicesOpen && (
              <div className="dropdown-menu">
                <Link to="/web-design-singapore/">Web Design</Link>
                <Link to="/website-maintenance/">Website Maintenance</Link>
              </div>
            )}
          </div>

          <div
            className="nav-item dropdown"
            onMouseEnter={() => setSeoOpen(true)}
            onMouseLeave={() => setSeoOpen(false)}
          >
            <button className="nav-trigger" aria-expanded={seoOpen} aria-haspopup="true">
              SEO
              <ChevronIcon />
            </button>
            {seoOpen && (
              <div className="dropdown-menu">
                <Link to="/seo/">SEO Services</Link>
                <Link to="/local-seo/">Local SEO</Link>
              </div>
            )}
          </div>

          <div
            className="nav-item dropdown"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button className="nav-trigger" aria-expanded={workOpen} aria-haspopup="true">
              Our Work
              <ChevronIcon />
            </button>
            {workOpen && (
              <div className="dropdown-menu">
                {workLinks.map((w) => (
                  <Link key={w.to} to={w.to}>{w.label}</Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/pricing/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            Pricing
          </NavLink>
          <NavLink to="/about/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            About
          </NavLink>
        </nav>

        <div className="header-cta">
          <a href={WA.general} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp Us
          </a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu">
        <nav className="mobile-nav" aria-label="Mobile">
          <div className="mobile-group">
            <button
              className="mobile-group-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services <ChevronIcon />
            </button>
            {servicesOpen && (
              <div className="mobile-group-items">
                <Link to="/web-design-singapore/">Web Design</Link>
                <Link to="/website-maintenance/">Website Maintenance</Link>
              </div>
            )}
          </div>

          <div className="mobile-group">
            <button
              className="mobile-group-trigger"
              onClick={() => setSeoOpen(!seoOpen)}
              aria-expanded={seoOpen}
            >
              SEO <ChevronIcon />
            </button>
            {seoOpen && (
              <div className="mobile-group-items">
                <Link to="/seo/">SEO Services</Link>
                <Link to="/local-seo/">Local SEO</Link>
              </div>
            )}
          </div>

          <div className="mobile-group">
            <button
              className="mobile-group-trigger"
              onClick={() => setWorkOpen(!workOpen)}
              aria-expanded={workOpen}
            >
              Our Work <ChevronIcon />
            </button>
            {workOpen && (
              <div className="mobile-group-items">
                {workLinks.map((w) => (
                  <Link key={w.to} to={w.to}>{w.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/pricing/" className="mobile-link">Pricing</Link>
          <Link to="/about/" className="mobile-link">About</Link>

          <a href={WA.general} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
