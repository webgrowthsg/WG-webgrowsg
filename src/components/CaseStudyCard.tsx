import { Link } from "react-router-dom";

export interface CaseStudyInfo {
  slug: string;
  path: string;
  name: string;
  category: string;
  liveUrl: string;
  tagline: string;
  description: string;
  visual: "reddot" | "carpentry" | "discovery";
}

export const caseStudies: CaseStudyInfo[] = [
  {
    slug: "reddot-emergency",
    path: "/work/reddot-emergency/",
    name: "RedDot Emergency",
    category: "Local Lead Generation Website",
    liveUrl: "https://reddotemergency.com/",
    tagline: "Structuring a local service website around individual customer problems.",
    description:
      "A local emergency services website built around specific problems customers search for, with direct conversion paths to WhatsApp enquiries.",
    visual: "reddot",
  },
  {
    slug: "singapore-carpentry",
    path: "/work/singapore-carpentry/",
    name: "Singapore Carpentry",
    category: "Multi-Service SEO Website",
    liveUrl: "https://singaporecarpentry.com/",
    tagline: "Dedicated service architecture supported by relevant informational content.",
    description:
      "A carpentry business website with dedicated pages for each service area, supported by helpful content that addresses customer questions.",
    visual: "carpentry",
  },
  {
    slug: "where-is-the-next-spot",
    path: "/work/where-is-the-next-spot/",
    name: "Where Is The Next Spot",
    category: "Content & Discovery Website",
    liveUrl: "https://whereisthenextspot.com/",
    tagline: "Information architecture designed around browsing, discovery and searchable content.",
    description:
      "A content-driven website where the structure itself helps visitors discover and explore information through natural browsing patterns.",
    visual: "discovery",
  },
];

export function CaseStudyCard({ study }: { study: CaseStudyInfo }) {
  return (
    <Link to={study.path} className="case-card card card-hover">
      <div className={`case-visual case-visual-${study.visual}`}>
        <CaseVisual variant={study.visual} />
      </div>
      <div className="case-body">
        <span className="pill pill-teal">{study.category}</span>
        <h3>{study.name}</h3>
        <p className="muted">{study.tagline}</p>
        <span className="case-link">View case study &rarr;</span>
      </div>
    </Link>
  );
}

function CaseVisual({ variant }: { variant: string }) {
  if (variant === "reddot") {
    return (
      <div className="visual-nodes">
        <div className="node node-center">Emergency</div>
        <div className="node node-s1">Lockout</div>
        <div className="node node-s2">Leak</div>
        <div className="node node-s3">Power</div>
        <div className="node node-cta">WhatsApp</div>
      </div>
    );
  }
  if (variant === "carpentry") {
    return (
      <div className="visual-nodes">
        <div className="node node-center">Carpentry</div>
        <div className="node node-s1">Custom</div>
        <div className="node node-s2">Repair</div>
        <div className="node node-s3">Cabinet</div>
        <div className="node node-info">Guides</div>
      </div>
    );
  }
  return (
    <div className="visual-nodes">
      <div className="node node-center">Discover</div>
      <div className="node node-s1">Browse</div>
      <div className="node node-s2">Search</div>
      <div className="node node-s3">Explore</div>
      <div className="node node-info">Find</div>
    </div>
  );
}
