import type { TheoAICaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const theoAICaseStudyEn: TheoAICaseStudy = {
  slug: "theo-ai",
  title: "Theo AI",
  year: "2025  —  Visual assets not shown due to NDA",
  heroImage: "/images/projects/theo-ai/TheoAICaseCover.png",
  heroImageAlt: "Theo AI – litigation intelligence platform",
  description:
    "Research tools and interfaces for an early-stage litigation AI startup in Palo Alto, serving GC executives managing portfolio risk and attorneys navigating active cases.",
  snapshot: {
    role: "Product Designer",
    duration: "4 months",
    team: "CEO, CPO, CTO, Legal Advisors, Product Owner, Designer (me), Engineering Team",
  },
  summary: [
    { text: "An " },
    { text: "AI-powered litigation intelligence platform", emphasis: true },
    { text: ". Rapid product exploration across research tools and GC interfaces, designing predictive workflows for high-stakes legal decisions and " },
    { text: "validating three delivery formats", emphasis: true },
    { text: " before finding the right one." },
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
      icon: "shield-alert",
      title: "Adoption friction hypothesis",
      description: "Before designing any format, I hypothesized that GCs would reject new tools regardless of feature quality — adoption friction in a conservative domain would always win. Validated directly with users. That finding drove the entire format strategy.",
    },
    {
      icon: "brain-circuit",
      title: "Prompt as prototype",
      description: "Designed the litigation discovery tool as a GPT prompt, not a wireframe. The challenge was decision architecture: mandatory criteria, signals for funding potential, and output format that enables a real investment call.",
    },
    {
      icon: "layers",
      title: "Structured domain access",
      description: "Two deliberate layers: internal legal advisors for continuous domain context and early ideation, external GC users for unbiased validation. I ran the external sessions alongside the CEO, engaging a group that rarely participates in product research.",
    },
    {
      icon: "scale",
      title: "Expert stakeholder alignment",
      description: "Worked directly with CEO, CPO, CTO, and legal advisors throughout the process, translating deep legal expertise into product decisions where every design call had to hold up under expert scrutiny.",
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
    "Una startup de IA para litigios en etapa temprana en Palo Alto, con herramientas de investigación e interfaces para ejecutivos GC que gestionan riesgo de portafolio y abogados que navegan casos activos. Recursos visuales no mostrados por NDA.",
  snapshot: {
    role: "Product Designer",
    duration: "4 meses",
    team: "CEO, CPO, CTO, Asesores Legales (Theo AI)\nProduct Owner, Desarrollador Full-stack (consultora)",
  },
  summary: [
    { text: "Una " },
    { text: "plataforma de inteligencia legal impulsada por IA", emphasis: true },
    { text: ". Exploración de producto en alta velocidad, diseñando flujos predictivos para decisiones legales de alto impacto y " },
    { text: "validando tres formatos de entrega", emphasis: true },
    { text: " hasta encontrar el indicado." },
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
      icon: "shield-alert",
      title: "Hipótesis de fricción de adopción",
      description: "Antes de diseñar cualquier formato, hipoticé que los GC rechazarían nuevas herramientas sin importar la calidad — la fricción de adopción en un dominio conservador siempre ganaría. Validado directamente con usuarios. Ese hallazgo guió toda la estrategia de formato.",
    },
    {
      icon: "brain-circuit",
      title: "Prompt como prototipo",
      description: "Diseñé la herramienta de descubrimiento como un prompt GPT, no un wireframe. El desafío era la arquitectura de decisión: criterios obligatorios, señales de potencial de inversión y formato de output que habilita una decisión real.",
    },
    {
      icon: "layers",
      title: "Acceso estructurado al dominio",
      description: "Dos capas deliberadas: asesores legales internos para contexto continuo e ideación temprana, usuarios GC externos para validación sin sesgo. Conduje las sesiones externas junto al CEO, con un grupo que raramente participa en investigación de producto.",
    },
    {
      icon: "scale",
      title: "Alineación con stakeholders expertos",
      description: "Trabajé con CEO, CPO, CTO y asesores legales a lo largo del proceso, traduciendo expertise legal en decisiones de producto donde cada elección debía sostenerse bajo un escrutinio experto.",
    },
  ],
};

export function getTheoAICaseStudy(locale: Locale): TheoAICaseStudy {
  return locale === "es" ? theoAICaseStudyEs : theoAICaseStudyEn;
}

export const theoAICaseStudy = theoAICaseStudyEn;
