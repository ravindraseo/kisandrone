/**
 * Shapes of translated content. Each language folder (content/i18n/hi, /mr)
 * provides only the translatable fields, keyed by slug/id. Structural fields
 * (slug, category, related links, schema type, CTA topic, images) always come
 * from the English source in content/, so pages stay identical in structure.
 */
import type { Article, ArticleBlock } from "../blog";
import type { ContentSection, Faq, PageSeo } from "../types";
import type { UtilityPage } from "../utility";

export type PageTr = {
  navLabel: string;
  summary: string;
  h1: string;
  seo: PageSeo;
  intro: string;
  quickAnswer: string;
  takeaways: string[];
  sections: ContentSection[];
  faqs: Faq[];
  ctaLabel: string;
};

export type CategoryTr = Omit<PageTr, "summary">;

export type ArticleTr = Pick<Article, "title" | "seoTitle" | "summary" | "quickAnswer" | "category" | "keywords" | "faqs"> & {
  /** Labels for article.related, same order as English */
  relatedLabels: string[];
  body: ArticleBlock[];
};

export type HomeTr = {
  seo: PageSeo;
  quickAnswer: string;
  guide: ContentSection[];
  faqs: Faq[];
};

export type ImageTr = { alt: string; label: string; text: string };

export type ContentPack = {
  pages: Record<string, PageTr>;
  categories: Record<string, CategoryTr>;
  articles: Record<string, ArticleTr>;
  home: HomeTr;
  utility: { about: UtilityPage; contact: UtilityPage; blog: UtilityPage };
  /** Keyed by image src */
  images: Record<string, ImageTr>;
  /** Contextual linking phrases for lib/autolink.ts */
  links: { internal: [string, string][]; external: [string, string][] };
};

export type PartialPack = { [K in keyof ContentPack]?: Partial<ContentPack[K]> };
