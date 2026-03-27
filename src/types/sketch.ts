import type { WorkLink } from "./work-row";

export type Sketch = {
  slug: string;
  title: string;
  description?: string;
  year?: string;
  links?: WorkLink[];
  tags?: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
  /** Passed to WorkRow: slight center zoom on listing thumbnails (e.g. busy GIFs). */
  imageThumbnailScale?: number;
};
