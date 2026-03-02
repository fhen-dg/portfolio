import type { CaseStrategyItem } from "@/lib/types";
import { Separator } from "@/components/ui/separator";

type CaseDescriptiveBreakdownSectionProps = {
  intro?: string;
  items: CaseStrategyItem[];
  heading?: string;
  supporting3?: string;
};

export function CaseDescriptiveBreakdownSection({
  intro,
  items,
  heading,
  supporting3,
}: CaseDescriptiveBreakdownSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] max-w-[960px] w-full">
        <div className="flex flex-col gap-[20px]">
          {supporting3 && <p className="lg:supporting3 body2 text-neutral-500">{supporting3}</p>}
          <h2 className="md:title1 title2 text-neutral-800">{heading}</h2>
          {intro && <p className="md:supporting2 body1 text-neutral-600">{intro}</p>}
        </div>
        <Separator className="bg-neutral-400" />
        <div className="flex flex-col gap-[32px] lg:gap-[44px]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:gap-[12px] gap-[8px]">
              <h3 className="md:title4 title5 text-neutral-800">{item.title}</h3>
              <p className="md:body1 body2 text-neutral-600 mb-[20px]">{item.description}</p>
              <Separator className="bg-neutral-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
