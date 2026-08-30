import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBlock } from "../components/CtaBlock";
import { CaseStudyCard, caseStudies } from "../components/CaseStudyCard";
import { orgJsonLd, websiteJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export function Home() {
  return (
    <>
      <Seo
        title="WebGrow SG — Websites Built to Be Found | Singapore Web Design & SEO"
        description="Professional websites for Singapore businesses — designed for customers and structured for Google. $0 upfront website build with hosting, maintenance and SEO foundation included."
        path="/"
        jsonLd={[orgJsonLd, websiteJsonLd()]}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="pill pill-amber reveal">Singapore Web Design &amp; SEO</span>
            <h1 className="reveal reveal-d1">Websites Built to Be Found.</h1>
            <p className="lead reveal reveal-d2">
              Professional websites for Singapore businesses — designed for customers and structured for Google.
            </p>
            <p className="hero-offer reveal reveal-d3">
              <strong>$0 upfront website build.</strong> Hosting, maintenance and SEO foundation included from one simple monthly fee.
            </p>
            <div className="btn-row reveal reveal-d3">
              <a href={WA.website} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                Get Your Website
              </a>
              <a href="#our-work" className="btn btn-ghost-light btn-lg">See Our Work</a>
            </div>
            <p className="hero-trust reveal reveal-d3">
              Built for Singapore businesses &bull; SEO-ready &bull; Mobile-first &bull; You own your domain
            </p>
          </div>
          <div className="hero-visual reveal reveal-d2">
            <SearchGraph />
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-7">
            <span className="eyebrow">The Problem</span>
            <h2>Having a website doesn't automatically mean customers can find it.</h2>
            <p className="lead container-narrow" style={{ margin: "0 auto" }}>
              Most business websites are a single homepage with a few standard pages. They exist, but they don't answer the specific questions your potential customers are typing into Google.
            </p>
          </div>

          <div className="site-tree">
            <div className="tree-card">
              <h4>Basic Website</h4>
              <ul className="tree-basic">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
              <p className="muted text-sm mt-5">
                A few generic pages. One page tries to cover everything. Little chance of matching specific searches.
              </p>
            </div>
            <div className="tree-card">
              <h4>Search-Oriented Website</h4>
              <ul className="tree-search">
                <li>Home</li>
                <li className="service">Service A — answers a specific search</li>
                <li className="service">Service B — answers a specific search</li>
                <li className="service">Service C — answers a specific search</li>
                <li>Helpful Information — answers customer questions</li>
                <li className="intent">Customer Intent — leads toward enquiry</li>
              </ul>
              <p className="muted text-sm mt-5">
                Different pages answer different searches, and each one leads visitors toward your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build → Maintain → Grow */}
      <section className="section section-mist">
        <div className="container">
          <div className="text-center mb-7">
            <span className="eyebrow">One Connected Lifecycle</span>
            <h2>Build &rarr; Maintain &rarr; Grow</h2>
            <p className="lead container-narrow" style={{ margin: "0 auto" }}>
              Your website isn't a one-time project. It's a business asset that needs to be built well, looked after, and grown over time.
            </p>
          </div>

          <div className="lifecycle">
            <div className="lifecycle-step">
              <div className="lifecycle-num">01</div>
              <h3>Build</h3>
              <p>A professional, mobile-first, SEO-ready website structured around what your customers search for — not just a homepage.</p>
              <Link to="/web-design-singapore/" className="case-link">Learn about web design &rarr;</Link>
            </div>
            <div className="lifecycle-step">
              <div className="lifecycle-num">02</div>
              <h3>Maintain</h3>
              <p>Hosting, SSL, backups, domain management, updates and technical care — handled for you so your website stays online and secure.</p>
              <Link to="/website-maintenance/" className="case-link">Learn about maintenance &rarr;</Link>
            </div>
            <div className="lifecycle-step">
              <div className="lifecycle-num">03</div>
              <h3>Grow</h3>
              <p>Ongoing SEO to expand your relevant search visibility — more useful pages, better optimisation, and more opportunities for enquiries.</p>
              <Link to="/seo/" className="case-link">Learn about SEO &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Foundation vs Growth */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-7">
            <span className="eyebrow">SEO Foundation vs SEO Growth</span>
            <h2>Building an SEO-ready website is the starting point. Growing its visibility is an ongoing process.</h2>
          </div>

          <div className="two-col">
            <div>
              <h3>SEO Foundation</h3>
              <p className="muted">Included in every WebGrow SG website. The technical and structural fundamentals that let Google understand your site properly.</p>
              <ul className="feature-list">
                <FeatureItem>Logical website architecture</FeatureItem>
                <FeatureItem>Search-friendly URLs</FeatureItem>
                <FeatureItem>Page metadata and titles</FeatureItem>
                <FeatureItem>XML sitemap</FeatureItem>
                <FeatureItem>Mobile optimisation</FeatureItem>
                <FeatureItem>Semantic HTML structure</FeatureItem>
                <FeatureItem>Internal linking between pages</FeatureItem>
                <FeatureItem>Search Console readiness</FeatureItem>
              </ul>
            </div>
            <div>
              <h3>SEO Growth</h3>
              <p className="muted">An ongoing premium service that expands your visibility over time — turning your foundation into actual search traffic and enquiries.</p>
              <ul className="feature-list">
                <FeatureItem>Keyword and competitor research</FeatureItem>
                <FeatureItem>Page optimisation for existing pages</FeatureItem>
                <FeatureItem>Additional commercially useful pages</FeatureItem>
                <FeatureItem>Content improvements</FeatureItem>
                <FeatureItem>Internal-link improvements</FeatureItem>
                <FeatureItem>Local SEO where appropriate</FeatureItem>
                <FeatureItem>Search Console analysis</FeatureItem>
                <FeatureItem>Performance reporting</FeatureItem>
              </ul>
            </div>
          </div>

          <div className="callout callout-amber mt-7">
            <p>
              <strong>Google rankings cannot be guaranteed.</strong> Anyone who promises specific rankings is not being honest. What we can do is build a strong foundation and systematically improve your visibility over time.
            </p>
          </div>

          <div className="text-center mt-7">
            <Link to="/seo/" className="btn btn-teal btn-lg">Understand SEO Growth</Link>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section section-mist">
        <div className="container">
          <div className="text-center mb-7">
            <span className="eyebrow">What We Build</span>
            <h2>Three types of websites, one principle.</h2>
            <p className="lead container-narrow" style={{ margin: "0 auto" }}>
              Every website is structured around what your customers search for. The type of website depends on your business.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card card-hover">
              <span className="pill pill-teal">Information</span>
              <h3>Business Information Websites</h3>
              <p className="muted">For companies that need a professional digital presence — clear, credible, and structured so customers can find and understand your services.</p>
            </div>
            <div className="card card-hover">
              <span className="pill pill-amber">Lead Generation</span>
              <h3>Local Lead Generation Websites</h3>
              <p className="muted">For SMEs and service businesses that depend on calls, WhatsApp enquiries and leads. Built around specific services and direct conversion paths.</p>
            </div>
            <div className="card card-hover">
              <span className="pill pill-ink">Content &amp; Discovery</span>
              <h3>Content &amp; Discovery Websites</h3>
              <p className="muted">For information-rich businesses and projects where organic discovery matters. Architecture designed for browsing and search exploration.</p>
            </div>
          </div>

          <p className="text-center muted mt-7">
            E-commerce, SaaS, portals, marketplaces and complex custom applications require separate assessment and are outside the standard package.
          </p>
        </div>
      </section>

      {/* Our Work */}
      <section className="section" id="our-work">
        <div className="container">
          <div className="text-center mb-7">
            <span className="eyebrow">Real Work</span>
            <h2>Websites we've built and structured.</h2>
            <p className="lead container-narrow" style={{ margin: "0 auto" }}>
              Each project demonstrates a different approach to structuring a website around search and customer intent.
            </p>
          </div>

          <div className="grid grid-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title="Let's build your website."
        text="Get a professional, SEO-ready website for your Singapore business — with hosting, maintenance and SEO foundation included from one simple monthly fee."
        buttonText="Get Your Website"
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

function SearchGraph() {
  const nodes = [
    { id: "center", x: 260, y: 210, label: "Your Website", center: true },
    { id: "n1", x: 80, y: 80, label: "Service A" },
    { id: "n2", x: 440, y: 80, label: "Service B" },
    { id: "n3", x: 80, y: 340, label: "Service C" },
    { id: "n4", x: 440, y: 340, label: "Info Pages" },
    { id: "n5", x: 260, y: 380, label: "Enquiry" },
  ];

  const lines = [
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
  ];

  return (
    <div className="search-graph">
      <svg viewBox="0 0 520 460" role="img" aria-label="Diagram showing a central website connected to multiple service pages and an enquiry path">
        {lines.map(([from, to], i) => (
          <line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            className="graph-line"
          />
        ))}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.center ? 48 : 34}
              className={node.center ? "graph-node graph-node-center" : "graph-node"}
            />
            <text
              x={node.x}
              y={node.y}
              className={node.center ? "graph-label graph-label-center" : "graph-label"}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
