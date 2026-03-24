import { getProjectBySlug, type Project } from "./projects";
import { newHailSketch, type Sketch } from "./sketches";
import type { WorkRowProps } from "../types/workItem";

/** Primary site nav order: see `siteNav.ts` (commercial → published → studies → sketches → photos). */

/** /commercial — fixed order */
export const commercialSlugs = [
  "build-your-genesis",
  "hyundai-campaigns",
  "fulcrum-analytics",
  "media-smart-citizens",
] as const;

/** /published — showcase & academic publication selections */
export const publishedSlugs = [
  "hanul-computer-interaction",
  "the-net-works",
] as const;

/** /studies — fixed order (includes NEW HAIL sketch) */
export const studiesSlugs = [
  "bird-dress",
  "cyb-org",
  "solaris",
  "vr-therapy-101",
  "new-hail",
  "yr-no-hater",
  "dream-homeland",
] as const;

function loadProjectsByOrderedSlugs(
  slugs: readonly string[],
  sectionLabel: string,
): Project[] {
  return slugs.map((slug) => {
    const project = getProjectBySlug(slug);
    if (!project) {
      throw new Error(`Missing project for section "${sectionLabel}": ${slug}`);
    }
    return project;
  });
}

export function getCommercialProjects(): Project[] {
  return loadProjectsByOrderedSlugs(commercialSlugs, "commercial");
}

export function getPublishedProjects(): Project[] {
  return loadProjectsByOrderedSlugs(publishedSlugs, "published");
}

export function getStudiesItems(): Array<Project | Sketch> {
  return studiesSlugs.map((slug) => {
    if (slug === "new-hail") return newHailSketch;
    const project = getProjectBySlug(slug);
    if (!project) throw new Error(`Missing project for studies: ${slug}`);
    return project;
  });
}

/** Normalize `Project` or `Sketch` into `<WorkRow />` props */
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
