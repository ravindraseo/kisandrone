import { getT } from "@/lib/i18n/server";
import { LocaleLink as Link } from "./LocaleLink";
import type { Topic } from "@/content/types";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Icon } from "./Icon";

/** Call / WhatsApp / enquiry call-to-action shown near the end of every page. */
export function CtaBand({
  title,
  text,
  topic = "other",
  enquiryLabel,
  whatsappMessage,
  tight = false,
}: {
  title?: string;
  text?: string;
  topic?: Topic;
  enquiryLabel?: string;
  whatsappMessage?: string;
  tight?: boolean;
}) {
  const t = getT();
  return (
    <section className={tight ? "py-8 sm:py-10" : "py-14 sm:py-16"} aria-labelledby="cta-title">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-forest-800 px-6 py-10 text-center sm:px-12 sm:py-12">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-saffron-500/20 blur-2xl" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-forest-500/30 blur-2xl" />
          <h2 id="cta-title" className="relative mx-auto max-w-2xl text-2xl font-bold text-cream-50 sm:text-3xl">
            {title ?? t.cta.bandTitle}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-cream-100/85">{text ?? t.cta.bandText}</p>
          <div className="relative mx-auto mt-7 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron-500 px-6 py-3.5 sm:w-auto font-bold text-forest-950 hover:bg-saffron-600 hover:text-white"
            >
              <Icon name="phone" className="h-5 w-5" />
              {t.common.call} <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={whatsappLink(whatsappMessage ?? t.site.whatsappDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-6 py-3.5 sm:w-auto font-bold text-white hover:brightness-110"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              {t.common.askWhatsapp}<span className="sr-only"> {t.common.newWindow}</span>
            </a>
            <Link
              href={`/contact/?topic=${topic}`}
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cream-50 px-6 py-3.5 sm:w-auto font-bold text-forest-900 hover:bg-white"
            >
              {enquiryLabel ?? t.cta.enquiry}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
