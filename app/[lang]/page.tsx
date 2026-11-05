import Image from "next/image";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { Icon, type IconName } from "@/components/Icon";
import { Section, SectionHeading } from "@/components/Section";
import { getArticles, getCategories, getHome, localizeImage, pagesInCategory } from "@/content/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dict";
import { setRequestLocale } from "@/lib/i18n/server";
import { ContentSections } from "@/components/ContentSections";
import { linkSections } from "@/lib/autolink";
import { EditorialBox, InlineCta, InlineFigure, QuickAnswerBox } from "@/components/Guide";
import { droneTypes, fieldPhotos, images } from "@/content/images";
import { pagePath } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema } from "@/lib/schema";
import { editorial } from "@/content/editorial";
import { siteConfig, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };
const toLocale = (l: string): Locale => (isLocale(l) ? l : "en");

export async function generateMetadata({ params }: Props) {
  const l = toLocale((await params).lang);
  return buildMetadata(l, getHome(l).seo, "/");
}

const categoryIcons: Record<string, IconName> = {
  "kisan-drone": "drone",
  "products-services": "spray",
  "buying-guide": "rupee",
  "schemes-training": "graduation",
  crops: "leaf",
};

const reasonIcons: IconName[] = ["clock", "shield", "leaf", "map"];

