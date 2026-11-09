import type { Metadata, Viewport } from "next";
import { Mukta } from "next/font/google";
import { notFound } from "next/navigation";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { htmlLang, isLocale, locales, ogLocale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dict";
import { setRequestLocale } from "@/lib/i18n/server";
import { getNav } from "@/lib/nav";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import "../globals.css";

// Mukta covers both Latin and Devanagari (Hindi and Marathi).
const body = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = dictionaries[isLocale(lang) ? lang : "en"];
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t.meta.defaultTitle, template: `%s | ${siteConfig.name}` },
    description: t.meta.description,
    applicationName: siteConfig.name,
    openGraph: { type: "website", siteName: siteConfig.name, locale: ogLocale[isLocale(lang) ? lang : "en"] },
    twitter: { card: "summary_large_image" },
    verification: { google: "j3hwZGPGxVkVWJ1zJ70Sp0-suqZvR3CM20R-KFC5guY" },
    robots: { index: true, follow: true },
    formatDetection: { telephone: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#144a2f",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  setRequestLocale(lang);
  const nav = getNav(lang);

  return (
    // suppressHydrationWarning: browser extensions (Grammarly, translators, password managers)
    // add attributes to <html>/<body> before React loads. Only these two tags are exempt.
    <html lang={htmlLang[lang]} className={body.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <Header navGroups={nav.groups} secondaryNav={nav.secondary} />
        <main id="main" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <JsonLd data={[organizationSchema(), websiteSchema(lang)]} />
      </body>
    </html>
  );
}
