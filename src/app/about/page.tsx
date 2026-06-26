import PageHeader from '@/src/components/shared/PageHeader';
import { Card, GlassCard, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="About"
        heading="A software developer building toward digital health technology, biomedical informatics, and women's health equity advocacy"
        description={
          <>
            I&apos;m Chanaya W, a software developer and Health Services Management student focused
            on health-tech software, health data, patient education, care navigation, biomedical
            informatics, and research-informed advocacy for underrepresented women.
          </>
        }
        supportingText={
          <>
            My work has two lanes that often overlap but can also stand on their own: digital health
            technology and women&apos;s health equity advocacy. The advocacy and research fuel the
            digital products I want to build, not the other way around.
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="max-w-3xl space-y-5">
              <SectionLabel>Background</SectionLabel>

              <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Software engineering, health systems, and advocacy-centered product direction
              </h2>

              <div className="text-muted space-y-4 text-base leading-relaxed md:text-lg">
                <p>
                  My background is in full-stack software engineering, with experience building
                  applications in TypeScript, React, Next.js, Node.js, and SQL-backed systems.
                  I&apos;m especially interested in health-tech software that supports patient
                  education, care navigation, health data organization, clinical workflow concepts,
                  and clearer access to complex health information.
                </p>

                <p>
                  Most recently, I served as the sole full-stack developer at Walton Arts Center and
                  Walmart AMP, where I designed, built, and maintained production applications used
                  by staff and the public. That experience strengthened how I think about technical
                  ownership, usability, accessibility, operational reliability, and building within
                  real constraints.
                </p>

                <p>
                  I&apos;m now building toward Digital Health Technologist work, with an interest in
                  biomedical informatics, health information systems, clinical decision support
                  concepts, health data, and patient-centered digital tools.
                </p>

                <p>
                  Alongside the technical direction, I write and think deeply about women&apos;s
                  health advocacy and women&apos;s health equity. I&apos;m especially interested in
                  underrepresented women who are dismissed, diagnosed late, or left without clear
                  information, and in whole-body women&apos;s health concerns beyond reproductive
                  care alone.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard>
              <div className="space-y-5">
                <InfoBlock
                  label="Current Direction"
                  body="Digital health technology, health-tech software, health data, patient education, care navigation, and women's health equity advocacy."
                />

                <div>
                  <SectionLabel>Core Strengths</SectionLabel>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ChipThinBorder>Full-Stack Health-Tech Systems</ChipThinBorder>
                    <ChipThinBorder>Health Data Workflows</ChipThinBorder>
                    <ChipThinBorder>Patient-Centered Product Thinking</ChipThinBorder>
                    <ChipThinBorder>API Design</ChipThinBorder>
                    <ChipThinBorder>Care Navigation Tools</ChipThinBorder>
                    <ChipThinBorder>Accessibility</ChipThinBorder>
                  </div>
                </div>

                <InfoBlock
                  label="Target Roles"
                  body="Health Information, Medical Records, Release of Information, EHR workflow, HealthTech software, digital health, health data, product-oriented engineering, and informatics-aligned roles."
                />

                <InfoBlock
                  label="Education"
                  body="I'm pursuing a BS in Health Services Management at UMGC with confirmed certificate pathways in Health Information Management & Data Analytics and Data Analytics. This academic path supports my long-term direction in digital health technology, biomedical informatics, health data, healthcare operations, and women's health equity advocacy."
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
            My approach to technical work
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            I care about maintainable systems, clear architecture, and software that supports actual
            use rather than just visual polish. The goal is not just to make something functional,
            but to make it understandable, resilient, and extensible.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <AboutPrincipleCard
              title="Systems-first thinking"
              body="I like breaking problems into clear layers: data, logic, interfaces, and workflow. That makes systems easier to reason about and evolve."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              title="Product clarity"
              body="I'm drawn to projects where user needs, workflow constraints, and technical decisions all shape how the system should work."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              title="Clarity over cleverness"
              body="I prefer explicit decisions, readable code, and documented tradeoffs over unnecessary complexity or abstraction."
            />
          </Card>

          <Card>
            <AboutPrincipleCard
              title="Usefulness is the standard"
              body="Whether the user is internal or public-facing, I care about software that supports real tasks, real decisions, and real constraints."
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
                  My long-term direction sits at the intersection of software engineering, digital
                  health product development, biomedical informatics, and women&apos;s health
                  equity. I&apos;m particularly interested in building tools that support care
                  workflows, patient-facing experiences, operational coordination, and clearer
                  access to complex health-related information.
                </p>

                <p>
                  Alongside my engineering work, I&apos;m pursuing a BS in Health Services
                  Management at UMGC. This supports my goal of working at the intersection of
                  healthcare systems, digital products, software engineering, and informatics.
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
                <ChipRegBorder>Tailwind CSS</ChipRegBorder>
                <ChipRegBorder>API Design</ChipRegBorder>
              </div>

              <p className="text-muted text-base leading-relaxed">
                I primarily work with modern web technologies for full-stack applications. I&apos;m
                especially interested in projects where frontend interfaces, backend logic, data
                modeling, and workflow design all need to work together coherently.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl space-y-4">
          <SectionLabel>What This Site Is For</SectionLabel>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A portfolio of applied software, digital health direction, and product thinking
          </h2>

          <p className="text-muted text-base leading-relaxed md:text-lg">
            This site is where I document selected work, project systems, and the direction I&apos;m
            building toward. It includes full-stack applications, operational tools, digital health
            product concepts, and case studies that reflect how I think through software problems.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <MiniBlock
              title="Projects"
              body="Full-stack applications, digital health product concepts, operational tools, and selected case studies."
            />
          </Card>

          <Card>
            <MiniBlock
              title="Field Notes"
              body="Writing and reflections through The Informatics Diary on digital health, software, data, and health systems."
            />
          </Card>

          <Card>
            <MiniBlock
              title="Case Studies"
              body="Detailed breakdowns of architecture, product decisions, constraints, and implementation choices."
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
                The best place to start is the Projects page, followed by the case studies and field
                notes that show how I approach systems, workflows, and health-tech product work.
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
