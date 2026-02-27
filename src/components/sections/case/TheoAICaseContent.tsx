"use client";

import { useLocale } from "@/hooks/useLocale";
import { getTheoAICaseStudy } from "@/content/cases/theo-ai";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CaseHeroSection } from "@/components/sections/case/CaseHeroSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export function TheoAICaseContent() {
  const { locale } = useLocale();
  const cs = getTheoAICaseStudy(locale);

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

      <ContactFooter />

      <div className="h-[120px] w-full" />
    </>
  );
}
