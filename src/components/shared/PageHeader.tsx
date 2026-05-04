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
    <section className="pt-20 md:pt-28">
      <div>
        <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
          {eyebrow}
        </p>

        <div className="mt-4 max-w-4xl">
          <h1 className="text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl">
            {heading}
          </h1>

          <div className="text-subtle mt-6 max-w-3xl text-base leading-relaxed md:text-lg">
            {description}
          </div>

          {supportingText ? (
            <div className="text-muted mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
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
