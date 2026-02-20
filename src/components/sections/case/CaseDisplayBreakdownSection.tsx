import type { CaseComplexityItem } from "@/lib/types";

type CaseDisplayBreakdownSectionProps = {
  items: CaseComplexityItem[];
  heading?: string;
};

export function CaseDisplayBreakdownSection({
  items,
  heading,
}: CaseDisplayBreakdownSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[52px] max-w-[960px] w-full">
        <h2 className="md:title1 title2 text-neutral-800">{heading}</h2>
        <div className="flex flex-col gap-[32px] lg:gap-[52px]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-[4px]">
              <h3 className="md:title3 title4 text-neutral-800">{item.title}</h3>
              <p className="md:supporting2 body1 text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
