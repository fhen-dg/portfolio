import type { Metadata } from "next";
import { laborCaseStudy } from "@/content/cases/labor";
import { LaborCaseContent } from "@/components/sections/case/LaborCaseContent";

export const metadata: Metadata = {
  title: "Labor – Portfolio",
  description: laborCaseStudy.description,
};

export default function LaborCasePage() {
  return (
    <main className="flex flex-col items-center px-5 pt-[20px] pb-[40px] lg:px-[72px]">
      <LaborCaseContent />
    </main>
  );
}
