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
};
