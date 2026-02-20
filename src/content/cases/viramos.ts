import type { ViramosCaseStudy } from "@/lib/types";

const viramosCaseStudy: ViramosCaseStudy = {
  slug: "viramos",
  title: "Viramos",
  year: "2025",
  heroImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
  heroImageAlt: "Viramos – regatta operating system",
  description:
    "A multi-role regatta operating system connecting sailors, judges, clubs and associations across Latin America.",
  roles: [
    "Product design & strategy",
    "System architecture",
    "UX and UI",
    "Code-aligned design system",
  ],
  opportunity: {
    body: [
      {
        text: "Regattas in Latin America relied on disconnected systems and manual coordination, ",
      },
      {
        text: "leading to operational inefficiencies and inconsistent user experiences.",
        emphasis: true,
      },
      { text: " The opportunity was to build a " },
      { text: "regatta operating system", emphasis: true },
      {
        text: " — a unified digital layer supporting the entire championship lifecycle, from inscription to results.",
      },
    ],
  },
  earlyValidation: [
    {
      title: "Testing the operating model",
      description:
        "Viramos began as a no-code MVP (Bubble), validating inscriptions, payments, requests, and results.",
    },
    {
      title: "Signal for re-architecture",
      description:
        "Adoption confirmed value, but scale demanded a structural rebuild.",
    },
  ],
  contextImmersion: {
    intro:
      "SIVI, the largest sailing championship in Latin America, became a live stress test for the product at scale. On-site immersion by traveling to Brazil and being part of the tournament exposed the operational realities that remote interviews alone could not surface.",
    items: [
      {
        title: "Mobile-first reality",
        description:
          "Sailors relied entirely on mobile access while moving between docks and race areas. This confirmed that desktop assumptions were irrelevant for this user role.",
      },
      {
        title: "Formal regulatory workflows",
        description:
          "Judges operated within strict procedural frameworks. Protests, hearings, and rulings followed defined regulatory steps that required structured information, traceability, and clear communication between parties.",
      },
      {
        title: "Real-time operational pressure",
        description:
          "Administrative teams managed time-sensitive tasks like inscriptions, updates, and communications while the competition was ongoing. Speed, clarity, and information hierarchy became critical.",
      },
      {
        title: "Role definition under real conditions",
        description:
          "SIVI exposed the full range of operational roles involved in a championship. Each role carried distinct permissions and decision-making authority. Understanding these boundaries — and how roles intersected during live competition — reshaped the system architecture.",
      },
    ],
  },
  inflectionPoint: {
    body: [
      { text: "Product–market fit was validated. The architecture was not.", emphasis: true },
      {
        text: " The no-code foundation could not sustain the scale, role complexity, and performance demands of large championships. Viramos needed to evolve into ",
      },
      { text: "dependable operational infrastructure.", emphasis: true },
    ],
  },
  reArchitecting: {
    intro:
      "We rebuilt Viramos in Next.js with a system-first approach focused on clarity, scalability, and operational reliability.",
    items: [
      {
        title: "Role-based architecture",
        description:
          "Roles were redefined as permission layers rather than user types. Interactions were mapped to explicit authority and visibility rules.",
      },
      {
        title: "Modular championship engine",
        description:
          "Forms became the system core. Inscriptions, disputes, and results were structured as reusable modules to support multiple championship configurations.",
      },
      {
        title: "Mobile-first redesign",
        description:
          "Primary sailor workflows were optimized for dock-side usage, improving hierarchy, speed, and accessibility.",
      },
      {
        title: "Design system aligned with development",
        description:
          "A shadcn-based design system ensured parity between UI components and frontend implementation, reducing friction and accelerating delivery.",
      },
    ],
  },
  showcase: [
    {
      title: "Championship configuration (Clubs)",
      description:
        "Structured form architecture enables consistent setup across categories while reducing administrative errors.",
      bullets: [
        "Modular championship creation aligned with regulatory requirements",
        "Centralized management of participants, requests, and results",
        "Permission-based access for internal club roles",
      ],
      image: "",
      imageAlt: "Championship configuration for clubs",
      video: "/images/projects/viramos/ViramosClubs.mp4",
      imagePosition: "right",
    },
    {
      title: "Protest & hearing flow (Judges)",
      description:
        "Regulatory workflows formalized into traceable, structured interactions aligned with real-world procedures.",
      bullets: [
        "Guided protest submission with structured data inputs",
        "Searchable participant references (name or sail number)",
        "Traceable rulings with controlled visibility across roles",
      ],
      image: "/images/projects/viramos/ViramosJudges.png",
      imageAlt: "Protest and hearing flow for judges",
      imagePosition: "left",
    },
    {
      title: "Dock-side mobile experience (Sailors)",
      description:
        "Mobile-first interface designed for real-time usage during competition.",
      bullets: [
        "Simplified access to results, notices, and updates",
        "Reduced navigation depth for high-attention moments",
        "Responsive layouts optimized for on-the-move usage",
      ],
      image: "",
      imageAlt: "Dock-side mobile experience for sailors",
      video: "/images/projects/viramos/ViramosSailors.mp4",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "/images/projects/viramos/ViramosUIOverview.png",
    imageAlt: "Viramos platform overview",
    link: {
      label: "viramos.com",
      href: "https://viramos.com",
    },
    tools: [
      "Figma",
      "Figjam",
      "Notion",
      "Google Workspace",
      "Slack",
      "Bubble",
      "GPT",
      "VS Code",
      "Github",
    ],
  },
};

export function getViramosCaseStudy(): ViramosCaseStudy {
  return viramosCaseStudy;
}

export { viramosCaseStudy };
