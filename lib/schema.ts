/**
 * JSON-LD structured data helpers.
 *
 * Only verified facts go into schema: name, URL, logo and phone number.
 * No ratings, reviews, prices, addresses or certifications are emitted.
 * LocalBusiness is emitted only after a real address is filled in lib/site.ts.
 */
import type { Faq } from "@/content/types";
import { absoluteUrl as rootUrl } from "./seo";
import { htmlLang, localizePath, type Locale } from "./i18n/config";
import { getLocale } from "./i18n/server";

/** Absolute URL of a page in the current request language. */
const absoluteUrl = (path: string) => rootUrl(localizePath(getLocale(), path));
const lang = () => htmlLang[getLocale()];
import { isPlaceholder, siteConfig } from "./site";
import { editorial } from "@/content/editorial";

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema() {
  const address = siteConfig.contact.address;
  const hasAddress = !isPlaceholder(address);
  const base = {
    "@id": ORG_ID,
    name: siteConfig.name,
    url: rootUrl("/"),
    // Files must not get the trailing slash that page URLs get.
    logo: `${siteConfig.url}/logo.svg`,
    telephone: `+91-${siteConfig.contact.phone}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91-${siteConfig.contact.phone}`,
      contactType: "customer service",
      availableLanguage: ["en", "hi"],
    },
    email: isPlaceholder(siteConfig.contact.email) ? undefined : siteConfig.contact.email,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
  // With a verified address, describe the business as a LocalBusiness too.
  return hasAddress
    ? {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        ...base,
        image: `${siteConfig.url}/logo.svg`,
        address: { "@type": "PostalAddress", ...siteConfig.contact.postalAddress },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: siteConfig.contact.openingHours.days,
          opens: siteConfig.contact.openingHours.opens,
          closes: siteConfig.contact.openingHours.closes,
        },
      }
    : { "@context": "https://schema.org", "@type": "Organization", ...base };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.name,
    url: rootUrl(localizePath(locale, "/")),
    inLanguage: htmlLang[locale],
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** FAQPage — call only where the same FAQs are visible on the page. */
export function faqSchema(faqs: Faq[]) {
  // Skip answers that still contain [placeholders].
  const usable = faqs.filter((f) => !/\[[^\]]+\]/.test(f.a));
  if (usable.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: usable.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: absoluteUrl(opts.path),
    provider: { "@id": ORG_ID },
    // areaServed is intentionally omitted until service areas are verified.
  };
}

/**
 * WebPage with E-E-A-T and answer-engine signals: author/publisher, last
 * reviewed date, primary image, keywords and a speakable quick answer.
 */
export function webPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  modified?: string;
  image?: string;
  keywords?: readonly string[];
  speakable?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    name: opts.name,
    headline: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    inLanguage: lang(),
    isPartOf: { "@id": SITE_ID },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(opts.modified ? { dateModified: opts.modified, lastReviewed: opts.modified } : {}),
    reviewedBy: { "@type": "Person", ...editorial.reviewerPerson, worksFor: { "@id": ORG_ID } },
    ...(opts.image ? { primaryImageOfPage: { "@type": "ImageObject", url: `${siteConfig.url}${opts.image}` } } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(", ") } : {}),
    ...(opts.speakable
      ? { speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".quick-answer-text"] } }
      : {}),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  published: string;
  modified: string;
  image?: string;
  keywords?: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.published,
    dateModified: opts.modified,
    inLanguage: lang(),
    mainEntityOfPage: absoluteUrl(opts.path),
    ...(opts.image ? { image: `${siteConfig.url}${opts.image}` } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(", ") } : {}),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".quick-answer-text"] },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
