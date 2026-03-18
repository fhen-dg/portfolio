import type { CaseSummaryContentItem } from "@/lib/types";

export type CaseSummarySectionProps = {
  items: CaseSummaryContentItem[];
  title?: string;
};

function isBreak(item: CaseSummaryContentItem): item is Extract<CaseSummaryContentItem, { type: "break" }> {
  return "type" in item && item.type === "break";
}

export function CaseSummarySection({ items, title }: CaseSummarySectionProps) {
  if (!items.length) return null;

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[20px] md:gap-[60px] max-w-[800px] w-full items-center">
        {title && (
          <h2 className="title1 md:header1 text-neutral-800 text-center">{title}</h2>
        )}
        <p className="body1 md:supporting1 text-neutral-600 text-center whitespace-pre-wrap">
          {items.map((item, i) => {
            if (isBreak(item)) {
              const count = Math.max(1, item.count ?? 1);
              return Array.from({ length: count }).map((_, j) => <br key={`br-${i}-${j}`} />);
            }

            return item.emphasis ? (
              <span key={i} className="font-medium text-neutral-800">
                {item.text}
              </span>
            ) : (
              <span key={i}>{item.text}</span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

