"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/iconButton"
import { SendHorizonal } from "lucide-react"
import { useLocale } from "@/hooks/useLocale";

export default function Home() {
  const { t, locale, setLocale } = useLocale();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <div className="flex justify-end gap-2 mb-8">
          <Button
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
          >
            {locale === "en" ? "Español" : "English"}
          </Button>
          <Button variant="ghost">Chupete</Button>
          <IconButton>
  <SendHorizonal />
</IconButton>
<IconButton variant="ghost">
  <SendHorizonal />
</IconButton>
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
