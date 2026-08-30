import { SITE } from "./site";

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  description:
    "SEO-first websites for Singapore businesses. Professional websites designed for customers and structured for Google.",
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: `+${SITE.whatsappNumber}`,
    availableLanguage: ["English"],
  },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: { "@type": "Country", name: "Singapore" },
    url: `${SITE.url}${opts.path}`,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}
