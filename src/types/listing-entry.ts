import type { WorkLink } from "./work-row";

/**
 * Shared metadata for portfolio items shown as WorkRow cards and detail headers
 * (commercial, published, studies projects, photo series).
 */
export type ListingEntry = {
  slug: string;
  title: string;
  description: string;
  year: string;
  links: WorkLink[];
  tags: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
};
