export type Project = {
  slug: string;
  title: string;
  tagline?: string;
  year: string;
  coverImage: string;
  coverImageMobile?: string;
  coverImageAlt?: string;
  comingSoon?: boolean;
  href?: string;
};

export type RichTextSegment = {
  text: string;
  emphasis?: boolean;
};

export type CaseSummaryContentItem = (RichTextSegment & { type?: never }) | { type: "break"; count?: number };

export type CaseComplexityItem = {
  title: string;
  description: string;
};

export type CaseResponsibilityIcon =
  | "square-code"
  | "component"
  | "layout-template"
  | "workflow"
  | "shield-check"
  | "compass"
  | "layers"
  | "network"
  | "database"
  | "bar-chart-3"
  | "sparkles"
  | "lightbulb"
  | "shield-alert"
  | "brain-circuit"
  | "scale"
  | "git-branch"
  | "chart-scatter"
  | "layout-panel-top"
  | "square-chevron-right"
  | "mouse-pointer-click"
  | "banknote"
  | "shuffle"
  | "folder-tree";

export type CaseResponsibilityItem = {
  icon: CaseResponsibilityIcon;
  title: string;
  description: string;
};

export type CaseStrategyItem = {
  title: string;
  description: string;
};

export type CaseShowcaseItem = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  video?: string;
  imagePosition: "left" | "right";
};

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseMetrics = {
  heading: string;
  intro: string;
  rows: CaseMetric[][];
  conclusion: string;
  footnote?: string;
};

export type ViramosCaseStudy = {
  slug: string;
  title: string;
  year: string;
  heroImage: string;
  heroImageMobile: string;
  heroImageAlt: string;
  description: string;
  snapshot: {
    role: string;
    duration: string;
    team: string;
  };
  summary?: CaseSummaryContentItem[];
  responsibilities?: CaseResponsibilityItem[];
  opportunity: {
    body: RichTextSegment[];
  };
  earlyValidation?: CaseComplexityItem[];
  contextImmersion: {
    intro: string;
    items: CaseStrategyItem[];
  };
  inflectionPoint: {
    body: RichTextSegment[];
  };
  reArchitecting: {
    intro: string;
    items: CaseStrategyItem[];
  };
  showcase: CaseShowcaseItem[];
  metrics: CaseMetrics;
  overview: {
    image: string;
    imageAlt: string;
    link: { label: string; href: string };
    tools: string[];
  };
};

export type TheoAICaseStudy = {
  slug: string;
  title: string;
  year: string;
  heroImage: string;
  heroImageMobile: string;
  heroImageAlt: string;
  description: string;
  snapshot: {
    role: string;
    duration: string;
    team: string;
  };
  summary: CaseSummaryContentItem[];
  context: {
    heading: string;
    body: RichTextSegment[];
  };
  workstreamsOverview: {
    heading: string;
    items: CaseComplexityItem[];
  };
  workstream1: {
    supporting3?: string;
    heading: string;
    intro: string;
    items: CaseStrategyItem[];
  };
  workstream2: {
    supporting3?: string;
    heading: string;
    intro: string;
    items: CaseStrategyItem[];
  };
  finding: {
    heading: string;
    body: CaseSummaryContentItem[];
  };
  overview: {
    image: string;
    imageAlt: string;
    link: { label: string; href: string };
    tools: string[];
  };
  responsibilities: CaseResponsibilityItem[];
};

export type LaborCaseStudy = {
  slug: string;
  title: string;
  year: string;
  heroImage: string;
  heroImageMobile: string;
  heroImageAlt: string;
  description: string;
  snapshot: {
    role: string;
    duration: string;
    team: string;
  };
  summary?: CaseSummaryContentItem[];
  responsibilities?: CaseResponsibilityItem[];
  problem: {
    body: RichTextSegment[];
  };
  complexities: CaseComplexityItem[];
  strategicAlignment: {
    intro: string;
    items: CaseStrategyItem[];
  };
  solution: {
    body: RichTextSegment[];
  };
  showcase: CaseShowcaseItem[];
  overview: {
    image: string;
    imageAlt: string;
    link: { label: string; href: string };
    tools: string[];
  };
};

export type VerybusyCaseStudy = {
  slug: string;
  title: string;
  year: string;
  heroImage: string;
  heroImageMobile?: string;
  heroImageAlt: string;
  description: string;
  snapshot: {
    role: string;
    duration: string;
    team: string;
  };
  summary: CaseSummaryContentItem[];
  responsibilities: CaseResponsibilityItem[];
  situation: {
    heading: string;
    body: CaseSummaryContentItem[];
  };
  structuralDecisions: {
    heading: string;
    intro: string;
    items: CaseStrategyItem[];
  };
  showcase: CaseShowcaseItem[];
  overview: {
    image: string;
    imageAlt: string;
    link: { label: string; href: string };
    tools: string[];
  };
};

export type CVExperience = {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  featuredProjects?: CVFeaturedProject[];
  moreProjects?: CVMoreProject[];
};

export type CVEducation = {
  degree: string;
  institution: string;
  period: string;
  location: string;
};

export type CVFeaturedProject = {
  name: string;
  description: string;
};

export type CVMoreProject = {
  name: string;
  type?: string;
};

export type CVSkills = {
  [category: string]: string[];
};

export type CVData = {
  profile: {
    image: string;
    imageAlt: string;
    name: string;
    nickname: string;
    role: string;
  };
  about: string[];
  experience: CVExperience[];
  education: CVEducation[];
  skills: CVSkills;
};
