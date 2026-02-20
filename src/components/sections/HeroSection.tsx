"use client";

import { useLocale } from "@/hooks/useLocale";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] items-start max-w-[1024px] h-[calc(100vh-160px)] w-full text-center">
        {/* Main text block – grows to fill available space and centers content */}
        <div className="flex flex-1 flex-col gap-[28px] items-center justify-center w-full text-neutral-800">
          <p className="body3 lg:body1 w-full">
            {t.hero.introPrefix}
            <span className="font-medium text-primary-base">Fhen</span>
          </p>
          <p className="title1 lg:header1 w-full">
            {t.hero.heading}
          </p>
          <p className="body1 lg:supporting2 w-full">
            {t.hero.tagline}
          </p>
        </div>

        {/* Info captions row */}
        <div className="flex flex-col gap-[8px] items-center justify-center body3 text-neutral-600 w-full shrink-0 lg:flex-row lg:flex-wrap lg:gap-[20px] lg:body1">
          <p>{t.hero.role}</p>
          <p className="hidden lg:block">•</p>
          <p>{t.hero.location}</p>
        </div>
      </div>
    </section>
  );
}
