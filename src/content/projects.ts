import type { Project } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const primaryProjectsEn: Project[] = [
  {
    slug: "viramos",
    title: "Viramos",
    tagline: "Architectural rebuild of a multi-role operational SaaS — from no-code MVP to permission-driven platform serving 5 LATAM countries.",
    year: "2024 - 2025",
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
    tagline: "Rapid product exploration at an early-stage legal AI startup: prompt-engineered research tooling and multi-format design for high-friction enterprise users.",
    year: "2025",
    coverImage: "/images/projects/theo-ai/TheoAICaseCover.png",
    coverImageMobile: "/images/projects/theo-ai/TheoAICaseCoverMobile.png",
    coverImageAlt: "Theo AI – litigation intelligence platform",
    href: "/case/theo-ai",
  },
];

const primaryProjectsEs: Project[] = [
  {
    slug: "viramos",
    title: "Viramos",
    tagline: "SaaS operativo multirol, reconstruido desde un MVP no-code hacia una plataforma robusta basada en roles y permisos, con operación en 5 países de Latinoamérica.",
    year: "2024 - 2025",
    coverImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
    coverImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
    coverImageAlt: "Viramos – sistema operativo para regatas",
    href: "/case/viramos",
  },
  {
    slug: "labor",
    title: "Labor",
    tagline: "Marketplace 0 a 1 construido y llevado a producción en 2 meses, vibe-codeada en Next.js y deployada en Vercel, con Vercel Blob para gestión de archivos, Supabase como base de datos, autenticación con Clerk e integración con Google Maps.",
    year: "2026",
    coverImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
    coverImageMobile: "/images/projects/laborapp/LaborCaseCoverMobile.png",
    coverImageAlt: "Labor – marketplace de servicios agropecuarios",
    href: "/case/laborapp",
  },
  {
    slug: "theo-ai",
    title: "Theo AI",
    tagline: "Exploración de producto acelerada en una startup de IA legal en etapa temprana: herramientas de investigación con prompt engineering y diseño multi-formato para usuarios enterprise de alta fricción.",
    year: "2025",
    coverImage: "/images/projects/theo-ai/TheoAICaseCover.png",
    coverImageMobile: "/images/projects/theo-ai/TheoAICaseCoverMobile.png",
    coverImageAlt: "Theo AI – plataforma de inteligencia para litigios",
    href: "/case/theo-ai",
  },
];

export function getPrimaryProjects(locale: Locale): Project[] {
  return locale === "es" ? primaryProjectsEs : primaryProjectsEn;
}

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
