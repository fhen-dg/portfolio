import type { CaseShowcaseItem } from "@/lib/types";
import { AutoplayVideo } from "@/components/ui/AutoplayVideo";
import { LazyImage } from "@/components/ui/LazyImage";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type CaseShowcaseSectionProps = {
  items: CaseShowcaseItem[];
  heading?: string;
};

function ShowcaseItem({
  item,
  index,
}: {
  item: CaseShowcaseItem;
  index: number;
}) {
  const isImageLeft = item.imagePosition === "left";
  const showRing = item.showRing !== false;

  const isMobileVideo = item.videoFormat === "mobile";

  const mediaBlock = item.video ? (
    <div
      className={cn(
        "flex items-center justify-center",
        isMobileVideo ? "w-full md:w-[280px] shrink-0" : "w-full md:flex-1"
      )}
    >
      <div
        className={cn(
          "rounded-[10px] overflow-hidden",
          isMobileVideo
            ? "w-full aspect-[375/812]"
            : "w-full aspect-[1696/1080]",
          showRing && "ring-1 ring-neutral-400"
        )}
      >
        <AutoplayVideo
          src={item.video}
          poster={item.videoPoster}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  ) : item.image ? (
    <div
      className={cn(
        "relative w-full md:w-[380px] lg:w-[520px] xl:w-[640px] shrink-0 aspect-square rounded-[12px] overflow-hidden",
        showRing && "ring-1 ring-neutral-400 shadow-md"
      )}
    >
      <LazyImage
        src={item.image}
        alt={item.imageAlt}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 380px, (max-width: 1280px) 520px, 640px"
        className="object-cover"
      />
    </div>
  ) : (
    <div className="w-full lg:w-[480px] shrink-0 aspect-square rounded-[12px]" />
  );

  const textBlock = (
    <div className="flex flex-col gap-[20px] lg:gap-[24px] w-full md:w-[420px] shrink-0">
      <div className="flex flex-col gap-[8px]">
        {item.eyebrow && <p className="body3 text-neutral-500">{item.eyebrow}</p>}
        <h3 className="md:title4 title5 text-neutral-800">{item.title}</h3>
      </div>
      {item.description && (
        <p className="md:body3 body3 text-neutral-600">{item.description}</p>
      )}
      <ul className="flex flex-col gap-[8px]">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-[12px] md:body3 body3 text-neutral-600">
            <span className="mt-[10px] w-[4px] h-[4px] rounded-full bg-neutral-600 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-[32px] md:gap-[60px] md:items-center md:justify-center ${
        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {mediaBlock}
      {textBlock}
    </div>
  );
}

export function CaseShowcaseSection({ items, heading }: CaseShowcaseSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] max-w-[1368px] w-full">
        {heading && (
          <h2 className="title3 md:title1 text-neutral-800 text-left md:text-center">{heading}</h2>
        )}
        {items.map((item, i) => (
          <div key={`${item.title}-${i}`} className="flex flex-col">
            <ShowcaseItem item={item} index={i} />
            {i < items.length - 1 ? (
              <div className="my-[52px] lg:my-[60px] xl:my-[80px]">
                <Separator className="bg-neutral-400" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
