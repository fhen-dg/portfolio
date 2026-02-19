"use client";

import { IconButton } from "@/components/ui/iconButton"
import { Badge } from "@/components/ui/badge"
import { Languages } from "lucide-react"
import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/types";

const dummyProject: Project = {
  slug: "labor",
  title: "Labor",
  year: "2026",
  coverImage: "https://www.figma.com/api/mcp/asset/230b1c08-3825-43dd-bb52-16be7b9ddbac",
  coverImageAlt: "Labor – agricultural services marketplace",
};

export default function Home() {
  const { t, locale, setLocale } = useLocale();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <div className="flex justify-end gap-2 mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton variant="ghost">
                <Languages />
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={locale} onValueChange={(value) => setLocale(value as Locale)}>
                <DropdownMenuRadioItem value="en">
                  English
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="es">
                  Español
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Badge variant="default">
          {locale === "en" ? "English" : "Español"}
        </Badge>
        <h1 className="text-center mb-4 header1 text-neutral-800">
          {t.hero.greeting}
        </h1>
        <p className="text-center supporting2 text-neutral-600 mb-12">
          {t.hero.tagline}
        </p>

        <ProjectCard project={dummyProject} />
      </div>
    </main>
  );
}
