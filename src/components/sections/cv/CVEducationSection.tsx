"use client";

import { useLocale } from "@/hooks/useLocale";

export function CVEducationSection() {
  const { t } = useLocale();

  const education = [
    {
      degree: t.cv.education.productStrategy,
      institution: "Edison",
      period: "2023",
      location: "",
    },
    {
      degree: t.cv.education.uiDesignSystems,
      institution: "Coderhouse",
      period: "2021",
      location: "",
    },
    {
      degree: t.cv.education.advancedUXUI,
      institution: "Coderhouse",
      period: "2021",
      location: "",
    },
    {
      degree: t.cv.education.uxUIDesign,
      institution: "Coderhouse",
      period: "2019",
      location: "",
    },
    {
      degree: t.cv.education.packagingDesign,
      institution: "Universidad de Palermo",
      period: "2019",
      location: "",
    },
    {
      degree: t.cv.education.bachelorGraphicDesign,
      institution: "Universidad de Palermo",
      period: "2015–2018",
      location: "",
    },
    {
      degree: t.cv.education.webDesign,
      institution: "Escuela Da Vinci",
      period: "2017",
      location: "",
    },
  ];

  return (
    <section className="flex flex-col gap-[24px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">{t.cv.sections.certifications}</h2>
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
