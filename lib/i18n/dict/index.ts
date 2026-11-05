import type { Locale } from "../config";
import { en, type Dictionary } from "./en";
import { hi } from "./hi";
import { mr } from "./mr";

export type { Dictionary };
export const dictionaries: Record<Locale, Dictionary> = { en, hi, mr };
