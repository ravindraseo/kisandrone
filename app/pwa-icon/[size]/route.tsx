import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/LogoMark";

// Web app (manifest) icons: /pwa-icon/192/ and /pwa-icon/512/ — PNG, generated at build.
const SIZES = [192, 512] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return SIZES.map((s) => ({ size: String(s) }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ size: string }> }) {
  const { size } = await params;
  const px = Number(size);
  return new ImageResponse(
    (
      // Full-bleed green background so "maskable" crops look right.
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#144a2f" }}>
        <LogoMark size={Math.round(px * 0.86)} />
      </div>
    ),
    { width: px, height: px },
  );
}
