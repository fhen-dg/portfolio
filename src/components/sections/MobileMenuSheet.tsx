"use client";

import { useState } from "react";
import { Menu, SendHorizontal, X } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/iconButton";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/hooks/useLocale";

export function MobileMenuSheet() {
  const { t } = useLocale();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactClick = () => {
    setSheetOpen(false);
    setTimeout(() => setContactOpen(true), 300);
  };

  return (
    <>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <IconButton variant="ghost" aria-label="Open menu">
            <Menu />
          </IconButton>
        </SheetTrigger>

        <SheetContent side="full" className="flex flex-col bg-white">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>

          {/* Top: separator + menu icon + separator */}
          <Separator className="bg-neutral-400" />
          <div className="flex items-center justify-center py-5">
            <Menu className="size-5 text-neutral-black" />
          </div>
          <Separator className="bg-neutral-400" />

          {/* Nav items */}
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-5">
            <SheetClose asChild>
              <Button
                variant="ghost"
                asChild
                className="h-16 w-full justify-center title3"
              >
                <Link href="/projects">{t.nav.projects}</Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button
                variant="ghost"
                asChild
                className="h-16 w-full justify-center title3"
              >
                <Link href="/cv">{t.nav.cv}</Link>
              </Button>
            </SheetClose>

            <Button
              className="h-16 w-fit rounded-[8px] title3"
              onClick={handleContactClick}
            >
              {t.nav.contact}
            </Button>
          </div>

          {/* Bottom: separator + close button */}
          <Separator className="bg-neutral-400" />
          <div className="flex items-center justify-center py-5">
            <SheetClose asChild>
              <IconButton variant="ghost" aria-label="Close menu">
                <X />
              </IconButton>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      {/* Contact drawer — opens after sheet closes */}
      <Drawer open={contactOpen} onOpenChange={setContactOpen}>
        <DrawerContent>
          <DrawerTitle className="sr-only">Contact Options</DrawerTitle>
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center justify-center rounded-md bg-neutral-black p-2">
                <SendHorizontal className="size-6 text-white" />
              </div>
            </div>
            <Separator className="w-full bg-neutral-400" />
            <div className="flex w-full flex-col gap-2 pt-4">
              <DrawerClose asChild>
                <Button variant="ghost" asChild className="w-full justify-center">
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
                <Button variant="ghost" asChild className="w-full justify-center">
                  <a href="mailto:federico.cohen.c@gmail.com">Email</a>
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button variant="ghost" asChild className="w-full justify-center">
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
        </DrawerContent>
      </Drawer>
    </>
  );
}
