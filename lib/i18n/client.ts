"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "./config";
import { dictionaries, type Dictionary } from "./dict";

/** Current locale in client components, read from the URL. */
export function useLocale(): Locale {
  return localeFromPath(usePathname() || "/");
}

export function useT(): Dictionary {
  return dictionaries[useLocale()];
}
