import { LocaleLink as Link } from "./LocaleLink";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. First crumb should be Home. */
export function Breadcrumbs({ items, invert = false }: { items: Crumb[]; invert?: boolean }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-sm ${invert ? "text-cream-100/80" : "text-muted"}`}>
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={invert ? "text-cream-50" : "text-forest-900"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className={`underline-offset-2 hover:underline ${invert ? "hover:text-cream-50" : "hover:text-forest-800"}`}>
                      {c.name}
                    </Link>
                    <span aria-hidden="true">›</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
