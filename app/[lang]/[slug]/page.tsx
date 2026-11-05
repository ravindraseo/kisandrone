import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView, articleMetadata } from "@/components/ArticleView";
import { CategoryLandingView } from "@/components/CategoryLandingView";
import { KeywordPageView } from "@/components/KeywordPageView";
import { pagePath } from "@/content/pages";
import { isLocale } from "@/lib/i18n/config";
import { setRequestLocale } from "@/lib/i18n/server";
import { flatRoutes, resolveSlug } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

/**
 * Single flat route: /<slug>/ (English) and /hi/<slug>/, /mr/<slug>/ for
 * category landing pages, keyword pages and blog articles (see lib/routes.ts).
 */
type Props = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return flatRoutes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const r = resolveSlug(slug, lang);
  if (!r) return {};
  switch (r.kind) {
    case "category":
      return buildMetadata(lang, r.category.seo, r.category.path);
    case "keyword":
      return buildMetadata(lang, r.page.seo, pagePath(r.page));
    case "article":
      return articleMetadata(lang, r.article);
  }
}

export default async function FlatPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  setRequestLocale(lang);
  const r = resolveSlug(slug, lang);
  if (!r) notFound();
  switch (r.kind) {
    case "category":
      return <CategoryLandingView category={r.category} />;
    case "keyword":
      return <KeywordPageView page={r.page} />;
    case "article":
      return <ArticleView a={r.article} />;
  }
}
