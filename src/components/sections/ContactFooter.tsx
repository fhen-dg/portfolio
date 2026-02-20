"use client";

import { useLocale } from "@/hooks/useLocale";
import { Button } from "@/components/ui/button";

export function ContactFooter() {
  const { t } = useLocale();

  return (
    <section id="contact" className="flex justify-center w-full">
      <div className="flex flex-col gap-[32px] items-center max-w-[1024px] w-full">
        <p className="title1 text-neutral-800 text-center w-full">
          {t.contact.title}
        </p>
        <div className="flex flex-wrap gap-[20px] items-start justify-center w-full">
          <Button asChild>
            <a
              href="https://www.linkedin.com/in/federico-cohen-correa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.linkedin}
            </a>
          </Button>
          <Button asChild>
            <a href="mailto:federico.cohen.c@gmail.com">
              {t.contact.email}
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://calendar.app.google/M4aXEZ4oTvXxnsZy6"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.calendar}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
