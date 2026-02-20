"use client";

import { useLocale } from "@/hooks/useLocale";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  featuredProjects?: Array<{ name: string; description: string }>;
  moreProjects?: Array<{ name: string; type: string }>;
};

export function CVExperienceSection() {
  const { t } = useLocale();

  const amalgamaExperience: ExperienceItem = {
    role: t.cv.experience.amalgama.role,
    company: "Amalgama",
    period: "2020 – 2026",
    location: "Buenos Aires",
    responsibilities: t.cv.experience.amalgama.responsibilities,
    featuredProjects: [
      { name: "Viramos", description: t.cv.experience.amalgama.featuredProjects.viramos },
      { name: "Labor", description: t.cv.experience.amalgama.featuredProjects.labor },
      { name: "Theo AI", description: t.cv.experience.amalgama.featuredProjects.theoAI },
      { name: "Verybusy", description: t.cv.experience.amalgama.featuredProjects.verybusy },
    ],
    moreProjects: [
      { name: "Qote", type: t.cv.experience.amalgama.moreProjects.qote },
      { name: "VenueApp", type: t.cv.experience.amalgama.moreProjects.venueApp },
      { name: "CoachRx", type: t.cv.experience.amalgama.moreProjects.coachRx },
      { name: "Crypto Insights Group", type: t.cv.experience.amalgama.moreProjects.cryptoInsightsGroup },
      { name: "Revealed Travel Guides", type: t.cv.experience.amalgama.moreProjects.revealedTravelGuides },
      { name: "Wilco", type: t.cv.experience.amalgama.moreProjects.wilco },
    ],
  };

  const freelanceExperience: ExperienceItem = {
    role: t.cv.experience.freelance.role,
    company: "Freelance",
    period: "2023 – 2026",
    location: "Buenos Aires",
    responsibilities: t.cv.experience.freelance.responsibilities,
  };

  const experience: ExperienceItem[] = [amalgamaExperience, freelanceExperience];

  return (
    <section className="flex flex-col gap-[24px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">{t.cv.sections.experience}</h2>
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
                <h4 className="body3 text-neutral-500 text-left">{t.cv.sections.featuredProjects}</h4>
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
                <h4 className="body3 text-neutral-500 text-left">{t.cv.sections.moreProjects}</h4>
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
