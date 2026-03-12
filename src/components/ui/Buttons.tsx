import Link from 'next/link';

interface ButtonProps {
  link: string;
  label: string;
  status?: 'default' | 'disabled';
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition md:text-base';

export const PrimaryCTA = ({ link, label, status = 'default' }: ButtonProps) => {
  if (status === 'disabled') {
    return (
      <span
        aria-disabled="true"
        className={`${baseClasses} bg-cta text-cta-foreground cursor-not-allowed opacity-disabled`}
      >
        Coming Soon
      </span>
    );
  }

  return (
    <Link
      href={link}
      className={`${baseClasses} ring-brand bg-cta text-cta-foreground shadow-card hover:brightness-105`}
    >
      {label}
    </Link>
  );
};

export const SecondaryCTA = ({ link, label }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`${baseClasses} ring-brand bg-card text-foreground border-default shadow-card border hover:bg-white/8`}
    >
      {label}
    </Link>
  );
};

export const PrimaryBtn = ({ link, label }: ButtonProps) => {
  return (
    <Link href={link} className="text-foreground hover:text-link text-sm font-medium transition">
      {label} →
    </Link>
  );
};
