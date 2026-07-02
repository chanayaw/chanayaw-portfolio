import PageHeader from '@/src/components/shared/PageHeader';
import { Card, GlassCard, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="About"
        heading="Building toward Women's Health Equity Advocacy & Informatics"
        description={
          <>
            I&apos;m Chanaya W, a software developer, Health Services Management student, and
            Digital Health Technologist in training focused on health data, biomedical informatics,
            early detection, delayed diagnosis, patient education, care navigation, and
            patient-centered digital tools.
          </>
        }
        supportingText={
          <>
            My advocacy is not separate from my professional path. It is the reason I&apos;m moving
            into digital health and biomedical informatics. The advocacy and research fuel the
            technology, not the other way around.
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="max-w-3xl space-y-5">
              <SectionLabel>Background</SectionLabel>

              <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Health systems, digital health, and advocacy-centered informatics
              </h2>

              <div className="text-muted space-y-4 text-base leading-relaxed md:text-lg">
                <p>
                  My background is in full-stack software engineering, with experience building
                  applications in TypeScript, React, Next.js, Node.js, and SQL-backed systems.
                  I&apos;m now applying that foundation toward healthcare data, biomedical
                  informatics, patient education, care navigation, early detection, delayed
                  diagnosis, and patient-centered digital health tools.
                </p>

                <p>
                  Most recently, I served as the sole full-stack developer at Walton Arts Center and
                  Walmart AMP, where I designed, built, and maintained production applications used
                  by staff and the public. That experience strengthened how I think about technical
                  ownership, usability, accessibility, operational reliability, and building within
                  real constraints.
                </p>

                <p>
                  My long-term direction is Women&apos;s Health Equity Advocacy & Informatics, with
                  a focus on helping underserved women be heard earlier, diagnosed sooner, and cared
                  for more precisely through data, research, digital health systems, and
                  patient-centered tools.
                </p>

                <p>
                  I&apos;m especially interested in underrepresented women who are dismissed,
                  diagnosed late, undertreated, or left without clear information. My work centers
                  whole-body women&apos;s health, including reproductive, endocrine, metabolic,
                  cardiovascular, autoimmune, chronic illness, and mental health concerns.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard>
              <div className="space-y-5">
                <InfoBlock
                  label="Current Direction"
                  body="Women's Health Equity Advocacy & Informatics, early detection, delayed diagnosis, precision health, health data, patient education, care navigation, and patient-centered digital tools."
                />

                <div>
                  <SectionLabel>Core Strengths</SectionLabel>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ChipThinBorder>Women&apos;s Health Equity Advocacy</ChipThinBorder>
                    <ChipThinBorder>Health Data Workflows</ChipThinBorder>
                    <ChipThinBorder>Patient-Centered Product Thinking</ChipThinBorder>
                    <ChipThinBorder>Care Navigation Tools</ChipThinBorder>
                    <ChipThinBorder>Research Translation</ChipThinBorder>
                    <ChipThinBorder>Accessibility</ChipThinBorder>
                    <ChipThinBorder>Full-Stack Development</ChipThinBorder>
                    <ChipThinBorder>API Design</ChipThinBorder>
                  </div>
                </div>

                <InfoBlock
                  label="Target Roles"
                  body="Healthcare data analytics, health information, medical records, release of information, EHR workflows, clinical informatics, biomedical informatics, digital health product work, patient education, care navigation, health equity, implementation, and healthcare systems improvement."
                />

                <InfoBlock
                  label="Education"
                  body="I'm pursuing a BS in Health Services Management at UMGC with confirmed certificate pathways in Health Information Management & Data Analytics and Data Analytics. This academic path supports my long-term direction in biomedical informatics, healthcare data analytics, digital health, healthcare operations, and women's health equity advocacy."
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl space-y-4">
          <SectionLabel>How I Work</SectionLabel>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            How I approach digital health work
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            I care about systems that are understandable, usable, and grounded in real needs.
            Whether I&apos;m thinking through a workflow, a digital tool, a dataset, or an advocacy
            resource, I want the work to make complex healthcare experiences easier to understand,
            navigate, and improve.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <AboutPrincipleCard
              title="Systems-first thinking"
              body="I like breaking problems into clear layers: people, workflows, data, tools, and constraints. That makes systems easier to understand and improve."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              title="Patient-centered clarity"
              body="I'm drawn to work that helps people understand their health information, next steps, options, and care experiences more clearly."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              title="Research-informed building"
              body="I want advocacy, research, and health data to shape the tools, resources, and systems I build, not the other way around."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              title="Usefulness is the standard"
              body="Whether the user is a patient, care team, student, or organization, I care about work that supports real decisions, real workflows, and real constraints."
            />
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="space-y-4">
              <SectionLabel>Current Focus Areas</SectionLabel>

              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                What I&apos;m building toward
              </h2>

              <div className="text-muted space-y-4 text-base leading-relaxed">
                <p>
                  My long-term direction is Women&apos;s Health Equity Advocacy & Informatics,
                  focused on early detection, delayed diagnosis, precision health, health data,
                  patient education, care navigation, and patient-centered digital tools.
                </p>

                <p>
                  I&apos;m pursuing a BS in Health Services Management at UMGC with certificate
                  pathways in Health Information Management & Data Analytics and Data Analytics.
                  This supports my goal of working at the intersection of healthcare systems,
                  biomedical informatics, digital health, advocacy, and healthcare data analytics.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <SectionLabel>Tools and Technologies</SectionLabel>

              <h2 className="font-heading text-2xl font-semibold tracking-tight">
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
                I work with modern web technologies for full-stack applications and I&apos;m
                expanding deeper into healthcare data analytics, dashboards, research translation,
                and informatics-aligned workflows. I&apos;m especially interested in projects where
                interfaces, data models, health information, and care experiences need to work
                together clearly.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl space-y-4">
          <SectionLabel>What This Site Is For</SectionLabel>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A portfolio for digital health, advocacy, data, and patient-centered tools
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            This site is where I document selected projects, field notes, case studies, and the
            direction I&apos;m building toward. It includes digital health concepts, health data
            explorations, patient education resources, advocacy-centered tools, and selected
            software work that reflects how I think through systems and care experiences.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <MiniBlock
              title="Projects"
              body="Digital health concepts, care systems, health data explorations, patient education resources, and selected software work."
            />
          </Card>

          <Card>
            <MiniBlock
              title="Field Notes"
              body="Writing through The Informatics Diary on women's health equity, informatics, digital health, health data, and patient-centered care."
            />
          </Card>

          <Card>
            <MiniBlock
              title="Case Studies"
              body="Breakdowns of project decisions, workflows, constraints, technical choices, and how systems can support clearer care."
            />
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <CardWithGlow>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <SectionLabel>Next</SectionLabel>

              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                Explore the work
              </h2>

              <p className="text-muted text-base leading-relaxed">
                The best place to start is the Projects page, followed by the field notes and case studies that show how I approach digital health, care workflows, health data, advocacy, and patient-centered tools.
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
      {children}
    </p>
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

function AboutPrincipleCard({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-foreground text-lg font-semibold tracking-tight">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function MiniBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-foreground text-lg font-semibold tracking-tight">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
