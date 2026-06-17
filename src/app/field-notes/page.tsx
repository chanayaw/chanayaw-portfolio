import Link from 'next/link';
import PageHeader from '@/src/components/shared/PageHeader';
import { Card, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';

const noteCategories = [
  {
    title: 'Digital Health Products',
    description:
      'Notes on patient-centered tools, dashboards, prototypes, product decisions, and digital care experiences.',
    tags: ['Products', 'Dashboards', 'Patient Tools'],
  },
  {
    title: 'Biomedical Informatics',
    description:
      'Reflections on health data, clinical workflows, decision support, interoperability, and informatics concepts.',
    tags: ['Health Data', 'Workflows', 'Decision Support'],
  },
  {
    title: "Women's Health Equity",
    description:
      'Questions and essays on earlier detection, care coordination, patient voice, and systems that better serve women.',
    tags: ['Equity', 'Care Gaps', "Women's Health"],
  },
  {
    title: 'Software + Systems',
    description:
      'Technical reflections on architecture, APIs, workflows, product engineering, and maintainable tools.',
    tags: ['Engineering', 'Systems', 'APIs'],
  },
  {
    title: 'Academic Becoming',
    description:
      'Notes from Health Services Management studies and preparation for future biomedical informatics work.',
    tags: ['School', 'Study Notes', 'Research'],
  },
];

const plannedNotes = [
  {
    title: "Why I'm Starting The Informatics Diary",
    description:
      "A first essay introducing the archive, my direction, and why I'm writing about software, health systems, and women's health equity.",
    status: 'Planned',
  },
  {
    title: 'Health Services Management Is My Foundation, Not My Final Stop',
    description:
      'A reflection on how healthcare operations, systems thinking, and management connect to digital health and informatics.',
    status: 'Planned',
  },
  {
    title: 'What I Mean by Digital Health Product Development',
    description:
      'A field note defining the kind of tools, systems, dashboards, and patient-centered products I want to build.',
    status: 'Planned',
  },
];

export default function FieldNotesPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="Field Notes"
        heading="Field notes on digital health, software, data, and women's health equity"
        description={
          <>
            The Informatics Diary is my writing archive for essays, reflections, learning notes,
            research questions, and product thinking at the intersection of health systems and
            technology.
          </>
        }
        supportingText={
          <>
            This space replaces the narrower Health Data page. It gives me room to write about
            biomedical informatics, digital health products, software systems, women&apos;s health
            equity, and what I&apos;m learning along the way.
          </>
        }
        actions={
          <>
            <PrimaryCTA link="#" label="Visit The Informatics Diary" status="disabled" />
            <SecondaryCTA link="/projects" label="View Projects" />
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="max-w-3xl space-y-4">
          <SectionLabel>Writing Direction</SectionLabel>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A thinking space for the systems I&apos;m studying and the tools I want to build
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            My field notes are where I connect what I&apos;m learning, building, questioning, and
            researching. Some notes will be technical. Some will be academic. Some will be personal
            reflections on why women&apos;s health equity matters in digital health and healthcare
            systems.
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
              shape.
            </p>
          </div>

          <ChipRegBorder>Launching Soon</ChipRegBorder>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
                Writing, projects, and research questions belong together
              </h2>

              <p className="text-muted text-base leading-relaxed">
                The field notes will connect back to projects, case studies, school notes, and
                research questions as I continue building toward digital health and biomedical
                informatics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <PrimaryCTA link="/projects" label="View Projects" />
              <Link
                href="/about"
                className="text-link inline-flex items-center text-sm font-semibold transition hover:underline md:text-base"
              >
                Read About →
              </Link>
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
