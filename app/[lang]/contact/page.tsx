import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHeader, Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { UtilityGuide } from "@/components/UtilityGuide";
import { editorial } from "@/content/editorial";
import { images } from "@/content/images";
import { getUtility, localizeImage } from "@/content/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dict";
import { setRequestLocale } from "@/lib/i18n/server";
import { webPageSchema } from "@/lib/schema";
import { whatsappLink } from "@/lib/site";

type Props = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
const toLocale = (l: string): Locale => (isLocale(l) ? l : "en");

export async function generateMetadata({ params }: Pick<Props, "params">) {
  const l = toLocale((await params).lang);
  return buildMetadata(l, getUtility(l).contact.seo, "/contact/");
}

export default async function ContactPage({ params, searchParams }: Props) {
  const l = toLocale((await params).lang);
  setRequestLocale(l);
  const t = dictionaries[l];
  const contactPage = getUtility(l).contact;
  const { topic } = await searchParams;
  const defaultTopic = typeof topic === "string" ? topic : "";

  return (
    <>
      <PageHeader
        breadcrumbs={<Breadcrumbs invert items={[{ name: t.common.home, path: "/" }, { name: t.pages.contactBreadcrumb, path: "/contact/" }]} />}
        title={t.pages.contactH1}
        intro={t.pages.contactIntro}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Card className="p-6 sm:p-8">
            <h2 className="mb-6 text-2xl font-bold">{t.pages.enquiryForm}</h2>
            <ContactForm key={defaultTopic} defaultTopic={defaultTopic} />
          </Card>
          <aside aria-labelledby="contact-details-title" className="space-y-6">
            <Card className="bg-cream-100">
              <h2 id="contact-details-title" className="text-xl font-bold">
                {t.pages.contactDetails}
              </h2>
              <div className="mt-5 space-y-3">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 rounded-xl bg-forest-800 px-4 py-3 font-bold text-white hover:bg-forest-700"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  {t.common.callColon} <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={whatsappLink(t.site.whatsappDefault)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-whatsapp px-4 py-3 font-bold text-white hover:brightness-110"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  {t.common.messageWhatsapp}<span className="sr-only"> {t.common.newWindow}</span>
                </a>
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
                  <div>
                    <dt className="font-semibold text-forest-950">{t.common.email}</dt>
                    <dd>
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-forest-700 underline underline-offset-2" lang="en">
                        {siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
                  <div>
                    <dt className="font-semibold text-forest-950">{t.common.headOffice}</dt>
                    <dd>
                      <address className="not-italic">{t.site.address}</address>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block font-semibold text-forest-700 underline underline-offset-2"
                      >
                        {t.pages.viewMap}<span className="sr-only"> {t.common.newWindow}</span>
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
                  <div>
                    <dt className="font-semibold text-forest-950">{t.common.hours}</dt>
                    <dd>{t.site.hours}</dd>
                  </div>
                </div>
              </dl>
            </Card>
          </aside>
        </div>
      </Section>

      <Section tone="white">
        <UtilityGuide
          page={contactPage}
          path="/contact/"
          image={localizeImage(l, images.sprayHexa)}
          imageContext={t.pages.contactFigure}
          ctaLabel={t.common.callNow}
          faqTitle={t.pages.contactFaqTitle}
        />
      </Section>

      <CtaBand />
      <JsonLd
        data={{
          ...webPageSchema({
            name: t.pages.contactH1,
            description: contactPage.seo.description,
            path: "/contact/",
            modified: editorial.updated,
            image: images.sprayHexa.src,
            keywords: contactPage.seo.keywords,
            speakable: true,
          }),
          "@type": "ContactPage",
        }}
      />
    </>
  );
}
