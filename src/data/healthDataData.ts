export type Challenge = {
  title: string;
  description: string;
};

export type SystemPattern = {
  title: string;
  description: string;
};

export type FocusArea = {
  title: string;
  description: string;
  tags: string[];
};

export type RelatedProject = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export const challenges: Challenge[] = [
  {
    title: 'Fragmented data sources',
    description:
      'Health-related data is often split across different systems, formats, and reporting layers, making it harder to query or compare directly.',
  },
  {
    title: 'Inconsistent categories and codes',
    description:
      'Labels, categories, and coded fields are not always standardized, which creates extra work around mapping, normalization, and interpretation.',
  },
  {
    title: 'Missing or incomplete records',
    description:
      'Many datasets include gaps, partial fields, or uneven coverage across populations, locations, or time periods.',
  },
  {
    title: 'Interpretation risk',
    description:
      'Dashboards and summaries can imply more certainty than the data supports, especially when limitations are not documented clearly.',
  },
  {
    title: 'Operational complexity',
    description:
      'Health systems involve time-based workflows, role-specific responsibilities, and real-world coordination constraints that software must reflect.',
  },
  {
    title: 'Usability gaps',
    description:
      'Even when data exists, people often lack interfaces that make it easier to inspect, query, or act on meaningfully.',
  },
];

export const systemPatterns: SystemPattern[] = [
  {
    title: 'Data ingestion and normalization',
    description:
      'Scripts and transformation workflows that turn raw data into cleaner, more consistent structures for downstream use.',
  },
  {
    title: 'Structured data modeling',
    description:
      'Relational schemas and explicit field definitions that make categories, relationships, and queries easier to manage.',
  },
  {
    title: 'Analytics dashboards',
    description:
      'Interfaces that surface trends, comparisons, and summaries through query-backed views rather than raw files alone.',
  },
  {
    title: 'Operational workflow tools',
    description:
      'Systems that support scheduling, reporting, coordination, and visibility across real-world service or planning contexts.',
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Women’s health datasets',
    description:
      'Exploratory work around PCOS, fibroids, iron deficiency, maternal outcomes, and related public health or reporting datasets.',
    tags: ['Health Data', 'Analytics', 'Structured Systems'],
  },
  {
    title: 'Operational health systems',
    description:
      'An interest in how reporting, scheduling, throughput, and service metrics can be modeled more clearly through software.',
    tags: ['Operations', 'Reporting', 'Workflows'],
  },
  {
    title: 'Documentation and reproducibility',
    description:
      'A focus on making assumptions, transformations, and data limitations visible so systems remain understandable and maintainable.',
    tags: ['Documentation', 'Methods', 'Reproducibility'],
  },
  {
    title: 'Analytics interfaces',
    description:
      'Designing dashboards and data-informed tools that help users interpret patterns without overstating what the data can prove.',
    tags: ['Dashboards', 'Queries', 'Decision Support'],
  },
];

export const relatedProjects: RelatedProject[] = [
  {
    title: 'Women’s Health Data Dashboard',
    description:
      'A data-driven analytics platform for exploring trends in public women’s health datasets through structured ingestion, SQL queries, and interactive dashboard views.',
    href: '/projects/womens-health-data-dashboard',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Healthcare Operations Analytics Platform',
    description:
      'A dashboard and reporting system designed to model operational healthcare metrics through structured data flows and analytics views.',
    href: '/projects/healthcare-operations-analytics-platform',
    tags: ['TypeScript', 'React', 'Node.js', 'SQL'],
  },
  {
    title: 'Resource Allocation System',
    description:
      'A role-based scheduling and coordination platform designed to model workflow constraints and improve allocation visibility.',
    href: '/projects/resource-allocation-system',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
  },
];

export const principles = [
  'Prioritize structure before interpretation',
  'Document assumptions and limitations explicitly',
  'Separate exploratory work from production claims',
  'Favor maintainable systems over opaque complexity',
  'Design interfaces that support interpretation, not just display',
];
