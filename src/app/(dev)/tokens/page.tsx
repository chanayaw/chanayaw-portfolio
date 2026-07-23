"use client";

import { useState } from "react";

type ThemeMode = "light" | "dark";

type ColorToken = {
  label: string;
  variable: string;
  purpose: string;
};

const foundationTokens: ColorToken[] = [
  {
    label: "Background",
    variable: "--color-background",
    purpose: "Primary page background",
  },
  {
    label: "Foreground",
    variable: "--color-foreground",
    purpose: "Primary readable text",
  },
  {
    label: "Surface",
    variable: "--color-surface",
    purpose: "Standard cards and panels",
  },
  {
    label: "Soft Surface",
    variable: "--color-surface-soft",
    purpose: "Editorial and supporting areas",
  },
  {
    label: "Elevated Surface",
    variable: "--color-surface-elevated",
    purpose: "Higher-emphasis content",
  },
  {
    label: "Card",
    variable: "--color-card",
    purpose: "Translucent card treatment",
  },
  {
    label: "Border",
    variable: "--color-border",
    purpose: "Default separation",
  },
  {
    label: "Strong Border",
    variable: "--color-border-strong",
    purpose: "Interactive emphasis",
  },
  {
    label: "Muted Text",
    variable: "--color-muted",
    purpose: "Secondary body copy",
  },
  {
    label: "Subtle Text",
    variable: "--color-subtle",
    purpose: "Metadata and supporting text",
  },
];

const brandTokens: ColorToken[] = [
  {
    label: "Primary",
    variable: "--color-primary",
    purpose: "Professional headings",
  },
  {
    label: "Signature Rose",
    variable: "--color-accent",
    purpose: "Primary brand accent",
  },
  {
    label: "Soft Pink",
    variable: "--color-accent-soft",
    purpose: "Gentle emphasis",
  },
  {
    label: "Rose Wash",
    variable: "--color-accent-muted",
    purpose: "Soft supporting surfaces",
  },
  {
    label: "Data Teal",
    variable: "--color-secondary",
    purpose: "Systems and information",
  },
  {
    label: "Lavender",
    variable: "--color-mist",
    purpose: "Editorial depth",
  },
  {
    label: "Link",
    variable: "--color-link",
    purpose: "Interactive text",
  },
  {
    label: "CTA",
    variable: "--color-cta",
    purpose: "Primary actions",
  },
];

const semanticTokens: ColorToken[] = [
  {
    label: "Success",
    variable: "--color-success",
    purpose: "Completed or verified",
  },
  {
    label: "Information",
    variable: "--color-info",
    purpose: "Informational states",
  },
  {
    label: "Warning",
    variable: "--color-warning",
    purpose: "Attention required",
  },
  {
    label: "Error",
    variable: "--color-error",
    purpose: "Errors and destructive states",
  },
  {
    label: "Chart Rose",
    variable: "--color-chart-1",
    purpose: "Primary data series",
  },
  {
    label: "Chart Teal",
    variable: "--color-chart-2",
    purpose: "Secondary data series",
  },
  {
    label: "Chart Berry",
    variable: "--color-chart-3",
    purpose: "Supporting data series",
  },
  {
    label: "Chart Lavender",
    variable: "--color-chart-4",
    purpose: "Supporting data series",
  },
];

const competencyChips = [
  "Structured Data",
  "Documentation",
  "Information Accuracy",
  "Quality Assurance",
  "Workflow Analysis",
  "SQL",
  "PostgreSQL",
  "Accessibility",
  "Technical Troubleshooting",
];

