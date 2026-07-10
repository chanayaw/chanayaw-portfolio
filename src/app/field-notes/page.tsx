import Link from 'next/link';
import PageHeader from '@/src/components/shared/PageHeader';
import { Card, CardWithGlow, SoftWashCard } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder, ChipMono } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';
import { SectionLabel } from '@/src/components/projects/SectionLabel';

const noteCategories = [
  {
    title: 'Women’s Health Equity',
    description:
      'Field notes on health disparities, patient dismissal, medical bias, delayed diagnosis, care access, and advocacy for underserved women who are often unheard or left without clear information.',
    tags: [
      'Women’s Health Equity',
      'Patient Dismissal',
      'Medical Bias',
      'Delayed Diagnosis',
      'Care Access',
      'Underserved Women',
    ],
  },
  {
    title: 'Health Data + Care Gaps',
    description:
      'Notes on healthcare data analytics, dashboards, public datasets, quality measures, data storytelling, and how data can reveal patterns in care access, follow-up, and early detection.',
    tags: [
      'Health Data',
      'Care Gaps',
      'Dashboards',
      'Data Storytelling',
      'Quality Measures',
      'Public Health Data',
    ],
  },
  {
    title: 'Informatics + Health Systems',
    description:
      'Notes on biomedical informatics, clinical workflows, health information systems, EHRs, FHIR, clinical decision support concepts, and the role of structured information in care.',
    tags: [
      'Biomedical Informatics',
      'Clinical Informatics',
      'EHR',
      'FHIR',
      'Health Systems',
      'Clinical Decision Support',
    ],
  },
  {
    title: 'Patient Education + Care Navigation',
    description:
      'Notes on plain-language health resources, patient education, appointment preparation, follow-up questions, symptom tracking, care navigation, and tools that help patients be heard earlier.',
    tags: [
      'Patient Education',
      'Health Literacy',
      'Care Navigation',
      'Appointment Prep',
      'Follow-Up',
      'Advocacy Tools',
    ],
  },
  {
    title: 'Early Detection + Precision Health',
    description:
      'Notes on screening gaps, risk factors, patient-reported symptoms, delayed diagnosis, precision health, and systems that can support earlier recognition and clearer evaluation.',
    tags: [
      'Early Detection',
      'Precision Health',
      'Screening Gaps',
      'Risk Factors',
      'Patient-Reported Symptoms',
      'Earlier Care',
    ],
  },
  {
    title: 'Technical Foundations',
    description:
      'Notes on the technical skills behind digital health work, including software development, APIs, databases, accessibility, documentation, dashboards, system design, and data workflows.',
    tags: [
      'Software Development',
      'APIs',
      'Databases',
      'Accessibility',
      'Documentation',
      'System Design',
    ],
  },
  {
    title: 'Academic Becoming',
    description:
      'Notes from the journey through Health Services Management, health information, data analytics, biomedical informatics preparation, research habits, student development, and professional identity.',
    tags: [
      'Health Services Management',
      'Student Journey',
      'Research Skills',
      'Study Systems',
      'Academic Writing',
      'Professional Growth',
    ],
  },
];

const plannedNotes = [
  {
    label: 'FIELD NOTE 001',
    title: 'Why I’m Building Toward Women’s Health Equity Informatics',
    description:
      'A first essay introducing this archive, my direction, and why advocacy, research, health data, patient education, and digital health tools belong together.',
    status: 'Draft',
    link: '/',
  },
  {
    label: 'FIELD NOTE 002',
    title: 'Early Detection Is a Women’s Health Equity Issue',
    description:
      'A field note on delayed diagnosis, screening gaps, patient dismissal, care access, and why being heard earlier can change the care journey.',
    status: 'Draft',
    link: '/',
  },
  {
    label: 'FIELD NOTE 003',
    title: 'What Data Can Show, and What It Can Miss, in Women’s Health Equity',
    description:
      'A reflection on healthcare data, limitations, bias, missing context, patient experience, and why data storytelling needs an equity lens.',
    status: 'Draft',
    link: '/',
  },
  {
    label: 'FIELD NOTE 004',
    title: 'Patient Education Is a Digital Health Tool',
    description:
      'A field note on plain-language resources, health literacy, care navigation, appointment preparation, and why education can be part of digital health.',
    status: 'Draft',
    link: '/',
  },
];

const diarySystem = [
  {
    label: 'Study',
    title: 'What I’m learning',
    body: 'Class notes, research reading, technical concepts, and informatics foundations become field notes.',
  },
  {
    label: 'Research',
    title: 'What I’m questioning',
    body: 'Questions about care gaps, patient dismissal, delayed diagnosis, and health systems become essays and data stories.',
  },
  {
    label: 'Build',
    title: 'What I’m translating',
    body: 'Ideas become dashboards, patient education resources, workflow concepts, and patient-centered digital tools.',
  },
];

