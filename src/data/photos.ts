import type { WorkLink, WorkRowProps } from "../types/workItem";

/** Photography series listed on /photos — same shape as projects for WorkRow + DetailLayout */
export type PhotoSeries = {
  slug: string;
  title: string;
  synopsis: string;
  year: string;
  links: WorkLink[];
  domains: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
};

/** Display order on /photos (last item in `SITE_NAV_LINKS`) */
export const photoSeries: PhotoSeries[] = [
  {
    slug: "santa-fe",
    title: "Santa Fe",
    synopsis:
      "A digital photo series about youth and friendship in motion, capturing hand-in-hand moments across Santa Fe.",
    year: "2017",
    links: [{ href: "/photos/santa-fe", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Digital Photography", "Portrait", "Snapshot"],
    image: "/photos/santa-fe/1.JPG",
    imageAlt: "Santa Fe photography series thumbnail",
  },
  {
    slug: "human-species",
    title: "Human Species",
    synopsis:
      "Quiet portraits and figure studies: how people hold space, weight, and nearness in front of the camera.",
    year: "2016",
    links: [
      { href: "/photos/human-species", label: "VIEW DETAILS", context: "summary" },
    ],
    domains: ["Digital Photography", "Portrait"],
    image: "/photos/human-species/1.JPG",
    imageAlt: "Human Species photography series thumbnail",
  },
  {
    slug: "not-at-all-digital-not-even-mechanical",
    title: "Not At All Digital, Not Even Mechanical",
    synopsis:
      "Analogue (anti-)self-portraits, edited by hand—material surfaces, accident, and touch left in the frame.",
    year: "2015",
    links: [
      {
        href: "/photos/not-at-all-digital-not-even-mechanical",
        label: "VIEW DETAILS",
        context: "summary",
      },
    ],
    domains: ["Analog Photography", "Material Study", "Self Portrait"],
    image: "/photos/not-at-all-digital/1.JPEG",
    imageAlt: "Not At All Digital, Not Even Mechanical series thumbnail",
  },
  {
    slug: "south-koreans",
    title: "South Koreans",
    synopsis:
      "Street-adjacent views of Korea: crowds, transit, and pause, caught in candid rhythm between public and private.",
    year: "2015",
    links: [
      { href: "/photos/south-koreans", label: "VIEW DETAILS", context: "summary" },
    ],
    domains: ["Analog Photography", "Portrait", "Snapshot"],
    image: "/photos/south-koreans/5.JPEG",
    imageAlt: "South Koreans photography series thumbnail",
  },
  {
    slug: "late-childhood",
    title: "Late Childhood",
    synopsis:
      "Korean landscapes and everyday scenes on film—grain, weather, and light kept spare and close.",
    year: "2015",
    links: [
      { href: "/photos/late-childhood", label: "VIEW DETAILS", context: "summary" },
    ],
    domains: ["Analog Photography", "Landscape"],
    image: "/photos/late-childhood/18.JPEG",
    imageAlt: "Late Childhood film photography series thumbnail",
  },
];

/** Map a photo series to `<WorkRow />` props (same contract as `toWorkRowProps` for projects) */
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

export default photoSeries;
