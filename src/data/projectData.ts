export type ProjectCategory = 'Product Systems' | 'Operational Tools' | 'Full-Stack Applications';

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
  category: 'Product Systems' | 'Operational Tools' | 'Full-Stack Applications';
  stack: string[];
  status: ProjectStatus;
  featured?: boolean;
  caseStudyHref?: string;
  repoHref?: string;
  demoHref?: string;
};

export const categories: ProjectCategoryCard[] = [
  {
    title: 'Product Systems',
    description:
      'Applications designed around users, workflows, decision points, and real-world product needs.',
    href: '#product-systems',
  },
  {
    title: 'Operational Tools',
    description:
      'Internal tools, scheduling flows, coordination systems, and workflow support for real operations.',
    href: '#operational-tools',
  },
  {
    title: 'Full-Stack Applications',
    description:
      'End-to-end web applications combining user interfaces, backend logic, APIs, and structured persistence.',
    href: '#full-stack-applications',
  },
];

export const projects: Project[] = [
  {
    slug: 'careflow-health-tracker',
    title: 'CareFlow Health Tracker',
    summary:
      'A personal health tracking system for logging symptoms, medications, appointments, notes, and health events over time.',
    category: 'Product Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'clinic-resource-coordination-system',
    title: 'Clinic Resource Coordination System',
    summary:
      'A role-based scheduling and resource coordination tool for managing appointment flow, staff availability, rooms, and operational conflicts.',
    category: 'Operational Tools',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'patient-education-library',
    title: 'Patient Education Library',
    summary:
      'A searchable content management tool for organizing patient-facing resources by topic, reading level, format, and care context.',
    category: 'Product Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application with structured workflows, CRUD operations, and role-based user flows.',
    category: 'Full-Stack Applications',
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
    category: 'Full-Stack Applications',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'Built',
    caseStudyHref: '/projects/amp-ticket-add-on-flow',
  },
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion app built to support wayfinding, vendor discovery, and reusable event-focused UI patterns.',
    category: 'Full-Stack Applications',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'Built',
    caseStudyHref: '/projects/art-of-wine-companion-app',
  },
];
