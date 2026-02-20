"use client";

import { useLocale } from "@/hooks/useLocale";
import { getLaborCaseStudy } from "@/content/cases/labor";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CaseHeroSection } from "@/components/sections/case/CaseHeroSection";
import { CaseStatementSection } from "@/components/sections/case/CaseStatementSection";
import { CaseDisplayBreakdownSection } from "@/components/sections/case/CaseDisplayBreakdownSection";
import { CaseDescriptiveBreakdownSection } from "@/components/sections/case/CaseDescriptiveBreakdownSection";
import { CaseShowcaseSection } from "@/components/sections/case/CaseShowcaseSection";
import { CaseOverviewSection } from "@/components/sections/case/CaseOverviewSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export function LaborCaseContent() {
  const { t, locale } = useLocale();
  const cs = getLaborCaseStudy(locale);

  return (
    <>
      <RevealOnScroll className="w-full">
        <CaseHeroSection
          heroImage={cs.heroImage}
          heroImageAlt={cs.heroImageAlt}
          title={cs.title}
          description={cs.description}
          roles={cs.roles}
        />
      </RevealOnScroll>

      <div className="h-[200px] md:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          body={cs.problem.body}
          heading={t.caseSections.problem}
        />
      </RevealOnScroll>

      <div className="h-[120px] md:h-[200px] w-full" />

      <RevealOnScroll className="w-full">
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
    </>
  );
}
