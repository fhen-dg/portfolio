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
    complexities: string;
    strategicAlignment: string;
    solution: string;
  };
  viramosSections: {
    opportunity: string;
    earlyValidation: string;
    contextImmersion: string;
    inflectionPoint: string;
    reArchitecting: string;
  };
  cv: {
    sections: {
      about: string;
      experience: string;
      featuredProjects: string;
      moreProjects: string;
      certifications: string;
    };
    profile: {
      role: string;
    };
    about: string[];
    experience: {
      amalgama: {
        role: string;
        responsibilities: string[];
        featuredProjects: {
          viramos: string;
          labor: string;
          theoAI: string;
          verybusy: string;
        };
        moreProjects: {
          qote: string;
          venueApp: string;
          coachRx: string;
          cryptoInsightsGroup: string;
          revealedTravelGuides: string;
          wilco: string;
        };
      };
      freelance: {
        role: string;
        responsibilities: string[];
      };
    };
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
