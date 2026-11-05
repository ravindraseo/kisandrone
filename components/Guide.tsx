import Image from "next/image";
import { editorial } from "@/content/editorial";
import { getT } from "@/lib/i18n/server";
import type { SiteImage } from "@/content/images";
import type { Topic } from "@/content/types";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Icon } from "./Icon";
import { Placeholder } from "./Placeholder";
import { RichText } from "./RichText";

/** Direct answer + key takeaways at the top of a guide (answer-engine friendly). */
export function QuickAnswerBox({ answer, takeaways }: { answer: string; takeaways: string[] }) {
  const t = getT();
  return (
    <section aria-labelledby="quick-answer-title" className="quick-answer rounded-2xl border border-forest-600/25 bg-forest-50 p-5 sm:p-6">
      <h2 id="quick-answer-title" className="flex items-center gap-2 text-lg font-bold text-forest-900">
        <Icon name="info" className="h-5 w-5" /> {t.guide.quickAnswer}
      </h2>
      <p className="quick-answer-text mt-2 text-[1.0625rem] text-ink">
        <RichText text={answer} />
      </p>
      {takeaways.length > 0 && (
        <>
          <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-forest-800">{t.guide.keyTakeaways}</h3>
          <ul className="mt-2 space-y-1.5">
            {takeaways.map((t) => (
              <li key={t} className="flex gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-forest-600" />
                <span>
                  <RichText text={t} />
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

/** Second drone photo inside the article. */
export function InlineFigure({ image, context }: { image: SiteImage; context: string }) {
  const t = getT();
  return (
    <figure className="overflow-hidden rounded-2xl border border-forest-900/10 bg-white p-4 sm:flex sm:items-center sm:gap-6">
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={`${image.alt} — ${context}`}
        sizes="(min-width: 640px) 240px, 100vw"
        className="mx-auto h-auto w-full max-w-[260px] shrink-0 sm:w-60"
        loading="lazy"
      />
      <figcaption className="mt-3 text-sm text-muted sm:mt-0">
        <span className="block font-semibold text-ink">
          {context}: {image.label.toLowerCase()}
        </span>
        {image.text} {t.guide.figureNote}
      </figcaption>
    </figure>
  );
}

/** Compact call-to-action placed in the middle of an article. */
export function InlineCta({ label, waMessage }: { label: string; topic?: Topic; waMessage: string }) {
  const t = getT();
  return (
    <aside
      aria-label={t.cta.contactAria}
      className="rounded-2xl bg-forest-800 p-5 text-cream-50 lg:flex lg:items-center lg:justify-between lg:gap-6 sm:p-6"
    >
      <div>
        <p className="text-lg font-bold">{t.cta.inlineTitle}</p>
        <p className="mt-1 text-sm text-cream-100/85">
          {t.cta.inlineText(t.site.hours)}
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:flex-wrap lg:mt-0 lg:shrink-0">
        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron-500 px-5 py-3 text-[0.95rem] font-bold sm:text-base text-forest-950 hover:bg-saffron-600 hover:text-white"
        >
          <Icon name="phone" className="h-5 w-5" />
          {label}
        </a>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cream-50 px-5 py-3 text-[0.95rem] font-bold sm:text-base text-forest-900 hover:bg-white"
        >
          <Icon name="whatsapp" className="h-5 w-5 text-whatsapp" />
          {t.common.whatsapp}<span className="sr-only"> {t.common.newWindow}</span>
        </a>
      </div>
    </aside>
  );
}

/** "About this guide" — who wrote it, review status, sources and editorial policy (E-E-A-T). */
export function EditorialBox() {
  const t = getT();
  return (
    <section aria-labelledby="about-guide-title" className="mt-12 rounded-2xl border border-forest-900/10 bg-white p-5 sm:p-6">
      <h2 id="about-guide-title" className="text-lg font-bold">
        {t.guide.aboutGuide}
      </h2>
      <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[max-content_1fr]">
        <dt className="font-semibold text-forest-900">{t.guide.writtenBy}</dt>
        <dd>{t.guide.writtenByText(t.guide.author)}</dd>
        <dt className="font-semibold text-forest-900">{t.guide.reviewedBy}</dt>
        <dd>
          <Placeholder value={t.guide.reviewer} />
        </dd>
        <dt className="font-semibold text-forest-900">{t.guide.lastUpdated}</dt>
        <dd>
          <time dateTime={editorial.updated}>{t.guide.updatedLabel}</time>
        </dd>
      </dl>
      <h3 className="mt-4 text-sm font-bold text-forest-900">{t.guide.howWeWrite}</h3>
      <p className="mt-1 text-sm text-muted">
        {t.guide.howWeWriteText}{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-forest-700 underline">
          {siteConfig.contact.email}
        </a>
        .
      </p>
      <h3 className="mt-4 text-sm font-bold text-forest-900">{t.guide.sources}</h3>
      <ul className="mt-1 space-y-1 text-sm">
        {editorial.sources.map((s, i) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-700 underline underline-offset-2 hover:text-forest-900"
            >
              {t.guide.sourceLabels[i] ?? s.label}
              <span className="sr-only"> {t.common.newWindow}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
