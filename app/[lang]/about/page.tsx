import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader, Section } from "@/components/Section";
import { UtilityGuide } from "@/components/UtilityGuide";
import { editorial } from "@/content/editorial";
import { getUtility, localizeImage } from "@/content/i18n";
import { images } from "@/content/images";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dict";
import { setRequestLocale } from "@/lib/i18n/server";
import { webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };
const lang = async (p: Props["params"]): Promise<Locale> => {
  const { lang } = await p;
  return isLocale(lang) ? lang : "en";
};

export async function generateMetadata({ params }: Props) {
  const l = await lang(params);
  return buildMetadata(l, getUtility(l).about.seo, "/about/");
}

/**
 * EDIT ME: fill the [placeholders] in content/utility.ts (and the Hindi/Marathi
 * versions in content/i18n/) with verified information only.
 */
export default async function AboutPage({ params }: Props) {
  const l = await lang(params);
  setRequestLocale(l);
  const t = dictionaries[l];
  const page = getUtility(l).about;
  const hero = localizeImage(l, images.sprayHexa);

  return (
    <>
      <PageHeader
        breadcrumbs={<Breadcrumbs invert items={[{ name: t.common.home, path: "/" }, { name: t.pages.aboutBreadcrumb, path: "/about/" }]} />}
        title={t.pages.aboutH1}
        intro={t.pages.aboutIntro}
        image={hero}
      >
        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron-500 px-6 py-3.5 font-bold text-forest-950 hover:bg-saffron-600 hover:text-white"
        >
          {t.common.callNumber(siteConfig.contact.phoneDisplay)}
        </a>
      </PageHeader>

      <Section>
        <UtilityGuide
          page={page}
          path="/about/"
          image={localizeImage(l, images.sprayQuad)}
          imageContext={t.pages.aboutFigure}
          ctaLabel={t.pages.aboutCta}
          faqTitle={t.pages.aboutFaqTitle}
        />
      </Section>

      <CtaBand />
      <JsonLd
        data={{
          ...webPageSchema({
            name: t.pages.aboutH1,
            description: page.seo.description,
            path: "/about/",
            modified: editorial.updated,
            image: hero.src,
            keywords: page.seo.keywords,
            speakable: true,
          }),
          "@type": "AboutPage",
        }}
      />
    </>
  );
}
