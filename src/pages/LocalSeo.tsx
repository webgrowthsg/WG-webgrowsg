import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBlock } from "../components/CtaBlock";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { serviceJsonLd, breadcrumbJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export function LocalSeo() {
  return (
    <>
      <Seo
        title="Local SEO Singapore — Get Found by Customers Near You"
        description="Local SEO for Singapore businesses. Google Business Profile, local search visibility, service-area pages and review strategy — helping customers near you find and choose your business."
        path="/local-seo/"
        jsonLd={[
          serviceJsonLd({
            name: "Local SEO Singapore",
            description: "Local SEO services for Singapore businesses — Google Business Profile, local search visibility and service-area strategy.",
            path: "/local-seo/",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Local SEO", path: "/local-seo/" },
          ]),
        ]}
      />

      <section className="service-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Local SEO" }]} />
          <span className="eyebrow">Local SEO Singapore</span>
          <h1>Help customers near you find and choose your business.</h1>
          <p className="lead">
            When someone in Singapore searches for a service "near me" or in their area, you want to show up. Local SEO is about making sure Google understands where you operate and what you offer — so you appear in the right local searches.
          </p>
          <div className="btn-row">
            <a href={WA.localSeo} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Improve My Local Visibility</a>
            <Link to="/seo/" className="btn btn-ghost-light btn-lg">SEO Services</Link>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Local Search Intent</span>
            <h2>Local searches have a different intent.</h2>
            <p className="lead">Someone searching "plumber near me" or "renovation contractor Singapore" isn't browsing. They're looking for a business they can contact now.</p>
          </div>
          <div className="two-col">
            <div>
              <h3>What makes a search "local"</h3>
              <ul className="feature-list">
                <FeatureItem>Location-based searches ("near me", area names)</FeatureItem>
                <FeatureItem>Google Maps results and the local pack</FeatureItem>
                <FeatureItem>Google Business Profile listings</FeatureItem>
                <FeatureItem>Service-area relevance for your location</FeatureItem>
              </ul>
            </div>
            <div>
              <div className="local-mock">
                <div className="map-pin" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <h4>Your Business on the Map</h4>
                <p>When customers search locally, your Google Business Profile and website need to work together to show up and convert.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What We Focus On</span>
            <h2>The elements that matter for local SEO in Singapore.</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Google Business Profile</h3>
              <p className="muted">Your Google Business Profile is often the first thing a local customer sees. We help you set it up properly, with accurate service information, hours, and categories — so Google can match you to the right searches.</p>
            </div>
            <div className="card">
              <h3>Business Information Consistency</h3>
              <p className="muted">Your business name, address, phone number and services need to be consistent across your website and Google. Inconsistencies confuse Google and hurt your local visibility.</p>
            </div>
            <div className="card">
              <h3>Service Relevance</h3>
              <p className="muted">Google needs to understand what services you offer and where you offer them. Your website's service pages and local information help Google connect you to the right local searches.</p>
            </div>
            <div className="card">
              <h3>Local Landing Pages</h3>
              <p className="muted">Where genuinely useful, we create local landing pages for the areas you serve — not dozens of thin, duplicate pages, but real pages with useful information for customers in those areas.</p>
            </div>
            <div className="card">
              <h3>Reviews and Reputation</h3>
              <p className="muted">Reviews on your Google Business Profile matter for local ranking and for customer trust. We advise on how to encourage genuine reviews from satisfied customers.</p>
            </div>
            <div className="card">
              <h3>Website and Profile Working Together</h3>
              <p className="muted">Your Google Business Profile and your website shouldn't exist in isolation. They need to reinforce each other — consistent information, clear services, and a path from discovery to enquiry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container-narrow">
          <div className="callout callout-amber">
            <h3 style={{ marginTop: 0 }}>No thin neighbourhood doorway pages.</h3>
            <p>
              Some SEOs create dozens of near-identical pages for every neighbourhood in Singapore, each one barely different from the last. Google actively penalises this approach. We only create local pages where they provide genuine value to a real customer searching in that area.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section service-section-mist">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Measuring Local SEO</span>
            <h2>How we know your local visibility is improving.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Local search appearance</h3>
              <p className="muted">Are you showing up in Google Maps results and the local pack for relevant searches? We track this over time.</p>
            </div>
            <div className="card">
              <h3>Profile engagement</h3>
              <p className="muted">Are more people viewing your Google Business Profile, calling, and asking for directions?</p>
            </div>
            <div className="card">
              <h3>Local enquiries</h3>
              <p className="muted">Is your website and profile generating actual WhatsApp messages and calls from people in your service area?</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        title="Want to show up in local searches?"
        text="Let's discuss how local SEO can help customers near you find and choose your business."
        buttonText="Improve My Local Visibility"
        waUrl={WA.localSeo}
        secondaryLink={{ to: "/seo/", label: "SEO Services" }}
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
