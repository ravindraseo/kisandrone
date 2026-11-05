import { LocaleLink as Link } from "@/components/LocaleLink";
import { getArticles, getUtility, localizeImage } from "@/content/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dict";
import { setRequestLocale } from "@/lib/i18n/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHeader, Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { UtilityGuide } from "@/components/UtilityGuide";
import { editorial } from "@/content/editorial";
import { images } from "@/content/images";
import { webPageSchema } from "@/lib/schema";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };
const toLocale = (l: string): Locale => (isLocale(l) ? l : "en");

export async function generateMetadata({ params }: Props) {
  const l = toLocale((await params).lang);
  return buildMetadata(l, getUtility(l).blog.seo, "/blog/");
}

export default async function BlogIndexPage({ params }: Props) {
  const l = toLocale((await params).lang);
  setRequestLocale(l);
  const t = dictionaries[l];
  const blogPage = getUtility(l).blog;
  const hero = localizeImage(l, images.sprayQuad);
  const sorted = [...getArticles(l)].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <>
      <PageHeader
        breadcrumbs={<Breadcrumbs invert items={[{ name: t.common.home, path: "/" }, { name: t.pages.blogBreadcrumb, path: "/blog/" }]} />}
        title={t.pages.blogH1}
        intro={t.pages.blogIntro}
        image={hero}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {sorted.map((a) => (
            <li key={a.slug}>
              <Card className="group relative flex h-full flex-col transition-shadow hover:shadow-md">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-forest-100 px-2.5 py-1 font-semibold text-forest-800">{a.category}</span>
                  <time dateTime={a.published}>{formatDate(a.published, l)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{t.common.minRead(a.readingMinutes)}</span>
                </div>
                <h2 className="mt-4 text-xl font-bold">
                  <Link href={`/${a.slug}/`} className="after:absolute after:inset-0 group-hover:text-forest-700">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-muted">{a.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700" aria-hidden="true">
                  {t.common.readFull} <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <UtilityGuide
            page={blogPage}
            path="/blog/"
            image={localizeImage(l, images.sprayHexa)}
            imageContext={t.pages.blogFigure}
            ctaLabel={t.pages.askQuestion}
            faqTitle={t.pages.blogFaqTitle}
          />
        </div>
      </Section>
      <CtaBand />
      <JsonLd
        data={{
          ...webPageSchema({
            name: t.pages.blogH1,
            description: blogPage.seo.description,
            path: "/blog/",
            modified: editorial.updated,
            image: hero.src,
            keywords: blogPage.seo.keywords,
            speakable: true,
          }),
          "@type": "CollectionPage",
        }}
      />
    </>
  );
}

