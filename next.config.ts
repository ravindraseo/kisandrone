import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Hide the Next.js dev tools button/panel ("N" bottom-left) during `npm run dev`.
  // It never appears in production builds anyway.
  devIndicators: false,
  // All URLs end in "/", e.g. /drone-spraying-for-paddy/
  trailingSlash: true,
  // Pages live under app/[lang]/ (English, Hindi, Marathi), so unmatched URLs use app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  // For Docker/container deploys: NEXT_OUTPUT=standalone npm run build
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
  async redirects() {
    return [
      // Old nested URLs → flat URLs (every page URL is just its name)
      {
        source: "/:category(kisan-drone|products-services|buying-guide|schemes-training|crops)/:slug/",
        destination: "/:slug/",
        permanent: true,
      },
      // Old Hindi-transliterated blog slugs → English slugs
      { source: "/kisan-drone-kaise-kaam-karta-hai/", destination: "/how-a-kisan-drone-works/", permanent: true },
      { source: "/blog/kisan-drone-kaise-kaam-karta-hai/", destination: "/how-a-kisan-drone-works/", permanent: true },
      { source: "/agriculture-drone-price-kaise-tay-hoti-hai/", destination: "/how-agriculture-drone-prices-are-set/", permanent: true },
      { source: "/blog/agriculture-drone-price-kaise-tay-hoti-hai/", destination: "/how-agriculture-drone-prices-are-set/", permanent: true },
      { source: "/drone-se-chhidkav-vs-haath-se-chhidkav/", destination: "/drone-spraying-vs-manual-spraying/", permanent: true },
      { source: "/blog/drone-se-chhidkav-vs-haath-se-chhidkav/", destination: "/drone-spraying-vs-manual-spraying/", permanent: true },
      { source: "/drone-subsidy-patrata-kaise-jaanche/", destination: "/how-to-check-drone-subsidy-eligibility/", permanent: true },
      { source: "/blog/drone-subsidy-patrata-kaise-jaanche/", destination: "/how-to-check-drone-subsidy-eligibility/", permanent: true },
      { source: "/blog/:slug/", destination: "/:slug/", permanent: true },
      // URLs from the first site version
      { source: "/drones/", destination: "/products-services/", permanent: true },
      { source: "/services/", destination: "/products-services/", permanent: true },
      { source: "/pricing/", destination: "/agriculture-drone-price-in-india/", permanent: true },
      { source: "/subsidy-schemes/", destination: "/schemes-training/", permanent: true },
      { source: "/training/", destination: "/agriculture-drone-training/", permanent: true },
      { source: "/locations/", destination: "/contact/", permanent: true },
      { source: "/service-areas/", destination: "/contact/", permanent: true },
    ];
  },
};

export default nextConfig;
