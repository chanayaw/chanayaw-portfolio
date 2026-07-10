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
          ['Surface Teal Wash', '--color-surface-blue'],
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
        description:
          'Rose, plum, lavender, and teal accents for the Chanaya W academic and professional system.',
        tokens: [
          ['Primary / Deep Plum', '--color-primary'],
          ['Teal Data', '--color-secondary'],
          ['Signature Rose', '--color-accent'],
          ['Petal Pink', '--color-accent-soft'],
          ['Rose Milk', '--color-accent-muted'],
          ['Deep Support', '--color-evergreen'],
          ['Soft Lavender', '--color-mist'],
          ['Link', '--color-link'],
          ['CTA', '--color-cta'],
          ['CTA Foreground', '--color-cta-foreground'],
        ],
      },
      {
        title: 'Semantic + Data',
        description:
          'Functional UI states and chart colors that support the brand without becoming the brand.',
        tokens: [
          ['Success', '--color-success'],
          ['Success Soft', '--color-success-soft'],
          ['Success Foreground', '--color-success-foreground'],
          ['Info', '--color-info'],
          ['Info Soft', '--color-info-soft'],
          ['Info Foreground', '--color-info-foreground'],
          ['Warning', '--color-warning'],
          ['Warning Soft', '--color-warning-soft'],
          ['Warning Foreground', '--color-warning-foreground'],
          ['Error', '--color-error'],
          ['Error Soft', '--color-error-soft'],
          ['Error Foreground', '--color-error-foreground'],
          ['Chart Rose', '--color-chart-1'],
          ['Chart Teal', '--color-chart-2'],
          ['Chart Berry', '--color-chart-3'],
          ['Chart Lavender', '--color-chart-4'],
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
            <SectionLabel>Chanaya W Brand System</SectionLabel>

            <div className="space-y-4">
              <h1 className="font-heading text-4xl font-normal text-balance md:text-6xl">
                Soft Academic Pink Token System
              </h1>

              <p className="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
                Visual verification for the updated Chanaya W brand system: soft academic pink
                surfaces, deep plum typography, rose-forward accents, data-informed teal, feminine
                motifs, and optional Pink Informatics Night dark mode.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill variant="accent">soft academic pink</Pill>
              <Pill variant="tech">women&apos;s health equity informatics</Pill>
              <Pill>patient-centered tools</Pill>
              <Pill>health data + care navigation</Pill>
            </div>
          </div>

          <div className="border-default bg-card shadow-card rounded-3xl border p-4 backdrop-blur">
            <p className="text-subtle mb-3 font-mono text-xs font-medium tracking-[0.22em] uppercase">
              Preview mode
            </p>

            <div className="border-default bg-surface flex rounded-full border p-1">
              <button
                type="button"
                onClick={() => setMode('light')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  !isDark
                    ? 'bg-cta shadow-card text-cta-foreground'
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
                    ? 'bg-cta shadow-card text-cta-foreground'
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
              <h2 className="font-heading text-2xl font-normal md:text-3xl">
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
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
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
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            DM Serif Display, Nunito Sans, and Geist Mono
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Heading and body hierarchy" description="Primary reading experience.">
              <div className="space-y-5">
                <div>
                  <p className="text-accent font-mono text-xs font-medium tracking-[0.22em] uppercase">
                    Hero heading / DM Serif Display
                  </p>
                  <h3 className="font-heading mt-2 text-3xl font-normal text-balance">
                    Building digital health tools at the intersection of software, systems, and
                    women’s health equity.
                  </h3>
                </div>

                <p className="text-muted font-sans text-base leading-relaxed">
                  I’m Chanaya W, a software developer, Health Services Management student, and
                  Digital Health Technologist in training building toward Women’s Health Equity
                  Advocacy & Informatics.
                </p>

                <p className="text-subtle font-sans text-sm leading-relaxed">
                  Supporting copy should feel warm, readable, researched, and patient-centered
                  without becoming too clinical or overly decorative.
                </p>
              </div>
            </Panel>

            <Panel
              title="Labels and metadata"
              description="Technical labels, project tags, and notes."
            >
              <div className="space-y-4">
                <p className="text-secondary font-mono text-xs font-medium tracking-[0.24em] uppercase">
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
                  <code className="text-muted font-mono text-sm">patient_centered_tools=true</code>
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
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Buttons, links, focus states, and depth
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Buttons" description="Primary pink, secondary neutral, tertiary teal.">
              <div className="flex flex-wrap gap-4">
                <button className="ring-brand bg-cta shadow-card hover:shadow-pop text-cta-foreground rounded-full px-5 py-2.5 text-sm font-semibold transition">
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
                  className="bg-cta opacity-disabled text-cta-foreground cursor-not-allowed rounded-full px-5 py-2.5 text-sm font-semibold"
                  disabled
                >
                  Disabled
                </button>
              </div>
            </Panel>

            {/* --------------------------------------------------
   Semantic States
-------------------------------------------------- */}
            <section className="space-y-6">
              <SectionLabel>Semantic States</SectionLabel>
              <h2 className="font-heading text-2xl font-normal md:text-3xl">
                Status colors that support the brand without becoming the brand
              </h2>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <SemanticCard
                  label="Success"
                  description="For completed builds, saved forms, and positive status messages."
                  colorVar="--color-success"
                  softVar="--color-success-soft"
                  foregroundVar="--color-success-foreground"
                />

                <SemanticCard
                  label="Info"
                  description="For neutral notices, contextual help, and system messages."
                  colorVar="--color-info"
                  softVar="--color-info-soft"
                  foregroundVar="--color-info-foreground"
                />

                <SemanticCard
                  label="Warning"
                  description="For caution, incomplete setup, or attention-needed states."
                  colorVar="--color-warning"
                  softVar="--color-warning-soft"
                  foregroundVar="--color-warning-foreground"
                />

                <SemanticCard
                  label="Error"
                  description="For validation errors, destructive states, and failed actions."
                  colorVar="--color-error"
                  softVar="--color-error-soft"
                  foregroundVar="--color-error-foreground"
                />
              </div>
            </section>

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
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Digital health product and systems cards
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <ProjectCard
              label="Health Equity Data"
              title="Women’s Health Equity Data Story"
              description="A research and data storytelling project exploring delayed diagnosis, early detection gaps, care access barriers, and patient experience among underserved women."
              tags={['Capstone', 'Health Data', 'Research', 'Power BI']}
              variant="accent"
            />

            <ProjectCard
              label="Patient Education"
              title="Patient Education & Advocacy Library"
              description="A plain-language resource library with guides, templates, and advocacy tools for navigating symptoms, appointments, referrals, follow-up, and unclear care."
              tags={['Capstone', 'Health Literacy', 'Care Navigation', 'Next.js']}
              variant="tech"
            />

            <ProjectCard
              label="Field Notes"
              title="The Informatics Diary"
              description="A field-note archive on women’s health equity, informatics, digital health, health data, patient education, and patient-centered care."
              tags={['Writing', 'Research', 'Informatics']}
              variant="neutral"
            />
          </div>
        </section>

        {/* --------------------------------------------------
           Chips
        -------------------------------------------------- */}
        <section className="space-y-6">
          <SectionLabel>Chips + Tags</SectionLabel>
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
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
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Chart palette and contrast
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            <Swatch label="Chart 1" varName="--color-chart-1" />
            <Swatch label="Chart 2" varName="--color-chart-2" />
            <Swatch label="Chart 3" varName="--color-chart-3" />
            <Swatch label="Chart 4" varName="--color-chart-4" />
            <Swatch label="Chart Highlight" varName="--color-chart-hi" />
            <Swatch label="Chart Axis" varName="--color-chart-axis" />
          </div>

          <Panel title="Mini chart contrast check" description="Verify dashboard-ready colors.">
            <div className="space-y-4">
              <Bar label="Women’s health" colorVar="--color-chart-1" value={0.72} />
              <Bar label="Digital care" colorVar="--color-chart-2" value={0.54} />
              <Bar label="Systems baseline" colorVar="--color-chart-3" value={0.38} />
              <Bar label="Research notes" colorVar="--color-chart-4" value={0.3} />
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
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Gradients, grids, and ambient layers
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Hero ambient" description="Soft pink, blue, and teal atmosphere.">
              <div className="hero-ambient border-default h-48 rounded-3xl border" />
            </Panel>

            <Panel title="Data grid" description="Subtle grid for systems and informatics visuals.">
              <div className="border-default bg-surface relative h-48 overflow-hidden rounded-3xl border">
                <div className="data-grid absolute inset-0 opacity-80" />
                <div className="to-surface absolute inset-0 bg-linear-to-r from-transparent" />
                <div className="relative z-10 flex h-full items-end p-5">
                  <div>
                    <p className="text-secondary font-mono text-xs font-medium tracking-[0.22em] uppercase">
                      Systems Layer
                    </p>
                    <p className="font-heading mt-2 text-2xl font-normal">
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
                <div className="bg-border h-px w-full" />
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
    <p className="text-accent font-mono text-xs font-semibold tracking-[0.24em] uppercase">
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
        <h3 className="font-heading text-lg font-normal">{title}</h3>
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
      <div className="text-subtle font-mono text-xs">{varName}</div>
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
      <p className={`font-mono text-xs font-semibold tracking-[0.22em] uppercase ${labelColor}`}>
        {label}
      </p>

      <h3 className="font-heading mt-4 text-2xl font-normal">{title}</h3>

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

function SemanticCard({
  label,
  description,
  colorVar,
  softVar,
  foregroundVar,
}: {
  label: string;
  description: string;
  colorVar: string;
  softVar: string;
  foregroundVar: string;
}) {
  return (
    <article
      className="shadow-card rounded-3xl border p-5"
      style={{
        backgroundColor: `var(${softVar})`,
        borderColor: `var(${colorVar})`,
        color: `var(${foregroundVar})`,
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: `var(${colorVar})` }} />
        <h3 className="font-heading text-lg font-normal">{label}</h3>
      </div>

      <p className="text-sm leading-relaxed opacity-85">{description}</p>
    </article>
  );
}
