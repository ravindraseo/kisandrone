# Kisan Drone — Website

An English, SEO-focused, responsive website about agriculture drones, drone spraying services, buying
guides, government schemes and drone pilot training. Built with Next.js 16 (App Router), TypeScript and
Tailwind CSS v4.

- Website: **https://www.kisandrone.co.in**
- Phone / WhatsApp: **+91 82828 02150** · Email: **enquiry@kisandrone.co.in**
- Head office: H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309
- Hours: Monday to Saturday, 9:30 AM – 7:00 PM
- All of this lives in `lib/site.ts`
- No API keys, database or paid services required

---

## 1. Running locally

Requires **Node.js 20.9 or newer** (Node 22 LTS recommended).

```bash
npm install
npm run dev          # http://localhost:3000
```

Other commands:

```bash
npm run build        # production build (all 60+ pages are generated statically)
npm run start        # production server, port 3000
npm run typecheck    # TypeScript check
```

> At build time, `next/font/google` downloads the Mukta font and serves it with the site, so the first
> build needs internet access. After that, no external font requests are made.

---

## 2. Environment variables

Copy `.env.example` to `.env.local`, or set these in your hosting provider's settings:

| Variable | Required? | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No (production builds default to `https://www.kisandrone.co.in`) | Live domain, e.g. `https://www.kisandrone.co.in` (no trailing `/`). Used for canonical URLs, the sitemap, robots and Open Graph. |
| `NEXT_PUBLIC_ALLOW_INDEXING` | No | Set to `false` on staging/preview so Google does not index it. Default `true`. |
| `NEXT_OUTPUT` | No | `standalone` builds a small server bundle for Docker (already set in the Dockerfile). |

`NEXT_PUBLIC_*` values are baked into the code **at build time**. Rebuild/redeploy after changing them.

---

## 3. Deploying to the cloud

### Option A — Vercel (easiest)

1. Push the code to a GitHub/GitLab repository.
2. In Vercel, choose **New Project** → select the repository. The framework is detected as **Next.js**.
3. Under Environment Variables, set `NEXT_PUBLIC_SITE_URL` to your domain.
4. Click **Deploy**. Then add your domain under Settings → Domains.

Build command `npm run build`, Next.js default output — nothing to change.

### Option B — Docker (Google Cloud Run, AWS App Runner/ECS, Azure Container Apps, Render, Railway, VPS)

```bash
docker build -t kisan-drone --build-arg NEXT_PUBLIC_SITE_URL=https://www.kisandrone.co.in .
docker run -p 3000:3000 kisan-drone
```

- The container listens on `0.0.0.0` at `PORT` (default 3000). Platforms such as Cloud Run set `PORT` themselves.
- The image runs on Node 22 Alpine as a non-root user.

Google Cloud Run example (the site URL is baked in at build time, so build and push the image first):

```bash
docker build -t asia-south1-docker.pkg.dev/<PROJECT>/<REPO>/kisan-drone --build-arg NEXT_PUBLIC_SITE_URL=https://www.kisandrone.co.in .
docker push asia-south1-docker.pkg.dev/<PROJECT>/<REPO>/kisan-drone
gcloud run deploy kisan-drone --image asia-south1-docker.pkg.dev/<PROJECT>/<REPO>/kisan-drone --region asia-south1 --allow-unauthenticated
```

