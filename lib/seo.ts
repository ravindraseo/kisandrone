import type { Metadata } from "next";
import type { PageSeo } from "@/content/types";
import { htmlLang, localizePath, locales, ogLocale, type Locale } from "./i18n/config";
import { siteConfig } from "./site";

/** Ensure a path starts and ends with "/" (site uses trailingSlash: true). */
export function normalizePath(path: string) {
  if (path === "" || path === "/") return "/";
  let p = path.startsWith("/") ? path : `/${path}`;
  if (!p.endsWith("/")) p += "/";
  return p;
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${normalizePath(path)}`;
}

/**
 * Shared social image (app/opengraph-image.tsx). Page-level openGraph objects
 * replace the inherited one, so every page sets it explicitly.
 */
const OG_IMAGE = {
  url: "/opengraph-image/",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — agriculture drone services`,
};

/**
 * Per-page metadata: unique title, description, canonical URL, Open Graph and
 * Twitter card. Titles are used as-is (no template suffix) so each stays
 * within ~60 characters; the brand is appended only if missing.
 */
export function buildMetadata(
  locale: Locale,
  seo: PageSeo,
  path: string,
  opts: { type?: "website" | "article"; publishedTime?: string; modifiedTime?: string; noindex?: boolean } = {},
): Metadata {
  const url = localizePath(locale, normalizePath(path));
  // hreflang: every page exists in all languages at the same slug.
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [htmlLang[l], localizePath(l, normalizePath(path))]),
  );
  languages["x-default"] = normalizePath(path);
  // Append the brand only when the title stays short enough to avoid truncation in results.
  const branded = `${seo.title} | ${siteConfig.name}`;
  const fullTitle = seo.title.includes(siteConfig.name) || branded.length > 65 ? seo.title : branded;
  return {
    title: { absolute: fullTitle },
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      title: fullTitle,
      description: seo.description,
      url,
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: opts.type ?? "website",
      images: [OG_IMAGE],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: seo.description,
      images: [OG_IMAGE.url],
    },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
