import type { Project } from "@/lib/types";

export const primaryProjects: Project[] = [
  {
    slug: "viramos",
    title: "Viramos",
    year: "2025",
    coverImage: "/images/projects/viramos/ViramosCaseHeroImage.png",
    coverImageAlt: "Viramos – regatta operating system",
    href: "/case/viramos",
  },
  {
    slug: "labor",
    title: "Labor",
    year: "2026",
    coverImage: "https://www.figma.com/api/mcp/asset/230b1c08-3825-43dd-bb52-16be7b9ddbac",
    coverImageAlt: "Labor – agricultural services marketplace",
    href: "/case/laborapp",
  },
];

export const secondaryProjects: Project[] = [
  {
    slug: "theo-ai",
    title: "Theo AI",
    year: "2025",
    coverImage: "https://www.figma.com/api/mcp/asset/b750479a-d2f2-4d7d-a4e5-02bd7e8c4263",
    coverImageAlt: "Theo AI project cover",
    comingSoon: true,
  },
  {
    slug: "verybusy",
    title: "Verybusy",
    year: "2024",
    coverImage: "https://www.figma.com/api/mcp/asset/c45f4164-276b-4cad-b4f5-0c1fd4bb2d33",
    coverImageAlt: "Verybusy project cover",
    comingSoon: true,
  },
];
