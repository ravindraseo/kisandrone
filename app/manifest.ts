import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    lang: "en-IN",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfaf3",
    theme_color: "#144a2f",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/pwa-icon/192/", type: "image/png", sizes: "192x192" },
      { src: "/pwa-icon/512/", type: "image/png", sizes: "512x512" },
      { src: "/pwa-icon/512/", type: "image/png", sizes: "512x512", purpose: "maskable" },
    ],
  };
}
