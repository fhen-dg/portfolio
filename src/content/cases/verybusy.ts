import type { VerybusyCaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const verybusyCaseStudyEn: VerybusyCaseStudy = {
  slug: "verybusy",
  title: "Verybusy",
  year: "2023 – 2024",
  heroImage: "/images/projects/verybusy/VerybusyCaseCover.png",
  heroImageMobile: "/images/projects/verybusy/VerybusyCaseCover.png",
  heroImageAlt: "VeryBusy – professional image proofing platform",
  description:
    "A professional image proofing SaaS — designed the permission architecture, workspace model, and feature-gating strategy that made an active product monetizable.",
  snapshot: {
    role: "Lead Product Designer",
    duration: "6 months",
    team: "Founders (×2), Product Owner, Scrum Master, Engineering",
  },
  summary: [
    { text: "VeryBusy had users and clear " },
    { text: "product-market fit", emphasis: true },
    { text: " in a niche professional market. What it didn't have: a scalable collaboration model, an explicit permission system, or a defined path to monetization." },
    { type: "break", count: 2 },
    { text: "The work was structural — " },
    { text: "role architecture and workspace model", emphasis: true },
    { text: ", settings IA, design system foundations, interaction design across core workflows, and upgrade flows." },
  ],
  responsibilities: [
    {
      icon: "shield-check",
      title: "Permission architecture",
      description:
        "Designed the role system from scratch — 4 explicit roles with capability boundaries at workspace and project level, resolving a known architectural debt that limited the product's ability to serve professional teams.",
    },
    {
      icon: "layers",
      title: "Workspace model",
      description:
        "Defined the workspace as the organizational and billing unit, separating user identity from plan ownership. One account, multiple workspaces, each with its own plan and member set — unlocking multi-studio collaboration and giving the subscription model a clean anchor.",
    },
    {
      icon: "layout-template",
      title: "Settings IA",
      description:
        "Restructured settings around the account/workspace distinction: two distinct contexts, each with its own tab structure and internal logic. Eliminated the confusion between what belonged to the user and what belonged to the plan.",
    },
    {
      icon: "workflow",
      title: "Workflow primitives",
      description:
        "Designed the label system as a flexible primitive — not a state machine. Teams define their own labels, load preset groups, and apply them in bulk. Approval remains a separate, explicit action. The system adapts to the team, not the other way around.",
    },
    {
      icon: "component",
      title: "Design system foundations",
      description:
        "Built missing components with autolayout aligned to code structure. Organized Figma color and type styles for system-wide consistency — pre-variables era, styles were the single source of truth for tokens. Restructured the file architecture for engineering handoff.",
    },
    {
      icon: "bar-chart-3",
      title: "Monetization design",
      description:
        "Designed upgrade paths, paywalls, and plan selection flows. Contributed to strategic decisions about which features went behind the gate — in constant dialogue with founders and PO.",
    },
    {
      icon: "layout-panel-top",
      title: "Interaction design",
      description:
        "Shipped precision interaction improvements across professional workflows: OS-style multi-select with shift/cmd modifiers, drag-to-select across asset grids, nested context menus for asset actions, bulk label and action controls, and multi-email project invites — reducing high-friction repetitive operations throughout the product.",
    },
  ],
  situation: {
    heading: "The Situation",
    body: [
      {
        text: "The product was functional and had active users — retouchers and art directors using it for real work. But the collaboration model was ",
      },
      { text: "too informal to support complex professional workflows", emphasis: true },
      { text: ", and too undefined to charge for. Permissions were rudimentary, the account/workspace hierarchy didn't exist, and the design system wasn't structured for the pace of feature development the business needed." },
    ],
  },
  structuralDecisions: {
    heading: "Structural Decisions",
    intro: "Four decisions defined the collaboration model.",
    items: [
      {
        title: "Role boundaries, not just permissions",
        description:
          "Before: a flat, informal permission model with no named roles, limited flexibility, and known gaps the team had deferred. The solution: 4 explicit roles — Owner, Manager, Editor, Reviewer — with capabilities defined independently at workspace and project level. The criterion: who pays, who manages, who produces, who reviews.",
      },
      {
        title: "Workspace as the unit of billing and trust",
        description:
          "A user account shouldn't be tied to a plan. The workspace model separated user identity from subscription ownership: one account, multiple workspaces, each with its own plan, members, and projects. A freelancer working across studios keeps one account; each studio operates its own workspace under its own plan.",
      },
      {
        title: "Settings as a mental model problem",
        description:
          "The original settings mixed user-level and workspace-level configuration without a clear hierarchy. The fix was conceptual: two distinct contexts — My Account and Workspace — each with its own tab structure and scope. What belongs to the person vs. what belongs to the plan became immediately legible.",
      },
      {
        title: "External access without friction",
        description:
          "Collaborators join via email or link, with a role pre-assigned, no account required. A client reviewing a campaign sees only what they need — not internal comments, not version history. Multiple recipients invited in a single action. Before, each invite required closing and reopening a modal.",
      },
    ],
  },
  showcase: [
    {
      title: "External access model",
      description:
        "Three access patterns, each scoping a different visibility layer. Email and link invites assign a role at entry — determining both what the collaborator can do and what they can see. The view-only presentation link goes further: external stakeholders see a curated asset presentation with no internal commentary. The working layer — comments, rounds, markups — stays hidden.",
      bullets: [
        "Email or link invite with role assignment at entry",
        "No-account access for reviewers and editors",
        "View-only presentation mode: assets visible, working layer hidden",
      ],
      image: "",
      imageAlt: "External access model — email and link invite flows",
      imagePosition: "right",
    },
    {
      title: "Round comparison",
      description:
        "Two modes for reviewing visual differences between rounds: toggle in place for quick overlay, or compare side by side for precise diff review. Built for the precision professional retouching workflows require.",
      bullets: [
        "Toggle between rounds in the same viewport",
        "Side-by-side comparison for detailed diff review",
        "Round selector accessible from within the asset view",
      ],
      image: "",
      imageAlt: "Round comparison — toggle and side-by-side diff review",
      imagePosition: "left",
    },
    {
      title: "Interaction design at scale",
      description:
        "OS-style asset selection — shift/cmd multi-select and drag-to-select — brings familiar interaction patterns to high-volume workflows. Bulk action controls surface when multiple assets are selected; nested context menus group related operations without visual noise.",
      bullets: [
        "Shift/cmd multi-select and drag-to-select",
        "Bulk label and action controls on multi-asset selection",
        "Nested context menus with progressive disclosure",
      ],
      image: "",
      imageAlt: "Interaction design — multi-select and bulk action controls",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "",
    imageAlt: "Verybusy platform overview",
    link: {
      label: "verybusy.io",
      href: "https://verybusy.io",
    },
    tools: ["Figma", "FigJam", "Notion", "Linear", "Slack"],
  },
};

const verybusyCaseStudyEs: VerybusyCaseStudy = {
  slug: "verybusy",
  title: "Verybusy",
  year: "2023 – 2024",
  heroImage: "/images/projects/verybusy/VerybusyCaseCover.png",
  heroImageMobile: "/images/projects/verybusy/VerybusyCaseCover.png",
  heroImageAlt: "VeryBusy – plataforma profesional de proofing de imágenes",
  description:
    "SaaS profesional de proofing de imágenes — diseñé la arquitectura de permisos, el modelo de workspace y la estrategia de feature-gating que hicieron monetizable un producto activo.",
  snapshot: {
    role: "Lead Product Designer",
    duration: "6 meses",
    team: "Fundadores (×2), Product Owner, Scrum Master, Ingeniería",
  },
  summary: [
    { text: "VeryBusy tenía usuarios y un claro " },
    { text: "product-market fit", emphasis: true },
    { text: " en un mercado profesional de nicho. Lo que no tenía: un modelo de colaboración escalable, un sistema de permisos explícito ni un camino definido hacia la monetización." },
    { type: "break", count: 2 },
    { text: "El trabajo fue estructural — " },
    { text: "arquitectura de roles y modelo de workspace", emphasis: true },
    { text: ", IA de configuración, bases del design system, diseño de interacción en flujos clave y upgrade flows." },
  ],
  responsibilities: [
    {
      icon: "shield-check",
      title: "Arquitectura de permisos",
      description:
        "Diseñé el sistema de roles desde cero — 4 roles explícitos con límites de capacidad a nivel de workspace y proyecto, resolviendo una deuda arquitectónica conocida que limitaba la capacidad del producto para servir a equipos profesionales.",
    },
    {
      icon: "layers",
      title: "Modelo de workspace",
      description:
        "Definí el workspace como la unidad organizacional y de facturación, separando la identidad del usuario de la propiedad del plan. Una cuenta, múltiples workspaces, cada uno con su propio plan y conjunto de miembros — habilitando la colaboración multi-estudio y dando al modelo de suscripción un anclaje claro.",
    },
    {
      icon: "layout-template",
      title: "IA de configuración",
      description:
        "Reestructuré la configuración en torno a la distinción cuenta/workspace: dos contextos distintos, cada uno con su propia estructura de pestañas y lógica interna. Eliminé la confusión entre lo que pertenecía al usuario y lo que pertenecía al plan.",
    },
    {
      icon: "workflow",
      title: "Primitivos de workflow",
      description:
        "Diseñé el sistema de etiquetas como un primitivo flexible, no como una máquina de estados. Los equipos definen sus propias etiquetas, cargan grupos predefinidos y las aplican en masa. La aprobación sigue siendo una acción separada y explícita. El sistema se adapta al equipo, no al revés.",
    },
    {
      icon: "component",
      title: "Bases del design system",
      description:
        "Construí componentes faltantes con autolayout alineado a la estructura de código. Organicé estilos de color y tipografía en Figma para consistencia a nivel de sistema — en la era pre-variables, los estilos eran la única fuente de verdad para los tokens. Reestructuré la arquitectura del archivo para el handoff de ingeniería.",
    },
    {
      icon: "bar-chart-3",
      title: "Diseño de monetización",
      description:
        "Diseñé upgrade paths, paywalls y flujos de selección de plan. Contribuí a decisiones estratégicas sobre qué features quedaban detrás del gate — en diálogo constante con los fundadores y el PO.",
    },
    {
      icon: "layout-panel-top",
      title: "Diseño de interacción",
      description:
        "Implementé mejoras de interacción de precisión en flujos profesionales: multi-selección estilo OS con modificadores shift/cmd, drag-to-select en grillas de assets, menús de contexto anidados para acciones de assets, controles de etiquetas y acciones en masa, e invitaciones multi-email para proyectos — reduciendo operaciones repetitivas de alta fricción en todo el producto.",
    },
  ],
  situation: {
    heading: "La situación",
    body: [
      {
        text: "El producto era funcional y tenía usuarios activos — retouchers y directores de arte que lo usaban para trabajo real. Pero el modelo de colaboración era ",
      },
      { text: "demasiado informal para soportar flujos de trabajo profesionales complejos", emphasis: true },
      { text: ", y demasiado indefinido para cobrar. Los permisos eran rudimentarios, la jerarquía cuenta/workspace no existía, y el design system no estaba estructurado para el ritmo de desarrollo de features que el negocio necesitaba." },
    ],
  },
  structuralDecisions: {
    heading: "Decisiones estructurales",
    intro: "Cuatro decisiones definieron el modelo de colaboración.",
    items: [
      {
        title: "Límites de rol, no solo permisos",
        description:
          "Antes: un modelo de permisos plano e informal sin roles con nombre, flexibilidad limitada y brechas conocidas que el equipo había postergado. La solución: 4 roles explícitos — Owner, Manager, Editor, Reviewer — con capacidades definidas de forma independiente a nivel de workspace y proyecto. El criterio: quién paga, quién gestiona, quién produce, quién revisa.",
      },
      {
        title: "El workspace como unidad de facturación y confianza",
        description:
          "Una cuenta de usuario no debería estar atada a un plan. El modelo de workspace separó la identidad del usuario de la propiedad de la suscripción: una cuenta, múltiples workspaces, cada uno con su propio plan, miembros y proyectos. Un freelancer que trabaja con varios estudios mantiene una sola cuenta; cada estudio opera su propio workspace bajo su propio plan.",
      },
      {
        title: "La configuración como problema de modelo mental",
        description:
          "La configuración original mezclaba configuración a nivel de usuario y de workspace sin una jerarquía clara. La solución fue conceptual: dos contextos distintos — Mi cuenta y Workspace — cada uno con su propia estructura de pestañas y alcance. Lo que pertenece a la persona vs. lo que pertenece al plan se volvió inmediatamente legible.",
      },
      {
        title: "Acceso externo sin fricción",
        description:
          "Los colaboradores se unen vía email o enlace, con un rol pre-asignado, sin necesidad de cuenta. Un cliente revisando una campaña ve solo lo que necesita — sin comentarios internos, sin historial de versiones. Múltiples destinatarios invitados en una sola acción. Antes, cada invitación requería cerrar y reabrir un modal.",
      },
    ],
  },
  showcase: [
    {
      title: "Modelo de acceso externo",
      description:
        "Tres patrones de acceso, cada uno delimitando una capa de visibilidad diferente. Las invitaciones por email y enlace asignan un rol al ingreso — determinando tanto lo que el colaborador puede hacer como lo que puede ver. El enlace de presentación solo lectura va más lejos: los stakeholders externos ven una presentación curada de assets sin comentarios internos. La capa de trabajo — comentarios, rondas, marcas — permanece oculta.",
      bullets: [
        "Invitación por email o enlace con asignación de rol al ingreso",
        "Acceso sin cuenta para revisores y editores",
        "Modo de presentación solo lectura: assets visibles, capa de trabajo oculta",
      ],
      image: "",
      imageAlt: "Modelo de acceso externo — flujos de invitación por email y enlace",
      imagePosition: "right",
    },
    {
      title: "Comparación de rondas",
      description:
        "Dos modos para revisar diferencias visuales entre rondas: alternar en el mismo viewport para una superposición rápida, o comparar lado a lado para una revisión de diferencias precisa. Construido para la precisión que requieren los flujos de trabajo profesionales de retoque.",
      bullets: [
        "Alternar entre rondas en el mismo viewport",
        "Comparación lado a lado para revisión detallada de diferencias",
        "Selector de ronda accesible desde la vista del asset",
      ],
      image: "",
      imageAlt: "Comparación de rondas — toggle y revisión de diferencias lado a lado",
      imagePosition: "left",
    },
    {
      title: "Diseño de interacción a escala",
      description:
        "La selección de assets estilo OS — multi-selección con shift/cmd y drag-to-select — lleva patrones de interacción familiares a flujos de trabajo de alto volumen. Los controles de acción en masa aparecen cuando se seleccionan múltiples assets; los menús de contexto anidados agrupan operaciones relacionadas sin ruido visual.",
      bullets: [
        "Multi-selección con shift/cmd y drag-to-select",
        "Controles de etiquetas y acciones en masa en selección múltiple",
        "Menús de contexto anidados con divulgación progresiva",
      ],
      image: "",
      imageAlt: "Diseño de interacción — multi-selección y controles de acción en masa",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "",
    imageAlt: "Resumen de la plataforma Verybusy",
    link: {
      label: "verybusy.io",
      href: "https://verybusy.io",
    },
    tools: ["Figma", "FigJam", "Notion", "Linear", "Slack"],
  },
};

export function getVerybusyCaseStudy(locale: Locale): VerybusyCaseStudy {
  return locale === "es" ? verybusyCaseStudyEs : verybusyCaseStudyEn;
}

export const verybusyCaseStudy = verybusyCaseStudyEn;