export default function TokenPage() {
  const [mode, setMode] = useState<ThemeMode>("light");
  const isDark = mode === "dark";

  return (
    <main
      className={`${
        isDark ? "dark" : ""
      } bg-background text-foreground min-h-screen overflow-x-hidden`}
    >
      <section className="hero-ambient border-default relative isolate overflow-hidden border-b">
        <div
          aria-hidden="true"
          className="data-grid data-grid-fade pointer-events-none absolute inset-y-0 left-0 -z-10 w-2/3 opacity-60"
        />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 md:py-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl space-y-6">
            <Eyebrow>Chanaya W Design System</Eyebrow>

            <div className="space-y-4">
              <h1 className="font-heading text-primary text-4xl leading-[0.98] font-extrabold tracking-[-0.035em] text-balance md:text-6xl">
                Health information, technology, and equity
              </h1>

              <p className="text-muted max-w-3xl text-base leading-relaxed md:text-lg">
                A recruiter-ready visual system combining structured professional typography with
                editorial warmth, soft academic pink surfaces, deep plum text, rose accents, and
                data-informed teal.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Chip variant="accent">Health Information</Chip>
              <Chip variant="tech">Systems + Structured Data</Chip>
              <Chip>Healthcare Operations</Chip>
              <Chip>Women’s Health Equity Informatics</Chip>
            </div>
          </div>

          <ThemeControl mode={mode} onChange={setMode} />
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl space-y-24 px-6 py-14 md:px-10 md:py-20">
        <DesignSection
          eyebrow="Typography"
          title="Professional structure with editorial distinction"
          description="Plus Jakarta Sans creates the heading hierarchy through carefully assigned weights. Nunito Sans handles readable body and interface copy, while Geist Mono identifies metadata and technical details."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Specimen
              label="Display Heading · Plus Jakarta Sans ExtraBold"
              description="ExtraBold display typography for the homepage hero and the portfolio’s most important professional statement."
            >
              <h2 className="font-heading text-primary text-4xl leading-[0.98] font-extrabold tracking-[-0.035em] text-balance md:text-5xl">
                Building at the intersection of healthcare information, technology, and
                patient-centered systems.
              </h2>
            </Specimen>

            <Specimen
              label="Signature Statement · Plus Jakarta Sans Medium"
              description="Medium-weight display typography creates a softer voice for signature statements, advocacy language, and field-note moments."
            >
              <p className="font-heading text-primary text-4xl leading-[1.08] font-medium tracking-tight text-balance md:text-5xl">
                Pink, precise, and patient-centered.
              </p>
            </Specimen>

            <Specimen
              label="Body Copy · Nunito Sans"
              description="Readable supporting copy across pages, cards, forms, and project descriptions."
            >
              <p className="text-muted font-sans text-base leading-relaxed md:text-lg">
                I’m a software developer and Health Services Management student transitioning into
                health information, healthcare data, and informatics. I bring experience with
                structured information, digital systems, documentation, quality-focused workflows,
                and technical problem-solving.
              </p>
            </Specimen>

            <Specimen
              label="Metadata · Geist Mono"
              description="Eyebrows, project states, technical labels, dates, and compact supporting information."
            >
              <div className="space-y-3">
                <p className="text-accent font-mono text-xs font-semibold tracking-[0.24em] uppercase">
                  Current Professional Focus
                </p>

                <p className="text-subtle font-mono text-sm">
                  HEALTH INFORMATION · MEDICAL RECORDS · DATA WORKFLOWS
                </p>

                <p className="text-secondary font-mono text-xs font-semibold">
                  STATUS: TRANSITION IN PROGRESS
                </p>
              </div>
            </Specimen>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Identity Hierarchy"
          title="Present capabilities first, long-term direction second"
          description="Every recruiter-facing page should distinguish what is already proven, what is being pursued now, and what the work is building toward."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <HierarchyCard
              number="01"
              label="Present Foundation"
              title="Technology professional"
              description="Professional software development, SQL and databases, structured systems, documentation, accessibility, testing, troubleshooting, and production ownership."
            />

            <HierarchyCard
              number="02"
              label="Immediate Transition"
              title="Health information and operations"
              description="Building hands-on healthcare experience through medical records, documentation workflows, information accuracy, EHR exposure, and healthcare operations."
              highlighted
            />

            <HierarchyCard
              number="03"
              label="Long-Term Direction"
              title="Women’s Health Equity Advocacy & Informatics"
              description="Connecting health information, data, research, informatics, and patient-centered technology to support clearer and more equitable care."
              editorial
            />
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Color"
          title="Soft academic pink with professional contrast"
          description="Pink remains the recognizable identity. Plum anchors professional communication, while teal signals systems, information, and data."
        >
          <TokenGroup title="Foundation" tokens={foundationTokens} />
          <TokenGroup title="Brand" tokens={brandTokens} />
          <TokenGroup title="Semantic + Data" tokens={semanticTokens} />
        </DesignSection>

        <DesignSection
          eyebrow="Surface Hierarchy"
          title="Different treatments for different audiences"
          description="Recruiter-facing information should be quieter and easier to scan. Advocacy and field-note content can retain more atmosphere through spacing, color, scale, and softer heading weights."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="border-default bg-surface rounded-2xl border p-6">
              <Eyebrow>Recruiter-Facing</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-bold tracking-tight">
                Professional experience
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Clean structure, reduced decoration, concise evidence, strong contrast, and clear
                employment relevance.
              </p>
            </div>

            <div className="border-tech-chip-border bg-surface-blue rounded-3xl border p-6">
              <Eyebrow>Systems + Data</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-bold tracking-tight">
                Information workflows
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Teal-supported surfaces identify structured information, healthcare data, technical
                systems, and operational thinking.
              </p>
            </div>

            <div className="soft-wash border-default shadow-card rounded-[2rem] border p-6">
              <Eyebrow>Advocacy + Field Notes</Eyebrow>

              <p className="font-heading text-primary mt-4 text-3xl leading-[1.08] font-medium tracking-tight">
                The advocacy and research fuel the technology.
              </p>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                More expressive typography and atmospheric surfaces belong in field notes, advocacy
                content, and signature brand moments.
              </p>
            </div>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Card Density"
          title="Compact evidence before expansive storytelling"
          description="Recruiters need to scan skills and experience quickly. Larger editorial cards should be reserved for content that benefits from reflection or narrative."
        >
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-default bg-surface shadow-card rounded-2xl border p-5">
              <Eyebrow>Compact Professional Card</Eyebrow>

              <h3 className="font-heading text-primary mt-3 text-xl font-bold">
                Information and data
              </h3>

              <p className="text-muted mt-2 text-sm leading-relaxed">
                Structured data, SQL, database systems, information accuracy, documentation, and
                quality assurance.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Chip variant="tech">SQL</Chip>
                <Chip variant="tech">Data Quality</Chip>
                <Chip variant="tech">Documentation</Chip>
              </div>
            </div>

            <div className="glass-panel shadow-glow rounded-[2rem] p-7">
              <Eyebrow>Expanded Narrative Card</Eyebrow>

              <p className="font-heading text-primary mt-4 text-3xl leading-[1.08] font-medium tracking-tight md:text-4xl">
                From software systems to healthcare information to informatics.
              </p>

              <p className="font-heading text-primary text-3xl leading-[1.08] font-medium tracking-tight">
                I’m building toward Women’s Health Equity Advocacy & Informatics.
              </p>
            </div>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Competencies"
          title="Shared language across seven bridge-role families"
          description="The portfolio should demonstrate transferable capabilities instead of presenting seven separate professional identities."
        >
          <div className="border-default bg-card shadow-card rounded-3xl border p-6 backdrop-blur md:p-8">
            <div className="flex flex-wrap gap-3">
              {competencyChips.map((competency) => (
                <Chip key={competency} variant="tech">
                  {competency}
                </Chip>
              ))}
            </div>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Buttons"
          title="A clear recruiter action hierarchy"
          description="Experience and resume actions receive priority during the job search. Projects and editorial content remain accessible without competing for first attention."
        >
          <div className="border-default bg-surface flex flex-wrap gap-4 rounded-3xl border p-6">
            <button
              type="button"
              className="ring-brand bg-cta text-cta-foreground shadow-card hover:shadow-pop inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5"
            >
              View Experience
            </button>

            <button
              type="button"
              className="ring-brand border-default bg-surface text-foreground hover:border-strong hover:bg-surface-soft inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-bold transition"
            >
              Download Resume
            </button>

            <button
              type="button"
              className="ring-secondary border-tech-chip-border bg-tech-chip-bg text-secondary hover:bg-surface-blue inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-bold transition"
            >
              View Projects
            </button>

            <button
              type="button"
              className="text-link hover:text-accent inline-flex items-center gap-2 px-2 py-2.5 text-sm font-bold transition"
            >
              Read Field Notes
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Status Language"
          title="Make proof and project maturity unmistakable"
          description="Project labels should separate production experience, built work, educational simulations, active development, and future concepts."
        >
          <div className="border-default bg-surface flex flex-wrap gap-3 rounded-3xl border p-6">
            <StatusBadge status="production">Production</StatusBadge>
            <StatusBadge status="built">Built</StatusBadge>
            <StatusBadge status="educational">Educational Simulation</StatusBadge>
            <StatusBadge status="progress">In Progress</StatusBadge>
            <StatusBadge status="planned">Planned Concept</StatusBadge>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Writing Tone"
          title="Precise, grounded, and forward-looking"
          description="The portfolio can retain its personality while distinguishing professional experience from study, independent projects, advocacy, and future goals."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Specimen
              label="Recruiter-Facing"
              description="Concrete, evidence-based, and immediately relevant."
            >
              <p className="text-foreground text-base leading-relaxed">
                I bring professional experience managing production software, structured data,
                documentation, testing, troubleshooting, and operational workflows. I’m now applying
                that foundation within health information and healthcare systems.
              </p>
            </Specimen>

            <Specimen
              label="Long-Term Direction"
              description="Purposeful, personal, and clearly identified as future-facing."
            >
              <p className="font-heading text-primary text-3xl leading-[1.08] font-medium tracking-[-0.02em]">
                I’m building toward Women’s Health Equity Advocacy & Informatics.
              </p>

              <p className="text-muted mt-4 text-sm leading-relaxed">
                The long-term goal is to use health data, research, informatics, and
                patient-centered technology to support earlier answers, clearer information, and
                more equitable care.
              </p>
            </Specimen>
          </div>
        </DesignSection>
      </div>
    </main>
  );
}

