import PageHeader from '@/src/components/shared/PageHeader';
import { Card, GlassCard, CardWithGlow, SoftWashCard } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder, ChipMono } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';
import { SectionLabel } from '@/src/components/projects/SectionLabel';

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-12 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="About Chanaya W"
        heading="Building toward Women’s Health Equity Advocacy & Informatics"
        description={
          <>
            I’m Chanaya W, a software developer, Health Services Management student, and Digital
            Health Technologist in training focused on health data, informatics, patient education,
            care navigation, early detection, delayed diagnosis, and patient-centered digital tools.
          </>
        }
        supportingText={
          <>
            My advocacy is not separate from my professional path. It is the reason I’m moving into
            digital health and informatics. The advocacy and research fuel the technology, not the
            other way around.
          </>
        }
        actions={
          <>
            <PrimaryCTA link="/projects" label="View Projects" />
            <SecondaryCTA link="/field-notes" label="Read The Diary" />
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="max-w-3xl space-y-5">
              <SectionLabel>Background</SectionLabel>

              <h2 className="font-heading text-primary text-4xl leading-tight font-normal tracking-tight md:text-5xl">
                Software, health systems, and advocacy-centered informatics
              </h2>

              <div className="text-muted space-y-4 text-base leading-relaxed md:text-lg">
                <p>
                  My background is in full-stack software engineering, with experience building
                  applications in TypeScript, React, Next.js, Node.js, and SQL-backed systems. I’m
                  now applying that foundation toward healthcare data, informatics, patient
                  education, care navigation, early detection, delayed diagnosis, and
                  patient-centered digital health tools.
                </p>

                <p>
                  Most recently, I served as the sole full-stack developer at Walton Arts Center and
                  Walmart AMP, where I designed, built, and maintained production applications used
                  by staff and the public. That experience strengthened how I think about technical
                  ownership, usability, accessibility, operational reliability, and building within
                  real constraints.
                </p>

                <p>
                  My long-term direction is Women’s Health Equity Advocacy & Informatics, with a
                  focus on helping underserved women be heard earlier, diagnosed sooner, and cared
                  for more precisely through data, research, digital health systems, and
                  patient-centered tools.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard>
              <div className="space-y-6">
                <InfoBlock
                  label="Current Direction"
                  body="Women’s Health Equity Advocacy & Informatics, early detection, delayed diagnosis, precision health, health data, patient education, care navigation, and patient-centered digital tools."
                />

                <div>
                  <SectionLabel>Core Strengths</SectionLabel>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <ChipThinBorder>Women’s Health Equity</ChipThinBorder>
                    <ChipThinBorder>Health Data</ChipThinBorder>
                    <ChipThinBorder>Patient Education</ChipThinBorder>
                    <ChipThinBorder>Care Navigation</ChipThinBorder>
                    <ChipThinBorder>Research Translation</ChipThinBorder>
                    <ChipThinBorder>Accessibility</ChipThinBorder>
                    <ChipThinBorder>Full-Stack Development</ChipThinBorder>
                    <ChipThinBorder>API Design</ChipThinBorder>
                  </div>
                </div>

                <InfoBlock
                  label="Academic Path"
                  body="BS in Health Services Management at UMGC with certificate pathways in Health Information Management & Data Analytics and Data Analytics."
                />

                <InfoBlock
                  label="Target Direction"
                  body="Healthcare data analytics, health information, EHR workflows, clinical and biomedical informatics, digital health product work, patient education, care navigation, health equity, implementation, and healthcare systems improvement."
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <SoftWashCard>
          <div className="grid gap-8 pb-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-3">
              <SectionLabel>Equity Lens</SectionLabel>

              <h2 className="font-heading text-primary text-4xl leading-tight font-normal tracking-tight md:text-5xl">
                Centering underserved women who are too often dismissed or diagnosed late
              </h2>
            </div>

            <div className="text-muted space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                I’m especially interested in underrepresented women who are dismissed, diagnosed
                late, undertreated, or left without clear information. My work centers whole-body
                women’s health, including reproductive, endocrine, metabolic, cardiovascular,
                autoimmune, chronic illness, and mental health concerns.
              </p>

              <p className="font-heading text-primary text-2xl leading-tight">
                Pink, precise, and patient-centered.
              </p>
            </div>
          </div>
        </SoftWashCard>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl space-y-4">
          <SectionLabel>How I Work</SectionLabel>

          <h2 className="font-heading text-primary text-4xl leading-tight font-normal tracking-tight md:text-5xl">
            How I approach digital health work
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            I care about systems that are understandable, usable, and grounded in real needs.
            Whether I’m thinking through a workflow, a digital tool, a dataset, or an advocacy
            resource, I want the work to make complex healthcare experiences easier to understand,
            navigate, and improve.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <AboutPrincipleCard
              label="SYSTEMS"
              title="Systems-minded"
              body="I like breaking problems into clear layers: people, workflows, data, tools, constraints, and decisions."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              label="CLARITY"
              title="Patient-centered"
              body="I’m drawn to work that helps people understand health information, next steps, options, and care experiences more clearly."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              label="RESEARCH"
              title="Research-informed"
              body="I want advocacy, research, and health data to shape the tools, resources, and systems I build."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              label="UTILITY"
              title="Useful by design"
              body="Whether the user is a patient, care team, student, or organization, I care about work that supports real decisions and real constraints."
            />
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="space-y-4">
              <SectionLabel>Current Focus Areas</SectionLabel>

              <h2 className="font-heading text-primary text-3xl leading-tight font-normal">
                What I’m building toward
              </h2>

              <div className="text-muted space-y-4 text-base leading-relaxed">
                <p>
                  My long-term direction is Women’s Health Equity Advocacy & Informatics, focused on
                  early detection, delayed diagnosis, precision health, health data, patient
                  education, care navigation, and patient-centered digital tools.
                </p>

                <p>
                  My academic path supports my goal of working at the intersection of healthcare
                  systems, biomedical informatics, digital health, advocacy, and healthcare data
                  analytics.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <SectionLabel>Tools + Technologies</SectionLabel>

              <h2 className="font-heading text-primary text-3xl leading-tight font-normal">
                Current stack and working methods
              </h2>

              <div className="flex flex-wrap gap-2">
                <ChipRegBorder>TypeScript</ChipRegBorder>
                <ChipRegBorder>React</ChipRegBorder>
                <ChipRegBorder>Next.js</ChipRegBorder>
                <ChipRegBorder>Node.js</ChipRegBorder>
                <ChipRegBorder>SQL</ChipRegBorder>
                <ChipRegBorder>PostgreSQL</ChipRegBorder>
                <ChipRegBorder>Python</ChipRegBorder>
                <ChipRegBorder>Pandas</ChipRegBorder>
                <ChipRegBorder>Power BI</ChipRegBorder>
                <ChipRegBorder>Tailwind CSS</ChipRegBorder>
                <ChipRegBorder>API Design</ChipRegBorder>
                <ChipRegBorder>Data Visualization</ChipRegBorder>
              </div>

              <p className="text-muted text-base leading-relaxed">
                I work with modern web technologies for full-stack applications and I’m expanding
                deeper into healthcare data analytics, dashboards, research translation, and
                informatics-aligned workflows.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl space-y-4">
          <SectionLabel>What This Site Is For</SectionLabel>

          <h2 className="font-heading text-primary text-4xl leading-tight font-normal tracking-tight md:text-5xl">
            A portfolio for digital health, advocacy, data, and patient-centered tools
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            This site is where I document selected projects, field notes, case studies, and the
            direction I’m building toward. It includes digital health concepts, health data
            explorations, patient education resources, advocacy-centered tools, and selected
            software work that reflects how I think through systems and care experiences.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <MiniBlock
              label="PROJECTS"
              title="Projects"
              body="Digital health concepts, care systems, health data explorations, patient education resources, and selected software work."
            />
          </Card>

          <Card>
            <MiniBlock
              label="DIARY"
              title="The Informatics Diary"
              body="Field notes on women’s health equity, informatics, digital health, health data, and patient-centered care."
            />
          </Card>

          <Card>
            <MiniBlock
              label="CASE STUDIES"
              title="Case Studies"
              body="Breakdowns of project decisions, workflows, constraints, technical choices, and how systems can support clearer care."
            />
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <CardWithGlow>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <SectionLabel>Next</SectionLabel>

              <h2 className="font-heading text-primary text-3xl leading-tight font-normal md:text-4xl">
                Explore the work
              </h2>

              <p className="text-muted text-base leading-relaxed">
                The best place to start is the Projects page, followed by The Informatics Diary and
                case studies that show how I approach digital health, care workflows, health data,
                advocacy, and patient-centered tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <PrimaryCTA link="/projects" label="View Projects" />
              <SecondaryCTA link="/contact" label="Contact Me" />
            </div>
          </div>
        </CardWithGlow>
      </section>
    </main>
  );
}

function InfoBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function AboutPrincipleCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <ChipMono>{label}</ChipMono>
      <h3 className="text-foreground mt-4 text-lg font-bold">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function MiniBlock({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <ChipMono>{label}</ChipMono>
      <h3 className="text-foreground mt-4 text-lg font-bold">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
