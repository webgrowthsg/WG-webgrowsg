import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBlock } from "../components/CtaBlock";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Faq } from "../components/Faq";
import { breadcrumbJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export function Pricing() {
  const faqs = [
    {
      q: "Why is the website build $0 upfront?",
      a: "We believe the value is in the ongoing relationship, not the initial build. Instead of charging a large upfront fee, the cost of the build is covered by your monthly plan. This makes it easier for Singapore SMEs to get a professional website without a big initial outlay.",
    },
    {
      q: "What does 'minimum commitment applies' mean?",
      a: "Because the website build is included at no upfront cost, a minimum commitment period applies to your monthly plan. This ensures the build cost is covered. We'll discuss the specific commitment with you before any work begins.",
    },
    {
      q: "Can I just get the website without SEO Growth?",
      a: "Yes. The website plan includes the SEO foundation — the technical and structural fundamentals. SEO Growth is a separate, optional service for businesses that want to actively expand their search visibility over time.",
    },
    {
      q: "What if I need a larger or more complex website?",
      a: "The standard plan covers professional informational and lead-generation websites. E-commerce, SaaS, portals, marketplaces and complex custom applications require separate assessment and are outside the standard package.",
    },
    {
      q: "Do you guarantee Google rankings?",
      a: "No. Google's algorithm is complex and constantly changing. No one can guarantee specific rankings. What we do is build a strong SEO foundation and systematically improve your visibility over time, focusing on relevant traffic and enquiries rather than vanity metrics.",
    },
    {
      q: "Can I cancel my maintenance plan?",
      a: "After the minimum commitment period, you can choose to take over your own hosting and maintenance. Your domain and content belong to you. We don't lock you in — but we do ask you to honour the initial commitment that covers the build cost.",
    },
  ];

  return (
    <>
      <Seo
        title="Pricing — Web Design & SEO Plans | WebGrow SG"
        description="Simple, transparent pricing for Singapore businesses. $0 upfront website build with hosting and maintenance included, plus ongoing SEO Growth plans. No guaranteed rankings — just relevant visibility and enquiries."
        path="/pricing/"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing/" },
        ])}
      />

      <section className="service-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing" }]} />
          <span className="eyebrow">Pricing</span>
          <h1>Simple pricing. No surprises.</h1>
          <p className="lead">
            Three plans, one principle: you always know what's included and what costs extra. No hidden fees, no lock-in beyond the minimum commitment.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="pricing-grid">
            {/* Basic Information plan */}
            <div className="price-card">
              <span className="price-label">Starter</span>
              <div className="price-name">Information Website</div>
              <div className="price-amount">
                <span style={{ fontSize: "1.4rem", fontWeight: 500 }}>$0</span> upfront
              </div>
              <div className="price-note">
                From <strong>S$XX/month</strong> &bull; Minimum commitment applies
              </div>
              <ul className="feature-list">
                <FeatureItem>Professional informational website</FeatureItem>
                <FeatureItem>Responsive, mobile-first design</FeatureItem>
                <FeatureItem>Managed hosting</FeatureItem>
                <FeatureItem>SSL certificate</FeatureItem>
                <FeatureItem>Technical maintenance and updates</FeatureItem>
                <FeatureItem>Domain management</FeatureItem>
                <FeatureItem>Reasonable minor content updates</FeatureItem>
              </ul>
              <a href={WA.pricing} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto" }}>
                Discuss Your Website
              </a>
              <p className="text-smaller muted text-center mt-4">
                No SEO or Google ranking services included.
              </p>
            </div>

            {/* Website plan */}
            <div className="price-card featured">
              <span className="price-label">Website</span>
              <div className="price-name">SEO-Ready Business Website</div>
              <div className="price-amount">
                <span style={{ fontSize: "1.4rem", fontWeight: 500 }}>$0</span> upfront
              </div>
              <div className="price-note">
                From <strong>S$XX/month</strong> &bull; Minimum commitment applies
              </div>
              <ul className="feature-list">
                <FeatureItem>Professional informational website</FeatureItem>
                <FeatureItem>Responsive, mobile-first design</FeatureItem>
                <FeatureItem>Managed hosting</FeatureItem>
                <FeatureItem>SSL certificate</FeatureItem>
                <FeatureItem>Regular backups</FeatureItem>
                <FeatureItem>Technical maintenance and updates</FeatureItem>
                <FeatureItem>Domain management</FeatureItem>
                <FeatureItem>SEO foundation included</FeatureItem>
                <FeatureItem>Analytics / Search Console setup</FeatureItem>
                <FeatureItem>WhatsApp enquiry conversion</FeatureItem>
                <FeatureItem>Reasonable minor content updates</FeatureItem>
              </ul>
              <a href={WA.pricing} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto" }}>
                Discuss Your Website
              </a>
              <p className="text-smaller muted text-center mt-4">
                E-commerce, SaaS, portals and complex applications require separate assessment.
              </p>
            </div>

            {/* SEO Growth plan */}
            <div className="price-card">
              <span className="price-label">SEO Growth</span>
              <div className="price-name">Grow Your Google Visibility</div>
              <div className="price-amount">
                From <span className="price-unit">S$XXX/month</span>
              </div>
              <div className="price-note">
                Ongoing SEO service &bull; No guaranteed rankings
              </div>
              <ul className="feature-list">
                <FeatureItem>Keyword research</FeatureItem>
                <FeatureItem>Competitor research</FeatureItem>
                <FeatureItem>Existing-page optimisation</FeatureItem>
                <FeatureItem>Additional service/content pages where strategically justified</FeatureItem>
                <FeatureItem>Internal linking improvements</FeatureItem>
                <FeatureItem>Technical SEO monitoring</FeatureItem>
                <FeatureItem>Local SEO where appropriate</FeatureItem>
                <FeatureItem>Search Console analysis</FeatureItem>
                <FeatureItem>Performance reporting</FeatureItem>
              </ul>
              <a href={WA.seo} className="btn btn-teal btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto" }}>
                Discuss SEO on WhatsApp
              </a>
              <p className="text-smaller muted text-center mt-4">
                Focus: relevant visibility &rarr; qualified traffic &rarr; enquiries
              </p>
            </div>
          </div>

          <div className="callout callout-amber mt-7">
            <p>
              <strong>Pricing is being finalised.</strong> The monthly figures shown above are indicative. Contact us on WhatsApp for a specific quote based on your business needs. We'll be upfront about costs before any work begins.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">The Full Picture</span>
            <h2>What your monthly plan covers.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Build</h3>
              <p className="muted">A professional, mobile-first, SEO-ready website structured around what your customers search for. $0 upfront.</p>
            </div>
            <div className="card">
              <h3>Maintain</h3>
              <p className="muted">Hosting, SSL, backups, domain management, security updates and technical support. All included.</p>
            </div>
            <div className="card">
              <h3>Foundation</h3>
              <p className="muted">The SEO foundation — architecture, URLs, metadata, sitemaps, mobile optimisation and Search Console readiness. Included in every build.</p>
            </div>
          </div>
          <div className="text-center mt-7">
            <Link to="/web-design-singapore/" className="btn btn-ghost">Learn About Web Design</Link>
            <Link to="/seo/" className="btn btn-ghost" style={{ marginLeft: "12px" }}>Learn About SEO Growth</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-section">
        <div className="container-narrow">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Pricing questions.</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBlock
        title="Have questions about pricing?"
        text="The best way to get specific pricing is to chat with us on WhatsApp. We'll understand your needs and give you a clear, honest quote."
        buttonText="Chat on WhatsApp"
        waUrl={WA.pricing}
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
