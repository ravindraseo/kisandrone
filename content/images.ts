/**
 * Product photos (public/images/*.webp). EDIT ME: replace with photos of the
 * drones you actually sell or operate, and update width/height/alt.
 * Photos are shown as examples only — no brand, model or spec is claimed.
 */
import type { CategoryId } from "./types";

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Short label for cards */
  label: string;
  /** One honest line about what this type of drone is used for */
  text: string;
};

export const images = {
  sprayQuad: {
    src: "/images/agriculture-spray-drone-quadcopter.webp",
    width: 800,
    height: 688,
    alt: "Four-rotor agriculture spraying drone with a spray tank and nozzles underneath",
    label: "Spraying drone (4 rotors)",
    text: "For spraying pesticides or liquid fertiliser — with a tank, pump and nozzles.",
  },
  sprayHexa: {
    src: "/images/agriculture-spray-drone-hexacopter.webp",
    width: 800,
    height: 800,
    alt: "Six-rotor agriculture spraying drone with a central tank and a nozzle under each arm",
    label: "Spraying drone (6 rotors)",
    text: "More rotors for balance under load; for spraying larger fields.",
  },
  cargo: {
    src: "/images/cargo-drone.webp",
    width: 1024,
    height: 682,
    alt: "Heavy cargo drone with a cargo box underneath",
    label: "Cargo drone",
    text: "Built for carrying goods. It is not a spraying drone.",
  },
  fpv: {
    src: "/images/fpv-drone.webp",
    width: 600,
    height: 600,
    alt: "Small FPV drone with two antennas on top and a camera at the front",
    label: "FPV drone",
    text: "A small drone for fast flying and video. Not for spraying fields.",
  },
} satisfies Record<string, SiteImage>;

/** Images shown in the "drone types" gallery on the home page. */
export const droneTypes: SiteImage[] = [images.sprayQuad, images.sprayHexa, images.cargo, images.fpv];

/** Header image for a category landing page or keyword page. */
export function imageFor(category: CategoryId, index = 0): SiteImage {
  const pair = [images.sprayQuad, images.sprayHexa];
  const offset = category === "products-services" || category === "crops" ? 0 : 1;
  return pair[(index + offset) % 2];
}

/**
 * Field photos for the home page gallery (WebP, each under 40 KB).
 * Representative photos of drone spraying — not a record of a specific job.
 */
export const fieldPhotos: (SiteImage & { position?: string })[] = [
  {
    src: "/images/kisan-drone-spraying-paddy-field.webp",
    width: 640,
    height: 585,
    alt: "Farmer operating a kisan drone with a remote controller while it sprays a green paddy field",
    label: "Drone spraying in paddy",
    text: "No need to wade into flooded rice fields — the pilot stays at the edge.",
  },
  {
    src: "/images/agriculture-drone-spraying-soybean-field.webp",
    width: 720,
    height: 720,
    alt: "Six-rotor agriculture drone spraying a large soybean field at sunrise",
    label: "Large-field spraying",
    text: "Even coverage across big, continuous fields in calm morning hours.",
  },
  {
    src: "/images/kisan-drone-spraying-chilli-crop.webp",
    width: 560,
    height: 518,
    alt: "Farmer controlling a spraying drone over a chilli crop near his village",
    label: "Drone spraying in chilli",
    text: "Quick, targeted sprays on vegetable and spice crops.",
  },
  {
    src: "/images/drone-spraying-vegetable-field-india.webp",
    width: 500,
    height: 655,
    alt: "Operator flying a four-rotor spraying drone over a vegetable field while farmers work nearby",
    label: "Spraying in vegetable fields",
    text: "The operator monitors every pass and keeps people at a safe distance.",
    position: "50% 30%",
  },
  {
    src: "/images/spraying-drone-sunflower-field.webp",
    width: 600,
    height: 451,
    alt: "Agriculture spraying drone with a yellow body spraying a sunflower field",
    label: "Drone spraying in sunflower",
    text: "Oilseed crops can be sprayed with products approved for drone use.",
  },
];
