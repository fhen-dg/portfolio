"use client";

import { useLocale } from "@/hooks/useLocale";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SecondaryProjectCard } from "@/components/ui/SecondaryProjectCard";
import { primaryProjects, secondaryProjects } from "@/content/projects";

export function ProjectsSection() {
  const { t } = useLocale();

  return (
    <section id="projects" className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] items-center max-w-[1024px] w-full">
        <div className="flex flex-col gap-[20px] lg:gap-[40px] items-start w-full">
          {primaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          <div className="flex flex-col lg:flex-row gap-[20px] w-full">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard
                key={project.slug}
                project={project}
                comingSoonLabel={t.projects.comingSoon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