export default function FieldNotesPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-12 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="The Informatics Diary"
        heading="Field notes on women’s health equity, informatics, digital health, and patient-centered care."
        description={
          <>
            The Informatics Diary is my soft academic field-note archive for connecting advocacy,
            research, health data, patient education, care navigation, informatics, and
            patient-centered digital tools.
          </>
        }
        supportingText={
          <>
            This is where I document what I’m studying, building, questioning, and translating as a
            Health Services Management student and Digital Health Technologist in training.
          </>
        }
        actions={
          <>
            <PrimaryCTA link="https://theinformaticsdiary.substack.com/" label="Read on Substack" />
            <SecondaryCTA link="/projects" label="View Projects" />
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <SoftWashCard>
          <div className="grid gap-8 pb-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-3">
              <SectionLabel>Writing Direction</SectionLabel>

              <h2 className="font-heading text-primary text-4xl leading-tight font-normal tracking-tight md:text-5xl">
                Where advocacy, research, and digital health meet.
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted text-base leading-relaxed md:text-lg">
                Some entries will stand alone as equity and advocacy reflections. Others will
                explore how digital health, health data, patient education, care navigation, and
                informatics-aligned tools can help address real gaps in healthcare.
              </p>

              <p className="font-heading text-primary text-2xl leading-tight">
                The advocacy and research fuel the technology, not the other way around.
              </p>
            </div>
          </div>
        </SoftWashCard>
      </section>

      <section className="mt-20 space-y-6">
        <div className="max-w-3xl space-y-3">
          <SectionLabel>Diary System</SectionLabel>

          <h2 className="font-heading text-primary text-3xl leading-tight font-normal tracking-tight md:text-5xl">
            A writing system for studying, researching, and building in public
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            The diary is not separate from the portfolio. It is the thinking layer behind the
            projects, the place where research questions, technical notes, and patient-centered
            ideas become more structured.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {diarySystem.map((item) => (
            <Card key={item.label}>
              <div className="space-y-3">
                <ChipMono>{item.label}</ChipMono>

                <h3 className="font-heading text-primary text-2xl leading-tight font-normal">
                  {item.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed md:text-base">{item.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20 space-y-6">
        <div className="max-w-3xl space-y-3">
          <SectionLabel>Categories</SectionLabel>

          <h2 className="font-heading text-primary text-3xl leading-tight font-normal tracking-tight md:text-5xl">
            The themes I’m tracking
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            These categories help organize the archive across advocacy, informatics, health data,
            care navigation, technical foundations, and academic growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {noteCategories.map((category) => (
            <Card key={category.title}>
              <div className="space-y-4">
                <h3 className="font-heading text-primary text-2xl leading-tight font-normal">
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

            <h2 className="font-heading text-primary text-3xl leading-tight font-normal tracking-tight md:text-5xl">
              First field notes
            </h2>

            <p className="text-muted text-base leading-relaxed md:text-lg">
              These are the first essays I plan to publish as The Informatics Diary takes shape
              across my portfolio and Substack.
            </p>

            <Link
              href="https://theinformaticsdiary.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex text-sm font-bold transition hover:underline hover:underline-offset-4 md:text-base"
            >
              Visit The Informatics Diary on Substack →
            </Link>
          </div>

          <div>
            <ChipRegBorder>Launching Soon</ChipRegBorder>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {plannedNotes.map((note) => (
            <Card key={note.title}>
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <ChipMono>{note.label}</ChipMono>

                  <h3 className="font-heading text-primary mt-4 text-2xl leading-tight font-normal">
                    {note.title}
                  </h3>

                  <p className="text-muted mt-3 text-sm leading-relaxed md:text-base">
                    {note.description}
                  </p>
                </div>

                {note.status === 'Draft' ? (
                  <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                    Draft in progress
                  </p>
                ) : (
                  <a
                    href={note.link}
                    className="text-link text-sm font-bold transition hover:underline hover:underline-offset-4"
                  >
                    Read more
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <CardWithGlow>
          <div className="flex flex-col gap-8 lg:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <SectionLabel>Connected Work</SectionLabel>

              <h2 className="font-heading text-primary text-3xl leading-tight font-normal md:text-4xl">
                Advocacy, research, projects, and academic questions belong together.
              </h2>

              <p className="text-muted text-base leading-relaxed">
                The field notes connect back to projects, case studies, school notes, research
                questions, and advocacy work as I continue building toward Women’s Health Equity
                Advocacy & Informatics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <PrimaryCTA link="/projects" label="View Projects" />

              <Link
                href="https://theinformaticsdiary.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ring-brand border-default bg-surface text-foreground hover:border-strong hover:bg-surface-soft shadow-card inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-bold tracking-wide transition hover:-translate-y-0.5 md:text-base"
              >
                Read on Substack →
              </Link>
            </div>
          </div>
        </CardWithGlow>
      </section>
    </main>
  );
}
