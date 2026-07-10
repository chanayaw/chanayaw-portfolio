import { type Project } from '@/src/data/projectData';
import { StackBadge } from './StackBadge';
import Link from 'next/link';
import { PrimaryBtn } from '../ui/Buttons';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="border-default bg-card shadow-card hover:shadow-pop flex min-h-90 flex-col justify-between rounded-xl border p-5 backdrop-blur transition duration-300 hover:-translate-y-1">
      <div>
        <div className="flex flex-wrap gap-2">
          <span className="font-mono-brand border-default bg-surface/80 text-subtle rounded-full border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
            {project.status}
          </span>
        </div>

        <h3 className="font-heading text-primary mt-4 text-2xl leading-tight font-normal tracking-tight">
          {project.title}
        </h3>

        <p className="text-muted mt-4 text-sm leading-relaxed">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <StackBadge key={item} label={item} />
          ))}
        </div>
      </div>

      <div
        className={`${project.caseStudyHref && 'border-default border-t pt-5'} mt-2 flex flex-wrap items-center justify-between gap-3`}
      >
        {project.caseStudyHref && <PrimaryBtn link={project.caseStudyHref} label="Case Study" />}

        {project.repoHref ? (
          <Link
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            className="text-subtle hover:text-link text-sm font-bold transition"
          >
            Repository →
          </Link>
        ) : null}

        {project.demoHref ? (
          <Link
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm font-bold transition hover:underline hover:underline-offset-4"
          >
            Live Demo ↗
          </Link>
        ) : null}
      </div>
    </article>
  );
};
