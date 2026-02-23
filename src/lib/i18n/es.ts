import type { Translations } from "@/lib/i18n/types";

export const es: Translations = {
  meta: {
    title: "Fhen – Diseñador de Producto",
    description: "Diseñador de producto en Buenos Aires, Argentina",
  },
  hero: {
    introPrefix: "Soy Federico, pero me llaman ",
    heading: "Diseño productos digitales con propósito.",
    tagline: "Desde la comprensión profunda del problema hasta la ejecución lista para producción.",
    role: "Diseñador de Producto",
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
    complexities: "Complejidades",
    strategicAlignment: "Alineación estratégica",
    solution: "La solución",
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
      "Senior Product Designer con más de 5 años de experiencia diseñando productos digitales para startups y empresas medianas de Estados Unidos y LATAM.",
      "Trabajo en la intersección entre producto, diseño e ingeniería, utilizando inteligencia artificial de forma estratégica a lo largo de todo el ciclo de vida del producto, desde la definición del problema y la síntesis de research hasta el prototipado, validación e implementación en producción.",
      "Además, vibecodeo prototipos funcionales y features productivas utilizando herramientas modernas de desarrollo web y flujos asistidos por IA, acelerando iteraciones y reduciendo la dependencia del handoff tradicional.",
    ],
    experience: {
      amalgama: {
        role: "Senior Product Designer",
        period: "Ago 2020 – Ene 2026",
        location: "Buenos Aires (Híbrido)",
        summary:
          "Lideré y participé en el diseño y entrega de más de 10 productos digitales para startups y empresas medianas de Estados Unidos y LATAM, incluyendo plataformas SaaS, marketplaces y sistemas basados en IA.",
        responsibilities: [
          "Lideré iniciativas de producto end-to-end, desde la definición del problema y discovery hasta el diseño de arquitectura, modelado de interacciones e implementación en producción.",
          "Definí arquitecturas de producto y sistemas de diseño escalables, alineados con restricciones técnicas y mantenibilidad a largo plazo.",
          "Vibecodeé prototipos funcionales y features productivas utilizando herramientas modernas de desarrollo y flujos asistidos por IA, habilitando validación temprana y reduciendo fricción con ingeniería.",
          "Co-construí y lancé múltiples MVPs 0→1, participando en decisiones de estrategia de producto, factibilidad técnica y arquitectura.",
          "Apliqué IA en procesos de research, análisis competitivo, definición de producto, prototipado y refinamiento para aumentar velocidad, claridad e iteración.",
          "Trabajé junto a founders, product owners, scrum masters, QA y equipos de ingeniería para alinear objetivos de negocio, necesidades de usuario y factibilidad técnica en soluciones escalables.",
        ],
      },
      freelance: {
        role: "Product, UX, UI & Graphic Designer",
        summary:
          "Diseño UX y UI para plataformas web, campañas de email y branding para diversos clientes.",
        responsibilities: [],
      },
    },
    projectsList: [
      {
        name: "Laborapp",
        role: "Product Designer / Design Engineer",
        year: "2026",
        summary:
          "Co-definí y co-construí un MVP 0→1 de un marketplace que conecta productores agropecuarios y contratistas en Argentina.",
        bullets: [
          "Diseñé la arquitectura completa del producto, la taxonomía de servicios, el sistema de UI y el modelo central de interacción del marketplace.",
          "Vibecodeé el MVP completo junto a una Product Owner, desarrollando todas las features y layouts directamente en código.",
          "Implementé la funcionalidad end-to-end utilizando Next.js, Vercel, Vercel Blob, Clerk, Postgres e integraciones con Google Maps.",
          "Definí y alineé métricas tempranas de validación junto al equipo de marketing del cliente para medir engagement y señales de transacción.",
        ],
        caseStudyLabel: "Ver caso de estudio",
        caseStudyUrl: "/case/laborapp",
      },
      {
        name: "Viramos",
        role: "Product Designer",
        year: "2025",
        summary:
          "Rediseñé la arquitectura central de una plataforma SaaS de gestión de regatas utilizada por clubes y organizadores de campeonatos.",
        bullets: [
          "Reestructuré los flujos de la plataforma hacia un sistema basado en roles y ciclos de campeonato alineados con la complejidad operativa real.",
          "Definí modelos de interacción escalables para soportar campeonatos multi-etapa y procesos regulatorios.",
          "Realicé investigación de campo durante campeonatos en vivo para validar restricciones y dinámicas reales de uso.",
          "Diseñé y arquitecturé flujos centrales en una plataforma que soporta más de 80 campeonatos, 40.000 usuarios registrados y 150.000 sesiones.",
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
