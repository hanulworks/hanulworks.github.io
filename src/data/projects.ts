export type LinkItem = { href: string; label: string; external?: boolean; context?: "summary" | "detail" };
export type Project = {
  slug: string;
  title: string;
  synopsis: string;
  year: string;
  links: LinkItem[];
  domains: string[];
  tools?: string;
  language?: string;
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    slug: "build-your-genesis",
    title: "Build Your Genesis",
    synopsis: "Immersive 3D WebGL configurator series for Genesis Motor’s global markets, enabling interactive vehicle customization",
    year: "2023-24",
    links: [
      { href: "https://www.genesis.com/kr/en/models/luxury-sedan-genesis/electrified-g80/bto/powertrains?code=BBBBBB&packages=", label: "ELECTRIFIED G80, HQ ", external: true, context: "summary" },
      { href: "https://www.genesis.com/de/en/configurator/build-your-genesis/gv60/3d/drivetrains?code=BEBBBB&packages=&acc=", label: "GV60 EV, Germany", external: true, context: "summary" },
      { href: "https://www.genesis.com.cn/en/models/luxury-sedan-genesis/g90/bto/powertrains?code=BBCBBBB&packages=&zipcode=&postcode=", label: "G90, China", external: true, context: "summary" },
      { href: "https://www.genesis.com/uk/en/configurator/build-your-genesis/electrified-gv70/3d/drivetrains?code=BBBBBB&packages=&acc=", label: "ELECTRIFIED GV70, UK", external: true, context: "summary" }
    ],
    domains: ["3D Visualization", "Interaction Design", "User Experience Design", "Product Strategy"],
    image: "/projects/genesis/gv60.png",
    imageAlt: "Genesis"
  },
  {
    slug: "hyundai-campaigns",
    title: "Hyundai Campaigns",
    synopsis: "Redesign of global website and catalogs for Hyundai’s electrified commercial vehicles",
    year: "2022-23",
    links: [
      { href: "https://ecv.hyundai.com/global/en", label: "HMC ECV Website", external: true, context: "summary" },
      { href: "https://ecv.hyundai.com/resources/assets/file/XCIENT-Fuel-Cell-Tractor-Catalog-Spread-EN.pdf", label: "XCIENT Tractor Catalog", external: true, context: "summary" },
      { href: "https://ecv.hyundai.com/resources/assets/file/XCIENT-Fuel-Cell-Truck-Catalog-Single-EN.pdf", label: "XCIENT Truck Catalog", external: true, context: "summary" },
      { href: "https://ecv.hyundai.com/resources/assets/file/ELEC-CITY-Fuel-Cell-Catalog-Single-EN.pdf", label: "ELEC CITY Catalog", external: true, context: "summary" },
      { href: "https://ecv.hyundai.com/resources/assets/file/UNIVERSE-Fuel-Cell-Catalog-Spread-EN.pdf", label: "UNIVERSE Catalog", external: true, context: "summary" }
    ],
    domains: ["Web Design", "Visual Communication", "Brand Strategy", "Technical Writing"],
    image: "/projects/hmc-ecv/homepage.png",
    imageAlt: "Hyundai ECV"
  },
  {
    slug: "hanul-computer-interaction",
    title: "Hanul-Computer Interaction",
    synopsis: "A digital-physical interactive experience investigating movement-based interactivity, machine learning, and collaborative authorship between human and machine",
    year: "2021-22",
    links: [
      { href: "/projects/hanul-computer-interaction", label: "VIEW DETAILS", context: "summary" },
      { href: "/projects/hanul-computer-interaction/web.html", label: "EXPLORE WEB VERSION", external: true, context: "detail" },
      { href: "/projects/hanul-computer-interaction/mobile.html", label: "EXPLORE MOBILE VERSION", external: true, context: "detail" },
      { href: "https://parsons.edu/dt-2022/hanul-computer-interaction-hci/", label: "PARSONS DESIGN & TECHNOLOGY THESIS SHOW 2022", external: true, context: "detail" }
    ],
    domains: ["Human-Computer Interaction", "Real-Time Pose Estimation", "Interactive System Design", "Machine Learning"],
    tools: "P5.js , Ml5.js",
    language: "JavaScript, HTML, CSS",
    image: "/projects/hanul-computer-interaction/prototype2.1.jpg",
    imageAlt: "Hanul-Computer Interaction"
  },
  {
    slug: "fulcrum-analytics",
    title: "Fulcrum Analytics",
    synopsis: "Creation of campaign report infographics and a year-end holiday graphic card to support data-driven storytelling at Fulcrum Analytics",
    year: "2021",
    links: [{ href: "/projects/fulcrum-analytics", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Data Visualization", "Information Design", "Visual Communication", "Content Strategy"],
    tools: "Google Sheets, Looker Studio, Adobe Illustrator, InDesign",
    image: "/projects/fulcrum-analytics/Infographic1.png",
    imageAlt: "Fulcrum Analytics Infographic"
  },
  {
    slug: "bird-dress",
    title: "BirDress",
    synopsis: "Exploration of contemporary fashion design through StyleGAN, utilizing curated datasets of birds and dresses for generative modeling",
    year: "2021",
    links: [{ href: "/projects/bird-dress", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Generative AI Design", "Fashion Technology", "Computational Creativity", "Machine Learning"],
    tools: "Google Collab, Adobe Illustrator, InDesign, Premiere Pro",
    language: "Python",
    image: "/projects/bird-dress/thumbnail.JPEG",
    imageAlt: "BirDress"
  },
  {
    slug: "the-net-works",
    title: "The_Net_Works",
    synopsis: "Digital ethnographic resource analyzing the infrastructures of sexual cybercrime through the ‘Nth Room’ case study",
    year: "2021",
    links: [
      { href: "/projects/the-net-works", label: "VIEW DETAILS", context: "summary" },
      { href: "/projects/the-net-works/index.html", label: "EXPLORE PROJECT", external: true, context: "detail" }
    ],
    domains: ["Digital Ethnography", "Cybersecurity Studies", "Civic Technology", "Research Documentation"],
    tools: "Google Sheets, Looker Studio, Figma",
    language: "HTML, CSS, JavaScript",
    image: "/projects/the-net-works/thumbnail.png",
    imageAlt: "The_Net_Works"
  },
  {
    slug: "cyb-org",
    title: "cyb-org",
    synopsis: "Interactive diagram mapping ‘Experience, Network, Information’ through media theory, based on Motoko Kusanagi from ‘Ghost in the Shell’",
    year: "2020",
    links: [
      { href: "/projects/cyb-org", label: "VIEW DETAILS", context: "summary" },
      { href: "/projects/cyb-org/index.html", label: "EXPLORE PROJECT", external: true, context: "detail" }
    ],
    domains: ["Media Theory", "Network Visualization", "Systems Mapping", "Information Architecture"],
    tools: "Visual Studio Code",
    language: "JavaScript, HTML, CSS",
    image: "/projects/cyb-org/cyb-org.png",
    imageAlt: "cyb-org"
  },
  {
    slug: "solaris",
    title: "SOLARIS",
    synopsis: "Real-time VJing tool developed in Max for Live, integrating sound-driven visual synthesis for live performance",
    year: "2020",
    links: [{ href: "/projects/solaris", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Real-Time Visual Synthesis", "Audiovisual Performance", "Live Performance Tooling", "Creative Coding"],
    tools: "Max, Ableton Live",
    language: "C",
    image: "/projects/solaris/demo1.gif",
    imageAlt: "SOLARIS"
  },
  {
    slug: "vr-therapy-101",
    title: "VR Therapy 101",
    synopsis: "Prototype and proposal for a VR group therapy course aimed at enhancing mental health education in higher education contexts",
    year: "2020",
    links: [{ href: "/projects/vr-therapy-101", label: "VIEW DETAILS", context: "summary" }],
    domains: ["VR Design", "Learning Experience Design", "Mental Health Education", "Therapeutic Technologies"],
    tools: "Unity",
    language: "C#",
    image: "/projects/vr-therapy-101/thumbnail.png",
    imageAlt: "VR Therapy 101"
  },
  {
    slug: "dream-homeland",
    title: "dream-homeland",
    synopsis: "3D interactive environment blending memories, dreams, and experimental moving images to explore immersive narrative",
    year: "2019",
    links: [{ href: "/projects/dream-homeland", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Immersive Narrative", "Virtual Environment Design", "Experimental Media", "Spatial Computing"],
    tools: "Unity",
    language: "C#",
    image: "/projects/dream-homeland/demo1.png",
    imageAlt: "dream-homeland"
  }
];

/** Utility */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug) ?? null;

export const allProjects = () => projects;
export default projects;