import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/LogoMark";

// Apple touch icon (180×180), generated from the logo mark at build time.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#144a2f" }}>
        <LogoMark size={180} />
      </div>
    ),
    size,
  );
}
