export const SITE = {
  name: "WebGrow SG",
  domain: "webgrowsg.com",
  url: "https://webgrowsg.com",
  whatsappNumber: "6593485255",
  whatsappDisplay: "+65 9348 5255",
  whatsappUrl: "https://wa.me/6593485255",
};

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general: waLink("Hi WebGrow SG, I'd like to discuss a website for my business."),
  website: waLink("Hi WebGrow SG, I'd like to discuss a website for my business."),
  seo: waLink("Hi WebGrow SG, I'd like to discuss SEO for my business."),
  localSeo: waLink("Hi WebGrow SG, I'd like to discuss local SEO for my business."),
  maintenance: waLink("Hi WebGrow SG, I'd like to discuss website maintenance."),
  pricing: waLink("Hi WebGrow SG, I'd like to discuss your pricing."),
  about: waLink("Hi WebGrow SG, I'd like to chat about working together."),
  work: waLink("Hi WebGrow SG, I'd like to discuss a project similar to your case studies."),
};
