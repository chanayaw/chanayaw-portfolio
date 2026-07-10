export type ProjectCategory =
  | 'Women’s Health Equity Data + Research'
  | 'Patient Education + Advocacy'
  | 'Care Navigation + Workflow Systems'
  | 'Patient-Centered Digital Health Tools'
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
    title: 'Women’s Health Equity Data + Research',
    description:
      'Dashboards, research notes, public data explorations, and data storytelling projects focused on delayed diagnosis, early detection, care access, patient experience, and health equity gaps.',
    href: '#womens-health-equity-data-research',
  },
  {
    title: 'Patient Education + Advocacy',
    description:
      'Plain-language guides, explainers, templates, and resource libraries that help underserved women understand symptoms, prepare for appointments, track follow-up, and advocate for clearer answers.',
    href: '#patient-education-advocacy',
  },
  {
    title: 'Care Navigation + Workflow Systems',
    description:
      'Workflow concepts that support care coordination, referral tracking, follow-up, scheduling, resource use, and clearer movement through healthcare systems.',
    href: '#care-navigation-workflow-systems',
  },
  {
    title: 'Patient-Centered Digital Health Tools',
    description:
      'Digital tools, trackers, timelines, and patient-facing experiences that help people organize health information and communicate care needs more clearly.',
    href: '#patient-centered-digital-health-tools',
  },
  {
    title: 'Selected Software Engineering Work',
    description:
      'Selected full-stack and production software projects that show technical range, product thinking, user flow improvement, and system design.',
    href: '#selected-software-engineering-work',
  },
] satisfies ProjectCategoryCard[];

export const projects: Project[] = [
  {
    slug: 'womens-health-equity-data-story',
    title: 'Women’s Health Equity Data Story',
    summary:
      'A research and data storytelling project exploring delayed diagnosis, early detection gaps, care access barriers, and patient experience among underserved women through public data, research notes, visual summaries, and plain-language interpretation.',
    category: 'Women’s Health Equity Data + Research',
    stack: ['Python', 'Pandas', 'Jupyter', 'Power BI', 'Public Health Data'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'patient-education-advocacy-library',
    title: 'Patient Education & Advocacy Library',
    summary:
      'A plain-language patient education and advocacy resource library organized by topic, reading level, care context, and patient need. Focused on helping underserved women understand symptoms, appointments, referrals, follow-up steps, and advocacy questions.',
    category: 'Patient Education + Advocacy',
    stack: ['Next.js', 'TypeScript', 'MDX', 'PostgreSQL', 'Tailwind CSS'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'careflow-symptom-timeline',
    title: 'CareFlow Symptom Timeline',
    summary:
      'A patient-centered symptom timeline and care navigation concept for organizing symptoms, appointments, medications, labs, referrals, notes, and health events over time, designed around delayed diagnosis, early detection, and clearer patient-provider communication.',
    category: 'Patient-Centered Digital Health Tools',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Recharts'],
    status: 'Planned',
    featured: true,
  },
  {
    slug: 'early-detection-care-gap-dashboard',
    title: 'Early Detection Care Gap Dashboard',
    summary:
      'A healthcare analytics dashboard concept focused on screening gaps, follow-up delays, referral completion, and early detection opportunities for underserved women and overlooked patient populations.',
    category: 'Women’s Health Equity Data + Research',
    stack: ['SQL', 'Python', 'Pandas', 'Power BI', 'Quality Measures'],
    status: 'Planned',
  },
  {
    slug: 'patient-dismissal-research-tracker',
    title: 'Patient Dismissal Research Tracker',
    summary:
      'A research-informed tracker concept for collecting, organizing, and visualizing patient-reported experiences related to dismissal, delayed diagnosis, unclear communication, and barriers to follow-up care.',
    category: 'Patient Education + Advocacy',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Survey Data', 'Recharts'],
    status: 'Planned',
  },
  {
    slug: 'care-access-workflow-system',
    title: 'Care Access Workflow System',
    summary:
      'A healthcare operations and care access workflow concept for coordinating appointment flow, staff availability, rooms, resources, referrals, and operational conflicts, with attention to how system delays affect patient access, follow-up, and continuity of care.',
    category: 'Care Navigation + Workflow Systems',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zustand'],
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
