/**
 * Content types shared by all SEO pages.
 * Every page keeps its title, description, keywords, content and FAQs in these structures.
 */

export type CategoryId =
  | "kisan-drone"
  | "products-services"
  | "buying-guide"
  | "schemes-training"
  | "crops";

export type Faq = { q: string; a: string };

/** H3 sub-section inside an H2 section */
export type SubSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

/** Simple comparison table (helps readers and AI answer engines) */
export type ContentTable = {
  caption: string;
  head: string[];
  rows: string[][];
};

export type ContentSection = {
  /** H2 */
  heading: string;
  /** Paragraphs */
  body?: string[];
  /** Bullet list */
  list?: string[];
  /** H3 sub-sections */
  subsections?: SubSection[];
  table?: ContentTable;
  /** Highlighted note / disclaimer */
  note?: string;
};

/**
 * Answer-engine block shown at the top of the article: a direct 40–70 word
 * answer to the main query plus 3–5 key takeaways.
 */
export type QuickAnswer = {
  quickAnswer: string;
  takeaways: string[];
};

/** Contact form "Topic" values. Also used as ?topic= on /contact/. */
export type Topic = "price" | "service" | "demo" | "rental" | "training" | "scheme" | "parts" | "other";

export type PageSeo = {
  /** <title> — keep to about 50–60 characters */
  title: string;
  /** Meta description — about 150–160 characters */
  description: string;
  /** The first keyword is primary, the rest are related keywords */
  keywords: string[];
};

export type KeywordPage = QuickAnswer & {
  slug: string;
  category: CategoryId;
  /** Short name used in menus and cards */
  navLabel: string;
  /** One-line summary shown on cards */
  summary: string;
  h1: string;
  seo: PageSeo;
  intro: string;
  sections: ContentSection[];
  faqs: Faq[];
  cta: { topic: Topic; label: string };
  /** Extra internal links (paths) */
  related?: string[];
  /** JSON-LD type for the page */
  schema: "Service" | "WebPage";
  /** Scheme pages show "Information last reviewed" */
  showReviewDate?: boolean;
};

export type Category = QuickAnswer & {
  id: CategoryId;
  path: string;
  /** Header/menu label */
  navLabel: string;
  /** Internal keyword-category name (English) */
  keywordGroup: string;
  h1: string;
  seo: PageSeo;
  intro: string;
  sections: ContentSection[];
  faqs: Faq[];
  cta: { topic: Topic; label: string };
};
