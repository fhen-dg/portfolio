import type { CaseStrategyItem } from "@/lib/types";

type CaseStrategicAlignmentSectionProps = {
  intro: string;
  items: CaseStrategyItem[];
};

export function CaseStrategicAlignmentSection({
  intro,
  items,
}: CaseStrategicAlignmentSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[52px] max-w-[960px] w-full">
        <div className="flex flex-col gap-[20px]">
          <h2 className="title1 text-neutral-800">Strategic Alignment</h2>
          <p className="supporting2 text-neutral-600">{intro}</p>
        </div>
        <div className="flex flex-col gap-[32px] lg:gap-[44px]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-[8px]">
              <h3 className="title4 text-neutral-800">{item.title}</h3>
              <p className="body1 text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
