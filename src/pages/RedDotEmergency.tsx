import { CaseStudyLayout, type CaseStudyData } from "../components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "reddot-emergency",
  path: "/work/reddot-emergency/",
  name: "RedDot Emergency",
  category: "Local Lead Generation Website",
  liveUrl: "https://reddotemergency.com/",
  title: "RedDot Emergency — Local Lead Generation Website Case Study",
  metaDescription: "How we structured RedDot Emergency's website around individual customer problems and direct WhatsApp conversion. A local lead generation website case study by WebGrow SG.",
  h1: "Structuring a local service website around individual customer problems.",
  lead: "RedDot Emergency is a local emergency services website built around the specific problems customers search for — with direct conversion paths to WhatsApp enquiries.",
  context:
    "RedDot Emergency serves customers who need urgent help. When someone has an emergency — a lockout, a leak, a power issue — they don't browse. They search for a specific problem and they want to contact someone immediately. The website needed to match that urgency with clear, direct paths from search to enquiry.",
  audience:
    "People in Singapore experiencing an urgent problem right now. They're searching on their phones, they're stressed, and they need to find and contact a service provider within minutes.",
  intent:
    "The search intent is highly specific and action-oriented. Someone searching for a particular emergency doesn't want to read a general homepage — they want to see that you handle their specific problem, and they want a way to reach you immediately.",
  iaItems: [
    {
      parent: "Home",
      children: ["Clear value proposition", "Direct WhatsApp CTA", "Key service links"],
    },
    {
      parent: "Service Pages",
      children: ["Lockout services", "Leak and plumbing", "Electrical issues", "Each addressing a specific emergency"],
    },
    {
      parent: "Conversion",
      children: ["WhatsApp button on every page", "Phone number visible", "Minimal steps to contact"],
    },
  ],
  seoConsiderations: [
    "Each service page targets a specific emergency search",
    "Clear page titles and metadata matching what people search for in an emergency",
    "Mobile-first design because most emergency searches happen on phones",
    "Fast-loading pages because visitors in an emergency won't wait",
    "Local relevance signals for Singapore-based searches",
  ],
  conversionStrategy:
    "Every page on the website is designed to get the visitor to contact the business as quickly as possible. The WhatsApp button is prominent on every page. There's no contact form to fill out — just a direct message. The design removes friction because in an emergency, every second of delay is a lost customer.",
  pageTypes: [
    "Problem-specific service pages",
    "Direct WhatsApp conversion pages",
    "Mobile-optimised emergency contact",
  ],
  demonstrates: [
    "How structuring a website around individual customer problems — rather than a generic services page — matches real search intent for emergency services.",
    "How direct WhatsApp conversion removes friction for mobile visitors who need to contact a business immediately.",
    "How a local service website can be both search-friendly and conversion-focused at the same time.",
  ],
  waMessage: "Hi WebGrow SG, I'd like to discuss a project similar to your RedDot Emergency case study.",
};

export function RedDotEmergency() {
  return <CaseStudyLayout data={data} />;
}
