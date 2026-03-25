"use client";

import { homeTechStack } from "@/content/home";
import { useLocale } from "@/hooks/useLocale";
import { Logo } from "@/components/ui/Logo";
import { ToolBadge } from "@/components/ui/ToolBadge";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] items-start max-w-[1024px] w-full text-center">
        {/* Main text block – grows to fill available space and centers content */}
        <div className="flex items-center justify-center w-full">
          <Logo size={32} className="mb-[32px] mt-[20px]" />
        </div>
        <div className="flex flex-1 flex-col mt-[-20px] gap-[28px] items-center justify-center w-full text-neutral-800">
          <p className="body3 text-neutral-500 lg:body3 w-full max-w-[278px] md:max-w-none">
            {t.hero.introPrefix}
            <span className="text-neutral-500 hidden">Fhen</span>
          </p>
          <div className="flex flex-col gap-[24px] items-center justify-center w-full">
            <p className="title2 lg:header1 w-full max-w-[278px] md:max-w-[800px] whitespace-pre-line">
              {t.hero.heading}
            </p>
            <p className="body2 text-neutral-600 lg:body1 w-full">
              {t.hero.tagline}
            </p>
            <div className="flex flex-col items-center gap-[14px] w-full pt-[8px]">
              <p className="body3 uppercase tracking-[0.18em] text-neutral-500">
                {t.hero.techStackLabel}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-[8px] max-w-[760px]">
                {homeTechStack.map((tool) => (
                  <ToolBadge key={tool} name={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info captions row */}
        <div className="flex flex-col gap-[8px] items-center justify-center w-full hidden">
        <div className="flex flex-col gap-[8px] items-center justify-center body3 text-neutral-600 w-full shrink-0 lg:flex-row lg:flex-wrap lg:gap-[12px] lg:body2">
          <p>{t.hero.role}</p>
          <p className="hidden lg:block">-</p>
          <p>{t.hero.location}</p>
        </div>
        </div>
      </div>
    </section>
  );
}
