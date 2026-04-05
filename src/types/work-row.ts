/** Listing card, detail header only, or both. */
export type WorkLinkSurface = "listing" | "detailOnly";

export type WorkLink = {
  href: string;
  label: string;
  external?: boolean;
  surface?: WorkLinkSurface;
};

export type WorkRowProps = {
  title: string;
  description?: string;
  year?: string;
  links?: WorkLink[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  imageFetchPriority?: "high" | "low" | "auto";
  /** Center zoom for listing thumbs (clipped); >1 for busy motion. */
  imageThumbnailScale?: number;
};
