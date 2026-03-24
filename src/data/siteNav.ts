/**
 * Primary navigation links in display order (Header + section index pages).
 */
export const SITE_NAV_LINKS = [
  { href: "/commercial", label: "commercial", displayLabel: "Commercial" },
  { href: "/published", label: "published", displayLabel: "Published" },
  { href: "/studies", label: "studies", displayLabel: "Studies" },
  { href: "/sketches", label: "sketches", displayLabel: "Sketches" },
  { href: "/photos", label: "photos", displayLabel: "Photos" },
] as const;

export type SiteNavLink = (typeof SITE_NAV_LINKS)[number];
