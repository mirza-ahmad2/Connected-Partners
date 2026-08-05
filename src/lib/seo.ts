import { SITE_NAME, SITE_URL, SITE_KEYWORDS } from "./site-config";

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
}

export function buildPageHead(seo: PageSeo) {
  const canonical = `${SITE_URL}${seo.path === "/" ? "" : seo.path}`;
  const ogImage = seo.ogImage ?? `${SITE_URL}/og-image.png`;
  const keywords = seo.keywords ?? SITE_KEYWORDS;

  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: `${SITE_NAME} logo` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    areaServed: ["United States", "United Arab Emirates", "India"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };
}
