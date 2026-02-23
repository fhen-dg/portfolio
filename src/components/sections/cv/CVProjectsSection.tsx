"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { Button } from "@/components/ui/Button";

export function CVProjectsSection() {
  const { t } = useLocale();
  const projects = t.cv.projectsList;

  const otherProjects = t.cv.projectsOtherList;

  return (
    <section className="flex flex-col gap-[24px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">{t.cv.sections.projects}</h2>
      <div className="flex flex-col gap-[40px] items-start w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex flex-col gap-[8px] items-start">
              <h3 className="body1-bold text-neutral-800">{project.name}</h3>
              <p className="body3 text-neutral-500">
                {project.role}  ·  {project.year}
              </p>
            </div>

            <p className="body3 text-neutral-600">{project.summary}</p>

            <ul className="flex flex-col gap-[8px] items-start list-disc pl-4">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="body3 text-neutral-600">
                  {bullet}
                </li>
              ))}
            </ul>

            {project.caseStudyUrl && project.caseStudyLabel && (
              <Button variant="ghost" asChild className="-ml-5">
                <Link href={project.caseStudyUrl}>{project.caseStudyLabel}</Link>
              </Button>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-[12px] items-start w-full">
          <h3 className="body3 text-neutral-500 text-left">
            {t.cv.sections.projectsOther}
          </h3>
          <div className="flex flex-col gap-[8px] items-start w-full">
            {otherProjects.map((project, idx) => (
              <div key={idx} className="flex flex-wrap gap-[8px] items-start">
                <span className="body3 font-medium text-neutral-600">{project.name}</span>
                <span className="body3-bold text-neutral-500">•</span>
                <p className="body3 text-neutral-600">{project.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
