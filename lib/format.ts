import { htmlLang, type Locale } from "./i18n/config";

export function formatDate(iso: string, locale: Locale = "en") {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(htmlLang[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
