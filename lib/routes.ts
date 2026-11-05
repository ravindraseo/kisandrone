/**
 * Flat URL map. Every page URL is just its own name: /<slug>/.
 *
 * One dynamic route (app/[slug]/page.tsx) serves category landing pages,
 * keyword pages and blog articles. Slugs must be
 * unique across all of them, and must not clash with the fixed pages below.
 */
import { articles } from "@/content/blog";
import { categories } from "@/content/categories";
import { homeFaqs, homeGuide, homeQuickAnswer, homeSeo } from "@/content/home";
import type { ContentSection, Faq } from "@/content/types";
import { getArticles, getCategories, getKeywordPages, missingTranslations } from "@/content/i18n";
import type { Locale } from "@/lib/i18n/config";
import { keywordPages } from "@/content/pages";
import { aboutPage, blogPage, contactPage } from "@/content/utility";

/** Pages with their own folder in app/ (they win over the dynamic route). */
const FIXED = ["about", "contact", "blog"];

export type FlatRoute =
  | { kind: "category"; slug: string; category: (typeof categories)[number] }
  | { kind: "keyword"; slug: string; page: (typeof keywordPages)[number] }
  | { kind: "article"; slug: string; article: (typeof articles)[number] };

function buildRoutes(): FlatRoute[] {
  return [
    ...categories.map((c) => ({ kind: "category" as const, slug: c.id, category: c })),
    ...keywordPages.map((p) => ({ kind: "keyword" as const, slug: p.slug, page: p })),
    ...articles.map((a) => ({ kind: "article" as const, slug: a.slug, article: a })),
  ];
}

export const flatRoutes = buildRoutes();

// Fail the build if two pages would share a URL.
{
  const seen = new Set<string>(FIXED);
  for (const r of flatRoutes) {
    if (seen.has(r.slug)) throw new Error(`Duplicate URL slug "/${r.slug}/" — every page needs a unique slug.`);
    seen.add(r.slug);
  }
}

// Content rules (build fails if broken): every page needs ≥5 FAQs and a
// title, meta description and keywords.
{
  const MIN_FAQS = 5;
  const checks: { name: string; faqs: number; seo?: { title: string; description: string; keywords: readonly string[] } }[] = [
    { name: "/", faqs: homeFaqs.length, seo: homeSeo },
    ...categories.map((c) => ({ name: c.path, faqs: c.faqs.length, seo: c.seo })),
    ...keywordPages.map((p) => ({ name: `/${p.slug}/`, faqs: p.faqs.length, seo: p.seo })),
    ...articles.map((a) => ({
      name: `/${a.slug}/`,
      faqs: a.faqs.length,
      seo: { title: a.seoTitle ?? a.title, description: a.summary, keywords: a.keywords },
    })),
  ];
  const problems: string[] = [];
  for (const c of checks) {
    if (c.faqs < MIN_FAQS) problems.push(`${c.name}: ${c.faqs} FAQs (need ${MIN_FAQS})`);
    if (c.seo && (!c.seo.title.trim() || !c.seo.description.trim() || c.seo.keywords.length === 0))
      problems.push(`${c.name}: missing title, description or keywords`);
  }
  if (problems.length) throw new Error(`Content checks failed:\n${problems.join("\n")}`);
}

// Depth rule (build fails if broken): every ranking page needs at least
// MIN_WORDS words of its own content (intro, quick answer, sections, FAQs).
// Shared blocks (header, footer, CTA, "About this guide") are not counted.
export const MIN_WORDS = 900;

function words(...texts: (string | undefined)[]) {
  return texts.reduce((n, t) => n + (t ? t.split(/\s+/).filter(Boolean).length : 0), 0);
}

function sectionWords(sections: ContentSection[]) {
  return sections.reduce(
    (n, s) =>
      n +
      words(s.heading, s.note, ...(s.body ?? []), ...(s.list ?? [])) +
      (s.subsections ?? []).reduce((m, sub) => m + words(sub.heading, ...(sub.body ?? []), ...(sub.list ?? [])), 0) +
      (s.table ? words(s.table.caption, ...s.table.head, ...s.table.rows.flat()) : 0),
    0,
  );
}

const faqWords = (faqs: Faq[]) => faqs.reduce((n, f) => n + words(f.q, f.a), 0);

export function contentWordCounts() {
  return [
    { name: "/", count: words(homeQuickAnswer) + sectionWords(homeGuide) + faqWords(homeFaqs) },
    ...([
      ["/about/", aboutPage],
      ["/contact/", contactPage],
      ["/blog/", blogPage],
    ] as const).map(([name, p]) => ({
      name,
      count: words(p.quickAnswer, ...p.takeaways) + sectionWords(p.sections) + faqWords(p.faqs),
    })),
    ...categories.map((c) => ({
      name: c.path,
      count: words(c.intro, c.quickAnswer, ...c.takeaways) + sectionWords(c.sections) + faqWords(c.faqs),
    })),
    ...keywordPages.map((p) => ({
      name: `/${p.slug}/`,
      count: words(p.intro, p.quickAnswer, ...p.takeaways) + sectionWords(p.sections) + faqWords(p.faqs),
    })),
    ...articles.map((a) => ({
      name: `/${a.slug}/`,
      count:
        words(a.summary, a.quickAnswer) +
        a.body.reduce((n, b) => n + ("text" in b ? words(b.text) : words(...b.items)), 0) +
        faqWords(a.faqs),
    })),
  ];
}

{
  const thin = contentWordCounts().filter((c) => c.count < MIN_WORDS);
  if (thin.length)
    throw new Error(`Thin content (need ${MIN_WORDS}+ words):\n${thin.map((c) => `${c.name}: ${c.count}`).join("\n")}`);
}

// Every Hindi and Marathi page must be fully translated — no silent English fallback.
for (const locale of ["hi", "mr"] as const) {
  const missing = missingTranslations(locale);
  if (missing.length) throw new Error(`Missing ${locale} translations:\n${missing.join("\n")}`);
}

/** Resolve a slug to its content in the given language (structure is shared across languages). */
export function resolveSlug(slug: string, locale: Locale = "en"): FlatRoute | undefined {
  const r = flatRoutes.find((x) => x.slug === slug);
  if (!r || locale === "en") return r;
  switch (r.kind) {
    case "category":
      return { ...r, category: getCategories(locale).find((c) => c.id === r.category.id)! };
    case "keyword":
      return { ...r, page: getKeywordPages(locale).find((p) => p.slug === r.slug)! };
    case "article":
      return { ...r, article: getArticles(locale).find((a) => a.slug === r.slug)! };
  }
}
