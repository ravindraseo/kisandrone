import { LocaleLink as Link } from "./LocaleLink";
import { Fragment } from "react";
import { Placeholder } from "./Placeholder";
import { getT } from "@/lib/i18n/server";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/;
const TOKENS = /(\[[^\]]+\]\([^)\s]+\)|\[[^\]]+\])/g;

/**
 * Renders text with two inline features:
 * - [label](/path/) or [label](https://…) → internal or external link
 * - [placeholder] → highlighted placeholder for editors
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKENS);
  const newWindow = getT().common.newWindow;
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(LINK);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href} className="font-semibold text-forest-700 underline decoration-forest-300 underline-offset-2 hover:decoration-forest-700">
              {label}
            </Link>
          ) : (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline decoration-forest-300 underline-offset-2 hover:decoration-forest-700"
            >
              {label}
              <span className="sr-only"> {newWindow}</span>
            </a>
          );
        }
        if (/^\[[^\]]+\]$/.test(part)) return <Placeholder key={i} value={part} />;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
