import type { PhotoSeries } from "../types/photo";

export const photoSeries: PhotoSeries[] = [
  {
    slug: "santa-fe",
    title: "Santa Fe",
    description:
      "Digital photographs of friendship and youth, bodies in motion and closeness held quietly in the frame",
    year: "2017",
    links: [{ href: "/photos/santa-fe", label: "VIEW DETAILS", surface: "listing" }],
    tags: ["Digital Photography", "Documentary", "Portrait"],
    image: "/photos/santa-fe/2.JPG",
    imageAlt: "Santa Fe photography series thumbnail",
  },
  /* Temporarily hidden from /photos (too sensual for corporate portfolio). Uncomment the block below to restore the card + /photos/human-species/ route.
  {
    slug: "human-species",
    title: "Human Species",
    description:
      "Figure studies in which bodies are interrupted by images of other bodies, caught between flesh and representation",
    year: "2016",
    links: [
      { href: "/photos/human-species", label: "VIEW DETAILS", surface: "listing" },
    ],
    tags: ["Digital Photography", "Figure Study", "Portrait"],
    image: "/photos/human-species/1.JPG",
    imageAlt: "Human Species photography series thumbnail",
  },
  */
  {
    slug: "not-at-all-digital-not-even-mechanical",
    title: "Not At All Digital, Not Even Mechanical",
    description:
      "Hand-worked analogue (anti-)self-portraits in which material surfaces, accident, and touch remain legible in the final print",
    year: "2015",
    links: [
      {
        href: "/photos/not-at-all-digital-not-even-mechanical",
        label: "VIEW DETAILS",
        surface: "listing",
      },
    ],
    tags: ["Analog Photography", "Alternative Process", "Self Portrait"],
    image: "/photos/not-at-all-digital/4.JPEG",
    imageAlt: "Not At All Digital, Not Even Mechanical series thumbnail",
  },
  {
    slug: "south-koreans",
    title: "South Koreans",
    description:
      "Street photographs and family portraits from Korea, tracing the rhythm between crowds, transit, and private pause",
    year: "2015",
    links: [
      { href: "/photos/south-koreans", label: "VIEW DETAILS", surface: "listing" },
    ],
    tags: ["Analog Photography", "Street Photography", "Documentary"],
    image: "/photos/south-koreans/5.JPEG",
    imageAlt: "South Koreans photography series thumbnail",
  },
  {
    slug: "late-childhood",
    title: "Late Childhood",
    description:
      "Korean landscapes and everyday scenes on film in which grain, weather, and light are held spare and intimate",
    year: "2015",
    links: [
      { href: "/photos/late-childhood", label: "VIEW DETAILS", surface: "listing" },
    ],
    tags: ["Analog Photography", "Film", "Landscape"],
    image: "/photos/late-childhood/18.JPEG",
    imageAlt: "Late Childhood film photography series thumbnail",
  },
];

export const getPhotoSeriesBySlug = (slug: string) =>
  photoSeries.find((series) => series.slug === slug) ?? null;

export type { PhotoSeries } from "../types/photo";

export default photoSeries;
