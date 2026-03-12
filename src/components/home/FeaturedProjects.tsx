import { PrimaryCTA } from '../ui/Buttons';
import { CardWithGlow } from '../ui/Cards';
import { ChipRegBorder } from '../ui/Chips';

const FeaturedProjects = () => {
  return (
    <div className="mt-24 lg:mt-0">
      <h2 className="mb-6 text-4xl font-medium tracking-widest uppercase">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <CardWithGlow>
          <p className="text-foreground mb-2 text-lg font-medium">
            Women&apos;s Health Data Dashboard
          </p>
          <p className="text-subtle font-light">
            SQL-driven analytics platform exploring trends in public women&apos;s health datasets.
          </p>
          <div className="text-subtle my-6 flex flex-wrap items-center gap-3 text-sm tracking-wide">
            <ChipRegBorder>Typescript</ChipRegBorder>
            <ChipRegBorder>Next.js</ChipRegBorder>
            <ChipRegBorder>PostgreSQL</ChipRegBorder>
          </div>
          <div className="flex flex-row justify-end">
            <PrimaryCTA link="/projects" label="View Project" status="disabled" />
          </div>
        </CardWithGlow>

        <CardWithGlow>
          <p className="text-foreground mb-2 text-lg font-medium">
            Healthcare Operations Analytics
          </p>
          <p className="text-subtle font-light">
            Dashboard and data pipeline analyzing healthcare system metrics.
          </p>
          <div className="text-subtle my-6 flex flex-wrap items-center gap-3 text-sm tracking-wide">
            <ChipRegBorder>Node</ChipRegBorder>
            <ChipRegBorder>SQL</ChipRegBorder>
            <ChipRegBorder>React</ChipRegBorder>
          </div>
          <div className="flex flex-row justify-end">
            <PrimaryCTA link="/projects" label="View Project" status="disabled" />
          </div>
        </CardWithGlow>

        <CardWithGlow>
          <p className="text-foreground mb-2 text-lg font-medium">Resource Allocation System</p>
          <p className="text-subtle font-light">
            Role-based scheduling system modeling operational workflows.
          </p>
          <div className="text-subtle my-6 flex flex-wrap items-center gap-3 text-sm tracking-wide">
            <ChipRegBorder>Typescript</ChipRegBorder>
            <ChipRegBorder>Next.js</ChipRegBorder>
            <ChipRegBorder>PostgreSQL</ChipRegBorder>
          </div>
          <div className="flex flex-row justify-end">
            <PrimaryCTA link="/projects" label="View Project" status="disabled" />
          </div>
        </CardWithGlow>
      </div>
    </div>
  );
};

export default FeaturedProjects;
