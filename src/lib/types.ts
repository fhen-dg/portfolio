export type Project = {
  slug: string;
  title: string;
  year: string;
  coverImage: string;
  coverImageAlt?: string;
  comingSoon?: boolean;
  href?: string;
};

export type RichTextSegment = {
  text: string;
  emphasis?: boolean;
};

export type CaseComplexityItem = {
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

export type CaseStudy = {
  slug: string;
  title: string;
  year: string;
  heroImage: string;
  heroImageAlt: string;
  description: string;
  roles: string[];
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
