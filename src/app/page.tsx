import Hero from '../components/home/Hero';
import { projects } from '../data/projectData';
import { FeaturedProjectCard } from '../components/projects/FeaturedProjectCard';

const featuredProjects = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-10 py-10">
      <Hero />
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
