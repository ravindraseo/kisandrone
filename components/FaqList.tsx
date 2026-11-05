import type { Faq } from "@/content/types";
import { faqSchema } from "@/lib/schema";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { RichText } from "./RichText";

/**
 * Accessible FAQ accordion built on native <details>/<summary> (works with
 * keyboard and without JavaScript). Emits FAQPage JSON-LD for exactly the FAQs
 * shown here, skipping answers that still contain [placeholders].
 */
export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  if (faqs.length === 0) return null;
  return (
    <>
      <div className="divide-y divide-forest-900/10 rounded-2xl border border-forest-900/10 bg-white">
        {faqs.map((faq, i) => (
          <details key={faq.q} className="group px-5 sm:px-6" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[1.05rem] font-semibold text-forest-950 [&::-webkit-details-marker]:hidden">
              <span>{faq.q}</span>
              <Icon name="chevronDown" className="h-5 w-5 shrink-0 text-forest-600 transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-5 text-muted">
              <RichText text={faq.a} />
            </p>
          </details>
        ))}
      </div>
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
    </>
  );
}
