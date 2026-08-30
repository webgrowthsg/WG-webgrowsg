import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBlock } from "../components/CtaBlock";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Faq } from "../components/Faq";
import { CaseStudyCard, caseStudies } from "../components/CaseStudyCard";
import { serviceJsonLd, breadcrumbJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export function WebDesign() {
  const faqs = [
    {
      q: "How much does a website cost?",
      a: "The website build is $0 upfront. You pay a simple monthly fee that includes hosting, SSL, backups, technical maintenance, domain management and the SEO foundation. A minimum commitment applies. See our pricing page for details.",
    },
    {
      q: "Do I own my domain?",
      a: "Yes. Your domain is registered in your name or your business name. You own it, and you can take it with you at any time. We manage it on your behalf as part of the service, but it belongs to you.",
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Every website we build is mobile-first. That means the design is created for mobile screens first and then scales up to tablets and desktops. Most of your visitors will be on phones, so this is where we start.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Most business websites are ready within 1 to 3 weeks, depending on how quickly you can provide content and feedback. Larger multi-service sites may take longer. We'll give you a clear timeline before work begins.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. If you have an outdated website, we can rebuild it with a proper structure and modern design. We'll review your current site and discuss what to keep, what to improve, and what to restructure.",
    },
    {
      q: "What if I need changes after the website is live?",
      a: "Reasonable minor content updates are included as part of your monthly plan. For larger changes or new pages, we'll scope and quote separately so you always know what's included.",
    },
  ];

  return (
    <>
      <Seo
        title="Web Design Singapore — SEO-Ready Websites for SMEs"
        description="Professional web design for Singapore businesses. Mobile-first, SEO-ready websites structured around what your customers search for. $0 upfront build with hosting and maintenance included."
        path="/web-design-singapore/"
        jsonLd={[
          serviceJsonLd({
            name: "Web Design Singapore",
            description: "Professional, SEO-ready websites for Singapore businesses. Mobile-first design with hosting, maintenance and SEO foundation included.",
            path: "/web-design-singapore/",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Web Design", path: "/web-design-singapore/" },
          ]),
        ]}
      />

      <section className="service-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Web Design" }]} />
          <span className="eyebrow">Web Design Singapore</span>
          <h1>Websites structured around what your customers search for.</h1>
          <p className="lead">
            We don't just build your homepage. We build a website where every page answers a real question your potential customers are typing into Google — and each one leads them toward your business.
          </p>
          <div className="btn-row">
            <a href={WA.website} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Discuss Your Website</a>
            <Link to="/pricing/" className="btn btn-ghost-light btn-lg">See Pricing</Link>
          </div>
        </div>
      </section>

      {/* Problems SMEs face */}
      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">The Problem</span>
            <h2>Most Singapore SMEs don't need a fancier website. They need a more findable one.</h2>
            <p className="lead">If you run a business in Singapore, you've probably experienced one or more of these problems.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>You have a website, but nobody finds it.</h3>
              <p className="muted">Your site exists, but when someone searches for your service, your competitors show up instead. A website that can't be found might as well not exist.</p>
            </div>
            <div className="card">
              <h3>Your website is outdated.</h3>
              <p className="muted">It was built years ago, looks dated on mobile, and doesn't reflect the quality of your actual work. Visitors leave before they even read what you offer.</p>
            </div>
            <div className="card">
              <h3>You depend on enquiries but can't track them.</h3>
              <p className="muted">You're not sure where your enquiries come from, or why some months are busy and others are quiet. Your website isn't helping you generate consistent leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Who This Is For</span>
            <h2>Built for Singapore businesses that need enquiries.</h2>
          </div>
          <div className="grid grid-2">
            <div>
              <ul className="feature-list">
                <FeatureItem>Home services and contractors</FeatureItem>
                <FeatureItem>Renovation and carpentry businesses</FeatureItem>
                <FeatureItem>Plumbing and electrical services</FeatureItem>
                <FeatureItem>Cleaning and pest control companies</FeatureItem>
              </ul>
            </div>
            <div>
              <ul className="feature-list">
                <FeatureItem>Education and tuition centres</FeatureItem>
                <FeatureItem>Consultants and professional services</FeatureItem>
                <FeatureItem>Tradespeople and sole proprietors</FeatureItem>
                <FeatureItem>Other Singapore SMEs that need leads</FeatureItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Approach</span>
            <h2>Search intent, then design.</h2>
            <p className="lead">Before we design a single page, we understand what your customers actually search for. Then we build pages that answer those searches.</p>
          </div>
          <div className="process-list">
            <div className="process-step">
              <div className="process-step-num" />
              <div className="process-step-body">
                <h4>Understand your business and customers</h4>
                <p>We learn what you do, who you serve, and what problems your customers are trying to solve when they search.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-num" />
              <div className="process-step-body">
                <h4>Map out the page structure</h4>
                <p>Based on what your customers search for, we plan the pages your website needs — including service pages and helpful information.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-num" />
              <div className="process-step-body">
                <h4>Design and build</h4>
                <p>We design a clean, mobile-first website and build it with proper structure, metadata and internal links — the SEO foundation.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-num" />
              <div className="process-step-body">
                <h4>Launch and maintain</h4>
                <p>Your website goes live with hosting, SSL and ongoing care included. From there, we can grow its visibility with ongoing SEO.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What's Included</span>
            <h2>Everything you need to get online and stay online.</h2>
          </div>
          <div className="grid grid-2">
            <div>
              <h3>Website</h3>
              <ul className="feature-list">
                <FeatureItem>Professional informational website</FeatureItem>
                <FeatureItem>Responsive, mobile-first design</FeatureItem>
                <FeatureItem>WhatsApp enquiry conversion</FeatureItem>
                <FeatureItem>Search-friendly URLs and structure</FeatureItem>
                <FeatureItem>Page metadata and titles</FeatureItem>
                <FeatureItem>XML sitemap and Search Console setup</FeatureItem>
              </ul>
            </div>
            <div>
              <h3>Hosting &amp; Care</h3>
              <ul className="feature-list">
                <FeatureItem>Managed hosting</FeatureItem>
                <FeatureItem>SSL certificate</FeatureItem>
                <FeatureItem>Regular backups</FeatureItem>
                <FeatureItem>Technical maintenance and updates</FeatureItem>
                <FeatureItem>Domain management</FeatureItem>
                <FeatureItem>Reasonable minor content updates</FeatureItem>
              </ul>
            </div>
          </div>
          <div className="callout mt-6">
            <p>
              <strong>You own your domain.</strong> Your Google accounts belong to you. No unnecessary technical lock-in. If you ever decide to leave, your website and assets are yours to take.
            </p>
          </div>
        </div>
      </section>

      {/* Real work */}
      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Real Work</span>
            <h2>Websites we've built for Singapore businesses.</h2>
            <p className="lead">Each project shows a different approach to structuring a website around search and customer intent.</p>
          </div>
          <div className="grid grid-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="service-section service-section-mist">
        <div className="container-narrow text-center">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, transparent pricing.</h2>
          <p className="lead mb-6">
            $0 upfront website build. Hosting, maintenance and SEO foundation included from one simple monthly fee. A minimum commitment applies.
          </p>
          <div className="btn-row justify-center">
            <Link to="/pricing/" className="btn btn-teal btn-lg">See Full Pricing</Link>
            <a href={WA.website} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-section">
        <div className="container-narrow">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions about web design.</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBlock
        title="Ready to build your website?"
        text="Let's discuss what your business needs. Get a professional, SEO-ready website with hosting and maintenance included."
        buttonText="Discuss Your Website"
        waUrl={WA.website}
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
