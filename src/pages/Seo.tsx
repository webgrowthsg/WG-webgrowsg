import { Link } from "react-router-dom";
import { Seo as SeoMeta } from "../components/Seo";
import { CtaBlock } from "../components/CtaBlock";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { serviceJsonLd, breadcrumbJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export function Seo() {
  return (
    <>
      <SeoMeta
        title="SEO Services Singapore — Grow Your Google Visibility"
        description="SEO for Singapore businesses. We build SEO-ready websites and then grow your visibility over time — keyword research, page optimisation, content, internal linking and ongoing improvement."
        path="/seo/"
        jsonLd={[
          serviceJsonLd({
            name: "SEO Services Singapore",
            description: "Ongoing SEO growth for Singapore businesses — keyword research, page optimisation, content improvements and search visibility expansion.",
            path: "/seo/",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "SEO Services", path: "/seo/" },
          ]),
        ]}
      />

      <section className="service-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "SEO Services" }]} />
          <span className="eyebrow">SEO Services Singapore</span>
          <h1>Don't just launch. Keep growing.</h1>
          <p className="lead">
            Building an SEO-ready website is the starting point. Growing its visibility is an ongoing process. We help Singapore businesses show up in the searches that matter — and turn that visibility into enquiries.
          </p>
          <div className="btn-row">
            <a href={WA.seo} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Discuss SEO Growth</a>
            <Link to="/local-seo/" className="btn btn-ghost-light btn-lg">Local SEO</Link>
          </div>
        </div>
      </section>

      {/* Three layers */}
      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How SEO Works</span>
            <h2>Three layers, not just "adding keywords."</h2>
            <p className="lead">SEO isn't about stuffing keywords into a page. It's about making sure your website can be understood, covers the right topics, and improves over time.</p>
          </div>

          <div className="seo-layers">
            <div className="seo-layer">
              <div className="seo-layer-num">1</div>
              <div className="seo-layer-body">
                <h3>SEO Foundation</h3>
                <p>Can search engines properly understand your website? This is the technical and structural baseline — logical architecture, clean URLs, metadata, mobile optimisation, sitemaps and semantic structure. Included in every website we build.</p>
              </div>
            </div>
            <div className="seo-layer">
              <div className="seo-layer-num">2</div>
              <div className="seo-layer-body">
                <h3>SEO Coverage</h3>
                <p>Does your website contain useful pages addressing the services, problems and searches relevant to your customers? A single homepage can't answer every search. Dedicated service pages and helpful content expand what you're visible for.</p>
              </div>
            </div>
            <div className="seo-layer">
              <div className="seo-layer-num">3</div>
              <div className="seo-layer-body">
                <h3>SEO Improvement</h3>
                <p>Are those pages becoming more useful, competitive and effective over time? This is the ongoing work — research, optimisation, new pages, content improvements, internal linking and measurement. This is what SEO Growth delivers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What SEO Growth includes */}
      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">SEO Growth</span>
            <h2>What ongoing SEO actually involves.</h2>
            <p className="lead">Not a one-time fix. A systematic process of improving your website's visibility over time.</p>
          </div>
          <div className="grid grid-2">
            <div>
              <h3>Research</h3>
              <ul className="feature-list">
                <FeatureItem>Keyword research — what your customers actually search for</FeatureItem>
                <FeatureItem>Competitor research — what's working for similar businesses</FeatureItem>
                <FeatureItem>Search Console analysis — what Google already sees</FeatureItem>
              </ul>
            </div>
            <div>
              <h3>Optimisation</h3>
              <ul className="feature-list">
                <FeatureItem>Page optimisation for existing pages</FeatureItem>
                <FeatureItem>Additional service and content pages where strategically justified</FeatureItem>
                <FeatureItem>Internal linking improvements</FeatureItem>
                <FeatureItem>Technical SEO monitoring</FeatureItem>
              </ul>
            </div>
            <div>
              <h3>Local</h3>
              <ul className="feature-list">
                <FeatureItem>Local SEO where appropriate</FeatureItem>
                <FeatureItem>Google Business Profile guidance</FeatureItem>
                <FeatureItem>Local landing-page strategy where genuinely useful</FeatureItem>
              </ul>
            </div>
            <div>
              <h3>Reporting</h3>
              <ul className="feature-list">
                <FeatureItem>Performance reporting</FeatureItem>
                <FeatureItem>Search Console data review</FeatureItem>
                <FeatureItem>Clear recommendations for next steps</FeatureItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* No guarantees */}
      <section className="service-section">
        <div className="container-narrow">
          <div className="callout callout-amber">
            <h3 style={{ marginTop: 0 }}>No guaranteed rankings. Here's why that's honest.</h3>
            <p>
              Google's search results are determined by a complex, constantly changing algorithm. No one can guarantee specific rankings, and anyone who does is not being straight with you.
            </p>
            <p>
              What we can do is build a strong SEO foundation, systematically expand your coverage, and improve your pages over time. The goal is <strong>relevant visibility &rarr; qualified traffic &rarr; enquiries</strong> — not vanity rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Search intent */}
      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Search Intent</span>
            <h2>SEO starts with understanding what your customer is looking for.</h2>
            <p className="lead">When someone types "emergency plumber Singapore" they don't want a blog post about plumbing. They want a plumber, now. Your website needs pages that match that intent.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <span className="pill pill-teal">Service intent</span>
              <h3>"plumber Singapore"</h3>
              <p className="muted">Someone looking for a service. They need a dedicated service page that clearly shows you offer it, with a way to enquire immediately.</p>
            </div>
            <div className="card">
              <span className="pill pill-amber">Information intent</span>
              <h3>"how to fix a leaking pipe"</h3>
              <p className="muted">Someone looking for help. A helpful information page can attract this search and lead them toward your service when they need professional help.</p>
            </div>
            <div className="card">
              <span className="pill pill-ink">Local intent</span>
              <h3>"carpenter near me"</h3>
              <p className="muted">Someone looking for a local business. This is where local SEO, your Google Business Profile and location-relevant pages matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement */}
      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Measurement</span>
            <h2>How we track whether SEO is working.</h2>
            <p className="lead">Not by watching a single keyword ranking. By looking at whether your website is generating more relevant visibility and enquiries over time.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Search visibility</h3>
              <p className="muted">Are more of your pages showing up in Google for relevant searches over time? We track this through Search Console data.</p>
            </div>
            <div className="card">
              <h3>Relevant traffic</h3>
              <p className="muted">Is your website attracting visitors who are actually looking for what you offer? Quality matters more than quantity.</p>
            </div>
            <div className="card">
              <h3>Enquiries</h3>
              <p className="muted">Is the traffic turning into WhatsApp messages, calls and actual business? This is the outcome that matters.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        title="Ready to grow your visibility?"
        text="Let's discuss how ongoing SEO can help your Singapore business show up in more of the searches that matter."
        buttonText="Discuss SEO Growth"
        waUrl={WA.seo}
        secondaryLink={{ to: "/local-seo/", label: "Local SEO" }}
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
