"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { localizePath } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/client";

/**
 * Drop-in replacement for next/link that keeps the visitor in their language:
 * on a Hindi page, href="/about/" becomes "/hi/about/". External links and
 * anchors are left unchanged.
 */
export function LocaleLink({ href, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const locale = useLocale();
  return <Link href={localizePath(locale, href)} {...props} />;
}
