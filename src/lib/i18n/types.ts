export type Locale = "en" | "es";

export type Translations = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    introPrefix: string;
    heading: string;
    tagline: string;
    role: string;
    location: string;
  };
  nav: {
    projects: string;
    cv: string;
    contact: string;
  };
  contact: {
    title: string;
    linkedin: string;
    email: string;
    calendar: string;
  };
  projects: {
    comingSoon: string;
  };
  footer: {
    brand: string;
    fullName: string;
    location: string;
    year: string;
    timezone: string;
  };
  caseSections: {
    problem: string;
    responsibilities: string;
    complexities: string;
    strategicAlignment: string;
    solution: string;
    showcase: string;
  };
  caseSnapshot: {
    role: string;
    duration: string;
    team: string;
  };
  viramosSections: {
    context: string;
    solution: string;
    earlyValidation: string;
    contextImmersion: string;
    inflectionPoint: string;
    reArchitecting: string;
    coreExperience: string;
  };
  cv: {
    sections: {
      about: string;
      experience: string;
      projects: string;
      projectsOther: string;
      certifications: string;
    };
    profile: {
      role: string;
    };
    about: string[];
    experience: {
      amalgama: {
        role: string;
        period: string;
        location: string;
        summary: string;
        responsibilities: string[];
      };
      freelance?: {
        role: string;
        summary: string;
        responsibilities: string[];
      };
    };
    projectsList: Array<{
      name: string;
      role: string;
      year: string;
      summary: string;
      bullets: string[];
      caseStudyLabel?: string;
      caseStudyUrl?: string;
    }>;
    projectsOtherList: Array<{ name: string; type: string }>;
    education: {
      productStrategy: string;
      uiDesignSystems: string;
      advancedUXUI: string;
      uxUIDesign: string;
      packagingDesign: string;
      bachelorGraphicDesign: string;
      webDesign: string;
    };
  };
};
