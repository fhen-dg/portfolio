"use client";

import { Languages, Menu, SendHorizontal } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n/types";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/iconButton";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const { t, locale, setLocale } = useLocale();

  const languageSwitcher = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton variant="ghost" aria-label="Switch language">
          <Languages />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => setLocale(value as Locale)}
        >
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="es">Español</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-400 bg-white/80 backdrop-blur-[50px]">
      {/* ── Mobile nav (< md) ── */}
      <nav className="relative flex items-center justify-between p-5 md:hidden">
        {/* Left: hamburger + separator + language */}
        <div className="flex items-center gap-1">
          <IconButton variant="ghost" aria-label="Open menu">
            <Menu />
          </IconButton>

          <div className="mx-3 flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400" />
          </div>

          {languageSwitcher}
        </div>

        {/* Center: logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Right: contact icon */}
        <IconButton aria-label={t.nav.contact} asChild>
          <a href="#contact">
            <SendHorizontal />
          </a>
        </IconButton>
      </nav>

      {/* ── Desktop nav (≥ md) ── */}
      <nav className="relative hidden items-center justify-between px-[72px] py-5 md:flex">
        {/* Left: nav links + separator + language */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" onClick={() => scrollToSection("projects")}>
            {t.nav.projects}
          </Button>
          <Button variant="ghost" asChild>
            <a href="#cv">{t.nav.cv}</a>
          </Button>

          <div className="mx-3 flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400" />
          </div>

          {languageSwitcher}
        </div>

        {/* Center: logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Right: contact button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>{t.nav.contact}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="mailto:your.email@example.com">
                Email
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://calendly.com/yourprofile" target="_blank" rel="noopener noreferrer">
                Calendar
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
