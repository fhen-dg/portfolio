import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link href={project.href ?? `/work/${project.slug}`} className="block w-full group">
      <div
        className={cn(
          "bg-neutral-white border border-neutral-400 rounded-[12px] p-6 flex flex-col items-start",
          "transition-colors duration-200",
          "md:group-hover:border-neutral-600",
          className
        )}
      >
        <div className="aspect-[287/202] lg:aspect-[976/485] relative w-full rounded-[12px] overflow-hidden shrink-0">
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt ?? project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>

        <div className="h-10 w-full shrink-0" />

        <Separator className="bg-neutral-400" />

        <div className="h-10 w-full shrink-0" />

        <div className="flex items-center justify-between w-full px-2 shrink-0">
          <p className="lg:title1 title3 text-neutral-800 overflow-hidden text-ellipsis">
            {project.title}
          </p>
          <p className="body3-bold text-neutral-600 shrink-0">
            {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}
