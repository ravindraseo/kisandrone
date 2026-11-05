"use client";

import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, localeNames, locales, localizePath, type Locale } from "@/lib/i18n/config";
import { useLocale, useT } from "@/lib/i18n/client";
import { Icon } from "./Icon";

/**
 * Visible language selector (English / हिन्दी / मराठी). Choosing a language
 * saves it in a cookie for a year and opens the same page in that language.
 * Uses full links (not JS-only), so it also works for crawlers and without JS.
 */
export function LanguageSwitcher({ variant = "header" }: { variant?: "header" | "menu" }) {
  const locale = useLocale();
  const t = useT();
  const path = usePathname() || "/";

  const remember = (l: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  };

  return (
    <nav aria-label={t.header.chooseLanguage} className={variant === "menu" ? "w-full" : ""}>
      <ul
        className={`flex items-center gap-0.5 rounded-full bg-white p-1 ring-1 ring-forest-900/15 ${
          variant === "menu" ? "w-full justify-between" : ""
        }`}
      >
        {variant === "header" && (
          <li className="hidden pl-1.5 pr-0.5 text-forest-700 sm:block xl:hidden 2xl:block" aria-hidden="true">
            <Icon name="globe" className="h-4 w-4" />
          </li>
        )}
        {locales.map((l) => {
          const active = l === locale;
          return (
            <li key={l} className={variant === "menu" ? "flex-1" : ""}>
              <a
                href={localizePath(l, path)}
                hrefLang={l}
                lang={l}
                onClick={() => remember(l)}
                aria-current={active ? "true" : undefined}
                className={`block whitespace-nowrap rounded-full px-2.5 py-1.5 text-center text-sm font-semibold transition-colors ${
                  active ? "bg-forest-800 text-white" : "text-forest-900 hover:bg-forest-50"
                }`}
              >
                {variant === "header" ? <ShortName l={l} /> : localeNames[l]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Compact labels in the header: "EN · हि · म" on small screens, full names on wider ones. */
function ShortName({ l }: { l: Locale }) {
  const short: Record<Locale, string> = { en: "EN", hi: "हि", mr: "म" };
  return (
    <>
      <span className="2xl:hidden" aria-hidden="true">{short[l]}</span>
      <span className="hidden 2xl:inline">{localeNames[l]}</span>
      <span className="sr-only 2xl:hidden">{localeNames[l]}</span>
    </>
  );
}
