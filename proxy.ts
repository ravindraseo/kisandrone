import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE } from "@/lib/i18n/config";

/**
 * Language routing.
 *
 * - English is the default and is served at root URLs (/about/) — internally
 *   rewritten to /en/about/ so every page lives under app/[lang]/.
 * - /hi/… and /mr/… are served as they are.
 * - /en/… redirects to the root URL so English has a single canonical address.
 * - A visitor who chose Hindi or Marathi (kd_lang cookie, set by the language
 *   switcher) and lands on an English URL is sent to the same page in their
 *   language. Search engines send no cookie, so they always see every language.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    const res = NextResponse.redirect(url, 308);
    res.cookies.set(LOCALE_COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    return res;
  }

  if (/^\/(hi|mr)(\/|$)/.test(pathname)) return NextResponse.next();

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved === "hi" || saved === "mr") {
    const url = request.nextUrl.clone();
    url.pathname = `/${saved}${pathname}`;
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.rewrite(new URL(`/en${pathname}${search}`, request.url));
}

export const config = {
  // Skip Next internals, API routes, icons/OG images and any file with an extension.
  matcher: ["/((?!_next|api|opengraph-image|apple-icon|icon|pwa-icon|sitemap|robots|manifest|.*\\..*).*)"],
};