function ThemeControl({
  mode,
  onChange,
}: {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
}) {
  return (
    <div className="border-default bg-card shadow-card shrink-0 rounded-3xl border p-4 backdrop-blur">
      <p className="text-subtle mb-3 font-mono text-xs font-semibold tracking-[0.2em] uppercase">
        Preview Theme
      </p>

      <div className="border-default bg-surface flex rounded-full border p-1">
        <button
          type="button"
          aria-pressed={mode === "light"}
          onClick={() => onChange("light")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            mode === "light"
              ? "bg-cta text-cta-foreground shadow-card"
              : "text-muted hover:text-foreground"
          }`}
        >
          Light
        </button>

        <button
          type="button"
          aria-pressed={mode === "dark"}
          onClick={() => onChange("dark")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            mode === "dark"
              ? "bg-cta text-cta-foreground shadow-card"
              : "text-muted hover:text-foreground"
          }`}
        >
          Dark
        </button>
      </div>
    </div>
  );
}

function DesignSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-7">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h2 className="font-heading text-primary mt-3 text-3xl leading-[1.08] font-bold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>

        <p className="text-muted mt-4 text-base leading-relaxed md:text-lg">{description}</p>
      </div>

      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-accent font-mono text-xs font-semibold tracking-[0.24em] uppercase">
      {children}
    </p>
  );
}

