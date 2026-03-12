'use client';

import React from 'react';
import BackgroundFX from '@/src/components/home/BackgroundFX';

/**
 * Token sanity check for Chanaya W palette
 * Dark-only. No theme toggle.
 *
 * Put at: /src/app/(dev)/tokens/page.tsx
 */

export default function TokenSanityCheck() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <BackgroundFX opacityClass="opacity-10" showParticles />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl space-y-4">
            <p className="text-poetic-soft text-xs font-medium tracking-[0.26em] uppercase">
              Design System
            </p>
            <h1 className="text-4xl font-medium tracking-tight text-balance md:text-6xl">
              Token Sanity Check
            </h1>
            <p className="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
              Visual verification for color tokens, surfaces, glass treatments, focus states,
              shadows, charts, gradients, and text contrast across the current portfolio styling
              direction.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-6 py-12 md:px-8 md:py-16">
        {/* --------------------------------------------------
           Core Color Swatches
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Core Layer</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">Core colors and surface hierarchy</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
            <Swatch label="Background" varName="--color-background" />
            <Swatch label="Surface" varName="--color-surface" />
            <Swatch label="Surface Elevated" varName="--color-surface-elevated" />
            <Swatch label="Card" varName="--color-card" />
            <Swatch label="Glass" varName="--color-glass" />
            <Swatch label="Border" varName="--color-border" />
            <Swatch label="Border Strong" varName="--color-border-strong" />
            <Swatch label="Glass Border" varName="--color-glass-border" />
            <Swatch label="Foreground" varName="--color-foreground" />
            <Swatch label="Muted" varName="--color-muted" />
            <Swatch label="Subtle" varName="--color-subtle" />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Panel title="Surface layering" description="Check dark-on-dark separation.">
              <div className="bg-surface rounded-2xl border border-white/10 p-4">
                <div className="bg-surface-elevated rounded-xl border border-white/10 p-4">
                  <div className="bg-card rounded-xl border border-white/10 p-4">
                    <p className="text-foreground font-medium">Layered surfaces</p>
                    <p className="text-subtle mt-2 text-sm">
                      Background → surface → elevated surface → card
                    </p>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel title="Glass treatment" description="Verify blur, transparency, and border.">
              <div className="glass-panel rounded-2xl p-5">
                <p className="text-foreground font-medium">Glass panel</p>
                <p className="text-subtle mt-2 text-sm">
                  Frosted surfaces should remain subtle and readable.
                </p>
              </div>
            </Panel>

            <Panel title="Border hierarchy" description="Default, strong, and glass borders.">
              <div className="space-y-3">
                <div className="border-default rounded-xl border p-4">
                  <p className="text-subtle text-sm">Default border</p>
                </div>
                <div className="border-strong rounded-xl border p-4">
                  <p className="text-subtle text-sm">Strong border</p>
                </div>
                <div className="border-glass bg-glass rounded-xl border p-4">
                  <p className="text-subtle text-sm">Glass border</p>
                </div>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Accent / Editorial
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Accent Layer</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">Accent and editorial layer</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
            <Swatch label="Primary" varName="--color-primary" />
            <Swatch label="Secondary" varName="--color-secondary" />
            <Swatch label="Highlight" varName="--color-highlight" />
            <Swatch label="Accent Soft" varName="--color-accent-soft" />
            <Swatch label="Accent Strong" varName="--color-accent-strong" />
            <Swatch label="Poetic" varName="--color-poetic" />
            <Swatch label="Poetic Soft" varName="--color-poetic-soft" />
            <Swatch label="Link" varName="--color-link" />
            <Swatch label="CTA" varName="--color-cta" />
            <Swatch label="CTA Foreground" varName="--color-cta-foreground" />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel
              title="Editorial wash"
              description="For soft callouts, not primary interface structure."
            >
              <div className="poetic-wash border-default rounded-2xl border p-5">
                <p className="text-foreground font-medium">Editorial callout</p>
                <p className="text-subtle mt-2 text-sm">
                  Use this treatment sparingly for annotations, side notes, and quiet emphasis.
                </p>
              </div>
            </Panel>

            <Panel
              title="Accent restraint"
              description="Primary action should remain stronger than annotation."
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="border-primary text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  primary accent
                </span>
                <span className="border-secondary text-secondary inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  secondary accent
                </span>
                <span className="border-poetic text-poetic inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  editorial note
                </span>
                <span className="border-highlight text-highlight inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  rare highlight
                </span>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Typography / contrast
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Typography</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">Text contrast and readability</h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Text hierarchy" description="Verify hierarchy on the main background.">
              <div className="space-y-3">
                <p className="text-foreground text-lg">Primary text on background</p>
                <p className="text-muted">Muted text for supporting copy and descriptions</p>
                <p className="text-subtle">Subtle text for metadata and tertiary information</p>
                <a href="#" className="text-link underline underline-offset-4">
                  Link color example
                </a>
              </div>
            </Panel>

            <Panel title="Inline metadata" description="Code, metadata, and annotation examples.">
              <div className="space-y-3">
                <p className="text-subtle text-sm">Inline code and metadata</p>
                <div className="flex flex-wrap gap-2">
                  <code className="bg-surface border-default text-poetic rounded-md border px-2 py-1 text-sm">
                    dataset_id=cdc_2024
                  </code>
                  <code className="bg-surface border-default text-subtle rounded-md border px-2 py-1 text-sm">
                    sha=9f3b…
                  </code>
                  <code className="bg-surface border-default text-muted rounded-md border px-2 py-1 text-sm">
                    version=1.0.2
                  </code>
                </div>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Buttons / states / shadows
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Interaction</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">Buttons, focus, states, and depth</h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Buttons and focus" description="Tab through the controls below.">
              <div className="flex flex-wrap gap-4">
                <button className="ring-brand bg-cta text-cta-foreground rounded-full px-5 py-2.5 text-sm font-medium transition">
                  Primary CTA
                </button>

                <button className="ring-brand bg-card text-foreground border-default rounded-full border px-5 py-2.5 text-sm font-medium transition hover:bg-white/8">
                  Secondary Button
                </button>

                <button className="ring-secondary bg-card text-foreground border-default rounded-full border px-5 py-2.5 text-sm font-medium transition hover:bg-white/8">
                  Secondary Focus
                </button>

                <button
                  className="bg-cta text-cta-foreground opacity-disabled cursor-not-allowed rounded-full px-5 py-2.5 text-sm font-medium"
                  disabled
                >
                  Disabled
                </button>
              </div>
            </Panel>

            <Panel
              title="Card depth"
              description="Background should remain stable while depth changes."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-surface border-default shadow-card hover:shadow-pop rounded-2xl border p-5 transition">
                  <p className="text-foreground font-medium">Card hover</p>
                  <p className="text-subtle mt-2 text-sm">
                    Hover should increase depth without changing the overall tone.
                  </p>
                </div>

                <div className="bg-surface border-default shadow-glow rounded-2xl border p-5">
                  <p className="text-foreground font-medium">Ambient glow</p>
                  <p className="text-subtle mt-2 text-sm">
                    Glow should feel soft and atmospheric, not electric.
                  </p>
                </div>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Chips / tags
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Chips</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">Tags and stack pills</h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Default chips" description="Token-backed chip examples.">
              <div className="flex flex-wrap gap-3">
                <Chip>typescript</Chip>
                <Chip>next.js</Chip>
                <Chip>postgresql</Chip>
                <Chip>sql</Chip>
              </div>
            </Panel>

            <Panel title="Accent tags" description="Occasional category or emphasis tags.">
              <div className="flex flex-wrap gap-3">
                <AccentChip borderVar="--color-secondary" textVar="--color-secondary">
                  health-data
                </AccentChip>
                <AccentChip borderVar="--color-primary" textVar="--color-primary">
                  analytics
                </AccentChip>
                <AccentChip borderVar="--color-poetic" textVar="--color-poetic">
                  editorial
                </AccentChip>
                <AccentChip borderVar="--color-highlight" textVar="--color-highlight">
                  featured
                </AccentChip>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Data viz
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Data Visualization</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">Chart palette and contrast</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <Swatch label="Chart 1" varName="--color-chart-1" />
            <Swatch label="Chart 2" varName="--color-chart-2" />
            <Swatch label="Chart Highlight" varName="--color-chart-hi" />
            <Swatch label="Chart Grid" varName="--color-chart-grid" />
            <Swatch label="Chart Axis" varName="--color-chart-axis" />
          </div>

          <Panel
            title="Mini chart contrast check"
            description="Bars should remain distinct without glare or visual fatigue."
          >
            <div className="space-y-4">
              <div className="space-y-3">
                <Bar label="Series A" colorVar="--color-chart-1" value={0.72} />
                <Bar label="Series B" colorVar="--color-chart-2" value={0.48} />
                <Bar label="Threshold" colorVar="--color-chart-hi" value={0.16} />
              </div>

              <div className="border-default bg-surface rounded-xl border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-subtle text-sm">Axis and grid preview</span>
                  <span className="text-subtle text-xs">Q1-Q4</span>
                </div>

                <div className="space-y-3">
                  <div className="border-chart-grid text-chart-axis border-b pb-2 text-sm">75</div>
                  <div className="border-chart-grid text-chart-axis border-b pb-2 text-sm">50</div>
                  <div className="border-chart-grid text-chart-axis border-b pb-2 text-sm">25</div>
                </div>
              </div>
            </div>
          </Panel>
        </section>

        {/* --------------------------------------------------
           Gradients / FX
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Effects</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">
            Gradients, ambient effects, and FX layers
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel
              title="Static token gradients"
              description="Verify gradient restraint and softness."
            >
              <div className="space-y-4">
                <div className="hero-ambient border-default h-28 rounded-2xl border" />
                <div className="micro-accent-bar w-48" />
                <div className="poetic-wash border-default h-28 rounded-2xl border" />
              </div>
            </Panel>

            <Panel
              title="BackgroundFX integration"
              description="Live preview of homepage atmosphere."
            >
              <div className="border-default bg-background relative h-64 overflow-hidden rounded-2xl border">
                <BackgroundFX opacityClass="opacity-10" showParticles />
                <div className="relative z-10 flex h-full items-end p-5">
                  <div className="max-w-sm">
                    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                      Background FX
                    </p>
                    <p className="text-foreground mt-2 text-lg font-medium">
                      Soft atmospheric motion
                    </p>
                    <p className="text-subtle mt-2 text-sm leading-relaxed">
                      The gradient blur and particle layer should remain subtle, quiet, and
                      supportive.
                    </p>
                  </div>
                </div>
              </div>
            </Panel>
          </div>

          <Panel
            title="Divider patterns"
            description="Verify small accent bars and quiet separators."
          >
            <div className="space-y-4">
              <div className="micro-accent-bar w-40" />
              <div className="h-px w-full bg-white/10" />
              <div className="micro-accent-bar w-24" />
            </div>
          </Panel>
        </section>
      </div>
    </main>
  );
}

/* --------------------------------------------------
   Helpers
-------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">{children}</p>
  );
}

function Panel({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border-default shadow-card rounded-3xl border p-6">
      <div className="mb-5 space-y-1">
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        {description ? <p className="text-subtle text-sm leading-relaxed">{description}</p> : null}
      </div>
      {children}
    </div>
  );
}

function Swatch({ label, varName }: { label: string; varName: string }) {
  return (
    <div className="space-y-2">
      <div
        className="border-default h-16 rounded-xl border"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="text-muted text-sm">{label}</div>
      <div className="text-subtle text-xs">{varName}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-default inline-flex items-center rounded-full border bg-[--color-chip-bg] px-3 py-1.5 text-sm text-[--color-chip-text]">
      {children}
    </span>
  );
}

function AccentChip({
  children,
  borderVar,
  textVar,
}: {
  children: React.ReactNode;
  borderVar: string;
  textVar: string;
}) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm"
      style={{
        borderColor: `var(${borderVar})`,
        color: `var(${textVar})`,
      }}
    >
      {children}
    </span>
  );
}

function Bar({ label, colorVar, value }: { label: string; colorVar: string; value: number }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;

  return (
    <div className="grid grid-cols-[120px_1fr] items-center gap-3">
      <div className="text-subtle text-sm">{label}</div>
      <div className="bg-surface border-default h-3 overflow-hidden rounded-full border">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            backgroundColor: `var(${colorVar})`,
          }}
        />
      </div>
    </div>
  );
}
