import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

type SecondaryProjectCardProps = {
  project: Project;
  comingSoonLabel?: string;
  className?: string;
};

export function SecondaryProjectCard({ project, comingSoonLabel, className }: SecondaryProjectCardProps) {
  return (
    <div
      className={cn(
        "bg-neutral-white border border-neutral-300 rounded-[12px] p-[24px] flex flex-col items-start flex-1 relative",
        className
      )}
    >
      {project.comingSoon && comingSoonLabel && (
        <Badge className="absolute top-[15px] right-[11px] z-10 text-neutral-800">
          {comingSoonLabel}
        </Badge>
      )}

      <div className="h-[120px] lg:h-[221px] opacity-40 relative rounded-[8px] shrink-0 w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.coverImageAlt ?? project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 512px"
        />
      </div>

      <div className="h-10 w-full shrink-0" />

      <Separator className="bg-neutral-300" />

      <div className="h-10 w-full shrink-0" />

      <div className="flex items-center justify-between opacity-20 px-[8px] w-full shrink-0">
        <p className="lg:title3 title4 text-neutral-800 overflow-hidden text-ellipsis">
          {project.title}
        </p>
        <div className="flex gap-[8px] items-center shrink-0">
          <p className="body3 text-neutral-800">
            {project.year}
          </p>
        </div>
      </div>
    </div>
  );
}
