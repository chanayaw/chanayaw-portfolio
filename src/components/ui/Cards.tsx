export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-default bg-card shadow-card hover:shadow-pop rounded-3xl border p-6 backdrop-blur transition duration-300 hover:-translate-y-0.5">
      {children}
    </div>
  );
};

export const CardWithGlow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-glass bg-card shadow-glow rounded-3xl border p-6 backdrop-blur">
      {children}
    </div>
  );
};

export const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="glass-panel shadow-glow rounded-[2rem] p-6 md:p-7">{children}</div>;
};

export const EditorialCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-default bg-surface shadow-card rounded-[2rem] border p-6 md:p-8">
      {children}
    </div>
  );
};

export const SoftWashCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="soft-wash border-default shadow-card rounded-[2rem] border p-6 md:p-8">
      {children}
    </div>
  );
};
