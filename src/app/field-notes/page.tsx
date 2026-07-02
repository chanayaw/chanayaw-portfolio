import Link from 'next/link';
import PageHeader from '@/src/components/shared/PageHeader';
import { Card, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';

const noteCategories = [
  {
    title: 'Patient-Centered Digital Health',
    description:
      'Notes on digital health tools, patient-facing systems, health apps, portals, trackers, and product ideas that make care easier to understand, navigate, and act on.',
    tags: [
      'Digital Health',
      'Patient-Centered Care',
      'Health Tech',
      'Patient Tools',
      'Care Navigation',
      'Product Thinking',
    ],
  },
  {
    title: 'Biomedical & Clinical Informatics',
    description:
      'Notes on biomedical informatics, clinical workflows, EHR systems, health information exchange, clinical decision support concepts, and the role of data in healthcare delivery.',
    tags: [
      'Biomedical Informatics',
      'Clinical Informatics',
      'EHR',
      'FHIR',
      'Clinical Decision Support',
      'Health Systems',
    ],
  },
  {
    title: "Women's Health Equity Advocacy",
    description:
      "Notes on health disparities, patient dismissal, medical bias, care access, whole-body women's health, and advocacy for underserved women who are often unheard or diagnosed late.",
    tags: [
      "Women's Health Equity",
      'Advocacy',
      'Health Disparities',
      'Patient Dismissal',
      'Medical Bias',
      'Underserved Women',
    ],
  },
  {
    title: 'Health Data, Analytics & Dashboards',
    description:
      'Notes on healthcare data analytics, dashboards, metrics, data storytelling, public health datasets, quality measures, and how data can reveal care gaps and inequities.',
    tags: [
      'Health Data',
      'Healthcare Analytics',
      'Dashboards',
      'Data Storytelling',
      'Quality Measures',
      'Care Gaps',
    ],
  },
  {
    title: 'Early Detection & Precision Health',
    description:
      'Notes on delayed diagnosis, screening gaps, risk factors, patient-reported symptoms, precision health, and systems that can help women be heard and evaluated earlier.',
    tags: [
      'Early Detection',
      'Delayed Diagnosis',
      'Precision Health',
      'Screening Gaps',
      'Risk Stratification',
      'Patient-Reported Symptoms',
    ],
  },
  {
    title: 'Technical Foundations for Digital Health',
    description:
      'Notes on the technical skills behind digital health work, including software development, APIs, databases, accessibility, data workflows, documentation, and system design.',
    tags: [
      'Software Development',
      'APIs',
      'Databases',
      'Accessibility',
      'System Design',
      'Technical Foundations',
    ],
  },
  {
    title: 'Academic Becoming',
    description:
      'Notes from the journey through Health Services Management, health information, data analytics, biomedical informatics preparation, research habits, and student development.',
    tags: [
      'Health Services Management',
      'Student Journey',
      'Academic Writing',
      'Research Skills',
      'Study Systems',
      'Biomedical Informatics Prep',
    ],
  },
];

const plannedNotes = [
  {
    title: "Why I'm Starting The Informatics Diary",
    description:
      "A first essay introducing this archive, my direction, and why I'm writing about digital health technology, women's health equity, informatics, and health systems.",
    status: 'Planned',
  },
  {
    title: "Why Women's Health Equity Advocacy Is My Foundation",
    description:
      'A field note on centering underserved women, patient dismissal, delayed diagnosis, care access, and the systems that require more attention.',
    status: 'Planned',
  },
  {
    title: 'Why Health Services Management Is My Starting Point',
    description:
      'A reflection on how healthcare operations, health information, data analytics, and systems thinking connect to digital health technology and informatics.',
    status: 'Planned',
  },
  {
    title: 'What Digital Health Technology Means to Me',
    description:
      'A field note defining the digital health tools, data systems, patient education platforms, care navigation concepts, and informatics-aligned products I want to build.',
    status: 'Planned',
  },
];

export default function FieldNotesPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="The Informatics Diary"
        heading="Field notes on women’s health equity, informatics, digital health, and patient-centered care."
        description={
          <>
            This is where I document what I&apos;m studying, building, questioning, and researching
            as a Health Services Management student and Digital Health Technologist in training.
          </>
        }
        supportingText={
          <>
            The Informatics Diary is my field-note archive for connecting advocacy, research, health
            data, informatics, and patient-centered digital tools.
          </>
        }
        actions={
          <>
            <PrimaryCTA link="#" label="Read on Substack" status="disabled" />
            <SecondaryCTA link="/projects" label="View Projects" />
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="max-w-4xl space-y-4">
          <SectionLabel>Writing Direction</SectionLabel>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A field-note archive for the questions, systems, and tools shaping my work
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            The Informatics Diary is where I connect technical learning, health systems study,
            research questions, and women&apos;s health equity advocacy. Some entries will stand
            alone as equity and advocacy reflections. Others will explore how digital health
            technology, health data, patient education, and care navigation tools can help address
            real gaps in healthcare.
          </p>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            The advocacy and research fuel the technology, not the other way around.
          </p>
        </div>
      </section>

      <section className="mt-20 space-y-4">
        <SectionLabel>Categories</SectionLabel>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {noteCategories.map((category) => (
            <Card key={category.title}>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {category.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed md:text-base">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <ChipThinBorder key={tag}>{tag}</ChipThinBorder>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>Coming Soon</SectionLabel>

            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              First field notes
            </h2>

            <p className="text-muted text-base leading-relaxed md:text-lg">
              These are the first essays and notes I plan to publish as The Informatics Diary takes
              shape across my portfolio and Substack.
            </p>

            <Link
              href="https://theinformaticsdiary.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex text-sm font-semibold transition hover:underline md:text-base"
            >
              Visit The Informatics Diary on Substack →
            </Link>
          </div>

          <ChipRegBorder>Launching Soon</ChipRegBorder>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {plannedNotes.map((note) => (
            <Card key={note.title}>
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <div className="mb-4">
                    <ChipThinBorder>{note.status}</ChipThinBorder>
                  </div>

                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {note.title}
                  </h3>

                  <p className="text-muted mt-3 text-sm leading-relaxed md:text-base">
                    {note.description}
                  </p>
                </div>

                <p className="text-subtle text-sm">Draft in progress</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <CardWithGlow>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <SectionLabel>Connected Work</SectionLabel>

              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                Advocacy, research, projects, and academic questions belong together
              </h2>

              <p className="text-muted text-base leading-relaxed">
                The field notes will connect back to projects, case studies, school notes, research questions, and advocacy work as I continue building toward digital health technology, biomedical informatics, and women&apos;s health equity advocacy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-4">
                <PrimaryCTA link="/projects" label="View Projects" />

                <Link
                  href="https://substack.com/@chanayaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link inline-flex items-center text-sm font-semibold transition hover:underline md:text-base"
                >
                  Read on Substack →
                </Link>
              </div>
            </div>
          </div>
        </CardWithGlow>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
      {children}
    </p>
  );
}
