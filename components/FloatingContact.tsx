import { getT } from "@/lib/i18n/server";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Icon } from "./Icon";

/**
 * Floating Call + WhatsApp buttons (bottom-right).
 * Icon-only 48px circles on mobile (labels from `sm` up), and the footer has extra bottom padding
 * on mobile so these never cover links. They sit below the header/menu layer.
 */
export function FloatingContact() {
  const t = getT();
  return (
    <div
      className="fixed bottom-3 right-3 z-30 flex flex-col items-end gap-2 sm:bottom-6 sm:right-5"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={whatsappLink(t.site.whatsappDefault)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center gap-1.5 rounded-full bg-whatsapp text-sm sm:h-auto sm:w-auto sm:px-3.5 sm:py-2.5 font-bold text-white shadow-lg ring-2 ring-white/80 hover:brightness-110"
        aria-label={t.common.whatsappAria(siteConfig.contact.phoneDisplay)}
      >
        <Icon name="whatsapp" className="h-5 w-5" />
        <span className="hidden sm:inline" aria-hidden="true">{t.common.whatsapp}</span>
      </a>
      <a
        href={siteConfig.contact.phoneHref}
        className="flex h-12 w-12 items-center justify-center gap-1.5 rounded-full bg-forest-800 text-sm sm:h-auto sm:w-auto sm:px-3.5 sm:py-2.5 font-bold text-white shadow-lg ring-2 ring-white/80 hover:bg-forest-700"
        aria-label={t.common.callAria(siteConfig.contact.phoneDisplay)}
      >
        <Icon name="phone" className="h-5 w-5" />
        <span className="hidden sm:inline" aria-hidden="true">{t.common.call}</span>
      </a>
    </div>
  );
}
