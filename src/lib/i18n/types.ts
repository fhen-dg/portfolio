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
    work: string;
    about: string;
    contact: string;
  };
};
