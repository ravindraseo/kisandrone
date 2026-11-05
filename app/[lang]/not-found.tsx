import type { Metadata } from "next";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { getLocale, getT } from "@/lib/i18n/server";
import { getNav } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  const t = getT();
  const { groups } = getNav(getLocale());
  return (
    <div className="container-site py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{t.meta.notFoundTitle}</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">{t.pages.notFoundText}</p>
      <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
        <li>
          <Link href="/" className="inline-block rounded-full bg-saffron-500 px-5 py-2.5 font-bold text-forest-950">
            {t.pages.homePage}
          </Link>
        </li>
        {groups.map((g) => (
          <li key={g.id}>
            <Link href={g.href} className="inline-block rounded-full px-5 py-2.5 font-semibold text-forest-800 ring-1 ring-forest-900/20 hover:bg-forest-50">
              {g.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
