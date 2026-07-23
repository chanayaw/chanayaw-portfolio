export type ProjectCategory =
  | 'Health Information + Data Systems'
  | 'Selected Software Engineering Work'
  | "Women's Health Equity Data + Research"
  | 'Patient Education + Advocacy'
  | 'Care Navigation + Workflow Systems'
  | 'Patient-Centered Digital Health Tools';

export type ProjectCategoryCard = {
  title: ProjectCategory;
  description: string;
  href: string;
};

export type ProjectStatus = 'Built' | 'In Progress' | 'Planned';

export type ProjectType = 'Professional Work' | 'Educational Project' | 'Independent Concept';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  status: ProjectStatus;
  projectType: ProjectType;
  featured?: boolean;
  caseStudyHref?: string;
  repoHref?: string;
  demoHref?: string;
};

export const categories = [
  {
    title: 'Health Information + Data Systems',
    description:
      'Educational projects exploring health-record data quality, documentation workflows, information organization, and healthcare data systems using synthetic information.',
    href: '#health-information-data-systems',
  },
  {
    title: "Women's Health Equity Data + Research",
    description:
      'Research and data projects exploring delayed diagnosis, early detection, care access, patient experience, and health-equity gaps.',
    href: '#womens-health-equity-data-research',
  },
  {
    title: 'Patient Education + Advocacy',
    description:
      'Plain-language resources and tools designed to make complex health information easier to understand and act on.',
    href: '#patient-education-advocacy',
  },
  {
    title: 'Care Navigation + Workflow Systems',
    description:
      'Concepts exploring care coordination, referrals, follow-up, scheduling, resource use, and movement through healthcare systems.',
    href: '#care-navigation-workflow-systems',
  },
  {
    title: 'Patient-Centered Digital Health Tools',
    description:
      'Digital tools and patient-facing experiences designed to help people organize health information and communicate care needs.',
    href: '#patient-centered-digital-health-tools',
  },
] satisfies ProjectCategoryCard[];

export const projects: Project[] = [
  /*
   * Completed professional work appears first so recruiters encounter
   * demonstrated experience before planned healthcare concepts.
   */
  {
    slug: 'amp-ticket-add-on-flow',
    title: 'AMP Ticket Add-On Flow',
    summary:
      'A production feature supporting a high-demand digital service environment through user-flow improvement, interface refinement, testing, troubleshooting, and operational support.',
    category: 'Selected Software Engineering Work',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'Built',
    projectType: 'Professional Work',
    featured: true,
    caseStudyHref: '/projects/amp-ticket-add-on-flow',
  },
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion application supporting structured content, wayfinding, vendor discovery, reusable interface patterns, and full-stack product development.',
    category: 'Selected Software Engineering Work',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'Built',
    projectType: 'Professional Work',
    featured: true,
    caseStudyHref: '/projects/art-of-wine-companion-app',
  },
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation-management application demonstrating CRUD workflows, role-based user flows, relational data modeling, and operational system design.',
    category: 'Selected Software Engineering Work',
    stack: ['React', 'Express', 'PostgreSQL', 'Knex'],
    status: 'Built',
    projectType: 'Educational Project',
    featured: true,
    caseStudyHref: '/projects/periodic-tables-reservation-system',
  },

  /*
   * Health-information work is clearly identified as independent,
   * educational work using synthetic information.
   */
  {
    slug: 'health-record-data-quality-lab',
    title: 'Health Record Data Quality Lab',
    summary:
      'A planned educational project using synthetic health-record data to explore missing information, inconsistent formatting, duplicate records, validation rules, and data-quality reporting.',
    category: 'Health Information + Data Systems',
    stack: ['SQL', 'PostgreSQL', 'Python', 'Data Quality', 'Synthetic Data'],
    status: 'Planned',
    projectType: 'Independent Concept',
  },

  /*
   * Long-term women’s-health and digital-health concepts remain part
   * of the portfolio without appearing above completed evidence.
   */
  {
    slug: 'womens-health-equity-data-story',
    title: 'Women’s Health Equity Data Story',
    summary:
      'A planned research and data-storytelling project exploring delayed diagnosis, early-detection gaps, care-access barriers, and patient experience among underserved women through public data and plain-language interpretation.',
    category: "Women's Health Equity Data + Research",
    stack: ['Python', 'Pandas', 'Jupyter', 'Power BI', 'Public Health Data'],
    status: 'Planned',
    projectType: 'Independent Concept',
  },
  {
    slug: 'patient-education-advocacy-library',
    title: 'Patient Education & Advocacy Library',
    summary:
      'A planned plain-language resource library designed to help patients understand symptoms, prepare for appointments, track follow-up, and identify questions for their care teams.',
    category: 'Patient Education + Advocacy',
    stack: ['Next.js', 'TypeScript', 'MDX', 'PostgreSQL', 'Tailwind CSS'],
    status: 'Planned',
    projectType: 'Independent Concept',
  },
  {
    slug: 'careflow-symptom-timeline',
    title: 'CareFlow Symptom Timeline',
    summary:
      'A planned patient-centered concept for organizing symptoms, appointments, medications, laboratory results, referrals, notes, and health events over time.',
    category: 'Patient-Centered Digital Health Tools',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Recharts'],
    status: 'Planned',
    projectType: 'Independent Concept',
  },
  {
    slug: 'early-detection-care-gap-dashboard',
    title: 'Early Detection Care Gap Dashboard',
    summary:
      'A planned healthcare-analytics concept exploring screening gaps, follow-up delays, referral completion, and early-detection opportunities using synthetic or publicly available data.',
    category: "Women's Health Equity Data + Research",
    stack: ['SQL', 'Python', 'Pandas', 'Power BI', 'Quality Measures'],
    status: 'Planned',
    projectType: 'Independent Concept',
  },
  {
    slug: 'patient-dismissal-research-tracker',
    title: 'Patient Dismissal Research Tracker',
    summary:
      'A planned research concept for organizing and visualizing patient-reported experiences involving dismissal, delayed diagnosis, unclear communication, and barriers to follow-up care.',
    category: 'Patient Education + Advocacy',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Survey Data', 'Recharts'],
    status: 'Planned',
    projectType: 'Independent Concept',
  },
  {
    slug: 'care-access-workflow-system',
    title: 'Care Access Workflow System',
    summary:
      'A planned healthcare-operations concept exploring appointment flow, staff availability, rooms, resources, referrals, and operational conflicts that may affect access and continuity of care.',
    category: 'Care Navigation + Workflow Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zustand'],
    status: 'Planned',
    projectType: 'Independent Concept',
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured && project.status === 'Built',
);
