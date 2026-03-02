import Image from "next/image";

export type CaseHeroSectionProps = {
  heroImage: string;
  heroImageMobile?: string;
  heroImageAlt: string;
  title: string;
  description: string;
  year: string;
};

export function CaseHeroSection({
  heroImage,
  heroImageMobile,
  heroImageAlt,
  title,
  description,
  year,
}: CaseHeroSectionProps) {
  return (
    <section className="flex justify-center w-full pb-[28px] lg:h-[calc(100vh-104px)] h-fit">
      <div className="flex flex-col items-center gap-[24px] max-w-[960px] w-full">
        {heroImage ? (
          <div className="relative w-full rounded-[12px] overflow-hidden aspect-[634/447] lg:aspect-auto lg:h-[478px]">
            {heroImageMobile && (
              <Image
                src={heroImageMobile}
                alt={heroImageAlt}
                fill
                className="object-contain lg:hidden"
                priority
              />
            )}
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className={`object-contain ${heroImageMobile ? "hidden lg:block" : ""}`}
              priority
            />
          </div>
        ) : (
          <div className="w-full rounded-[12px] bg-neutral-100 aspect-[634/447] lg:aspect-auto lg:h-[478px]" />
        )}

        <div className="flex flex-col items-center text-center w-full gap-[44px] lg:gap-[40px]">
          <div className="flex flex-col items-center w-full text-center gap-[12px] lg:gap-[20px]">
            <h1 className="title2 lg:title1 text-neutral-800">{title}</h1>
            <p className="body1 lg:supporting2 text-neutral-800">{description}</p>
          </div>
          <p className="body3 lg:body1 text-neutral-600">{year}</p>
        </div>
      </div>
    </section>
  );
}
