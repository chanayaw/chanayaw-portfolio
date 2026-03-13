import PageHeader from '@/src/components/shared/PageHeader';
import { Card, GlassCard, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';

export default function AboutPage() {
  return (
    <main className="pb-24">
      <PageHeader
        eyebrow="About"
        heading="A software engineer focused on systems, structured data, and health technology"
        description={
          <>
            I build full-stack applications, analytics workflows, and operational systems designed
            to turn complex processes and data into usable software.
          </>
        }
        supportingText={
          <>
            My work increasingly centers on the intersection of software engineering, data systems,
            and health-related information design, with a growing focus on health technology and
            women&apos;s health data workflows.
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="max-w-3xl space-y-5">
                <SectionLabel>Background</SectionLabel>
                <h2 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
                  Engineering, systems thinking, and practical software design
                </h2>

                <div className="text-muted space-y-4 text-base leading-relaxed md:text-lg">
                  <p>
                    My background is in full-stack software engineering, with primary experience
                    building applications in TypeScript, React, Next.js, Node.js, and SQL-backed
                    systems. I&apos;m especially interested in software that supports real-world
                    operations, whether that means dashboards, internal tools, structured workflows,
                    or public-facing systems.
                  </p>

                  <p>
                    Across my work, I tend to gravitate toward projects that require both technical
                    clarity and system design thinking: modeling relationships in data, structuring
                    maintainable codebases, and building interfaces that make complicated processes
                    easier to navigate.
                  </p>

                  <p>
                    More recently, I&apos;ve been exploring how these same skills apply to health
                    data systems, analytics workflows, and health technology. That includes
                    independent work around women&apos;s health datasets, documentation practices,
                    and the design of software that helps make complex information more
                    interpretable and usable.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <GlassCard>
                <div className="space-y-5">
                  <div>
                    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                      Current Direction
                    </p>
                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      Software engineering, data systems, analytics workflows, and health
                      technology.
                    </p>
                  </div>

                  <div>
                    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                      Core Strengths
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <ChipThinBorder>Full-Stack Systems</ChipThinBorder>
                      <ChipThinBorder>Structured Data</ChipThinBorder>
                      <ChipThinBorder>Analytics Workflows</ChipThinBorder>
                      <ChipThinBorder>API Design</ChipThinBorder>
                      <ChipThinBorder>Operational Tools</ChipThinBorder>
                    </div>
                  </div>

                  <div>
                    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                      Target Roles
                    </p>
                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      Software Engineer, Full-Stack Engineer, Analytics Engineer, and
                      HealthTech-focused roles.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
              My approach to technical work
            </h2>
            <p className="text-muted text-base leading-relaxed md:text-lg">
              I care about maintainable systems, clear architecture, and software that supports
              actual use rather than just visual polish. The goal is not just to make something
              functional, but to make it understandable, resilient, and extensible.
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
                title="Structured data matters"
                body="I’m especially drawn to projects where schemas, relationships, queries, and reporting logic shape how information becomes usable."
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
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="space-y-4">
                <SectionLabel>Current Focus Areas</SectionLabel>
                <h2 className="text-2xl font-medium tracking-tight">
                  What I&apos;m building toward
                </h2>

                <div className="text-muted space-y-4 text-base leading-relaxed">
                  <p>
                    My long-term direction sits at the intersection of software engineering, data
                    systems, and health technology. I&apos;m particularly interested in building
                    analytics platforms, structured data workflows, and research-supporting tools
                    that make complex health-related information more interpretable and
                    operationally useful. A growing focus of my work is women&apos;s health data,
                    including systems that help surface patterns, disparities, and operational
                    insights in ways that support clearer decision-making.
                  </p>

                  <p>
                    Alongside my engineering work, I will be pursuing a Bachelor&apos;s degree in
                    Health Services Management, followed by graduate study in Biomedical
                    Informatics. These programs support my goal of working at the technical
                    intersection of healthcare systems, data infrastructure, and software
                    engineering as I continue building toward becoming a Women&apos;s Health Data
                    and Equity Technologist.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <SectionLabel>Tools and Technologies</SectionLabel>
                <h2 className="text-2xl font-medium tracking-tight">
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
                  I primarily work with modern web technologies and structured data systems.
                  I&apos;m especially interested in projects where frontend interfaces, backend
                  logic, and data modeling all need to work together coherently.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>What This Site Is For</SectionLabel>
            <h2 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
              A portfolio of engineering systems, applied projects, and technical direction
            </h2>
            <p className="text-muted text-base leading-relaxed md:text-lg">
              This site is where I document selected work, project systems, and the direction
              I&apos;m building toward. It includes engineering projects, analytics-oriented
              systems, health-data-adjacent work, and project documentation that reflects how I
              think through software problems.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <MiniBlock
                title="Projects"
                body="Full-stack systems, operational tools, analytics dashboards, and case studies."
              />
            </Card>

            <Card>
              <MiniBlock
                title="Health Data"
                body="Technical exploration of health data systems, workflows, and structured information design."
              />
            </Card>

            <Card>
              <MiniBlock
                title="Case Studies"
                body="Detailed breakdowns of architecture, decisions, constraints, and implementation choices."
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <CardWithGlow>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-3">
                <SectionLabel>Next</SectionLabel>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                  Explore the work
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  The best place to start is the Projects page, followed by the health-data-focused
                  work and case studies that support my current direction.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <PrimaryCTA link="/projects" label="View Projects" />
                <SecondaryCTA link="/health-data" label="Health Data Work" />
              </div>
            </div>
          </CardWithGlow>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">{children}</p>
  );
}

function AboutPrincipleCard({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-foreground text-lg font-medium tracking-tight">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function MiniBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-foreground text-lg font-medium tracking-tight">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
