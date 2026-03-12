export const ChipThinBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-default inline-flex items-center rounded-full border bg-chip-bg px-2.5 py-1 text-chip-text">
      {children}
    </span>
  );
};

export const ChipRegBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-secondary px-2.5 py-1 text-secondary">
      {children}
    </span>
  );
};
