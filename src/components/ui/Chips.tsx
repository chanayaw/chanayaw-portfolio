export const ChipThinBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-chip-border bg-chip-bg text-chip-text inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
};

export const ChipRegBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-tech-chip-border bg-tech-chip-bg text-tech-chip-text inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
};

export const ChipPrimary = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-default bg-surface text-foreground inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
};

export const ChipAccent = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-chip-border bg-chip-bg text-chip-text inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
};

export const ChipTech = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-tech-chip-border bg-tech-chip-bg text-tech-chip-text inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
};
