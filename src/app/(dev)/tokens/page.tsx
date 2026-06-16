'use client';

import React, { useMemo, useState } from 'react';

/**
 * Chanaya W — Token Sanity Check
 * Direction: modern feminine digital health academia
 * Light-first + optional dark mode
 *
 * Put at: /src/app/(dev)/tokens/page.tsx
 */

type ThemeMode = 'light' | 'dark';

export default function TokenSanityCheck() {
  const [mode, setMode] = useState<ThemeMode>('light');

  const isDark = mode === 'dark';

  const colorGroups = useMemo(
    () => [
      {
        title: 'Foundation',
        description: 'Core background, text, surface, and border hierarchy.',
        tokens: [
          ['Background', '--color-background'],
          ['Foreground', '--color-foreground'],
          ['Surface', '--color-surface'],
          ['Surface Soft', '--color-surface-soft'],
          ['Surface Blue', '--color-surface-blue'],
          ['Surface Elevated', '--color-surface-elevated'],
          ['Card', '--color-card'],
          ['Glass', '--color-glass'],
          ['Border', '--color-border'],
          ['Border Strong', '--color-border-strong'],
          ['Glass Border', '--color-glass-border'],
          ['Muted', '--color-muted'],
          ['Subtle', '--color-subtle'],
        ],
      },
      {
        title: 'Brand Accents',
        description: 'Pink, teal, evergreen, and signal accents for the Chanaya W system.',
        tokens: [
          ['Primary / Ink', '--color-primary'],
          ['Digital Teal', '--color-secondary'],
          ['Rose Berry', '--color-accent'],
          ['Blush Pink', '--color-accent-soft'],
          ['Accent Muted', '--color-accent-muted'],
          ['Deep Evergreen', '--color-evergreen'],
          ['Mist Blue', '--color-mist'],
          ['Link', '--color-link'],
          ['CTA', '--color-cta'],
          ['CTA Foreground', '--color-cta-foreground'],
        ],
      },
      {
        title: 'Semantic + Data',
        description: 'Status colors and chart colors for dashboards, concepts, and data visuals.',
        tokens: [
          ['Success', '--color-success'],
          ['Warning', '--color-warning'],
          ['Error', '--color-error'],
          ['Chart 1', '--color-chart-1'],
          ['Chart 2', '--color-chart-2'],
          ['Chart 3', '--color-chart-3'],
          ['Chart Highlight', '--color-chart-hi'],
          ['Chart Grid', '--color-chart-grid'],
          ['Chart Axis', '--color-chart-axis'],
        ],
      },
    ],
    [],
  );

  return (
    <main
      className={`${isDark ? 'dark' : ''} bg-background text-foreground min-h-screen overflow-x-hidden`}
    >
      {/* --------------------------------------------------
         Hero
      -------------------------------------------------- */}
      <section className="hero-ambient border-default relative isolate overflow-hidden border-b">
        <div className="data-grid data-grid-fade pointer-events-none absolute inset-y-0 left-0 w-2/3 opacity-70" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-8 md:py-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <SectionLabel>Design System</SectionLabel>

            <div className="space-y-4">
              <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                Token Sanity Check
              </h1>

              <p className="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
                Visual verification for the updated Chanaya W brand system: light-first surfaces,
                pink-forward accents, digital health teal, readable typography, data-inspired
                motifs, and optional dark mode.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill variant="accent">modern feminine digital health</Pill>
              <Pill variant="tech">biomedical informatics</Pill>
              <Pill>software systems</Pill>
              <Pill>women’s health equity</Pill>
            </div>
          </div>

          <div className="border-default bg-card shadow-card rounded-3xl border p-4 backdrop-blur">
            <p className="font-mono-brand text-subtle mb-3 text-xs font-medium tracking-[0.22em] uppercase">
              Preview mode
            </p>

            <div className="border-default bg-surface flex rounded-full border p-1">
              <button
                type="button"
                onClick={() => setMode('light')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  !isDark
                    ? 'bg-cta shadow-card text-[var(--color-cta-foreground)]'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                Light
              </button>

              <button
                type="button"
                onClick={() => setMode('dark')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isDark
                    ? 'bg-cta shadow-card text-[var(--color-cta-foreground)]'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-6 py-12 md:px-8 md:py-16">
        {/* --------------------------------------------------
           Color Tokens
        -------------------------------------------------- */}
        {colorGroups.map((group) => (
          <section key={group.title} className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <SectionLabel>{group.title}</SectionLabel>
              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                {group.title} tokens
              </h2>
              <p className="text-muted text-sm leading-relaxed md:text-base">{group.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
              {group.tokens.map(([label, varName]) => (
                <Swatch key={varName} label={label} varName={varName} />
              ))}
            </div>
          </section>
        ))}

        {/* --------------------------------------------------
           Surface Hierarchy
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Surface System</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Surface hierarchy and card treatments
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <Panel title="Layered surfaces" description="Check separation between surfaces.">
              <div className="border-default bg-surface rounded-2xl border p-4">
                <div className="border-default bg-surface-elevated rounded-xl border p-4">
                  <div className="border-default bg-card shadow-card rounded-xl border p-4">
                    <p className="text-foreground font-semibold">Surface → elevated → card</p>
                    <p className="text-subtle mt-2 text-sm leading-relaxed">
                      This should feel clean and readable in both light and dark mode.
                    </p>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel title="Soft wash" description="For field notes, editorial callouts, or intros.">
              <div className="soft-wash border-default rounded-2xl border p-5">
                <p className="text-foreground font-semibold">Field note surface</p>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  A soft pink-blue wash that feels feminine, thoughtful, and health-tech adjacent.
                </p>
              </div>
            </Panel>

            <Panel title="Glass treatment" description="Subtle, not heavy or overly SaaS.">
              <div className="glass-panel shadow-glow rounded-2xl p-5">
                <p className="text-foreground font-semibold">Glass panel</p>
                <p className="text-subtle mt-2 text-sm leading-relaxed">
                  Use for overlays, hero cards, and special information panels.
                </p>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Typography
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Typography</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Sora, Manrope, and IBM Plex Mono
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Heading and body hierarchy" description="Primary reading experience.">
              <div className="space-y-5">
                <div>
                  <p className="font-mono-brand text-accent text-xs font-medium tracking-[0.22em] uppercase">
                    Hero heading / Sora
                  </p>
                  <h3 className="font-heading mt-2 text-3xl font-semibold tracking-tight text-balance">
                    Building digital health tools at the intersection of software, systems, and
                    women’s health equity.
                  </h3>
                </div>

                <p className="font-body text-muted text-base leading-relaxed">
                  I’m Chanaya W, a software developer and Health Services Management student
                  building toward biomedical informatics, digital health product development, and
                  women’s health equity.
                </p>

                <p className="font-body text-subtle text-sm leading-relaxed">
                  Supporting copy should feel readable, modern, and warm without becoming too
                  clinical or too decorative.
                </p>
              </div>
            </Panel>

            <Panel
              title="Labels and metadata"
              description="Technical labels, project tags, and notes."
            >
              <div className="space-y-4">
                <p className="font-mono-brand text-secondary text-xs font-medium tracking-[0.24em] uppercase">
                  FIELD NOTE 001
                </p>

                <div className="flex flex-wrap gap-2">
                  <Pill variant="accent">Digital Health Product</Pill>
                  <Pill variant="tech">Clinical Decision Support</Pill>
                  <Pill>Next.js</Pill>
                  <Pill>TypeScript</Pill>
                  <Pill>PostgreSQL</Pill>
                </div>

                <div className="border-default bg-surface rounded-xl border p-4">
                  <code className="font-mono-brand text-muted text-sm">
                    patient_centered_tools=true
                  </code>
                </div>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Buttons
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Interaction</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Buttons, links, focus states, and depth
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Buttons" description="Primary pink, secondary neutral, tertiary teal.">
              <div className="flex flex-wrap gap-4">
                <button className="ring-brand bg-cta shadow-card hover:shadow-pop rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--color-cta-foreground)] transition">
                  Primary CTA
                </button>

                <button className="ring-brand border-default bg-surface text-foreground hover:border-strong hover:bg-surface-soft rounded-full border px-5 py-2.5 text-sm font-semibold transition">
                  Secondary Button
                </button>

                <button
                  className="ring-secondary hover:bg-surface-blue rounded-full border px-5 py-2.5 text-sm font-semibold transition"
                  style={{
                    borderColor: 'var(--color-secondary)',
                    color: 'var(--color-secondary)',
                  }}
                >
                  Teal Action
                </button>

                <button
                  className="bg-cta opacity-disabled cursor-not-allowed rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--color-cta-foreground)]"
                  disabled
                >
                  Disabled
                </button>
              </div>
            </Panel>

            <Panel title="Links" description="Links should be visible without feeling loud.">
              <div className="space-y-3">
                <a
                  href="#"
                  className="text-link underline underline-offset-4 transition hover:opacity-80"
                >
                  Read The Informatics Diary
                </a>

                <p className="text-muted text-sm leading-relaxed">
                  Inline links should use Rose Berry, while teal should usually signal systems,
                  data, and technical categories.
                </p>

                <div className="micro-accent-bar w-56" />
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Product / Project Cards
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Project Cards</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Digital health product and systems cards
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <ProjectCard
              label="Digital Health Product"
              title="CareFlow Health Tracker"
              description="A personal health tracking system for logging symptoms, medications, appointments, notes, labs, and health events over time."
              tags={['Planned', 'Next.js', 'TypeScript', 'PostgreSQL']}
              variant="accent"
            />

            <ProjectCard
              label="Clinical + Operational System"
              title="Clinic Resource Coordination"
              description="A role-based scheduling and resource coordination tool for appointment flow, staff availability, rooms, and operational conflicts."
              tags={['Planned', 'Systems', 'Workflows', 'Data']}
              variant="tech"
            />

            <ProjectCard
              label="Field Notes"
              title="The Informatics Diary"
              description="Essays and field notes on digital health products, biomedical informatics, women’s health equity, software, data, and health systems."
              tags={['Writing', 'Research', 'Health Tech']}
              variant="neutral"
            />
          </div>
        </section>

        {/* --------------------------------------------------
           Chips
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Chips + Tags</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Pill styles for categories, stacks, and interests
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel
              title="Default and pink chips"
              description="Use pink for identity and women’s health."
            >
              <div className="flex flex-wrap gap-3">
                <Pill variant="accent">Women’s Health Equity</Pill>
                <Pill variant="accent">Patient-Centered Tools</Pill>
                <Pill variant="accent">Digital Health Products</Pill>
                <Pill>Product Thinking</Pill>
              </div>
            </Panel>

            <Panel
              title="Teal and technical chips"
              description="Use teal for systems, data, and tech."
            >
              <div className="flex flex-wrap gap-3">
                <Pill variant="tech">Biomedical Informatics</Pill>
                <Pill variant="tech">Health Data</Pill>
                <Pill variant="tech">Interoperability</Pill>
                <Pill variant="tech">Clinical Decision Support</Pill>
              </div>
            </Panel>
          </div>
        </section>

        {/* --------------------------------------------------
           Data Visualization
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Data Visualization</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Chart palette and contrast
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <Swatch label="Chart 1" varName="--color-chart-1" />
            <Swatch label="Chart 2" varName="--color-chart-2" />
            <Swatch label="Chart 3" varName="--color-chart-3" />
            <Swatch label="Chart Highlight" varName="--color-chart-hi" />
            <Swatch label="Chart Axis" varName="--color-chart-axis" />
          </div>

          <Panel title="Mini chart contrast check" description="Verify dashboard-ready colors.">
            <div className="space-y-4">
              <Bar label="Women’s health" colorVar="--color-chart-1" value={0.72} />
              <Bar label="Digital care" colorVar="--color-chart-2" value={0.54} />
              <Bar label="Systems baseline" colorVar="--color-chart-3" value={0.38} />
              <Bar label="Signal" colorVar="--color-chart-hi" value={0.18} />

              <div className="border-default bg-surface rounded-xl border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-subtle text-sm">Axis and grid preview</span>
                  <span className="text-subtle text-xs">Q1–Q4</span>
                </div>

                <div className="space-y-3">
                  <div
                    className="border-b pb-2 text-sm"
                    style={{
                      borderColor: 'var(--color-chart-grid)',
                      color: 'var(--color-chart-axis)',
                    }}
                  >
                    75
                  </div>
                  <div
                    className="border-b pb-2 text-sm"
                    style={{
                      borderColor: 'var(--color-chart-grid)',
                      color: 'var(--color-chart-axis)',
                    }}
                  >
                    50
                  </div>
                  <div
                    className="border-b pb-2 text-sm"
                    style={{
                      borderColor: 'var(--color-chart-grid)',
                      color: 'var(--color-chart-axis)',
                    }}
                  >
                    25
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </section>

        {/* --------------------------------------------------
           Patterns + Effects
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Effects</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Gradients, grids, and ambient layers
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Hero ambient" description="Soft pink, blue, and teal atmosphere.">
              <div className="hero-ambient border-default h-48 rounded-3xl border" />
            </Panel>

            <Panel title="Data grid" description="Subtle grid for systems and informatics visuals.">
              <div className="border-default bg-surface relative h-48 overflow-hidden rounded-3xl border">
                <div className="data-grid absolute inset-0 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-surface)]" />
                <div className="relative z-10 flex h-full items-end p-5">
                  <div>
                    <p className="font-mono-brand text-secondary text-xs font-medium tracking-[0.22em] uppercase">
                      Systems Layer
                    </p>
                    <p className="font-heading mt-2 text-2xl font-semibold">
                      Data-aware, but still human.
                    </p>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel title="Soft wash" description="Useful for intros, field notes, and CTAs.">
              <div className="soft-wash border-default h-36 rounded-3xl border" />
            </Panel>

            <Panel title="Accent divider" description="Small brand moments, not heavy decoration.">
              <div className="space-y-5">
                <div className="micro-accent-bar w-64" />
                <div className="h-px w-full bg-[var(--color-border)]" />
                <div className="micro-accent-bar w-32" />
              </div>
            </Panel>
          </div>
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
    <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
      {children}
    </p>
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
    <div className="border-default bg-card shadow-card rounded-3xl border p-6 backdrop-blur">
      <div className="mb-5 space-y-1">
        <h3 className="font-heading text-lg font-semibold tracking-tight">{title}</h3>
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
        className="border-default shadow-card h-16 rounded-xl border"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="text-muted text-sm font-semibold">{label}</div>
      <div className="font-mono-brand text-subtle text-xs">{varName}</div>
    </div>
  );
}

function Pill({
  children,
  variant = 'neutral',
}: {
  children: React.ReactNode;
  variant?: 'neutral' | 'accent' | 'tech';
}) {
  const styles =
    variant === 'accent'
      ? {
          backgroundColor: 'var(--color-chip-bg)',
          color: 'var(--color-chip-text)',
          borderColor: 'var(--color-chip-border)',
        }
      : variant === 'tech'
        ? {
            backgroundColor: 'var(--color-tech-chip-bg)',
            color: 'var(--color-tech-chip-text)',
            borderColor: 'var(--color-tech-chip-border)',
          }
        : {
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-muted)',
            borderColor: 'var(--color-border)',
          };

  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium"
      style={styles}
    >
      {children}
    </span>
  );
}

function ProjectCard({
  label,
  title,
  description,
  tags,
  variant,
}: {
  label: string;
  title: string;
  description: string;
  tags: string[];
  variant: 'neutral' | 'accent' | 'tech';
}) {
  const labelColor =
    variant === 'accent' ? 'text-accent' : variant === 'tech' ? 'text-secondary' : 'text-subtle';

  return (
    <article className="group border-default bg-card shadow-card hover:shadow-pop rounded-3xl border p-6 transition hover:-translate-y-1">
      <p
        className={`font-mono-brand text-xs font-semibold tracking-[0.22em] uppercase ${labelColor}`}
      >
        {label}
      </p>

      <h3 className="font-heading mt-4 text-2xl font-semibold tracking-tight">{title}</h3>

      <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Pill
            key={tag}
            variant={variant === 'tech' ? 'tech' : variant === 'accent' ? 'accent' : 'neutral'}
          >
            {tag}
          </Pill>
        ))}
      </div>
    </article>
  );
}

function Bar({ label, colorVar, value }: { label: string; colorVar: string; value: number }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;

  return (
    <div className="grid grid-cols-[140px_1fr] items-center gap-3">
      <div className="text-subtle text-sm">{label}</div>
      <div className="border-default bg-surface h-3 overflow-hidden rounded-full border">
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