### Option C — Any Node server

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://www.kisandrone.co.in npm run build
PORT=3000 npm run start
```

Run the process with PM2/systemd and put Nginx/Caddy in front for HTTPS.

### Post-deploy checklist

- Open `https://<domain>/robots.txt` and `/sitemap.xml` and check the URLs use your domain.
- Add the property in Google Search Console and submit the sitemap.
- View a page's source: `<link rel="canonical">` should point to the correct domain.
- Check structured data with the [Rich Results Test](https://search.google.com/test/rich-results).

---

## 4. Routes (flat URLs)

Every page URL is just its name — no category folders, e.g. `/drone-spraying-for-paddy/`
(not `/crops/drone-spraying-for-paddy/`). The category relationship shows in breadcrumbs and menus.

| URL | Page |
| --- | --- |
| `/` | Home — introduction to all categories, CTAs, FAQ |
| `/kisan-drone/`, `/products-services/`, `/buying-guide/`, `/schemes-training/`, `/crops/` | 5 category landing pages |
| `/agriculture-drone-price-in-india/`, `/agricultural-drone-in-india/`, `/drone-for-farming/` | Main Keywords |
| `/agriculture-spraying-drone/` … `/multispectral-drone/` (10) | Products & Services |
| `/best-agriculture-drone-in-india/` … `/agriculture-drone-spare-parts/` (10) | Buying & Comparison |
| `/kisan-drone-subsidy/` … `/how-to-become-agricultural-drone-pilot/` (8) | Schemes & Training |
| `/drone-spraying-for-paddy/` … `/drone-spraying-for-orchards/` (7) | Crop-Specific |
| `/blog/` and `/<article-slug>/` | Blog index and 4 articles, e.g. `/how-a-kisan-drone-works/` |
| `/about/`, `/contact/` | About and contact/enquiry form |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | SEO and web app files |

The full list is in `/sitemap.xml`. All these pages come from a single route, `app/[lang]/[slug]/page.tsx` (`lib/routes.ts`).
The build fails if two pages share a slug, or if a slug clashes with a fixed page (`about`, `contact`, `blog`).

Old URLs 308-redirect to the new ones (`next.config.ts`): nested URLs such as `/crops/<slug>/`, `/blog/<slug>/`,
the earlier Hindi-transliterated blog slugs (e.g. `/kisan-drone-kaise-kaam-karta-hai/`), `/service-areas/` and
`/locations/` (→ `/contact/`), and the first version's URLs (`/drones`, `/pricing`, etc.).

Synonym keywords (Kisan drone, Agriculture drone, Farming drone, Drone for farming/agriculture) share one
landing page, `/kisan-drone/`, so similar pages don't compete with each other in rankings.

### Languages: English, Hindi and Marathi

Every page exists in three languages. English is the default and keeps the plain URLs; Hindi and Marathi
add a prefix:

| Language | URL example |
| --- | --- |
| English (default) | `/drone-spraying-for-paddy/` |
| हिन्दी | `/hi/drone-spraying-for-paddy/` |
| मराठी | `/mr/drone-spraying-for-paddy/` |

- **Language selector:** in the header (EN · हि · म) and at the top of the mobile menu. It links to the same page in the other language.
- **Remembering the choice:** choosing a language sets the `kd_lang` cookie for one year. Visitors who chose Hindi or Marathi and later open a plain English URL are redirected to their language; choosing English sets it back. Logic: `proxy.ts`.
- **SEO:** each language version has its own canonical URL, `hreflang` alternates (`en-IN`, `hi-IN`, `mr-IN`, `x-default`), translated title, description, keywords and schema. The sitemap lists all three versions.

Where the text lives:

| Files | What they translate |
| --- | --- |
| `lib/i18n/dict/en.ts`, `hi.ts`, `mr.ts` | Interface text: menu, buttons, headings, form labels and messages, footer, 404 page |
| `content/i18n/hi/*.ts`, `content/i18n/mr/*.ts` | Page content: every keyword page, category page, blog article, home, About/Contact/Blog, image alt text and captions |
| `content/i18n/<lang>/links.ts` | The phrases `lib/autolink.ts` turns into internal links in that language |

English content in `content/` stays the source of truth for structure (slugs, images, related links, CTA
topic). The translation files contain only the translated text, keyed by slug. **The build fails if any page,
article, image caption or link list is missing in Hindi or Marathi**, so a new English page also needs its
two translations. Keep `[placeholders]` in brackets in every language; fill them with verified information.

---

## 5. Editing content and SEO

All content lives in TypeScript data files — edit without touching the layout:

| File | What it controls |
| --- | --- |
| `lib/site.ts` | Brand name, phone, WhatsApp message, email, address, hours, social links |
| `content/categories.ts` | 5 category landing pages: H1, SEO title/description, keywords, content, FAQ, header label |
| `content/pages/*.ts` | Every keyword page: `seo.title`, `seo.description`, `seo.keywords`, H1, intro, sections, FAQ, CTA, related links |
| `content/home.ts` | Home page SEO and FAQ |
| `content/schemes-meta.ts` | The "Information last reviewed" date and official links on scheme pages |
| `content/blog.ts` | Blog articles |
| `content/images.ts` | Product photos (`public/images/*.webp`), alt text and captions |
| `content/editorial.ts` | "About this guide" box (E-E-A-T): author, reviewer, last-updated date and sources |

To add a keyword page, copy an entry in the relevant `content/pages/<category>.ts` and give it a new, unique
`slug` — that becomes the page URL (`/<slug>/`). The route, header menu, footer, sidebar, sitemap and
breadcrumbs update automatically. The build fails if any page has fewer than 5 FAQs or is missing its
title, description or keywords.

### Content depth, AEO/GEO and E-E-A-T

Every ranking page (home, 5 category pages, 38 keyword pages, 4 articles) follows the same structure:

- **900+ words of its own content.** The build fails (`lib/routes.ts`, `MIN_WORDS`) if the intro, quick answer, sections and FAQs add up to less. Shared blocks such as the header, CTA and "About this guide" are not counted.
- **Quick answer and key takeaways** at the top (`quickAnswer`, `takeaways`): a direct 40–70 word answer for Google snippets and AI answer engines. It is marked as `speakable` in the schema.
- **H1 → H2 → H3 structure:** sections can have `subsections` (H3) and comparison `table`s.
- **Two WebP drone photos** (header + inline), a **mid-article CTA** (call / WhatsApp / enquiry form) and the closing CTA band.
- **About this guide** (`components/Guide.tsx`): written by, reviewed by, last updated, editorial policy and official sources.
- **Schema:** `WebPage` with `dateModified`, author/publisher, primary image, keywords and `speakable`; plus `Service`, `Article`, `FAQPage` and `BreadcrumbList` where relevant.

- **Internal and external links** are added automatically at render time by `lib/autolink.ts`: the first natural mention of a topic (e.g. “battery sets”, “nano urea”, “Remote Pilot Certificate”) links to that topic’s page — up to 8 per page, never to the page itself or twice to the same URL — plus exactly one link to an official source (Digital Sky, CIB&RC, Ministry of Civil Aviation, KVK, APEDA, etc.). To link a new page, add its phrase to `INTERNAL`. You can also write links by hand in content as `[label](/path/)`.

When you update content, change `editorial.updated` / `updatedLabel` in `content/editorial.ts`.

### Structured data (JSON-LD)

- All pages: `Organization` (name, URL, logo, phone) and `WebSite`
- Inner pages: `BreadcrumbList`
- Service pages: `Service`; others: `WebPage`; blog: `Article`
- `FAQPage` only where the same FAQs are visible on the page; answers containing `[placeholders]` are dropped from the schema automatically
- `LocalBusiness` (the Noida head office `PostalAddress`, phone, email) — from `lib/site.ts`
- No ratings, reviews, prices or certifications are added to the schema

Note: Google now shows FAQ rich results mostly for government/health sites. The FAQPage schema is still valid.

---

## 6. Placeholders — what still needs filling in

Every value in `[square brackets]` is a placeholder and appears on the site in an orange dashed box.
Search the project for `[` to find them all.

| Information | Where to fill it in |
| --- | --- |
| Social media links | `lib/site.ts` |
| Company introduction, founding year, legal name, certificates, role (manufacturer/dealer/service) | `app/about/page.tsx` |
| Scheme information review date, state agriculture department link | `content/schemes-meta.ts` |
| Training: RPTO authorisation/partner, duration, batch, fees | `content/pages/schemes.ts`, `content/categories.ts` |
| Service terms: rate method, minimum area, who supplies chemicals, operator certificates, insurance | `content/pages/products.ts`, `content/pages/crops.ts`, `content/categories.ts` |
| Available drone models, stock, brands, dealer authorisation, other showroom addresses | `content/pages/buying.ts` |
| Privacy policy link, response time | `components/ContactForm.tsx`, `app/contact/page.tsx` |

No prices, subsidy amounts, capacity figures, reviews or certificates have been made up.

### Logo, icons and images

- Logo: `components/LogoMark.tsx` (mark) + `components/Logo.tsx` (wordmark). If you change it, also update
  `app/icon.svg` and `public/logo.svg`.
- Favicon `app/icon.svg`, Apple icon `app/apple-icon.tsx`, web app icons `app/pwa-icon/[size]/route.tsx`
- Social image: `app/opengraph-image.tsx`. For a real photo, add `app/opengraph-image.jpg` (1200×630) and
  delete the `.tsx` file.
- Product photos are WebP files in `public/images/`, listed in `content/images.ts`. Replace them with photos
  of the drones you actually sell or operate, and update the width, height and alt text.

---

## 7. Contact form and backend

`components/ContactForm.tsx` validates on the client (name, 10-digit mobile, city/state, topic, message).
**There is no backend yet, so the form does not send anything to a server.** After validation, the screen
says the message was not sent and lets the visitor send the same details on WhatsApp (8282802150) with one tap.

To add a backend:

```ts
// app/api/enquiry/route.ts
export async function POST(req: Request) {
  const data = await req.json();
  // validate again on the server, then send an email / save to a database or CRM
  return Response.json({ ok: true });
}
```

Then in `ContactForm.tsx`'s `onSubmit`, call `fetch("/api/enquiry", { method: "POST", body: JSON.stringify(values) })`,
show "Message sent" on success, and remove the "not sent" notices. Add spam protection (honeypot/rate limit)
and a privacy policy. Keep API keys only in server-side environment variables.

---

## 8. Accessibility

- One H1 per page, semantic landmarks, a "Skip to main content" link
- Header dropdowns and the mobile menu work with the keyboard; Escape closes them and returns focus to the trigger
- FAQs use native `<details>/<summary>`; the form has labels, inline errors, `aria-invalid` and a focusable error summary
- On mobile, the floating Call/WhatsApp buttons are compact (48px) and the footer has extra bottom space so links aren't covered
- Respects `prefers-reduced-motion`
