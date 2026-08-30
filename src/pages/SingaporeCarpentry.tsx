import { CaseStudyLayout, type CaseStudyData } from "../components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "singapore-carpentry",
  path: "/work/singapore-carpentry/",
  name: "Singapore Carpentry",
  category: "Multi-Service SEO Website",
  liveUrl: "https://singaporecarpentry.com/",
  title: "Singapore Carpentry — Multi-Service SEO Website Case Study",
  metaDescription: "How we built Singapore Carpentry with dedicated service architecture supported by relevant informational content. A multi-service SEO website case study by WebGrow SG.",
  h1: "Dedicated service architecture supported by relevant informational content.",
  lead: "Singapore Carpentry is a multi-service carpentry business website where each service has its own dedicated page, supported by helpful content that addresses customer questions.",
  context:
    "Singapore Carpentry offers multiple carpentry services — custom furniture, repairs, cabinet work, and more. A single services page listing everything would miss the opportunity to rank for individual service searches. Instead, the website gives each service its own page, supported by informational content that helps customers understand their options.",
  audience:
    "Singapore homeowners, property owners and businesses looking for carpentry work. They range from people who know exactly what they want (a custom wardrobe) to people exploring options (repair vs. replace a cabinet).",
  intent:
    "The search intent ranges from specific service searches (custom carpentry, cabinet repair) to broader exploratory searches about carpentry options. The website needs to serve both — dedicated service pages for specific intent, and informational content for exploratory intent that leads toward a service.",
  iaItems: [
    {
      parent: "Home",
      children: ["Overview of services", "Clear navigation to each service", "Trust and credibility signals"],
    },
    {
      parent: "Service Pages",
      children: ["Custom furniture", "Carpentry repair", "Cabinet making", "Each with dedicated SEO and conversion focus"],
    },
    {
      parent: "Informational Content",
      children: ["Helpful guides and articles", "Answers to common carpentry questions", "Supporting content that builds topical relevance"],
    },
    {
      parent: "Conversion",
      children: ["WhatsApp enquiry on every page", "Service-specific contact prompts"],
    },
  ],
  seoConsiderations: [
    "Each service page targets its own relevant search terms",
    "Informational content supports topical relevance and captures exploratory searches",
    "Internal links connect related services and helpful content",
    "Service pages are structured to demonstrate expertise and relevance",
    "Clear URL structure reflecting the service hierarchy",
  ],
  conversionStrategy:
    "Each service page includes a WhatsApp enquiry prompt specific to that service. A visitor reading about custom furniture sees a prompt to discuss custom furniture — not a generic contact button. Informational content links to relevant services, guiding visitors from exploration toward enquiry.",
  pageTypes: [
    "Dedicated service pages for each carpentry service",
    "Informational content addressing customer questions",
    "Service-specific conversion prompts",
  ],
  demonstrates: [
    "How a multi-service business benefits from dedicated pages for each service rather than cramming everything onto one page.",
    "How informational content supports — not replaces — service pages, building topical relevance while guiding visitors toward enquiry.",
    "How internal linking between services and content creates a connected search ecosystem rather than isolated pages.",
  ],
  waMessage: "Hi WebGrow SG, I'd like to discuss a project similar to your Singapore Carpentry case study.",
};

export function SingaporeCarpentry() {
  return <CaseStudyLayout data={data} />;
}
