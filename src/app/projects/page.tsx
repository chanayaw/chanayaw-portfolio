import Link from 'next/link';

type ProjectCategory = {
  title: string;
  description: string;
  href: string;
};

type Project = {
  slug: string;
  title: string;
  summary: string;
  category: 'Data & Analytics Systems' | 'Operational Systems' | 'Full-Stack Applications';
  stack: string[];
  featured?: boolean;
  caseStudyHref: string;
  repoHref?: string;
};

const categories: ProjectCategory[] = [
  {
    title: 'Data & Analytics Systems',
    description:
      'Dashboards, SQL-driven reporting, data pipelines, and systems designed to turn structured data into usable insight.',
    href: '#data-analytics-systems',
  },
  {
    title: 'Operational Systems',
    description:
      'Internal tools, scheduling platforms, and workflow systems built to support coordination and decision-making.',
    href: '#operational-systems',
  },
  {
    title: 'Full-Stack Applications',
    description:
      'End-to-end web applications that combine user-facing interfaces, APIs, and structured backend logic.',
    href: '#full-stack-applications',
  },
];

const projects: Project[] = [
  {
    slug: 'womens-health-data-dashboard',
    title: 'Women’s Health Data Dashboard',
    summary:
      'A health data exploration platform using structured datasets, analytics queries, and interactive visualizations to examine trends in women’s health outcomes.',
    category: 'Data & Analytics Systems',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'SQL'],
    featured: true,
    caseStudyHref: '/projects/womens-health-data-dashboard',
    repoHref: 'https://github.com/yourusername/womens-health-data-dashboard',
  },
  {
    slug: 'healthcare-operations-analytics',
    title: 'Healthcare Operations Analytics Platform',
    summary:
      'An analytics system modeling operational healthcare metrics through ETL workflows, structured reporting, and dashboard interfaces.',
    category: 'Data & Analytics Systems',
    stack: ['Node.js', 'React', 'PostgreSQL', 'SQL'],
    featured: true,
    caseStudyHref: '/projects/healthcare-operations-analytics',
    repoHref: 'https://github.com/yourusername/healthcare-operations-analytics',
  },
  {
    slug: 'resource-allocation-system',
    title: 'Resource Allocation System',
    summary:
      'A role-based scheduling and coordination platform designed to model real-world operational workflows and support resource planning.',
    category: 'Operational Systems',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
    featured: true,
    caseStudyHref: '/projects/resource-allocation-system',
    repoHref: 'https://github.com/yourusername/resource-allocation-system',
  },
  {
    slug: 'environmental-monitoring-system',
    title: 'Environmental Monitoring System',
    summary:
      'A dashboard-oriented system for visualizing environmental sensor data, trend patterns, and reporting signals.',
    category: 'Data & Analytics Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    caseStudyHref: '/projects/environmental-monitoring-system',
    repoHref: 'https://github.com/yourusername/environmental-monitoring-system',
  },
  {
    slug: 'periodic-tables',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application with structured workflows, CRUD operations, and role-based user flows.',
    category: 'Full-Stack Applications',
    stack: ['React', 'Express', 'PostgreSQL', 'Knex'],
    caseStudyHref: '/projects/periodic-tables',
    repoHref: 'https://github.com/yourusername/periodic-tables',
  },
  {
    slug: 'amp-ticket-add-on-flow',
    title: 'AMP Ticket Add-On Flow',
    summary:
      'A production feature built to improve add-on visibility and checkout usability within an existing ticketing ecosystem.',
    category: 'Full-Stack Applications',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    caseStudyHref: '/projects/amp-ticket-add-on-flow',
  },
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion app built to support wayfinding, vendor discovery, and reusable event-focused UI patterns.',
    category: 'Full-Stack Applications',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    caseStudyHref: '/projects/art-of-wine-companion-app',
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-poetic-soft mb-4 text-xs font-medium tracking-[0.24em] uppercase">
      {children}
    </p>
  );
}

function StackBadge({ label }: { label: string }) {
  return (
    <span className="text-subtle rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide">
      {label}
    </span>
  );
}

function CategoryCard({ title, description, href }: ProjectCategory) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/4 p-6 transition duration-300 hover:bg-white/6"
    >
      <h3 className="text-lg font-medium tracking-tight">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>
      <span className="text-poetic-soft mt-5 inline-block text-sm tracking-wide">
        Explore category →
      </span>
    </Link>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/4 p-6 transition duration-300 hover:bg-white/6">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="text-poetic-soft rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide">
          {project.category}
        </span>
      </div>

      <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
      <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <StackBadge key={item} label={item} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={project.caseStudyHref}
          className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/8"
        >
          View Case Study
        </Link>

        {project.repoHref ? (
          <Link
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            className="text-subtle px-1 py-2 text-sm transition hover:text-white"
          >
            View Repository →
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:bg-white/5">
      <p className="text-poetic-soft text-xs tracking-[0.22em] uppercase">{project.category}</p>
      <h3 className="mt-3 text-lg font-medium tracking-tight">{project.title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <StackBadge key={item} label={item} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <Link href={project.caseStudyHref} className="text-sm transition hover:opacity-80">
          Case Study →
        </Link>

        {project.repoHref ? (
          <Link
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            className="text-subtle text-sm transition hover:text-white"
          >
            Repository →
          </Link>
        ) : null}
      </div>
    </article>
  );
}

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
      <section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Projects</SectionLabel>

          <div className="max-w-4xl">
            <h1 className="text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl">
              Engineering systems, analytics platforms, and operational tools
            </h1>

            <p className="text-subtle mt-6 max-w-3xl text-base leading-relaxed md:text-lg">
              A selection of projects demonstrating full-stack engineering, structured data systems,
              analytics workflows, and applied problem solving across operational and health-related
              contexts.
            </p>

            <p className="text-muted mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
              My work focuses on maintainable software, data-informed interfaces, and systems
              designed to turn complex workflows into usable tools.
            </p>
          </div>
        </div>
      </section>

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

      <section id="data-analytics-systems" className="mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Data & Analytics Systems</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dataProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="operational-systems" className="mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Operational Systems</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {operationalProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="full-stack-applications" className="mt-24">
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
          <div className="rounded-3xl border border-white/10 bg-white/4 p-8 md:p-10">
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
          </div>
        </div>
      </section>
    </main>
  );
}

// export default function Projects() {
//   return <main></main>;
// }
