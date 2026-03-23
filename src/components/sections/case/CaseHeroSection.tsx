"use client";

import Image from "next/image";
import { useState } from "react";
import { AutoplayVideo } from "@/components/ui/AutoplayVideo";

export type CaseHeroSectionProps = {
  heroImage?: string;
  heroImageMobile?: string;
  heroImageAlt: string;
  heroVideo?: string;
  title: string;
  description: string;
  year: string;
};

export function CaseHeroSection({
  heroImage,
  heroImageMobile,
  heroImageAlt,
  heroVideo,
  title,
  description,
  year,
}: CaseHeroSectionProps) {
  const [mediaLoaded, setMediaLoaded] = useState(false);

  const mediaFadeStyle: React.CSSProperties = {
    opacity: mediaLoaded ? 1 : 0,
    transition: "opacity 0.6s ease-out",
  };

  return (
    <section className="flex justify-center w-full pb-[28px] pt-[8px] lg:h-[calc(100vh-96px)] h-fit">
      <div className="flex flex-col items-center gap-[24px] max-w-[1200px] w-full">
        {heroVideo ? (
          <div
            style={mediaFadeStyle}
            className="w-fit rounded-[8px] border border-neutral-400 overflow-hidden lg:h-full aspect-[1696/1080]"
          >
            <AutoplayVideo
              src={heroVideo}
              className="w-full h-full object-contain"
              priority
              onCanPlay={() => setMediaLoaded(true)}
              minPlayDelayMs={800}
            />
          </div>
        ) : heroImage ? (
          <div
            style={mediaFadeStyle}
            className="relative w-full rounded-[12px] overflow-hidden aspect-[634/447] lg:aspect-auto lg:h-full lg:min-h-[478px]"
          >
            {heroImageMobile && (
              <Image
                src={heroImageMobile}
                alt={heroImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-contain lg:hidden"
                priority
                onLoad={() => setMediaLoaded(true)}
                onError={() => setMediaLoaded(true)}
              />
            )}
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className={`object-contain ${heroImageMobile ? "hidden lg:block" : ""}`}
              priority
              onLoad={() => setMediaLoaded(true)}
              onError={() => setMediaLoaded(true)}
            />
          </div>
        ) : (
          <div className="w-full rounded-[12px] bg-neutral-100 aspect-[634/447] lg:aspect-auto lg:h-[478px]" />
        )}
        <div className="flex flex-col items-center text-center w-full gap-[40px] lg:gap-[32px] max-w-[800px]">
          <div className="flex flex-col items-center w-full text-center gap-[12px] lg:gap-[16px]">
            <h1 className="title3 lg:title2 text-neutral-800">{title}</h1>
            <p className="body2 lg:body1 text-neutral-600">{description}</p>
          </div>
          <p className="body3 lg:body3 text-neutral-500 hidden">{year}</p>
        </div>
      </div>
    </section>
  );
}
