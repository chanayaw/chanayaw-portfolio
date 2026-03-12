import Link from 'next/link';
import { type ProjectCategory } from '@/src/data/projectData';

export const CategoryCard = ({ title, description, href }: ProjectCategory) => {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/4 p-6 transition duration-300 hover:bg-white/6"
    >
      <h3 className="text-lg font-medium tracking-tight">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>
      <span className="text-poetic-soft mt-5 inline-block text-sm tracking-wide">
        Explore category →
      </span>
    </Link>
  );
};
