"use client";

import { useLocale } from "@/hooks/useLocale";
import { getTheoAICaseStudy } from "@/content/cases/theo-ai";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CaseHeroSection } from "@/components/sections/case/CaseHeroSection";
import { CaseSnapshotSection } from "@/components/sections/case/CaseSnapshotSection";
import { CaseSummarySection } from "@/components/sections/case/CaseSummarySection";
import { CaseResponsibilitiesSection } from "@/components/sections/case/CaseResponsibilitiesSection";
import { CaseStatementSection } from "@/components/sections/case/CaseStatementSection";
import { CaseDescriptiveBreakdownSection } from "@/components/sections/case/CaseDescriptiveBreakdownSection";
import { CaseOverviewSection } from "@/components/sections/case/CaseOverviewSection";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { Separator } from "@/components/ui/separator";

export function TheoAICaseContent() {
  const { t, locale } = useLocale();
  const cs = getTheoAICaseStudy(locale);

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
        <CaseSummarySection items={cs.summary} />
      </RevealOnScroll>

      <div className="h-[160px] md:h-[280px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseResponsibilitiesSection
          heading={t.caseSections.responsibilities}
          items={cs.responsibilities}
        />
      </RevealOnScroll>

      <div className="h-[200px] md:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          heading={cs.context.heading}
          body={cs.context.body}
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseDescriptiveBreakdownSection
          eyebrow={cs.workstream1.eyebrow}
          heading={cs.workstream1.heading}
          intro={cs.workstream1.intro}
          items={cs.workstream1.items}
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseDescriptiveBreakdownSection
          eyebrow={cs.workstream2.eyebrow}
          heading={cs.workstream2.heading}
          intro={cs.workstream2.intro}
          items={cs.workstream2.items}
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          heading={cs.finding.heading}
          body={cs.finding.body}
          align="center"
        />
      </RevealOnScroll>

      <div className="h-[80px] lg:h-[120px] w-full" />

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
    </>
  );
}
