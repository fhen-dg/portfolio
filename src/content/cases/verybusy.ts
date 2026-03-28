import type { VerybusyCaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const verybusyCaseStudyEn: VerybusyCaseStudy = {
  slug: "verybusy",
  title: "Verybusy",
  year: "2023 - 2024",
  heroImage: "/images/projects/verybusy/VerybusyCaseCover.png",
  heroImageMobile: "/images/projects/verybusy/VerybusyCaseCoverMobile.png",
  heroImageAlt: "VeryBusy – professional image proofing platform",
  description:
    "Permission architecture, workspace model, and monetization layer for a professional image proofing SaaS: structural work on a live product with an active user base.",
  snapshot: {
    role: "Lead Product Designer",
    duration: "6 months, 2023–2024",
    team: "Founders, Product Owner, Scrum Master, Engineers, QA, Designer (me)",
  },
  summary: [
    { text: "VeryBusy is a professional image proofing platform with an active user base. When I joined, " },
    { text: "features kept shipping", emphasis: true },
    { text: "." },
    { type: "break", count: 2 },
    { text: "What " },
    { text: "it lacked was the structural layer", emphasis: true },
    { text: ": a defined collaboration model and an explicit permission system that would make " },
    { text: "a path to monetization", emphasis: true },
    { text: " possible." },
    { type: "break", count: 2 },
    { text: "The product didn't need more features. It needed " },
    { text: "the rules under which those features operated", emphasis: true },
    { text: "." },
  ],
  responsibilities: [
    {
      icon: "shield-check",
      title: "Permission architecture",
      description:
        "Designed the role system from scratch: workspace roles for organizational access and billing, project roles for operational capabilities within each project.",
    },
    {
      icon: "folder-tree",
      title: "Workspace model",
      description:
        "Defined the workspace as the organizational and billing unit, decoupling user identity from plan ownership. Restructured settings around this separation.",
    },
    {
      icon: "banknote",
      title: "Monetization design",
      description:
        "Designed upgrade paths, paywalls, and plan selection flows. Defined the gating strategy alongside founders and PO.",
    },
    {
      icon: "shuffle",
      title: "Workflow primitives",
      description:
        "Designed the label system as a configurable building block rather than a fixed workflow: teams define their own review stages with custom labels and reusable presets. Approval is a separate, explicit action.",
    },
    {
      icon: "square-chevron-right",
      title: "Handoff architecture",
      description:
        "Built components aligned with the codebase: naming conventions, layer hierarchy, and layout logic. Restructured the Figma file and organized design tokens and system styles as shared design-to-code reference.",
    },
  ],
  situation: {
    heading: "The Situation",
    body: [
      {
        text: "Retouchers and art directors were using it for real work, but the product was too informal to support professional workflows, and too undefined to charge for. ",
      },
      { text: "No permission system, no workspace hierarchy, no usage limits.", emphasis: true },
    ],
  },
  structuralDecisions: {
    heading: "The Structural Layer",
    intro: "Three decisions that built the foundation for monetization: access control, organizational structure, and usage limits.",
    items: [
      {
        title: "Explicit roles over granular permissions",
        description:
          "Granular permission models offer flexibility but transfer complexity to users and implementation. For a product where roles map directly to existing workflow actors, making them explicit was the right decision.",
      },
      {
        title: "Decoupling identity from billing",
        description:
          "Verybusy had user accounts but no workspace layer. Introducing workspace as the billing entity was the architectural prerequisite: without it, independent billing relationships per client were impossible to model.",
      },
      {
        title: "Gating around upgrade triggers",
        description:
          "Gates were placed at both usage limits and feature access, designed from one direction: what would move a user on each tier to the next? Not what to restrict, but what creates genuine upgrade pressure at each boundary.",
      },
    ],
  },
  showcase: [
    {
      title: "Workspace-level roles and settings",
      bullets: [
        "Four workspace roles with independent capability sets: Owner, Admin, Manager, Member",
        "One account, independent role per workspace: Owner at one studio, Manager at another",
        "Settings scoped to the workspace: plan, billing, members, and projects",
      ],
      image: "/images/projects/verybusy/VerybusyShowcaseWorkspaceModel.png",
      imageAlt: "Workspace-level roles and settings",
      imagePosition: "left",
      showRing: false,
    },
    {
      title: "Project-level roles and access",
      bullets: [
        "Project access assigned by the Manager, whose role was set at workspace level",
        "All project roles count as workspace members: every invited collaborator consumes a seat",
        "View-only link for clients: the only seat-free entry, no account required",
      ],
      image: "/images/projects/verybusy/VerybusyShowcaseRoles&Access.png",
      imageAlt: "Role assignment and project access — email and link invite flows",
      imagePosition: "right",
      showRing: false,
    },
    {
      title: "Monetization layer: gates and upgrade paths",
      bullets: [
        "Two upgrade paths from the same screen: add-ons within the plan, or a full plan change",
        "Two gating mechanics: gradual friction at usage limits, hard stops at feature boundaries",
      ],
      image: "/images/projects/verybusy/VerybusyShowcaseMonetization.png",
      imageAlt: "Monetization layer: gates and upgrade paths",
      imagePosition: "left",
      showRing: false,
    },
  ],
  outcome: {
    body: [
      { text: "Shipped to production. Used today by professional imaging teams at brands including Lululemon, Target, and Benefit." },
    ],
  },
  overview: {
    image: "",
    imageAlt: "Verybusy platform overview",
    video: "/images/projects/verybusy/VerybusyCaseOverviewVideoCompressed.mp4",
    videoPoster: "/images/projects/verybusy/VerybusyCaseOverviewVideoPoster.jpg",
    link: {
      label: "verybusy.io",
      href: "https://verybusy.io",
    },
    tools: ["Figma", "Figjam", "Notion", "Gitlab", "Slack"],
  },
};

const verybusyCaseStudyEs: VerybusyCaseStudy = {
  slug: "verybusy",
  title: "Verybusy",
  year: "2023 - 2024",
  heroImage: "/images/projects/verybusy/VerybusyCaseCover.png",
  heroImageMobile: "/images/projects/verybusy/VerybusyCaseCoverMobile.png",
  heroImageAlt: "VeryBusy – plataforma profesional de proofing de imágenes",
  description:
    "Arquitectura de permisos, modelo de workspaces y capa de monetización para un SaaS de proofing de imágenes profesionales: trabajo estructural sobre un producto en producción con base de usuarios activa.",
  snapshot: {
    role: "Lead Product Designer",
    duration: "6 meses",
    team: "Founders, Product owner, Scrum master, Ingenieros, QA, Designer (yo)",
  },
  summary: [
    { text: "VeryBusy es una plataforma de proofing de imágenes para equipos profesionales, con una base de usuarios activa. Cuando me sumé al proyecto, el producto " },
    { text: "seguía lanzando nuevas funcionalidades", emphasis: true },
    { text: "." },
    { type: "break", count: 2 },
    { text: "Lo que faltaba no eran más features, sino " },
    { text: "la capa estructural", emphasis: true },
    { text: ": un modelo de colaboración claro y un sistema explícito de permisos que " },
    { text: "habilitara la monetización", emphasis: true },
    { text: "." },
    { type: "break", count: 2 },
    { text: "El producto no necesitaba más funcionalidades. Necesitaba " },
    { text: "definir las reglas que gobiernan esas funcionalidades", emphasis: true },
    { text: "." },
  ],
  responsibilities: [
    {
      icon: "shield-check",
      title: "Arquitectura de permisos",
      description:
        "Diseñé el sistema de roles desde cero: roles de workspace para acceso organizacional y facturación, roles de proyecto para las capacidades operativas dentro de cada proyecto.",
    },
    {
      icon: "folder-tree",
      title: "Modelo de workspace",
      description:
        "Definí el workspace como la unidad organizacional y de facturación, desacoplando la identidad del usuario de la propiedad del plan. Reorganicé la configuración del producto en función de esta separación.",
    },
    {
      icon: "banknote",
      title: "Estrategia de monetización",
      description:
        "Diseñé los flujos de upgrade, paywalls y selección de planes. Definí la estrategia de gating junto a los founders y el PO.",
    },
    {
      icon: "shuffle",
      title: "Labels como base del workflow",
      description:
        "Diseñé el sistema de labels como un building block configurable, no como un flujo predefinido: cada equipo define sus propias etapas de revisión con labels personalizados y presets reutilizables. La aprobación es una acción independiente.",
    },
    {
      icon: "square-chevron-right",
      title: "Arquitectura de implementación",
      description:
        "Construí componentes alineados con el codebase: convenciones de naming, jerarquía de capas y lógica de layout. Reestructuré el archivo de Figma y organicé design tokens y estilos del sistema como referencia compartida entre diseño y código.",
    },
  ],
  situation: {
    heading: "La situación",
    body: [
      {
        text: "Retouchers y directores de arte ya lo utilizaban para trabajo real, pero el producto era demasiado informal para soportar workflows profesionales y demasiado indefinido para poder cobrar por él. ",
      },
      { text: "No había sistema de permisos, ni jerarquía organizacional, ni límites de uso.", emphasis: true },
    ],
  },
  structuralDecisions: {
    heading: "La capa estructural",
    intro: "Tres decisiones estructurales que construyeron la base de la monetización: control de acceso, estructura organizacional y límites de uso.",
    items: [
      {
        title: "Roles explícitos en lugar de permisos granulares",
        description:
          "Los modelos de permisos granulares ofrecen flexibilidad, pero trasladan la complejidad a los usuarios y a la implementación. En un producto donde los roles reflejan actores reales del workflow, hacerlos explícitos era la decisión correcta.",
      },
      {
        title: "Separación entre identidad y facturación",
        description:
          "VeryBusy tenía cuentas de usuario, pero no una capa de workspace. Introducir el workspace como entidad de facturación fue el prerrequisito arquitectónico: sin él, gestionar relaciones de facturación independientes por cliente era imposible.",
      },
      {
        title: "Límites diseñados para impulsar upgrades",
        description:
          "Las restricciones se colocaron en límites de uso y acceso a funcionalidades, diseñadas a partir de una pregunta central: ¿qué lleva al usuario de cada nivel al siguiente? No qué restringir, sino qué genera presión real de upgrade en cada límite.",
      },
    ],
  },
  showcase: [
    {
      title: "Roles y configuración a nivel de workspace",
      bullets: [
        "Cuatro roles de workspace con capacidades diferenciadas: Owner, Admin, Manager y Member",
        "Una cuenta con roles independientes en cada workspace (Owner en un estudio, Manager en otro)",
        "Configuración con alcance de workspace: plan, facturación, miembros y proyectos",
      ],
      image: "/images/projects/verybusy/VerybusyShowcaseWorkspaceModel.png",
      imageAlt: "Roles y configuración a nivel de workspace",
      imagePosition: "left",
      showRing: false,
    },
    {
      title: "Roles y acceso a nivel proyecto",
      bullets: [
        "El acceso al proyecto lo asigna el Manager, cuyo rol fue definido a nivel workspace",
        "Todos los roles de proyecto cuentan como miembros del workspace: cada colaborador invitado consume un seat",
        "Link de solo visualización para clientes: el único punto de entrada sin seat, no requiere cuenta",
      ],
      image: "/images/projects/verybusy/VerybusyShowcaseRoles&Access.png",
      imageAlt: "Roles y acceso a nivel proyecto — flujos de invitación por email y enlace",
      imagePosition: "right",
      showRing: false,
    },
    {
      title: "Capa de monetización: límites y caminos de upgrade",
      bullets: [
        "Dos rutas de upgrade desde la misma pantalla: add-ons dentro del plan, o un cambio completo de plan",
        "Dos mecánicas de gating: fricción gradual en límites de uso, bloqueos duros en funcionalidades",
      ],
      image: "/images/projects/verybusy/VerybusyShowcaseMonetization.png",
      imageAlt: "Capa de monetización: gates y rutas de upgrade",
      imagePosition: "left",
      showRing: false,
    },
  ],
  outcome: {
    body: [
      { text: "Enviado a producción. Usado hoy por equipos profesionales de imágenes en marcas incluyendo Lululemon, Target y Benefit." },
    ],
  },
  overview: {
    image: "",
    imageAlt: "Resumen de la plataforma Verybusy",
    video: "/images/projects/verybusy/VerybusyCaseOverviewVideoCompressed.mp4",
    videoPoster: "/images/projects/verybusy/VerybusyCaseOverviewVideoPoster.jpg",
    link: {
      label: "verybusy.io",
      href: "https://verybusy.io",
    },
    tools: ["Figma", "Figjam", "Notion", "Gitlab", "Slack"],
  },
};

export function getVerybusyCaseStudy(locale: Locale): VerybusyCaseStudy {
  return locale === "es" ? verybusyCaseStudyEs : verybusyCaseStudyEn;
}

export const verybusyCaseStudy = verybusyCaseStudyEn;
