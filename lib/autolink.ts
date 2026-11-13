/**
 * Contextual internal linking + one external authority link per page.
 *
 * Links are added at render time, so content files stay plain text. For each
 * page we walk its paragraphs and list items in order and turn the first
 * natural mention of a topic into a link to that topic's page:
 * - never to the page itself, never twice to the same URL
 * - at most MAX_INTERNAL internal links and exactly one external link per page
 * - at most 2 links per paragraph, never inside [placeholders] or headings
 *
 * To add a topic, add a row to INTERNAL (longer, more specific phrases first).
 */
import type { ArticleBlock } from "@/content/blog";
import { getLinkRules } from "@/content/i18n";
import type { Locale } from "@/lib/i18n/config";
import type { ContentSection } from "@/content/types";

const MAX_INTERNAL = 8;
const MAX_PER_TEXT = 2;

/** Phrase (case-insensitive, whole words) → internal page. Order = priority. */
const INTERNAL: [string, string][] = [
  ["drone spraying price per acre", "/drone-spraying-price-per-acre/"],
  ["price per acre", "/drone-spraying-price-per-acre/"],
  ["cost per acre", "/drone-spraying-price-per-acre/"],
  ["Rajasthan", "/drone-spraying-services-in-rajasthan/"],
  ["drone spraying service", "/drone-spraying-service/"],
  ["group bookings", "/drone-spraying-service/"],
  ["group booking", "/drone-spraying-service/"],
  ["hiring a service", "/drone-spraying-service/"],
  ["hire a service", "/drone-spraying-service/"],
  ["drone service", "/drone-spraying-service/"],
  ["agriculture drone rental", "/agriculture-drone-rental/"],
  ["rental", "/agriculture-drone-rental/"],
  ["renting", "/agriculture-drone-rental/"],
  ["Remote Pilot Certificate", "/drone-pilot-training-for-agriculture/"],
  ["Namo Drone Didi", "/drone-didi-scheme/"],
  ["Kisan Drones", "/kisan-drone-scheme/"],
  ["agricultural drone pilot", "/how-to-become-agricultural-drone-pilot/"],
  ["drone pilot", "/how-to-become-agricultural-drone-pilot/"],
  ["RPTO", "/drone-pilot-training-for-agriculture/"],
  ["certified pilot", "/how-to-become-agricultural-drone-pilot/"],
  ["pilot training", "/agriculture-drone-training/"],
  ["training", "/agriculture-drone-training/"],
  ["certified training", "/agriculture-drone-training/"],
  ["government subsidy", "/government-subsidy-for-farming-drones/"],
  ["scheme support", "/agriculture-drone-subsidy-in-india/"],
  ["drone subsidies", "/agriculture-drone-subsidy-in-india/"],
  ["subsidy", "/kisan-drone-subsidy/"],
  ["10 litre", "/10-litre-agriculture-drone/"],
  ["16 litre", "/16-litre-agriculture-drone/"],
  ["20 litre", "/20-litre-agriculture-drone/"],
  ["battery sets", "/agriculture-drone-battery-price/"],
  ["batteries", "/agriculture-drone-battery-price/"],
  ["spare parts", "/agriculture-drone-spare-parts/"],
  ["spares", "/agriculture-drone-spare-parts/"],
  ["nano urea", "/fertilizer-spraying-drone/"],
  ["foliar", "/fertilizer-spraying-drone/"],
  ["nutrient spray", "/fertilizer-spraying-drone/"],
  ["liquid nutrients", "/fertilizer-spraying-drone/"],
  ["multispectral", "/multispectral-drone/"],
  ["NDVI", "/multispectral-drone/"],
  ["crop monitoring", "/crop-monitoring-drone/"],
  ["monitoring", "/crop-monitoring-drone/"],
  ["field map", "/agricultural-mapping-drone/"],
  ["mapping", "/agricultural-mapping-drone/"],
  ["field survey", "/field-survey-drone/"],
  ["land levelling", "/field-survey-drone/"],
  ["flooded paddy", "/drone-spraying-for-paddy/"],
  ["paddy", "/drone-spraying-for-paddy/"],
  ["wheat", "/drone-spraying-for-wheat/"],
  ["cotton", "/drone-spraying-for-cotton/"],
  ["sugarcane", "/drone-spraying-for-sugarcane/"],
  ["vineyards", "/drone-spraying-for-grapes/"],
  ["grapes", "/drone-spraying-for-grapes/"],
  ["vegetables", "/drone-spraying-for-vegetables/"],
  ["orchards", "/drone-spraying-for-orchards/"],
  ["pesticide spraying", "/pesticide-spraying-drone/"],
  ["drift", "/pesticide-spraying-drone/"],
  ["PPE", "/pesticide-spraying-drone/"],
  ["buffer zones", "/pesticide-spraying-drone/"],
  ["terrain following", "/best-drone-for-spraying-crops/"],
  ["RTK", "/best-drone-for-spraying-crops/"],
  ["nozzles", "/agriculture-spraying-drone/"],
  ["growth stage", "/crop-spraying-drone/"],
  ["crop stage", "/crop-spraying-drone/"],
  ["herbicide", "/crop-spraying-drone/"],
  ["demo", "/best-agriculture-drone-in-india/"],
  ["warranty", "/best-agriculture-drone-in-india/"],
  ["approved pesticides", "/pesticide-spraying-drone/"],
  ["spraying drone", "/agriculture-spraying-drone/"],
  ["crop spraying", "/crop-spraying-drone/"],
  ["drone rules", "/agricultural-drone-in-india/"],
  ["dealer", "/kisan-drone-dealer-near-me/"],
  ["drone company", "/agriculture-drone-company-in-india/"],
  ["purchase price", "/agriculture-drone-price-in-india/"],
  ["price", "/agriculture-drone-price-in-india/"],
  ["buying a drone", "/buying-guide/"],
  ["buy a drone", "/buying-guide/"],
  ["pre-harvest interval", "/pesticide-spraying-drone/"],
  ["residue", "/drone-spraying-for-grapes/"],
  ["integrated pest management", "/drone-spraying-for-cotton/"],
  ["whitefly", "/drone-spraying-for-cotton/"],
  ["water-sensitive", "/best-drone-for-spraying-crops/"],
  ["orthomosaic", "/agricultural-mapping-drone/"],
  ["elevation", "/field-survey-drone/"],
  ["scouting", "/crop-monitoring-drone/"],
  ["scout", "/crop-monitoring-drone/"],
  ["small plots", "/10-litre-agriculture-drone/"],
  ["mid-size", "/16-litre-agriculture-drone/"],
  ["calibration", "/agriculture-drone-training/"],
  ["insurance", "/agriculture-drone-rental/"],
  ["labour", "/drone-for-farming/"],
  ["weather", "/crop-spraying-drone/"],
  ["coverage", "/drone-spraying-vs-manual-spraying/"],
  ["manual spraying", "/drone-spraying-vs-manual-spraying/"],
  ["knapsack", "/drone-spraying-vs-manual-spraying/"],
  ["eligibility", "/how-to-check-drone-subsidy-eligibility/"],
  ["compare quotes", "/how-agriculture-drone-prices-are-set/"],
  ["quotes", "/how-agriculture-drone-prices-are-set/"],
  ["how drones work", "/how-a-kisan-drone-works/"],
  ["parts", "/how-a-kisan-drone-works/"],
  ["under a scheme", "/agriculture-drone-with-subsidy/"],
  ["16 litre", "/16-litre-agriculture-drone/"],
  ["company", "/agriculture-drone-company-in-india/"],
  ["crop-wise", "/crops/"],
  ["each crop", "/crops/"],
  ["drone services", "/products-services/"],
  ["schemes", "/schemes-training/"],
  ["articles", "/blog/"],
  ["enquiry form", "/contact/"],
  ["contact us", "/contact/"],
  ["call us", "/contact/"],
  ["our team", "/about/"],
  ["blog", "/blog/"],
  ["kisan drone", "/kisan-drone/"],
  ["agriculture drone", "/kisan-drone/"],
  ["drone spraying", "/drone-spraying-service/"],
  ["benefits", "/drone-for-farming/"],
];

