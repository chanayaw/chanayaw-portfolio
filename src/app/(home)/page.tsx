import Link from "next/link";

import Hero from "../../components/home/Hero";
import { FeaturedProjectCard } from "../../components/projects/FeaturedProjectCard";
import { projects } from "../../data/projectData";

const productionProjects = projects.filter((project) => project.status === "Built");

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-20 px-6 pb-16 md:px-10 md:pb-20">
      <Hero />

      <section className="space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl space-y-4">
            <SectionLabel>Selected Professional Work</SectionLabel>

            <h2 className="font-heading text-primary text-3xl leading-[1.08] font-bold tracking-[-0.025em] text-balance md:text-5xl">
              Production systems, operational workflows, and software foundations
            </h2>

            <p className="text-muted max-w-3xl text-base leading-relaxed md:text-lg">
              Built work demonstrating professional software experience, technical ownership,
              structured information, user-flow improvement, accessibility, and systems designed
              around real operational needs.
            </p>
          </div>

          <Link
            href="/projects"
            className="ring-brand text-link hover:text-accent inline-flex shrink-0 items-center gap-2 rounded-md text-sm font-bold transition-colors"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {productionProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="soft-wash border-default shadow-card rounded-[2rem] border p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>The Informatics Diary</SectionLabel>

            <h2 className="font-heading text-primary text-3xl leading-[1.08] font-bold tracking-[-0.025em] text-balance md:text-4xl">
              Field notes on health information, digital health, data, and women’s health equity
            </h2>

            <p className="text-muted text-base leading-relaxed md:text-lg">
              A field-note archive where I document what I’m studying, questioning, building, and
              translating as I work toward Women’s Health Equity Advocacy & Informatics.
            </p>
          </div>

          <div className="space-y-5 lg:text-right">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/field-notes"
                className="ring-brand bg-cta text-cta-foreground shadow-card hover:shadow-pop inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition"
              >
                Read Field Notes
              </Link>

              <Link
                href="/projects"
                className="ring-brand border-default bg-surface text-foreground hover:border-strong hover:bg-surface-soft inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-accent font-mono text-xs font-semibold tracking-[0.24em] uppercase">
      {children}
    </p>
  );
}
