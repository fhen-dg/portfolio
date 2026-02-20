import type { CVMoreProject } from "@/lib/types";

type CVMoreProjectsSectionProps = {
  moreProjects: CVMoreProject[];
};

export function CVMoreProjectsSection({
  moreProjects,
}: CVMoreProjectsSectionProps) {
  return (
    <section className="flex flex-col gap-[24px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">More Projects</h2>
      <div className="flex flex-col gap-[12px] items-start w-full">
        {moreProjects.map((project, index) => (
          <div key={index} className="flex flex-col gap-[2px] items-start w-full">
            <h3 className="body1-bold text-neutral-black">{project.name}</h3>
            {project.type && (
              <p className="body3 text-neutral-500">{project.type}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
