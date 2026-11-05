import type { Metadata } from "next";
import { LocaleLink as Link } from "./LocaleLink";
import { getArticles, localizeImage } from "@/content/i18n";
import { getLocale, getT } from "@/lib/i18n/server";
import type { Locale } from "@/lib/i18n/config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, Notice } from "@/components/Card";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import type { Article, ArticleBlock } from "@/content/blog";
import { formatDate } from "@/lib/format";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/content/images";
import { linkArticle } from "@/lib/autolink";
import { RichText } from "./RichText";
import { EditorialBox, InlineCta, InlineFigure, QuickAnswerBox } from "./Guide";

/** SEO metadata for a blog article (flat URL: /<slug>/). */
export function articleMetadata(locale: Locale, a: Article): Metadata {
  return buildMetadata(locale, { title: a.seoTitle ?? a.title, description: a.summary, keywords: a.keywords }, `/${a.slug}/`, {
    type: "article",
    publishedTime: a.published,
    modifiedTime: a.updated ?? a.published,
  });
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>
              <RichText text={i} />
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <div className="my-6">
          <Notice>{block.text}</Notice>
        </div>
      );
    default:
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
  }
}

export function ArticleView({ a }: { a: Article }) {
  const locale = getLocale();
  const t = getT();
  const path = `/${a.slug}/`;
  const articles = getArticles(locale);
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const index = articles.findIndex((x) => x.slug === a.slug);
  const image = localizeImage(locale, index % 2 === 0 ? images.sprayHexa : images.sprayQuad);
  const waMessage = t.site.whatsappArticle(a.title);
  // Insert the photo after the first third of the article and a CTA after two thirds (at H2 boundaries).
  const h2s = a.body.map((b, i) => (b.type === "h2" ? i : -1)).filter((i) => i > 0);
  const figureAt = h2s[Math.floor(h2s.length / 3)] ?? -1;
  const ctaAt = h2s[Math.floor((h2s.length * 2) / 3)] ?? -1;

  return (
    <>
      <article>
        <header className="bg-cream-100">
          <div className="container-site max-w-3xl py-10 sm:py-14">
            <Breadcrumbs
              items={[
                { name: t.common.home, path: "/" },
                { name: t.article.blog, path: "/blog/" },
                { name: a.title, path },
              ]}
            />
            <p className="eyebrow mt-6">{a.category}</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-[2.6rem] sm:leading-tight">{a.title}</h1>
            <p className="mt-4 text-lg text-muted">{a.summary}</p>
            <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
              <span>
                {t.common.published} <time dateTime={a.published}>{formatDate(a.published, locale)}</time>
              </span>
              {a.updated && (
                <span>
                  {t.common.updated} <time dateTime={a.updated}>{formatDate(a.updated, locale)}</time>
                </span>
              )}
              <span>{t.common.minRead(a.readingMinutes)}</span>
            </p>
          </div>
        </header>

        <div className="container-site max-w-3xl py-10">
          <QuickAnswerBox answer={a.quickAnswer} takeaways={[]} />

          <div className="prose-site mt-8">
            {linkArticle(a.body, path, locale).map((b, i) => (
              <div key={i} className="contents">
                {i === figureAt && (
                  <div className="not-prose my-8">
                    <InlineFigure image={image} context={a.category} />
                  </div>
                )}
                {i === ctaAt && (
                  <div className="not-prose my-8">
                    <InlineCta label={t.common.callNow} topic="other" waMessage={waMessage} />
                  </div>
                )}
                <Block block={b} />
              </div>
            ))}
          </div>

          {a.faqs.length > 0 && (
            <section aria-labelledby="article-faq-title" className="mt-12">
              <h2 id="article-faq-title" className="mb-5 text-2xl font-bold">
                {t.common.faqTitle}
              </h2>
              <FaqList faqs={a.faqs} />
            </section>
          )}

          <EditorialBox />

          {a.related.length > 0 && (
            <nav aria-label={t.article.relatedPages} className="mt-10 rounded-2xl bg-forest-50 p-6">
              <p className="font-bold text-forest-950">{t.article.readNext}</p>
              <ul className="mt-3 space-y-2">
                {a.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="inline-flex items-center gap-1.5 font-semibold text-forest-700 underline underline-offset-2">
                      {r.label} <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <JsonLd
          data={articleSchema({
            headline: a.title,
            description: a.summary,
            path,
            published: a.published,
            modified: a.updated ?? a.published,
            image: image.src,
            keywords: a.keywords,
          })}
        />
      </article>

      <section aria-labelledby="more-title" className="bg-white py-12">
        <div className="container-site max-w-3xl">
          <h2 id="more-title" className="text-2xl font-bold">
            {t.article.moreArticles}
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {more.map((m) => (
              <li key={m.slug}>
                <Card className="h-full">
                  <p className="eyebrow">{m.category}</p>
                  <h3 className="mt-1 font-bold">
                    <Link href={`/${m.slug}/`} className="hover:text-forest-700">
                      {m.title}
                    </Link>
                  </h3>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand whatsappMessage={waMessage} />
    </>
  );
}
