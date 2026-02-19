import type { Metadata } from "next";
import { laborCaseStudy } from "@/content/cases/labor";
import { CaseHeroSection } from "@/components/sections/case/CaseHeroSection";
import { CaseProblemSection } from "@/components/sections/case/CaseProblemSection";
import { CaseComplexitiesSection } from "@/components/sections/case/CaseComplexitiesSection";
import { CaseStrategicAlignmentSection } from "@/components/sections/case/CaseStrategicAlignmentSection";
import { CaseSolutionSection } from "@/components/sections/case/CaseSolutionSection";
import { CaseShowcaseSection } from "@/components/sections/case/CaseShowcaseSection";
import { CaseOverviewSection } from "@/components/sections/case/CaseOverviewSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export const metadata: Metadata = {
  title: "Labor – Portfolio",
  description: laborCaseStudy.description,
};

const cs = laborCaseStudy;

export default function LaborCasePage() {
  return (
    <main className="flex flex-col items-center px-5 pt-[20px] pb-[40px] lg:px-[72px]">
      <CaseHeroSection
        heroImage={cs.heroImage}
        heroImageAlt={cs.heroImageAlt}
        title={cs.title}
        description={cs.description}
        roles={cs.roles}
      />

      <div className="h-[80px] lg:h-[160px] w-full" />

      <CaseProblemSection body={cs.problem.body} />

      <div className="h-[80px] lg:h-[120px] w-full" />

      <CaseComplexitiesSection items={cs.complexities} />

      <div className="h-[80px] lg:h-[160px] w-full" />

      <CaseStrategicAlignmentSection
        intro={cs.strategicAlignment.intro}
        items={cs.strategicAlignment.items}
      />

      <div className="h-[80px] lg:h-[160px] w-full" />

      <CaseSolutionSection body={cs.solution.body} />

      <div className="h-[80px] lg:h-[120px] w-full" />

      <CaseShowcaseSection items={cs.showcase} />

      <div className="h-[80px] lg:h-[160px] w-full" />

      <CaseOverviewSection
        image={cs.overview.image}
        imageAlt={cs.overview.imageAlt}
        link={cs.overview.link}
        tools={cs.overview.tools}
      />

      <div className="h-[80px] lg:h-[120px] w-full" />

      <ContactFooter />

      <div className="h-[120px] w-full" />
    </main>
  );
}
