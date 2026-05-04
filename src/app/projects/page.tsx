import { categories, projects } from '@/src/data/projectData';
import { CategoryCard } from '@/src/components/projects/CategoryCard';
import { FeaturedProjectCard } from '@/src/components/projects/FeaturedProjectCard';
import { ProjectCard } from '@/src/components/projects/ProjectCard';
import { SectionLabel } from '@/src/components/projects/SectionLabel';
import PageHeader from '@/src/components/shared/PageHeader';
import { CardWithGlow } from '@/src/components/ui/Cards';

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const productSystems = projects.filter((project) => project.category === 'Product Systems');
  const operationalTools = projects.filter((project) => project.category === 'Operational Tools');
  const fullStackApplications = projects.filter(
    (project) => project.category === 'Full-Stack Applications',
  );

  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-10 pb-24">
      <PageHeader
        eyebrow="Projects"
        heading="Systems, applications, and product-oriented tools"
        description="A selection of projects demonstrating full-stack engineering, system design, and applied problem solving across real-world workflows and health technology."
        supportingText="My work focuses on maintainable software, usable interfaces, and systems that turn complex requirements into practical tools."
      />

      <section className="mt-16 md:mt-20">
        <SectionLabel>Project Categories</SectionLabel>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="mt-20 md:mt-24">
        <SectionLabel>Featured Projects</SectionLabel>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="product-systems" className="pt-24">
        <SectionLabel>Product Systems</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productSystems.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="operational-tools" className="pt-24">
        <SectionLabel>Operational Tools</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {operationalTools.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="full-stack-applications" className="pt-24">
        <SectionLabel>Full-Stack Applications</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fullStackApplications.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-24 md:mt-28">
        <CardWithGlow>
          <SectionLabel>Engineering Approach</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-medium tracking-tight">How I approach technical work</h2>
              <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">
                My projects focus on building maintainable systems that combine clear architecture,
                backend logic, and user-facing interfaces. I care about translating real-world needs
                into usable workflows, documenting decisions, and designing software that can grow
                beyond the first version.
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
                <h3 className="text-sm font-medium">Product Thinking</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  Features shaped around users, workflows, constraints, and practical outcomes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <h3 className="text-sm font-medium">Technical Ownership</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  End-to-end responsibility across planning, implementation, debugging, and
                  iteration.
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
      </section>
    </main>
  );
}
