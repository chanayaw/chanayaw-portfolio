import { categories, projects } from '@/src/data/projectData';
import { CategoryCard } from '@/src/components/projects/CategoryCard';
import { FeaturedProjectCard } from '@/src/components/projects/FeaturedProjectCard';
import { ProjectCard } from '@/src/components/projects/ProjectCard';
import { SectionLabel } from '@/src/components/projects/SectionLabel';
import PageHeader from '@/src/components/shared/PageHeader';
import { CardWithGlow } from '@/src/components/ui/Cards';

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);

  const digitalHealthProducts = projects.filter(
    (project) => project.category === 'Digital Health Products',
  );

  const clinicalOperationalSystems = projects.filter(
    (project) => project.category === 'Clinical + Operational Systems',
  );

  const softwareEngineeringProjects = projects.filter(
    (project) => project.category === 'Software Engineering Projects',
  );

  const researchDataExplorations = projects.filter(
    (project) => project.category === 'Research + Data Explorations',
  );

  const technicalProofSoftwareEngineeringArchive = projects.filter(
    (project) => project.category === 'Technical Proof / Software Engineering Archive',
  );

  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="Projects"
        heading="Digital health products, care systems, and health-tech software projects"
        description="A selection of projects and concepts showing how I approach health-tech software, digital health product thinking, healthcare workflows, health data, and real-world systems."
        supportingText="My work focuses on maintainable health-tech software, usable interfaces, data-informed systems, patient-centered tools, and research-informed ideas connected to digital health and women's health equity."
      />

      <section className="mt-16 md:mt-20">
        <SectionLabel>Project Categories</SectionLabel>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      {digitalHealthProducts.length > 0 ? (
        <section id="digital-health-products" className="pt-24">
          <SectionLabel>Digital Health Products</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {digitalHealthProducts.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {clinicalOperationalSystems.length > 0 ? (
        <section id="clinical-operational-systems" className="pt-24">
          <SectionLabel>Clinical + Operational Systems</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clinicalOperationalSystems.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {softwareEngineeringProjects.length > 0 ? (
        <section id="software-engineering-projects" className="pt-24">
          <SectionLabel>Software Engineering Projects</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {softwareEngineeringProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {researchDataExplorations.length > 0 ? (
        <section id="research-data-explorations" className="pt-24">
          <SectionLabel>Research + Data Explorations</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {researchDataExplorations.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {technicalProofSoftwareEngineeringArchive.length > 0 ? (
        <section id="research-data-explorations" className="pt-24">
          <SectionLabel>Technical Proof / Software Engineering Archive</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technicalProofSoftwareEngineeringArchive.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-24 md:mt-28">
        <CardWithGlow>
          <SectionLabel>Engineering Approach</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                How I approach health-tech technical work
              </h2>

              <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">
                My projects focus on building maintainable systems that combine clear architecture,
                backend logic, health data awareness, and user-facing interfaces. I care about
                translating real-world health information and workflow needs into usable tools,
                documenting decisions, and designing software that can grow beyond the first
                version.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ApproachCard
                title="Systems-first thinking"
                body="Clear architecture, scoped complexity, and decisions grounded in real use cases."
              />

              <ApproachCard
                title="Product clarity"
                body="Features shaped around users, workflows, constraints, and practical outcomes."
              />

              <ApproachCard
                title="Technical ownership"
                body="End-to-end responsibility across planning, implementation, debugging, and iteration."
              />

              <ApproachCard
                title="Usable health-tech software"
                body="Interfaces and workflows designed to support real users, health information needs, and practical decision-making."
              />
            </div>
          </div>
        </CardWithGlow>
      </section>
    </main>
  );
}

function ApproachCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-default bg-surface shadow-card rounded-2xl border p-4">
      <h3 className="text-foreground text-sm font-semibold">{title}</h3>
      <p className="text-muted mt-2 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
