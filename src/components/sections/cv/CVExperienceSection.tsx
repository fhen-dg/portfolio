"use client";

import { useLocale } from "@/hooks/useLocale";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary?: string;
  responsibilities: string[];
};

export function CVExperienceSection() {
  const { t } = useLocale();

  const amalgamaExperience: ExperienceItem = {
    role: t.cv.experience.amalgama.role,
    company: "Amalgama",
    period: t.cv.experience.amalgama.period,
    location: t.cv.experience.amalgama.location,
    summary: t.cv.experience.amalgama.summary,
    responsibilities: t.cv.experience.amalgama.responsibilities,
  };

  const freelanceExperience: ExperienceItem = {
    role: t.cv.experience.freelance.role,
    company: "Freelance",
    period: "2023 – 2026",
    location: "Buenos Aires",
    summary: t.cv.experience.freelance.summary,
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

            {job.summary && (
              <p className="body3 text-neutral-600">{job.summary}</p>
            )}

            {/* Responsibilities */}
            {job.responsibilities.length > 0 && (
              <ul className="flex flex-col gap-[8px] items-start list-disc pl-4">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="body3 text-neutral-600">
                    {responsibility}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
