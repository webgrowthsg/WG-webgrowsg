import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBlock } from "../components/CtaBlock";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { serviceJsonLd, breadcrumbJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export function Maintenance() {
  return (
    <>
      <Seo
        title="Website Maintenance Singapore — Hosting, SSL, Backups & Care"
        description="Ongoing website care for Singapore businesses. Managed hosting, SSL, backups, security updates, domain management and technical support — all included in one monthly fee."
        path="/website-maintenance/"
        jsonLd={[
          serviceJsonLd({
            name: "Website Maintenance",
            description: "Ongoing website care including hosting, SSL, backups, security updates and technical support for Singapore businesses.",
            path: "/website-maintenance/",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Website Maintenance", path: "/website-maintenance/" },
          ]),
        ]}
      />

      <section className="service-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Website Maintenance" }]} />
          <span className="eyebrow">Website Maintenance</span>
          <h1>Your website needs ongoing care. We handle it for you.</h1>
          <p className="lead">
            A website isn't something you build once and forget. Hosting, security, backups, updates and domain management all need attention. We take care of the technical side so you can focus on running your business.
          </p>
          <div className="btn-row">
            <a href={WA.maintenance} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Discuss Website Care</a>
            <Link to="/pricing/" className="btn btn-ghost-light btn-lg">See Pricing</Link>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why Maintenance Matters</span>
            <h2>A neglected website breaks quietly.</h2>
            <p className="lead">Most business owners don't check their website regularly. Problems build up in the background until something stops working.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Security</h3>
              <p className="muted">Outdated software and plugins are the most common way websites get compromised. Regular updates keep your site secure.</p>
            </div>
            <div className="card">
              <h3>Uptime</h3>
              <p className="muted">If your hosting has an issue or a component breaks, someone needs to notice and fix it. We monitor and respond so your site stays online.</p>
            </div>
            <div className="card">
              <h3>Backups</h3>
              <p className="muted">If something goes wrong — a bad update, an accidental deletion, or a security issue — a recent backup means you don't lose your website.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What's Included</span>
            <h2>Full technical care, included in your monthly plan.</h2>
          </div>
          <div className="two-col">
            <div>
              <h3>Hosting &amp; Infrastructure</h3>
              <ul className="feature-list">
                <FeatureItem>Managed hosting on reliable servers</FeatureItem>
                <FeatureItem>SSL certificate (HTTPS) — renewed and maintained</FeatureItem>
                <FeatureItem>Regular automated backups</FeatureItem>
                <FeatureItem>Uptime monitoring</FeatureItem>
                <FeatureItem>Domain registration and renewal management</FeatureItem>
              </ul>
            </div>
            <div>
              <h3>Updates &amp; Support</h3>
              <ul className="feature-list">
                <FeatureItem>Software and dependency updates</FeatureItem>
                <FeatureItem>Security patching</FeatureItem>
                <FeatureItem>Reasonable minor content updates</FeatureItem>
                <FeatureItem>Technical support when something isn't working</FeatureItem>
                <FeatureItem>DNS and email configuration support</FeatureItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Scope &amp; Boundaries</span>
            <h2>What maintenance includes — and what falls outside.</h2>
            <p className="lead">Clear scope means no surprises. Here's what's covered and what isn't.</p>
          </div>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Included in Maintenance</th>
                <th>Outside Normal Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hosting, SSL, backups, uptime monitoring</td>
                <td>New pages or major redesigns</td>
              </tr>
              <tr>
                <td>Software and security updates</td>
                <td>Custom feature development</td>
              </tr>
              <tr>
                <td>Reasonable minor content updates (text, images)</td>
                <td>Large-scale content creation or copywriting</td>
              </tr>
              <tr>
                <td>Domain management and renewal</td>
                <td>Third-party integrations and API work</td>
              </tr>
              <tr>
                <td>Technical support for existing functionality</td>
                <td>SEO growth services (separate service)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout callout-amber mt-6">
            <p>
              For anything outside normal maintenance, we'll scope and quote separately before starting. You always know what's included and what costs extra.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Ownership</span>
            <h2>Your website belongs to you.</h2>
            <p className="lead">No lock-in. No hidden ownership clauses. Your assets are yours.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Your domain</h3>
              <p className="muted">Registered in your name. You can take it with you at any time.</p>
            </div>
            <div className="card">
              <h3>Your Google accounts</h3>
              <p className="muted">Search Console and Analytics belong to you, not us. You have full access.</p>
            </div>
            <div className="card">
              <h3>Your content</h3>
              <p className="muted">Your text, images and data are yours. No proprietary CMS that traps you.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        title="Want someone to handle your website care?"
        text="Let's discuss keeping your website online, secure and up to date — without you having to think about it."
        buttonText="Discuss Website Care"
        waUrl={WA.maintenance}
        secondaryLink={{ to: "/pricing/", label: "See Pricing" }}
      />
    </>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <span className="check" aria-hidden="true">
        <svg viewBox="0 0 14 14" fill="none">
          <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
