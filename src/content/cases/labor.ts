import type { CaseStudy } from "@/lib/types";

export const laborCaseStudy: CaseStudy = {
  slug: "laborapp",
  title: "Labor",
  year: "2026",
  heroImage: "https://www.figma.com/api/mcp/asset/230b1c08-3825-43dd-bb52-16be7b9ddbac",
  heroImageAlt: "Labor – agricultural services marketplace",
  description:
    "A trust-critical platform that connects agricultural producers and contractors, enabling direct discovery and service publishing.",
  roles: [
    "Product strategy & design",
    "Systems-driven UX and UI",
    "End-to-end MVP delivery",
  ],
  problem: {
    body: [
      {
        text: "Hiring agricultural services",
        emphasis: true,
      },
      {
        text: " in Argentina is still ",
      },
      {
        text: "fragmented and informal. ",
        emphasis: true,
      },
      {
        text: "Producers struggle to ",
      },
      {
        text: "find reliable services, ",
        emphasis: true,
      },
      {
        text: "while contractors lack visibility and consistent demand.",
      },
    ],
  },
  complexities: [
    {
      title: "MVP constraints",
      description:
        "A limited budget required focusing only on what made the platform truly functional end-to-end.",
    },
    {
      title: "Hybrid roles",
      description:
        "Users could act as producers, contractors, or both, depending on their real-world context.",
    },
    {
      title: "Location-based discovery",
      description:
        "Services needed to be relevant to where users actually operate, not just what they offer.",
    },
    {
      title: "Domain-specific logic",
      description:
        "Agricultural services required understanding nuanced concepts to design flows that made sense for people working in the field.",
    },
    {
      title: "Trust without intermediaries",
      description:
        "The product needed a way to establish trust between users without relying on traditional intermediaries.",
    },
  ],
  strategicAlignment: {
    intro:
      "Through collaborative sessions with the founding team, we aligned on four strategic decisions that shaped every design and product choice.",
    items: [
      {
        title: "Prioritizing problem-solution fit over monetization",
        description:
          "Rather than building revenue mechanisms early, we focused entirely on trust signals and core utility — proving the platform's value before extracting it.",
      },
      {
        title: "Fluid participation model",
        description:
          "Instead of forcing users into a fixed role, we designed a flexible architecture where context determines whether someone is a producer, contractor, or both.",
      },
      {
        title: "Design for technical feasibility & speed",
        description:
          "We scoped the MVP to what the stack could support — Clerk for auth, Vercel Blob for media, and Google Maps for location — without sacrificing the core experience.",
      },
      {
        title: "Validation-centric metrics",
        description:
          "Success was defined by activation signals: listing creation, contact initiation, and return visits — not vanity metrics.",
      },
    ],
  },
  solution: {
    body: [
      {
        text: "Labor is a ",
      },
      {
        text: "fluid participation marketplace",
        emphasis: true,
      },
      {
        text: " where agricultural producers and contractors discover and connect directly. A ",
      },
      {
        text: "guided publishing flow with service & location-based discovery",
        emphasis: true,
      },
      {
        text: " and a lightweight trust loop designed to ",
      },
      {
        text: "validate the product core",
        emphasis: true,
      },
      {
        text: " before scaling.",
      },
    ],
  },
  showcase: [
    {
      title: "Unified publishing",
      description:
        "A guided flow that adapts to the user's intent — whether publishing a service offering or searching for one — from a single shared entry point.",
      bullets: [
        "Single shared home as entry point",
        "Role defined contextually, not pre-selected",
        "Conditional fields with trust-oriented UX guidance",
      ],
      image: "",
      imageAlt: "Unified publishing flow",
      imagePosition: "right",
    },
    {
      title: "Location & service-driven discovery",
      description:
        "A relevance-first architecture anchored in user location, ensuring results are immediately actionable for people working in specific regions.",
      bullets: [
        "Pre-filtered by user context",
        "Hierarchical service taxonomy",
        "Direct contact externalized to validate real interaction",
      ],
      image: "",
      imageAlt: "Location and service-driven discovery",
      imagePosition: "left",
    },
    {
      title: "Lightweight trust loop",
      description:
        "A set of lightweight signals that help users make confident decisions without requiring platform-mediated guarantees.",
      bullets: [
        "Service imagery (up to 3 photos)",
        "Guided service descriptions",
        "Peer reviews surfaced on profile",
      ],
      image: "",
      imageAlt: "Lightweight trust loop",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "/images/projects/laborapp/UIOverview.png",
    imageAlt: "Labor platform overview",
    link: {
      label: "laborapp.com.ar",
      href: "https://laborapp.com.ar",
    },
    tools: [
      "Figma",
      "Figjam",
      "Notion",
      "Google Workspace",
      "Slack",
      "GPT",
      "Cursor",
      "Github",
      "Vercel",
    ],
  },
};
