import type { Project } from "@/lib/types";

export const primaryProjects: Project[] = [
  {
    slug: "viramos",
    title: "Viramos",
    tagline: "Architectural rebuild of a multi-role operational SaaS — from no-code MVP to permission-driven platform serving 5 LATAM countries.",
    year: "2025",
    coverImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
    coverImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
    coverImageAlt: "Viramos – regatta operating system",
    href: "/case/viramos",
  },
  {
    slug: "labor",
    title: "Labor",
    tagline: "0→1 marketplace vibecoded end-to-end — Next.js on Vercel, Supabase, Clerk, and Google Maps, shipped in 2 months.",
    year: "2026",
    coverImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
    coverImageMobile: "/images/projects/laborapp/LaborCaseCoverMobile.png",
    coverImageAlt: "Labor – agricultural services marketplace",
    href: "/case/laborapp",
  },
  {
    slug: "theo-ai",
    title: "Theo AI",
    tagline: "Research tools and interfaces for an early-stage litigation AI startup in Palo Alto, serving GC executives managing portfolio risk and attorneys navigating active cases.",
    year: "2025",
    coverImage: "/images/projects/theo-ai/TheoAICaseCover.png",
    coverImageAlt: "Theo AI – litigation intelligence platform",
    href: "/case/theo-ai",
  },
];

export const secondaryProjects: Project[] = [
  {
    slug: "verybusy",
    title: "Verybusy",
    year: "2024",
    coverImage: "https://www.figma.com/api/mcp/asset/c45f4164-276b-4cad-b4f5-0c1fd4bb2d33",
    coverImageAlt: "Verybusy project cover",
    comingSoon: true,
  },
];
