/** Where a link is shown: on listing cards, on the detail page only, or both. */
export type WorkLinkSurface = "listing" | "detailOnly";

export type WorkLink = {
  href: string;
  label: string;
  external?: boolean;
  /** `listing`: index cards (and usually the detail header). `detailOnly`: detail page header only. */
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
  /** Hint for long index pages with heavy media (e.g. GIFs). */
  imageFetchPriority?: "high" | "low" | "auto";
};
