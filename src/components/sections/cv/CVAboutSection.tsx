type CVAboutSectionProps = {
  about: string[];
};

export function CVAboutSection({ about }: CVAboutSectionProps) {
  return (
    <section className="flex flex-col gap-[16px] items-start w-full">
      <h2 className="body3 text-neutral-500 text-left">About</h2>
      <div className="flex flex-col gap-[16px] items-start w-full">
        {about.map((paragraph, index) => (
          <p key={index} className="body1 text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
