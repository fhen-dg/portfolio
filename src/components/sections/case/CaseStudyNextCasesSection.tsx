import { SecondaryProjectCard } from "@/components/ui/SecondaryProjectCard";
import { getRecommendedNextProjects } from "@/content/projects";
import type { Locale } from "@/lib/i18n/types";

type CaseStudyNextCasesSectionProps = {
  currentSlug: string;
  locale: Locale;
};

export function CaseStudyNextCasesSection({ currentSlug, locale }: CaseStudyNextCasesSectionProps) {
  const recommendedProjects = getRecommendedNextProjects(currentSlug, locale);

  if (recommendedProjects.length < 2) {
    return null;
  }

  return (
    <section className="w-full max-w-[1024px] mx-auto">
      <p className="lg:title2 title3 text-neutral-800 text-center w-full md:mb-[40px] mb-[32px]">
      See also
      </p>
      <div className="flex flex-col lg:flex-row gap-[20px] w-full">
        {recommendedProjects.slice(0, 2).map((project) => (
          <SecondaryProjectCard  key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
