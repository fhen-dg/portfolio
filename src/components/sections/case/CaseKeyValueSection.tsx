import type { CaseStrategyItem } from "@/lib/types";

type CaseKeyValueSectionProps = {
  intro?: string;
  items: CaseStrategyItem[];
  heading?: string;
  supporting3?: string;
};

export function CaseKeyValueSection({
  intro,
  items,
  heading,
  supporting3,
}: CaseKeyValueSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] max-w-[800px] w-full">
        <div className="flex flex-col gap-[20px]">
          {supporting3 && (
            <p className="lg:supporting3 body2 text-neutral-500">{supporting3}</p>
          )}
          <h2 className="md:title1 title2 text-neutral-800">{heading}</h2>
          {intro && (
            <p className="md:supporting2 body1 text-neutral-600">{intro}</p>
          )}
        </div>
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:grid md:grid-cols-[180px_1fr] md:gap-8 gap-[6px] py-5 border-t border-neutral-300 last:border-b"
            >
              <span className="body2 !font-medium text-neutral-800 md:pt-[3px]">
                {item.title}
              </span>
              <p className="md:body2 body2 text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
