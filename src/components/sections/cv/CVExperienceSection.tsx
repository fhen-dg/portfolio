import type { CVExperience } from "@/lib/types";

type CVExperienceSectionProps = {
  experience: CVExperience[];
};

export function CVExperienceSection({ experience }: CVExperienceSectionProps) {
  return (
    <section className="flex flex-col gap-[24px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">Experience</h2>
      <div className="flex flex-col gap-[40px] items-start w-full">
        {experience.map((job, index) => (
          <div key={index} className="flex flex-col gap-[24px] items-start w-full">
            {/* Job Title and Company */}
            <div className="flex flex-col gap-[8px] items-start">
              <div className="flex items-center gap-2 w-full flex-wrap">
                <h3 className="body1-bold text-neutral-800">{job.role}</h3>
                <span className="body1-bold text-neutral-500">—</span>
                <p className="body1 text-neutral-600">{job.company}</p>
              </div>
              <p className="body3 text-neutral-500">
                {job.period}  ·  {job.location}
              </p>
            </div>

            {/* Responsibilities */}
            <ul className="flex flex-col gap-[8px] items-start list-disc pl-4">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="body3 text-neutral-600">
                  {responsibility}
                </li>
              ))}
            </ul>

            {/* Featured Projects */}
            {job.featuredProjects && job.featuredProjects.length > 0 && (
              <div className="flex flex-col gap-[12px] items-start w-full">
                <h4 className="body3 text-neutral-500 text-left">Featured projects</h4>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  {job.featuredProjects.map((project, idx) => (
                    <div key={idx} className="flex flex-col items-start gap-1 w-full">
                      <span className="body3-bold text-neutral-800">{project.name}</span>
                      <p className="body3 text-neutral-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* More Projects */}
            {job.moreProjects && job.moreProjects.length > 0 && (
              <div className="flex flex-col gap-[12px] items-start w-full">
                <h4 className="body3 text-neutral-500 text-left">More Projects</h4>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  {job.moreProjects.map((project, idx) => (
                    <div key={idx} className="flex flex-wrap gap-[8px] items-start">
                      <span className="body3 font-medium text-neutral-600">{project.name}</span>
                      {project.type && (
                        <>
                          <span className="body3-bold text-neutral-500">•</span>
                          <p className="body3 text-neutral-600">{project.type}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
