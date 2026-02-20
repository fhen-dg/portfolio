import type { CaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const laborCaseStudyEn: CaseStudy = {
  slug: "laborapp",
  title: "Labor",
  year: "2026",
  heroImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
  heroImageAlt: "Labor – agricultural services marketplace",
  description:
    "A trust-critical platform that connects agricultural producers and contractors, enabling direct discovery and service publishing.",
  roles: [
    "Product strategy & design",
    "Systems-driven UX and UI",
    "End-to-end MVP delivery",
  ],
  problem: {
    body: [
      { text: "Hiring agricultural services", emphasis: true },
      { text: " in Argentina is still " },
      { text: "fragmented and informal. ", emphasis: true },
      { text: "Producers struggle to " },
      { text: "find reliable services, ", emphasis: true },
      { text: "while contractors lack visibility and consistent demand." },
    ],
  },
  complexities: [
    {
      title: "MVP constraints",
      description:
        "A limited budget required focusing only on what made the platform truly functional end-to-end.",
    },
    {
      title: "Hybrid roles",
      description:
        "Users could act as producers, contractors, or both, depending on their real-world context.",
    },
    {
      title: "Location-based discovery",
      description:
        "Services needed to be relevant to where users actually operate, not just what they offer.",
    },
    {
      title: "Domain-specific logic",
      description:
        "Agricultural services required understanding nuanced concepts to design flows that made sense for people working in the field.",
    },
    {
      title: "Trust without intermediaries",
      description:
        "The product needed a way to establish trust between users without relying on traditional intermediaries.",
    },
  ],
  strategicAlignment: {
    intro:
      "Through collaborative sessions with the founding team, we aligned on four strategic decisions that shaped every design and product choice.",
    items: [
      {
        title: "Prioritizing problem-solution fit over monetization",
        description:
          "Rather than building revenue mechanisms early, we focused entirely on trust signals and core utility — proving the platform's value before extracting it.",
      },
      {
        title: "Fluid participation model",
        description:
          "Instead of forcing users into a fixed role, we designed a flexible architecture where context determines whether someone is a producer, contractor, or both.",
      },
      {
        title: "Design for technical feasibility & speed",
        description:
          "We scoped the MVP to what the stack could support — Clerk for auth, Vercel Blob for media, and Google Maps for location — without sacrificing the core experience.",
      },
      {
        title: "Validation-centric metrics",
        description:
          "Success was defined by activation signals: listing creation, contact initiation, and return visits — not vanity metrics.",
      },
    ],
  },
  solution: {
    body: [
      { text: "Labor is a " },
      { text: "fluid participation marketplace", emphasis: true },
      {
        text: " where agricultural producers and contractors discover and connect directly. A ",
      },
      {
        text: "guided publishing flow with service & location-based discovery",
        emphasis: true,
      },
      { text: " and a lightweight trust loop designed to " },
      { text: "validate the product core", emphasis: true },
      { text: " before scaling." },
    ],
  },
  showcase: [
    {
      title: "Unified publishing",
      description:
        "A guided flow that adapts to the user's intent — whether publishing a service offering or searching for one — from a single shared entry point.",
      bullets: [
        "Single shared home as entry point",
        "Role defined contextually, not pre-selected",
        "Conditional fields with trust-oriented UX guidance",
      ],
      image: "",
      imageAlt: "Unified publishing flow",
      video: "/images/projects/laborapp/LaborPublishing.mp4",
      imagePosition: "right",
    },
    {
      title: "Location & service-driven discovery",
      description:
        "A relevance-first architecture anchored in user location, ensuring results are immediately actionable for people working in specific regions.",
      bullets: [
        "Pre-filtered by user context",
        "Hierarchical service taxonomy",
        "Direct contact externalized to validate real interaction",
      ],
      image: "",
      imageAlt: "Location and service-driven discovery",
      video: "/images/projects/laborapp/LaborDiscovery.mp4",
      imagePosition: "left",
    },
    {
      title: "Lightweight trust loop",
      description:
        "A set of lightweight signals that help users make confident decisions without requiring platform-mediated guarantees.",
      bullets: [
        "Service imagery (up to 3 photos)",
        "Guided service descriptions",
        "Peer reviews surfaced on profile",
      ],
      image: "/images/projects/laborapp/LaborTrustLoop.png",
      imageAlt: "Lightweight trust loop",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "/images/projects/laborapp/LaborUIOverview.png",
    imageAlt: "Labor platform overview",
    link: {
      label: "laborapp.com.ar",
      href: "https://laborapp.com.ar",
    },
    tools: [
      "Figma",
      "Figjam",
      "Notion",
      "Google Workspace",
      "Slack",
      "GPT",
      "Cursor",
      "Github",
      "Vercel",
    ],
  },
};

const laborCaseStudyEs: CaseStudy = {
  slug: "laborapp",
  title: "Labor",
  year: "2026",
  heroImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
  heroImageAlt: "Labor – marketplace de servicios agropecuarios",
  description:
    "Una plataforma diseñada para generar confianza entre productores y contratistas agropecuarios, facilitando la contratación directa sin intermediarios.",
  roles: [
    "Estrategia y diseño de producto",
    "UX y UI con enfoque sistémico",
    "Desarrollo y entrega de MVP end-to-end",
  ],
  problem: {
    body: [
      { text: "La contratación de servicios agropecuarios en Argentina es " },
      { text: "fragmentada e informal. ", emphasis: true },
      { text: "Los productores " },
      { text: "no encuentran servicios confiables", emphasis: true },
      { text: " y los contratistas " },
      { text: "carecen de visibilidad y demanda constante.", emphasis: true },
    ],
  },
  complexities: [
    {
      title: "Restricciones del MVP",
      description:
        "Un presupuesto acotado exigía enfocarnos únicamente en aquello que hiciera a la plataforma verdaderamente funcional de punta a punta.",
    },
    {
      title: "Roles híbridos",
      description:
        "Los usuarios podían desempeñarse como productores, contratistas o ambos, según su contexto real de trabajo.",
    },
    {
      title: "Descubrimiento basado en ubicación",
      description:
        "Los servicios debían ser relevantes en función de dónde operan los usuarios, no solo en función de lo que ofrecen.",
    },
    {
      title: "Lógica específica del dominio",
      description:
        "Los servicios agropecuarios implican comprender conceptos técnicos y matices propios del sector para diseñar flujos coherentes con la realidad del campo.",
    },
    {
      title: "Confianza sin intermediarios",
      description:
        "El producto debía generar confianza entre usuarios sin depender de intermediarios tradicionales.",
    },
  ],
  strategicAlignment: {
    intro:
      "El proceso se apoyó en una colaboración estrecha con la Product Owner, stakeholders y expertos del dominio. Para asegurar que mantuviéramos el foco en nuestro objetivo central — generar valor operativo inmediato — tomamos una serie de decisiones estratégicas.",
    items: [
      {
        title: "Priorizar el encaje problema-solución por sobre la monetización",
        description:
          "Postergamos la monetización para enfocarnos en adquisición y construcción de confianza. Invertimos en señales esenciales — imágenes verificables, descripciones guiadas y prueba social — como impulsores de adopción temprana.",
      },
      {
        title: "Modelo de participación fluido",
        description:
          "Diseñamos una arquitectura flexible en lugar de segmentación rígida por perfiles. Esto redujo fricción, optimizó desarrollo y permitió a los usuarios alternar entre productor y contratista sin fricciones estructurales.",
      },
      {
        title: "Diseño orientado a factibilidad técnica y velocidad",
        description:
          "Priorizamos integraciones de alto impacto para lanzar rápido sin sobre-ingeniería. Utilizamos Clerk, Vercel Blob y Google Maps para validar el núcleo del producto con viabilidad técnica desde el inicio.",
      },
      {
        title: "Métricas centradas en validación",
        description:
          "Definimos el éxito en función de publicaciones activas e inicio de contacto directo. Esto mantuvo el foco en valor operativo real por sobre funcionalidades secundarias.",
      },
    ],
  },
  solution: {
    body: [
      { text: "Un " },
      { text: "marketplace flexible", emphasis: true },
      {
        text: " que integra publicación guiada, descubrimiento contextual y señales esenciales de confianza para ",
      },
      { text: "validar el núcleo del producto", emphasis: true },
      { text: " bajo restricciones de MVP." },
    ],
  },
  showcase: [
    {
      title: "Publicación unificada",
      description:
        "Un flujo guiado que se adapta a la intención del usuario en cada momento, utilizando microcopy contextual para mejorar claridad y confianza sin generar fricción innecesaria.",
      bullets: [
        "Un único home compartido como punto de entrada",
        "El rol se define contextualmente, no de forma previa",
        "Campos condicionales con guía orientada a generar confianza",
      ],
      image: "",
      imageAlt: "Flujo de publicación unificada",
      video: "/images/projects/laborapp/LaborPublishing.mp4",
      imagePosition: "right",
    },
    {
      title: "Descubrimiento por servicio y ubicación",
      description:
        "Arquitectura centrada en relevancia, anclada en la ubicación del usuario y en filtros contextuales.",
      bullets: [
        "Pre-filtrado según contexto del usuario",
        "Taxonomía jerárquica de servicios",
        "Contacto directo externalizado para validar interacción real",
      ],
      image: "",
      imageAlt: "Descubrimiento por servicio y ubicación",
      video: "/images/projects/laborapp/LaborDiscovery.mp4",
      imagePosition: "left",
    },
    {
      title: "Sistema de confianza simple",
      description:
        "Señales esenciales diseñadas para validar credibilidad antes de escalar hacia infraestructuras de verificación más complejas.",
      bullets: [
        "Imágenes del servicio (hasta 3)",
        "Descripciones guiadas",
        "Reseñas visibles en el perfil",
      ],
      image: "/images/projects/laborapp/LaborTrustLoop.png",
      imageAlt: "Sistema de confianza simple",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "/images/projects/laborapp/LaborUIOverview.png",
    imageAlt: "Resumen de la plataforma Labor",
    link: {
      label: "laborapp.com.ar",
      href: "https://laborapp.com.ar",
    },
    tools: [
      "Figma",
      "Figjam",
      "Notion",
      "Google Workspace",
      "Slack",
      "GPT",
      "Cursor",
      "Github",
      "Vercel",
    ],
  },
};

export function getLaborCaseStudy(locale: Locale): CaseStudy {
  return locale === "es" ? laborCaseStudyEs : laborCaseStudyEn;
}

export const laborCaseStudy = laborCaseStudyEn;
