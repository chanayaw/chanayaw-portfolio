import Hero from '../components/home/Hero';
import { projects } from '../data/projectData';
import { FeaturedProjectCard } from '../components/projects/FeaturedProjectCard';

const featuredProjects = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-10 py-10">
      <Hero />
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
            Featured Work
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-balance md:text-5xl">
            Systems, applications, and operational tools
          </h2>
          <p className="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
            A selection of work demonstrating full-stack engineering, system design, and applied
            problem solving across real-world and health-related contexts.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
