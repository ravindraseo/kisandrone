/**
 * Kisan Drone logo mark: a drone hovering over curved field rows, with a saffron
 * sun. Pure SVG with no hooks, so it also renders inside next/og ImageResponse
 * (app icons). Keep public/logo.svg and app/icon.svg in sync if you change it.
 */
export function LogoMark({ size = 40, title }: { size?: number; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="48" height="48" rx="12" fill="#144a2f" />
      <circle cx="36" cy="12.5" r="4.5" fill="#e38b2c" />
      <path d="M6 41c10-7 26-7 36 0" stroke="#e38b2c" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M8.5 35c9.5-5.2 21.5-5.2 31 0" stroke="#c7dfcd" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M12 29.5c7.5-3.4 16.5-3.4 24 0" stroke="#c7dfcd" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.6" />
      <g stroke="#f8f1e1" strokeLinecap="round" fill="none">
        <path d="M14 18h20" strokeWidth="2.4" />
        <path d="M14 18v-3.5M34 18v-3.5" strokeWidth="2" />
        <path d="M9.5 14.5h9M29.5 14.5h9" strokeWidth="2.2" />
      </g>
      <rect x="19" y="16.5" width="10" height="6" rx="2" fill="#f8f1e1" />
      <circle cx="24" cy="19.5" r="1.4" fill="#e38b2c" />
      <g fill="#f6d4aa">
        <circle cx="21" cy="25.3" r="0.95" />
        <circle cx="24" cy="26.2" r="0.95" />
        <circle cx="27" cy="25.3" r="0.95" />
      </g>
    </svg>
  );
}
