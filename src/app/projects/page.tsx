import { type Project, categories, projects } from '@/src/data/projectData';
import { CategoryCard } from '@/src/components/projects/CategoryCard';
import { FeaturedProjectCard } from '@/src/components/projects/FeaturedProjectCard';
import { ProjectCard } from '@/src/components/projects/ProjectCard';
import { SectionLabel } from '@/src/components/projects/SectionLabel';
import PageHeader from '@/src/components/shared/PageHeader';
import { CardWithGlow } from '@/src/components/ui/Cards';

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);

  const womensHealthEquityDataResearch = projects.filter(
    (project) => project.category === 'Women’s Health Equity Data + Research',
  );

  const patientEducationAdvocacy = projects.filter(
    (project) => project.category === 'Patient Education + Advocacy',
  );

  const careNavigationWorkflowSystems = projects.filter(
    (project) => project.category === 'Care Navigation + Workflow Systems',
  );

  const patientCenteredDigitalHealthTools = projects.filter(
    (project) => project.category === 'Patient-Centered Digital Health Tools',
  );

  const selectedSoftwareEngineeringWork = projects.filter(
    (project) => project.category === 'Selected Software Engineering Work',
  );

  return (
    <main className="mx-auto w-full max-w-360 space-y-12 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="Projects"
        heading="A soft academic portfolio for health data, care navigation, and patient-centered tools"
        description="A growing ecosystem of research-informed digital health, health data, patient education, care navigation, and healthcare workflow concepts focused on clearer, more equitable care."
        supportingText="My work connects Women’s Health Equity Advocacy & Informatics with product thinking, technical implementation, accessible design, structured health information, and plain-language research translation."
      />

      <section className="mt-16 space-y-6 md:mt-20">
        <div className="max-w-3xl space-y-3">
          <SectionLabel>Project Ecosystem</SectionLabel>

          <h2 className="font-heading text-primary text-3xl leading-tight font-normal tracking-tight md:text-5xl">
            The advocacy and research fuel the technology, not the other way around.
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            These projects are designed as a connected portfolio system. Some are data stories, some
            are patient education tools, some are care navigation systems, and some are selected
            software engineering case studies that show the technical foundation behind the work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="mt-20 space-y-6 md:mt-24">
        <div className="max-w-3xl space-y-3">
          <SectionLabel>Featured Projects</SectionLabel>

          <h2 className="font-heading text-primary text-3xl leading-tight font-normal tracking-tight md:text-5xl">
            First portfolio anchors
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            These are the first projects I want visitors to understand because they represent the
            core of my Women’s Health Equity Advocacy & Informatics direction.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {womensHealthEquityDataResearch.length > 0 ? (
        <ProjectSection
          id="womens-health-equity-data-research"
          eyebrow="Women’s Health Equity Data + Research"
          heading="Data stories, dashboards, and research translation"
          description="Projects that explore care gaps, delayed diagnosis, early detection, patient experience, and health equity patterns through public data, research notes, dashboards, and plain-language interpretation."
          projects={womensHealthEquityDataResearch}
        />
      ) : null}

      {patientEducationAdvocacy.length > 0 ? (
        <ProjectSection
          id="patient-education-advocacy"
          eyebrow="Patient Education + Advocacy"
          heading="Plain-language resources for clearer care"
          description="Resource libraries, templates, guides, and advocacy tools designed to help underserved women prepare for appointments, understand symptoms, track follow-up, and ask clearer questions."
          projects={patientEducationAdvocacy}
        />
      ) : null}

      {careNavigationWorkflowSystems.length > 0 ? (
        <ProjectSection
          id="care-navigation-workflow-systems"
          eyebrow="Care Navigation + Workflow Systems"
          heading="Workflow concepts for access, follow-up, and continuity"
          description="Systems that map, organize, and improve how patients move through care, including referrals, appointment flow, resource coordination, documentation, and follow-up."
          projects={careNavigationWorkflowSystems}
        />
      ) : null}

      {patientCenteredDigitalHealthTools.length > 0 ? (
        <ProjectSection
          id="patient-centered-digital-health-tools"
          eyebrow="Patient-Centered Digital Health Tools"
          heading="Tools that help patients organize and communicate health information"
          description="Patient-facing trackers, timelines, and digital tools designed around symptoms, appointments, labs, medications, health events, and clearer patient-provider communication."
          projects={patientCenteredDigitalHealthTools}
        />
      ) : null}

      {selectedSoftwareEngineeringWork.length > 0 ? (
        <ProjectSection
          id="selected-software-engineering-work"
          eyebrow="Selected Software Engineering Work"
          heading="Technical foundation and production experience"
          description="Selected full-stack and production software projects that show development experience, product thinking, user flow improvement, system design, and technical ownership."
          projects={selectedSoftwareEngineeringWork}
        />
      ) : null}

      <section className="mt-24 md:mt-28">
        <CardWithGlow>
          <SectionLabel>Health Systems Approach</SectionLabel>

          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="font-heading text-primary text-3xl leading-tight font-normal md:text-4xl">
                How I approach digital health work
              </h2>

              <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">
                My work combines systems thinking, product clarity, technical ownership, and
                patient-centered design. Whether I’m building a tool, mapping a care workflow, or
                exploring a data-informed concept, I focus on making complex healthcare experiences
                easier to understand, navigate, and improve.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ApproachCard
                title="Research-informed"
                body="Questions, project scopes, and product decisions are grounded in care gaps, health systems realities, and patient experience."
              />

              <ApproachCard
                title="Systems-minded"
                body="Clear architecture, scoped complexity, workflow awareness, and decisions shaped by real healthcare use cases."
              />

              <ApproachCard
                title="Patient-centered"
                body="Interfaces, workflows, and resources are designed around real people, health information needs, and practical decision-making."
              />

              <ApproachCard
                title="Technically useful"
                body="The goal is not just a beautiful concept, but a documented, structured, buildable tool that can communicate value clearly."
              />
            </div>
          </div>
        </CardWithGlow>
      </section>
    </main>
  );
}

function ProjectSection({
  id,
  eyebrow,
  heading,
  description,
  projects,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  projects: Project[];
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-24">
      <div className="mb-6 max-w-3xl space-y-3">
        <SectionLabel>{eyebrow}</SectionLabel>

        <h2 className="font-heading text-primary text-3xl leading-tight font-normal tracking-tight md:text-5xl">
          {heading}
        </h2>

        <p className="text-muted text-base leading-relaxed md:text-lg">{description}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ApproachCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-default bg-surface shadow-card hover:shadow-pop rounded-2xl border p-5 transition hover:-translate-y-0.5">
      <h3 className="text-foreground text-sm font-bold">{title}</h3>
      <p className="text-muted mt-2 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
