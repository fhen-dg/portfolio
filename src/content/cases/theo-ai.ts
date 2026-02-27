import type { TheoAICaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const theoAICaseStudyEn: TheoAICaseStudy = {
  slug: "theo-ai",
  title: "Theo AI",
  year: "2025  —  Visual assets not shown due to NDA",
  heroImage: "",
  heroImageAlt: "Theo AI – litigation intelligence platform",
  description:
    "A fast-moving litigation AI startup in Palo Alto, with research tools and interfaces for both GC executives managing portfolio risk and attorneys navigating active cases.",
};

const theoAICaseStudyEs: TheoAICaseStudy = {
  slug: "theo-ai",
  title: "Theo AI",
  year: "2025  —  Elementos visuales no mostrados por NDA",
  heroImage: "",
  heroImageAlt: "Theo AI – plataforma de inteligencia para litigios",
  description:
    "Una startup de IA para litigios en rápido crecimiento, con sede en Palo Alto, con herramientas de investigación e interfaces para ejecutivos GC que gestionan riesgo de portafolio y abogados que navegan casos activos.",
};

export function getTheoAICaseStudy(locale: Locale): TheoAICaseStudy {
  return locale === "es" ? theoAICaseStudyEs : theoAICaseStudyEn;
}

export const theoAICaseStudy = theoAICaseStudyEn;
