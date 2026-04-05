import { sortUrlsByNumericStem } from "../utils/sort-urls-by-numeric-stem";
import photoSeries from "./photos";

/** Literal `import.meta.glob` per series (must match `photoSeries` slugs). */
const photoGalleryModules = {
  "santa-fe": import.meta.glob("/public/photos/santa-fe/*.JPG", {
    eager: true,
    query: "?url",
    import: "default",
  }),
  /* human-species: see photos.ts
  "human-species": import.meta.glob("/public/photos/human-species/*.JPG", {
    eager: true,
    query: "?url",
    import: "default",
  }),
  */
  "not-at-all-digital-not-even-mechanical": import.meta.glob(
    "/public/photos/not-at-all-digital/*.JPEG",
    { eager: true, query: "?url", import: "default" },
  ),
  "south-koreans": import.meta.glob("/public/photos/south-koreans/*.JPEG", {
    eager: true,
    query: "?url",
    import: "default",
  }),
  "late-childhood": import.meta.glob("/public/photos/late-childhood/*.JPEG", {
    eager: true,
    query: "?url",
    import: "default",
  }),
} as const;

const seriesSlugs = new Set(photoSeries.map((s) => s.slug));
for (const { slug } of photoSeries) {
  if (!Object.hasOwn(photoGalleryModules, slug)) {
    throw new Error(
      `photo-gallery-globs.ts: add import.meta.glob for slug "${slug}" (see photos.ts).`,
    );
  }
}
for (const key of Object.keys(photoGalleryModules)) {
  if (!seriesSlugs.has(key)) {
    throw new Error(
      `photo-gallery-globs.ts: remove or rename orphan glob key "${key}" (not in photos.ts).`,
    );
  }
}

export type PhotoSeriesSlug = keyof typeof photoGalleryModules;

export function isPhotoSeriesSlug(slug: string): slug is PhotoSeriesSlug {
  return Object.hasOwn(photoGalleryModules, slug);
}

/** Gallery image URLs sorted by numeric filename stem. */
export function getSortedPhotoGalleryUrls(slug: PhotoSeriesSlug): string[] {
  const mod = photoGalleryModules[slug];
  const entries = Object.entries(mod) as [string, string][];
  return sortUrlsByNumericStem(entries);
}
