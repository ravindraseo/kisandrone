import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE } from "@/lib/i18n/config";

/**
 * Language routing.
 *
 * - English is the default and is served at root URLs (/about/) — internally
 *   rewritten to /en/about/ so every page lives under app/[lang]/.
 * - /hi/… and /mr/… are served as they are.
 * - /en/… redirects to the root URL so English has a single canonical address.
 * - There is no visible language selector, so English URLs always show English.
 *   A kd_lang cookie left over from the earlier selector is deleted.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (/^\/(hi|mr)(\/|$)/.test(pathname)) return NextResponse.next();

  const res = NextResponse.rewrite(new URL(`/en${pathname}${search}`, request.url));
  if (request.cookies.has(LOCALE_COOKIE)) res.cookies.delete(LOCALE_COOKIE);
  return res;
}

export const config = {
  // Skip Next internals, API routes, icons/OG images and any file with an extension.
  matcher: ["/((?!_next|api|opengraph-image|apple-icon|icon|pwa-icon|sitemap|robots|manifest|.*\\..*).*)"],
};
