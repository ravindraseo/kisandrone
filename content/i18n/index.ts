/**
 * Locale-aware content loader. English is the source of truth for structure;
 * Hindi/Marathi packs override only the translatable fields. Anything not yet
 * translated falls back to English (the build check in lib/routes.ts reports gaps).
 */
import type { Locale } from "@/lib/i18n/config";
import { articles as enArticles, type Article } from "../blog";
import { categories as enCategories } from "../categories";
import { homeFaqs, homeGuide, homeQuickAnswer, homeSeo } from "../home";
import { fieldPhotos, images as enImages, type SiteImage } from "../images";
import { keywordPages as enPages } from "../pages";
import type { Category, CategoryId, KeywordPage } from "../types";
import { aboutPage, blogPage, contactPage, type UtilityPage } from "../utility";
import { pack as hiPack } from "./hi";
import { pack as mrPack } from "./mr";
import type { PartialPack } from "./types";

const packs: Record<Locale, PartialPack> = { en: {}, hi: hiPack, mr: mrPack };

const memo = new Map<string, unknown>();
function once<T>(key: string, make: () => T): T {
  if (!memo.has(key)) memo.set(key, make());
  return memo.get(key) as T;
}

export function getKeywordPages(locale: Locale): KeywordPage[] {
  return once(`pages:${locale}`, () =>
    enPages.map((p) => {
      const t = packs[locale].pages?.[p.slug];
      if (!t) return p;
      const { ctaLabel, ...rest } = t;
      return { ...p, ...rest, cta: { ...p.cta, label: ctaLabel } };
    }),
  );
}

export function getCategories(locale: Locale): Category[] {
  return once(`cats:${locale}`, () =>
    enCategories.map((c) => {
      const t = packs[locale].categories?.[c.id];
      if (!t) return c;
      const { ctaLabel, ...rest } = t;
      return { ...c, ...rest, cta: { ...c.cta, label: ctaLabel } };
    }),
  );
}

export function getCategory(locale: Locale, id: CategoryId): Category {
  const c = getCategories(locale).find((x) => x.id === id);
  if (!c) throw new Error(`Unknown category: ${id}`);
  return c;
}

export function pagesInCategory(locale: Locale, id: CategoryId) {
  return getKeywordPages(locale).filter((p) => p.category === id);
}

export function getArticles(locale: Locale): Article[] {
  return once(`articles:${locale}`, () =>
    enArticles.map((a) => {
      const t = packs[locale].articles?.[a.slug];
      if (!t) return a;
      const { relatedLabels, ...rest } = t;
      return { ...a, ...rest, related: a.related.map((r, i) => ({ ...r, label: relatedLabels[i] ?? r.label })) };
    }),
  );
}

export function getHome(locale: Locale) {
  const t = packs[locale].home;
  return {
    seo: t?.seo ?? homeSeo,
    quickAnswer: t?.quickAnswer ?? homeQuickAnswer,
    guide: t?.guide ?? homeGuide,
    faqs: t?.faqs ?? homeFaqs,
  };
}

export function getUtility(locale: Locale): { about: UtilityPage; contact: UtilityPage; blog: UtilityPage } {
  const t = packs[locale].utility;
  return { about: t?.about ?? aboutPage, contact: t?.contact ?? contactPage, blog: t?.blog ?? blogPage };
}

/** Image with translated alt/label/text. */
export function localizeImage<T extends SiteImage>(locale: Locale, img: T): T {
  const t = packs[locale].images?.[img.src];
  return t ? { ...img, ...t } : img;
}

export function getLinkRules(locale: Locale) {
  return packs[locale].links;
}

/** Path → nav label in this locale (for "Also read" links). */
export function labelForPath(locale: Locale, path: string): string | undefined {
  return getKeywordPages(locale).find((p) => `/${p.slug}/` === path)?.navLabel ?? getCategories(locale).find((c) => c.path === path)?.navLabel;
}

/** Which translations are missing (used by the build check). */
export function missingTranslations(locale: Locale): string[] {
  const p = packs[locale];
  const out: string[] = [];
  for (const x of enPages) if (!p.pages?.[x.slug]) out.push(`page ${x.slug}`);
  for (const x of enCategories) if (!p.categories?.[x.id]) out.push(`category ${x.id}`);
  for (const x of enArticles) if (!p.articles?.[x.slug]) out.push(`article ${x.slug}`);
  if (!p.home) out.push("home");
  if (!p.utility?.about) out.push("about");
  if (!p.utility?.contact) out.push("contact");
  if (!p.utility?.blog) out.push("blog");
  if (!p.links) out.push("links");
  for (const img of [...Object.values(enImages), ...fieldPhotos]) if (!p.images?.[img.src]) out.push(`image ${img.src}`);
  return out;
}
