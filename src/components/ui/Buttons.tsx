import Link from 'next/link';

interface ButtonProps {
  link: string;
  label: string;
  status?: 'default' | 'disabled';
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition md:text-base';

export const PrimaryCTA = ({ link, label, status = 'default' }: ButtonProps) => {
  if (status === 'disabled') {
    return (
      <span
        aria-disabled="true"
        className={`${baseClasses} bg-cta text-cta-foreground opacity-disabled cursor-not-allowed`}
      >
        Coming Soon
      </span>
    );
  }

  return (
    <Link
      href={link}
      className={`${baseClasses} ring-brand bg-cta text-cta-foreground shadow-card hover:shadow-pop hover:brightness-105`}
    >
      {label}
    </Link>
  );
};

export const SecondaryCTA = ({ link, label }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`${baseClasses} ring-brand border-default bg-surface text-foreground hover:bg-surface-soft hover:border-strong shadow-card border`}
    >
      {label}
    </Link>
  );
};

export const PrimaryBtn = ({ link, label }: ButtonProps) => {
  return (
    <Link href={link} className="text-link text-sm font-semibold transition hover:underline">
      {label} →
    </Link>
  );
};
