import type { CaseSummaryContentItem } from "@/lib/types";

type CaseStatementSectionProps = {
  body: CaseSummaryContentItem[];
  heading?: string;
  align?: "left" | "center";
};

export function CaseStatementSection({
  body,
  heading,
  align = "left",
}: CaseStatementSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div
        className={`flex flex-col gap-[20px] md:gap-[32px] max-w-[800px] w-full${align === "center" ? " items-end" : ""}`}
      >
        <h2
          className={`title1 md:header1 text-neutral-800${align === "center" ? " w-full text-center" : ""}`}
        >
          {heading}
        </h2>
        <p
          className={`supporting2 md:supporting1 text-neutral-600${align === "center" ? " text-center" : ""}`}
        >
          {body.map((segment, i) =>
            "type" in segment && segment.type === "break" ? (
              Array.from({ length: segment.count ?? 1 }).map((_, j) => <br key={`${i}-${j}`} />)
            ) : segment.emphasis ? (
              <span key={i} className="supporting2-medium md:supporting1-medium text-neutral-800">
                {segment.text}
              </span>
            ) : (
              <span key={i}>{segment.text}</span>
            )
          )}
        </p>
      </div>
    </section>
  );
}
