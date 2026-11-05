import { localizeImage, pagesInCategory } from "@/content/i18n";
import { pagePath } from "@/content/pages";
import { getLocale, getT } from "@/lib/i18n/server";
import { LocaleLink as Link } from "./LocaleLink";
import { schemesReviewedOn } from "@/content/schemes-meta";
import type { Category } from "@/content/types";
import { webPageSchema } from "@/lib/schema";
import { isPlaceholder, siteConfig, whatsappLink } from "@/lib/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContentSections } from "./ContentSections";
import { CtaBand } from "./CtaBand";
import { FaqList } from "./FaqList";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { OfficialLinks } from "./KeywordPageView";
import { Placeholder } from "./Placeholder";
import { imageFor } from "@/content/images";
import { editorial } from "@/content/editorial";
import { linkSections } from "@/lib/autolink";
import { EditorialBox, InlineCta, InlineFigure, QuickAnswerBox } from "./Guide";
import { PageHeader } from "./Section";

/** Shared template for category landing pages (e.g. /buying-guide/). */
export function CategoryLandingView({ category }: { category: Category }) {
  const locale = getLocale();
  const t = getT();
  const children = pagesInCategory(locale, category.id);
  const waMessage = t.site.whatsappAbout(category.navLabel);
  const isSchemes = category.id === "schemes-training";
  const heroImage = localizeImage(locale, imageFor(category.id));
  const inlineImage = localizeImage(locale, imageFor(category.id, 1));
  const mid = Math.max(1, Math.floor(category.sections.length / 2));

  return (
    <>
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            invert
            items={[
              { name: t.common.home, path: "/" },
              { name: category.navLabel, path: category.path },
            ]}
          />
        }
        title={category.h1}
        intro={category.intro}
        image={heroImage}
      >
        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron-500 px-6 py-3.5 font-bold text-forest-950 hover:bg-saffron-600 hover:text-white"
        >
          <Icon name="phone" className="h-5 w-5" />
          {category.cta.label}
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

      <div className="container-site py-12 lg:py-16">
        {isSchemes && (
          <p className="mb-8 rounded-xl border border-saffron-500/40 bg-saffron-100 px-4 py-3 text-sm text-saffron-700">
            <strong>{t.keyword.reviewed}</strong> <Placeholder value={isPlaceholder(schemesReviewedOn) ? t.keyword.reviewDatePlaceholder : schemesReviewedOn} />
          </p>
        )}

        <div className="mx-auto max-w-3xl">
          <QuickAnswerBox answer={category.quickAnswer} takeaways={category.takeaways} />
        </div>

        {children.length > 0 && (
          <section aria-labelledby="topics-title" className="mt-12">
            <h2 id="topics-title" className="text-2xl font-bold">
              {t.keyword.topicsTitle}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {children.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={pagePath(p)}
                    className="group flex h-full flex-col rounded-2xl border border-forest-900/10 bg-white p-5 transition-shadow hover:border-forest-600/40 hover:shadow-md"
                  >
                    <span className="text-lg font-bold text-forest-950 group-hover:text-forest-700">{p.navLabel}</span>
                    <span className="mt-1.5 flex-1 text-sm text-muted">{p.summary}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700" aria-hidden="true">
                      {t.common.read} <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mx-auto mt-14 max-w-3xl">
          <ContentSections
            sections={linkSections(category.sections, category.path, locale)}
            slots={{
              0: <InlineFigure image={inlineImage} context={category.navLabel} />,
              [mid]: <InlineCta label={category.cta.label} topic={category.cta.topic} waMessage={waMessage} />,
            }}
          />
          {isSchemes && <OfficialLinks />}

          <section aria-labelledby="faq-title" className="mt-14">
            <h2 id="faq-title" className="mb-5 text-2xl font-bold">
              {t.common.faqTitle}
            </h2>
            <FaqList faqs={category.faqs} />
          </section>

          <EditorialBox />
        </div>
      </div>

      <CtaBand topic={category.cta.topic} whatsappMessage={waMessage} />
      <JsonLd
        data={webPageSchema({
          name: category.h1,
          description: category.seo.description,
          path: category.path,
          modified: editorial.updated,
          image: heroImage.src,
          keywords: category.seo.keywords,
          speakable: true,
        })}
      />
    </>
  );
}