export default async function HomePage({ params }: Props) {
  const l = toLocale((await params).lang);
  setRequestLocale(l);
  const t = dictionaries[l];
  const h = t.home;
  const home = getHome(l);
  const categories = getCategories(l);
  const articles = getArticles(l);
  const heroImage = localizeImage(l, images.sprayQuad);
  const popular = [
    pagesInCategory(l, "products-services").find((p) => p.slug === "drone-spraying-service"),
    pagesInCategory(l, "kisan-drone").find((p) => p.slug === "agriculture-drone-price-in-india"),
    pagesInCategory(l, "schemes-training").find((p) => p.slug === "kisan-drone-subsidy"),
    pagesInCategory(l, "schemes-training").find((p) => p.slug === "how-to-become-agricultural-drone-pilot"),
  ].filter((p) => p !== undefined);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100" aria-labelledby="hero-title">
        <div className="container-site grid items-center gap-6 py-8 sm:py-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow">{h.eyebrow(siteConfig.name)}</p>
            <h1 id="hero-title" className="mt-3 text-[1.9rem] font-extrabold leading-tight min-[400px]:text-[2.2rem] sm:text-5xl md:text-[2.6rem] lg:text-5xl">
              <span className="text-forest-700">{h.h1Lead}</span>
              {h.h1Rest}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
              {h.intro}
            </p>
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron-500 px-6 py-3.5 text-base font-bold text-forest-950 shadow-sm hover:bg-saffron-600 hover:text-white"
              >
                <Icon name="phone" className="h-5 w-5" />
                {t.common.call} <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={whatsappLink(t.site.whatsappDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-6 py-3.5 text-base font-bold text-white hover:brightness-110"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                {t.common.askWhatsapp}<span className="sr-only"> {t.common.newWindow}</span>
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-forest-900">
              {h.heroPoints.map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-forest-600" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <figure className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div aria-hidden="true" className="absolute inset-6 rounded-full bg-saffron-500/25 blur-3xl" />
            <div className="relative rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-forest-900/10 sm:p-6">
              <Image
                src={heroImage.src}
                width={heroImage.width}
                height={heroImage.height}
                alt={heroImage.alt}
                sizes="(min-width: 1152px) 500px, (min-width: 768px) 45vw, 90vw"
                className="h-auto w-full"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">{h.heroCaption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Field photo gallery */}
      <Section tight labelledBy="gallery-title">
        <SectionHeading
          tight
          id="gallery-title"
          eyebrow={h.galleryEyebrow}
          title={h.galleryTitle}
          intro={h.galleryIntro}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {fieldPhotos.map((photo, i) => {
            const p = localizeImage(l, photo);
            return (
            <li key={p.src} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <figure className="h-full overflow-hidden rounded-2xl border border-forest-900/10 bg-white">
                <Image
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  className="aspect-[4/3] w-full object-cover"
                  style={{ objectPosition: p.position ?? "50% 50%" }}
                  loading="lazy"
                  unoptimized
                />
                <figcaption className="p-4">
                  <span className="block font-bold text-forest-950">{p.label}</span>
                  <span className="mt-1 block text-sm text-muted">{p.text}</span>
                </figcaption>
              </figure>
            </li>
            );
          })}
        </ul>
        <p className="mt-4 text-xs text-muted">{h.galleryNote}</p>
      </Section>

      {/* Drone types */}
      <Section tight tone="white" labelledBy="types-title">
        <SectionHeading
          tight
          id="types-title"
          eyebrow={h.typesEyebrow}
          title={h.typesTitle}
          intro={h.typesIntro}
        />
        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {droneTypes.map((drone, i) => {
            const d = localizeImage(l, drone);
            return (
            <li key={d.src}>
              <div className="flex h-full flex-row overflow-hidden rounded-2xl border min-[480px]:flex-col border-forest-900/10 bg-white shadow-[0_1px_2px_rgba(15,56,36,0.05)]">
                <div className="flex w-28 shrink-0 items-center justify-center bg-white p-2 min-[480px]:aspect-[4/3] min-[480px]:w-auto min-[480px]:p-4">
                  <Image
                    src={d.src}
                    width={d.width}
                    height={d.height}
                    alt={d.alt}
                    sizes="(min-width: 1024px) 260px, (min-width: 480px) 45vw, 112px"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col border-l border-forest-900/10 p-4 min-[480px]:border-l-0 min-[480px]:border-t min-[480px]:p-5">
                  <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${i < 2 ? "bg-forest-100 text-forest-800" : "bg-cream-200 text-ink"}`}>
                    {i < 2 ? h.forFarming : h.notFarm}
                  </span>
                  <h3 className="mt-2 text-base font-bold min-[480px]:mt-3 min-[480px]:text-lg">{d.label}</h3>
                  <p className="mt-1.5 text-sm text-muted">{d.text}</p>
                </div>
              </div>
            </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm text-muted">
          {h.typesNoteBefore}{" "}
          <Link href="/best-agriculture-drone-in-india/" className="font-semibold text-forest-700 underline underline-offset-2">
            {h.typesNoteLink}
          </Link>{" "}
          {h.typesNoteAfter}
        </p>
      </Section>

      {/* Categories */}
      <Section tight labelledBy="cat-title">
        <SectionHeading
          tight
          id="cat-title"
          eyebrow={h.catEyebrow}
          title={h.catTitle}
          intro={h.catIntro}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const pages = pagesInCategory(l, c.id).slice(0, 3);
            return (
              <li key={c.id}>
                <Card className="flex h-full flex-col">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
                    <Icon name={categoryIcons[c.id]} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold">
                    <Link href={c.path} className="hover:text-forest-700">
                      {c.navLabel}
                    </Link>
                  </h3>
                  <p className="mt-1.5 text-muted">{h.categoryBlurb[c.id]}</p>
                  {pages.length > 0 && (
                    <ul className="mt-4 flex-1 space-y-1.5 text-sm">
                      {pages.map((p) => (
                        <li key={p.slug}>
                          <Link href={pagePath(p)} className="text-forest-700 underline decoration-forest-200 underline-offset-2 hover:decoration-forest-700">
                            {p.navLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link href={c.path} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-forest-800">
                    {h.catView(c.navLabel)} <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                </Card>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Why drones */}
      <Section tight tone="forest" labelledBy="why-title">
        <SectionHeading
          tight
          id="why-title"
          eyebrow={h.whyEyebrow}
          title={h.whyTitle}
          intro={h.whyIntro}
          invert
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {h.reasons.map((r, i) => (
            <li key={r.title} className="rounded-2xl bg-forest-800/70 p-6 ring-1 ring-cream-50/10">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-500 text-forest-950">
                <Icon name={reasonIcons[i]} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-cream-50">{r.title}</h3>
              <p className="mt-1.5 text-sm text-cream-100/85">{r.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5">
          <Link href="/drone-for-farming/" className="font-bold text-saffron-200 underline underline-offset-4">
            {h.whyLink}
          </Link>
        </p>
      </Section>

      {/* Popular */}
      <Section tight labelledBy="popular-title">
        <SectionHeading tight id="popular-title" eyebrow={h.popularEyebrow} title={h.popularTitle} />
        <ul className="grid gap-4 md:grid-cols-2">
          {popular.map((p) => (
            <li key={p.slug}>
              <Link href={pagePath(p)} className="group flex h-full items-start gap-4 rounded-2xl border border-forest-900/10 bg-white p-5 hover:border-forest-600/50 hover:shadow-md">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-700">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-lg font-bold text-forest-950 group-hover:text-forest-700">{p.navLabel}</span>
                  <span className="mt-1 block text-sm text-muted">{p.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Blog */}
      <Section tight tone="white" labelledBy="blog-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading tight id="blog-title" eyebrow={h.blogEyebrow} title={h.blogTitle} />
          <Link href="/blog/" className="mb-6 font-bold text-forest-800 underline underline-offset-4">
            {h.allArticles}
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <Card className="flex h-full flex-col">
                <p className="eyebrow">{a.category}</p>
                <h3 className="mt-2 text-lg font-bold">
                  <Link href={`/${a.slug}/`} className="hover:text-forest-700">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{a.summary}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* Long-form guide (answer-engine friendly) */}
      <Section tight tone="white" labelledBy="guide-title">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            tight
            id="guide-title"
            eyebrow={h.guideEyebrow}
            title={h.guideTitle}
          />
          <QuickAnswerBox answer={home.quickAnswer} takeaways={[]} />
          <div className="mt-10">
            <ContentSections
              sections={linkSections(home.guide, "/", l)}
              slots={{
                0: <InlineFigure image={localizeImage(l, images.sprayHexa)} context={h.figureContext} />,
                2: <InlineCta label={t.common.callNow} topic="other" waMessage={t.site.whatsappDefault} />,
              }}
            />
          </div>
          <EditorialBox />
        </div>
      </Section>

      {/* FAQ */}
      <Section tight labelledBy="faq-title">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-10">
          <SectionHeading tight id="faq-title" eyebrow={h.faqEyebrow} title={h.faqTitle} />
          <FaqList faqs={home.faqs} />
        </div>
      </Section>

      <CtaBand tight />
      <JsonLd
        data={webPageSchema({
          name: home.seo.title,
          description: home.seo.description,
          path: "/",
          modified: editorial.updated,
          image: heroImage.src,
          keywords: home.seo.keywords,
          speakable: true,
        })}
      />
    </>
  );
}
