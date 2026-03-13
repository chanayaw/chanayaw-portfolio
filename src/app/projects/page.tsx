import { categories, projects } from '@/src/data/projectData';
import { CategoryCard } from '@/src/components/projects/CategoryCard';
import { FeaturedProjectCard } from '@/src/components/projects/FeaturedProjectCard';
import { ProjectCard } from '@/src/components/projects/ProjectCard';
import { SectionLabel } from '@/src/components/projects/SectionLabel';
import PageHeader from '@/src/components/shared/PageHeader';
import { CardWithGlow } from '@/src/components/ui/Cards';

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const dataProjects = projects.filter(
    (project) => project.category === 'Data & Analytics Systems',
  );
  const operationalProjects = projects.filter(
    (project) => project.category === 'Operational Systems',
  );
  const fullStackProjects = projects.filter(
    (project) => project.category === 'Full-Stack Applications',
  );

  return (
    <main className="px-4 pb-24">
      <PageHeader
        eyebrow="Projects"
        heading="Engineering systems, analytics platforms, and operational tools"
        description="A selection of projects demonstrating full-stack engineering, structured data systems, analytics workflows, and applied problem solving across operational and health-related contexts."
        supportingText="My work focuses on maintainable software, data-informed interfaces, and systems designed to turn complex workflows into usable tools."
      />

      <section className="mt-16 md:mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Project Categories</SectionLabel>

          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Featured Projects</SectionLabel>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="data-analytics-systems" className="pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Data & Analytics Systems</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dataProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="operational-systems" className="pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Operational Systems</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {operationalProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="full-stack-applications" className="pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Full-Stack Applications</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {fullStackProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <CardWithGlow>
            <SectionLabel>Engineering Approach</SectionLabel>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-medium tracking-tight">
                  How I approach technical work
                </h2>
                <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">
                  My projects focus on building maintainable systems that combine structured data,
                  APIs, and user-facing interfaces. I care about clear architecture, usable
                  workflows, and software that holds up beyond the first iteration.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <h3 className="text-sm font-medium">System Design</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    Clear architecture, scoped complexity, and decisions grounded in real use cases.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <h3 className="text-sm font-medium">Structured Data</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    Data modeling, SQL workflows, and interfaces that surface useful information.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <h3 className="text-sm font-medium">Reproducibility</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    Thoughtful documentation, explicit assumptions, and maintainable project
                    structure.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <h3 className="text-sm font-medium">Usable Software</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    Interfaces and workflows designed to support real-world operations and
                    decision-making.
                  </p>
                </div>
              </div>
            </div>
          </CardWithGlow>
        </div>
      </section>
    </main>
  );
}
