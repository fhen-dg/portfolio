import type { RichTextSegment } from "@/lib/types";

type CaseProblemSectionProps = {
  body: RichTextSegment[];
  heading?: string;
};

export function CaseProblemSection({ body, heading = "The Problem" }: CaseProblemSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[20px] md:gap-[32px] max-w-[960px] w-full">
        <h2 className="title1 md:header1 text-neutral-800">{heading}</h2>
        <p className="supporting2 md:supporting1 text-neutral-600">
          {body.map((segment, i) =>
            segment.emphasis ? (
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
