import Image from "next/image";
import { cn } from "@/lib/utils";
import { toolIconMap } from "@/lib/toolIcons";

type ToolBadgeProps = {
  name: string;
  showIcon?: boolean;
  className?: string;
};

export function ToolBadge({ name, showIcon = true, className }: ToolBadgeProps) {
  const iconSrc = toolIconMap[name];

  return (
    <span className={cn("inline-flex items-center gap-[6px] body3 text-neutral-800 border border-neutral-400 rounded-[1000px] px-[12px] py-[4px]", className)}>
      {showIcon && iconSrc && (
        <span className="relative w-[24px] h-[24px] shrink-0">
          <Image
            src={iconSrc}
            alt={name}
            fill
            className="object-contain"
            sizes="48px"
          />
        </span>
      )}
      {name}
    </span>
  );
}