function Specimen({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="border-default bg-surface shadow-card rounded-3xl border p-6 md:p-8">
      <div className="mb-6">
        <p className="text-accent font-mono text-xs font-semibold tracking-[0.2em] uppercase">
          {label}
        </p>

        <p className="text-subtle mt-2 text-sm leading-relaxed">{description}</p>
      </div>

      {children}
    </article>
  );
}

function HierarchyCard({
  number,
  label,
  title,
  description,
  highlighted = false,
  editorial = false,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  highlighted?: boolean;
  editorial?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border p-6 ${
        highlighted
          ? "border-tech-chip-border bg-surface-blue shadow-card"
          : editorial
            ? "border-default soft-wash shadow-card"
            : "border-default bg-surface shadow-card"
      }`}
    >
      <p className="text-accent font-mono text-xs font-semibold tracking-[0.2em]">{number}</p>

      <p className="text-subtle mt-6 text-xs font-bold tracking-[0.16em] uppercase">{label}</p>

      {editorial ? (
        <h3 className="font-heading text-primary mt-3 text-3xl leading-[1.08] font-medium tracking-tight">
          {title}
        </h3>
      ) : (
        <h3 className="font-heading text-primary mt-3 text-2xl leading-[1.12] font-semibold tracking-[-0.015em]">
          {title}
        </h3>
      )}

      <p className="text-muted mt-4 text-sm leading-relaxed">{description}</p>
    </article>
  );
}

function TokenGroup({ title, tokens }: { title: string; tokens: ColorToken[] }) {
  return (
    <div className="mt-10 space-y-4">
      <h3 className="font-heading text-primary text-xl leading-[1.12] font-semibold tracking-[-0.015em]">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {tokens.map((token) => (
          <ColorSwatch key={token.variable} token={token} />
        ))}
      </div>
    </div>
  );
}

function ColorSwatch({ token }: { token: ColorToken }) {
  return (
    <div className="border-default bg-surface overflow-hidden rounded-2xl border">
      <div
        className="border-default h-24 border-b"
        style={{ backgroundColor: `var(${token.variable})` }}
      />

      <div className="p-4">
        <p className="text-foreground text-sm font-bold">{token.label}</p>

        <p className="text-subtle mt-1 font-mono text-[0.68rem]">{token.variable}</p>

        <p className="text-muted mt-3 text-xs leading-relaxed">{token.purpose}</p>
      </div>
    </div>
  );
}

function Chip({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "tech";
}) {
  const styles = {
    default: "border-default bg-surface text-foreground",
    accent: "border-chip-border bg-chip-bg text-chip-text",
    tech: "border-tech-chip-border bg-tech-chip-bg text-tech-chip-text",
  };

  return (
    <span
      className={`${styles[variant]} inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide`}
    >
      {children}
    </span>
  );
}

function StatusBadge({
  children,
  status,
}: {
  children: React.ReactNode;
  status: "production" | "built" | "educational" | "progress" | "planned";
}) {
  const styles = {
    production: "border-success bg-success-soft text-success-foreground",
    built: "border-info bg-info-soft text-info-foreground",
    educational: "border-tech-chip-border bg-tech-chip-bg text-tech-chip-text",
    progress: "border-warning bg-warning-soft text-warning-foreground",
    planned: "border-default bg-surface-soft text-muted",
  };

  return (
    <span
      className={`${styles[status]} inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.12em] uppercase`}
    >
      {children}
    </span>
  );
}
