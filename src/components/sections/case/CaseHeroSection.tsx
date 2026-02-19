import Image from "next/image";

export type CaseHeroSectionProps = {
  heroImage: string;
  heroImageAlt: string;
  title: string;
  description: string;
  roles: string[];
};

export function CaseHeroSection({
  heroImage,
  heroImageAlt,
  title,
  description,
  roles,
}: CaseHeroSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[28px] max-w-[960px] w-full h-[calc(100vh-140px)]">
        {heroImage ? (
          <div className="relative w-full lg:min-h-[400px] min-h-[320px] h-[400px] rounded-[12px] overflow-hidden">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div className="w-full aspect-[2/1] rounded-[12px]" />
        )}

        <div className="flex flex-col gap-[20px] h-full">
          <h1 className="title1 lg:title1 text-neutral-800 text-center">{title}</h1>
          <p className="body1 lg:supporting2 text-neutral-800 text-center">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-[16px] gap-y-[4px] body1 text-neutral-600">
            {roles.map((role, i) => (
              <span key={i} className="flex items-center gap-[16px]">
                {i > 0 && <span className="hidden lg:inline lg:body1 text-neutral-600">•</span>}
                {role}
              </span>
            ))}
          </div>
      </div>
    </section>
  );
}
