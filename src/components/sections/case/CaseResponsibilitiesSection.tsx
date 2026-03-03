import type { CaseResponsibilityIcon, CaseResponsibilityItem } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  BarChart3,
  BrainCircuit,
  ChartScatter,
  Compass,
  GitBranch,
  Component as ComponentIcon,
  Database,
  FolderTree,
  LayoutTemplate,
  LayoutPanelTop,
  Layers,
  Lightbulb,
  MousePointerClick,
  Network,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Shuffle,
  SquareCode,
  SquareChevronRight,
  Sparkles,
  Workflow,
} from "lucide-react";

export type CaseResponsibilitiesSectionProps = {
  heading: string;
  items: CaseResponsibilityItem[];
};

const iconByKey: Record<CaseResponsibilityIcon, LucideIcon> = {
  "square-code": SquareCode,
  component: ComponentIcon,
  "layout-template": LayoutTemplate,
  workflow: Workflow,
  "shield-check": ShieldCheck,
  compass: Compass,
  layers: Layers,
  network: Network,
  database: Database,
  "bar-chart-3": BarChart3,
  sparkles: Sparkles,
  lightbulb: Lightbulb,
  "shield-alert": ShieldAlert,
  "brain-circuit": BrainCircuit,
  scale: Scale,
  "git-branch": GitBranch,
  "chart-scatter": ChartScatter,
  "layout-panel-top": LayoutPanelTop,
  "square-chevron-right": SquareChevronRight,
  "mouse-pointer-click": MousePointerClick,
  banknote: Banknote,
  shuffle: Shuffle,
  "folder-tree": FolderTree,
};

function chunkBy<T>(items: T[], size: number): T[][] {
  if (size <= 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size));
  return chunks;
}

function ResponsibilitiesItem({
  item,
  className,
}: {
  item: CaseResponsibilityItem;
  className?: string;
}) {
  const Icon = iconByKey[item.icon];

  return (
    <div className={`bg-neutral-white rounded-[10px] flex flex-col gap-[12px] ${className ?? ""}`}>
      <Icon className="text-neutral-500 w-[24px] h-[24px]" aria-hidden="true" />
      <h3 className="title5 text-neutral-800">{item.title}</h3>
      <p className="body2 text-neutral-600">{item.description}</p>
    </div>
  );
}

export function CaseResponsibilitiesSection({ heading, items }: CaseResponsibilitiesSectionProps) {
  if (!items.length) return null;

  const rows = chunkBy(items, 2);

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] md:gap-[60px] max-w-[960px] w-full">
        <h2 className="title3 md:title1 text-neutral-800 text-left md:text-center">{heading}</h2>

        {/* Mobile: 1 per row + separators between items */}
        <div className="md:hidden flex flex-col gap-[20px] w-full">
          {items.map((item, i) => (
            <div key={`${item.title}-${i}`} className="flex flex-col gap-[20px] w-full">
              <Separator className="bg-neutral-400" />
              <ResponsibilitiesItem item={item} className="px-0 pt-[12px] pb-[24px]" />
            </div>
          ))}
        </div>

        {/* Desktop: 2 per row + separators between rows */}
        <div className="hidden md:flex flex-col gap-[24px] w-full">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-[24px] w-full">
              <div className="grid grid-cols-2 gap-[24px] w-full">
                {row.map((item, i) => (
                  <ResponsibilitiesItem key={`${item.title}-${i}`} item={item} className="p-[24px]" />
                ))}
              </div>

              {rowIndex < rows.length - 1 ? <Separator className="bg-neutral-400" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

