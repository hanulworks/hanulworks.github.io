export type LinkContext = "summary" | "detail";
export type LinkItem = {
  href: string;
  label: string;
  external?: boolean;
  context?: LinkContext;
};
export type Sketch = {
  slug: string;
  title: string;
  synopsis?: string;
  year?: string;
  links?: LinkItem[];
  domains?: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
};

/** Shown on /studies index only (assets under /sketches/new-hail) */
export const newHailSketch: Sketch = {
  slug: "new-hail",
  title: "NEW HAIL",
  synopsis:
    "Randomized 3D geometric forms animated with computational physics principles, visualizing generative geometry in motion",
  year: "2019",
  links: [
    {
      href: "/sketches/new-hail/",
      label: "EXPLORE PROJECT",
      external: true,
      context: "summary",
    },
  ],
  domains: ["Computational Geometry", "Physics-Based Simulation"],
  tools: "Three.js",
  language: "JavaScript, HTML, CSS",
  image: "/sketches/new-hail/1.gif",
  imageAlt: "NEW HAIL",
};

/** /sketches listing — interactive sketches (assets under /sketches/…); NEW HAIL is listed on /studies */
export const sketchItems: Sketch[] = [
  {
    slug: "pixel-tunnels",
    title: "Pixel Tunnels",
    synopsis:
      "An optical study of depth and motion, simulating infinite tunnel perspectives through generative effects",
    year: "2022",
    links: [],
    domains: ["Generative Systems", "Procedural Visualization"],
    tools: "TouchDesigner",
    language: "HTML, CSS",
    image: "/sketches/pixel-tunnels/1.gif",
    imageAlt: "Pixel Tunnels",
  },
  {
    slug: "particle-clouds",
    title: "Particle Clouds",
    synopsis:
      "Dynamic particle systems forming and dissolving in three-dimensional space, exploring interactive spatial transformation",
    year: "2022",
    links: [],
    domains: ["Generative Systems", "3D Spatial Visualization"],
    tools: "TouchDesigner",
    language: "HTML, CSS",
    image: "/sketches/particle-clouds/1.gif",
    imageAlt: "Particle Clouds",
  },
  {
    slug: "cherry-blossom",
    title: "Cherry Blossom",
    synopsis:
      "Recursive generative illustration inspired by turtle graphics, producing floral structures with algorithmic precision",
    year: "2021",
    links: [
      {
        href: "/sketches/cherry-blossom/",
        label: "EXPLORE PROJECT",
        external: true,
        context: "summary",
      },
    ],
    domains: ["Algorithmic Illustration", "Generative Art"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/cherry-blossom/1.png",
    imageAlt: "Cherry Blossom",
  },
  {
    slug: "chaos",
    title: "Chaos",
    synopsis:
      "Procedural recursion experiment using turtle graphics to visualize chaotic systems and emergent complexity",
    year: "2021",
    links: [
      {
        href: "/sketches/chaos/",
        label: "EXPLORE PROJECT",
        external: true,
        context: "summary",
      },
    ],
    domains: ["Complex Systems", "Generative Visualization"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/chaos/1.png",
    imageAlt: "Chaos",
  },
  {
    slug: "spiral",
    title: "Spiral",
    synopsis:
      "Algorithmic spiral generation through recursive turtle graphics, exploring mathematical growth patterns",
    year: "2021",
    links: [
      {
        href: "/sketches/spiral/",
        label: "EXPLORE PROJECT",
        external: true,
        context: "summary",
      },
    ],
    domains: ["Mathematical Systems", "Generative Art"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/spiral/1.png",
    imageAlt: "Spiral",
  },
  {
    slug: "winter-tree",
    title: "Winter Tree",
    synopsis:
      "Recursive branching system coded with turtle graphics, modeling natural tree structures in winter form",
    year: "2021",
    links: [
      {
        href: "/sketches/winter-tree/",
        label: "EXPLORE PROJECT",
        external: true,
        context: "summary",
      },
    ],
    domains: ["Procedural Modeling", "Computational Botany"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/winter-tree/1.png",
    imageAlt: "Winter Tree",
  },
  {
    slug: "neon-pen",
    title: "Neon Pen",
    synopsis:
      "An interactive drawing tool simulating multi‑color, pressure‑sensitive strokes with responsive feedback",
    year: "2021",
    links: [
      {
        href: "/sketches/neon-pen/",
        label: "EXPLORE PROJECT",
        external: true,
        context: "summary",
      },
    ],
    domains: ["Human–Computer Interaction", "Creative Coding"],
    tools: "Paper.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/neon-pen/1.gif",
    imageAlt: "Neon Pen",
  },
  {
    slug: "butterfly2046",
    title: "Butterfly2046",
    synopsis:
      "A generative portrait inspired by the film *2046*, procedurally rendering butterfly forms with cinematic coloration",
    year: "2021",
    links: [
      {
        href: "/sketches/butterfly2046/",
        label: "EXPLORE PROJECT",
        external: true,
        context: "summary",
      },
    ],
    domains: ["Generative Illustration", "Algorithmic Systems"],
    tools: "P5.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/butterfly2046/1.gif",
    imageAlt: "Butterfly2046",
  },
  {
    slug: "bee-swarm",
    title: "Bee Swarm",
    synopsis:
      "An interactive generative simulation visualizing swarm intelligence and emergent behavior through bees’ collective motion",
    year: "2021",
    links: [
      {
        href: "/sketches/bee-swarm/",
        label: "EXPLORE PROJECT",
        external: true,
        context: "summary",
      },
    ],
    domains: ["Swarm Intelligence", "Generative Systems"],
    tools: "P5.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/bee-swarm/1.gif",
    imageAlt: "Bee Swarm",
  },
];

export default sketchItems;
