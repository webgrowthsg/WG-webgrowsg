import { CaseStudyLayout, type CaseStudyData } from "../components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "where-is-the-next-spot",
  path: "/work/where-is-the-next-spot/",
  name: "Where Is The Next Spot",
  category: "Content & Discovery Website",
  liveUrl: "https://whereisthenextspot.com/",
  title: "Where Is The Next Spot — Content & Discovery Website Case Study",
  metaDescription: "How we designed information architecture around browsing, discovery and searchable content. A content and discovery website case study by WebGrow SG.",
  h1: "Information architecture designed around browsing, discovery and searchable content.",
  lead: "Where Is The Next Spot is a content-driven website where the structure itself helps visitors discover and explore information through natural browsing patterns.",
  context:
    "Where Is The Next Spot is a content and discovery website. Unlike a service business where the goal is a direct enquiry, the goal here is to help visitors browse, discover and find content that interests them. The website's architecture needs to support exploration and serendipitous discovery, not just direct conversion.",
  audience:
    "Visitors who are browsing and exploring — they may not know exactly what they're looking for, but they're drawn in by interesting content and guided toward more of it.",
  intent:
    "The search intent is exploratory and discovery-oriented. Visitors arrive through search or social, find something interesting, and then browse related content. The website needs to make discovery feel natural — showing visitors what else they might like based on what they're already viewing.",
  iaItems: [
    {
      parent: "Home",
      children: ["Featured content", "Categories and topics", "Search and browse entry points"],
    },
    {
      parent: "Content Pages",
      children: ["Individual content entries", "Related content connections", "Tags and categories for discovery"],
    },
    {
      parent: "Discovery",
      children: ["Related content suggestions", "Category browsing", "Search functionality"],
    },
    {
      parent: "Navigation",
      children: ["Clear paths between related content", "Browseable categories", "Search-friendly structure"],
    },
  ],
  seoConsiderations: [
    "Content is structured so search engines can understand topics and relationships",
    "Each content page targets relevant search terms while supporting broader discovery",
    "Internal linking connects related content, helping both visitors and search engines",
    "Categories and tags create logical groupings that build topical relevance",
    "Clean URLs and metadata for each content page",
  ],
  conversionStrategy:
    "For a content and discovery website, conversion isn't a single WhatsApp message — it's engagement. The strategy is to keep visitors exploring: showing related content, making it easy to browse by topic, and ensuring every page leads naturally to more content. The longer visitors stay and explore, the more valuable the website becomes.",
  pageTypes: [
    "Content pages designed for both search and browsing",
    "Category and topic pages for structured discovery",
    "Related content connections for serendipitous exploration",
  ],
  demonstrates: [
    "How information architecture can support browsing and discovery rather than just direct conversion — a different approach from service business websites.",
    "How internal linking and content relationships create a search ecosystem where every page supports the others.",
    "How a content-driven website can be structured for both search engines and human discovery at the same time.",
  ],
  waMessage: "Hi WebGrow SG, I'd like to discuss a project similar to your Where Is The Next Spot case study.",
};

export function WhereIsTheNextSpot() {
  return <CaseStudyLayout data={data} />;
}
