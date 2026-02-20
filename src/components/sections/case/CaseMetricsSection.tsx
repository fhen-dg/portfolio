import type { CaseMetrics } from "@/lib/types";

type CaseMetricsSectionProps = {
  metrics: CaseMetrics;
};

function MetricItem({
  value,
  label,
  isLarge = false,
}: {
  value: string;
  label: string;
  isLarge?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-[8px]">
      <div
        className={`${
          isLarge ? "md:header1 title1" : "md:title1 title2"
        } text-neutral-800`}
      >
        {value}
      </div>
      <div className="md:body1 body2 text-neutral-600">{label}</div>
    </div>
  );
}

export function CaseMetricsSection({ metrics }: CaseMetricsSectionProps) {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-[40px] md:gap-[60px] max-w-[960px] w-full items-center">
        <div className="flex flex-col gap-[20px]">
        <h2 className="md:header1 title1 text-neutral-800 text-center">
          {metrics.heading}
        </h2>
        <p className="md:supporting2 body1 text-neutral-600 text-center max-w-[800px]">
          {metrics.intro}
        </p>
        </div>
        
        <div className="flex flex-col gap-[60px] md:gap-[80px] w-full">
          {metrics.rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row gap-[40px] md:gap-[60px] justify-center items-center"
            >
              {row.map((metric, metricIndex) => (
                <MetricItem
                  key={metricIndex}
                  value={metric.value}
                  label={metric.label}
                  isLarge={rowIndex === 0}
                />
              ))}
            </div>
          ))}
        </div>
          <div className="flex flex-col gap-[12px]">
        <p className="md:body2 body3 text-neutral-600 text-center max-w-[800px]">
          {metrics.conclusion}
        </p>
        {metrics.footnote && (
          <p className="md:body2 body3 text-neutral-500 text-center">
            {metrics.footnote}
          </p>
          
        )}
        </div>
      </div>
    </section>
  );
}
