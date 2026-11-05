import { isPlaceholder } from "@/lib/site";

/**
 * Renders a value. If the value is still a [placeholder], it is highlighted so
 * editors can spot what still needs to be filled in before launch.
 */
export function Placeholder({ value, className = "" }: { value: string; className?: string }) {
  if (!isPlaceholder(value)) return <span className={className}>{value}</span>;
  return (
    <span
      className={`rounded border border-dashed border-saffron-500/70 bg-saffron-100 px-1.5 py-0.5 text-[0.9em] text-saffron-700 ${className}`}
      title="Placeholder — replace with verified information"
    >
      {value}
    </span>
  );
}

export function ExampleBadge({ label = "Example" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-saffron-500/70 bg-saffron-100 px-2.5 py-0.5 text-xs font-semibold text-saffron-700">
      {label}
    </span>
  );
}
