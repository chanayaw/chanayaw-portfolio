interface PageHeaderProps {
  eyebrow: string;
  heading: string;
  description: React.ReactNode;
  supportingText?: React.ReactNode;
  actions?: React.ReactNode;
}

const PageHeader = ({
  eyebrow,
  heading,
  description,
  supportingText,
  actions,
}: PageHeaderProps) => {
  return (
    <section className="relative isolate overflow-hidden pt-20 md:pt-28">
      <div
        aria-hidden="true"
        className="data-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
      />

      <div className="max-w-5xl">
        <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
          {eyebrow}
        </p>

        <div className="mt-4">
          <h1 className="font-heading text-primary text-5xl leading-[0.95] font-normal tracking-tight text-balance md:text-7xl">
            {heading}
          </h1>

          <div className="text-muted mt-7 max-w-3xl text-base leading-relaxed md:text-lg">
            {description}
          </div>

          {supportingText ? (
            <div className="text-subtle mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
              {supportingText}
            </div>
          ) : null}

          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
