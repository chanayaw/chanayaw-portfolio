export const StackBadge = ({ label }: { label: string }) => {
  return (
    <span className="font-mono-brand border-tech-chip-border bg-tech-chip-bg text-tech-chip-text rounded-full border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
      {label}
    </span>
  );
};
