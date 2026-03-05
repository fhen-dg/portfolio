import type { Project } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const primaryProjectsEn: Project[] = [
  {
    slug: "viramos",
    title: "Viramos",
    tagline: "A multi-role operational SaaS — rebuilt from a no-code MVP into a role-based, permission-driven platform serving 5 countries across Latin America.",
    year: "2024 - 2025",
    coverImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
    coverImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
    coverImageAlt: "Viramos – regatta operating system",
    href: "/case/viramos",
  },
  {
    slug: "labor",
    title: "Labor",
    tagline: "A 0→1 marketplace shipped to production in 2 months. Vibecoded on Next.js, deployed on Vercel with Vercel Blob, Supabase, Clerk auth, and Google Maps.",
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
  {
    slug: "verybusy",
    title: "Verybusy",
    tagline: "Permission architecture, workspace model, and monetization layer for a professional image proofing SaaS: structural work on a live product with an active user base.",
    year: "2023 - 2024",
    coverImage: "/images/projects/verybusy/VerybusyCaseCover.png",
    coverImageMobile: "/images/projects/verybusy/VerybusyCaseCoverMobile.png",
    coverImageAlt: "VeryBusy – professional image proofing platform",
    href: "/case/verybusy",
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
    tagline: "Marketplace 0 a 1 llevado a producción en 2 meses, vibecodeado en Next.js y deployado en Vercel, con Vercel Blob para gestión de archivos, Supabase como base de datos, autenticación con Clerk e integración con Google Maps.",
    year: "2026",
    coverImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
    coverImageMobile: "/images/projects/laborapp/LaborCaseCoverMobile.png",
    coverImageAlt: "Labor – marketplace de servicios agropecuarios",
    href: "/case/laborapp",
  },
  {
    slug: "theo-ai",
    title: "Theo AI",
    tagline: "Exploración rápida de producto en una startup de Legal AI en etapa temprana: herramienta de investigación basada en prompt engineering y diseño en múltiples formatos para usuarios corporativos en entornos con alta fricción de adopción.",
    year: "2025",
    coverImage: "/images/projects/theo-ai/TheoAICaseCover.png",
    coverImageMobile: "/images/projects/theo-ai/TheoAICaseCoverMobile.png",
    coverImageAlt: "Theo AI – plataforma de inteligencia para litigios",
    href: "/case/theo-ai",
  },
  {
    slug: "verybusy",
    title: "Verybusy",
    tagline: "Arquitectura de permisos, modelo de workspaces y capa de monetización para un SaaS de proofing de imágenes profesionales: trabajo estructural sobre un producto en producción con base de usuarios activa.",
    year: "2023 - 2024",
    coverImage: "/images/projects/verybusy/VerybusyCaseCover.png",
    coverImageMobile: "/images/projects/verybusy/VerybusyCaseCoverMobile.png",
    coverImageAlt: "VeryBusy – plataforma profesional de proofing de imágenes",
    href: "/case/verybusy",
  },
];

export function getPrimaryProjects(locale: Locale): Project[] {
  return locale === "es" ? primaryProjectsEs : primaryProjectsEn;
}

export const secondaryProjects: Project[] = [];
