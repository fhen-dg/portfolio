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
    "Senior Product Designer with 5+ years of experience designing digital products for U.S. and LATAM startups and mid-size companies.",
    "I work at the intersection of design, strategy, and technology, bridging user needs, business goals, and technical feasibility.",
    "I am experienced in research, UX/UI design, design systems, and AI-driven products across diverse industries such as wellness, fintech, real estate, and legal tech. I am passionate about building meaningful products with real impact.",
  ],
  experience: [
    {
      role: "Product Designer",
      company: "Amalgama",
      period: "2020 – 2026",
      location: "Buenos Aires",
      responsibilities: [
        "Led and contributed to the UX/UI design of 10+ digital products, owning the process end-to-end from discovery through delivery and continuous iteration. Collaborated closely with product and engineering to define viable solutions and ensured smooth handoff and implementation.",
        "Designed and maintained design systems and component libraries in Figma, ensuring visual consistency, scalability, and team efficiency. Contributed to and refined design systems directly in code to maintain high UI quality across products.",
        "Conceptualized and designed MVPs from inception, aligning business objectives, client expectations, and user needs to guide product decisions. Co-built and shipped the MVP of a web application (Laborapp) alongside a Product Owner, leveraging AI tools to integrate APIs, structure the database, and accelerate time-to-market through to production.",
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
