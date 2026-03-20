import type { LaborCaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const laborCaseStudyEn: LaborCaseStudy = {
  slug: "laborapp",
  title: "Labor",
  year: "2026",
  heroImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
  heroImageMobile: "/images/projects/laborapp/LaborCaseCoverMobile.png",
  heroImageAlt: "Labor – agricultural services marketplace",
  description:
    "A 0→1 agriculture marketplace shipped to production in 2 months. Built on Next.js, deployed on Vercel with Vercel Blob, Supabase, Clerk auth, and Google Maps.",
  snapshot: {
    role: "Product Designer / Design Engineer",
    duration: "2 months, 2025–2026",
    team: "Founders, Product Owner, Engineering Advisor (for weekly consulting), Designer (me)",
  },
  summary: [
    { text: "Agricultural services in Argentina run on informal networks—" },
    { text: "no structured way to connect", emphasis: true },
    { text: " producers and contractors without intermediaries." },
    { type: "break", count: 2 },
    { text: "Tight budget, 2 months", emphasis: true },
    { text: ", two people, one goal: ", },
    { text: "validate the product core. ", emphasis: true },
  ],
  responsibilities: [
    {
      icon: "square-code",
      title: "Implementation—Vibecoded",
      description: "Built 50% of all production features directly in code, including authentication flows, publishing forms, geo-filtered search, and third-party integrations.",
    },
    {
      icon: "component",
      title: "UI system",
      description: "All screens and UI patterns designed in Figma, aligned with shadcn components used in production, ensuring full parity between design and implementation.",
    },
    {
      icon: "layout-template",
      title: "Product architecture",
      description: "Defined the core domain model, user flows, and core loop, structuring the entire platform around a single publish-discover-contact cycle.",
    },
    {
      icon: "database",
      title: "Data model design",
      description: "Designed the database schema: table structure, entity relationships, and data architecture aligned with the platform's service taxonomy and user flows.",
    },
    {
      icon: "network",
      title: "Service taxonomy",
      description: "Designed the category logic and information hierarchy for filtering services by type and geolocation—results pre-filtered by user location for immediate relevance.",
    },
    {
      icon: "sparkles",
      title: "AI-assisted workflow",
      description: "Used AI to evaluate stack decisions and accelerate iteration—including identifying Vercel Blob as the asset pipeline solution.",
    },
  ],
  problem: {
    body: [
      { text: "A fragmented market with " },
      { text: "no structured interaction model, ", emphasis: true },
      { text: "fluid user roles, and a " },
      { text: "trust gap to bridge", emphasis: true },
      { text: ", without the safety net of intermediaries, established patterns, or extended timelines." },
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
          "Rather than building revenue mechanisms early, we focused entirely on trust signals and core utility, proving the platform's value before extracting it.",
      },
      {
        title: "Fluid participation model",
        description:
          "Instead of forcing users into a fixed role, we designed a flexible architecture where context determines whether someone is a producer, contractor, or both.",
      },
      {
        title: "Design for technical feasibility & speed",
        description:
          "We scoped the MVP around Vercel's native integrations — Vercel Blob for the full asset pipeline (self-integrated), Supabase via Vercel integration for Postgres, Clerk for auth, and Google Maps for location — without sacrificing the core experience.",
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
      { text: "A fluid participation " },
      { text: "MVP", emphasis: true },
      { text: " built around one core loop: " },
      { text: "Publish → Discover → Contact → Review", emphasis: true },
      { type: "break", count: 2 },
      

      { text: "Validation metrics ",emphasis: true, },
      {
        text: "defined for the client to measure: listing creation, contact initiation, and return visits." },
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
      videoFormat: "mobile",
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
      imagePosition: "right",
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
      imagePosition: "left",
      showRing: false,
    },
  ],
  overview: {
    image: "/images/projects/laborapp/LaborOverview.png",
    imageAlt: "Labor platform overview",
    link: {
      label: "laborapp.com.ar",
      href: "https://laborapp.com.ar",
    },
    tools: [
      "Cursor",
      "Github",
      "Vercel",
      "Next.js",
      "Claude",
      "GPT",
      "Figma",
      "Clerk",
      "Supabase",
      "Notion",
      "Google Workspace",
      "Slack",
    ],
  },
};

const laborCaseStudyEs: LaborCaseStudy = {
  slug: "laborapp",
  title: "Labor",
  year: "2026",
  heroImage: "/images/projects/laborapp/LaborCaseHeroImage.png",
  heroImageMobile: "/images/projects/laborapp/LaborCaseCoverMobile.png",
  heroImageAlt: "Labor – marketplace de servicios agropecuarios",
  description:
    "Marketplace 0 a 1 llevado a producción en 2 meses, vibecodeado en Next.js y deployado en Vercel, con Vercel Blob para gestión de archivos, Supabase como base de datos, autenticación con Clerk e integración con Google Maps.",
  snapshot: {
    role: "Product Designer / Design Engineer",
    duration: "2 meses",
    team: "Founders, Product owner, Asesor de desarrollo (consultoría semanal), Designer (yo)",
  },
  summary: [
    { text: "Labor es un " },
    { text: "MVP 0→1 de marketplace", emphasis: true },
    { text: ". Un modelo de interacción digital estructurado construido para validar una hipótesis central." },
    { type: "break", count: 2 },
    { text: "El MVP se centró en un loop central:" },
    { type: "break" },
    { text: "Publicar servicio → Descubrir proveedores → Iniciar contacto directo", emphasis: true },
    { type: "break", count: 2 },
    { text: "Con " },
    { text: "métricas de validación temprana", emphasis: true },
    { text: " definidas junto al cliente para evaluar si este loop generaba " },
    { text: "engagement real", emphasis: true },
    { text: "." },
  ],
  responsibilities: [
    {
      icon: "square-code",
      title: "Implementación vibecodeada",
      description:
        "Construí el 50% de todas las features de producción directamente en código, incluyendo flujos de auth, formularios de publicación, búsqueda con filtro geográfico y todas las integraciones.",
    },
    {
      icon: "component",
      title: "Sistema de UI completo",
      description: "Diseñé todas las pantallas y patrones de UI en Figma, alineados con los componentes shadcn usados en producción, asegurando paridad directa entre diseño e implementación.",
    },
    {
      icon: "layout-template",
      title: "Arquitectura de producto",
      description: "Definí el modelo de dominio, flujos de usuario y loop de interacción, estructurando la plataforma alrededor de un único ciclo publicar-descubrir-contactar.",
    },
    {
      icon: "database",
      title: "Diseño del modelo de datos",
      description: "Diseñé el schema de base de datos: estructura de tablas, relaciones entre entidades y arquitectura de datos alineada con la taxonomía de servicios y los flujos de usuario.",
    },
    {
      icon: "network",
      title: "Taxonomía de servicios",
      description: "Diseñé la jerarquía de información y lógica de categorías para filtrar servicios por tipo y geolocalización, haciendo los resultados inmediatamente accionables para usuarios en regiones específicas.",
    },
    {
      icon: "sparkles",
      title: "Workflow asistido por IA",
      description: "Usé IA para investigar decisiones de stack, explorar arquitectura técnica y acelerar iteración, incluyendo identificar y proponer Vercel Blob como solución para el pipeline de assets.",
    },
    {
      icon: "bar-chart-3",
      title: "Métricas de validación",
      description: "Alineé con el equipo de marketing para definir señales tempranas de activación: tasa de publicación, inicio de contacto y visitas recurrentes, midiendo si el core loop generaba engagement real.",
    },
  ],
  problem: {
    body: [
      { text: "Un mercado fragmentado " },
      { text: "sin modelo de interacción estructurado, ", emphasis: true },
      { text: "roles de usuario fluidos y una " },
      { text: "brecha de confianza por resolver", emphasis: true },
      { text: ", sin intermediarios, patrones establecidos ni plazos extendidos." },
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
          "Postergamos la monetización para enfocarnos en adquisición y construcción de confianza. Invertimos en señales esenciales como imágenes verificables, descripciones guiadas y prueba social para impulsar la adopción temprana.",
      },
      {
        title: "Modelo de participación fluido",
        description:
          "Diseñamos una arquitectura flexible en lugar de segmentación rígida por perfiles. Esto redujo fricción, optimizó desarrollo y permitió a los usuarios alternar entre productor y contratista sin fricciones estructurales.",
      },
      {
        title: "Diseño orientado a viabilidad técnica y velocidad",
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
      showRing: false,
    },
  ],
  overview: {
    image: "/images/projects/laborapp/LaborOverview.png",
    imageAlt: "Resumen de la plataforma Labor",
    link: {
      label: "laborapp.com.ar",
      href: "https://laborapp.com.ar",
    },
    tools: [
      "Cursor",
      "Github",
      "Vercel",
      "Next.js",
      "Claude",
      "GPT",
      "Figma",
      "Clerk",
      "Supabase",
      "Notion",
      "Google Workspace",
      "Slack",
    ],
  },
};

export function getLaborCaseStudy(locale: Locale): LaborCaseStudy {
  return locale === "es" ? laborCaseStudyEs : laborCaseStudyEn;
}

export const laborCaseStudy = laborCaseStudyEn;
