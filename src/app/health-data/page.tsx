import Link from 'next/link';
import PageHeader from '@/src/components/shared/PageHeader';
import { CardWithHover } from '@/src/components/ui/Cards';
import { ChipThinBorder } from '@/src/components/ui/Chips';
import { PrimaryCTA, PrimaryBtn } from '@/src/components/ui/Buttons';
import {
  challenges,
  systemPatterns,
  focusAreas,
  relatedProjects,
  principles,
} from '@/src/data/healthDataData';

export default function HealthDataPage() {
  return (
    <main className="pb-24">
      <PageHeader
        eyebrow="Health Data"
        heading="Health data systems, analytics workflows, and structured information design"
        description={
          <>
            This page explores how software systems can improve how healthcare-related data is
            structured, analyzed, and interpreted.
          </>
        }
        supportingText={
          <>
            My interest is in the technical layer: ingestion, normalization, modeling, dashboards,
            and the clear documentation of assumptions and limitations.
          </>
        }
      />

      <section className="mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-4xl">
              Why health data needs better systems
            </h2>
            <p className="text-muted mt-5 text-base leading-relaxed md:text-lg">
              Health-related data often becomes most useful only after it has been structured,
              cleaned, modeled, and translated into something people can query or interpret. My
              interest in this space is centered on the software layer that makes that possible.
            </p>
            <p className="text-subtle mt-4 text-base leading-relaxed">
              That includes ingestion workflows, database design, analytics dashboards, and clear
              documentation around assumptions, constraints, and data limitations.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Challenges</SectionLabel>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-4xl">
            Core system challenges in health data
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {challenges.map((challenge) => (
              <CardWithHover key={challenge.title}>
                <h3 className="text-foreground text-lg font-medium tracking-tight">
                  {challenge.title}
                </h3>
                <p className="text-subtle mt-3 text-sm leading-relaxed md:text-base">
                  {challenge.description}
                </p>
              </CardWithHover>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>System Patterns</SectionLabel>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-4xl">
            Technical patterns that help make health data more usable
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {systemPatterns.map((pattern) => (
              <CardWithHover key={pattern.title}>
                <h3 className="text-foreground text-xl font-medium tracking-tight">
                  {pattern.title}
                </h3>
                <p className="text-subtle mt-3 text-sm leading-relaxed md:text-base">
                  {pattern.description}
                </p>
              </CardWithHover>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Focus Areas</SectionLabel>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-4xl">
            Current areas of technical interest
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <CardWithHover key={area.title}>
                <h3 className="text-foreground text-xl font-medium tracking-tight">{area.title}</h3>
                <p className="text-subtle mt-3 text-sm leading-relaxed md:text-base">
                  {area.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <ChipThinBorder key={tag}>{tag}</ChipThinBorder>
                  ))}
                </div>
              </CardWithHover>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Related Work</SectionLabel>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-4xl">
            Projects connected to this direction
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <CardWithHover key={project.title}>
                <div className="flex h-full flex-col">
                  <h3 className="text-foreground text-xl font-medium tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-subtle mt-3 text-sm leading-relaxed md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <ChipThinBorder key={tag}>{tag}</ChipThinBorder>
                    ))}
                  </div>

                  <div className="mt-8">
                    <PrimaryBtn link={project.href} label="View Case Study" />
                  </div>
                </div>
              </CardWithHover>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-card border-default shadow-card rounded-3xl border p-8 md:p-10">
            <SectionLabel>Principles</SectionLabel>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-4xl">
                  How I approach health data work
                </h2>
                <p className="text-muted mt-5 text-base leading-relaxed md:text-lg">
                  I think about health data primarily as a systems and interface problem: how raw
                  information is shaped, stored, queried, and presented in ways that remain useful,
                  responsible, and technically maintainable.
                </p>
              </div>

              <ul className="text-subtle space-y-4 text-sm leading-relaxed md:text-base">
                {principles.map((principle) => (
                  <li key={principle} className="border-default rounded-2xl border bg-black/10 p-4">
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-card border-default shadow-card rounded-3xl border p-8 md:p-10">
            <div className="max-w-3xl">
              <SectionLabel>Next Step</SectionLabel>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-4xl">
                Explore the systems behind the work
              </h2>
              <p className="text-muted mt-5 text-base leading-relaxed md:text-lg">
                The strongest examples of this direction live in the project case studies, where I
                document architecture, implementation choices, and the constraints shaping each
                system.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryCTA link="/projects" label="View Projects" />
                <Link
                  href="/projects/womens-health-data-dashboard"
                  className="text-foreground hover:text-link text-sm font-medium transition md:text-base"
                >
                  Women&apos;s Health Dashboard →
                </Link>
              </div>
            </div>
          </div>
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
