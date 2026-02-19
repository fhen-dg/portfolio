"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="w-full bg-neutral-100">
      <div className="flex flex-col items-center gap-[8px] px-5 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left md:px-[72px] md:py-[40px]">
        {/* Left: Fhen • Full name */}
        <div className="flex flex-wrap items-center justify-center gap-[8px] text-sm text-neutral-500 md:justify-start">
          <Link
            href="/"
            className="font-medium text-[#EE1F63] transition-colors hover:text-[#c91a54]"
          >
            {t.footer.brand}
          </Link>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-600">{t.footer.fullName}</span>
        </div>

        {/* Right: Location • Year • Timezone (stacked on mobile) */}
        <div className="flex flex-wrap items-center justify-center gap-[8px] text-sm text-neutral-600 md:justify-end">
          <span>{t.footer.location}</span>
          <span>•</span>
          <span>{t.footer.year}</span>
          <span>•</span>
          <span>{t.footer.timezone}</span>
        </div>
      </div>
    </footer>
  );
}
