import { Separator } from "@/components/ui/separator";
import { ToolBadge } from "@/components/ui/ToolBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export type CaseSnapshotSectionProps = {
  labels: {
    role: string;
    duration: string;
    team: string;
  };
  role: string;
  duration: string;
  team: string;
  tools?: string[];
};

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center leading-[1.75] w-full body3">
      <p className="body3-bold text-neutral-800 w-full">{label}</p>
      <p className="text-neutral-600 w-full whitespace-pre-wrap">{value}</p>
    </div>
  );
}

export function CaseSnapshotSection({
  labels,
  role,
  duration,
  team,
  tools,
}: CaseSnapshotSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="max-w-[960px] w-full flex flex-col items-center gap-[120px] md:gap-[200px]">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center overflow-hidden rounded-[8px] gap-[28px] md:gap-[40px] md:p-[24px]">
          <SnapshotItem label={labels.role} value={role} />

          <Separator className="bg-neutral-400 md:hidden" />
          <Separator
            orientation="vertical"
            className="hidden md:block bg-neutral-400 self-stretch h-auto"
          />

          <SnapshotItem label={labels.duration} value={duration} />

          <Separator className="bg-neutral-400 md:hidden" />
          <Separator
            orientation="vertical"
            className="hidden md:block bg-neutral-400 self-stretch h-auto"
          />

          <SnapshotItem label={labels.team} value={team} />
        </div>

        {tools && tools.length > 0 && (
          <RevealOnScroll className="w-full flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-[6px] max-w-[800px]">
            {tools.map((tool) => (
              <ToolBadge key={tool} name={tool} showIcon={true} />
            ))}
          </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
