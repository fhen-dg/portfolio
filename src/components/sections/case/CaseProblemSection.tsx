import type { RichTextSegment } from "@/lib/types";

type CaseProblemSectionProps = {
  body: RichTextSegment[];
};

export function CaseProblemSection({ body }: CaseProblemSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[52px] max-w-[960px] w-full">
        <h2 className="title1 lg:header1 text-neutral-800">The Problem</h2>
        <p className="supporting1 text-neutral-600">
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
