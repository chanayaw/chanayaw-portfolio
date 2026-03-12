import { PrimaryCTA } from '../ui/Buttons';
import { CardWithHover } from '../ui/Cards';
import { ChipRegBorder } from '../ui/Chips';

const featuredProjects = [
  {
    title: 'Women’s Health Data Dashboard',
    description:
      'SQL-driven analytics platform exploring trends in public women’s health datasets.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
  },
  {
    title: 'Healthcare Operations Analytics',
    description: 'Dashboard and data pipeline analyzing healthcare system metrics.',
    stack: ['Node.js', 'SQL', 'React'],
  },
  {
    title: 'Resource Allocation System',
    description: 'Role-based scheduling system modeling operational workflows.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="mt-24 md:mt-28">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
            Featured Work
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-balance md:text-5xl">
            Systems, dashboards, and data-driven applications
          </h2>
          <p className="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
            A selection of projects demonstrating full-stack engineering, structured data systems,
            and applied problem solving across operational and health-related contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <CardWithHover key={project.title}>
              <div className="flex h-full flex-col">
                <p className="text-foreground text-xl font-medium tracking-tight">
                  {project.title}
                </p>

                <p className="text-subtle mt-3 text-sm leading-relaxed md:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <ChipRegBorder key={item}>{item}</ChipRegBorder>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <PrimaryCTA link="/projects" label="View Project" status="disabled" />
                </div>
              </div>
            </CardWithHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
