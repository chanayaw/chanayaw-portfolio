import { type Project } from '@/src/data/projectData';
import { StackBadge } from './StackBadge';
import Link from 'next/link';
import { PrimaryBtn } from '../ui/Buttons';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:bg-white/5">
      <div>
        <p className="text-poetic-soft text-xs tracking-[0.22em] uppercase">{project.category}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-subtle rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide">
            {project.status}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-medium tracking-tight">{project.title}</h3>
        <p className="text-muted mt-3 text-sm leading-relaxed">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <StackBadge key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        {project.caseStudyHref ? (
          <PrimaryBtn link={project.caseStudyHref} label="Case Study" />
        ) : (
          <p className="text-foreground text-sm font-medium">
            {project.status === 'Built' ? 'Case Study Coming Soon' : 'Build Planned'}
          </p>
        )}

        {project.repoHref ? (
          <Link
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            className="text-subtle text-sm transition hover:text-white"
          >
            Repository →
          </Link>
        ) : null}

        {project.demoHref ? (
          <Link
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm font-medium hover:underline"
          >
            Live Demo ↗
          </Link>
        ) : null}
      </div>
    </article>
  );
};
