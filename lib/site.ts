/**
 * Central site configuration.
 *
 * EDIT ME: every value in [square brackets] is a placeholder. Replace it with
 * verified information before publishing. Placeholders are highlighted on the
 * site so they are not missed.
 */

const PHONE = "8282802150";
const WHATSAPP_MESSAGE = "Hello, I would like information about Kisan Drone.";

export const siteConfig = {
  name: "Kisan Drone",
  tagline: "Agriculture drones, drone spraying services and training information for farmers",
  description:
    "Kisan Drone — agriculture drones, drone spraying services, drone rental, buying guides, government schemes and drone pilot training, explained simply. Call for prices and demos.",
  /**
   * Public URL of the deployed site, used for canonical URLs, the sitemap and
   * Open Graph. Set NEXT_PUBLIC_SITE_URL in your hosting environment.
   */
  // Official site: https://kisandrone.co.in (production builds use it by default).
  // Must match the primary domain in Vercel (www.kisandrone.co.in redirects here), or canonicals break.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "production" ? "https://kisandrone.co.in" : "http://localhost:3000")
  ).replace(/\/$/, ""),
  locale: "en_IN",
  contact: {
    phone: PHONE,
    phoneDisplay: "+91 82828 02150",
    phoneHref: `tel:+91${PHONE}`,
    whatsappMessage: WHATSAPP_MESSAGE,
    whatsappHref: `https://wa.me/91${PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    email: "enquiry@kisandrone.co.in",
    /** Head office — shown on the site and used in LocalBusiness schema. */
    address: "H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309, India",
    postalAddress: {
      streetAddress: "H-187, Lohia Rd, H Block, Sector 63",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201309",
      addressCountry: "IN",
    },
    hours: "Monday to Saturday, 9:30 AM – 7:00 PM (closed Sunday)",
    /** Used in LocalBusiness schema (24-hour format). */
    openingHours: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
  },
  social: {
    // Full profile URL, or leave empty (empty links are hidden).
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;

/** WhatsApp link with a custom pre-filled message. */
export function whatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

/** True if a value is still an unfilled [placeholder]. */
export function isPlaceholder(value: string) {
  const v = value.trim();
  return v.startsWith("[") && v.endsWith("]");
}
