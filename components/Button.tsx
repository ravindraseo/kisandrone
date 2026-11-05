import { LocaleLink as Link } from "./LocaleLink";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-saffron-500 text-forest-950 hover:bg-saffron-600 hover:text-white shadow-sm",
  secondary: "bg-forest-800 text-cream-50 hover:bg-forest-700 shadow-sm",
  ghost: "text-forest-800 ring-1 ring-forest-800/25 hover:bg-forest-50 hover:ring-forest-800/50",
  light: "bg-cream-50 text-forest-900 hover:bg-white ring-1 ring-white/30",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: { variant?: Variant; size?: Size } & ComponentProps<"button">) {
  return <button className={buttonClasses(variant, size, className)} {...rest} />;
}
