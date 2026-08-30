import { Head } from "vite-react-ssg";
import { SITE } from "../lib/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
}

export function Seo({
  title,
  description,
  path,
  image = "/og-default.svg",
  type = "website",
  jsonLd,
}: SeoProps) {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes("WebGrow SG") ? title : `${title} | WebGrow SG`;
  const ogImage = image.startsWith("http") ? image : `${SITE.url}${image}`;

  return (
    <Head>
      <html lang="en-SG" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_SG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Head>
  );
}
