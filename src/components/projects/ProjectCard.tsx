import { type Project } from '@/src/data/projectData';
import { StackBadge } from './StackBadge';
import Link from 'next/link';
import { PrimaryBtn } from '../ui/Buttons';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="border-default bg-card hover:bg-surface-soft shadow-card hover:shadow-pop flex flex-col justify-between rounded-2xl border p-5 transition duration-300 hover:-translate-y-1">
      <div>
        {/* <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.22em] uppercase">
          {project.category}
        </p> */}

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="border-default bg-surface text-subtle rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
            {project.status}
          </span>
        </div>

        <h3 className="font-heading mt-3 text-lg font-semibold tracking-tight">{project.title}</h3>

        <p className="text-muted mt-3 text-sm leading-relaxed">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <StackBadge key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {project.caseStudyHref ? (
          <PrimaryBtn link={project.caseStudyHref} label="Case Study" />
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
            className="text-subtle hover:text-link text-sm font-medium transition"
          >
            Repository →
          </Link>
        ) : null}

        {project.demoHref ? (
          <Link
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm font-semibold hover:underline"
          >
            Live Demo ↗
          </Link>
        ) : null}
      </div>
    </article>
  );
};
