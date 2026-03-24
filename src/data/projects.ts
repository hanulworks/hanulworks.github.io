import type { WorkLink } from "../types/workItem";

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
}

/**
 * Order matches site sections: commercial → published → remaining studies
 * (see `workLists.ts` slug arrays and `SITE_NAV_LINKS` in `siteNav.ts`).
 */
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
    image: "/commercial/build-your-genesis/gv60.png",
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
    image: "/commercial/hyundai-campaigns/homepage.png",
    imageAlt: "Hyundai ECV"
  },
  {
    slug: "fulcrum-analytics",
    title: "Fulcrum Analytics",
    synopsis: "Creation of campaign report infographics and a year-end holiday graphic card to support data-driven storytelling at Fulcrum Analytics",
    year: "2021",
    links: [{ href: "/commercial/fulcrum-analytics", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Data Visualization", "Information Design", "Visual Communication", "Content Strategy"],
    tools: "Google Sheets, Looker Studio, Adobe Illustrator, InDesign",
    image: "/commercial/fulcrum-analytics/Infographic1.png",
    imageAlt: "Fulcrum Analytics Infographic"
  },
  {
    slug: "media-smart-citizens",
    title: "Media Smart Citizens",
    synopsis: "Developed a comprehensive brand identity including logo, color palette, and visual guidelines, then designed functional presentation templates and website layouts for Media Smart Citizens",
    year: "2021",
    links: [{ href: "/commercial/media-smart-citizens", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Brand Identity", "Visual Guidelines", "Presentation Design", "Web Layout"],
    tools: "Adobe Illustrator, InDesign, Figma, Keynote",
    image: "/commercial/media-smart-citizens/brand-white.png",
    imageAlt: "Media Smart Citizens brand gradient",
  },
  {
    slug: "hanul-computer-interaction",
    title: "Hanul-Computer Interaction",
    synopsis: "A digital-physical interactive experience investigating movement-based interactivity, machine learning, and collaborative authorship between human and machine",
    year: "2022",
    links: [
      { href: "/published/hanul-computer-interaction", label: "VIEW DETAILS", context: "summary" },
      { href: "/studies/hanul-computer-interaction/web.html", label: "EXPLORE WEB VERSION", external: true, context: "detail" },
      { href: "/studies/hanul-computer-interaction/mobile.html", label: "EXPLORE MOBILE VERSION", external: true, context: "detail" },
      { href: "https://parsons.edu/dt-2022/hanul-computer-interaction-hci/", label: "PARSONS DESIGN & TECHNOLOGY THESIS SHOW 2022", external: true, context: "detail" }
    ],
    domains: ["Human-Computer Interaction", "Real-Time Pose Estimation", "Interactive System Design", "Machine Learning"],
    tools: "P5.js , Ml5.js",
    language: "JavaScript, HTML, CSS",
    image: "/studies/hanul-computer-interaction/prototype2.1.jpg",
    imageAlt: "Hanul-Computer Interaction"
  },
  {
    slug: "the-net-works",
    title: "The_Net_Works",
    synopsis: "Digital ethnographic resource analyzing the infrastructures of sexual cybercrime through the ‘Nth Room’ case study",
    year: "2021",
    links: [
      { href: "/published/the-net-works", label: "VIEW DETAILS", context: "summary" },
      { href: "/studies/the-net-works/resource.html", label: "EXPLORE PROJECT", external: true, context: "detail" }
    ],
    domains: ["Digital Ethnography", "Cybersecurity Studies", "Civic Technology", "Research Documentation"],
    tools: "Google Sheets, Looker Studio, Figma",
    language: "HTML, CSS, JavaScript",
    image: "/studies/the-net-works/thumbnail.png",
    imageAlt: "The_Net_Works"
  },
  {
    slug: "bird-dress",
    title: "BirDress",
    synopsis: "Exploration of contemporary fashion design through StyleGAN, utilizing curated datasets of birds and dresses for generative modeling",
    year: "2021",
    links: [{ href: "/studies/bird-dress", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Generative AI Design", "Fashion Technology", "Computational Creativity", "Machine Learning"],
    tools: "Google Collab, Adobe Illustrator, InDesign, Premiere Pro",
    language: "Python",
    image: "/studies/bird-dress/thumbnail.JPEG",
    imageAlt: "BirDress"
  },
  {
    slug: "cyb-org",
    title: "cyb-org",
    synopsis: "Interactive diagram mapping ‘Experience, Network, Information’ through media theory, based on Motoko Kusanagi from ‘Ghost in the Shell’",
    year: "2020",
    links: [
      { href: "/studies/cyb-org", label: "VIEW DETAILS", context: "summary" },
      { href: "/studies/cyb-org/diagram.html", label: "EXPLORE PROJECT", external: true, context: "detail" }
    ],
    domains: ["Media Theory", "Network Visualization", "Systems Mapping", "Information Architecture"],
    tools: "Visual Studio Code",
    language: "JavaScript, HTML, CSS",
    image: "/studies/cyb-org/cyb-org.png",
    imageAlt: "cyb-org"
  },
  {
    slug: "solaris",
    title: "SOLARIS",
    synopsis: "Real-time VJing tool developed in Max for Live, integrating sound-driven visual synthesis for live performance",
    year: "2020",
    links: [{ href: "/studies/solaris", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Real-Time Visual Synthesis", "Audiovisual Performance", "Live Performance Tooling", "Creative Coding"],
    tools: "Max, Ableton Live",
    language: "C",
    image: "/studies/solaris/demo1.gif",
    imageAlt: "SOLARIS"
  },
  {
    slug: "vr-therapy-101",
    title: "VR Therapy 101",
    synopsis: "Prototype and proposal for a VR group therapy course aimed at enhancing mental health education in higher education contexts",
    year: "2020",
    links: [{ href: "/studies/vr-therapy-101", label: "VIEW DETAILS", context: "summary" }],
    domains: ["VR Design", "Learning Experience Design", "Mental Health Education", "Therapeutic Technologies"],
    tools: "Unity",
    language: "C#",
    image: "/studies/vr-therapy-101/thumbnail.png",
    imageAlt: "VR Therapy 101"
  },
  {
    slug: "yr-no-hater",
    title: "yr no hater",
    synopsis: "An experimental web poem emphasizing low‑energy, high‑performance interaction to reframe digital text‑based art",
    year: "2019",
    links: [{ href: "/studies/yr-no-hater/index.html", label: "EXPLORE PROJECT", external: true, context: "summary" }],
    domains: [
      "Digital Literature",
      "Interactive Web Art",
      "Poetic Interface",
      "Performance Web Design",
    ],
    language: "JavaScript, CSS, HTML",
    image: "/studies/yr-no-hater/1.gif",
    imageAlt: "yr no hater"
  },
  {
    slug: "dream-homeland",
    title: "dream-homeland",
    synopsis: "3D interactive environment blending memories, dreams, and experimental moving images to explore immersive narrative",
    year: "2019",
    links: [{ href: "/studies/dream-homeland", label: "VIEW DETAILS", context: "summary" }],
    domains: ["Immersive Narrative", "Virtual Environment Design", "Experimental Media", "Spatial Computing"],
    tools: "Unity",
    language: "C#",
    image: "/studies/dream-homeland/demo1.png",
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
