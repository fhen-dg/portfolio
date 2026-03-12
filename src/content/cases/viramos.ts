import type { ViramosCaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const viramosCaseStudyEn: ViramosCaseStudy = {
  slug: "viramos",
  title: "Viramos",
  year: "2024 - 2025",
  heroImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
  heroImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
  heroImageAlt: "Viramos – regatta operating system",
  heroVideo: "/images/projects/viramos/ViramosHeroVideo.mp4",
  description:
    "A multi-role operational SaaS for sailing championships—rebuilt from a no-code MVP into a role-based, permission-driven platform serving 5 countries across Latin America.",
  snapshot: {
    role: "Product Designer",
    duration: "11 months\n2024 – 2025",
    team: "Founder, Sailing Advisor, Product Owner, Scrum Master (part-time), Engineers, QC, Designer (me)",
  },
  summary: [
    {
      text: "Four distinct role domains—clubs, organizers, judges, and sailors—each with ",
    },
    { text: "overlapping permissions", emphasis: true },
    { text: " and " },
    { text: "no shared operational backbone", emphasis: true },
    { text: "." },
    { type: "break", count: 2 },
    { text: "The no-code MVP validated the market; " },
    { text: "the architecture couldn't follow", emphasis: true },
    { text: "." },
  ],
  responsibilities: [
    {
      icon: "layout-template",
      title: "System architecture",
      description:
        "Owned the platform architecture alongside the PO and tech lead—from championship lifecycle model and domain design to a permission-aware structure built around four overlapping operational roles.",
    },
    {
      icon: "workflow",
      title: "Workflow re-architecture",
      description:
        "Restructured a multi-committee operational system into role-aware, reusable modules—each with distinct org-side and competitor-facing interactions, consistent across any championship category or regulatory format.",
    },
    {
      icon: "shield-check",
      title: "Role & permission model",
      description:
        "Designed a permission system defining explicit authority, visibility rules, and decision boundaries at the action level—enabling strict role separation for large championships and flexible overlap for smaller ones.",
    },
    {
      icon: "component",
      title: "Design system & UI",
      description:
        "Built a shadcn-aligned design system in Figma with direct code commits—covering all platform interfaces with token consistency from Figma to production.",
    },
    {
      icon: "compass",
      title: "Field research & on-site immersion",
      description:
        "Led research at SIVI—Latin America's largest sailing championship—and multiple live events, surfacing mobile-first constraints, regulatory workflows, and role dynamics that directly reshaped the architecture.",
    },
    {
      icon: "lightbulb",
      title: "Product definition",
      description:
        "Defined product features alongside the PO through direct field observation—the check-in/check-out system, for instance, emerged from watching actual championship operations in real-time.",
    },
  ],
  opportunity: {
    body: [
      { text: "We rebuilt Viramos in Next.js with a " },
      { text: "system-first approach", emphasis: true },
      { text: "—replacing workarounds with a permission-aware operational backbone that " },
      { text: "scales across any championship format", emphasis: true },
      { text: "." },
    ],
  },
  contextImmersion: {
    intro:
      "SIVI, the largest sailing championship in Latin America, became a live stress test for the system at scale. Traveling to Brazil and embedding in the tournament exposed the full range of operational realities — role dynamics, edge cases, and real-time pressures — that remote interviews alone could never surface.",
    items: [
      {
        title: "Mobile-first usage",
        description:
          "Sailors moved between docks with no desktop access. Low-depth navigation and responsive layouts became hard constraints, not preferences.",
      },
      {
        title: "Structured regulatory workflows",
        description:
          "Judges followed strict procedural frameworks: protests, hearings, and rulings required structured data capture, traceability, and controlled visibility across roles.",
      },
      {
        title: "Real-time operational pressure",
        description:
          "Inscriptions, updates, and communications ran concurrently during live competition. Information hierarchy and response speed became system requirements.",
      },
      {
        title: "Role boundaries under live conditions",
        description:
          "Each role carried distinct permissions and decision-making authority. Seeing how these overlapped under live conditions directly informed the permission layer architecture.",
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
          "Permission layers define what each role can see, trigger, and decide, regardless of how roles overlap during live competition.",
      },
      {
        title: "Modular championship engine",
        description:
          "Every event runs on the same reusable modules: inscriptions, disputes, and results configure consistently across categories and regulatory formats.",
      },
      {
        title: "Mobile-first field experience",
        description:
          "Sailor-facing flows are built for dock-side conditions: minimal navigation depth, clear hierarchy, and fast access to real-time updates.",
      },
      {
        title: "Design-to-dev alignment",
        description:
          "Design and implementation share a single component language. Figma changes map directly to shadcn tokens in production, eliminating drift between design intent and final output.",
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
      showRing: false,
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
      "Viramos operates today as the digital backbone for competitive sailing championships in Latin America.",
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
      "",
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
  year: "2024 - 2025",
  heroImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
  heroImageMobile: "/images/projects/viramos/ViramosCaseCoverMobile.png",
  heroImageAlt: "Viramos – sistema operativo para regatas",
  heroVideo: "/images/projects/viramos/ViramosHeroVideo.mp4",
  description:
    "SaaS operativo multirol, reconstruido desde un MVP no-code hacia una plataforma robusta basada en roles y permisos, con operación en 5 países de Latinoamérica.",
  snapshot: {
    role: "Product Designer",
    duration: "11 meses",
    team: "Fundadora, asesor de navegación, Product owner, Scrum master (part-time), Ingenieros, QC, Designer (yo)",
  },
  summary: [
    {
      text: "Cuatro dominios de roles distintos—clubes, organizadores, jueces y regatistas—cada uno con ",
    },
    { text: "permisos superpuestos", emphasis: true },
    { text: " y " },
    { text: "sin columna vertebral operativa compartida", emphasis: true },
    { text: "." },
    { type: "break", count: 2 },
    { text: "El MVP no-code validó el mercado; " },
    { text: "la arquitectura no pudo seguirle el ritmo", emphasis: true },
    { text: "." },
  ],
  responsibilities: [
    {
      icon: "layout-template",
      title: "Arquitectura de sistema",
      description:
        "Lideré la arquitectura de la plataforma junto a la PO y el tech lead—desde el modelo de ciclo de vida del campeonato y el diseño de dominio hasta una estructura consciente de permisos construida en torno a cuatro roles operativos superpuestos.",
    },
    {
      icon: "workflow",
      title: "Re-arquitectura de workflows",
      description:
        "Reestructuré un sistema operativo multi-comité en módulos reutilizables y conscientes del rol—cada uno con interacciones diferenciadas para el lado organizacional y el competidor, consistentes en cualquier categoría de campeonato o formato regulatorio.",
    },
    {
      icon: "shield-check",
      title: "Modelo de roles y permisos",
      description:
        "Diseñé un sistema de permisos que define autoridad explícita, reglas de visibilidad y límites de decisión a nivel de acción—habilitando separación estricta de roles para campeonatos grandes y superposición flexible para los más pequeños.",
    },
    {
      icon: "component",
      title: "Design system y UI",
      description:
        "Construí un design system alineado a shadcn en Figma con commits directos en código—cubriendo todas las interfaces de la plataforma con consistencia de tokens de Figma a producción.",
    },
    {
      icon: "compass",
      title: "Research de campo e inmersión on-site",
      description:
        "Lideré el research en SIVI—el campeonato de vela más grande de América Latina—y múltiples eventos en vivo, identificando restricciones mobile-first, flujos regulatorios y dinámicas de rol que redefinieron directamente la arquitectura.",
    },
    {
      icon: "lightbulb",
      title: "Definición de producto",
      description:
        "Definí features de producto junto a la PO a través de observación directa en campo—el sistema de check-in/check-out, por ejemplo, surgió de observar las operaciones reales de campeonatos en vivo.",
    },
  ],
  opportunity: {
    body: [
      { text: "Reconstruimos Viramos en Next.js con un " },
      { text: "enfoque system-first", emphasis: true },
      { text: "—reemplazando workarounds con una columna vertebral operativa consciente de permisos que " },
      { text: "escala en cualquier formato de campeonato", emphasis: true },
      { text: "." },
    ],
  },
  contextImmersion: {
    intro:
      "SIVI, el campeonato de vela más grande de Latinoamérica, fue un stress test real del sistema a escala. Viajar a Brasil e integrarse al torneo expuso el espectro completo de realidades operativas — dinámicas de rol, edge cases y presión en tiempo real — que las entrevistas remotas nunca podrían revelar.",
    items: [
      {
        title: "Uso mobile-first",
        description:
          "Los navegantes se movían entre muelles sin acceso a desktop. La navegación de poca profundidad y los layouts responsivos pasaron a ser restricciones del sistema, no preferencias.",
      },
      {
        title: "Flujos regulatorios estructurados",
        description:
          "Los jueces operaban bajo marcos procedimentales estrictos: protestas, audiencias y fallos requerían captura estructurada de datos, trazabilidad y visibilidad controlada por rol.",
      },
      {
        title: "Presión operativa en tiempo real",
        description:
          "Inscripciones, actualizaciones y comunicaciones corrían en paralelo durante la competencia. La jerarquía de información y la velocidad de respuesta se volvieron requisitos del sistema.",
      },
      {
        title: "Límites de rol en condiciones reales",
        description:
          "Cada rol tenía permisos y autoridad de decisión diferenciados. Ver cómo se superponían en condiciones reales informó directamente la arquitectura de la capa de permisos.",
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
          "Cada evento corre sobre los mismos módulos reutilizables: inscripciones, protestas y resultados se configuran de forma consistente entre categorías y formatos regulatorios.",
      },
      {
        title: "Experiencia de campo mobile-first",
        description:
          "Los flujos de los navegantes están construidos para condiciones en el muelle: mínima profundidad de navegación, jerarquía clara y acceso rápido a actualizaciones en tiempo real.",
      },
      {
        title: "Alineación diseño-dev",
        description:
          "Diseño e implementación comparten un único lenguaje de componentes. Los cambios en Figma se mapean directamente a los tokens de shadcn en producción, eliminando la divergencia entre diseño e implementación.",
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
      showRing: false,
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
