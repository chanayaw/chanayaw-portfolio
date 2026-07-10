import Link from 'next/link';
import { type ProjectCategoryCard } from '@/src/data/projectData';

export const CategoryCard = ({ title, description, href }: ProjectCategoryCard) => {
  return (
    <Link
      href={href}
      className="group border-default bg-card shadow-card hover:shadow-pop relative isolate flex h-full min-h-65 flex-col justify-between overflow-hidden rounded-[2rem] border p-6 backdrop-blur transition duration-300 hover:-translate-y-1"
    >
      <div>
        <h3 className="font-heading text-primary text-lg leading-tight font-normal tracking-tight lg:text-xl">
          {title}
        </h3>

        <p className="text-muted mt-4 text-sm leading-relaxed">{description}</p>
      </div>

      <span className="text-link mt-6 inline-flex items-center gap-1 text-sm font-bold transition group-hover:translate-x-1">
        Explore category <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
};
