export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  body?: string;
  list?: string[];
};

export type CaseStudyDecision = {
  title: string;
  body: string;
};

export type CaseStudyArchitectureStep = {
  label: string;
};

export type CaseStudyCategory = 'Product Systems' | 'Operational Tools' | 'Full-Stack Applications';

export type CaseStudyStatus = 'Built' | 'In Progress' | 'Planned' | 'Production';

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  category: CaseStudyCategory;
  status: CaseStudyStatus;
  stack: string[];
  backHref: string;
  repoHref?: string;
  demoHref?: string;

  meta: CaseStudyMetaItem[];

  overview: CaseStudySection;
  problem: CaseStudySection;
  goals: CaseStudySection;

  system: {
    eyebrow: string;
    title: string;
    body: string;
    architecture: CaseStudyArchitectureStep[];
  };

  technology: CaseStudySection;
  features: CaseStudySection;

  technicalDecisions: {
    eyebrow: string;
    title: string;
    decisions: CaseStudyDecision[];
  };

  constraints: CaseStudySection;
  outcome: CaseStudySection;
  nextSteps: CaseStudySection;
};

export const caseStudies: CaseStudy[] = [
  // PERIODIC TABLES
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application built to support structured booking workflows, table coordination, and operational visibility for restaurant service.',
    category: 'Full-Stack Applications',
    status: 'Built',
    stack: ['React', 'Express.js', 'PostgreSQL', 'Knex.js'],
    backHref: '/projects',
    repoHref: '',
    demoHref: '',

    meta: [
      { label: 'Role', value: 'Solo Engineer' },
      { label: 'Status', value: 'Built / Rebuild Planned' },
      { label: 'Focus', value: 'Reservations & Workflow' },
      { label: 'Type', value: 'Full-Stack Application' },
    ],

    overview: {
      eyebrow: 'Overview',
      title: 'What this project is',
      body: 'This project is a reservation management system designed to support restaurant booking workflows through structured data, CRUD operations, and role-oriented user flows. It focuses on practical operations rather than purely presentational UI.',
    },

    problem: {
      eyebrow: 'Problem',
      title: 'Why this project exists',
      body: 'Reservation workflows become difficult to manage when booking details, table states, and service coordination are handled inconsistently. The project was built to create a clearer operational system for managing reservations and seating flow.',
    },

    goals: {
      eyebrow: 'Goals',
      title: 'Project goals',
      list: [
        'Build a full-stack application for reservation and seating workflows',
        'Support CRUD operations with validation and operational rules',
        'Model practical restaurant coordination needs in the database and UI',
        'Create a clean, responsive interface for day-to-day workflow management',
      ],
    },

    system: {
      eyebrow: 'System',
      title: 'System architecture',
      body: 'The application separates frontend workflow views, backend business logic, and relational data storage so reservation handling remains structured and easier to maintain.',
      architecture: [
        { label: 'Reservation input' },
        { label: 'Validation / business rules' },
        { label: 'Express API' },
        { label: 'PostgreSQL' },
        { label: 'Reservation + table state queries' },
        { label: 'React interface' },
      ],
    },

    technology: {
      eyebrow: 'Stack',
      title: 'Technology used',
      list: ['React', 'Express.js', 'PostgreSQL', 'Knex.js', 'JavaScript', 'CSS'],
    },

    features: {
      eyebrow: 'Features',
      title: 'Key capabilities',
      list: [
        'Reservation creation, editing, and cancellation flows',
        'Table assignment and seating management',
        'Business-rule validation for operational constraints',
        'Responsive interfaces for reservation workflows',
        'Structured backend logic for stateful reservation handling',
      ],
    },

    technicalDecisions: {
      eyebrow: 'Technical Decisions',
      title: 'Important implementation choices',
      decisions: [
        {
          title: 'Why PostgreSQL',
          body: 'Reservations and table states require structured relationships and reliable querying, which made PostgreSQL a practical choice for the application data model.',
        },
        {
          title: 'Why Express for backend logic',
          body: 'Express provided a straightforward way to handle reservation workflows, validation rules, and API endpoints without adding unnecessary abstraction.',
        },
        {
          title: 'Why prioritize workflow over decoration',
          body: 'For operations-heavy applications, clear interaction flows and state handling matter more than purely aesthetic interface choices, so the project prioritized usability and task completion.',
        },
      ],
    },

    constraints: {
      eyebrow: 'Constraints',
      title: 'Challenges and limitations',
      body: 'Reservation systems have many small operational rules that can create bugs if not handled intentionally. A key challenge was translating real workflow constraints into backend validation and predictable UI behavior.',
    },

    outcome: {
      eyebrow: 'Outcome',
      title: 'What this project demonstrates',
      body: 'This project demonstrates full-stack application design, database-backed workflow management, and the ability to model practical operational systems with clear user-facing interactions.',
    },

    nextSteps: {
      eyebrow: 'Next Steps',
      title: 'Future improvements',
      list: [
        'Refine table management and edge-case handling',
        'Improve interface clarity for high-volume service flow',
        'Add stronger reporting around reservation activity',
        'Modernize the rebuild with updated styling and documentation',
      ],
    },
  },
  // AMP TICKETS
  {
    slug: 'amp-ticket-add-on-flow',
    title: 'AMP Ticket Add-On Flow',
    summary:
      'A production feature designed to improve add-on visibility and checkout usability within an existing ticketing ecosystem.',
    category: 'Full-Stack Applications',
    status: 'Production',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    backHref: '/projects',

    meta: [
      { label: 'Role', value: 'Sole Developer' },
      { label: 'Status', value: 'Production' },
      { label: 'Focus', value: 'Ticketing UX' },
      { label: 'Type', value: 'Product Feature' },
    ],

    overview: {
      eyebrow: 'Overview',
      title: 'What this project is',
      body: 'This project was a production feature built within an existing ticketing environment to improve how event add-ons were surfaced during the purchase experience. The work focused on usability, integration constraints, and feature implementation inside an established system.',
    },

    problem: {
      eyebrow: 'Problem',
      title: 'Why this project exists',
      body: 'Add-on opportunities can be missed when they are not clearly surfaced in the purchasing flow. The goal of this work was to improve add-on visibility and usability without disrupting the surrounding ticketing experience.',
    },

    goals: {
      eyebrow: 'Goals',
      title: 'Project goals',
      list: [
        'Improve visibility of add-on options during checkout',
        'Integrate the feature cleanly into an existing ticketing environment',
        'Preserve usability and accessibility while extending the flow',
        'Support a production-ready implementation within platform constraints',
      ],
    },

    system: {
      eyebrow: 'System',
      title: 'System architecture',
      body: 'Because this was a feature integration rather than a standalone system, the architecture centered on extending an existing frontend flow while respecting current platform boundaries and dependencies.',
      architecture: [
        { label: 'User enters checkout flow' },
        { label: 'Add-on feature UI' },
        { label: 'Existing ticketing integration' },
        { label: 'Selection / state handling' },
        { label: 'Checkout continuation' },
      ],
    },

    technology: {
      eyebrow: 'Stack',
      title: 'Technology used',
      list: ['React', 'TypeScript', 'Tailwind CSS'],
    },

    features: {
      eyebrow: 'Features',
      title: 'Key capabilities',
      list: [
        'Integrated add-on visibility within the purchase flow',
        'Usability-focused frontend interaction patterns',
        'Feature implementation inside an existing production ecosystem',
        'Accessibility-conscious UI refinement',
        'Improved alignment between business goals and user flow',
      ],
    },

    technicalDecisions: {
      eyebrow: 'Technical Decisions',
      title: 'Important implementation choices',
      decisions: [
        {
          title: 'Why integrate instead of rebuilding',
          body: 'The existing ticketing environment already had production dependencies, so the feature had to be implemented in a way that extended current behavior without destabilizing the broader system.',
        },
        {
          title: 'Why TypeScript for the feature layer',
          body: 'TypeScript helped keep state and interaction behavior more predictable while integrating the feature into an existing frontend codebase.',
        },
        {
          title: 'Why UX clarity was central',
          body: 'Because the purpose of the feature was visibility and conversion within the purchase flow, interface clarity and placement decisions mattered as much as the implementation itself.',
        },
      ],
    },

    constraints: {
      eyebrow: 'Constraints',
      title: 'Challenges and limitations',
      body: 'Feature work inside an existing production system is constrained by upstream integrations, surrounding UX patterns, and the need to avoid regressions. This project required balancing product goals with system stability.',
    },

    outcome: {
      eyebrow: 'Outcome',
      title: 'What this project demonstrates',
      body: 'This work demonstrates production-minded frontend implementation, the ability to ship features inside existing systems, and thoughtful alignment between user flow, technical constraints, and business priorities.',
    },

    nextSteps: {
      eyebrow: 'Next Steps',
      title: 'Future improvements',
      list: [
        'Measure interaction performance and add-on engagement more deeply',
        'Refine feature placement based on user behavior',
        'Expand analytics around add-on selection patterns',
        'Document implementation considerations for similar feature work',
      ],
    },
  },
  // AOW
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion app designed to support vendor discovery, event navigation, and reusable UI patterns for future event experiences.',
    category: 'Full-Stack Applications',
    status: 'In Progress',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    backHref: '/projects',

    meta: [
      { label: 'Role', value: 'Sole Developer' },
      { label: 'Status', value: 'In Progress' },
      { label: 'Focus', value: 'Event Experience' },
      { label: 'Type', value: 'Mobile-First Application' },
    ],

    overview: {
      eyebrow: 'Overview',
      title: 'What this project is',
      body: 'This project is a mobile-first event companion application built to support users during a large-scale event experience. It focuses on vendor discovery, event-specific information access, and reusable frontend patterns for future event applications.',
    },

    problem: {
      eyebrow: 'Problem',
      title: 'Why this project exists',
      body: 'Large events often create friction around wayfinding, vendor discovery, and access to event-specific information. The goal of this project was to create a more usable digital companion that improves navigation and information access during the event experience.',
    },

    goals: {
      eyebrow: 'Goals',
      title: 'Project goals',
      list: [
        'Design a mobile-first interface for event attendees',
        'Support vendor browsing and discovery workflows',
        'Create a reusable UI and data structure for future event apps',
        'Build a maintainable application foundation that can scale beyond a single event',
      ],
    },

    system: {
      eyebrow: 'System',
      title: 'System architecture',
      body: 'The app combines structured content modeling, frontend interaction design, and backend-backed event data so users can move through event information in a more coherent way.',
      architecture: [
        { label: 'Event content / vendor data' },
        { label: 'Structured data model' },
        { label: 'Prisma / PostgreSQL' },
        { label: 'API / server logic' },
        { label: 'Next.js mobile-first UI' },
      ],
    },

    technology: {
      eyebrow: 'Stack',
      title: 'Technology used',
      list: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    },

    features: {
      eyebrow: 'Features',
      title: 'Key capabilities',
      list: [
        'Vendor discovery and browsing flows',
        'Mobile-first layout for event use',
        'Structured event content modeling',
        'Reusable component patterns for future event apps',
        'Interactive support for event-specific information access',
      ],
    },

    technicalDecisions: {
      eyebrow: 'Technical Decisions',
      title: 'Important implementation choices',
      decisions: [
        {
          title: 'Why mobile-first by default',
          body: 'Because the application is intended for live event use, the interface needed to prioritize on-the-go access and constrained mobile attention first.',
        },
        {
          title: 'Why Prisma with PostgreSQL',
          body: 'The project benefits from a structured schema and typed data access, making Prisma and PostgreSQL a strong fit for event and vendor-related content relationships.',
        },
        {
          title: 'Why reusable UI patterns matter',
          body: 'The app was designed not only as a single event experience, but as a foundation for similar future experiences, so reusable components and scalable structure were important from the start.',
        },
      ],
    },

    constraints: {
      eyebrow: 'Constraints',
      title: 'Challenges and limitations',
      body: 'Event applications must balance usefulness with speed and simplicity, especially on mobile devices. One key challenge was deciding how much functionality to include without making the experience feel heavy or cluttered.',
    },

    outcome: {
      eyebrow: 'Outcome',
      title: 'What this project demonstrates',
      body: 'This project demonstrates mobile-first application design, structured content modeling, and the ability to build reusable systems that support specific user contexts while remaining extensible.',
    },

    nextSteps: {
      eyebrow: 'Next Steps',
      title: 'Future improvements',
      list: [
        'Expand interactive event guidance and wayfinding support',
        'Refine vendor discovery flows and UI states',
        'Add richer saved or favorited content interactions',
        'Document reusable architecture patterns for future event apps',
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
