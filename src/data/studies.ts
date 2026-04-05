import type { Project } from "../types/project";
import type { Sketch } from "../types/sketch";

const studiesBeforeNewHail: Project[] = [
  {
    slug: "bird-dress",
    title: "BirDress",
    description:
      "Exploration of contemporary fashion design through generative adversarial modeling on curated datasets of birds and dresses",
    year: "2021",
    links: [{ href: "/studies/bird-dress", label: "VIEW DETAILS", surface: "listing" }],
    tags: [
      "Generative AI Design",
      "Fashion Technology",
      "Computational Creativity",
      "Machine Learning",
    ],
    tools: "Google Colab, Adobe Illustrator, InDesign, Premiere Pro",
    language: "Python",
    image: "/studies/bird-dress/thumbnail.JPEG",
    imageAlt: "BirDress",
  },
  {
    slug: "cyb-org",
    title: "cyb-org",
    description:
      "Interactive diagram mapping ‘Experience, Network, Information’ through media theory, based on Motoko Kusanagi from ‘Ghost in the Shell’",
    year: "2020",
    links: [
      { href: "/studies/cyb-org", label: "VIEW DETAILS", surface: "listing" },
      {
        href: "/studies/cyb-org/diagram.html",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "detailOnly",
      },
    ],
    tags: [
      "Media Theory",
      "Network Visualization",
      "Systems Mapping",
      "Information Architecture",
    ],
    tools: "Visual Studio Code",
    language: "JavaScript, HTML, CSS",
    image: "/studies/cyb-org/cyb-org.png",
    imageAlt: "cyb-org",
  },
  {
    slug: "solaris",
    title: "SOLARIS",
    description:
      "Real-time VJing tool developed in Max for Live, integrating sound-driven visual synthesis for live performance",
    year: "2020",
    links: [{ href: "/studies/solaris", label: "VIEW DETAILS", surface: "listing" }],
    tags: [
      "Real-Time Visual Synthesis",
      "Audiovisual Performance",
      "Live Performance Tooling",
      "Creative Coding",
    ],
    tools: "Max, Ableton Live",
    language: "C",
    image: "/studies/solaris/demo1.gif",
    imageAlt: "SOLARIS",
  },
  {
    slug: "vr-therapy-101",
    title: "VR Therapy 101",
    description:
      "Prototype and proposal for a VR group therapy course aimed at enhancing mental health education in higher education contexts",
    year: "2020",
    links: [
      { href: "/studies/vr-therapy-101", label: "VIEW DETAILS", surface: "listing" },
    ],
    tags: [
      "VR Design",
      "Learning Experience Design",
      "Mental Health Education",
      "Therapeutic Technologies",
    ],
    tools: "Unity",
    language: "C#",
    image: "/studies/vr-therapy-101/thumbnail.png",
    imageAlt: "VR Therapy 101",
  },
];

export const newHailSketch: Sketch = {
  slug: "new-hail",
  title: "NEW HAIL",
  description:
    "Randomized three-dimensional geometry in the browser under simple physics constraints, running as a continuous generative loop",
  year: "2019",
  links: [
    {
      href: "/studies/new-hail/",
      label: "EXPLORE PROJECT",
      external: true,
      surface: "listing",
    },
  ],
  tags: [
    "Generative Systems",
    "Interactive 3D",
    "Physics Simulation",
    "Creative Coding",
  ],
  tools: "Three.js",
  language: "JavaScript, HTML, CSS",
  image: "/studies/new-hail/1.gif",
  imageAlt: "NEW HAIL",
};

const studiesAfterNewHail: Project[] = [
  {
    slug: "yr-no-hater",
    title: "yr no hater",
    description:
      "An experimental web poem emphasizing low‑energy, high‑performance interaction to reframe digital text‑based art",
    year: "2019",
    links: [
      {
        href: "/studies/yr-no-hater/index.html",
        label: "EXPLORE PROJECT",
        external: true,
        surface: "listing",
      },
    ],
    tags: [
      "Digital Literature",
      "Interactive Web Art",
      "Poetic Interface",
      "Performance Web Design",
    ],
    language: "JavaScript, CSS, HTML",
    image: "/studies/yr-no-hater/1.gif",
    imageAlt: "yr no hater",
  },
  {
    slug: "dream-homeland",
    title: "dream-homeland",
    description:
      "3D interactive environment blending memories, dreams, and experimental moving images to explore immersive narrative",
    year: "2019",
    links: [
      { href: "/studies/dream-homeland", label: "VIEW DETAILS", surface: "listing" },
    ],
    tags: [
      "Immersive Narrative",
      "Virtual Environment Design",
      "Experimental Media",
      "Spatial Computing",
    ],
    tools: "Unity",
    language: "C#",
    image: "/studies/dream-homeland/demo1.png",
    imageAlt: "dream-homeland",
  },
];

/** `/studies` index order. */
export const studiesListingEntries: Array<Project | Sketch> = [
  ...studiesBeforeNewHail,
  newHailSketch,
  ...studiesAfterNewHail,
];

export const studiesProjects: Project[] = [
  ...studiesBeforeNewHail,
  ...studiesAfterNewHail,
];
