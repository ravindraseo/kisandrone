import type { CategoryId, KeywordPage } from "../types";
import { buyingPages } from "./buying";
import { cropPages } from "./crops";
import { mainPages } from "./main";
import { productPages } from "./products";
import { schemePages } from "./schemes";
import { sprayingCostPages } from "./spraying-cost";

export const keywordPages: KeywordPage[] = [...mainPages, ...productPages, ...sprayingCostPages, ...buyingPages, ...schemePages, ...cropPages];

/** Flat URL: every keyword page lives at /<slug>/ (no category prefix). */
export function pagePath(p: Pick<KeywordPage, "slug">) {
  return `/${p.slug}/`;
}

export function getKeywordPageBySlug(slug: string) {
  return keywordPages.find((p) => p.slug === slug);
}

export function pagesInCategory(id: CategoryId) {
  return keywordPages.filter((p) => p.category === id);
}

export function getKeywordPage(category: string, slug: string) {
  return keywordPages.find((p) => p.category === category && p.slug === slug);
}

/** Path → label lookup, used to render "related" links with proper anchor text. */
export function labelForPath(path: string): string | undefined {
  const page = keywordPages.find((p) => pagePath(p) === path);
  return page?.navLabel;
}

// Dev-time safety: slugs must be unique within a category.
if (process.env.NODE_ENV !== "production") {
  const seen = new Set<string>();
  for (const p of keywordPages) {
    const key = pagePath(p);
    if (seen.has(key)) throw new Error(`Duplicate keyword page: ${key}`);
    seen.add(key);
  }
}
