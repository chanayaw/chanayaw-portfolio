export type ProjectCategory = {
  title: string;
  description: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: 'Data & Analytics Systems' | 'Operational Systems' | 'Full-Stack Applications';
  stack: string[];
  featured?: boolean;
  caseStudyHref: string;
  repoHref?: string;
  demoHref?: string;
};

export const categories: ProjectCategory[] = [
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

export const projects: Project[] = [
  {
    slug: 'womens-health-data-dashboard',
    title: 'Women’s Health Data Dashboard',
    summary:
      'A health data exploration platform using structured datasets, analytics queries, and interactive visualizations to examine trends in women’s health outcomes.',
    category: 'Data & Analytics Systems',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'SQL'],
    featured: true,
    caseStudyHref: '',
    repoHref: '',
  },
  {
    slug: 'healthcare-operations-analytics-platform',
    title: 'Healthcare Operations Analytics Platform',
    summary:
      'An analytics system modeling operational healthcare metrics through ETL workflows, structured reporting, and dashboard interfaces.',
    category: 'Data & Analytics Systems',
    stack: ['Node.js', 'React', 'PostgreSQL', 'SQL'],
    featured: true,
    caseStudyHref: '',
    repoHref: '',
  },
  {
    slug: 'resource-allocation-system',
    title: 'Resource Allocation System',
    summary:
      'A role-based scheduling and coordination platform designed to model real-world operational workflows and support resource planning.',
    category: 'Operational Systems',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
    featured: true,
    caseStudyHref: '',
    repoHref: '',
  },
  {
    slug: 'environmental-monitoring-system',
    title: 'Environmental Monitoring System',
    summary:
      'A dashboard-oriented system for visualizing environmental sensor data, trend patterns, and reporting signals.',
    category: 'Data & Analytics Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    caseStudyHref: '',
    repoHref: '',
  },
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application with structured workflows, CRUD operations, and role-based user flows.',
    category: 'Full-Stack Applications',
    stack: ['React', 'Express', 'PostgreSQL', 'Knex'],
    caseStudyHref: '/projects/periodic-tables-reservation-system',
    repoHref: '',
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
