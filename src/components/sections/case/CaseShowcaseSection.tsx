import Image from "next/image";
import type { CaseShowcaseItem } from "@/lib/types";
import { AutoplayVideo } from "@/components/ui/AutoplayVideo";
import { Separator } from "@/components/ui/separator";

type CaseShowcaseSectionProps = {
  items: CaseShowcaseItem[];
};

function ShowcaseItem({
  item,
  index,
}: {
  item: CaseShowcaseItem;
  index: number;
}) {
  const isImageLeft = item.imagePosition === "left";

  const mediaBlock = item.video ? (
    <div className="w-full lg:w-[480px] ring-1 ring-neutral-400 shrink-0 aspect-square rounded-[12px] overflow-hidden">
      <AutoplayVideo
        src={item.video}
        className="w-full h-full object-cover"
      />
    </div>
  ) : item.image ? (
    <div className="relative w-full lg:w-[480px] ring-1 ring-neutral-400 shrink-0 aspect-square rounded-[12px] overflow-hidden">
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        className="object-cover"
      />
    </div>
  ) : (
    <div className="w-full lg:w-[480px] shrink-0 aspect-square rounded-[12px]" />
  );

  const textBlock = (
    <div className="flex flex-col gap-[20px] lg:gap-[24px] flex-1">
      <div className="flex flex-col gap-[12px]">
        <h3 className="md:title4 title5 text-neutral-800">{item.title}</h3>
        <p className="md:body1 body2 text-neutral-600">{item.description}</p>
      </div>
      <ul className="flex flex-col gap-[8px]">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-[12px] md:body1 body2 text-neutral-600">
            <span className="mt-[10px] w-[4px] h-[4px] rounded-full bg-neutral-600 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-[32px] md:gap-[60px] md:items-center ${
        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {mediaBlock}
      {textBlock}
    </div>
  );
}

export function CaseShowcaseSection({ items }: CaseShowcaseSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col max-w-[960px] w-full">
        {items.map((item, i) => (
          <div key={`${item.title}-${i}`} className="flex flex-col">
            <ShowcaseItem item={item} index={i} />
            {i < items.length - 1 ? (
              <div className="my-[52px] lg:my-[60px]">
                <Separator className="bg-neutral-400" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
