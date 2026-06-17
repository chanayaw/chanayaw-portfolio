export type ProjectCategory =
  | 'Digital Health Products'
  | 'Clinical + Operational Systems'
  | 'Software Engineering Projects'
  | 'Research + Data Explorations';

export type ProjectCategoryCard = {
  title: ProjectCategory;
  description: string;
  href: string;
};

export type ProjectStatus = 'Built' | 'In Progress' | 'Planned';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  status: ProjectStatus;
  featured?: boolean;
  caseStudyHref?: string;
  repoHref?: string;
  demoHref?: string;
};

export const categories = [
  {
    title: 'Digital Health Products',
    description:
      'Patient-centered tools, trackers, dashboards, and educational platforms connected to care experiences and health workflows.',
    href: '#digital-health-products',
  },
  {
    title: 'Clinical + Operational Systems',
    description:
      'Systems that support coordination, workflows, scheduling, resources, and real-world operations.',
    href: '#clinical-operational-systems',
  },
  {
    title: 'Software Engineering Projects',
    description:
      'Full-stack applications, APIs, interfaces, and technical foundations that show engineering ability.',
    href: '#software-engineering-projects',
  },
  {
    title: 'Research + Data Explorations',
    description:
      'Data-informed concepts, dashboards, and field notes connected to health systems, equity, and informatics.',
    href: '#research-data-explorations',
  },
] satisfies ProjectCategoryCard[];

export const projects: Project[] = [
  {
    slug: 'careflow-health-tracker',
    title: 'CareFlow Health Tracker',
    summary:
      'A personal health tracking system for logging symptoms, medications, appointments, notes, and health events over time.',
    category: 'Digital Health Products',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'clinic-resource-coordination-system',
    title: 'Clinic Resource Coordination System',
    summary:
      'A role-based scheduling and resource coordination tool for managing appointment flow, staff availability, rooms, and operational conflicts.',
    category: 'Clinical + Operational Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'patient-education-library',
    title: 'Patient Education Library',
    summary:
      'A searchable content management tool for organizing patient-facing resources by topic, reading level, format, and care context.',
    category: 'Digital Health Products',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application with structured workflows, CRUD operations, and role-based user flows.',
    category: 'Software Engineering Projects',
    stack: ['React', 'Express', 'PostgreSQL', 'Knex'],
    status: 'Built',
    caseStudyHref: '/projects/periodic-tables-reservation-system',
    repoHref: '',
  },
  {
    slug: 'amp-ticket-add-on-flow',
    title: 'AMP Ticket Add-On Flow',
    summary:
      'A production feature built to improve add-on visibility and checkout usability within an existing ticketing ecosystem.',
    category: 'Software Engineering Projects',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'Built',
    caseStudyHref: '/projects/amp-ticket-add-on-flow',
  },
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion app built to support wayfinding, vendor discovery, and reusable event-focused UI patterns.',
    category: 'Software Engineering Projects',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'Built',
    caseStudyHref: '/projects/art-of-wine-companion-app',
  },
];
