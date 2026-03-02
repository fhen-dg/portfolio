import type { Translations } from "@/lib/i18n/types";

export const en: Translations = {
  meta: {
    title: "Fhen – Senior Product Designer",
    description:
      "Senior Product Designer with 5+ years building complex technical products — SaaS platforms, role-based systems, and AI-driven tools — from architecture to production code.",
  },
  hero: {
    introPrefix: "I'm Federico, but people call me ",
    heading: "I design, build and ship digital products as systems",
    tagline: "From product strategy through scalable architecture and design systems to production-ready code.",
    role: "Senior Product Designer",
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
    responsibilities: "My Ownership",
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
      "Senior Product Designer with 5+ years building complex technical products for U.S. and LATAM startups — SaaS platforms, AI systems, and technically demanding software at scale.",
      "I think in systems: role-based architectures, permission models, and scalable interaction patterns for products where operational complexity is the baseline. I connect user needs, engineering constraints, and business goals into decisions that hold at scale.",
      "I vibecode production features using Next.js, Vercel, and AI-assisted tooling — shipping design decisions directly in code and eliminating traditional handoff cycles.",
    ],
    experience: {
      amalgama: {
        role: "Senior Product Designer",
        period: "Aug 2020 – Jan 2026",
        location: "Buenos Aires (Hybrid)",
        summary:
          "Led design and delivery of 10+ technically complex digital products for US and LATAM startups — SaaS platforms, marketplaces, and AI-driven systems — owning end-to-end process from system architecture through production deployment.",
        responsibilities: [
          "Led end-to-end design and delivery for 10+ products and multiple 0→1 MVPs — from problem definition and system architecture through production deployment.",
          "Designed role-based permission architectures and shadcn-based design systems for products with high operational complexity, ensuring direct parity between design and frontend implementation.",
          "Vibecoded production features directly in Next.js using AI-assisted workflows, shipping design decisions in code and eliminating traditional handoff cycles.",
          "Leveraged AI across research, product definition, prototyping, and iteration — increasing speed and decision quality throughout the entire product lifecycle.",
        ],
      },
    },
    projectsList: [
      {
        name: "Laborapp",
        role: "Product Designer / Design Engineer",
        year: "2026",
        summary:
          "Co-designed and vibecoded a 0→1 marketplace MVP end-to-end — built in 2 months on Next.js, deployed on Vercel, with Supabase (Postgres via Vercel integration), Clerk auth, and Google Maps.",
        bullets: [
          "Designed full product architecture, service taxonomy, UI system, and core marketplace interaction model.",
          "Built 50% of all production features directly in code using Next.js, Cursor, and AI-assisted workflows.",
          "Fully integrated Vercel Blob (asset pipeline), Supabase via Vercel integration (Postgres), and Clerk (auth) — owning the complete infrastructure layer end-to-end.",
          "Defined early validation metrics with client marketing: listing creation rate, contact initiation, and return visit signals.",
        ],
        caseStudyLabel: "See case study",
        caseStudyUrl: "/case/laborapp",
      },
      {
        name: "Viramos",
        role: "Product Designer",
        year: "2025",
        summary:
          "Led the full architectural redesign of a multi-role operational SaaS — from a no-code MVP to a scalable, role-based permission system rebuilt in Next.js with a shadcn design system.",
        bullets: [
          "Designed a role-based permission architecture mapping explicit authority, visibility rules, and decision boundaries across multiple overlapping operational roles.",
          "Re-structured complex multi-stage workflows into modular, lifecycle-driven systems supporting regulatory processes and structured data traceability.",
          "Built with Next.js and a shadcn-based design system ensuring direct component parity between design and frontend implementation.",
          "Shipped production platform now supporting 81 championships and 43k+ users across 5 LATAM countries.",
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
