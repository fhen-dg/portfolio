import { theoAICaseStudy } from "@/content/cases/theo-ai";
import { TheoAICaseContent } from "@/components/sections/case/TheoAICaseContent";

export const metadata = {
  description: theoAICaseStudy.description,
};

export default function TheoAICasePage() {
  return (
    <main className="flex flex-col items-center px-5 pt-[20px] pb-[40px] lg:px-[72px]">
      <TheoAICaseContent />
    </main>
  );
}
