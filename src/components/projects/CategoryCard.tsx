import Link from 'next/link';
import { type ProjectCategoryCard } from '@/src/data/projectData';

export const CategoryCard = ({ title, description, href }: ProjectCategoryCard) => {
  return (
    <Link
      href={href}
      className="group border-default bg-card hover:bg-surface-soft shadow-card hover:shadow-pop flex h-full flex-col justify-between rounded-3xl border p-6 transition duration-300 hover:-translate-y-1"
    >
      <div>
        <h3 className="font-heading text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>
      </div>

      <span className="text-accent mt-5 inline-block text-sm font-semibold tracking-wide transition group-hover:translate-x-1">
        Explore category →
      </span>
    </Link>
  );
};
