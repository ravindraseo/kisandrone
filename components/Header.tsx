"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { stripLocale } from "@/lib/i18n/config";
import { useT } from "@/lib/i18n/client";
import type { NavGroup, NavLink } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { Icon } from "./Icon";
import { LocaleLink as Link } from "./LocaleLink";
import { Logo } from "./Logo";

export function Header({ navGroups, secondaryNav }: { navGroups: NavGroup[]; secondaryNav: NavLink[] }) {
  const t = useT();
  // Language-neutral path with a trailing slash, so it matches hrefs like "/crops/".
  const raw = stripLocale(usePathname() || "/");
  const pathname = raw.endsWith("/") ? raw : `${raw}/`;
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown id
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Close everything on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes the open menu and returns focus to its trigger.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (openMenu) {
        triggerRefs.current[openMenu]?.focus();
        setOpenMenu(null);
      } else if (mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (openMenu && navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu, mobileOpen]);

  // URLs are flat, so a group is active on its own page or any of its child pages.
  const inGroup = (g: (typeof navGroups)[number]) => pathname === g.href || g.children.some((c) => c.href === pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-cream-50/85">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-cream-50"
      >
        {t.header.skip}
      </a>
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-3">
        <Link href="/" className="shrink-0 rounded-md" aria-label={t.header.homeAria(siteConfig.name)}>
          <Logo sub={t.site.logoSub} />
        </Link>

        {/* Desktop navigation with dropdowns */}
        <nav ref={navRef} aria-label={t.header.mainMenu} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {navGroups.map((g, i) => {
              const open = openMenu === g.id;
              const active = inGroup(g);
              return (
                <li key={g.id} className="relative">
                  <button
                    ref={(el) => {
                      triggerRefs.current[g.id] = el;
                    }}
                    type="button"
                    aria-expanded={open}
                    aria-controls={`menu-${g.id}`}
                    onClick={() => setOpenMenu(open ? null : g.id)}
                    className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.92rem] font-semibold transition-colors ${
                      active || open ? "bg-forest-100 text-forest-900" : "text-ink/85 hover:bg-forest-50 hover:text-forest-900"
                    }`}
                  >
                    {g.label}
                    <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    id={`menu-${g.id}`}
                    hidden={!open}
                    className={`absolute top-full mt-2 w-80 rounded-2xl border border-forest-900/10 bg-white p-3 shadow-xl ${
                      i >= navGroups.length - 2 ? "right-0" : "left-0"
                    }`}
                  >
                    <Link
                      href={g.href}
                      aria-current={pathname === g.href ? "page" : undefined}
                      className="flex items-center justify-between rounded-xl bg-forest-50 px-3 py-2.5 font-bold text-forest-900 hover:bg-forest-100"
                    >
                      {g.label} — {t.header.overview}
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                    {g.children.length > 0 && (
                      <ul className="mt-2 max-h-[60vh] space-y-0.5 overflow-y-auto">
                        {g.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              aria-current={pathname === c.href ? "page" : undefined}
                              className={`block rounded-lg px-3 py-2 text-sm ${
                                pathname === c.href ? "bg-forest-100 font-semibold text-forest-900" : "text-ink hover:bg-cream-100"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.phoneHref}
            aria-label={t.common.callAria(siteConfig.contact.phoneDisplay)}
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-saffron-500 px-4 py-2.5 text-sm font-bold text-forest-950 shadow-sm hover:bg-saffron-600 hover:text-white sm:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest-900 ring-1 ring-forest-900/15 hover:bg-forest-50 xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? t.header.closeMenu : t.header.openMenu}</span>
            <Icon name={mobileOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet navigation */}
      <nav
        id="mobile-nav"
        aria-label={t.header.mobileMenu}
        hidden={!mobileOpen}
        className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-forest-900/10 bg-cream-50 xl:hidden"
      >
        <ul className="container-site space-y-1 py-4">
          {navGroups.map((g) => {
            const expanded = mobileSection === g.id;
            return (
              <li key={g.id} className="rounded-xl bg-white ring-1 ring-forest-900/5">
                <div className="flex items-stretch">
                  <Link href={g.href} className="flex-1 px-4 py-3 font-semibold text-forest-950">
                    {g.label}
                  </Link>
                  {g.children.length > 0 && (
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`m-${g.id}`}
                      onClick={() => setMobileSection(expanded ? null : g.id)}
                      className="flex w-12 items-center justify-center border-l border-forest-900/10 text-forest-700"
                    >
                      <span className="sr-only">{expanded ? t.header.hidePages(g.label) : t.header.showPages(g.label)}</span>
                      <Icon name="chevronDown" className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {g.children.length > 0 && (
                  <ul id={`m-${g.id}`} hidden={!expanded} className="border-t border-forest-900/10 px-2 py-2">
                    {g.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          aria-current={pathname === c.href ? "page" : undefined}
                          className="block rounded-lg px-3 py-2 text-[0.95rem] text-ink hover:bg-cream-100"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          <li className="flex flex-wrap gap-2 pt-2">
            {secondaryNav.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-full px-4 py-2 text-sm font-semibold text-forest-800 ring-1 ring-forest-900/15">
                {s.label}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}
