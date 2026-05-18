type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-brand-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
