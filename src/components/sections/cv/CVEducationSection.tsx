import type { CVEducation } from "@/lib/types";

type CVEducationSectionProps = {
  education: CVEducation[];
};

export function CVEducationSection({ education }: CVEducationSectionProps) {
  return (
    <section className="flex flex-col gap-[24px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">Education</h2>
      <div className="flex flex-col gap-[16px] items-start w-full">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-0 items-start w-full">
            <h3 className="body3-bold text-neutral-800">{edu.degree}</h3>
            <p className="body3 text-neutral-600">{edu.institution}</p>
            <p className="body3 text-neutral-500">
              {edu.period}{edu.location ? ` · ${edu.location}` : ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
