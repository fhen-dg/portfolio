"use client";

import { IconButton } from "@/components/ui/iconButton"
import { Languages } from "lucide-react"
import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const { t, locale, setLocale } = useLocale();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <div className="flex justify-end gap-2 mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton variant="ghost">
                <Languages />
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={locale} onValueChange={(value) => setLocale(value as Locale)}>
                <DropdownMenuRadioItem value="en">
                  English
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="es">
                  Español
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <h1 className="text-center mb-4 header1 text-neutral-800">
          {t.hero.greeting}
        </h1>
        <p className="text-center supporting2 text-neutral-600">
          {t.hero.tagline}
        </p>
      </div>
    </main>
  );
}
