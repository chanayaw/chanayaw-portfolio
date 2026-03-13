export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card border-default shadow-card hover:shadow-pop rounded-3xl border p-6 transition duration-300">
      {children}
    </div>
  );
};

export const CardWithGlow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card border-default shadow-glow rounded-3xl border p-6">{children}</div>
  );
};

export const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="glass-panel rounded-3xl p-6">{children}</div>;
};
