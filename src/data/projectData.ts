export type ProjectCategory =
  | 'Digital Health Products'
  | 'Clinical + Operational Systems'
  | 'Software Engineering Projects'
  | 'Research + Data Explorations'
  | 'Technical Proof / Software Engineering Archive';

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
      'Patient-centered tools, trackers, dashboards, and education platforms connected to health information, care experiences, and digital health workflows.',
    href: '#digital-health-products',
  },
  {
    title: 'Clinical + Operational Systems',
    description:
      'Systems that support care coordination, workflows, scheduling, resources, and operational clarity in health-related settings.',
    href: '#clinical-operational-systems',
  },
  {
    title: 'Software Engineering Projects',
    description:
      'Full-stack applications, APIs, interfaces, and technical foundations that demonstrate engineering ability for future health-tech work.',
    href: '#software-engineering-projects',
  },
  {
    title: 'Research + Data Explorations',
    description:
      "Data-informed concepts, dashboards, advocacy notes, and field explorations connected to health systems, women's health equity, and informatics.",
    href: '#research-data-explorations',
  },
] satisfies ProjectCategoryCard[];

export const projects: Project[] = [
  {
    slug: 'careflow-health-tracker',
    title: 'CareFlow Health Tracker',
    summary:
      'A patient-centered health tracking concept for organizing symptoms, medications, appointments, notes, labs, and health events over time.',
    category: 'Digital Health Products',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'clinic-resource-coordination-system',
    title: 'Clinic Resource Coordination System',
    summary:
      'A care operations concept for managing appointment flow, staff availability, rooms, resources, and operational conflicts in health-related settings.',
    category: 'Clinical + Operational Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'patient-education-library',
    title: 'Patient Education Library',
    summary:
      'A searchable patient education library for organizing health resources by topic, reading level, format, care context, and patient need.',
    category: 'Digital Health Products',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application demonstrating CRUD workflows, role-based user flows, relational data modeling, and operational system design.',
    category: 'Technical Proof / Software Engineering Archive',
    stack: ['React', 'Express', 'PostgreSQL', 'Knex'],
    status: 'Built',
    caseStudyHref: '/projects/periodic-tables-reservation-system',
    repoHref: '',
  },
  {
    slug: 'amp-ticket-add-on-flow',
    title: 'AMP Ticket Add-On Flow',
    summary:
      'A production feature demonstrating user flow improvement, interface refinement, and operational support within a high-demand digital service environment.',
    category: 'Technical Proof / Software Engineering Archive',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'Built',
    caseStudyHref: '/projects/amp-ticket-add-on-flow',
  },
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion application demonstrating wayfinding, structured content, vendor discovery, reusable UI patterns, and full-stack product development.',
    category: 'Technical Proof / Software Engineering Archive',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'Built',
    caseStudyHref: '/projects/art-of-wine-companion-app',
  },
];
