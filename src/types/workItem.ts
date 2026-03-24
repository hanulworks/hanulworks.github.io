export type WorkLinkContext = "summary" | "detail";

export type WorkLink = {
  href: string;
  label: string;
  external?: boolean;
  context?: WorkLinkContext;
};

export type WorkRowProps = {
  title: string;
  synopsis?: string;
  year?: string;
  links?: WorkLink[];
  domains?: string[];
  image?: string;
  imageAlt?: string;
  /** Hint for long index pages with heavy media (e.g. GIFs). */
  imageFetchPriority?: "high" | "low" | "auto";
};
