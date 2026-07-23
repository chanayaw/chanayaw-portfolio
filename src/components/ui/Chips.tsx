import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

const readableChipClasses =
  "inline-flex min-h-8 max-w-full items-center justify-center rounded-full border px-3 py-1.5 text-center text-xs leading-snug font-semibold md:text-sm";

const metadataChipClasses =
  "font-mono-brand inline-flex min-h-7 max-w-full items-center justify-center rounded-full border px-3 py-1 text-center text-[0.68rem] leading-snug font-semibold tracking-[0.14em] uppercase";

export const ChipThinBorder = ({ children, className = "" }: ChipProps) => {
  return (
    <span
      className={`${readableChipClasses} border-chip-border bg-chip-bg text-chip-text ${className}`}
    >
      {children}
    </span>
  );
};

export const ChipRegBorder = ({ children, className = "" }: ChipProps) => {
  return (
    <span
      className={`${readableChipClasses} border-tech-chip-border bg-tech-chip-bg text-tech-chip-text ${className}`}
    >
      {children}
    </span>
  );
};

export const ChipPrimary = ({ children, className = "" }: ChipProps) => {
  return (
    <span
      className={`${readableChipClasses} border-default bg-surface text-foreground ${className}`}
    >
      {children}
    </span>
  );
};

export const ChipAccent = ({ children, className = "" }: ChipProps) => {
  return (
    <span
      className={`${readableChipClasses} border-chip-border bg-chip-bg text-chip-text ${className}`}
    >
      {children}
    </span>
  );
};

export const ChipTech = ({ children, className = "" }: ChipProps) => {
  return (
    <span
      className={`${metadataChipClasses} border-tech-chip-border bg-tech-chip-bg text-tech-chip-text ${className}`}
    >
      {children}
    </span>
  );
};

export const ChipMono = ({ children, className = "" }: ChipProps) => {
  return (
    <span className={`${metadataChipClasses} border-default bg-surface text-subtle ${className}`}>
      {children}
    </span>
  );
};

export const ChipContext = ({ children, className = "" }: ChipProps) => {
  return (
    <span
      className={`${metadataChipClasses} border-chip-border bg-chip-bg text-chip-text ${className}`}
    >
      {children}
    </span>
  );
};

export const ChipStatus = ({ children, className = "" }: ChipProps) => {
  return (
    <span
      className={`${metadataChipClasses} border-default bg-surface/80 text-subtle ${className}`}
    >
      {children}
    </span>
  );
};
