import type { CaseStrategyItem } from "@/lib/types";

type CaseStrategicAlignmentSectionProps = {
  intro: string;
  items: CaseStrategyItem[];
  heading?: string;
};

export function CaseStrategicAlignmentSection({
  intro,
  items,
  heading = "Strategic Alignment",
}: CaseStrategicAlignmentSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[60px] lg:gap-[60px] max-w-[960px] w-full">
        <div className="flex flex-col gap-[20px]">
          <h2 className="md:title1 title2 text-neutral-800">{heading}</h2>
          <p className="md:supporting2 body1 text-neutral-600">{intro}</p>
        </div>
        <div className="flex flex-col gap-[32px] lg:gap-[44px]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:gap-[12px] gap-[8px]">
              <h3 className="md:title4 title5 text-neutral-800">{item.title}</h3>
              <p className="md:body1 body2 text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
