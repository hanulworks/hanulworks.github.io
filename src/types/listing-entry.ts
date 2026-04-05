import type { WorkLink } from "./work-row";

/** Listing + detail metadata (commercial, published, studies, photos). */
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
