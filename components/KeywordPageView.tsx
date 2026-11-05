import { getCategory, labelForPath, localizeImage, pagesInCategory } from "@/content/i18n";
import { pagePath } from "@/content/pages";
import { officialLinks, schemesReviewedOn } from "@/content/schemes-meta";
import { getLocale, getT } from "@/lib/i18n/server";
import { LocaleLink as Link } from "./LocaleLink";
import type { KeywordPage } from "@/content/types";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { isPlaceholder, siteConfig, whatsappLink } from "@/lib/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { Card } from "./Card";
import { ContentSections } from "./ContentSections";
import { CtaBand } from "./CtaBand";
import { FaqList } from "./FaqList";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { Placeholder } from "./Placeholder";
import { imageFor } from "@/content/images";
import { editorial } from "@/content/editorial";
import { linkSections } from "@/lib/autolink";
import { EditorialBox, InlineCta, InlineFigure, QuickAnswerBox } from "./Guide";
import { PageHeader } from "./Section";

/** Shared template for every keyword page (e.g. /drone-spraying-for-paddy/). */
export function KeywordPageView({ page }: { page: KeywordPage }) {
  const locale = getLocale();
  const t = getT();
  const category = getCategory(locale, page.category);
  const path = pagePath(page);
  const inCategory = pagesInCategory(locale, page.category);
  const siblings = inCategory.filter((p) => p.slug !== page.slug);
  const related = (page.related ?? [])
    .map((href) => ({ href, label: labelForPath(locale, href) ?? t.keyword.related[href] }))
    .filter((r) => r.label);
  const waMessage = t.site.whatsappAbout(page.navLabel);
  const index = inCategory.findIndex((p) => p.slug === page.slug);
  const heroImage = localizeImage(locale, imageFor(page.category, index + 1));
  const inlineImage = localizeImage(locale, imageFor(page.category, index));
  const mid = Math.max(1, Math.floor(page.sections.length / 2));

  return (
    <>
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            invert
            items={[
              { name: t.common.home, path: "/" },
              { name: category.navLabel, path: category.path },
              { name: page.navLabel, path },
            ]}
          />
        }
        title={page.h1}
        intro={page.intro}
        image={heroImage}
      >
        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron-500 px-6 py-3.5 font-bold text-forest-950 hover:bg-saffron-600 hover:text-white"
        >
          <Icon name="phone" className="h-5 w-5" />
          {page.cta.label}
        </a>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cream-50 px-6 py-3.5 font-bold text-forest-900 hover:bg-white"
        >
          <Icon name="whatsapp" className="h-5 w-5 text-whatsapp" />
          {t.common.askWhatsapp}<span className="sr-only"> {t.common.newWindow}</span>
        </a>
      </PageHeader>

      <div className="container-site grid gap-12 py-12 lg:grid-cols-[1fr_300px] lg:py-16">
        <article className="min-w-0">
          {page.showReviewDate && (
            <p className="mb-8 rounded-xl border border-saffron-500/40 bg-saffron-100 px-4 py-3 text-sm text-saffron-700">
              <strong>{t.keyword.reviewed}</strong> <Placeholder value={isPlaceholder(schemesReviewedOn) ? t.keyword.reviewDatePlaceholder : schemesReviewedOn} /> — {t.keyword.reviewedNote}
            </p>
          )}

          <QuickAnswerBox answer={page.quickAnswer} takeaways={page.takeaways} />

          <div className="mt-10">
            <ContentSections
              sections={linkSections(page.sections, path, locale)}
              slots={{
                0: <InlineFigure image={inlineImage} context={page.navLabel} />,
                [mid]: <InlineCta label={page.cta.label} topic={page.cta.topic} waMessage={waMessage} />,
              }}
            />
          </div>

          {page.showReviewDate && <OfficialLinks />}

          <section aria-labelledby="faq-title" className="mt-14">
            <h2 id="faq-title" className="mb-5 text-2xl font-bold">
              {t.common.faqTitle}
            </h2>
            <FaqList faqs={page.faqs} />
          </section>

          <EditorialBox />

          {related.length > 0 && (
            <section aria-labelledby="related-title" className="mt-12">
              <h2 id="related-title" className="text-xl font-bold">
                {t.common.alsoRead}
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="flex items-center justify-between gap-3 rounded-xl border border-forest-900/10 bg-white px-4 py-3 font-semibold text-forest-900 hover:border-forest-600"
                    >
                      {r.label}
                      <Icon name="arrowRight" className="h-4 w-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <aside aria-label={t.keyword.moreIn(category.navLabel)} className="lg:sticky lg:top-24 lg:self-start">
          <Card className="p-5">
            <h2 className="text-base font-bold">
              <Link href={category.path} className="hover:text-forest-700">
                {category.navLabel}
              </Link>
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link href={pagePath(s)} className="block rounded-lg px-2 py-1.5 text-ink hover:bg-cream-100 hover:text-forest-800">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>

      <CtaBand
        title={t.cta.pageTitle(page.navLabel)}
        text={t.cta.pageText}
        topic={page.cta.topic}
        whatsappMessage={waMessage}
      />

      <JsonLd
        data={webPageSchema({
          name: page.h1,
          description: page.seo.description,
          path,
          modified: editorial.updated,
          image: heroImage.src,
          keywords: page.seo.keywords,
          speakable: true,
        })}
      />
      {page.schema === "Service" && (
        <JsonLd
          data={serviceSchema({ name: page.h1, description: page.seo.description, path, serviceType: page.seo.keywords[0] })}
        />
      )}
    </>
  );
}

export function OfficialLinks() {
  const t = getT();
  return (
    <section aria-labelledby="official-title" className="mt-12">
      <h2 id="official-title" className="text-2xl font-bold">
        {t.keyword.officialSources}
      </h2>
      <p className="mt-2 text-muted">{t.keyword.officialNote}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {officialLinks.map((link, i) => {
          const l = { ...link, ...t.keyword.officialLinks[i] };
          return (
          <li key={link.label}>
            {l.url ? (
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-start justify-between gap-3 rounded-xl border border-forest-900/10 bg-white p-4 hover:border-forest-600"
              >
                <span>
                  <span className="font-semibold text-forest-900">{l.label}</span>
                  <span className="mt-1 block text-sm text-muted">{l.note}</span>
                </span>
                <Icon name="external" className="h-5 w-5 shrink-0 text-forest-600" />
                <span className="sr-only">{t.common.newWindow}</span>
              </a>
            ) : (
              <div className="h-full rounded-xl border border-dashed border-saffron-500/60 bg-white p-4">
                <Placeholder value={l.label} className="font-semibold" />
                <span className="mt-1 block text-sm text-muted">{l.note}</span>
              </div>
            )}
          </li>
          );
        })}
      </ul>
    </section>
  );
}
