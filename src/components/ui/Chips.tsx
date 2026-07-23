type ChipProps = {
  children: React.ReactNode;
};

const baseClasses =
  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide md:text-sm";

export const ChipThinBorder = ({ children }: ChipProps) => {
  return (
    <span className={`${baseClasses} border-chip-border bg-chip-bg text-chip-text`}>
      {children}
    </span>
  );
};

export const ChipRegBorder = ({ children }: ChipProps) => {
  return (
    <span className={`${baseClasses} border-tech-chip-border bg-tech-chip-bg text-tech-chip-text`}>
      {children}
    </span>
  );
};

export const ChipPrimary = ({ children }: ChipProps) => {
  return (
    <span className={`${baseClasses} border-default bg-surface text-foreground`}>{children}</span>
  );
};

export const ChipAccent = ({ children }: ChipProps) => {
  return (
    <span className={`${baseClasses} border-chip-border bg-chip-bg text-chip-text`}>
      {children}
    </span>
  );
};

export const ChipTech = ({ children }: ChipProps) => {
  return (
    <span className={`${baseClasses} border-tech-chip-border bg-tech-chip-bg text-tech-chip-text`}>
      {children}
    </span>
  );
};

export const ChipMono = ({ children }: ChipProps) => {
  return (
    <span className="font-mono-brand border-default bg-surface text-subtle inline-flex items-center rounded-full border px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
      {children}
    </span>
  );
};
