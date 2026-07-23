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
          <span className="font-mono-brand border-chip-border bg-chip-bg text-chip-text inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
            {project.projectType}
          </span>

          <span className="font-mono-brand border-default bg-surface/80 text-subtle inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
            {project.status}
          </span>
        </div>

        <h3 className="font-heading text-primary text-3xl leading-tight font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">{project.summary}</p>

        <div
          className="mt-6 flex flex-wrap gap-2"
          aria-label={`Technologies used for ${project.title}`}
        >
          {project.stack.map((item) => (
            <StackBadge key={item} label={item} />
          ))}
        </div>
      </div>

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
            Case Study Coming Soon
          </p>
        )}

        {project.repoHref ? (
          <a
            href={project.repoHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View the ${project.title} repository in a new tab`}
            className="text-subtle hover:text-link text-sm font-bold transition"
          >
            Repository ↗
          </a>
        ) : null}

        {project.demoHref ? (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${project.title} live demo in a new tab`}
            className="text-link text-sm font-bold transition hover:underline hover:underline-offset-4"
          >
            Live Demo ↗
          </a>
        ) : null}
      </div>
    </article>
  );
};
