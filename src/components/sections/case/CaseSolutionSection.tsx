import type { RichTextSegment } from "@/lib/types";

type CaseSolutionSectionProps = {
  body: RichTextSegment[];
  heading?: string;
};

export function CaseSolutionSection({ body, heading = "The Solution" }: CaseSolutionSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[52px] max-w-[960px] w-full items-end">
        <h2 className="title1 lg:header1 text-neutral-800 w-full text-center">
          {heading}
        </h2>
        <p className="supporting1 text-neutral-600 text-center">
          {body.map((segment, i) =>
            segment.emphasis ? (
              <span key={i} className="supporting1-medium text-neutral-800">
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
