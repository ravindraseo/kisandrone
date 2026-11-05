import type { MetadataRoute } from "next";
import { articles } from "@/content/blog";
import { categories } from "@/content/categories";
import { keywordPages, pagePath } from "@/content/pages";
import { htmlLang, localizePath, locales } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/seo";

/** Every public page in every language, each with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly"; modified?: string }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    ...categories.map((c) => ({ path: c.path, priority: 0.9, freq: "monthly" as const })),
    ...keywordPages.map((p) => ({ path: pagePath(p), priority: 0.8, freq: "monthly" as const })),
    { path: "/blog/", priority: 0.6, freq: "weekly" },
    ...articles.map((a) => ({ path: `/${a.slug}/`, priority: 0.5, freq: "yearly" as const, modified: a.updated ?? a.published })),
    { path: "/about/", priority: 0.4, freq: "yearly" },
    { path: "/contact/", priority: 0.7, freq: "yearly" },
  ];

  return pages.flatMap((p) => {
    const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], absoluteUrl(localizePath(l, p.path))]));
    return locales.map((l) => ({
      url: absoluteUrl(localizePath(l, p.path)),
      changeFrequency: p.freq,
      priority: p.priority,
      ...(p.modified ? { lastModified: new Date(p.modified) } : {}),
      alternates: { languages },
    }));
  });
}
