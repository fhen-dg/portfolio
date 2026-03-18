"use client";

import { useLocale } from "@/hooks/useLocale";
import { getLaborCaseStudy } from "@/content/cases/labor";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CaseHeroSection } from "@/components/sections/case/CaseHeroSection";
import { CaseSnapshotSection } from "@/components/sections/case/CaseSnapshotSection";
import { CaseSummarySection } from "@/components/sections/case/CaseSummarySection";
import { CaseResponsibilitiesSection } from "@/components/sections/case/CaseResponsibilitiesSection";
import { CaseStatementSection } from "@/components/sections/case/CaseStatementSection";
import { CaseDisplayBreakdownSection } from "@/components/sections/case/CaseDisplayBreakdownSection";
import { CaseDescriptiveBreakdownSection } from "@/components/sections/case/CaseDescriptiveBreakdownSection";
import { CaseShowcaseSection } from "@/components/sections/case/CaseShowcaseSection";
import { CaseOverviewSection } from "@/components/sections/case/CaseOverviewSection";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getPrimaryProjects } from "@/content/projects";
import { Separator } from "@/components/ui/separator";

export function LaborCaseContent() {
  const { t, locale } = useLocale();
  const cs = getLaborCaseStudy(locale);

  return (
    <>
      <RevealOnScroll className="w-full">
        <CaseHeroSection
          heroImage={cs.heroImage}
          heroImageMobile={cs.heroImageMobile}
          heroImageAlt={cs.heroImageAlt}
          heroVideo={cs.heroVideo}
          title={cs.title}
          description={cs.description}
          year={cs.year}
        />
      </RevealOnScroll>

      <div className="h-[80px] lg:h-[120px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseSnapshotSection
          labels={t.caseSnapshot}
          role={cs.snapshot.role}
          duration={cs.snapshot.duration}
          team={cs.snapshot.team}
          tools={cs.overview.tools}
        />
      </RevealOnScroll>

      <div className="h-[200px] md:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseSummarySection items={cs.summary ?? []} />
      </RevealOnScroll>

      <div className="h-[160px] md:h-[280px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseResponsibilitiesSection
          heading={t.caseSections.responsibilities}
          items={cs.responsibilities ?? []}
        />
      </RevealOnScroll>

      <div className="h-[200px] md:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          body={cs.problem.body}
          heading={t.caseSections.problem}
        />
      </RevealOnScroll>

      <div className="h-[120px] md:h-[200px] w-full hidden" />

      <RevealOnScroll className="w-full hidden">
        <CaseDisplayBreakdownSection
          items={cs.complexities}
          heading={t.caseSections.complexities}
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseDescriptiveBreakdownSection
          intro={cs.strategicAlignment.intro}
          items={cs.strategicAlignment.items}
          heading={t.caseSections.strategicAlignment}
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          body={cs.solution.body}
          heading={t.caseSections.solution}
          align="center"
        />
      </RevealOnScroll>

      <div className="h-[120px] lg:h-[200px] w-full" />

      <CaseShowcaseSection items={cs.showcase} />

      <div className="h-[140px] lg:h-[260px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseOverviewSection
          image={cs.overview.image}
          images={cs.overview.images}
          imageAlt={cs.overview.imageAlt}
          link={cs.overview.link}
          tools={cs.overview.tools}
        />
      </RevealOnScroll>

      <div className="h-[120px] lg:h-[200px] w-full" />

      <Separator />

      <div className="h-[80px] lg:h-[120px] w-full" />

      <ContactFooter />

      <div className="h-[80px] lg:h-[120px] w-full" />

      <RevealOnScroll className="w-full">
        <div className="max-w-[600px] mx-auto hidden">
          <ProjectCard project={getPrimaryProjects(locale).find((p) => p.slug === "viramos")!} />
        </div>
      </RevealOnScroll>

      <div className="h-[120px] w-full hidden" />
    </>
  );
}
