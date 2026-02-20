"use client";

import { useLocale } from "@/hooks/useLocale";

export function CVAboutSection() {
  const { t } = useLocale();

  return (
    <section className="flex flex-col gap-[16px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">{t.cv.sections.about}</h2>
      <div className="flex flex-col gap-[16px] items-start w-full">
        {t.cv.about.map((paragraph, index) => (
          <p key={index} className="body1 text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