/** Phrase → official/authoritative site. The first match on a page wins. */
const EXTERNAL: [string, string][] = [
  ["Digital Sky", "https://digitalsky.dgca.gov.in/"],
  ["CIB&RC", "https://ppqs.gov.in/"],
  ["Drone Rules", "https://www.civilaviation.gov.in/"],
  ["Soil Health Card", "https://soilhealth.dac.gov.in/"],
  ["APEDA", "https://apeda.gov.in/"],
  ["National Horticulture Board", "https://nhb.gov.in/"],
  ["E-Waste", "https://cpcb.nic.in/"],
  ["rural livelihood mission", "https://aajeevika.gov.in/"],
  ["approved for drone", "https://ppqs.gov.in/"],
  ["type certificate", "https://digitalsky.dgca.gov.in/"],
  ["type-certified", "https://digitalsky.dgca.gov.in/"],
  ["farm mechanisation portal", "https://agrimachinery.nic.in/"],
  ["Ministry of Agriculture", "https://agriwelfare.gov.in/"],
  ["Krishi Vigyan Kendra", "https://kvk.icar.gov.in/"],
  ["KVK", "https://kvk.icar.gov.in/"],
  ["state agriculture department", "https://agriwelfare.gov.in/"],
  ["agriculture department", "https://agriwelfare.gov.in/"],
  ["agronomist", "https://kvk.icar.gov.in/"],
  ["official source", "https://agriwelfare.gov.in/"],
  ["registered", "https://digitalsky.dgca.gov.in/"],
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// Unicode-aware word boundaries, so Devanagari phrases never match inside longer words.
const compile = (rows: [string, string][]): Rule[] =>
  rows.map(([phrase, href]) => ({
    re: new RegExp(`(^|[^\\p{L}\\p{M}\\p{N}/])(${escape(phrase)})(?![\\p{L}\\p{M}\\p{N}])`, "iu"),
    href,
  }));

type Rule = { re: RegExp; href: string };

const compiled = new Map<Locale, { internal: Rule[]; external: Rule[] }>();
/** English rules are defined above; Hindi/Marathi phrases come from their content packs. */
function rulesFor(locale: Locale) {
  if (!compiled.has(locale)) {
    const custom = locale === "en" ? undefined : getLinkRules(locale);
    compiled.set(locale, {
      internal: compile(custom?.internal ?? INTERNAL),
      external: compile(custom?.external ?? EXTERNAL),
    });
  }
  return compiled.get(locale)!;
}

/** Stateful linker for one page. */
class PageLinker {
  private used = new Set<string>();
  private internalCount = 0;
  private hasExternal = false;
  private internalRules: Rule[];
  private externalRules: Rule[];

  constructor(private selfPath: string, locale: Locale) {
    this.used.add(selfPath);
    const r = rulesFor(locale);
    this.internalRules = r.internal;
    this.externalRules = r.external;
  }

  link(text: string): string {
    // Leave texts with placeholders or existing links untouched.
    if (text.includes("[")) return text;
    let out = text;
    let added = 0;
    if (!this.hasExternal) {
      const r = this.apply(out, this.externalRules);
      if (r) {
        out = r;
        this.hasExternal = true;
        added++;
      }
    }
    while (added < MAX_PER_TEXT && this.internalCount < MAX_INTERNAL) {
      const r = this.apply(out, this.internalRules);
      if (!r) break;
      out = r;
      this.internalCount++;
      added++;
    }
    return out;
  }

  private apply(text: string, rules: Rule[]): string | null {
    for (const { re, href } of rules) {
      if (this.used.has(href)) continue;
      // Search only in plain-text stretches (outside links added earlier in this text).
      const segments = text.split(/(\[[^\]]+\]\([^)]+\))/);
      for (let i = 0; i < segments.length; i += 2) {
        const m = segments[i].match(re);
        if (!m || m.index === undefined) continue;
        const start = m.index + m[1].length;
        segments[i] = `${segments[i].slice(0, start)}[${m[2]}](${href})${segments[i].slice(start + m[2].length)}`;
        this.used.add(href);
        return segments.join("");
      }
    }
    return null;
  }
}

/** Adds contextual links to section paragraphs, list items and sub-sections. */
export function linkSections(sections: ContentSection[], selfPath: string, locale: Locale): ContentSection[] {
  const l = new PageLinker(selfPath, locale);
  return sections.map((s) => ({
    ...s,
    body: s.body?.map((t) => l.link(t)),
    list: s.list?.map((t) => l.link(t)),
    note: s.note && l.link(s.note),
    table: s.table && { ...s.table, rows: s.table.rows.map((row) => row.map((cell, i) => (i === 0 ? cell : l.link(cell)))) },
    subsections: s.subsections?.map((sub) => ({
      ...sub,
      body: sub.body?.map((t) => l.link(t)),
      list: sub.list?.map((t) => l.link(t)),
    })),
  }));
}

/** Adds contextual links to blog article paragraphs and list items. */
export function linkArticle(body: ArticleBlock[], selfPath: string, locale: Locale): ArticleBlock[] {
  const l = new PageLinker(selfPath, locale);
  return body.map((b) => {
    if (b.type === "p") return { ...b, text: l.link(b.text) };
    if (b.type === "ul") return { ...b, items: b.items.map((t) => l.link(t)) };
    return b;
  });
}
