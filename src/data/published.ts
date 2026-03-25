import type { Project } from "../types/project";

export const publishedProjects: Project[] = [
  {
    slug: "hanul-computer-interaction",
    title: "Hanul-Computer Interaction",
    synopsis:
      "A digital-physical interactive experience investigating movement-based interactivity, machine learning, and collaborative authorship between human and machine",
    year: "2022",
    links: [
      {
        href: "/published/hanul-computer-interaction",
        label: "VIEW DETAILS",
        context: "summary",
      },
      {
        href: "/studies/hanul-computer-interaction/web.html",
        label: "EXPLORE WEB VERSION",
        external: true,
        context: "detail",
      },
      {
        href: "/studies/hanul-computer-interaction/mobile.html",
        label: "EXPLORE MOBILE VERSION",
        external: true,
        context: "detail",
      },
      {
        href: "https://parsons.edu/dt-2022/hanul-computer-interaction-hci/",
        label: "PARSONS DESIGN & TECHNOLOGY THESIS SHOW 2022",
        external: true,
        context: "detail",
      },
    ],
    domains: [
      "Human-Computer Interaction",
      "Real-Time Pose Estimation",
      "Interactive System Design",
      "Machine Learning",
    ],
    tools: "P5.js , Ml5.js",
    language: "JavaScript, HTML, CSS",
    image: "/studies/hanul-computer-interaction/prototype2.1.jpg",
    imageAlt: "Hanul-Computer Interaction",
  },
  {
    slug: "the-net-works",
    title: "The_Net_Works",
    synopsis:
      "Digital ethnographic resource analyzing the infrastructures of sexual cybercrime through the ‘Nth Room’ case study",
    year: "2021",
    links: [
      { href: "/published/the-net-works", label: "VIEW DETAILS", context: "summary" },
      {
        href: "/studies/the-net-works/resource.html",
        label: "EXPLORE PROJECT",
        external: true,
        context: "detail",
      },
    ],
    domains: [
      "Digital Ethnography",
      "Cybersecurity Studies",
      "Civic Technology",
      "Research Documentation",
    ],
    tools: "Google Sheets, Looker Studio, Figma",
    language: "HTML, CSS, JavaScript",
    image: "/studies/the-net-works/thumbnail.png",
    imageAlt: "The_Net_Works",
  },
];
