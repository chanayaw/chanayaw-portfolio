export const ChipThinBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-default bg-chip-bg text-chip-text inline-flex items-center rounded-full border px-3 py-1.5 text-sm">
      {children}
    </span>
  );
};

export const ChipRegBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-secondary text-secondary inline-flex items-center rounded-full border px-3 py-1.5 text-sm">
      {children}
    </span>
  );
};

export const ChipPrimary = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-primary text-primary inline-flex items-center rounded-full border px-3 py-1.5 text-sm">
      {children}
    </span>
  );
};

export const ChipPoetic = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-poetic text-poetic inline-flex items-center rounded-full border px-3 py-1.5 text-sm">
      {children}
    </span>
  );
};
