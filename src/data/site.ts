import type { Sketch } from "../types/sketch";
import type { WorkRowProps } from "../types/workItem";
import type { Project } from "../types/project";
import { commercialProjects } from "./commercial";
import { publishedProjects } from "./published";
import { studiesProjects, newHailSketch, studiesSlugs } from "./studies";
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

export function getStudiesItems(): Array<Project | Sketch> {
  return studiesSlugs.map((slug) => {
    if (slug === "new-hail") return newHailSketch;
    const project = getProjectBySlug(slug);
    if (!project) throw new Error(`Missing project for studies: ${slug}`);
    return project;
  });
}

export function toWorkRowProps(item: Project | Sketch): WorkRowProps {
  return {
    title: item.title,
    synopsis: item.synopsis ?? "",
    year: item.year,
    links: item.links ?? [],
    domains: item.domains ?? [],
    image: item.image,
    imageAlt: item.imageAlt ?? "",
  };
}
