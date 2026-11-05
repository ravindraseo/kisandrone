import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/content/images";
import { getT } from "@/lib/i18n/server";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
  labelledBy,
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "cream" | "forest" | "white";
  id?: string;
  labelledBy?: string;
  /** Less vertical space (used on the home page) */
  tight?: boolean;
}) {
  const tones = {
    default: "",
    cream: "bg-cream-100",
    white: "bg-white",
    forest: "bg-forest-900 text-cream-50",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tight ? "py-8 sm:py-10" : "py-16 sm:py-20"} ${tones[tone]} ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  invert = false,
  tight = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  invert?: boolean;
  tight?: boolean;
}) {
  return (
    <div className={`${tight ? "mb-5 sm:mb-6" : "mb-10"} max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${invert ? "text-saffron-200" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className={`text-2xl font-bold sm:text-3xl ${invert ? "text-cream-50" : ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`${tight ? "mt-2" : "mt-4"} text-lg ${invert ? "text-cream-100/85" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

/** Top-of-page banner used on all inner pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
  breadcrumbs,
  image,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  /** Usually <Breadcrumbs invert items={...} /> */
  breadcrumbs?: ReactNode;
  /** Optional product photo shown beside the title */
  image?: SiteImage;
}) {
  return (
    <header className="relative overflow-hidden bg-forest-900 text-cream-50">
      <FieldRows />
      <div className="container-site relative py-8 sm:py-14">
        {breadcrumbs && <div className="mb-5 sm:mb-6">{breadcrumbs}</div>}
        <div className={image ? "grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_260px] lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12" : ""}>
          <div className="min-w-0">
            {eyebrow && <p className="eyebrow mb-3 text-saffron-200">{eyebrow}</p>}
            <h1 className="max-w-4xl text-[1.7rem] font-bold leading-snug text-cream-50 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              {title}
            </h1>
            {intro && <p className="mt-4 max-w-2xl text-base text-cream-100/85 sm:mt-5 sm:text-lg">{intro}</p>}
            {children && <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">{children}</div>}
          </div>
          {image && (
            <figure className="mx-auto w-full max-w-[280px] rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5 sm:max-w-xs md:max-w-none">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 260px, 280px"
                className="h-auto w-full"
                priority
              />
              <figcaption className="px-1 pt-1 text-center text-xs text-muted">{image.label} — {getT().common.examplePhoto}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </header>
  );
}

function FieldRows() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      preserveAspectRatio="none"
      viewBox="0 0 400 200"
    >
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={i}
          d={`M${-60 + i * 40} 200 Q ${120 + i * 22} 120 ${260 + i * 14} 0`}
          stroke="#f8f1e1"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}
