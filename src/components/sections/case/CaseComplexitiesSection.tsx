import type { CaseComplexityItem } from "@/lib/types";

type CaseComplexitiesSectionProps = {
  items: CaseComplexityItem[];
  heading?: string;
};

export function CaseComplexitiesSection({ items, heading = "Complexities" }: CaseComplexitiesSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[52px] max-w-[960px] w-full">
        <h2 className="title1 text-neutral-800">{heading}</h2>
        <div className="flex flex-col gap-[40px] lg:gap-[52px]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-[8px]">
              <h3 className="title3 text-neutral-800">{item.title}</h3>
              <p className="supporting2 text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
