export const StackBadge = ({ label }: { label: string }) => {
  return (
    <span className="text-subtle rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide">
      {label}
    </span>
  );
}
