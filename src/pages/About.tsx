import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBlock } from "../components/CtaBlock";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { breadcrumbJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export function About() {
  const principles = [
    {
      title: "Your domain belongs to you.",
      desc: "Your domain is registered in your name. You own it and can take it with you at any time.",
    },
    {
      title: "Your Google accounts belong to you.",
      desc: "Search Console, Analytics and any other Google tools are set up under your accounts. You have full access.",
    },
    {
      title: "No guaranteed ranking promises.",
      desc: "We won't promise specific Google rankings because no one can honestly do that. We focus on relevant visibility and enquiries.",
    },
    {
      title: "Clear scope before work begins.",
      desc: "You'll always know what's included, what isn't, and what costs extra. No vague scope or surprise invoices.",
    },
    {
      title: "No unnecessary technical lock-in.",
      desc: "We don't use proprietary systems designed to trap you. Your website and content are portable.",
    },
    {
      title: "Direct communication.",
      desc: "You talk to the person doing the work. No account managers, no handoffs, no lost-in-translation moments.",
    },
  ];

  return (
    <>
      <Seo
        title="About WebGrow SG — Small by Design"
        description="WebGrow SG is small by design. You communicate directly with the person responsible for your website. No handoffs, no overhead, no lock-in. Just clear, accountable work."
        path="/about/"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <section className="service-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} />
          <span className="eyebrow">About WebGrow SG</span>
          <h1>Small by design.</h1>
          <p className="lead">
            WebGrow SG is intentionally small. When you work with us, you communicate directly with the person responsible for your website — not an account manager, not a sales rep, not a chain of people who each know half the story.
          </p>
          <div className="btn-row">
            <a href={WA.about} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Talk Directly on WhatsApp</a>
            <Link to="/web-design-singapore/" className="btn btn-ghost-light btn-lg">See Services</Link>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container-narrow">
          <h2>Why small is better for you.</h2>
          <p className="lead mb-6">
            A larger agency has more overhead, more handoffs and more people between you and the work. Being small isn't a limitation — it's a deliberate choice that benefits you.
          </p>
          <div className="grid grid-2">
            <div className="card">
              <h3>Direct communication</h3>
              <p className="muted">You talk to the person doing the work. Questions get answered by someone who actually knows your project, not relayed through a chain.</p>
            </div>
            <div className="card">
              <h3>Fewer handoffs</h3>
              <p className="muted">In a larger team, your project passes between sales, design, development and support. Each handoff is a chance for something to get lost. We keep it simple.</p>
            </div>
            <div className="card">
              <h3>Consistent implementation</h3>
              <p className="muted">The person who designs your website understands how it's built. The person who builds it understands the SEO strategy. No gaps between intention and execution.</p>
            </div>
            <div className="card">
              <h3>Practical recommendations</h3>
              <p className="muted">You get honest, practical advice — not recommendations shaped by sales targets or the need to keep a large team busy. If something isn't worth doing, we'll say so.</p>
            </div>
            <div className="card">
              <h3>Lower overhead</h3>
              <p className="muted">No fancy office, no large team, no unnecessary costs passed on to you. You pay for the work, not the infrastructure around it.</p>
            </div>
            <div className="card">
              <h3>Clear accountability</h3>
              <p className="muted">When you know exactly who is responsible, there's no finger-pointing. If something needs fixing, the same person who built it fixes it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section-mist">
        <div className="container-narrow">
          <div className="section-heading">
            <span className="eyebrow">Operating Principles</span>
            <h2>How we work with you.</h2>
            <p className="lead">Six principles that shape every project.</p>
          </div>
          <div>
            {principles.map((p, i) => (
              <div className="principle" key={i}>
                <div className="principle-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="principle-body">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What We Do</span>
            <h2>Services and work.</h2>
          </div>
          <div className="grid grid-4">
            <Link to="/web-design-singapore/" className="card card-hover">
              <h3>Web Design &rarr;</h3>
              <p className="muted text-sm">SEO-ready websites for Singapore businesses.</p>
            </Link>
            <Link to="/website-maintenance/" className="card card-hover">
              <h3>Maintenance &rarr;</h3>
              <p className="muted text-sm">Hosting, SSL, backups and technical care.</p>
            </Link>
            <Link to="/seo/" className="card card-hover">
              <h3>SEO Services &rarr;</h3>
              <p className="muted text-sm">Ongoing SEO to grow your visibility.</p>
            </Link>
            <Link to="/local-seo/" className="card card-hover">
              <h3>Local SEO &rarr;</h3>
              <p className="muted text-sm">Get found by customers near you.</p>
            </Link>
          </div>
          <div className="text-center mt-7">
            <Link to="/pricing/" className="btn btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>

      <CtaBlock
        title="Want to work with someone who answers directly?"
        text="If you're tired of account managers and handoffs, let's talk. You'll deal with the person who actually does the work — from first conversation to ongoing care."
        buttonText="Talk Directly on WhatsApp"
        waUrl={WA.about}
        secondaryLink={{ to: "/web-design-singapore/", label: "See Services" }}
      />
    </>
  );
}
