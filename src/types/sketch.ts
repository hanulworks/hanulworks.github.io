import type { WorkLink } from "./workItem";

export type Sketch = {
  slug: string;
  title: string;
  synopsis?: string;
  year?: string;
  links?: WorkLink[];
  domains?: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
};
