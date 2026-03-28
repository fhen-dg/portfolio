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
    tagline: "A 0→1 agriculture marketplace shipped to production in 2 months. Built on Next.js, deployed on Vercel with Vercel Blob, Supabase, Clerk auth, and Google Maps.",
    year: "2026",
    coverImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
    coverImageMobile: "/images/projects/laborapp/LaborCaseCoverMobile.png",
    coverImageAlt: "Labor – agricultural services marketplace",
    href: "/case/laborapp",
  },
];

const primaryProjectsEs: Project[] = [
  {
    slug: "viramos",
    title: "Viramos",
    tagline: "Un SaaS operativo multi-rol—reconstruido desde un MVP no-code hacia una plataforma basada en roles y permisos que opera en 5 países de Latinoamérica.",
    year: "2024 - 2025",
    coverImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
    coverImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
    coverImageAlt: "Viramos – sistema operativo para regatas",
    href: "/case/viramos",
  },
  {
    slug: "labor",
    title: "Labor",
    tagline: "Un marketplace agropecuario 0→1 llevado a producción en 2 meses. Construido en Next.js, desplegado en Vercel con Vercel Blob, Supabase, autenticación con Clerk y Google Maps.",
    year: "2026",
    coverImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
    coverImageMobile: "/images/projects/laborapp/LaborCaseCoverMobile.png",
    coverImageAlt: "Labor – marketplace de servicios agropecuarios",
    href: "/case/laborapp",
  },
];

export function getPrimaryProjects(locale: Locale): Project[] {
  return locale === "es" ? primaryProjectsEs : primaryProjectsEn;
}

export const secondaryProjects: Project[] = [
  {
    slug: "theo-ai",
    title: "Theo AI",
    tagline: "Rapid product exploration at an early-stage legal AI startup: prompt-engineered research tooling and multi-format design for high-friction enterprise users.",
    year: "2025",
    coverImage: "/images/projects/theo-ai/TheoAICaseCover.png",
    coverImageAlt: "Theo AI – litigation intelligence platform",
    href: "/case/theo-ai",
  },
  {
    slug: "verybusy",
    title: "Verybusy",
    tagline: "Permission architecture, workspace model, and monetization layer for a professional image proofing SaaS: structural work on a live product with an active user base.",
    year: "2023 - 2024",
    coverImage: "/images/projects/verybusy/VerybusyCaseCover.png",
    coverImageAlt: "VeryBusy – professional image proofing platform",
    href: "/case/verybusy",
  },
];

const recommendedNextBySlug: Record<string, [string, string]> = {
  viramos: ["labor", "theo-ai"],
  labor: ["viramos", "theo-ai"],
  laborapp: ["viramos", "theo-ai"],
  "theo-ai": ["labor", "verybusy"],
  verybusy: ["labor", "viramos"],
};

function getAllProjects(locale: Locale): Project[] {
  return [...getPrimaryProjects(locale), ...secondaryProjects];
}

export function getRecommendedNextProjects(currentSlug: string, locale: Locale): Project[] {
  const recommendationSlugs = recommendedNextBySlug[currentSlug];
  if (!recommendationSlugs) {
    return [];
  }

  const allProjects = getAllProjects(locale);
  const bySlug = new Map<string, Project>(allProjects.map((project) => [project.slug, project]));

  return recommendationSlugs
    .map((slug) => bySlug.get(slug))
    .filter((project): project is Project => Boolean(project));
}
