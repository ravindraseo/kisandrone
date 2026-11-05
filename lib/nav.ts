import { getCategories, pagesInCategory } from "@/content/i18n";
import type { Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dict";

export type NavGroup = {
  id: string;
  label: string;
  href: string;
  children: { href: string; label: string }[];
};

export type NavLink = { href: string; label: string };

/**
 * Header/footer navigation in the given language. Hrefs are language-neutral
 * ("/crops/"); LocaleLink adds the /hi/ or /mr/ prefix when rendering.
 */
export function getNav(locale: Locale): { groups: NavGroup[]; secondary: NavLink[] } {
  const t = dictionaries[locale];
  return {
    groups: getCategories(locale).map((c) => ({
      id: c.id,
      label: c.navLabel,
      href: c.path,
      children: pagesInCategory(locale, c.id).map((p) => ({ href: `/${p.slug}/`, label: p.navLabel })),
    })),
    secondary: [
      { href: "/blog/", label: t.nav.blog },
      { href: "/about/", label: t.nav.about },
      { href: "/contact/", label: t.nav.contact },
    ],
  };
}
