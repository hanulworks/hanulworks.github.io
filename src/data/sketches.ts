import type { Sketch } from "../types/sketch";

export type { Sketch };

export const sketchCatalog: Sketch[] = [
  {
    slug: "bio-glyph",
    title: "Bio-Glyph",
    description:
      "Generative marks in a real-time compositing patch that branch and bleed like living tissue, with organic motion, color drift, and rhythm",
    year: "2022",
    links: [],
    tags: ["Organic Systems", "Generative Art"],
    tools: "TouchDesigner",
    language: "HTML, CSS",
    image: "/sketches/bio-glyph/1.gif",
    imageAlt: "Bio-Glyph",
  },
  {
    slug: "swamp",
    title: "Swamp",
    description:
      "Layered fluid motion and drifting particles in muted greens and browns that evoke humid air, submerged light, and slow water",
    year: "2022",
    links: [],
    tags: ["Particle Systems", "Fluid Motion"],
    tools: "TouchDesigner",
    language: "HTML, CSS",
    image: "/sketches/swamp/1.gif",
    imageAlt: "Swamp",
  },
  {
    slug: "particle-waves",
    title: "Particle Waves",
    description:
      "Three-dimensional particle masses that cohere and dissolve in continuous drift as a study in mass and motion",
    year: "2022",
    links: [],
    tags: ["Generative Systems", "3D Spatial Visualization"],
    tools: "TouchDesigner",
    language: "HTML, CSS",
    image: "/sketches/particle-waves/1.gif",
    imageAlt: "Particle Waves",
  },
  {
    slug: "pixel-tunnels",
    title: "Pixel Tunnels",
    description:
      "An endlessly receding pixel tunnel whose depth and motion loop as a study in perspectival space",
    year: "2022",
    links: [],
    tags: ["Generative Systems", "Procedural Visualization"],
    tools: "TouchDesigner",
    language: "HTML, CSS",
    image: "/sketches/pixel-tunnels/1.gif",
    imageAlt: "Pixel Tunnels",
  },
  {
    slug: "cherry-blossom",
    title: "Cherry Blossom",
    description:
      "Recursive turtle-graphics paths that accumulate into floral, branching forms from a single generative rule",
    year: "2021",
    links: [
      {
        href: "/sketches/cherry-blossom/",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: ["Algorithmic Illustration", "Generative Art"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/cherry-blossom/1.png",
    imageAlt: "Cherry Blossom",
  },
  {
    slug: "chaos",
    title: "Chaos",
    description:
      "Recursion in turtle graphics driven past stability into dense, chaotic drawing while the underlying rules remain elementary",
    year: "2021",
    links: [
      {
        href: "/sketches/chaos/",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: ["Complex Systems", "Generative Visualization"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/chaos/1.png",
    imageAlt: "Chaos",
  },
  {
    slug: "spiral",
    title: "Spiral",
    description:
      "Recursive turtle-graphics instructions that unfurl into spirals, making incremental mathematical growth visible as drawn line",
    year: "2021",
    links: [
      {
        href: "/sketches/spiral/",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: ["Mathematical Systems", "Generative Art"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/spiral/1.png",
    imageAlt: "Spiral",
  },
  {
    slug: "winter-tree",
    title: "Winter Tree",
    description:
      "Bare winter trees modeled through recursive branching in turtle graphics, with structure pared to season and silhouette",
    year: "2021",
    links: [
      {
        href: "/sketches/winter-tree/",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: ["Procedural Modeling", "Computational Botany"],
    tools: "Turtle.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/winter-tree/1.png",
    imageAlt: "Winter Tree",
  },
  {
    slug: "neon-pen",
    title: "Neon Pen",
    description:
      "A browser drawing surface in neon with pressure-sensitive stroke behavior",
    year: "2021",
    links: [
      {
        href: "/sketches/neon-pen/",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: ["Human Computer Interaction", "Creative Coding"],
    tools: "Paper.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/neon-pen/1.gif",
    imageAlt: "Neon Pen",
  },
  {
    slug: "butterfly2046",
    title: "Butterfly2046",
    description:
      "Procedural butterflies and color fields indebted to Wong Kar-wai's 2046, ornamental and quietly melancholic",
    year: "2021",
    links: [
      {
        href: "/sketches/butterfly2046/",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: ["Generative Illustration", "Algorithmic Systems"],
    tools: "P5.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/butterfly2046/1.gif",
    imageAlt: "Butterfly2046",
  },
  {
    slug: "bee-swarm",
    title: "Bee Swarm",
    description:
      "Many autonomous agents with simple steering rules aggregating into swarm behavior on a single canvas",
    year: "2021",
    links: [
      {
        href: "/sketches/bee-swarm/",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: ["Swarm Intelligence", "Generative Systems"],
    tools: "P5.js",
    language: "JavaScript, HTML, CSS",
    image: "/sketches/bee-swarm/1.gif",
    imageAlt: "Bee Swarm",
  },
];

export default sketchCatalog;
