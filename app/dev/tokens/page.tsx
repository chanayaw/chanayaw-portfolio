"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function TokenSanityCheck() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const next = stored ?? "dark";

    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.style.colorScheme = next;
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.style.colorScheme = next;
  }
  return (
    <main className="min-h-screen bg-background text-foreground p-10 space-y-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Design Token Sanity Check</h1>
        <p className="text-text-muted">
          Visual verification for color tokens, states, and contrast.
        </p>

        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded-md border border-border bg-card text-foreground ring-brand transition"
          aria-label="toggle theme"
        >
          {theme === "dark" ? "light mode" : "dark mode"}
        </button>
      </header>

      {/* --------------------------------------------------
         Core Color Swatches
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Core Colors</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Swatch label="Background" varName="--color-background" />
          <Swatch label="Surface" varName="--color-surface" />
          <Swatch label="Card" varName="--color-card" />
          <Swatch label="Border" varName="--color-border" />
          <Swatch label="Foreground" varName="--color-foreground" />
          <Swatch label="Text Muted" varName="--color-text-muted" />
          <Swatch label="Text Subtle" varName="--color-text-subtle" />
        </div>
      </section>

      {/* --------------------------------------------------
         Accent Colors
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Accent and Whimsy Layer</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Swatch label="Primary" varName="--color-primary" />
          <Swatch label="Secondary" varName="--color-secondary" />
          <Swatch label="Tertiary" varName="--color-tertiary" />
          <Swatch label="Highlight" varName="--color-highlight" />
          <Swatch label="Poetic" varName="--color-poetic" />
          <Swatch label="Poetic Soft" varName="--color-poetic-soft" />
        </div>
      </section>

      {/* --------------------------------------------------
         Text Contrast Check
      -------------------------------------------------- */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Text Contrast</h2>

        <div className="space-y-2">
          <p className="text-foreground">Primary text on background</p>
          <p className="text-text-muted">Muted text on background</p>
          <p className="text-text-subtle">Subtle text on background</p>
          <a href="#" className="text-link underline">
            Link color example
          </a>
        </div>
      </section>

      {/* --------------------------------------------------
         Buttons and Focus States
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Buttons and Focus</h2>

        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 rounded-lg bg-cta text-cta-foreground focus-visible:ring-brand transition">
            Primary CTA
          </button>

          <button className="px-4 py-2 rounded-lg border border-border bg-card text-foreground focus-visible:ring-brand transition">
            Secondary Button
          </button>

          <button
            className="px-4 py-2 rounded-lg bg-cta text-cta-foreground opacity-50 cursor-not-allowed"
            disabled
          >
            Disabled
          </button>
        </div>
      </section>

      {/* --------------------------------------------------
         Chips
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Chips</h2>

        <div className="flex flex-wrap gap-3">
          <Chip>python</Chip>
          <Chip>nextjs</Chip>
          <Chip>sql</Chip>

          <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-secondary text-secondary">
            equity-tag
          </span>
        </div>
      </section>

      {/* --------------------------------------------------
         Data Visualization Colors
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Data Visualization</h2>

        <div className="flex gap-4">
          <Swatch label="Chart 1" varName="--color-chart-1" />
          <Swatch label="Chart 2" varName="--color-chart-2" />
          <Swatch label="Chart Highlight" varName="--color-chart-hi" />
        </div>
      </section>

      {/* --------------------------------------------------
         Gradients
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Gradients</h2>

        <div className="space-y-4">
          <div className="h-24 rounded-lg bg-[image:var(--gradient-hero)] border border-[--color-border]" />
          <div className="h-2 w-48 rounded-full bg-[image:var(--gradient-accent)]" />
          <div className="h-24 rounded-lg bg-[image:var(--gradient-poetic-wash)] border border-[--color-border]" />
        </div>
      </section>
    </main>
  );
}

/* --------------------------------------------------
   Helper Components
-------------------------------------------------- */

function Swatch({ label, varName }: { label: string; varName: string }) {
  return (
    <div className="space-y-1">
      <div
        className="h-14 rounded-md border border-border"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="text-sm text-text-muted">{label}</div>
      <div className="text-xs text-text-subtle">{varName}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-chip-bg text-chip-text border border-border">
      {children}
    </span>
  );
}
