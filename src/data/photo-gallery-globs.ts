import { sortUrlsByNumericStem } from "../utils/sort-urls-by-numeric-stem";
import photoSeries from "./photos";

/**
 * Per-series glob imports. Vite requires literal patterns here (no dynamic glob strings).
 * Keys must match `slug` in `photoSeries` in `photos.ts`.
 */
const photoGalleryModules = {
  "santa-fe": import.meta.glob("/public/photos/santa-fe/*.JPG", {
    eager: true,
    query: "?url",
    import: "default",
  }),
  /* Paired with commented Human Species entry in photos.ts — uncomment both when restoring the series.
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

/** Sorted image URLs for the series detail gallery (numeric stem order). */
export function getSortedPhotoGalleryUrls(slug: PhotoSeriesSlug): string[] {
  const mod = photoGalleryModules[slug];
  const entries = Object.entries(mod) as [string, string][];
  return sortUrlsByNumericStem(entries);
}
