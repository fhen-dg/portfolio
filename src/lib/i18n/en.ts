import type { Translations } from "@/lib/i18n/types";

export const en: Translations = {
  meta: {
    title: "Fhen – Product Designer",
    description: "Product designer from Buenos Aires",
  },
  hero: {
    introPrefix: "I'm Federico, but people call me ",
    heading: "I design purposeful digital products.",
    tagline: "From deep problem understanding to production-ready execution.",
    role: "Product Designer",
    location: "Buenos Aires, Argentina",
  },
  nav: {
    projects: "Projects",
    cv: "CV",
    contact: "Contact",
  },
  contact: {
    title: "Let's talk",
    linkedin: "LinkedIn",
    email: "Email",
    calendar: "Calendar",
  },
  projects: {
    comingSoon: "Coming soon",
  },
  footer: {
    brand: "Fhen",
    fullName: "Federico Cohen Correa",
    location: "Buenos Aires, Argentina",
    year: "2026",
    timezone: "Timezone GMT-3",
  },
  caseSections: {
    problem: "The Problem",
    responsibilities: "My Responsibilities",
    complexities: "Complexities",
    strategicAlignment: "Strategic Alignment",
    solution: "The Solution",
  },
  caseSnapshot: {
    role: "Role",
    duration: "Duration",
    team: "Team",
  },
  viramosSections: {
    opportunity: "The Opportunity",
    earlyValidation: "Early validation (No-code phase)",
    contextImmersion: "Context immersion — SIVI (Brazil)",
    inflectionPoint: "Inflection Point",
    reArchitecting: "Re-architecting for scale",
  },
  cv: {
    sections: {
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      projectsOther: "Other projects",
      certifications: "Certifications",
    },
    profile: {
      role: "Senior Product Designer in Buenos Aires, Argentina",
    },
    about: [
      "Senior Product Designer with 5+ years of experience designing digital products for U.S. and LATAM startups and mid-size companies.",
      "I operate at the intersection of product, design, and engineering, leveraging AI strategically across the full product lifecycle, from problem framing and research synthesis to prototyping, validation, and production-level implementation.",
      "I actively vibecode functional prototypes and production features using modern web tooling and AI-assisted development, accelerating iteration and reducing dependency on traditional handoff cycles.",
    ],
    experience: {
      amalgama: {
        role: "Senior Product Designer",
        period: "Aug 2020 – Jan 2026",
        location: "Buenos Aires (Hybrid)",
        summary:
          "Led and contributed to the design and delivery of 10+ digital products across US and LATAM startups and mid-size companies, spanning SaaS platforms, marketplaces, and AI-driven systems.",
        responsibilities: [
          "Led end-to-end product initiatives from problem definition and discovery through system architecture design, interaction modeling, and production deployment.",
          "Defined scalable product architectures and design systems aligned with engineering constraints and long-term maintainability.",
          "Vibecoded functional prototypes and production-ready features using modern web tooling and AI-assisted workflows, enabling rapid architectural validation and reducing early-stage engineering dependency.",
          "Co-built and shipped multiple 0→1 MVPs, contributing to product strategy, technical feasibility, and architectural decisions.",
          "Leveraged AI across research synthesis, competitive analysis, product definition, prototyping, and refinement workflows to increase speed, clarity, and iteration depth.",
          "Partnered with founders, product owners, scrum masters, QCs, and engineers to align business goals, user needs, and technical feasibility into scalable product solutions.",
        ],
      },
      freelance: {
        role: "Product, UX, UI & Graphic Designer",
        summary:
          "Delivered UX & UI design for web platforms, email campaigns and branding for diverse clients.",
        responsibilities: [],
      },
    },
    projectsList: [
      {
        name: "Laborapp",
        role: "Product Designer / Design Engineer",
        year: "2026",
        summary:
          "Co-defined and co-built a 0→1 marketplace MVP connecting agricultural producers and contractors in Argentina.",
        bullets: [
          "Designed the full product architecture, service taxonomy, complete UI system, and core marketplace interaction model.",
          "Vibecoded the complete MVP alongside a Product Owner, building all core features and layouts directly in code.",
          "Implemented end-to-end product functionality using Next.js, Vercel, Vercel Blob, Clerk, Postgres, and Google Maps integrations.",
          "Defined and aligned early-stage validation metrics with client marketing teams to measure user engagement and transaction signals.",
        ],
        caseStudyLabel: "See case study",
        caseStudyUrl: "/case/laborapp",
      },
      {
        name: "Viramos",
        role: "Product Designer",
        year: "2025",
        summary:
          "Redesigned the core architecture of a regatta management SaaS used by sailing clubs and championship organizers.",
        bullets: [
          "Re-structured platform workflows into a role-based, lifecycle-driven system aligned with real-world operational complexity.",
          "Defined scalable interaction models to support multi-stage championships and regulatory processes.",
          "Conducted on-site field research during live championship events to validate constraints and workflow realities.",
          "Designed and architected core workflows for a platform supporting 80+ championship events, serving 40k+ registered participants and 150k+ sessions.",
        ],
        caseStudyLabel: "See case study",
        caseStudyUrl: "/case/viramos",
      },
      {
        name: "Theo AI",
        role: "Product Designer",
        year: "2025",
        summary:
          "Explored and prototyped AI-driven legal intelligence workflows for a venture-backed predictive litigation platform used by general counsels and litigation finance teams.",
        bullets: [
          "Designed and prototyped a GPT-powered deep research tool to identify high-probability litigation cases for funding evaluation.",
          "Rapidly prototyped alternative product directions, including executive-level dashboards and litigation portfolio tools with predictive case insights.",
          "Shaped predictive analytics workflows that connected AI outputs such as outcome probabilities and settlement projections to concrete legal decision points.",
          "Partnered with product and legal leadership to prioritize features in a high-velocity startup environment focused on rapid validation and iteration.",
        ],
      },
      {
        name: "VeryBusy",
        role: "Product Designer",
        year: "2024",
        summary:
          "Led platform restructuring and interaction redesign for a creative review and approval platform used by retouchers, art directors, and production teams.",
        bullets: [
          "Redesigned core interaction flows and UI components to improve clarity, usability, and feedback velocity in multi-round asset review workflows.",
          "Structured and scaled the design system with remodeled and newly defined components supporting evolving product capabilities.",
          "Defined and documented a robust role and permission architecture to support diverse profiles and secure access patterns.",
          "Established optimized handoff principles and delivery standards to increase design-to-code efficiency and reduce rework.",
        ],
      },
    ],
    projectsOtherList: [
      { name: "Qote", type: "Real estate mobile app" },
      { name: "VenueApp", type: "Travel & tourism mobile app" },
      { name: "CoachRx", type: "Fitness platform" },
      { name: "Crypto Insights Group", type: "Fintech platform for crypto funds" },
      { name: "Wilco", type: "Community & social mobile app" },
    ],
    education: {
      productStrategy: "Product Strategy",
      uiDesignSystems: "UI Design / Design Systems",
      advancedUXUI: "Advanced UX/UI Design",
      uxUIDesign: "UX/UI Design",
      packagingDesign: "Packaging Design",
      bachelorGraphicDesign: "Bachelor in Graphic Design",
      webDesign: "Web Design",
    },
  },
};
