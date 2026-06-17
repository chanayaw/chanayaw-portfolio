import Link from 'next/link';
import { type Project } from '@/src/data/projectData';
import { StackBadge } from './StackBadge';

export const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group border-default bg-card hover:bg-surface-soft shadow-card hover:shadow-pop flex flex-col justify-between rounded-3xl border p-6 transition duration-300 hover:-translate-y-1">
      <div>
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="border-chip-border bg-chip-bg text-chip-text inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
            {project.category}
          </span>

          <span className="border-default bg-surface text-subtle inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
            {project.status}
          </span>
        </div>

        <h3 className="font-heading text-2xl font-semibold tracking-tight">{project.title}</h3>

        <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <StackBadge key={item} label={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {project.caseStudyHref ? (
            <Link
              href={project.caseStudyHref}
              className="ring-brand border-default bg-surface text-foreground hover:bg-surface-blue inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition"
            >
              View Case Study
            </Link>
          ) : (
            <p className="text-foreground text-sm font-semibold">
              {project.status === 'Built' ? 'Case Study Coming Soon' : 'Build Planned'}
            </p>
          )}

          {project.repoHref ? (
            <Link
              href={project.repoHref}
              target="_blank"
              rel="noreferrer"
              className="text-subtle hover:text-link px-1 py-2 text-sm font-medium transition"
            >
              View Repository →
            </Link>
          ) : null}
        </div>

        {project.demoHref ? (
          <div className="mt-2 flex items-center justify-end">
            <Link
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm font-semibold hover:underline"
            >
              Live Demo ↗
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
};
