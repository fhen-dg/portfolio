import type { CaseStudy } from "@/lib/types";
import type { Locale } from "@/lib/i18n/types";

const laborCaseStudyEn: CaseStudy = {
  slug: "laborapp",
  title: "Labor",
  year: "2026",
  heroImage: "https://www.figma.com/api/mcp/asset/230b1c08-3825-43dd-bb52-16be7b9ddbac",
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
      image: "/images/projects/laborapp/TrustLoopImage.png",
      imageAlt: "Lightweight trust loop",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "/images/projects/laborapp/UIOverview.png",
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
  heroImage: "https://www.figma.com/api/mcp/asset/230b1c08-3825-43dd-bb52-16be7b9ddbac",
  heroImageAlt: "Labor – marketplace de servicios agropecuarios",
  description:
    "Una plataforma de confianza crítica que conecta productores agropecuarios con contratistas, habilitando el descubrimiento directo y la publicación de servicios.",
  roles: [
    "Estrategia de producto y diseño",
    "UX y UI orientados a sistemas",
    "Entrega completa del MVP",
  ],
  problem: {
    body: [
      { text: "La contratación de servicios agropecuarios", emphasis: true },
      { text: " en Argentina sigue siendo " },
      { text: "fragmentada e informal. ", emphasis: true },
      { text: "Los productores tienen dificultades para " },
      { text: "encontrar servicios confiables, ", emphasis: true },
      {
        text: "mientras que los contratistas carecen de visibilidad y demanda constante.",
      },
    ],
  },
  complexities: [
    {
      title: "Restricciones del MVP",
      description:
        "Un presupuesto limitado exigió enfocarse solo en lo que hacía la plataforma verdaderamente funcional de extremo a extremo.",
    },
    {
      title: "Roles híbridos",
      description:
        "Los usuarios podían actuar como productores, contratistas o ambos, dependiendo de su contexto real.",
    },
    {
      title: "Descubrimiento basado en ubicación",
      description:
        "Los servicios debían ser relevantes para donde los usuarios operan realmente, no solo para lo que ofrecen.",
    },
    {
      title: "Lógica específica del dominio",
      description:
        "Los servicios agropecuarios requerían comprender conceptos matizados para diseñar flujos con sentido para quienes trabajan en el campo.",
    },
    {
      title: "Confianza sin intermediarios",
      description:
        "El producto necesitaba una forma de establecer confianza entre usuarios sin depender de intermediarios tradicionales.",
    },
  ],
  strategicAlignment: {
    intro:
      "A través de sesiones colaborativas con el equipo fundador, alineamos cuatro decisiones estratégicas que dieron forma a cada elección de diseño y producto.",
    items: [
      {
        title: "Priorizar el ajuste problema-solución sobre la monetización",
        description:
          "En lugar de construir mecanismos de ingresos temprano, nos enfocamos completamente en señales de confianza y utilidad central — demostrando el valor de la plataforma antes de extraerlo.",
      },
      {
        title: "Modelo de participación fluida",
        description:
          "En lugar de forzar a los usuarios a un rol fijo, diseñamos una arquitectura flexible donde el contexto determina si alguien es productor, contratista o ambos.",
      },
      {
        title: "Diseño para viabilidad técnica y velocidad",
        description:
          "Alcanzamos el MVP a lo que el stack podía soportar — Clerk para auth, Vercel Blob para media y Google Maps para ubicación — sin sacrificar la experiencia central.",
      },
      {
        title: "Métricas centradas en validación",
        description:
          "El éxito se definió por señales de activación: creación de publicaciones, inicio de contacto y visitas de retorno — no métricas de vanidad.",
      },
    ],
  },
  solution: {
    body: [
      { text: "Labor es un " },
      { text: "marketplace de participación fluida", emphasis: true },
      {
        text: " donde productores agropecuarios y contratistas se descubren y conectan directamente. Un ",
      },
      {
        text: "flujo de publicación guiado con descubrimiento basado en servicio y ubicación",
        emphasis: true,
      },
      { text: " y un ciclo de confianza liviano diseñado para " },
      { text: "validar el núcleo del producto", emphasis: true },
      { text: " antes de escalar." },
    ],
  },
  showcase: [
    {
      title: "Publicación unificada",
      description:
        "Un flujo guiado que se adapta a la intención del usuario — ya sea publicando una oferta de servicio o buscando una — desde un único punto de entrada compartido.",
      bullets: [
        "Inicio compartido como punto de entrada único",
        "Rol definido contextualmente, no preseleccionado",
        "Campos condicionales con orientación UX centrada en confianza",
      ],
      image: "",
      imageAlt: "Flujo de publicación unificada",
      video: "/images/projects/laborapp/LaborPublishing.mp4",
      imagePosition: "right",
    },
    {
      title: "Descubrimiento por ubicación y servicio",
      description:
        "Una arquitectura de relevancia primero anclada en la ubicación del usuario, asegurando que los resultados sean inmediatamente accionables para personas que trabajan en regiones específicas.",
      bullets: [
        "Prefiltrado por contexto del usuario",
        "Taxonomía jerárquica de servicios",
        "Contacto directo externalizado para validar interacción real",
      ],
      image: "",
      imageAlt: "Descubrimiento por ubicación y servicio",
      video: "/images/projects/laborapp/LaborDiscovery.mp4",
      imagePosition: "left",
    },
    {
      title: "Ciclo de confianza liviano",
      description:
        "Un conjunto de señales livianas que ayudan a los usuarios a tomar decisiones con confianza sin requerir garantías mediadas por la plataforma.",
      bullets: [
        "Imágenes del servicio (hasta 3 fotos)",
        "Descripciones guiadas del servicio",
        "Reseñas de pares visibles en el perfil",
      ],
      image: "/images/projects/laborapp/TrustLoopImage.png",
      imageAlt: "Ciclo de confianza liviano",
      imagePosition: "right",
    },
  ],
  overview: {
    image: "/images/projects/laborapp/UIOverview.png",
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
