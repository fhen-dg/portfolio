"use client";

import { Languages, SendHorizontal } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons/GithubIcon";
import { TranslateIcon } from "@/components/ui/icons/TranslateIcon";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n/types";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/iconButton";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { getPrimaryProjects, secondaryProjects } from "@/content/projects";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import { MobileMenuSheet } from "@/components/sections/MobileMenuSheet";

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
              <Languages size={22} />
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languageOptions}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };

  const ContactMenu = () => {
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

        {/* Desktop: NavigationMenu trigger */}
        <NavigationMenu className="hidden md:block" align="end">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger variant="default" className="!body3-bold">{t.nav.contact}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[240px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="https://www.linkedin.com/in/federico-cohen-correa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex cursor-pointer select-none items-center !justify-start w-full rounded-sm py-[10px] pl-[12px] outline-none transition-colors hover:bg-neutral-100 hover:text-primary-base !body3 text-left"
                      >
                        Linkedin
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="mailto:federico.cohen.c@gmail.com"
                        className="relative flex cursor-pointer select-none items-center !justify-start w-full rounded-sm py-[10px] pl-[12px] outline-none transition-colors hover:bg-neutral-100 hover:text-primary-base !body3 text-left"
                      >
                        Email
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="https://calendar.app.google/M4aXEZ4oTvXxnsZy6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex cursor-pointer select-none items-center !justify-start w-full rounded-sm py-[10px] pl-[12px] outline-none transition-colors hover:bg-neutral-100 hover:text-primary-base !body3 text-left"
                      >
                        Calendar
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-white bg-neutral-white">
      {/* ── Mobile nav (< md) ── */}
      <nav className="flex h-[68px] items-center justify-between px-5 md:hidden">
        {/* Left: logo */}
        <div className="flex items-center">
        <Logo size={28} />
        <div className="mx-2 flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400" />
        </div>
        <MobileMenuSheet />
        </div>

        {/* Right: menu + language + contact */}
        <div className="flex items-center">

          <LanguageSwitcher />

          <IconButton variant="ghost" aria-label="GitHub profile" asChild className="md:hidden">
            <a href="https://github.com/fhen-dg" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={22} />
            </a>
          </IconButton>

          <div className="mx-2 flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400" />
          </div>

          <div className="pl-2">
            <ContactMenu />
          </div>
        </div>
      </nav>

      {/* ── Desktop nav (≥ md) ── */}
      <nav className="hidden h-[68px] relative items-center justify-between px-[72px] py-5 md:flex">
        {/* Left: logo */}
        <div className="flex items-center">
        <Logo size={24} />
          <div className="mx-3 ml-7 flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400" />
          </div>
        <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger variant="ghost">{t.nav.projects}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[240px]">
                    {[...getPrimaryProjects(locale), ...secondaryProjects].filter((p) => !!p.href).map((project) => (
                      <li key={project.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={project.href!}
                            className="relative flex cursor-pointer select-none items-center !justify-start w-full rounded-sm py-[10px] pl-[12px] outline-none transition-colors hover:bg-neutral-100 hover:text-primary-base !body3 text-left"
                          >
                            {project.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/cv">{t.nav.cv}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
        {/* Right: nav links + language + contact */}
        <div className="flex items-center">

          <div className="mx-[2px] flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400 hidden" />
          </div>

          <LanguageSwitcher />

          <div className="mx-3 flex h-6 items-center">
            <Separator orientation="vertical" className="bg-neutral-400" />
          </div>

          <IconButton variant="ghost" aria-label="GitHub profile" asChild className="hidden md:flex">
            <a href="https://github.com/fhen-dg" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={20} />
            </a>
          </IconButton>

          <div className="pl-4">
            <ContactMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
