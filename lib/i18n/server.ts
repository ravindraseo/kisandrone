import { cache } from "react";
import { defaultLocale, type Locale } from "./config";
import { dictionaries, type Dictionary } from "./dict";

/**
 * Per-request locale for server components. Each page/layout calls
 * setRequestLocale() with its [lang] param; any server component below can then
 * call getLocale() / getT() without prop drilling. React's cache() is scoped to
 * a single request, so locales never leak between requests.
 */
const store = cache(() => ({ locale: defaultLocale as Locale }));

export function setRequestLocale(locale: Locale) {
  store().locale = locale;
}

export function getLocale(): Locale {
  return store().locale;
}

export function getT(): Dictionary {
  return dictionaries[getLocale()];
}
