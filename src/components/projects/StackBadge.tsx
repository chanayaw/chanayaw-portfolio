export const StackBadge = ({ label }: { label: string }) => {
  return (
    <span className="border-tech-chip-border bg-tech-chip-bg text-tech-chip-text rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
      {label}
    </span>
  );
};
