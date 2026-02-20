import { getViramosCaseStudy } from "@/content/cases/viramos";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CaseHeroSection } from "@/components/sections/case/CaseHeroSection";
import { CaseStatementSection } from "@/components/sections/case/CaseStatementSection";
import { CaseDisplayBreakdownSection } from "@/components/sections/case/CaseDisplayBreakdownSection";
import { CaseDescriptiveBreakdownSection } from "@/components/sections/case/CaseDescriptiveBreakdownSection";
import { CaseShowcaseSection } from "@/components/sections/case/CaseShowcaseSection";
import { CaseMetricsSection } from "@/components/sections/case/CaseMetricsSection";
import { CaseOverviewSection } from "@/components/sections/case/CaseOverviewSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export function ViramosCaseContent() {
  const cs = getViramosCaseStudy();

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
          body={cs.opportunity.body}
          heading="The Opportunity"
        />
      </RevealOnScroll>

      <div className="h-[120px] md:h-[200px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseDisplayBreakdownSection
          items={cs.earlyValidation}
          heading="Early validation (No-code phase)"
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseDescriptiveBreakdownSection
          intro={cs.contextImmersion.intro}
          items={cs.contextImmersion.items}
          heading="Context immersion — SIVI (Brazil)"
        />
      </RevealOnScroll>

      <div className="h-[200px] lg:h-[320px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseStatementSection
          body={cs.inflectionPoint.body}
          heading="Inflection Point"
          align="center"
        />
      </RevealOnScroll>

      <div className="h-[120px] lg:h-[200px] w-full" />

      <RevealOnScroll className="w-full">
        <CaseDescriptiveBreakdownSection
          intro={cs.reArchitecting.intro}
          items={cs.reArchitecting.items}
          heading="Re-architecting for scale"
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
    </>
  );
}
