import Hero from '../../components/home/Hero';
import { projects } from '../../data/projectData';
import { FeaturedProjectCard } from '../../components/projects/FeaturedProjectCard';
import Link from 'next/link';

const featuredProjects = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-16 px-6 py-10 md:px-10 md:py-12">
      <Hero />

      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <SectionLabel>Featured Work</SectionLabel>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Digital health products, care systems, and applied software projects
          </h2>

          <p className="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
            A selection of work demonstrating full-stack engineering, product thinking, systems
            design, and applied problem solving across real-world and health-related contexts.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="soft-wash border-default shadow-card rounded-4xl border p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>The Informatics Diary</SectionLabel>

            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Field notes on digital health, software, data, and women’s health equity
            </h2>

            <p className="text-muted text-base leading-relaxed md:text-lg">
              Essays and field notes on digital health products, biomedical informatics, women’s
              health equity, software, data, and health systems.
            </p>
          </div>

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
              View Projects
            </Link>
          </div>
        </div>
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
