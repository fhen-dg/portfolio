import type { CVData } from "@/lib/types";

export const cvData: CVData = {
  profile: {
    image: "/images/profile/CVPhoto.png",
    imageAlt: "Federico Cohen Correa",
    name: "Federico Cohen Correa",
    nickname: "Fhen",
    role: "Senior Product Designer in Buenos Aires, Argentina",
  },
  about: [
    "Senior Product Designer with 5+ years building complex technical products for U.S. and LATAM startups — SaaS platforms, AI systems, and technically demanding software at scale.",
    "I think in systems: role-based architectures, permission models, and scalable interaction patterns are my natural territory. I bring structure to operational complexity and translate it into interfaces that work in the real world.",
    "I vibecode production features directly in Next.js using AI-assisted workflows, eliminating handoff cycles and shipping design decisions at engineering speed.",
  ],
  experience: [
    {
      role: "Product Designer",
      company: "Amalgama",
      period: "2020 – 2026",
      location: "Buenos Aires",
      responsibilities: [
        "Led design and delivery of 10+ technically complex digital products for US and LATAM startups — SaaS platforms, marketplaces, and AI-driven systems — owning end-to-end process from system architecture through production deployment.",
        "Designed role-based permission architectures and scalable interaction systems for products with high operational complexity. Built and maintained design systems in Figma and code, including shadcn-based component libraries aligned with frontend implementation.",
        "Vibecoded production features and 0→1 MVPs using Next.js, Vercel, and AI-assisted tooling — shipping design decisions directly in code and reducing engineering dependency from early stages.",
      ],
      featuredProjects: [
        {
          name: "Viramos",
          description: "SaaS OS for regatta management, adopted across LATAM as a reference system for organizing, tracking, and operating sailing championships.",
        },
        {
          name: "Labor",
          description: "Digital marketplace connecting agricultural producers and contractors, enabling direct service publishing, discovery, and hiring without intermediaries.",
        },
        {
          name: "Theo AI",
          description: "Legal intelligence platform leveraging machine learning to predict litigation outcomes, identify case weaknesses, and generate traceable insights for legal teams.",
        },
        {
          name: "Verybusy",
          description: "Web-based review and approval platform streamlining image feedback and collaboration between creative teams and clients.",
        },
      ],
      moreProjects: [
        { name: "Qote", type: "Mobile real estate app" },
        { name: "VenueApp", type: "Travel & tourism mobile app" },
        { name: "CoachRx", type: "Fitness platform" },
        { name: "Crypto Insights Group", type: "Fintech platform for crypto funds" },
        { name: "Revealed Travel Guides", type: "Travel & tourism mobile app" },
        { name: "Wilco", type: "Community & social mobile app" },
      ],
    },
    {
      role: "Product, UX, UI & Graphic Designer",
      company: "Freelance",
      period: "2023 – 2026",
      location: "Buenos Aires",
      responsibilities: [
        "Delivered UX & UI design for web platforms, email campaigns and branding for diverse clients.",
      ],
    },
  ],
  education: [
    {
      degree: "Product Strategy",
      institution: "Edison",
      period: "2023",
      location: "",
    },
    {
      degree: "UI Design / Design Systems",
      institution: "Coderhouse",
      period: "2021",
      location: "",
    },
    {
      degree: "Advanced UX/UI Design",
      institution: "Coderhouse",
      period: "2021",
      location: "",
    },
    {
      degree: "UX/UI Design",
      institution: "Coderhouse",
      period: "2019",
      location: "",
    },
    {
      degree: "Packaging Design",
      institution: "Universidad de Palermo",
      period: "2019",
      location: "",
    },
    {
      degree: "Bachelor in Graphic Design",
      institution: "Universidad de Palermo",
      period: "2015 - 2018",
      location: "",
    },
    {
      degree: "Web Design",
      institution: "Escuela Da Vinci",
      period: "2017",
      location: "",
    },
  ],
  skills: {
    "Product Strategy": [
      "Product vision",
      "Roadmap planning",
      "Stakeholder alignment",
      "User research",
    ],
    "UX/UI Design": [
      "User flows",
      "Wireframing",
      "Prototyping",
      "Design systems",
      "Visual design",
    ],
    Tools: [
      "Figma",
      "Pencil",
      "Principle",
      "Framer",
      "Adobe Creative Suite",
    ],
    Coding: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
    ],
    Languages: [
      "Spanish (Native)",
      "English (Fluent)",
      "Catalan (Conversational)",
    ],
  },
};
