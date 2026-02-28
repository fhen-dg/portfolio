import type { TheoAICaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const theoAICaseStudyEn: TheoAICaseStudy = {
  slug: "theo-ai",
  title: "Theo AI",
  year: "2025  —  Visual assets not shown due to NDA",
  heroImage: "/images/projects/theo-ai/TheoAICaseCover.png",
  heroImageAlt: "Theo AI – litigation intelligence platform",
  description:
    "Rapid product exploration at an early-stage legal AI startup: prompt-engineered research tooling and multi-format design for high-friction enterprise users.",
  snapshot: {
    role: "Product Designer",
    duration: "4 months",
    team: "CEO, CPO, CTO, Legal Advisors, Product Owner, Designer (me), Engineering Team",
  },
  summary: [
    { text: "Theo AI is building a " },
    { text: "litigation intelligence platform", emphasis: true },
    { text: ". Back then, there was no defined interface, just two open workstreams." },
    { type: "break", count: 2 },
    { text: "The first took shape as " },
    { text: "a prompt-based prototype", emphasis: true },
    { text: ", built to validate a new solution direction fast." },
    { type: "break", count: 2 },
    { text: "The second had to live within a " },
    { text: "workflow-rigid, high-friction environment", emphasis: true },
    { text: " where the question was format, not features." },
  ],
  context: {
    heading: "The context",
    body: [
      { text: "Theo AI is building litigation intelligence infrastructure for the legal industry. When I joined, the product was pre-interface: a clear problem space, strong domain knowledge from the CPO, and two workstreams that needed to go from zero to testable fast. The environment was high-velocity, early-stage, and operating in a domain that is inherently conservative. Legal professionals with deeply entrenched workflows, high privacy requirements, and very low tolerance for new tools that add friction." },
    ],
  },
  workstreamsOverview: {
    heading: "Two workstreams, two user types",
    items: [
      {
        title: "Litigation case discovery",
        description: "A research tool for litigation funding companies to identify high-potential civil cases using AI-powered multi-source analysis.",
      },
      {
        title: "GC interface exploration",
        description: "A delivery format exploration for General Counsel users to surface AI-predicted litigation outcomes without disrupting their existing workflows.",
      },
    ],
  },
  workstream1: {
    heading: "Workstream 1. Litigation case discovery",
    items: [
      {
        title: "The problem",
        description: "Litigation funding companies identify which civil cases to finance by scanning news, court filings, and law firm publications for cases that meet strict investment criteria. The process is manual, inconsistent, and hard to scale.",
      },
      {
        title: "The approach",
        description: "Rather than designing a UI first, the prototype was the prompt itself. We built a structured GPT research agent that scanned public sources, filtered results against mandatory legal and procedural criteria, and cross-referenced multiple sources to reduce hallucinations. The output was a structured case brief with enough information for a funding decision-maker to act on.",
      },
      {
        title: "The design decision",
        description: "The challenge was not the interface. It was the decision architecture: what criteria are mandatory vs. optional, what signals indicate funding potential, and what does the output need to contain for someone to make a real investment call. The prompt was the product.",
      },
    ],
  },
  workstream2: {
    heading: "Workstream 2. GC interface exploration",
    intro: "GC executives needed a way to access AI-predicted litigation outcomes without disrupting how they already work. The question was not just what to show, but where and how, given that GC workflows are structured, private, and highly bureaucratic.",
    items: [
      {
        title: "Platform",
        description: "A dedicated interface with full case data, filters, and portfolio views. The most powerful option on paper. It generated interest in testing but lost. GCs saw the value but could not justify adding a new tool to an environment where security reviews, IT approvals, and organizational inertia make adoption genuinely hard.",
      },
      {
        title: "Chat",
        description: "A conversational AI interface for querying case outcomes and exploring litigation scenarios. Got the least traction. The open-ended format did not match the structured, decision-oriented nature of GC work.",
      },
      {
        title: "Email digest",
        description: "A structured case intelligence brief delivered directly to the inbox, formatted like something a GC might already receive. No new tool to adopt, no behavior to change. It arrived where GCs already were and fit into a workflow they were not willing to break.",
      },
    ],
  },
  finding: {
    heading: "The finding",
    body: [
      { text: "In conservative, high-stakes domains, " },
      { text: "the right medium is the one that does not ask users to notice it.", emphasis: true },
      { text: " The email won not because it was the most capable format, but because it required zero behavior change. The most powerful solution loses if adoption never happens." },
    ],
  },
  responsibilities: [
    {
      icon: "brain-circuit",
      title: "Prompt as prototype",
      description: "Prototyped a case discovery tool as a structured GPT prompt. Designed the criteria, signal filters, and output format required for a decision-maker to act on the results.",
    },
    {
      icon: "chart-scatter",
      title: "Complex data interface design",
      description: "Structured complex operational data into a legible, actionable dashboard: risk overview, portfolio tracking, case analysis, and financial exposure, integrating AI predictions alongside factual case data.",
    },
    {
      icon: "shield-alert",
      title: "Adoption friction hypothesis",
      description: "Before designing any format, I framed the core constraint: in a conservative domain, adoption friction would outweigh feature quality. Validated directly in user sessions.",
    },
    {
      icon: "layout-panel-top",
      title: "Format as design decision",
      description: "Tested three delivery formats: platform, chat, and email. The email won not because it was the most capable, but because it arrived where users already were.",
    },
    {
      icon: "git-branch",
      title: "Two-layer research",
      description: "Ran user research sessions alongside the CEO with a group that rarely participates in product research. Two layers: legal advisors for domain context, GC users for unbiased validation.",
    },
  ],
};

const theoAICaseStudyEs: TheoAICaseStudy = {
  slug: "theo-ai",
  title: "Theo AI",
  year: "2025",
  heroImage: "/images/projects/theo-ai/TheoAICaseCover.png",
  heroImageAlt: "Theo AI – plataforma de inteligencia para litigios",
  description:
    "Exploración de producto acelerada en una startup de IA legal en etapa temprana: herramientas de investigación con prompt engineering y diseño multi-formato para usuarios enterprise de alta fricción.",
  snapshot: {
    role: "Product Designer",
    duration: "4 meses",
    team: "CEO, CPO, CTO, Asesores Legales (Theo AI)\nProduct Owner, Desarrollador Full-stack (consultora)",
  },
  summary: [
    { text: "Theo AI está construyendo un " },
    { text: "plataforma de inteligencia para litigios", emphasis: true },
    { text: ". Cuando me uní, no había una interfaz definida, solo dos líneas de trabajo abiertas." },
    { type: "break", count: 2 },
    { text: "La primera era una herramienta de investigación para financiadores de litigios cuyo proceso de descubrimiento de casos era completamente manual y difícil de escalar, " },
    { text: "requiriendo validación antes de construir cualquier interfaz.", emphasis: true },
    { type: "break", count: 2 },
    { text: "La segunda abordaba grandes equipos legales internos interesados en predicciones de IA: un " },
    { text: "entorno rígido en flujos de trabajo y de alta fricción", emphasis: true },
    { text: " donde la pregunta era el formato, no las funcionalidades." },
  ],
  context: {
    heading: "El contexto",
    body: [
      { text: "Theo AI está construyendo infraestructura de inteligencia para litigios en la industria legal. Cuando me uní, el producto estaba en etapa pre-interfaz: un espacio de problema claro, conocimiento de dominio sólido por parte del CPO, y dos líneas de trabajo que necesitaban ir de cero a testeable rápidamente. El entorno era de alta velocidad, etapa temprana, y operando en un dominio inherentemente conservador. Profesionales legales con flujos de trabajo profundamente establecidos, altos requisitos de privacidad, y muy baja tolerancia a nuevas herramientas que generan fricción." },
    ],
  },
  workstreamsOverview: {
    heading: "Dos líneas de trabajo, dos tipos de usuarios",
    items: [
      {
        title: "Descubrimiento de casos para litigios",
        description: "Una herramienta de investigación para empresas de financiamiento de litigios, orientada a identificar casos civiles de alto potencial mediante análisis de múltiples fuentes con IA.",
      },
      {
        title: "Exploración de interfaz para GC",
        description: "Una exploración de formatos de entrega para usuarios General Counsel, orientada a surfacear predicciones de litigios sin interrumpir sus flujos de trabajo existentes.",
      },
    ],
  },
  workstream1: {
    heading: "Línea 1. Descubrimiento de casos para litigios",
    items: [
      {
        title: "El problema",
        description: "Las empresas de financiamiento de litigios identifican qué casos civiles financiar escaneando noticias, expedientes judiciales y publicaciones de estudios jurídicos. El proceso es manual, inconsistente y difícil de escalar.",
      },
      {
        title: "El enfoque",
        description: "En lugar de diseñar una UI primero, el prototipo fue el prompt en sí mismo. Construimos un agente de investigación GPT estructurado que escaneaba fuentes públicas, filtraba resultados contra criterios legales y procesales obligatorios, y cruzaba múltiples fuentes para reducir alucinaciones. El output era un brief de caso estructurado con la información suficiente para que un tomador de decisiones de inversión pueda actuar.",
      },
      {
        title: "La decisión de diseño",
        description: "El desafío no era la interfaz. Era la arquitectura de decisión: qué criterios son obligatorios vs. opcionales, qué señales indican potencial de financiamiento, y qué debe contener el output para que alguien pueda tomar una decisión real de inversión. El prompt era el producto.",
      },
    ],
  },
  workstream2: {
    heading: "Línea 2. Exploración de interfaz para GC",
    intro: "Los ejecutivos GC necesitaban una forma de acceder a predicciones de litigios impulsadas por IA sin interrumpir cómo ya trabajan. La pregunta no era solo qué mostrar, sino dónde y cómo, dado que los flujos de trabajo GC son estructurados, privados y altamente burocráticos.",
    items: [
      {
        title: "Plataforma",
        description: "Una interfaz dedicada con datos completos de casos, filtros y vistas de portafolio. La opción más poderosa sobre el papel. Generó interés en los tests pero perdió. Los GC veían el valor pero no podían justificar agregar una nueva herramienta a un entorno donde las revisiones de seguridad, aprobaciones de IT e inercia organizacional hacen que la adopción sea genuinamente difícil.",
      },
      {
        title: "Chat",
        description: "Una interfaz de IA conversacional para consultar outcomes de casos y explorar escenarios de litigios. Obtuvo la menor tracción. El formato abierto no coincidía con la naturaleza estructurada y orientada a decisiones del trabajo GC.",
      },
      {
        title: "Email digest",
        description: "Un brief de inteligencia de caso estructurado entregado directamente al inbox, formateado como algo que un GC ya podría recibir. Sin nueva herramienta que adoptar, sin comportamiento que cambiar. Llegaba donde los GC ya estaban y encajaba en un flujo de trabajo que no estaban dispuestos a romper.",
      },
    ],
  },
  finding: {
    heading: "El hallazgo",
    body: [
      { text: "En dominios conservadores y de alto riesgo, " },
      { text: "el medio correcto es el que no le pide a los usuarios que lo noten.", emphasis: true },
      { text: " El email ganó no porque fuera el formato más capaz, sino porque requería cero cambio de comportamiento. La solución más poderosa pierde si la adopción nunca ocurre." },
    ],
  },
  responsibilities: [
    {
      icon: "brain-circuit",
      title: "Prompt como prototipo",
      description: "Prototipé una herramienta de descubrimiento de casos como un prompt GPT estructurado. Diseñé los criterios, filtros de señales y el formato de output necesarios para que un tomador de decisiones pueda actuar sobre los resultados.",
    },
    {
      icon: "chart-scatter",
      title: "Diseño de interfaz para datos complejos",
      description: "Estructuré datos operacionales complejos en un dashboard legible y accionable: resumen de riesgo, seguimiento de portafolio, análisis de casos y exposición financiera, integrando predicciones de IA junto a datos factuales.",
    },
    {
      icon: "shield-alert",
      title: "Hipótesis de fricción de adopción",
      description: "Antes de diseñar cualquier formato, encuadré la restricción central: en un dominio conservador, la fricción de adopción superaría la calidad de las funcionalidades. Validado directamente en sesiones con usuarios.",
    },
    {
      icon: "layout-panel-top",
      title: "El formato como decisión de diseño",
      description: "Probé tres formatos de entrega: plataforma, chat y email. El email ganó no porque fuera el más capaz, sino porque llegaba donde los usuarios ya estaban.",
    },
    {
      icon: "git-branch",
      title: "Investigación en dos capas",
      description: "Conduje sesiones de investigación junto al CEO con un grupo que raramente participa en investigación de producto. Dos capas: asesores legales para contexto de dominio, usuarios GC para validación sin sesgo.",
    },
  ],
};

export function getTheoAICaseStudy(locale: Locale): TheoAICaseStudy {
  return locale === "es" ? theoAICaseStudyEs : theoAICaseStudyEn;
}

export const theoAICaseStudy = theoAICaseStudyEn;
