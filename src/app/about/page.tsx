import PageHeader from '@/src/components/shared/PageHeader';
import { Card, GlassCard, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, SecondaryCTA } from '@/src/components/ui/Buttons';

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-10 pb-24">
      <PageHeader
        eyebrow="About"
        heading="A Digital Health Technologist focused on systems, applications, and product-oriented software"
        description={
          <>
            I build full-stack applications, internal tools, and operational systems designed to
            turn complex workflows into usable software.
          </>
        }
        supportingText={
          <>
            My work sits at the intersection of software engineering, system design, and health
            technology, with a growing focus on building practical tools that support real-world
            use.
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="">
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
                    operations, whether that means internal tools, structured workflows, product
                    features, or public-facing systems.
                  </p>

                  <p>
                    Most recently, I served as the sole full-stack developer at Walton Arts Center
                    and Walmart AMP, where I designed, built, and maintained production applications
                    used by staff and the public. That experience strengthened how I think about
                    technical ownership, usability, operational reliability, and building within
                    real constraints.
                  </p>

                  <p>
                    Across my work, I gravitate toward projects that require both technical clarity
                    and product thinking: structuring maintainable codebases, designing workflows,
                    and building interfaces that make complicated processes easier to navigate.
                  </p>

                  <p>
                    I&apos;m now building toward digital health technology, with an interest in how
                    software can support care workflows, patient-facing tools, health operations,
                    and clearer access to complex information.
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
                      Software engineering, product-oriented systems, operational tools, and health
                      technology.
                    </p>
                  </div>

                  <div>
                    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                      Core Strengths
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <ChipThinBorder>Full-Stack Systems</ChipThinBorder>
                      <ChipThinBorder>System Design</ChipThinBorder>
                      <ChipThinBorder>Product-Oriented Development</ChipThinBorder>
                      <ChipThinBorder>API Design</ChipThinBorder>
                      <ChipThinBorder>Operational Tools</ChipThinBorder>
                    </div>
                  </div>

                  <div>
                    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                      Target Roles
                    </p>
                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      Software Engineer, Full-Stack Engineer, HealthTech Software Engineer,
                      Associate Product Manager, and digital health roles.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="">
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
                title="Product thinking matters"
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
        </div>
      </section>

      <section className="mt-20">
        <div className="">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="space-y-4">
                <SectionLabel>Current Focus Areas</SectionLabel>
                <h2 className="text-2xl font-medium tracking-tight">
                  What I&apos;m building toward
                </h2>

                <div className="text-muted space-y-4 text-base leading-relaxed">
                  <p>
                    My long-term direction sits at the intersection of software engineering,
                    product-oriented systems, and health technology. I&apos;m particularly
                    interested in building tools that support care workflows, patient-facing
                    experiences, operational coordination, and clearer access to complex
                    health-related information.
                  </p>

                  <p>
                    Alongside my engineering work, I will be pursuing a Bachelor&apos;s degree in
                    Health Services Management, followed by graduate study in Biomedical
                    Informatics. These programs support my goal of working at the intersection of
                    healthcare systems, digital products, and software engineering as I continue
                    building toward becoming a Digital Health Technologist.
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
                  I primarily work with modern web technologies for full-stack applications.
                  I&apos;m especially interested in projects where frontend interfaces, backend
                  logic, data modeling, and workflow design all need to work together coherently.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>What This Site Is For</SectionLabel>
            <h2 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
              A portfolio of engineering systems, applied projects, and technical direction
            </h2>
            <p className="text-muted text-base leading-relaxed md:text-lg">
              This site is where I document selected work, project systems, and the direction
              I&apos;m building toward. It includes full-stack applications, operational tools,
              product-oriented systems, and case studies that reflect how I think through software
              problems.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <MiniBlock
                title="Projects"
                body="Full-stack applications, operational tools, product systems, and selected case studies."
              />
            </Card>

            <Card>
              <MiniBlock
                title="Digital Health Direction"
                body="A growing focus on health technology, care workflows, patient-facing tools, and healthcare systems."
              />
            </Card>

            <Card>
              <MiniBlock
                title="Case Studies"
                body="Detailed breakdowns of architecture, product decisions, constraints, and implementation choices."
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="">
          <CardWithGlow>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-3">
                <SectionLabel>Next</SectionLabel>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                  Explore the work
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  The best place to start is the Projects page, followed by the case studies that
                  show how I approach systems, workflows, and product-oriented software.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <PrimaryCTA link="/projects" label="View Projects" />
                <SecondaryCTA link="/contact" label="Contact Me" />
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
