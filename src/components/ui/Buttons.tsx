interface ButtonProps {
  link: string;
  label: string;
}

export const PrimaryCTA = ({ link, label }: ButtonProps) => (
  <a
    href={link}
    className="shadow-card focus-visible:ring-brand bg-cta text-cta-foreground inline-flex max-w-60 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium tracking-wide transition hover:brightness-110 md:text-base"
  >
    {label}
  </a>
);

export const SecondaryCTA = ({ link, label }: ButtonProps) => (
  <a
    href={link}
    className="text-foreground hover:bg-surface focus-visible:ring-brand shadow-card border-border inline-flex max-w-60 items-center justify-center gap-2 rounded-lg border bg-transparent px-5 py-2.5 text-sm font-light tracking-wide transition md:text-base"
  >
    {label}
  </a>
);
