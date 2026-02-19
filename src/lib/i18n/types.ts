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
};
