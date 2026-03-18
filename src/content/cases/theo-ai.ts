import type { TheoAICaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const theoAICaseStudyEn: TheoAICaseStudy = {
  slug: "theo-ai",
  title: "Theo AI",
  year: "2025  —  Visual assets not shown due to NDA",
  heroImage: "/images/projects/theo-ai/TheoAICaseCover.png",
  heroImageMobile: "/images/projects/theo-ai/TheoAICaseCoverMobile.png",
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
    { text: ", took shape as a prompt-based prototype, built to quickly validate a new product direction." },
    { type: "break", count: 2 },
    { text: "The second, a " },
    { text: "case prediction product", emphasis: true },
    { text: ", had to operate within a workflow-rigid, high-friction environment where the question was format, not features." },
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
    eyebrow: "Case discovery tool",
    heading: "Decision architecture over interface design",
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
    eyebrow: "Case prediction product",
    heading: "Format as the adoption problem",
    intro: "Three delivery formats were prototyped and tested with large in-house legal teams to find which could best integrate high-stakes AI predictions into their existing workflows with the least friction.",
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
      description: "Turned complex AI predictions into legible, actionable outputs across three delivery formats: a full operational dashboard, a chart-based chat interface, and a structured email digest.",
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
  year: "2025  —  Assets visuales no incluidos por NDA",
  heroImage: "/images/projects/theo-ai/TheoAICaseCover.png",
  heroImageMobile: "/images/projects/theo-ai/TheoAICaseCoverMobile.png",
  heroImageAlt: "Theo AI – plataforma de inteligencia para litigios",
  description:
    "Exploración rápida de producto en una startup de Legal AI en etapa temprana: herramienta de investigación basada en prompt engineering y diseño en múltiples formatos para usuarios corporativos en entornos con alta fricción de adopción.",
  snapshot: {
    role: "Product Designer",
    duration: "4 meses",
    team: "CEO, CPO, CTO, asesores legales, Product Owner, Designer (yo), equipo de ingeniería",
  },
  summary: [
    { text: "Theo AI estaba construyendo una " },
    { text: "plataforma de inteligencia para litigios", emphasis: true },
    { text: ". En ese momento no existía una interfaz definida, sino dos frentes de trabajo abiertos." },
    { type: "break", count: 2 },
    { text: "La primera, una " },
    { text: "herramienta de descubrimiento de casos", emphasis: true },
    { text: ", que tomó forma como un prototipo basado en prompt, diseñado para validar rápidamente una nueva dirección de solución." },
    { type: "break", count: 2 },
    { text: "La segunda, un " },
    { text: "producto de predicción de casos", emphasis: true },
    { text: ", que debía insertarse en un entorno rígido y de alta fricción organizacional, donde el problema no era de funcionalidades, sino de formato y adopción." },
  ],
  context: {
    heading: "El contexto",
    body: [
      { text: "Theo AI contaba con la tecnología, pero no con una dirección de mercado definida. El mandato era claro: " },
      { text: "validar rápido", emphasis: true },
      { text: ". En el sector legal, la inercia institucional es estructural. " },
      { text: "Revisiones de seguridad, ciclos de cumplimiento normativo y aprobaciones de IT", emphasis: true },
      { text: " hacen que adoptar una nueva herramienta sea complejo, independientemente de la calidad del producto." },
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
    eyebrow: "Herramienta de descubrimiento de casos",
    heading: "Arquitectura de decisión antes que interfaz",
    intro: "El producto debía existir antes de cualquier interfaz visual. Eso implicó que el trabajo de diseño se centrara completamente en la estructura: qué información mostrar, qué criterios aplicar y qué debía incluir el resultado para habilitar una decisión real.",
    items: [
      {
        title: "El descubrimiento de casos era manual, inconsistente y difícil de escalar.",
        description: "Las empresas que financian litigios identifican oportunidades revisando manualmente noticias, presentaciones judiciales y publicaciones de estudios jurídicos. El proceso no es sistemático ni eficiente.",
      },
      {
        title: "Un agente en lugar de un wireframe",
        description: "Diseñé un agente de investigación basado en GPT que escaneaba fuentes públicas, filtraba resultados según criterios obligatorios, cruzaba múltiples fuentes para reducir alucinaciones y generaba un resumen estructurado del caso con información suficiente para tomar una decisión.",
      },
      {
        title: "El prompt como producto",
        description: "El desafío no era la interfaz. Era la arquitectura de decisión: qué criterios son obligatorios y cuáles complementarios, qué señales indican potencial de financiamiento y qué debe contener el resultado para permitir una decisión de inversión real.",
      },
    ],
  },
  workstream2: {
    eyebrow: "Producto de predicción de casos",
    heading: "El formato como problema de adopción",
    intro: "Prototipé y validé tres formatos con equipos legales internos de gran tamaño para identificar cuál podía integrar predicciones de IA de alto impacto en sus procesos actuales con la menor fricción posible.",
    items: [
      {
        title: "Plataforma: El mejor en términos funcionales, perdió por costo de adopción.",
        description: "Generó interés en pruebas piloto, pero los usuarios no podían justificar sumar una nueva herramienta en un entorno donde las revisiones de seguridad, aprobaciones de IT y procesos internos hacen que incorporar algo nuevo sea costoso.",
      },
      {
        title: "Chat: Formato abierto, poco alineado con la forma de trabajo.",
        description: "Un modelo conversacional asume exploración, pero el trabajo del GC es estructurado y orientado a decisión. El chat no encajaba con esa lógica operativa.",
      },
      {
        title: "Resumen por correo electrónico: Sin herramienta nueva, sin cambio de comportamiento. El ganador.",
        description: "No requería adopción formal, no implicaba procesos de aprobación adicionales. Llegaba al canal habitual de trabajo y se integraba en un flujo que los usuarios no estaban dispuestos a modificar. El formato con mayor capacidad perdió frente al formato con mayor facilidad de adopción.",
      },
    ],
  },
  finding: {
    heading: "Hallazgos",
    body: [
      { text: "Descubrimiento de casos: El prototipo funcionó y se validó con usuarios reales. El resultado fue claro: " },
      { text: "la calidad del output todavía no era lo suficientemente robusta para generar confianza plena.", emphasis: true },
      { type: "break", count: 2 },
      { text: "Predicción de casos: En entornos con alta fricción organizacional, " },
      { text: "la adopción pesa más que la capacidad técnica.", emphasis: true },
      { text: " El correo electrónico ganó no por ser el mejor formato, sino por estar ya integrado en el ecosistema operativo del usuario." },
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
      description: "Prototipé la herramienta de descubrimiento de casos como un prompt estructurado de GPT. Definí los criterios obligatorios, los filtros de señal y el formato de salida necesario para que quien toma la decisión pudiera actuar sobre los resultados.",
    },
    {
      icon: "chart-scatter",
      title: "Diseño de interfaces para datos complejos",
      description: "Transformé predicciones de IA complejas en resultados claros y accionables a través de tres formatos de entrega: un panel operativo completo, una interfaz tipo chat con visualización basada en gráficos y un resumen estructurado por correo electrónico.",
    },
    {
      icon: "shield-alert",
      title: "Hipótesis de fricción de adopción",
      description: "Antes de diseñar cualquier formato, planteé la restricción central: en un sector conservador, la fricción de adopción pesa más que la calidad de las funcionalidades. Validé esta hipótesis en sesiones con usuarios reales.",
    },
    {
      icon: "layout-panel-top",
      title: "El formato como decisión estratégica",
      description: "Probé tres formatos de entrega: plataforma, chat y correo electrónico. El correo ganó no por ser el más potente, sino por llegar al canal donde los usuarios ya trabajaban.",
    },
    {
      icon: "git-branch",
      title: "Investigación en dos capas",
      description: "Conduje sesiones de investigación junto al CEO con un grupo que rara vez participa en procesos de producto. Dos niveles: asesores legales para comprender en profundidad el dominio, y General Counsels (GC) para validar sin sesgo desde la práctica real.",
    },
  ],
};

export function getTheoAICaseStudy(locale: Locale): TheoAICaseStudy {
  return locale === "es" ? theoAICaseStudyEs : theoAICaseStudyEn;
}

export const theoAICaseStudy = theoAICaseStudyEn;
