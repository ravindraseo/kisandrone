import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/LogoMark";
import { siteConfig } from "@/lib/site";

// Default social share image for all pages, generated locally at build time.
// To use a photo instead, add app/opengraph-image.jpg (1200×630) and delete this file.
export const alt = "Kisan Drone — agriculture drone services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(160deg, #144a2f 0%, #0a2619 100%)",
          color: "#fdfaf3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <LogoMark size={96} />
          <div style={{ fontSize: 52, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
            Agriculture Drones &amp; Drone Spraying Services
          </div>
          <div style={{ fontSize: 30, marginTop: 22, color: "#f6d4aa" }}>
            Products · Services · Buying guide · Schemes · Training
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{`Call / WhatsApp: ${siteConfig.contact.phoneDisplay}`}</div>
          <div style={{ height: 10, width: 260, background: "#e38b2c", borderRadius: 5, display: "flex" }} />
        </div>
      </div>
    ),
    size,
  );
}
