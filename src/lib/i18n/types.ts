export type Locale = "en" | "es";

export type Translations = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    greeting: string;
    tagline: string;
  };
  nav: {
    projects: string;
    cv: string;
    contact: string;
  };
};
