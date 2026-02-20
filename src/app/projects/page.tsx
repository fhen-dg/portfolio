"use client";

import { useLocale } from "@/hooks/useLocale";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function ProjectsPage() {
  const { t } = useLocale();

  return (
    <main className="flex flex-col items-center px-5 py-[40px lg:py-[60px] lg:px-[72px]">
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-[40px] items-center max-w-[1024px] w-full">
          <h1 className="title1 lg:header1 text-neutral-800 text-center w-full">
            {t.nav.projects}
          </h1>
        </div>
      </div>
      <div className="h-[40px] lg:h-[60px] w-full" />
      <ProjectsSection />
      <div className="h-[120px] lg:h-[200px] w-full" />
      <ContactFooter />
      <div className="h-[120px] w-full" />
    </main>
  );
}
