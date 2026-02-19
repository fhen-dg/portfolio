import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type CaseOverviewSectionProps = {
  image: string;
  imageAlt: string;
  link: { label: string; href: string };
  tools: string[];
};

export function CaseOverviewSection({
  image,
  imageAlt,
  link,
  tools,
}: CaseOverviewSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[52px] max-w-[960px] w-full">
        {image ? (
          <div className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] rounded-[12px]" />
        )}

        <div className="flex flex-col gap-[40px] lg:gap-[52px] items-center">
          <Button variant="ghost" asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </Button>

          <div className="flex flex-wrap justify-center gap-[6px]">
            {tools.map((tool) => (
              <span
                key={tool}
                className="body3 text-neutral-800 border border-neutral-400 rounded-[1000px] px-[12px] py-[4px]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
