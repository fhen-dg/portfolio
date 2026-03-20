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
          "bg-neutral-white border border-neutral-400 rounded-[12px] md:p-[32px] md:pb-[40px] flex flex-col items-start",
          "p-[20px] pb-[28px]",
          "transition-colors duration-200",
          "md:group-hover:border-neutral-600",
          className
        )}
      >
        <div className="aspect-[287/202] lg:aspect-[976/485] relative w-full rounded-[12px] overflow-hidden shrink-0">
          {project.coverImageMobile && (
            <Image
              src={project.coverImageMobile}
              alt={project.coverImageAlt ?? project.title}
              fill
              className="object-contain md:hidden"
              sizes="100vw"
            />
          )}
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt ?? project.title}
            fill
            className={cn(
              "object-contain",
              project.coverImageMobile && "hidden md:block"
            )}
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-[6px] md:gap-[80px] lg:gap-[220px] w-full md:mt-[20px] mt-[12px] shrink-0">
          <div className="flex flex-col gap-[6px] items-start w-full">
            <p className="md:title3 title4 text-neutral-800 overflow-hidden text-ellipsis w-full">
              {project.title}
            </p>
            {project.tagline && (
              <p className="md:body2 lg:body1 body3 text-neutral-600 line-clamp-3 w-full">
                {project.tagline}
              </p>
            )}
          </div>
          <p className="body3 text-neutral-500 md:text-neutral-500 shrink-0 md:pb-[2px]">
            {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}
