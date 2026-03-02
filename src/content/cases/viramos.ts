import type { ViramosCaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const viramosCaseStudyEn: ViramosCaseStudy = {
  slug: "viramos",
  title: "Viramos",
  year: "2025",
  heroImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
  heroImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
  heroImageAlt: "Viramos – regatta operating system",
  description:
    "A multi-role operational SaaS — rebuilt from a no-code MVP into a role-based, permission-driven platform serving 5 countries across Latin America.",
  snapshot: {
    role: "Product Designer",
    duration: "11 months",
    team: "Product Owner, Scrum Master (part-time), Designer (me), Engineering team, QC",
  },
  summary: [
    { text: "Viramos is a " },
    { text: "multi-role operational SaaS", emphasis: true },
    {
      text: " used by sailing clubs and championship organizers across multiple countries.",
    },
    { type: "break", count: 2 },
    { text: "After launching an initial " },
    { text: "no-code MVP", emphasis: true },
    {
      text: ", it became clear that the system architecture could not support the operational complexity of large-scale championships.",
    },
    { type: "break", count: 2 },
    { text: "The project evolved into a " },
    { text: "full platform rebuild designed for scalability", emphasis: true },
    {
      text: ", supporting multi-stage competitions, regulatory workflows, and role-based operations.",
    },
  ],
  responsibilities: [
    {
      icon: "layout-template",
      title: "Product architecture",
      description:
        "Co-defined the entire platform structure as part of a three-person decision team with the PO and tech lead, owning the championship lifecycle model, domain design, and information architecture.",
    },
    {
      icon: "workflow",
      title: "Workflow re-architecture",
      description:
        "Redesigned complex competition flows into modular, role-aware systems, translating real-world operational complexity into structured interaction patterns across multi-stage championships.",
    },
    {
      icon: "shield-check",
      title: "Role & permission model",
      description:
        "Designed a layered permission architecture mapping explicit authority, visibility rules, and decision boundaries across all overlapping operational roles in a live championship context.",
    },
    {
      icon: "component",
      title: "Design system",
      description:
        "Built a complete design system in Figma, deeply aligned to shadcn's nomenclature, components, variables, and tokens, and made direct commits to the codebase to ensure aesthetic precision in the frontend implementation.",
    },
    {
      icon: "compass",
      title: "Field research & domain immersion",
      description:
        "Conducted on-site research across multiple live championship events, including travel to SIVI in Brazil, building user personas for all key roles and surfacing operational realities that reshaped the system architecture.",
    },
    {
      icon: "lightbulb",
      title: "Feature ideation",
      description:
        "Ideated novel product features alongside the PO, grounded in deep user understanding from field research, including the check-in/check-out system that emerged directly from observing real championship operations.",
    },
  ],
  opportunity: {
    body: [
      { text: "A multi-stakeholder operational domain with " },
      { text: "no unified system", emphasis: true },
      {
        text: " — clubs, organizers, judges, and sailors each relied on disconnected tools and manual coordination. The opportunity was to build a ",
      },
      { text: "unified championship platform", emphasis: true },
      {
        text: " — a structured operational layer connecting every role across the entire competition lifecycle, from registration to results.",
      },
    ],
  },
  contextImmersion: {
    intro:
      "SIVI, the largest sailing championship in Latin America, became a live stress test for the system at scale. Traveling to Brazil and embedding in the tournament exposed the full range of operational realities — role dynamics, edge cases, and real-time pressures — that remote interviews alone could never surface.",
    items: [
      {
        title: "Mobile-first reality",
        description:
          "Sailors relied entirely on mobile access while moving between docks and race areas. This confirmed that desktop assumptions were irrelevant for this user role.",
      },
      {
        title: "Formal regulatory workflows",
        description:
          "Judges operated within strict procedural frameworks. Protests, hearings, and rulings followed defined regulatory steps that required structured information, traceability, and clear communication between parties.",
      },
      {
        title: "Real-time operational pressure",
        description:
          "Administrative teams managed time-sensitive tasks like inscriptions, updates, and communications while the competition was ongoing. Speed, clarity, and information hierarchy became critical.",
      },
      {
        title: "Role definition under real conditions",
        description:
          "SIVI exposed the full range of operational roles involved in a championship. Each role carried distinct permissions and decision-making authority. Understanding these boundaries — and how roles intersected during live competition — reshaped the system architecture.",
      },
    ],
  },
  inflectionPoint: {
    body: [
      { text: "Product–market fit was validated. The architecture was not.", emphasis: true },
      {
        text: " The no-code foundation could not sustain the scale, role complexity, and performance demands of large championships. Viramos needed to evolve into ",
      },
      { text: "dependable operational infrastructure.", emphasis: true },
    ],
  },
  reArchitecting: {
    intro:
      "We rebuilt Viramos in Next.js with a system-first approach focused on clarity, scalability, and operational reliability.",
    items: [
      {
        title: "Role-based architecture",
        description:
          "Permission layers define what each role can see, trigger, and decide — independently of how roles overlap during live competition.",
      },
      {
        title: "Modular championship engine",
        description:
          "Every event runs on the same reusable modules — inscriptions, disputes, and results configure consistently across categories and regulatory formats.",
      },
      {
        title: "Mobile-first field experience",
        description:
          "Sailor-facing flows are built for dock-side conditions: minimal navigation depth, clear hierarchy, and fast access to real-time updates.",
      },
      {
        title: "Design system aligned with development",
        description:
          "Design and implementation share a single component language — Figma changes map directly to shadcn tokens in production, eliminating drift between design intent and final output.",
      },
    ],
  },
  showcase: [
    {
      title: "Role-based admin configuration (Clubs)",
      description:
        "Structured form architecture enables consistent setup across categories while reducing administrative errors.",
      bullets: [
        "Modular championship creation aligned with regulatory requirements",
        "Centralized management of participants, requests, and results",
        "Permission-based access for internal club roles",
      ],
      image: "",
      imageAlt: "Championship configuration for clubs",
      video: "/images/projects/viramos/ViramosClubs.mp4",
      imagePosition: "right",
    },
    {
      title: "Formalized regulatory workflows (Judges)",
      description:
        "Regulatory workflows formalized into traceable, structured interactions aligned with real-world procedures.",
      bullets: [
        "Guided protest submission with structured data inputs",
        "Searchable participant references (name or sail number)",
        "Traceable rulings with controlled visibility across roles",
      ],
      image: "/images/projects/viramos/ViramosJudges.png",
      imageAlt: "Protest and hearing flow for judges",
      imagePosition: "left",
    },
    {
      title: "Mobile-first field experience (Sailors)",
      description:
        "Mobile-first interface designed for real-time usage during competition.",
      bullets: [
        "Simplified access to results, notices, and updates",
        "Reduced navigation depth for high-attention moments",
        "Responsive layouts optimized for on-the-move usage",
      ],
      image: "",
      imageAlt: "Dock-side mobile experience for sailors",
      video: "/images/projects/viramos/ViramosSailors.mp4",
      imagePosition: "right",
    },
  ],
  metrics: {
    heading: "Impact",
    intro:
      "Viramos evolved from MVP to operational infrastructure adopted by leading clubs across Latin America.",
    rows: [
      [
        { value: "43.000", label: "Unique users" },
        { value: "157.000", label: "Sessions" },
      ],
      [
        { value: "81", label: "Championships" },
        { value: "21", label: "Clubs & associations" },
        { value: "5", label: "Countries (LATAM)" },
      ],
    ],
    conclusion:
      "Viramos operates today as the digital backbone for competitive sailing championships in the region.",
    footnote: "2025 metrics",
  },
  overview: {
    image: "/images/projects/viramos/ViramosUIOverview.png",
    imageAlt: "Viramos platform overview",
    link: {
      label: "viramos.com",
      href: "https://viramos.com",
    },
    tools: [
      "Figma",
      "Figjam",
      "Notion",
      "Google Workspace",
      "Slack",
      "Bubble",
      "Next.js",
      "shadcn",
      "GPT",
      "VS Code",
      "Github",
    ],
  },
};

const viramosCaseStudyEs: ViramosCaseStudy = {
  slug: "viramos",
  title: "Viramos",
  year: "2025",
  heroImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
  heroImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
  heroImageAlt: "Viramos – sistema operativo para regatas",
  description:
    "Un sistema operativo para regatas multi-rol que conecta navegantes, jueces, clubes y asociaciones en toda Latinoamérica.",
  snapshot: {
    role: "Product Designer",
    duration: "11 meses",
    team: "Product owner, Scrum master (part-time), Diseñador (yo), equipo de ingeniería, QC",
  },
  summary: [
    { text: "Viramos es un " },
    { text: "SaaS operacional multi-rol", emphasis: true },
    {
      text: " utilizado por clubes de vela y organizadores de campeonatos en múltiples países.",
    },
    { type: "break", count: 2 },
    { text: "Luego de lanzar un " },
    { text: "MVP no-code", emphasis: true },
    {
      text: " inicial, quedó claro que la arquitectura del sistema no podía soportar la complejidad operativa de campeonatos a gran escala.",
    },
    { type: "break", count: 2 },
    { text: "El proyecto evolucionó hacia una " },
    { text: "reconstrucción completa de la plataforma diseñada para escalar", emphasis: true },
    {
      text: ", capaz de soportar competencias multi-etapa, flujos regulatorios y operaciones basadas en roles.",
    },
  ],
  responsibilities: [
    {
      icon: "layout-template",
      title: "Arquitectura de producto",
      description:
        "Co-definí la estructura completa de la plataforma como parte de un equipo de decisión de tres personas con la PO y el tech lead, liderando el modelo de ciclo de vida, el diseño de dominio y la arquitectura de información.",
    },
    {
      icon: "workflow",
      title: "Re-arquitectura de workflows",
      description:
        "Rediseñé flujos complejos de competencia en sistemas modulares y conscientes del rol, traduciendo la complejidad operativa real en patrones de interacción estructurados para campeonatos multi-etapa.",
    },
    {
      icon: "shield-check",
      title: "Modelo de roles y permisos",
      description:
        "Diseñé una arquitectura de permisos por capas que mapea autoridad explícita, reglas de visibilidad y límites de decisión entre todos los roles operativos superpuestos en el contexto de un campeonato en vivo.",
    },
    {
      icon: "component",
      title: "Design system",
      description:
        "Construí un design system completo en Figma, profundamente alineado a la nomenclatura, componentes, variables y tokens de shadcn, y realicé commits directos en el repositorio para asegurar precisión estética en la implementación frontend.",
    },
    {
      icon: "compass",
      title: "Research de campo e inmersión de dominio",
      description:
        "Realicé investigación on-site en múltiples campeonatos en vivo, incluyendo un viaje a SIVI en Brasil, construyendo user personas para todos los roles clave y exponiendo realidades operativas que redefinieron la arquitectura del sistema.",
    },
    {
      icon: "lightbulb",
      title: "Ideación de features",
      description:
        "Ideé features novedosas junto a la PO a partir del entendimiento profundo del usuario en campo, incluyendo el sistema de check-in/check-out que surgió directamente de observar operaciones reales de campeonato.",
    },
  ],
  opportunity: {
    body: [
      { text: "Un dominio operativo multi-stakeholder " },
      { text: "sin sistema unificado", emphasis: true },
      {
        text: " — clubes, organizadores, jueces y navegantes operaban desde herramientas desconectadas y coordinación manual. La oportunidad era construir una ",
      },
      { text: "plataforma unificada de campeonatos", emphasis: true },
      {
        text: ": una capa operativa estructurada que conectara cada rol a lo largo del ciclo de vida completo de la competencia, desde el registro hasta la publicación de resultados.",
      },
    ],
  },
  contextImmersion: {
    intro:
      "SIVI, el campeonato de vela más grande de Latinoamérica, se convirtió en un stress test real del sistema a escala. Viajar a Brasil e integrarse al torneo permitió exponer el espectro completo de dinámicas operativas — roles en acción, edge cases y presión en tiempo real — que las entrevistas remotas nunca podrían revelar.",
    items: [
      {
        title: "Realidad mobile-first",
        description:
          "Los navegantes dependían exclusivamente del acceso móvil mientras se movían entre muelles y áreas de regata. Quedó claro que las suposiciones centradas en desktop no eran relevantes para este rol.",
      },
      {
        title: "Flujos regulatorios formales",
        description:
          "Los jueces operaban bajo marcos procedimentales estrictos. Protestas, audiencias y fallos seguían pasos regulatorios definidos que requerían información estructurada, trazabilidad y comunicación clara entre las partes.",
      },
      {
        title: "Presión operativa en tiempo real",
        description:
          "Los equipos administrativos gestionaban tareas sensibles al tiempo — inscripciones, actualizaciones y comunicaciones — mientras la competencia estaba en curso. Velocidad, claridad y jerarquía de información se volvieron críticas.",
      },
      {
        title: "Definición de roles en condiciones reales",
        description:
          "SIVI expuso el espectro completo de roles involucrados en un campeonato. Cada uno tenía permisos y autoridad de decisión diferenciados. Comprender estos límites — y cómo se intersectaban en competencia en vivo — redefinió la arquitectura del sistema.",
      },
    ],
  },
  inflectionPoint: {
    body: [
      { text: "El product–market fit estaba validado. La arquitectura no.", emphasis: true },
      {
        text: " La base no-code no podía sostener la escala, la complejidad de roles ni las demandas de performance de campeonatos de gran magnitud. Viramos necesitaba evolucionar hacia una ",
      },
      { text: "infraestructura operativa confiable.", emphasis: true },
    ],
  },
  reArchitecting: {
    intro:
      "Reconstruimos Viramos en Next.js bajo un enfoque system-first, priorizando claridad, escalabilidad y confiabilidad operativa.",
    items: [
      {
        title: "Arquitectura basada en permisos",
        description:
          "Las capas de permisos definen qué puede ver, activar y decidir cada rol, independientemente de cómo se superpongan durante una competencia en vivo.",
      },
      {
        title: "Motor modular de campeonatos",
        description:
          "Cada evento corre sobre los mismos módulos reutilizables — inscripciones, protestas y resultados se configuran de forma consistente entre categorías y formatos regulatorios.",
      },
      {
        title: "Experiencia de campo mobile-first",
        description:
          "Los flujos de los navegantes están construidos para condiciones en el muelle: mínima profundidad de navegación, jerarquía clara y acceso rápido a actualizaciones en tiempo real.",
      },
      {
        title: "Design system alineado a desarrollo",
        description:
          "Diseño e implementación comparten un único lenguaje de componentes — los cambios en Figma se mapean directamente a los tokens de shadcn en producción, eliminando la divergencia entre diseño e implementación.",
      },
    ],
  },
  showcase: [
    {
      title: "Configuración basada en permisos (Clubes)",
      description:
        "Una arquitectura de formularios estructurada permite configuraciones consistentes entre categorías, reduciendo errores administrativos.",
      bullets: [
        "Creación modular de campeonatos alineada a requerimientos regulatorios",
        "Gestión centralizada de participantes, solicitudes y resultados",
        "Accesos basados en permisos para roles internos del club",
      ],
      image: "",
      imageAlt: "Configuración de campeonato para clubes",
      video: "/images/projects/viramos/ViramosClubs.mp4",
      imagePosition: "right",
    },
    {
      title: "Workflows regulatorios formalizados (Jueces)",
      description:
        "Workflows regulatorios formalizados en interacciones estructuradas y trazables, alineadas con procedimientos reales.",
      bullets: [
        "Envío guiado de protestas con inputs estructurados",
        "Referencias de participantes buscables (nombre o número de vela)",
        "Fallos trazables con visibilidad controlada según rol",
      ],
      image: "/images/projects/viramos/ViramosJudges.png",
      imageAlt: "Flujo de protesta y audiencia para jueces",
      imagePosition: "left",
    },
    {
      title: "Experiencia de campo mobile-first (Navegantes)",
      description:
        "Interfaz mobile-first diseñada para uso en tiempo real durante la competencia.",
      bullets: [
        "Acceso simplificado a resultados, avisos y actualizaciones",
        "Menor profundidad de navegación en momentos de alta atención",
        "Layouts responsivos optimizados para uso en movimiento",
      ],
      image: "",
      imageAlt: "Experiencia mobile en muelle para navegantes",
      video: "/images/projects/viramos/ViramosSailors.mp4",
      imagePosition: "right",
    },
  ],
  metrics: {
    heading: "Impacto",
    intro:
      "Viramos evolucionó de MVP a infraestructura operativa adoptada por clubes líderes en Latinoamérica.",
    rows: [
      [
        { value: "43.000", label: "Usuarios únicos" },
        { value: "157.000", label: "Sesiones" },
      ],
      [
        { value: "81", label: "Campeonatos" },
        { value: "21", label: "Clubes y asociaciones" },
        { value: "5", label: "Países (LATAM)" },
      ],
    ],
    conclusion:
      "Hoy, Viramos opera como la columna vertebral digital de los campeonatos de vela competitiva en la región.",
    footnote: "Métricas 2025",
  },
  overview: {
    image: "/images/projects/viramos/ViramosUIOverview.png",
    imageAlt: "Resumen de la plataforma Viramos",
    link: {
      label: "viramos.com",
      href: "https://viramos.com",
    },
    tools: [
      "Figma",
      "Figjam",
      "Notion",
      "Google Workspace",
      "Slack",
      "Bubble",
      "Next.js",
      "shadcn",
      "GPT",
      "VS Code",
      "Github",
    ],
  },
};

export function getViramosCaseStudy(locale: Locale): ViramosCaseStudy {
  return locale === "es" ? viramosCaseStudyEs : viramosCaseStudyEn;
}

export const viramosCaseStudy = viramosCaseStudyEn;
