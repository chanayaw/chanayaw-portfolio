interface PageHeaderProps {
  heading: string;
  subtext: React.ReactNode;
}

const PageHeader = ({ heading, subtext }: PageHeaderProps) => {
  return (
    <div className="hero-ambient">
      <div className="mx-auto w-full max-w-7xl space-y-5 p-20">
        <h1 className="mb-6 text-6xl font-semibold tracking-widest">{heading}</h1>

        <p className="text-muted font-medium">{subtext}</p>
      </div>
    </div>
  );
};

export default PageHeader;
