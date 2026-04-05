import type { ListingEntry } from "../types/listing-entry";
import type { Sketch } from "../types/sketch";
import type { WorkRowProps } from "../types/work-row";
import type { Project } from "../types/project";
import { commercialProjects } from "./commercial";
import { publishedProjects } from "./published";
import { studiesProjects, studiesListingEntries } from "./studies";
import { slugify } from "../utils/slugify";

export const SITE_NAV_LINKS = [
  { href: "/", label: "hanul", displayLabel: "Hanul" },
  { href: "/commercial", label: "commercial", displayLabel: "Commercial" },
  { href: "/published", label: "published", displayLabel: "Published" },
  { href: "/studies", label: "studies", displayLabel: "Studies" },
  { href: "/sketches", label: "sketches", displayLabel: "Sketches" },
  { href: "/photos", label: "photos", displayLabel: "Photos" },
] as const;

export type SiteNavLink = (typeof SITE_NAV_LINKS)[number];

export type { Project } from "../types/project";

export const projects: Project[] = [
  ...commercialProjects,
  ...publishedProjects,
  ...studiesProjects,
];

export { slugify };

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug) ?? null;

export function getCommercialProjects(): Project[] {
  return commercialProjects;
}

export function getPublishedProjects(): Project[] {
  return publishedProjects;
}

/** Studies index order (defined in `studies.ts`). */
export function getStudiesListing(): Array<Project | Sketch> {
  return studiesListingEntries;
}

/** Listing data → `WorkRow` props. */
export function toWorkRowProps(item: ListingEntry | Sketch): WorkRowProps {
  return {
    title: item.title,
    description: item.description ?? "",
    year: item.year,
    links: item.links ?? [],
    tags: item.tags ?? [],
    image: item.image,
    imageAlt: item.imageAlt ?? "",
    ...("imageThumbnailScale" in item && item.imageThumbnailScale != null
      ? { imageThumbnailScale: item.imageThumbnailScale }
      : {}),
  };
}
