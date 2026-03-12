import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-10 py-10">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
