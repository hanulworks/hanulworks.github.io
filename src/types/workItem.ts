/**
 * Shared shapes for portfolio rows, detail pages, and data modules
 * (projects, studies/sketches, photography series).
 */

/** Whether a link is shown on the index card vs. the project detail header */
export type WorkLinkContext = "summary" | "detail";

export type WorkLink = {
  href: string;
  label: string;
  external?: boolean;
  context?: WorkLinkContext;
};

/** Props accepted by `<WorkRow />` and produced by data mappers */
export type WorkRowProps = {
  title: string;
  synopsis?: string;
  year?: string;
  links?: WorkLink[];
  domains?: string[];
  image?: string;
  imageAlt?: string;
};
