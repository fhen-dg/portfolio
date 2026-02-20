"use client";

import { Languages, Menu, SendHorizontal } from "lucide-react";
import Link from "next/link";
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
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";

export function Navbar() {
  const { t, locale, setLocale } = useLocale();

  const LanguageSwitcher = () => {
    const languageOptions = (
      <>
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => setLocale(value as Locale)}
        >
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="es">Español</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </>
    );

    const drawerLanguageOptions = (
      <div className="flex flex-col items-center p-4">
        {/* Language icon */}
        <div className="flex items-center justify-center py-4">
          <Languages className="size-6" />
        </div>
        
        {/* Separator */}
        <Separator className="w-full bg-neutral-400" />
        
        {/* Language options */}
        <div className="flex w-full flex-col gap-2 pt-4">
          <DrawerClose asChild>
            <Button
              variant="ghost"
              onClick={() => {
                setLocale("en");
              }}
              className={`w-full justify-center ${
                locale === "en" ? "bg-neutral-100 text-primary-base" : ""
              }`}
            >
              English
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              onClick={() => {
                setLocale("es");
              }}
              className={`w-full justify-center ${
                locale === "es" ? "bg-neutral-100 text-primary-base" : ""
              }`}
            >
              Español
            </Button>
          </DrawerClose>
        </div>
      </div>
    );

    return (
      <>
        {/* Mobile: Drawer trigger */}
        <Drawer>
          <DrawerTrigger asChild>
            <IconButton variant="ghost" aria-label="Switch language" className="md:hidden">
              <Languages />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Language Selection</DrawerTitle>
            {drawerLanguageOptions}
          </DrawerContent>
        </Drawer>

        {/* Desktop: Dropdown trigger */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconButton variant="ghost" aria-label="Switch language" className="hidden md:flex">
              <Languages />
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {languageOptions}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };

  const ContactMenu = () => {
    const contactOptions = (
      <>
        <DropdownMenuItem asChild>
          <a href="https://www.linkedin.com/in/federico-cohen-correa/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="mailto:federico.cohen.c@gmail.com">
            Email
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="https://calendar.app.google/M4aXEZ4oTvXxnsZy6" target="_blank" rel="noopener noreferrer">
            Calendar
          </a>
        </DropdownMenuItem>
      </>
    );

    const drawerContactOptions = (
      <div className="flex flex-col items-center p-4">
        {/* Contact icon */}
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center justify-center rounded-md bg-neutral-black p-2">
            <SendHorizontal className="size-6 text-white" />
          </div>
        </div>
        
        {/* Separator */}
        <Separator className="w-full bg-neutral-400" />
        
        {/* Contact options */}
        <div className="flex w-full flex-col gap-2 pt-4">
          <DrawerClose asChild>
            <Button
              variant="ghost"
              asChild
              className="w-full justify-center"
            >
              <a
                href="https://www.linkedin.com/in/federico-cohen-correa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              asChild
              className="w-full justify-center"
            >
              <a href="mailto:federico.cohen.c@gmail.com">
                Email
              </a>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              asChild
              className="w-full justify-center"
            >
              <a
                href="https://calendar.app.google/M4aXEZ4oTvXxnsZy6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendar
              </a>
            </Button>
          </DrawerClose>
        </div>
      </div>
    );

    return (
      <>
        {/* Mobile: Drawer trigger */}
        <Drawer>
          <DrawerTrigger asChild>
            <IconButton aria-label={t.nav.contact} className="md:hidden">
              <SendHorizontal />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Contact Options</DrawerTitle>
            {drawerContactOptions}
          </DrawerContent>
        </Drawer>

        {/* Desktop: Dropdown trigger */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="hidden md:flex">{t.nav.contact}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {contactOptions}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };

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

          <LanguageSwitcher />
        </div>

        {/* Center: logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Right: contact icon */}
        <ContactMenu />
      </nav>

      {/* ── Desktop nav (≥ md) ── */}
      <nav className="relative hidden items-center justify-between px-[72px] py-5 md:flex">
        {/* Left: nav links + separator + language */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" asChild>
            <Link href="/projects">{t.nav.projects}</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/cv">{t.nav.cv}</Link>
          </Button>

          <div className="mx-3 flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400" />
          </div>

          <LanguageSwitcher />
        </div>

        {/* Center: logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Right: contact button */}
        <ContactMenu />
      </nav>
    </header>
  );
}
