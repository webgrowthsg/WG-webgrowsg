import { Link } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBlock } from "./CtaBlock";
import { Seo } from "./Seo";
import { breadcrumbJsonLd } from "../lib/structuredData";
import { WA } from "../lib/site";

export interface CaseStudyData {
  slug: string;
  path: string;
  name: string;
  category: string;
  liveUrl: string;
  title: string;
  metaDescription: string;
  h1: string;
  lead: string;
  context: string;
  audience: string;
  intent: string;
  iaItems: { parent: string; children: string[] }[];
  seoConsiderations: string[];
  conversionStrategy: string;
  pageTypes: string[];
  demonstrates: string[];
  waMessage: string;
}

export function CaseStudyLayout({ data, children }: { data: CaseStudyData; children?: React.ReactNode }) {
  return (
    <>
      <Seo
        title={data.title}
        description={data.metaDescription}
        path={data.path}
        type="article"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/" },
          { name: data.name, path: data.path },
        ])}
      />

      <section className="case-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Our Work" }, { name: data.name }]} />
          <span className="eyebrow">{data.category}</span>
          <h1>{data.h1}</h1>
          <p className="lead">{data.lead}</p>
          <div className="btn-row mt-5">
            <a href={data.liveUrl} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              Visit Live Website &rarr;
            </a>
            <a href={`https://wa.me/6593485255?text=${encodeURIComponent(data.waMessage)}`} className="btn btn-ghost-light btn-lg" target="_blank" rel="noopener noreferrer">
              Discuss a Similar Project
            </a>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <div className="case-meta">
            <div className="case-meta-item">
              <div className="meta-label">Category</div>
              <div className="meta-value">{data.category}</div>
            </div>
            <div className="case-meta-item">
              <div className="meta-label">Live Website</div>
              <div className="meta-value">
                <a href={data.liveUrl} target="_blank" rel="noopener noreferrer">{data.liveUrl.replace("https://", "")}</a>
              </div>
            </div>
          </div>

          <h2>Project Context</h2>
          <p>{data.context}</p>

          <h2 className="mt-6">Audience &amp; Search Intent</h2>
          <p>{data.audience}</p>
          <p>{data.intent}</p>
        </div>
      </section>

      <section className="case-section case-section-mist">
        <div className="container">
          <h2>Information Architecture</h2>
          <p className="muted mb-5">How the website is structured around what visitors search for.</p>
          <div className="ia-diagram">
            {data.iaItems.map((item, i) => (
              <ul className="ia-tree" key={i} style={{ marginBottom: i < data.iaItems.length - 1 ? "var(--s-4)" : 0 }}>
                <li className="ia-parent">{item.parent}</li>
                {item.children.map((child, j) => (
                  <li key={j} className="ia-child">{child}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>SEO Considerations</h2>
              <ul className="feature-list">
                {data.seoConsiderations.map((item, i) => (
                  <FeatureItem key={i}>{item}</FeatureItem>
                ))}
              </ul>
            </div>
            <div>
              <h2>Conversion Strategy</h2>
              <p>{data.conversionStrategy}</p>
              <h3 className="mt-5" style={{ fontSize: "1.1rem" }}>Important Page Types</h3>
              <ul className="feature-list">
                {data.pageTypes.map((item, i) => (
                  <FeatureItem key={i}>{item}</FeatureItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="case-section case-section-mist">
        <div className="container">
          <h2>What This Project Demonstrates</h2>
          <div className="grid grid-2">
            {data.demonstrates.map((item, i) => (
              <div key={i} className="card">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Relevant Services</span>
            <h2>How this connects to what we do.</h2>
          </div>
          <div className="grid grid-3">
            <Link to="/web-design-singapore/" className="card card-hover">
              <h3>Web Design &rarr;</h3>
              <p className="muted">How we structure websites around search intent.</p>
            </Link>
            <Link to="/seo/" className="card card-hover">
              <h3>SEO Services &rarr;</h3>
              <p className="muted">How we grow visibility over time.</p>
            </Link>
            <Link to="/website-maintenance/" className="card card-hover">
              <h3>Maintenance &rarr;</h3>
              <p className="muted">How we keep websites online and secure.</p>
            </Link>
          </div>
        </div>
      </section>

      <CtaBlock
        title="Want a website like this?"
        text="Let's discuss how we can structure a website around what your customers search for."
        buttonText="Discuss Your Project"
        waUrl={WA.work}
        secondaryLink={{ to: "/", label: "See More Work" }}
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
