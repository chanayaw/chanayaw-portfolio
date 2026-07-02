import { categories, projects } from '@/src/data/projectData';
import { CategoryCard } from '@/src/components/projects/CategoryCard';
import { FeaturedProjectCard } from '@/src/components/projects/FeaturedProjectCard';
import { ProjectCard } from '@/src/components/projects/ProjectCard';
import { SectionLabel } from '@/src/components/projects/SectionLabel';
import PageHeader from '@/src/components/shared/PageHeader';
import { CardWithGlow } from '@/src/components/ui/Cards';

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);

  const patientCenteredDigitalHealthTools = projects.filter(
    (project) => project.category === 'Patient-Centered Digital Health Tools',
  );

  const careNavigationHealthcareWorkflowSystem = projects.filter(
    (project) => project.category === 'Care Navigation & Healthcare Workflow Systems',
  );

  const healthDataResearchEquityExplorations = projects.filter(
    (project) => project.category === 'Health Data, Research & Equity Explorations',
  );

  const patientEducationAdvocacyResources = projects.filter(
    (project) => project.category === 'Patient Education & Advocacy Resources',
  );

  const selectedSoftwarreEngineeringWork = projects.filter(
    (project) => project.category === 'Selected Software Engineering Work',
  );

  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="Projects"
        heading="Digital health concepts, care systems, and patient-centered tools"
        description="A portfolio of projects and case studies exploring how health data, digital health technology, patient education, care navigation, and informatics concepts can support Women's Health Equity Advocacy, early detection, delayed diagnosis, and clearer care."
        supportingText="My work focuses on usable systems, research-informed product thinking, structured health information, accessible interfaces, and digital tools that help make complex healthcare experiences easier to understand, navigate, and improve."
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

      {patientCenteredDigitalHealthTools.length > 0 ? (
        <section id="digital-health-products" className="pt-24">
          <SectionLabel>Patient-Centered Digital Health Tools</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {patientCenteredDigitalHealthTools.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {careNavigationHealthcareWorkflowSystem.length > 0 ? (
        <section id="clinical-operational-systems" className="pt-24">
          <SectionLabel>Care Navigation & Healthcare Workflow Systems</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {careNavigationHealthcareWorkflowSystem.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {healthDataResearchEquityExplorations.length > 0 ? (
        <section id="software-engineering-projects" className="pt-24">
          <SectionLabel>Health Data, Research & Equity Explorations</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {healthDataResearchEquityExplorations.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {patientEducationAdvocacyResources.length > 0 ? (
        <section id="research-data-explorations" className="pt-24">
          <SectionLabel>Patient Education & Advocacy Resources</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {patientEducationAdvocacyResources.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {selectedSoftwarreEngineeringWork.length > 0 ? (
        <section id="research-data-explorations" className="pt-24">
          <SectionLabel>Selected Software Engineering Work</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {selectedSoftwarreEngineeringWork.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-24 md:mt-28">
        <CardWithGlow>
          <SectionLabel>Health Systems Approach</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                How I Approach Digital Health Work
              </h2>

              <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">
                My work combines systems thinking, product clarity, technical ownership, and
                patient-centered design. Whether I&apos;m building a tool, mapping a care workflow,
                or exploring a data-informed concept, I focus on making complex healthcare
                experiences easier to understand, navigate, and improve.
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
                title="Patient-centered usability"
                body="Interfaces, workflows, and resources designed around real users, health information needs, and practical decision-making."
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
