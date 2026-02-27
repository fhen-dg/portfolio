"use client";

import { useLocale } from "@/hooks/useLocale";
import { getViramosCaseStudy } from "@/content/cases/viramos";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CaseHeroSection } from "@/components/sections/case/CaseHeroSection";
import { CaseSnapshotSection } from "@/components/sections/case/CaseSnapshotSection";
import { CaseSummarySection } from "@/components/sections/case/CaseSummarySection";
import { CaseResponsibilitiesSection } from "@/components/sections/case/CaseResponsibilitiesSection";
import { CaseStatementSection } from "@/components/sections/case/CaseStatementSection";
import { CaseDisplayBreakdownSection } from "@/components/sections/case/CaseDisplayBreakdownSection";
import { CaseDescriptiveBreakdownSection } from "@/components/sections/case/CaseDescriptiveBreakdownSection";
import { CaseShowcaseSection } from "@/components/sections/case/CaseShowcaseSection";
import { CaseMetricsSection } from "@/components/sections/case/CaseMetricsSection";
import { CaseOverviewSection } from "@/components/sections/case/CaseOverviewSection";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { primaryProjects } from "@/content/projects";

export function ViramosCaseContent() {
  const { t, locale } = useLocale();
  const cs = getViramosCaseStudy(locale);

  return (
    <>
      <RevealOnScroll className="w-full">
        <CaseHeroSection
          heroImage={cs.heroImage}
          heroImageAlt={cs.heroImageAlt}
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
        />
      </RevealOnScroll>

      {cs.summary?.length ? (
        <>
          <div className="h-[200px] md:h-[320px] w-full" />

          <RevealOnScroll className="w-full">
            <CaseSummarySection items={cs.summary} />
          </RevealOnScroll>
        </>
      ) : null}

      {cs.responsibilities?.length ? (
        <>
          <div className="h-[160px] md:h-[280px] w-full" />

          <RevealOnScroll className="w-full">
            <CaseResponsibilitiesSection
              heading={t.caseSections.responsibilities}
              items={cs.responsibilities}
            />
          </RevealOnScroll>

          <div className="h-[200px] md:h-[320px] w-full" />
        </>
      ) : (
        <div className="h-[200px] md:h-[320px] w-full" />
      )}

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          body={cs.opportunity.body}
          heading={t.viramosSections.opportunity}
        />
      </RevealOnScroll>

      {cs.earlyValidation?.length ? (
        <>
          <div className="h-[120px] md:h-[200px] w-full" />

          <RevealOnScroll className="w-full">
            <CaseDisplayBreakdownSection
              items={cs.earlyValidation}
              heading={t.viramosSections.earlyValidation}
            />
          </RevealOnScroll>

          <div className="h-[200px] lg:h-[320px] w-full" />
        </>
      ) : (
        <div className="h-[200px] lg:h-[320px] w-full" />
      )}

      <RevealOnScroll className="w-full">
        <CaseDescriptiveBreakdownSection
          intro={cs.contextImmersion.intro}
          items={cs.contextImmersion.items}
          heading={t.viramosSections.contextImmersion}
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          body={cs.inflectionPoint.body}
          heading={t.viramosSections.inflectionPoint}
          align="center"
        />
      </RevealOnScroll>

      <div className="h-[120px] lg:h-[200px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseDescriptiveBreakdownSection
          intro={cs.reArchitecting.intro}
          items={cs.reArchitecting.items}
          heading={t.viramosSections.reArchitecting}
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <CaseShowcaseSection items={cs.showcase} />

      <div className="h-[120px] lg:h-[200px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseMetricsSection metrics={cs.metrics} />
      </RevealOnScroll>

      <div className="h-[120px] lg:h-[200px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseOverviewSection
          image={cs.overview.image}
          imageAlt={cs.overview.imageAlt}
          link={cs.overview.link}
          tools={cs.overview.tools}
        />
      </RevealOnScroll>

      <div className="h-[120px] lg:h-[120px] w-full" />

      <ContactFooter />

      <div className="h-[120px] w-full" />

      <RevealOnScroll className="w-full">
        <div className="max-w-[1024px] mx-auto hidden">
          <ProjectCard project={primaryProjects.find((p) => p.slug === "labor")!} />
        </div>
      </RevealOnScroll>

      <div className="h-[120px] w-full" />
    </>
  );
}
