import { LocaleLink as Link } from "./LocaleLink";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-forest-900/10 bg-white p-6 shadow-[0_1px_2px_rgba(15,56,36,0.05)] ${className}`}>
      {children}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
  href,
  linkLabel,
}: {
  icon: IconName;
  title: string;
  children: ReactNode;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 flex-1 text-muted">{children}</div>
      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
        >
          {linkLabel ?? "Learn more"}
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </Card>
  );
}

export function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Notice({
  title,
  children,
  tone = "info",
}: {
  title?: string;
  children: ReactNode;
  tone?: "info" | "warning";
}) {
  const styles =
    tone === "warning"
      ? "border-saffron-500/50 bg-saffron-100 text-saffron-700"
      : "border-forest-600/30 bg-forest-50 text-forest-900";
  return (
    <div role="note" className={`flex gap-3 rounded-xl border p-4 text-sm ${styles}`}>
      <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0" />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        <div className={title ? "mt-1" : ""}>{children}</div>
      </div>
    </div>
  );
}
