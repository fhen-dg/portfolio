import type { CVFeaturedProject } from "@/lib/types";

type CVFeaturedProjectsSectionProps = {
  featuredProjects: CVFeaturedProject[];
};

export function CVFeaturedProjectsSection({
  featuredProjects,
}: CVFeaturedProjectsSectionProps) {
  return (
    <section className="flex flex-col gap-[24px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">Featured projects</h2>
      <div className="flex flex-col gap-[16px] items-start w-full">
        {featuredProjects.map((project, index) => (
          <div key={index} className="flex flex-col gap-[4px] items-start w-full">
            <h3 className="body1-bold text-neutral-black">{project.name}</h3>
            <p className="body1 text-neutral-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
