import { getLocale, getT } from "@/lib/i18n/server";
import { getNav } from "@/lib/nav";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Icon } from "./Icon";
import { LocaleLink as Link } from "./LocaleLink";
import { Logo } from "./Logo";

export function Footer() {
  const t = getT();
  const { groups: navGroups, secondary: secondaryNav } = getNav(getLocale());
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    // Extra bottom padding on mobile so the floating Call/WhatsApp buttons never cover footer links.
    <footer className="bg-forest-950 pb-24 text-cream-100 sm:pb-0">
      <div className="container-site grid gap-10 py-14 lg:grid-cols-[1.3fr_2.7fr]">
        <div>
          <Link href="/" className="inline-block rounded-md" aria-label={t.header.homeAria(siteConfig.name)}>
            <Logo invert sub={t.site.logoSub} />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-cream-100/75">{t.site.tagline}.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 font-semibold hover:text-saffron-200">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-saffron-500" />
                {t.common.callColon} <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(t.site.whatsappDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold hover:text-saffron-200"
              >
                <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-saffron-500" />
                {t.common.askWhatsapp}<span className="sr-only"> {t.common.newWindow}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-2 hover:text-saffron-200" >
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-saffron-500" />
              <address className="not-italic text-cream-100/85">
                <span className="block font-semibold text-cream-50">{t.common.headOffice}</span>
                <span>{t.site.address}</span>
              </address>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="clock" className="mt-1 h-4 w-4 shrink-0 text-saffron-500" />
              <span className="text-cream-100/85">{t.site.hours}</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {navGroups.map((g) => (
            <nav key={g.id} aria-label={g.label}>
              <h2 className="text-base font-bold text-cream-50">
                <Link href={g.href} className="hover:text-saffron-200">
                  {g.label}
                </Link>
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {g.children.slice(0, 5).map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-cream-100/75 hover:text-saffron-200 hover:underline">
                      {c.label}
                    </Link>
                  </li>
                ))}
                {g.children.length > 5 && (
                  <li>
                    <Link href={g.href} className="font-semibold text-saffron-200 hover:underline">
                      {t.footer.viewAll(g.children.length)}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-site flex flex-col items-center gap-3 py-6 text-center text-xs text-cream-100/65">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.notice}
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            {secondaryNav.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-saffron-200">
                  {s.label}
                </Link>
              </li>
            ))}
            {socials.map(([name, url]) => (
              <li key={name}>
                <a href={url} className="capitalize hover:text-saffron-200" rel="noopener noreferrer" target="_blank">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
