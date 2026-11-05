import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const body = Mukta({ subsets: ["latin", "devanagari"], weight: ["400", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Page not found | Kisan Drone",
  robots: { index: false },
};

/** 404 for URLs that match no route at all (shown in all three languages). */
export default function GlobalNotFound() {
  return (
    <html lang="en-IN" className={body.variable}>
      <body className="flex min-h-screen items-center justify-center bg-cream-50">
        <main className="container-site py-20 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Page not found</h1>
          <p className="mt-2 text-lg text-muted" lang="hi">पेज नहीं मिला · <span lang="mr">पेज सापडले नाही</span></p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="inline-block rounded-full bg-saffron-500 px-5 py-2.5 font-bold text-forest-950">
                Home
              </Link>
            </li>
            <li>
              <Link href="/hi/" lang="hi" className="inline-block rounded-full px-5 py-2.5 font-semibold text-forest-800 ring-1 ring-forest-900/20">
                होम (हिन्दी)
              </Link>
            </li>
            <li>
              <Link href="/mr/" lang="mr" className="inline-block rounded-full px-5 py-2.5 font-semibold text-forest-800 ring-1 ring-forest-900/20">
                होम (मराठी)
              </Link>
            </li>
          </ul>
        </main>
      </body>
    </html>
  );
}
