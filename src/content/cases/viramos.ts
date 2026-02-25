import type { ViramosCaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const viramosCaseStudyEn: ViramosCaseStudy = {
  slug: "viramos",
  title: "Viramos",
  year: "2025",
  heroImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
  heroImageAlt: "Viramos – regatta operating system",
  description:
    "A multi-role regatta operating system connecting sailors, judges, clubs and associations across Latin America.",
  snapshot: {
    role: "Product Designer",
    duration: "10 months",
    team: "Product Owner, Scrum Master (part-time), Designer (me), Engineering team, QC",
  },
  opportunity: {
    body: [
      {
        text: "Regattas in Latin America relied on disconnected systems and manual coordination, ",
      },
      {
        text: "leading to operational inefficiencies and inconsistent user experiences.",
        emphasis: true,
      },
      { text: " The opportunity was to build a " },
      { text: "regatta operating system", emphasis: true },
      {
        text: " — a unified digital layer supporting the entire championship lifecycle, from inscription to results.",
      },
    ],
  },
  earlyValidation: [
    {
      title: "Testing the operating model",
      description:
        "Viramos began as a no-code MVP (Bubble), validating inscriptions, payments, requests, and results.",
    },
    {
      title: "Signal for re-architecture",
      description:
        "Adoption confirmed value, but scale demanded a structural rebuild.",
    },
  ],
  contextImmersion: {
    intro:
      "SIVI, the largest sailing championship in Latin America, became a live stress test for the product at scale. On-site immersion by traveling to Brazil and being part of the tournament exposed the operational realities that remote interviews alone could not surface.",
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
          "Roles were redefined as permission layers rather than user types. Interactions were mapped to explicit authority and visibility rules.",
      },
      {
        title: "Modular championship engine",
        description:
          "Forms became the system core. Inscriptions, disputes, and results were structured as reusable modules to support multiple championship configurations.",
      },
      {
        title: "Mobile-first redesign",
        description:
          "Primary sailor workflows were optimized for dock-side usage, improving hierarchy, speed, and accessibility.",
      },
      {
        title: "Design system aligned with development",
        description:
          "A shadcn-based design system ensured parity between UI components and frontend implementation, reducing friction and accelerating delivery.",
      },
    ],
  },
  showcase: [
    {
      title: "Championship configuration (Clubs)",
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
      title: "Protest & hearing flow (Judges)",
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
      title: "Dock-side mobile experience (Sailors)",
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
  heroImageAlt: "Viramos – sistema operativo para regatas",
  description:
    "Un sistema operativo para regatas multi-rol que conecta navegantes, jueces, clubes y asociaciones en toda Latinoamérica.",
  snapshot: {
    role: "Product Designer",
    duration: "10 meses",
    team: "Product owner, Scrum master (part-time), Diseñador (yo), equipo de ingeniería, QC",
  },
  opportunity: {
    body: [
      {
        text: "Las regatas en Latinoamérica operaban con sistemas desconectados y coordinación manual, ",
      },
      {
        text: "lo que generaba ineficiencias operativas y experiencias inconsistentes.",
        emphasis: true,
      },
      { text: " La oportunidad era construir un " },
      { text: "sistema operativo para regatas", emphasis: true },
      {
        text: ": una capa digital unificada que acompañara todo el ciclo de vida del campeonato, desde la inscripción hasta la publicación de resultados.",
      },
    ],
  },
  earlyValidation: [
    {
      title: "Testeando el modelo operativo",
      description:
        "Viramos comenzó como un MVP no-code (Bubble), validando inscripciones, pagos, solicitudes y resultados.",
    },
    {
      title: "Señal para re-arquitectura",
      description:
        "La adopción confirmó el valor del producto, pero la escala evidenció la necesidad de una reconstrucción estructural.",
    },
  ],
  contextImmersion: {
    intro:
      "SIVI, el campeonato de vela más grande de Latinoamérica, se convirtió en un stress test real del producto a escala. Viajar a Brasil y formar parte del torneo permitió exponer dinámicas operativas que las entrevistas remotas no lograban revelar.",
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
          "Los roles se redefinieron como capas de permisos, no como simples tipos de usuario. Las interacciones se mapearon según reglas explícitas de autoridad y visibilidad.",
      },
      {
        title: "Motor modular de campeonatos",
        description:
          "Los formularios se convirtieron en el núcleo del sistema. Inscripciones, protestas y resultados fueron estructurados como módulos reutilizables capaces de soportar múltiples configuraciones de campeonato.",
      },
      {
        title: "Rediseño mobile-first",
        description:
          "Los flujos principales para navegantes fueron optimizados para uso en muelle, mejorando jerarquía, velocidad y accesibilidad.",
      },
      {
        title: "Design system alineado a desarrollo",
        description:
          "Un design system basado en shadcn aseguró paridad entre componentes de UI e implementación frontend, reduciendo fricción y acelerando el delivery.",
      },
    ],
  },
  showcase: [
    {
      title: "Configuración de campeonato (Clubes)",
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
      title: "Flujo de protesta y audiencia (Jueces)",
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
      title: "Experiencia mobile en muelle (Navegantes)",
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
