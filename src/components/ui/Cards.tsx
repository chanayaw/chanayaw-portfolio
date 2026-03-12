export const CardWithHover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-default bg-surface shadow-card hover:shadow-pop rounded-xl border p-5 transition">
      {children}
    </div>
  );
};

export const CardWithGlow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-default bg-surface shadow-glow rounded-xl border p-5">{children}</div>
  );
};
