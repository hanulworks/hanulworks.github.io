import type { PhotoSeries } from "../types/photo";
import type { WorkRowProps } from "../types/workItem";

export const photoSeries: PhotoSeries[] = [
  {
    slug: "santa-fe",
    title: "Santa Fe",
    synopsis:
      "Digital photographs of friendship and youth, with bodies in motion and closeness held quietly in the frame.",
    year: "2017",
    links: [{ href: "/photos/santa-fe", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Digital Photography", "Candid Documentary"],
    image: "/photos/santa-fe/2.JPG",
    imageAlt: "Santa Fe photography series thumbnail",
  },
  {
    slug: "human-species",
    title: "Human Species",
    synopsis:
      "Contemplative portraits and figure studies of how people hold space, weight, and nearness before the camera.",
    year: "2016",
    links: [
      { href: "/photos/human-species", label: "VIEW DETAILS", context: "summary" },
    ],
    domains: ["Digital Photography", "Figure Study"],
    image: "/photos/human-species/1.JPG",
    imageAlt: "Human Species photography series thumbnail",
  },
  {
    slug: "not-at-all-digital-not-even-mechanical",
    title: "Not At All Digital, Not Even Mechanical",
    synopsis:
      "Hand-worked analogue (anti-)self-portraits in which material surfaces, accident, and touch remain legible in the final print.",
    year: "2015",
    links: [
      {
        href: "/photos/not-at-all-digital-not-even-mechanical",
        label: "VIEW DETAILS",
        context: "summary",
      },
    ],
    domains: ["Analog Photography", "Handworked Print", "Self Portrait"],
    image: "/photos/not-at-all-digital/4.JPEG",
    imageAlt: "Not At All Digital, Not Even Mechanical series thumbnail",
  },
  {
    slug: "south-koreans",
    title: "South Koreans",
    synopsis:
      "Street photographs from Korea that follow the rhythm between crowds, transit, and private pause along sidewalks and public ways.",
    year: "2015",
    links: [
      { href: "/photos/south-koreans", label: "VIEW DETAILS", context: "summary" },
    ],
    domains: ["Analog Photography", "Street Photography"],
    image: "/photos/south-koreans/5.JPEG",
    imageAlt: "South Koreans photography series thumbnail",
  },
  {
    slug: "late-childhood",
    title: "Late Childhood",
    synopsis:
      "Korean landscapes and everyday scenes on film in which grain, weather, and light are held spare and intimate.",
    year: "2015",
    links: [
      { href: "/photos/late-childhood", label: "VIEW DETAILS", context: "summary" },
    ],
    domains: ["Analog Photography", "Film Landscape"],
    image: "/photos/late-childhood/18.JPEG",
    imageAlt: "Late Childhood film photography series thumbnail",
  },
];

export function toWorkRowPropsFromPhotoSeries(
  series: PhotoSeries,
): WorkRowProps {
  return {
    title: series.title,
    synopsis: series.synopsis,
    year: series.year,
    links: series.links,
    domains: series.domains,
    image: series.image,
    imageAlt: series.imageAlt ?? "",
  };
}

export const getPhotoSeriesBySlug = (slug: string) =>
  photoSeries.find((series) => series.slug === slug) ?? null;

export type { PhotoSeries } from "../types/photo";

export default photoSeries;
