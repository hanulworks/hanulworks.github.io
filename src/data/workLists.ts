import { getProjectBySlug, type Project } from "./projects";
import { newHailSketch, type Sketch } from "./sketches";

/** /commercial — fixed order */
export const commercialSlugs = [
  "build-your-genesis",
  "hyundai-campaigns",
  "fulcrum-analytics",
  "media-smart-citizens",
] as const;

/** /studies — fixed order (includes NEW HAIL sketch) */
export const studiesSlugs = [
  "hanul-computer-interaction",
  "bird-dress",
  "the-net-works",
  "cyb-org",
  "solaris",
  "vr-therapy-101",
  "new-hail",
  "yr-no-hater",
  "dream-homeland",
] as const;

export function getCommercialProjects(): Project[] {
  return commercialSlugs.map((slug) => {
    const p = getProjectBySlug(slug);
    if (!p) throw new Error(`Missing project for commercial: ${slug}`);
    return p;
  });
}

export function getStudiesItems(): Array<Project | Sketch> {
  return studiesSlugs.map((slug) => {
    if (slug === "new-hail") return newHailSketch;
    const p = getProjectBySlug(slug);
    if (!p) throw new Error(`Missing project for studies: ${slug}`);
    return p;
  });
}

/** Normalize Project | Sketch for WorkRow */
export function workRowProps(item: Project | Sketch) {
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
