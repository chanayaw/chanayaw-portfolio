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

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  category: 'Data & Analytics Systems' | 'Operational Systems' | 'Full-Stack Applications';
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
  // WOMEN'S HEALTH DATA DASHBOARD
  {
    slug: 'womens-health-data-dashboard',
    title: "Women's Health Data Dashboard",
    summary:
      "A data-driven analytics platform for exploring trends in public women's health datasets through structured ingestion, SQL queries, and interactive dashboard views.",
    category: 'Data & Analytics Systems',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'SQL'],
    backHref: '/projects',
    repoHref: '',

    meta: [
      { label: 'Role', value: 'Solo Engineer' },
      { label: 'Status', value: 'In Progress' },
      { label: 'Focus', value: 'Health Data Systems' },
      { label: 'Type', value: 'Analytics Dashboard' },
    ],

    overview: {
      eyebrow: 'Overview',
      title: 'What this project is',
      body: 'This project explores how public health datasets can be transformed into a structured analytics workflow. It combines ingestion, normalization, SQL querying, and dashboard presentation to make healthcare-related trends easier to inspect.',
    },

    problem: {
      eyebrow: 'Problem',
      title: 'Why this project exists',
      body: 'Public datasets often arrive in raw formats that are difficult to query, compare, or interpret directly. The goal was to build a system that could make that data more usable without overstating what the data can actually support.',
    },

    goals: {
      eyebrow: 'Goals',
      title: 'Project goals',
      list: [
        'Normalize selected health dataset fields into a structured schema',
        'Build a dashboard interface for querying trends',
        'Document assumptions and data limitations clearly',
        'Keep the workflow reproducible and maintainable',
      ],
    },

    system: {
      eyebrow: 'System',
      title: 'System architecture',
      body: 'The project separates ingestion, storage, query logic, and presentation so the workflow remains easier to debug, extend, and reason about.',
      architecture: [
        { label: 'Raw dataset' },
        { label: 'Ingestion script' },
        { label: 'Validation / normalization' },
        { label: 'PostgreSQL' },
        { label: 'API routes' },
        { label: 'Dashboard UI' },
      ],
    },

    technology: {
      eyebrow: 'Stack',
      title: 'Technology used',
      list: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'SQL', 'Tailwind CSS'],
    },

    features: {
      eyebrow: 'Features',
      title: 'Key capabilities',
      list: [
        'Dataset ingestion and transformation',
        'Structured relational schema',
        'Aggregate SQL queries for trend analysis',
        'Filterable dashboard views',
        'Documentation of assumptions and limitations',
      ],
    },

    technicalDecisions: {
      eyebrow: 'Technical Decisions',
      title: 'Important implementation choices',
      decisions: [
        {
          title: 'Why PostgreSQL',
          body: 'PostgreSQL made sense for structured relational queries, aggregation, and extensibility around normalized health records.',
        },
        {
          title: 'Why Next.js',
          body: 'Next.js allowed the dashboard UI and API routes to live in one codebase, keeping the project simpler while it evolves.',
        },
        {
          title: 'Why explicit documentation',
          body: 'Health datasets often contain incomplete or inconsistent fields, so documenting assumptions was necessary to keep the analysis honest and reproducible.',
        },
      ],
    },

    constraints: {
      eyebrow: 'Constraints',
      title: 'Challenges and limitations',
      body: 'A central challenge was deciding how much normalization to perform without over-interpreting ambiguous source fields. To handle this, raw values were preserved where needed and transformation assumptions were documented explicitly.',
    },

    outcome: {
      eyebrow: 'Outcome',
      title: 'What this project demonstrates',
      body: 'The current version establishes a maintainable ingestion-to-dashboard pattern for analytics projects. It demonstrates structured data modeling, systems thinking, and responsible handling of imperfect datasets.',
    },

    nextSteps: {
      eyebrow: 'Next Steps',
      title: 'Future improvements',
      list: [
        'Add comparative filtering across conditions and regions',
        'Expand documentation for schema and query design',
        'Add more datasets for broader trend exploration',
        'Refine dashboard views and exportable summaries',
      ],
    },
  },
  // HEALTHCARE OPERATIONS ANALYTICS PLATFORM
  {
    slug: 'healthcare-operations-analytics-platform',
    title: 'Healthcare Operations Analytics Platform',
    summary:
      'A dashboard and reporting system designed to model operational healthcare metrics through structured data flows, SQL-based analysis, and role-aware analytics views.',
    category: 'Data & Analytics Systems',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'SQL'],
    backHref: '/projects',
    repoHref: '',

    meta: [
      { label: 'Role', value: 'Solo Engineer' },
      { label: 'Status', value: 'Planned / Rebuild' },
      { label: 'Focus', value: 'Healthcare Operations' },
      { label: 'Type', value: 'Analytics Platform' },
    ],

    overview: {
      eyebrow: 'Overview',
      title: 'What this project is',
      body: 'This project models how operational healthcare data can be transformed into a usable analytics system. It focuses on reporting workflows, structured metrics, and dashboard views that support visibility into scheduling, volume, throughput, and service performance.',
    },

    problem: {
      eyebrow: 'Problem',
      title: 'Why this project exists',
      body: 'Operational healthcare data is often spread across disconnected systems, making it difficult to understand service patterns and workflow bottlenecks. The goal of this project was to design a system that could centralize selected operational signals and surface them through clear reporting interfaces.',
    },

    goals: {
      eyebrow: 'Goals',
      title: 'Project goals',
      list: [
        'Model healthcare operations data in a structured relational schema',
        'Create SQL-driven reporting views for common operational metrics',
        'Build dashboard interfaces that make system performance easier to interpret',
        'Demonstrate a maintainable pattern for analytics workflows and reporting systems',
      ],
    },

    system: {
      eyebrow: 'System',
      title: 'System architecture',
      body: 'The platform separates data ingestion, storage, aggregation, and presentation so operational metrics can be analyzed without tightly coupling the reporting layer to the raw source structure.',
      architecture: [
        { label: 'Operational source data' },
        { label: 'Ingestion / transformation layer' },
        { label: 'Validation / metric mapping' },
        { label: 'PostgreSQL' },
        { label: 'Reporting queries' },
        { label: 'Dashboard UI' },
      ],
    },

    technology: {
      eyebrow: 'Stack',
      title: 'Technology used',
      list: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'SQL', 'Tailwind CSS'],
    },

    features: {
      eyebrow: 'Features',
      title: 'Key capabilities',
      list: [
        'Structured operational metrics modeling',
        'SQL-based aggregation for reporting views',
        'Dashboard summaries for service and workflow performance',
        'Role-aware reporting interface patterns',
        'Clear separation between source data and analytics logic',
      ],
    },

    technicalDecisions: {
      eyebrow: 'Technical Decisions',
      title: 'Important implementation choices',
      decisions: [
        {
          title: 'Why a relational data model',
          body: 'Healthcare operations metrics often depend on clear relationships between entities like appointments, providers, services, and locations, making a relational schema a strong fit.',
        },
        {
          title: 'Why SQL-driven analytics',
          body: 'SQL made it possible to express grouped metrics, trend summaries, and reporting views directly and transparently without adding unnecessary processing complexity.',
        },
        {
          title: 'Why separate metric logic from presentation',
          body: 'Keeping transformation and reporting logic distinct from the UI makes the system easier to maintain, validate, and extend as reporting needs change.',
        },
      ],
    },

    constraints: {
      eyebrow: 'Constraints',
      title: 'Challenges and limitations',
      body: 'A major challenge in operational reporting is deciding which metrics are meaningful without overcomplicating the system. This project intentionally focuses on a narrower set of modeled workflows so the architecture remains understandable and extensible.',
    },

    outcome: {
      eyebrow: 'Outcome',
      title: 'What this project demonstrates',
      body: 'This project demonstrates how backend data modeling, SQL reporting, and frontend dashboard design can work together to create usable operational analytics systems in healthcare-adjacent contexts.',
    },

    nextSteps: {
      eyebrow: 'Next Steps',
      title: 'Future improvements',
      list: [
        'Expand metric coverage for scheduling and throughput analysis',
        'Add comparative reporting views across services or locations',
        'Introduce exportable reporting summaries',
        'Refine architecture documentation and dashboard interaction patterns',
      ],
    },
  },
  // ENVIRONMENTAL MONITORING SYSTEM
  {
    slug: 'environmental-monitoring-system',
    title: 'Environmental Monitoring System',
    summary:
      'A dashboard-oriented monitoring system for structuring, visualizing, and interpreting environmental sensor data across time-based reporting views.',
    category: 'Data & Analytics Systems',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'SQL'],
    backHref: '/projects',
    repoHref: '',

    meta: [
      { label: 'Role', value: 'Solo Engineer' },
      { label: 'Status', value: 'Rebuild' },
      { label: 'Focus', value: 'Monitoring & Reporting' },
      { label: 'Type', value: 'Analytics Dashboard' },
    ],

    overview: {
      eyebrow: 'Overview',
      title: 'What this project is',
      body: 'This project explores how environmental sensor data can be modeled and presented through a dashboard system. It focuses on time-series visibility, trend reporting, and structured presentation of monitoring data for practical interpretation.',
    },

    problem: {
      eyebrow: 'Problem',
      title: 'Why this project exists',
      body: 'Raw monitoring data is often noisy, repetitive, and difficult to interpret without a reporting layer. The goal of this project was to transform incoming environmental signals into a cleaner, queryable system that supports trend visibility and threshold awareness.',
    },

    goals: {
      eyebrow: 'Goals',
      title: 'Project goals',
      list: [
        'Structure environmental readings in a queryable database schema',
        'Create dashboard views for trend inspection and reporting',
        'Support threshold-based interpretation through clear visual patterns',
        'Demonstrate maintainable handling of time-based monitoring data',
      ],
    },

    system: {
      eyebrow: 'System',
      title: 'System architecture',
      body: 'The system organizes incoming readings into a structured data layer, then exposes analytics and trend views through a dashboard interface designed for readability and quick interpretation.',
      architecture: [
        { label: 'Sensor / source data' },
        { label: 'Ingestion pipeline' },
        { label: 'Normalization / threshold mapping' },
        { label: 'PostgreSQL' },
        { label: 'Analytics queries' },
        { label: 'Dashboard UI' },
      ],
    },

    technology: {
      eyebrow: 'Stack',
      title: 'Technology used',
      list: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'SQL', 'Tailwind CSS'],
    },

    features: {
      eyebrow: 'Features',
      title: 'Key capabilities',
      list: [
        'Time-based data ingestion and storage',
        'Trend visualization for environmental signals',
        'Threshold-aware reporting patterns',
        'Dashboard summaries for recent and historical views',
        'Structured query layer for aggregated analysis',
      ],
    },

    technicalDecisions: {
      eyebrow: 'Technical Decisions',
      title: 'Important implementation choices',
      decisions: [
        {
          title: 'Why PostgreSQL for monitoring data',
          body: 'A relational approach made it easier to structure readings, timestamps, and reporting relationships while still supporting aggregation and trend analysis.',
        },
        {
          title: 'Why dashboard-first presentation',
          body: 'Monitoring systems are most useful when raw readings are translated into understandable summaries, so the project emphasizes visualization and interpretation rather than raw log output alone.',
        },
        {
          title: 'Why threshold logic is separated',
          body: 'Separating threshold logic from display components keeps alerting or emphasis logic easier to update without rewriting the UI layer.',
        },
      ],
    },

    constraints: {
      eyebrow: 'Constraints',
      title: 'Challenges and limitations',
      body: 'Monitoring systems can become visually noisy if every reading is treated with equal emphasis. A key challenge here was designing reporting patterns that highlight meaningful variation without overwhelming the interface.',
    },

    outcome: {
      eyebrow: 'Outcome',
      title: 'What this project demonstrates',
      body: 'This project demonstrates practical skills in time-based data modeling, dashboard-oriented reporting, and translating raw monitoring signals into a more usable system.',
    },

    nextSteps: {
      eyebrow: 'Next Steps',
      title: 'Future improvements',
      list: [
        'Add richer filtering across time windows and sensor groups',
        'Refine threshold visualization and alert states',
        'Expand query optimization for larger datasets',
        'Add architecture diagrams and deeper system documentation',
      ],
    },
  },
  // RESOURCE ALLOCATION SYSTEM
  {
    slug: 'resource-allocation-system',
    title: 'Resource Allocation System',
    summary:
      'A role-based scheduling and coordination platform designed to model operational workflows, manage constraints, and improve visibility into resource planning.',
    category: 'Operational Systems',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
    backHref: '/projects',
    repoHref: '',

    meta: [
      { label: 'Role', value: 'Solo Engineer' },
      { label: 'Status', value: 'In Progress' },
      { label: 'Focus', value: 'Workflow Coordination' },
      { label: 'Type', value: 'Operational System' },
    ],

    overview: {
      eyebrow: 'Overview',
      title: 'What this project is',
      body: 'This project models how scheduling and resource coordination can be handled through a structured system instead of ad hoc manual processes. It focuses on role-based workflows, allocation visibility, and database-backed scheduling logic.',
    },

    problem: {
      eyebrow: 'Problem',
      title: 'Why this project exists',
      body: 'Resource planning often becomes difficult when assignments, timing, and availability are managed across scattered tools or informal processes. The goal of this project was to design a system that creates clearer workflow structure around allocation and scheduling decisions.',
    },

    goals: {
      eyebrow: 'Goals',
      title: 'Project goals',
      list: [
        'Model allocation and scheduling logic in a structured database schema',
        'Support role-based workflows for managing assignments',
        'Reduce ambiguity around availability and planning decisions',
        'Create a maintainable full-stack pattern for operational systems',
      ],
    },

    system: {
      eyebrow: 'System',
      title: 'System architecture',
      body: 'The system separates scheduling logic, stored records, and user-facing interfaces so allocation workflows can remain consistent and easier to reason about as complexity grows.',
      architecture: [
        { label: 'User input / assignments' },
        { label: 'Validation rules' },
        { label: 'Scheduling logic' },
        { label: 'PostgreSQL' },
        { label: 'API routes' },
        { label: 'Planning interface' },
      ],
    },

    technology: {
      eyebrow: 'Stack',
      title: 'Technology used',
      list: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    },

    features: {
      eyebrow: 'Features',
      title: 'Key capabilities',
      list: [
        'Role-based scheduling flows',
        'Structured assignment and availability records',
        'Conflict-aware operational logic',
        'Database-backed planning interface',
        'Usable views for managing workflow coordination',
      ],
    },

    technicalDecisions: {
      eyebrow: 'Technical Decisions',
      title: 'Important implementation choices',
      decisions: [
        {
          title: 'Why role-based workflows',
          body: 'Resource systems often depend on different levels of responsibility and visibility, so role-based views help keep decision-making and data access aligned.',
        },
        {
          title: 'Why a relational model',
          body: 'Scheduling systems involve structured relationships between people, roles, assignments, and time windows, making relational data modeling a strong fit.',
        },
        {
          title: 'Why explicit validation rules',
          body: 'Scheduling conflicts and ambiguous assignments are easier to manage when validation rules are handled intentionally instead of relying on UI assumptions alone.',
        },
      ],
    },

    constraints: {
      eyebrow: 'Constraints',
      title: 'Challenges and limitations',
      body: 'Operational systems can become complex quickly as edge cases around availability, conflicts, and reassignment increase. This project focuses on a narrower workflow model first so the architecture can stay clear and extensible.',
    },

    outcome: {
      eyebrow: 'Outcome',
      title: 'What this project demonstrates',
      body: 'This project demonstrates systems thinking, relational data modeling, and the design of full-stack tools that support real-world workflow coordination rather than isolated interface interactions.',
    },

    nextSteps: {
      eyebrow: 'Next Steps',
      title: 'Future improvements',
      list: [
        'Expand conflict-handling logic for more edge cases',
        'Add timeline and calendar-oriented planning views',
        'Improve auditability for allocation changes',
        'Refine documentation around scheduling rules and constraints',
      ],
    },
  },
  // PERIODIC TABLES RESERVATION SYSTEM
  {
    slug: 'periodic-tables-reservation-system',
    title: 'Periodic Tables Reservation System',
    summary:
      'A full-stack reservation management application built to support structured booking workflows, table coordination, and operational visibility for restaurant service.',
    category: 'Full-Stack Applications',
    stack: ['React', 'Express.js', 'PostgreSQL', 'Knex.js'],
    backHref: '/projects',
    repoHref: '',
    demoHref: '',

    meta: [
      { label: 'Role', value: 'Solo Engineer' },
      { label: 'Status', value: 'Completed / Rebuild' },
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
  // AMP TICKETS ADD ON FLOW
  {
    slug: 'amp-ticket-add-on-flow',
    title: 'AMP Ticket Add-On Flow',
    summary:
      'A production feature designed to improve add-on visibility and checkout usability within an existing ticketing ecosystem.',
    category: 'Full-Stack Applications',
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
  // ART OF WINE COMPANION APP
  {
    slug: 'art-of-wine-companion-app',
    title: 'Art of Wine Companion App',
    summary:
      'A mobile-first event companion app designed to support vendor discovery, event navigation, and reusable UI patterns for future event experiences.',
    category: 'Full-Stack Applications',
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
