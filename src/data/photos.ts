/** Photography series listed on /photos — same shape as projects for WorkRow + DetailLayout */
export type PhotoLinkItem = {
  href: string;
  label: string;
  external?: boolean;
  context?: "summary" | "detail";
};

export type PhotoSeries = {
  slug: string;
  title: string;
  synopsis: string;
  year: string;
  links: PhotoLinkItem[];
  domains: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
};

export const photoSeries: PhotoSeries[] = [
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
    domains: ["Analog Photography", "Street Photography", "Portrait"],
    image: "/photos/south-koreans/1.JPEG",
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

export const getPhotoBySlug = (slug: string) =>
  photoSeries.find((p) => p.slug === slug) ?? null;

export default photoSeries;
