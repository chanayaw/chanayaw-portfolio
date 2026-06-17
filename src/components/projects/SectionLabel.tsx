export const SectionLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="font-mono-brand text-accent mb-4 text-xs font-semibold tracking-[0.24em] uppercase">
      {children}
    </p>
  );
};