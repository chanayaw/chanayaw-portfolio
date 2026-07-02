export type ProjectCategory =
  | 'Patient-Centered Digital Health Tools'
  | 'Care Navigation & Healthcare Workflow Systems'
  | 'Health Data, Research & Equity Explorations'
  | 'Patient Education & Advocacy Resources'
  | 'Selected Software Engineering Work';

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
    title: 'Patient-Centered Digital Health Tools',
    description:
      'Tools, trackers, education platforms, and digital experiences that help patients organize health information, understand next steps, and navigate care with more clarity.',
    href: '#digital-health-products',
  },
  {
    title: 'Care Navigation & Healthcare Workflow Systems',
    description:
      'Systems and workflow concepts that support care coordination, referrals, follow-up, scheduling, resource use, and clearer movement through healthcare experiences.',
    href: '#clinical-operational-systems',
  },
  {
    title: 'Health Data, Research & Equity Explorations',
    description:
      'Dashboards, data-informed concepts, research notes, and field explorations connected to women’s health equity, delayed diagnosis, early detection, and care gaps.',
    href: '#software-engineering-projects',
  },
  {
    title: 'Patient Education & Advocacy Resources',
    description:
      'Research-informed guides, explainers, templates, and workshop materials that help underserved women understand their health, prepare for care, and advocate for clearer answers.',
    href: '#research-data-explorations',
  },
] satisfies ProjectCategoryCard[];

export const projects: Project[] = [
  // {
  //   slug: '',
  //   title: "",
  //   summary: "",
  //   category: '',
  //   stack: [''],
  //   status: 'Planned',
  // },
  {
    slug: 'careflow-symptom-timeline',
    title: 'CareFlow Symptom Timeline',
    summary:
      'A patient-centered symptom timeline and care navigation concept for organizing symptoms, appointments, medications, labs, referrals, notes, and health events over time. Designed around delayed diagnosis, early detection, and clearer patient-provider communication.',
    category: 'Patient-Centered Digital Health Tools',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Recharts'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'care-access-workflow-system',
    title: 'Care Access Workflow System',
    summary:
      'A healthcare operations and care access workflow concept for coordinating appointment flow, staff availability, rooms, resources, and operational conflicts, with attention to how system delays affect patient access, follow-up, and continuity of care.',
    category: 'Care Navigation & Healthcare Workflow Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'MDX', 'Zustand'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'patient-education-advocacy-library',
    title: 'Patient Education & Advocacy Library',
    summary:
      'A searchable patient education and health literacy library organized by topic, reading level, format, care context, and patient need. Focused on helping underserved women understand symptoms, care options, follow-up steps, and advocacy questions.',
    category: 'Patient Education & Advocacy Resources',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'MDX', 'Tailwind CSS'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'womens-health-equity-data-story',
    title: "Women's Health Equity Data Story",
    summary:
      "A research and data storytelling project exploring women's health disparities, delayed diagnosis, early detection gaps, and care access barriers through public data, research notes, visual summaries, and plain-language interpretation.",
    category: 'Health Data, Research & Equity Explorations',
    stack: ['Python', 'Pandas', 'Jupyter Notebook', 'Power BI', 'Public Health Data'],
    status: 'Planned',
  },
  {
    slug: 'early-detection-care-gap-dashboard',
    title: 'Early Detection Care Gap Dashboard',
    summary:
      'A healthcare analytics dashboard concept focused on screening gaps, follow-up delays, referral completion, and early detection opportunities for underserved women and overlooked patient populations.',
    category: 'Health Data, Research & Equity Explorations',
    stack: ['SQL', 'Python', 'Pandas', 'Power BI', 'Healthcare Quality Measures'],
    status: 'Planned',
  },

  {
    slug: 'patient-dismissal-research-tracker',
    title: 'Patient Dismissal Research Tracker',
    summary:
      'A research-informed tracker concept for collecting, organizing, and visualizing patient-reported experiences related to dismissal, delayed diagnosis, unclear communication, and barriers to follow-up care.',
    category: 'Patient Education & Advocacy Resources',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Survey Data', 'Recharts'],
    status: 'Planned',
  },
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application demonstrating CRUD workflows, role-based user flows, relational data modeling, and operational system design.',
    category: 'Selected Software Engineering Work',
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
    category: 'Selected Software Engineering Work',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'Built',
    caseStudyHref: '/projects/amp-ticket-add-on-flow',
  },
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion application demonstrating wayfinding, structured content, vendor discovery, reusable UI patterns, and full-stack product development.',
    category: 'Selected Software Engineering Work',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'Built',
    caseStudyHref: '/projects/art-of-wine-companion-app',
  },
];
