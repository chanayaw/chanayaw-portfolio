import Link from 'next/link';
import { type Project } from '@/src/data/projectData';
import { StackBadge } from './StackBadge';

export const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group border-default bg-card shadow-card hover:shadow-pop relative isolate flex min-h-105 flex-col justify-between overflow-hidden rounded-[2rem] border p-6 backdrop-blur transition duration-300 hover:-translate-y-1">
      <div
        aria-hidden="true"
        className="data-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
      />

      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          <span className="font-mono-brand border-chip-border bg-chip-bg text-chip-text inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="font-heading text-primary text-3xl leading-tight font-normal tracking-tight">
          {project.title}
        </h3>

        <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <StackBadge key={item} label={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="border-default mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-5">
          {project.caseStudyHref ? (
            <Link
              href={project.caseStudyHref}
              className="ring-brand border-default bg-surface text-foreground hover:border-strong hover:bg-surface-soft inline-flex rounded-full border px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5"
            >
              View Case Study
            </Link>
          ) : (
            <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              {project.status === 'Built' ? 'Case Study Coming Soon' : 'Build Planned'}
            </p>
          )}

          {project.repoHref ? (
            <Link
              href={project.repoHref}
              target="_blank"
              rel="noreferrer"
              className="text-subtle hover:text-link text-sm font-bold transition"
            >
              View Repository →
            </Link>
          ) : null}
        </div>

        {project.demoHref ? (
          <div className="mt-3 flex items-center justify-end">
            <Link
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm font-bold transition hover:underline hover:underline-offset-4"
            >
              Live Demo ↗
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
};
