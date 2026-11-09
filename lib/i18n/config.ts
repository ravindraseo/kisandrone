/**
 * Language configuration.
 *
 * English is the default and lives at the root URLs (/about/). Hindi and
 * Marathi live under a prefix (/hi/about/, /mr/about/). The visitor's choice is
 * remembered in the LOCALE_COOKIE cookie (see proxy.ts).
 */
export const locales = ["en", "hi", "mr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "kd_lang";

export const localeNames: Record<Locale, string> = { en: "English", hi: "हिन्दी", mr: "मराठी" };
/** BCP-47 tags for <html lang>, hreflang and Open Graph. */
export const htmlLang: Record<Locale, string> = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" };
export const ogLocale: Record<Locale, string> = { en: "en_IN", hi: "hi_IN", mr: "mr_IN" };

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** "/about/" + "hi" → "/hi/about/"; English stays unprefixed. Leaves external links, anchors and files alone. */
export function localizePath(locale: Locale, path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const clean = stripLocale(path);
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}/` : `/${locale}${clean}`;
}

/** "/hi/about/" → "/about/" */
export function stripLocale(path: string): string {
  const m = path.match(/^\/(hi|mr|en)(\/|$)/);
  if (!m) return path;
  const rest = path.slice(m[0].length - (m[2] ? 1 : 0));
  return rest === "" ? "/" : rest;
}

/** Locale from a browser pathname ("/mr/x/" → "mr", "/x/" → "en"). */
export function localeFromPath(path: string): Locale {
  const seg = path.split("/")[1];
  return seg === "hi" || seg === "mr" ? seg : defaultLocale;
}
