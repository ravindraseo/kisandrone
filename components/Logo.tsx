import { LogoMark } from "./LogoMark";

/** Full logo: mark + wordmark + sub-label. */
export function Logo({ invert = false, sub = "Agri Drones" }: { invert?: boolean; sub?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={42} />
      <span className="flex flex-col leading-none">
        <span className={`text-[1.35rem] font-extrabold ${invert ? "text-cream-50" : "text-forest-900"}`}>Kisan Drone</span>
        <span
          className={`mt-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] ${invert ? "text-saffron-200" : "text-saffron-700"}`}
        >
          {sub}
        </span>
      </span>
    </span>
  );
}
