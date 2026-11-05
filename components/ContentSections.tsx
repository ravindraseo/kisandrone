import { Fragment, type ReactNode } from "react";
import type { ContentSection } from "@/content/types";
import { Notice } from "./Card";
import { Icon } from "./Icon";
import { RichText } from "./RichText";

/**
 * Renders data-driven content: H2 sections with paragraphs, bullet lists,
 * H3 sub-sections, comparison tables and notes. `slots` inserts extra blocks
 * (an image, a call-to-action) after the section with that index.
 */
export function ContentSections({ sections, slots = {} }: { sections: ContentSection[]; slots?: Record<number, ReactNode> }) {
  return (
    <div className="space-y-10">
      {sections.map((s, i) => (
        <Fragment key={s.heading}>
          <section aria-labelledby={slugId(s.heading)}>
            <h2 id={slugId(s.heading)} className="text-2xl font-bold">
              {s.heading}
            </h2>
            <Paragraphs items={s.body} />
            <Bullets items={s.list} />
            {s.subsections?.map((sub) => (
              <div key={sub.heading} className="mt-6">
                <h3 className="text-xl font-semibold text-forest-900">{sub.heading}</h3>
                <Paragraphs items={sub.body} />
                <Bullets items={sub.list} />
              </div>
            ))}
            {s.table && (
              <div className="mt-5 overflow-x-auto rounded-xl border border-forest-900/10 bg-white">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <caption className="px-4 pt-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                    {s.table.caption}
                  </caption>
                  <thead>
                    <tr className="border-b border-forest-900/10">
                      {s.table.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-bold text-forest-900">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row) => (
                      <tr key={row.join("|")} className="border-b border-forest-900/5 last:border-0 odd:bg-cream-50/60">
                        {row.map((cell, ci) =>
                          ci === 0 ? (
                            <th key={ci} scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                              <RichText text={cell} />
                            </th>
                          ) : (
                            <td key={ci} className="px-4 py-3 align-top text-ink/90">
                              <RichText text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.note && (
              <div className="mt-5">
                <Notice tone="warning">
                  <RichText text={s.note} />
                </Notice>
              </div>
            )}
          </section>
          {slots[i]}
        </Fragment>
      ))}
    </div>
  );
}

function Paragraphs({ items }: { items?: string[] }) {
  if (!items) return null;
  return items.map((p) => (
    <p key={p} className="mt-3 text-[1.0625rem] text-ink/90">
      <RichText text={p} />
    </p>
  ));
}

function Bullets({ items }: { items?: string[] }) {
  if (!items) return null;
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-forest-600" />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function slugId(text: string) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return `s-${h.toString(36)}`;
}
