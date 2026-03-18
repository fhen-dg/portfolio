import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AutoplayVideo } from "@/components/ui/AutoplayVideo";
import { ToolBadge } from "@/components/ui/ToolBadge";

type CaseOverviewSectionProps = {
  image?: string;
  images?: string[];
  imageAlt: string;
  video?: string;
  link: { label: string; href: string };
  tools?: string[];
};

export function CaseOverviewSection({
  image,
  images,
  imageAlt,
  video,
  link,
  tools,
}: CaseOverviewSectionProps) {
  const imageList = images && images.length > 0 ? images : image ? [image] : [];

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[80px] rounded-[12px] overflow-hidden max-w-[1368px] w-full">
        {video ? (
          <div className="w-full aspect-[16/9] rounded-[12px] overflow-hidden">
            <AutoplayVideo
              src={video}
              className="w-full h-full object-contain"
            />
          </div>
        ) : imageList.length > 0 ? (
          <div className="flex flex-col gap-[16px]">
            {imageList.map((src, i) => (
              <div key={i} className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden">
                <Image
                  src={src}
                  alt={imageList.length > 1 ? `${imageAlt} ${i + 1}` : imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full aspect-[16/9] rounded-[12px]" />
        )}

        <div className="flex flex-col items-center gap-[24px] md:gap-[40px] lg:gap-[60px]">
          {tools && tools.length > 0 && (
            <div className="flex flex-wrap max-w-[1368px] justify-center gap-[6px]">
              {tools.map((tool) => (
                <ToolBadge key={tool} name={tool} showIcon={true} />
              ))}
            </div>
          )}

          <Button variant="ghost" asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
