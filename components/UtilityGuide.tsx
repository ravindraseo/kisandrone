import type { SiteImage } from "@/content/images";
import type { Topic } from "@/content/types";
import type { UtilityPage } from "@/content/utility";
import { linkSections } from "@/lib/autolink";
import { getLocale, getT } from "@/lib/i18n/server";
import { ContentSections } from "./ContentSections";
import { FaqList } from "./FaqList";
import { EditorialBox, InlineCta, InlineFigure, QuickAnswerBox } from "./Guide";

/** Long-form block for About / Contact / Blog: quick answer, H2/H3 sections, image, CTA, FAQs, E-E-A-T box. */
export function UtilityGuide({
  page,
  path,
  image,
  imageContext,
  ctaLabel,
  topic = "other",
  faqTitle = "Frequently asked questions",
}: {
  page: UtilityPage;
  /** Page URL, so the page never links to itself */
  path: string;
  image: SiteImage;
  imageContext: string;
  ctaLabel: string;
  topic?: Topic;
  faqTitle?: string;
}) {
  const mid = Math.max(1, Math.floor(page.sections.length / 2));
  const t = getT();
  return (
    <div className="mx-auto max-w-3xl">
      <QuickAnswerBox answer={page.quickAnswer} takeaways={page.takeaways} />
      <div className="mt-10">
        <ContentSections
          sections={linkSections(page.sections, path, getLocale())}
          slots={{
            0: <InlineFigure image={image} context={imageContext} />,
            [mid]: <InlineCta label={ctaLabel} topic={topic} waMessage={t.site.whatsappDefault} />,
          }}
        />
      </div>
      <section aria-labelledby="utility-faq-title" className="mt-14">
        <h2 id="utility-faq-title" className="mb-5 text-2xl font-bold">
          {faqTitle}
        </h2>
        <FaqList faqs={page.faqs} />
      </section>
      <EditorialBox />
    </div>
  );
}
