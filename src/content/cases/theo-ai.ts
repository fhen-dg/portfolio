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
    { text: "The first, a " },
    { text: "case discovery tool", emphasis: true },
    { text: ", took shape as a prompt-based prototype, built to validate a new solution direction fast." },
    { type: "break", count: 2 },
    { text: "The second, a " },
    { text: "case prediction product", emphasis: true },
    { text: ", had to live within a workflow-rigid, high-friction environment where the question was format, not features." },
  ],
  context: {
    heading: "The Context",
    body: [
      { text: "Theo AI had the technology but an open market direction. The mandate: " },
      { text: "test fast", emphasis: true },
      { text: ". In the legal domain, institutional inertia is structural: " },
      { text: "security reviews, compliance cycles, and IT approvals", emphasis: true },
      { text: " make tool adoption hard regardless of product quality." },
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
    heading: "Case Discovery: Decision architecture over interface design",
    intro: "The product needed to exist before any interface was built, which meant the design work was entirely about structure: what information to surface, what criteria to apply, and what the output needed to contain for someone to act on it.",
    items: [
      {
        title: "Case discovery was manual, inconsistent and hard to scale",
        description: "Litigation funding companies identify cases to finance by manually scanning news, court filings, and law firm publications. The process is inconsistent and hard to scale.",
      },
      {
        title: "An agent instead of a wireframe",
        description: "A structured GPT research agent that scanned public sources, filtered results against mandatory criteria, and cross-referenced multiple sources to reduce hallucinations. The output was a structured case brief with enough information for a decision-maker to act on.",
      },
      {
        title: "The prompt was the product",
        description: "The challenge was not the interface. It was the decision architecture: what criteria are mandatory vs. optional, what signals indicate funding potential, and what the output needs to contain for someone to make a real investment call.",
      },
    ],
  },
  workstream2: {
    heading: "Case Prediction: Format as adoption problem",
    intro: "Three delivery formats were prototyped and tested with large in-house legal teams to find which could best surface high-stakes AI predictions into their existing workflows with the least friction.",
    items: [
      {
        title: "Platform: Best on paper, lost to adoption cost.",
        description: "Generated real interest in testing. Lost not because users didn't see value, but because they couldn't justify adding a new tool to an environment where security reviews, IT approvals, and organizational inertia make adoption genuinely costly.",
      },
      {
        title: "Chat: Open-ended format, wrong fit.",
        description: "The open-ended format didn't match the structured, decision-oriented nature of how these users work. A conversational AI assumes exploratory intent; GC work is structured and outcome-driven.",
      },
      {
        title: "Email digest: No new tool, no behavior change. Won.",
        description: "No new tool to adopt, no behavior to change, no security review to clear. It arrived where users already were and fit into a workflow they were not willing to break. The most capable format lost to the most adoptable one.",
      },
    ],
  },
  finding: {
    heading: "The Findings",
    body: [
      { text: "Case discovery: The prototype ran, got in front of users, and returned a clear answer: " },
      { text: "output quality wasn't robust enough to convince.", emphasis: true },
      { type: "break", count: 2 },
      { text: "Case prediction: In a high-friction environment, " },
      { text: "adoptability outweighs capability.", emphasis: true },
      { text: " The email won not because it was the best format, but because it was already there." },
    ],
  },
  overview: {
    image: "/images/projects/theo-ai/TheoAICaseOverview.png",
    imageAlt: "Theo AI brand screen – dark background with the tagline 'Know it. Resolve it.' and the Theo AI logo",
    link: { label: "theo.ai", href: "https://theoai.ai/" },
    tools: ["Figma", "GPT", "Gemini", "Notion", "Google Workspace", "Slack"],
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
      description: "Translated complex AI predictions into legible, actionable outputs across three delivery formats: a full operational dashboard, a chart-based chat interface, and a structured email digest.",
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
    { text: "La primera, una " },
    { text: "herramienta de descubrimiento de casos", emphasis: true },
    { text: ", tomó forma como un prototipo basado en prompts, construido para validar una nueva dirección de solución rápidamente." },
    { type: "break", count: 2 },
    { text: "La segunda, un " },
    { text: "producto de predicción de casos", emphasis: true },
    { text: ", tenía que vivir dentro de un entorno rígido en flujos de trabajo y de alta fricción donde la pregunta era el formato, no las funcionalidades." },
  ],
  context: {
    heading: "El contexto",
    body: [
      { text: "Theo AI tenía la tecnología pero una dirección de mercado abierta. El mandato: " },
      { text: "testear rápido", emphasis: true },
      { text: ". En el dominio legal, la inercia institucional es estructural: " },
      { text: "revisiones de seguridad, ciclos de compliance y aprobaciones de IT", emphasis: true },
      { text: " dificultan la adopción de herramientas independientemente de la calidad del producto." },
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
    intro: "El producto tenía que existir antes de construir cualquier interfaz, lo que significaba que el trabajo de diseño era completamente sobre estructura: qué información surfacear, qué criterios aplicar y qué debía contener el output para que alguien pudiera actuar sobre él.",
    items: [
      {
        title: "El descubrimiento de casos es manual, inconsistente y difícil de escalar",
        description: "Las empresas de financiamiento de litigios identifican los casos a financiar escaneando manualmente noticias, expedientes judiciales y publicaciones de estudios jurídicos. El proceso es inconsistente y difícil de escalar.",
      },
      {
        title: "Un agente GPT, no un wireframe",
        description: "Un agente de investigación GPT estructurado que escaneaba fuentes públicas, filtraba resultados contra criterios obligatorios y cruzaba múltiples fuentes para reducir alucinaciones. El output era un brief de caso estructurado con la información suficiente para que un tomador de decisiones pueda actuar.",
      },
      {
        title: "El prompt era el producto",
        description: "El desafío no era la interfaz. Era la arquitectura de decisión: qué criterios son obligatorios vs. opcionales, qué señales indican potencial de financiamiento, y qué debe contener el output para que alguien pueda tomar una decisión real de inversión.",
      },
    ],
  },
  workstream2: {
    heading: "Producto General Counsel: el formato como problema de adopción",
    intro: "Se prototiparon y testaron tres formatos de entrega con grandes equipos legales internos para encontrar cuál podía integrar las predicciones de IA en sus flujos de trabajo existentes con la menor fricción.",
    items: [
      {
        title: "Plataforma: La más capaz sobre el papel, perdió por el costo de adopción.",
        description: "Generó interés real en los tests. Perdió no porque los usuarios no vieran el valor, sino porque no podían justificar agregar una nueva herramienta a un entorno donde las revisiones de seguridad, las aprobaciones de IT y la inercia organizacional hacen que la adopción sea genuinamente costosa.",
      },
      {
        title: "Chat: Obtuvo la menor tracción. Formato abierto, encaje incorrecto.",
        description: "El formato abierto no coincidía con la naturaleza estructurada y orientada a decisiones de cómo trabajan estos usuarios. Una IA conversacional asume intención exploratoria; el trabajo GC es estructurado y orientado a resultados.",
      },
      {
        title: "Email digest: Sin nueva herramienta, sin cambio de comportamiento. Ganó.",
        description: "Sin nueva herramienta que adoptar, sin comportamiento que cambiar, sin revisión de seguridad que superar. Llegaba donde los usuarios ya estaban y encajaba en un flujo de trabajo que no estaban dispuestos a romper. El formato más capaz perdió ante el más adoptable.",
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
  overview: {
    image: "/images/projects/theo-ai/TheoAICaseOverview.png",
    imageAlt: "Pantalla de marca de Theo AI – fondo oscuro con el tagline 'Know it. Resolve it.' y el logotipo de Theo AI",
    link: { label: "theo.ai", href: "https://theoai.ai/" },
    tools: ["Figma", "GPT", "Gemini", "Notion", "Google Workspace", "Slack"],
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
      description: "Traduje predicciones complejas de IA en outputs legibles y accionables a través de tres formatos de entrega: un dashboard operacional completo, una interfaz de chat basada en gráficos y un email digest estructurado.",
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
