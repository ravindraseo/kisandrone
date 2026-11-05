import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Set NEXT_PUBLIC_ALLOW_INDEXING=false on staging/preview deployments to block crawlers.
  const allow = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";
  return {
    rules: allow ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
