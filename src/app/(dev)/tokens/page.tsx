'use client';

import React from 'react';

/**
 * Token sanity check for Chanaya W palette
 * Dark-only. No theme toggle.
 *
 * Put at: app/dev/tokens/page.tsx
 */

export default function TokenSanityCheck() {
  return (
    <main className="bg-background text-foreground min-h-screen space-y-16 p-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Design Token Sanity Check</h1>
        <p className="text-muted">
          Visual verification for color tokens, utilities, states, and contrast.
        </p>
      </header>

      {/* --------------------------------------------------
         Core Color Swatches
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Core Colors</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
         Accent and Whimsy Layer
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Accent and Whimsy Layer</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Swatch label="Primary" varName="--color-primary" />
          <Swatch label="Secondary" varName="--color-secondary" />
          <Swatch label="Poetic" varName="--color-poetic" />
          <Swatch label="Poetic Soft" varName="--color-poetic-soft" />
          <Swatch label="Highlight" varName="--color-highlight" />
          <Swatch label="Link (alias)" varName="--color-link" />
          <Swatch label="CTA (alias)" varName="--color-cta" />
        </div>

        <div className="border-default bg-card space-y-2 rounded-xl border p-5">
          <p className="text-muted">
            Poetic layer should read like annotation and margin notes. It should not compete with
            primary UI actions.
          </p>
          <div className="poetic-wash border-default rounded-lg border p-4">
            <p className="text-foreground font-medium">Poetic wash example</p>
            <p className="text-subtle">Use sparingly for small callouts, not full sections.</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
         Text Contrast Check
      -------------------------------------------------- */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Text Contrast</h2>

        <div className="space-y-2">
          <p className="text-foreground">Primary text on background</p>
          <p className="text-muted">Muted text on background</p>
          <p className="text-subtle">Subtle text on background</p>
          <a href="#" className="text-link underline">
            Link color example
          </a>
        </div>

        <div className="border-default bg-card space-y-2 rounded-xl border p-5">
          <p className="text-subtle">Inline code and metadata example</p>
          <div className="flex flex-wrap gap-2">
            <code className="bg-surface border-default text-poetic rounded-md border px-2 py-1">
              dataset_id=cdc_2024
            </code>
            <code className="bg-surface border-default text-subtle rounded-md border px-2 py-1">
              sha=9f3b…
            </code>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
         Buttons, Focus, Hover, Disabled
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Buttons and Focus</h2>

        <div className="flex flex-wrap gap-4">
          <button className="ring-brand rounded-lg bg-[--color-cta] px-4 py-2 text-[--color-cta-foreground] transition">
            Primary CTA (tab to test focus)
          </button>

          <button className="border-default bg-card text-foreground ring-brand rounded-lg border px-4 py-2 transition">
            Secondary Button (tab to test focus)
          </button>

          <button className="border-default bg-card text-foreground ring-secondary rounded-lg border px-4 py-2 transition">
            Secondary Focus (ring-secondary)
          </button>

          <button
            className="cursor-not-allowed rounded-lg bg-[--color-cta] px-4 py-2 text-[--color-cta-foreground] opacity-[var(--opacity-disabled)]"
            disabled
          >
            Disabled
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-default bg-card space-y-3 rounded-xl border p-5">
            <p className="text-muted">Card hover and shadow test</p>
            <div className="border-default bg-surface shadow-card hover:shadow-pop rounded-xl border p-5 transition">
              <p className="text-foreground font-medium">Hover me</p>
              <p className="text-subtle">Only shadow should change. Background stays stable.</p>
            </div>
          </div>

          <div className="border-default bg-card space-y-3 rounded-xl border p-5">
            <p className="text-muted">Glow test</p>
            <div className="border-default bg-surface shadow-glow rounded-xl border p-5">
              <p className="text-foreground font-medium">Glow is subtle</p>
              <p className="text-subtle">Should feel like ambient ink, not neon.</p>
            </div>
          </div>
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

          <span className="inline-flex items-center rounded-full border border-[--color-secondary] px-2.5 py-1 text-[--color-secondary]">
            equity-tag
          </span>

          <span className="inline-flex items-center rounded-full border border-[--color-primary] px-2.5 py-1 text-[--color-primary]">
            reproducible
          </span>
        </div>
      </section>

      {/* --------------------------------------------------
         Data Visualization
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Data Visualization</h2>

        <div className="flex flex-wrap gap-4">
          <Swatch label="Chart 1" varName="--color-chart-1" />
          <Swatch label="Chart 2" varName="--color-chart-2" />
          <Swatch label="Chart Highlight" varName="--color-chart-hi" />
          <Swatch label="Grid" varName="--color-chart-grid" />
          <Swatch label="Axis" varName="--color-chart-axis" />
        </div>

        {/* Simple mini "chart" to verify contrast */}
        <div className="border-default bg-card space-y-4 rounded-xl border p-6">
          <p className="text-muted">Mini chart contrast check</p>

          <div className="space-y-3">
            <Bar label="Series A" colorVar="--color-chart-1" value={0.72} />
            <Bar label="Series B" colorVar="--color-chart-2" value={0.48} />
            <Bar label="Threshold" colorVar="--color-chart-hi" value={0.16} />
          </div>

          <p className="text-subtle">
            Bars should be distinguishable without glare. Labels should remain readable.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------
         Gradients and Micro Accent
      -------------------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Gradients</h2>

        <div className="space-y-4">
          <div className="hero-ambient border-default h-24 rounded-lg border" />
          <div className="micro-accent-bar w-48" />
          <div className="poetic-wash border-default h-24 rounded-lg border" />
        </div>

        <div className="border-default bg-card space-y-3 rounded-xl border p-5">
          <p className="text-muted">Divider patterns</p>
          <div className="space-y-3">
            <div className="micro-accent-bar w-40" />
            <div className="h-px w-full bg-[--color-border]" />
            <div className="micro-accent-bar w-24" />
          </div>
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
        className="border-default h-14 rounded-md border"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="text-muted text-sm">{label}</div>
      <div className="text-subtle text-xs">{varName}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-default inline-flex items-center rounded-full border bg-[--color-chip-bg] px-2.5 py-1 text-[--color-chip-text]">
      {children}
    </span>
  );
}

function Bar({ label, colorVar, value }: { label: string; colorVar: string; value: number }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;

  return (
    <div className="grid grid-cols-[120px_1fr] items-center gap-3">
      <div className="text-subtle">{label}</div>
      <div className="bg-surface border-default h-3 overflow-hidden rounded-full border">
        <div
          className="h-full"
          style={{
            width: `${pct}%`,
            backgroundColor: `var(${colorVar})`,
          }}
        />
      </div>
    </div>
  );
}
