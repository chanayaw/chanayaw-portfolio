import Link from 'next/link';
import PageHeader from '@/src/components/shared/PageHeader';
import { Card, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';

const noteCategories = [
  {
    title: 'Digital Health Technology',
    description:
      'Notes on digital health tools, patient-centered product concepts, care workflows, and technology that supports clearer health information.',
    tags: ['Digital Health', 'Product Thinking', 'Care Tools'],
  },
  {
    title: 'Biomedical Informatics',
    description:
      'Reflections on health data, clinical workflows, decision support, interoperability, EHR systems, and informatics concepts.',
    tags: ['Health Data', 'Workflows', 'Decision Support'],
  },
  {
    title: "Women's Health Equity Advocacy",
    description:
      'Research-informed writing on underrepresented women, health disparities, patient dismissal, delayed diagnosis, care gaps, patient education, and systems that shape unequal outcomes.',
    tags: ['Equity Advocacy', 'Disparities', 'Care Gaps'],
  },
  {
    title: 'Health Data + Analytics',
    description:
      'Field notes on health information management, data analytics, structured records, dashboards, and data-informed decision-making.',
    tags: ['Health Data', 'Analytics', 'HIM'],
  },
  {
    title: 'Technical Foundations for Health Tech',
    description:
      'Technical reflections on forms, accessibility, APIs, databases, workflows, documentation, and full-stack foundations through a health-tech lens.',
    tags: ['Engineering', 'Systems', 'APIs'],
  },
  {
    title: 'Academic Becoming',
    description:
      'Notes from Health Services Management studies, certificate coursework, research questions, and preparation for future biomedical informatics work.',
    tags: ['School', 'Study Notes', 'Research'],
  },
];

const plannedNotes = [
  {
    title: "Why I'm Starting The Informatics Diary",
    description:
      "A first essay introducing this archive, my direction, and why I'm writing about digital health technology, women's health advocacy, informatics, and health systems.",
    status: 'Planned',
  },
  {
    title: "Why My Focus Is Women's Health Equity Advocacy",
    description:
      'A field note on focusing my advocacy around underrepresented and voiceless women, health disparities, patient dismissal, delayed diagnosis, care access, and systems that require more attention.',
    status: 'Planned',
  },
  {
    title: 'Health Services Management Is My Foundation, Not My Final Stop',
    description:
      'A reflection on how healthcare operations, health information, data analytics, and systems thinking connect to digital health technology and informatics.',
    status: 'Planned',
  },
  {
    title: 'What I Mean by Digital Health Technology',
    description:
      'A field note defining the kinds of health-tech tools, data systems, patient education platforms, care navigation concepts, and informatics-aligned products I want to build.',
    status: 'Planned',
  },
];

export default function FieldNotesPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="The Informatics Diary"
        heading="Field notes on digital health technology, biomedical informatics, women's health equity advocacy, health data, patient education, care navigation, and health systems."
        description={
          <>
            This is where I document what I&apos;m studying, building, questioning, and researching
            as I become a Digital Health Technologist and women&apos;s health equity advocate.
          </>
        }
        supportingText={
          <>
            Some notes will be technical. Some will focus on women&apos;s health equity advocacy,
            health disparities, patient education, care navigation, and whole-body health concerns
            affecting underrepresented women.
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
            A field-note archive for the systems I&apos;m studying, the questions I&apos;m asking,
            and the tools I want to build
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            The Informatics Diary is where I connect technical learning, health systems study,
            research questions, and women&apos;s health equity advocacy. Some entries will stand
            alone as equity advocacy or research reflections. Others will explore how digital health
            technology, health data, patient education, and care navigation tools might help address
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
                Equity advocacy, research, health-tech projects, and academic questions belong
                together
              </h2>

              <p className="text-muted text-base leading-relaxed">
                The field notes will connect back to projects, case studies, school notes, research
                questions, and advocacy work as I continue building toward digital health
                technology, biomedical informatics, and women&apos;s health equity advocacy.
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
