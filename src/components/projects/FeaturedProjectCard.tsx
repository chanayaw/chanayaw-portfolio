import Link from "next/link";
import { type Project } from "@/src/data/projectData";
import { StackBadge } from "./StackBadge";

export const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group flex flex-col rounded-3xl border border-white/10 bg-white/4 p-6 transition duration-300 hover:bg-white/6">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="text-poetic-soft rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide">
          {project.category}
        </span>
      </div>

      <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
      <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <StackBadge key={item} label={item} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-4">
        {project.caseStudyHref ? (
          <Link
            href={project.caseStudyHref}
            className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/8"
          >
            View Case Study
          </Link>
        ) : (
          <p className="text-foreground text-sm font-medium">Case Study Coming Soon</p>
        )}

        {project.repoHref ? (
          <Link
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            className="text-subtle px-1 py-2 text-sm transition hover:text-white"
          >
            View Repository →
          </Link>
        ) : null}
      </div>
      <div className="mt-2 flex items-center justify-end">
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
}
