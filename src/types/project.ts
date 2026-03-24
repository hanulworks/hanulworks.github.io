import type { WorkLink } from "./workItem";

export type Project = {
  slug: string;
  title: string;
  synopsis: string;
  year: string;
  links: WorkLink[];
  domains: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
};
