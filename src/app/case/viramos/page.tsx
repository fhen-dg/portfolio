import { viramosCaseStudy } from "@/content/cases/viramos";
import { ViramosCaseContent } from "@/components/sections/case/ViramosCaseContent";

export const metadata = {
  description: viramosCaseStudy.description,
};

export default function ViramosCasePage() {
  return (
    <main className="flex flex-col items-center px-5 pt-[20px] pb-[40px] lg:px-[72px]">
      <ViramosCaseContent />
    </main>
  );
}
