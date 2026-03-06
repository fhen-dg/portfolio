import type { Translations } from "@/lib/i18n/types";

export const es: Translations = {
  meta: {
    title: "Fhen – Senior Product Designer",
    description:
      "Senior Product Designer con más de 5 años construyendo productos técnicos complejos — plataformas SaaS, sistemas basados en roles y herramientas impulsadas por IA — desde la arquitectura hasta código en producción.",
  },
  hero: {
    introPrefix: "Soy Federico, pero me llaman ",
    heading: "Diseño y construyo productos digitales como sistemas",
    tagline: "Desde la estrategia de producto, arquitectura del sistema y design systems, hasta código listo para producción.",
    role: "Senior Product Designer",
    location: "Buenos Aires, Argentina",
  },
  nav: {
    projects: "Proyectos",
    cv: "CV",
    contact: "Contacto",
  },
  contact: {
    title: "Hablemos",
    linkedin: "LinkedIn",
    email: "Email",
    calendar: "Calendar",
  },
  projects: {
    comingSoon: "Próximamente",
  },
  footer: {
    brand: "Fhen",
    fullName: "Federico Cohen Correa",
    location: "Buenos Aires, Argentina",
    year: "2026",
    timezone: "Zona horaria GMT-3",
  },
  caseSections: {
    problem: "El problema",
    responsibilities: "Mi rol",
    complexities: "Complejidades",
    strategicAlignment: "Alineación estratégica",
    solution: "La solución",
    showcase: "La propuesta",
  },
  caseSnapshot: {
    role: "Rol",
    duration: "Duración",
    team: "Equipo",
  },
  viramosSections: {
    opportunity: "La oportunidad",
    earlyValidation: "Validación temprana (fase no-code)",
    contextImmersion: "Inmersión contextual — SIVI (Brasil)",
    inflectionPoint: "Punto de inflexión",
    reArchitecting: "Re-arquitectura para escalar",
  },
  cv: {
    sections: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      projectsOther: "Otros proyectos",
      certifications: "Certificaciones",
    },
    profile: {
      role: "Senior Product Designer en Buenos Aires, Argentina",
    },
    about: [
      "Senior Product Designer con más de 5 años construyendo productos técnicos complejos para startups de EE. UU. y LATAM — plataformas SaaS, sistemas de IA y software técnicamente exigente a escala.",
      "Pienso en sistemas: arquitecturas basadas en roles, modelos de permisos y patrones de interacción escalables para productos donde la complejidad operativa es la base. Conecto necesidades de usuario, restricciones de ingeniería y objetivos de negocio en decisiones que se sostienen a escala.",
      "Vibecodeo features en producción usando Next.js, Vercel y tooling asistido por IA — llevando decisiones de diseño directamente al código y eliminando ciclos tradicionales de handoff.",
    ],
    experience: {
      amalgama: {
        role: "Senior Product Designer",
        period: "Ago 2020 – Ene 2026",
        location: "Buenos Aires (Híbrido)",
        summary:
          "Lideré el diseño y la entrega de más de 10 productos digitales técnicamente complejos para startups de EE. UU. y LATAM — plataformas SaaS, marketplaces y sistemas impulsados por IA — gestionando el proceso end-to-end desde la arquitectura del sistema hasta el despliegue en producción.",
        responsibilities: [
          "Lideré el diseño y la entrega end-to-end de más de 10 productos y múltiples MVPs 0→1 — desde la definición del problema y la arquitectura del sistema hasta el despliegue en producción.",
          "Diseñé arquitecturas de permisos basadas en roles y design systems con shadcn para productos de alta complejidad operativa, asegurando paridad directa entre diseño e implementación frontend.",
          "Vibecodeé features productivas directamente en Next.js usando flujos asistidos por IA, enviando decisiones de diseño en código y eliminando ciclos de handoff tradicionales.",
          "Apliqué IA en research, definición de producto, prototipado e iteración — aumentando velocidad y calidad de decisión a lo largo de todo el ciclo de vida del producto.",
        ],
      },
    },
    projectsList: [
      {
        name: "Laborapp",
        role: "Product Designer / Design Engineer",
        year: "2026",
        summary:
          "Co-diseñé y vibecodeé un MVP de marketplace 0→1 end-to-end — construido en 2 meses con Next.js, desplegado en Vercel, con Supabase (Postgres vía integración de Vercel), autenticación con Clerk y Google Maps.",
        bullets: [
          "Diseñé la arquitectura completa del producto, la taxonomía de servicios, el sistema de UI y el modelo central de interacción del marketplace.",
          "Construí el 50% de las features en producción directamente en código usando Next.js, Cursor y flujos asistidos por IA.",
          "Integré por completo Vercel Blob (pipeline de assets), Supabase vía integración de Vercel (Postgres) y Clerk (auth), asumiendo la capa de infraestructura end-to-end.",
          "Definí métricas tempranas de validación con marketing del cliente: tasa de creación de publicaciones, inicio de contacto y señales de retorno.",
        ],
        caseStudyLabel: "Ver caso de estudio",
        caseStudyUrl: "/case/laborapp",
      },
      {
        name: "Viramos",
        role: "Product Designer",
        year: "2024 - 2025",
        summary:
          "Lideré el rediseño arquitectónico completo de un SaaS operativo multi-rol — de un MVP no-code a un sistema de permisos escalable basado en roles, reconstruido en Next.js con un design system shadcn.",
        bullets: [
          "Diseñé una arquitectura de permisos basada en roles mapeando autoridad explícita, reglas de visibilidad y límites de decisión entre múltiples roles operativos superpuestos.",
          "Reestructuré workflows complejos de múltiples etapas en sistemas modulares impulsados por ciclo de vida, soportando procesos regulatorios y trazabilidad de datos estructurados.",
          "Construido con Next.js y un design system basado en shadcn, asegurando paridad directa de componentes entre diseño e implementación frontend.",
          "Plataforma en producción que hoy soporta 81 campeonatos y 43k+ usuarios en 5 países de LATAM.",
        ],
        caseStudyLabel: "Ver caso de estudio",
        caseStudyUrl: "/case/viramos",
      },
      {
        name: "Theo AI",
        role: "Product Designer",
        year: "2025",
        summary:
          "Exploré y prototipé workflows de inteligencia legal basados en IA para una startup estadounidense enfocada en analítica predictiva de litigios.",
        bullets: [
          "Diseñé y prototipé una herramienta de deep research impulsada por GPT para identificar casos con alta probabilidad de éxito en contextos de litigation funding.",
          "Prototipé rápidamente distintas direcciones de producto, incluyendo dashboards ejecutivos y herramientas de gestión de portfolios legales con insights predictivos.",
          "Modelé workflows que conectaban outputs de IA, como probabilidades de resultado y proyecciones de settlement, con decisiones estratégicas concretas.",
          "Trabajé junto a liderazgo de producto y legal para priorizar features en un entorno de alta experimentación y validación continua.",
        ],
      },
      {
        name: "VeryBusy",
        role: "Product Designer",
        year: "2024",
        summary:
          "Lideré la reestructuración de plataforma y rediseño de interacciones para una herramienta profesional de revisión y aprobación de activos visuales utilizada por retouchers, directores de arte y equipos de producción.",
        bullets: [
          "Rediseñé flujos centrales y componentes de UI para mejorar claridad, usabilidad y velocidad de feedback en procesos de revisión con múltiples iteraciones.",
          "Estructuré y escalé el sistema de diseño con componentes remodelados y nuevos elementos para soportar la evolución del producto.",
          "Definí y documenté una arquitectura robusta de roles y permisos para soportar distintos perfiles de usuario y patrones de acceso seguros.",
          "Establecí principios optimizados de handoff y estándares de entrega en Figma para mejorar eficiencia entre diseño y desarrollo.",
        ],
      },
    ],
    projectsOtherList: [
      { name: "Qote", type: "App mobile de real estate" },
      { name: "VenueApp", type: "App mobile para viajes y turismo" },
      { name: "CoachRx", type: "Plataforma fitness" },
      { name: "Crypto Insights Group", type: "Plataforma fintech para fondos cripto" },
      { name: "Wilco", type: "App mobile de comunidad y social" },
    ],
    education: {
      productStrategy: "Estrategia de producto",
      uiDesignSystems: "Diseño UI / Design Systems",
      advancedUXUI: "Diseño UX/UI avanzado",
      uxUIDesign: "Diseño UX/UI",
      packagingDesign: "Diseño de packaging",
      bachelorGraphicDesign: "Licenciatura en Diseño Gráfico",
      webDesign: "Diseño Web",
    },
  },
};
