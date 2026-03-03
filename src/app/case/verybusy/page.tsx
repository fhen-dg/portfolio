import { verybusyCaseStudy } from "@/content/cases/verybusy";
import { VerybusyCaseContent } from "@/components/sections/case/VerybusyCaseContent";

export const metadata = {
  description: verybusyCaseStudy.description,
};

export default function VerybusyCasePage() {
  return (
    <main className="flex flex-col items-center px-5 pt-[20px] pb-[40px] lg:px-[72px]">
      <VerybusyCaseContent />
    </main>
  );
}
