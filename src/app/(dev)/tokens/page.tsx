"use client";

import { useState } from "react";

import { PrimaryCTA, PrimaryBtn, SecondaryCTA } from "@/src/components/ui/Buttons";
import { Card, GlassCard, SoftWashCard } from "@/src/components/ui/Cards";
import {
  ChipContext,
  ChipMono,
  ChipRegBorder,
  ChipStatus,
  ChipTech,
  ChipThinBorder,
} from "@/src/components/ui/Chips";

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
    purpose: "Cards, forms, and controls",
  },
  {
    label: "Soft Surface",
    variable: "--color-surface-soft",
    purpose: "Supporting areas and active states",
  },
  {
    label: "Data Surface",
    variable: "--color-surface-blue",
    purpose: "Systems, data, and technical emphasis",
  },
  {
    label: "Card",
    variable: "--color-card",
    purpose: "Translucent card backgrounds",
  },
  {
    label: "Glass",
    variable: "--color-glass",
    purpose: "Glass panels and direction cards",
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
    purpose: "Metadata and supporting details",
  },
];

const brandTokens: ColorToken[] = [
  {
    label: "Primary Plum",
    variable: "--color-primary",
    purpose: "Headings and high-emphasis text",
  },
  {
    label: "Signature Rose",
    variable: "--color-accent",
    purpose: "Primary brand accent",
  },
  {
    label: "Soft Pink",
    variable: "--color-accent-soft",
    purpose: "Gentle pink emphasis",
  },
  {
    label: "Rose Wash",
    variable: "--color-accent-muted",
    purpose: "Soft supporting surfaces",
  },
  {
    label: "Data Teal",
    variable: "--color-secondary",
    purpose: "Systems, data, and technology",
  },
  {
    label: "Lavender Mist",
    variable: "--color-mist",
    purpose: "Editorial depth and ambient color",
  },
  {
    label: "Link",
    variable: "--color-link",
    purpose: "Text links and tertiary actions",
  },
  {
    label: "Primary CTA",
    variable: "--color-cta",
    purpose: "Primary buttons and actions",
  },
];

const professionalStrengths = [
  "Structured Data",
  "Documentation",
  "Information Accuracy",
  "Quality Assurance",
  "Workflow Analysis",
  "SQL",
  "PostgreSQL",
  "Accessibility",
  "Troubleshooting",
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
                Pink academic warmth with professional clarity
              </h1>

              <p className="text-muted max-w-3xl text-base leading-relaxed md:text-lg">
                A light-first visual system combining structured typography, soft pink surfaces,
                deep plum text, rose accents, data-informed teal, and selective editorial detail.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <ChipThinBorder>Health Information</ChipThinBorder>
              <ChipRegBorder>Systems + Structured Data</ChipRegBorder>
              <ChipThinBorder>Healthcare Operations</ChipThinBorder>
              <ChipRegBorder>Women&apos;s Health Equity</ChipRegBorder>
            </div>
          </div>

          <ThemeControl mode={mode} onChange={setMode} />
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl space-y-24 px-6 py-14 md:px-10 md:py-20">
        <DesignSection
          eyebrow="Typography"
          title="Three typefaces with clearly assigned roles"
          description="Plus Jakarta Sans creates the heading hierarchy. Nunito Sans handles body and interface copy. Geist Mono identifies metadata, categories, dates, technologies, and compact labels."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Specimen
              label="Display Heading"
              description="Plus Jakarta Sans ExtraBold for the homepage hero and the site's strongest statement."
            >
              <h2 className="font-heading text-primary text-4xl leading-[0.98] font-extrabold tracking-[-0.035em] text-balance md:text-5xl">
                Where software systems meet health information.
              </h2>
            </Specimen>

            <Specimen
              label="Page and Section Headings"
              description="Plus Jakarta Sans Bold for page titles, section headings, and major content transitions."
            >
              <h2 className="font-heading text-primary text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-5xl">
                Technology, information, and healthcare systems
              </h2>
            </Specimen>

            <Specimen
              label="Card and Supporting Headings"
              description="Plus Jakarta Sans SemiBold for cards, experience entries, project titles, and supporting hierarchy."
            >
              <h3 className="font-heading text-primary text-2xl leading-[1.12] font-semibold tracking-[-0.015em]">
                Health information and data workflows
              </h3>
            </Specimen>

            <Specimen
              label="Signature Statement"
              description="Plus Jakarta Sans Medium Italic for one selective brand-signature placement."
            >
              <p className="font-heading text-accent text-3xl leading-[1.08] font-medium tracking-[0.06em] uppercase italic md:text-4xl">
                Pink, precise, and patient-centered.
              </p>
            </Specimen>

            <Specimen
              label="Body Copy"
              description="Nunito Sans for readable paragraphs, descriptions, forms, and supporting content."
            >
              <p className="text-muted font-sans text-base leading-relaxed md:text-lg">
                I&apos;m a software developer and Health Services Management student bringing a
                systems-and-data foundation into health information, healthcare data, and
                informatics.
              </p>
            </Specimen>

            <Specimen
              label="Metadata and Technical Labels"
              description="Geist Mono for eyebrows, project states, categories, dates, and technology labels."
            >
              <div className="space-y-3">
                <p className="text-accent font-mono text-xs font-semibold tracking-[0.24em] uppercase">
                  Current Professional Focus
                </p>

                <p className="text-subtle font-mono text-sm">
                  HEALTH INFORMATION · MEDICAL RECORDS · DATA WORKFLOWS
                </p>
              </div>
            </Specimen>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Identity Hierarchy"
          title="Present foundation, immediate transition, and long-term direction"
          description="Recruiter-facing pages should establish proven experience first, clearly identify the current healthcare transition, and present the advocacy and informatics goal as long-term direction."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <HierarchyCard
              number="01"
              label="Professional Foundation"
              title="Software, systems, and data"
              description="Professional software development, structured data, SQL and databases, documentation, accessibility, testing, troubleshooting, and production ownership."
            />

            <HierarchyCard
              number="02"
              label="Immediate Focus"
              title="Health information and medical records"
              description="Building hands-on healthcare experience through medical records, documentation workflows, information accuracy, data quality, and healthcare operations."
              highlighted
            />

            <HierarchyCard
              number="03"
              label="Long-Term Direction"
              title="Women's Health Equity Advocate & Informatician"
              description="Connecting health information, data, research, digital health, and patient-centered technology to support clearer and more equitable care."
              editorial
            />
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Color"
          title="Soft academic pink with professional contrast"
          description="The working palette uses plum for authority, rose for identity, teal for systems and data, and lavender for selective editorial atmosphere."
        >
          <TokenGroup title="Foundation and Surfaces" tokens={foundationTokens} />

          <TokenGroup title="Brand and Interaction" tokens={brandTokens} />
        </DesignSection>

        <DesignSection
          eyebrow="Background Treatments"
          title="Atmosphere without visual crowding"
          description="The portfolio uses three supporting treatments. They should establish tone without competing with text, professional evidence, or calls to action."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="hero-ambient border-default relative isolate min-h-64 overflow-hidden rounded-[2rem] border p-6">
              <div
                aria-hidden="true"
                className="data-grid data-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-50"
              />

              <Eyebrow>Hero Ambient</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-bold tracking-tight">
                Homepage atmosphere
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Layered pink, lavender, and teal light with the data-grid treatment reserved for
                high-level brand framing.
              </p>
            </div>

            <div className="soft-wash border-default shadow-card rounded-[2rem] border p-6">
              <Eyebrow>Soft Wash</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-bold tracking-tight">
                Editorial emphasis
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Used for the Informatics Diary, advocacy sections, and reflective content that
                benefits from a softer atmosphere.
              </p>
            </div>

            <div className="glass-panel shadow-glow rounded-[2rem] p-6">
              <Eyebrow>Glass Panel</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-bold tracking-tight">
                Direction and summary
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Used for current-direction cards, compact professional summaries, and information
                that needs gentle separation from the page.
              </p>
            </div>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Cards"
          title="The three card treatments used across the site"
          description="Card selection should follow the content's purpose. Professional evidence stays clean, summaries may use glass, and editorial content may use the soft wash."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <Card>
              <Eyebrow>Standard Card</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-semibold">
                Professional evidence
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Used for projects, experience summaries, working principles, and content that should
                be easy to scan.
              </p>
            </Card>

            <GlassCard>
              <Eyebrow>Glass Card</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-semibold">
                Current direction
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Used for professional snapshots, focus areas, academic direction, and compact
                supporting information.
              </p>
            </GlassCard>

            <SoftWashCard>
              <Eyebrow>Soft-Wash Card</Eyebrow>

              <h3 className="font-heading text-primary mt-4 text-2xl font-semibold">
                Editorial and advocacy
              </h3>

              <p className="text-muted mt-3 text-sm leading-relaxed">
                Used selectively for the Diary, equity-focused content, and reflective narrative
                sections.
              </p>
            </SoftWashCard>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Chips"
          title="Readable skills and compact metadata"
          description="Readable chips communicate skills and focus areas. Monospaced chips identify technologies, context, and project status."
        >
          <div className="border-default bg-surface space-y-7 rounded-3xl border p-6">
            <div>
              <p className="text-subtle mb-3 text-sm font-semibold">Skills and focus areas</p>

              <div className="flex flex-wrap gap-2">
                <ChipThinBorder>Documentation</ChipThinBorder>
                <ChipThinBorder>Quality Assurance</ChipThinBorder>
                <ChipRegBorder>Healthcare Data</ChipRegBorder>
                <ChipRegBorder>Workflow Analysis</ChipRegBorder>
              </div>
            </div>

            <div>
              <p className="text-subtle mb-3 text-sm font-semibold">
                Technologies, context, and status
              </p>

              <div className="flex flex-wrap gap-2">
                <ChipTech>PostgreSQL</ChipTech>
                <ChipTech>TypeScript</ChipTech>
                <ChipMono>Educational Project</ChipMono>
                <ChipContext>Professional Work</ChipContext>
                <ChipStatus>Built</ChipStatus>
                <ChipStatus>Planned</ChipStatus>
              </div>
            </div>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Competencies"
          title="Shared language across bridge-role families"
          description="The portfolio demonstrates transferable capabilities rather than presenting a separate identity for every possible role."
        >
          <div className="border-default bg-card shadow-card rounded-3xl border p-6 backdrop-blur md:p-8">
            <div className="flex flex-wrap gap-3">
              {professionalStrengths.map((strength) => (
                <ChipRegBorder key={strength}>{strength}</ChipRegBorder>
              ))}
            </div>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Actions"
          title="A simple recruiter action hierarchy"
          description="Primary actions support professional evaluation. Secondary actions offer more context. Inline links guide visitors without creating another competing button."
        >
          <div className="border-default bg-surface flex flex-wrap items-center gap-4 rounded-3xl border p-6">
            <PrimaryCTA link="/experience" label="View Experience" />

            <SecondaryCTA link="/resume/chanaya-w-resume.pdf" label="View Resume" />

            <PrimaryBtn link="/projects" label="View Projects" />

            <PrimaryBtn link="/field-notes" label="Read Field Notes" />
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Depth and Shape"
          title="Rounded, soft, and structured"
          description="Large radii and restrained shadows support the feminine visual identity while borders and consistent spacing preserve professional structure."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <ReferenceCard
              label="Radius"
              title="Cards and panels"
              description="Use rounded-2xl, rounded-3xl, or rounded-[2rem]. Reserve rounded-full for buttons, chips, and navigation pills."
            />

            <ReferenceCard
              label="Shadow"
              title="Subtle elevation"
              description="Use shadow-card by default, shadow-pop for hover states, and shadow-glow only for glass or high-emphasis panels."
            />

            <ReferenceCard
              label="Spacing"
              title="Room to scan"
              description="Use generous section spacing, compact card interiors, and controlled paragraph widths. Avoid adding content only to fill space."
            />
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Content and Visual Restraint"
          title="Professional first, expressive where it adds meaning"
          description="The portfolio should feel related to the social ecosystem without adopting the density or decoration of a social-media graphic."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Specimen
              label="Recruiter-Facing Areas"
              description="Homepage, Experience, professional projects, navigation, resume access, and contact form."
            >
              <ul className="text-muted space-y-3 text-sm leading-relaxed md:text-base">
                <li>Use concise, evidence-based language.</li>
                <li>Keep decorative imagery and emojis out of critical actions.</li>
                <li>Prioritize experience, accuracy, documentation, systems, and outcomes.</li>
                <li>Use standard cards, clear labels, and strong contrast.</li>
              </ul>
            </Specimen>

            <Specimen
              label="Editorial Areas"
              description="The Informatics Diary, advocacy sections, and selective future-facing project content."
            >
              <ul className="text-muted space-y-3 text-sm leading-relaxed md:text-base">
                <li>Use soft-wash surfaces and more atmospheric spacing.</li>
                <li>Allow one intentional visual motif or editorial composition per page.</li>
                <li>Use emojis only when they support voice or meaning.</li>
                <li>Keep all decoration away from paragraphs and interactive controls.</li>
              </ul>
            </Specimen>
          </div>
        </DesignSection>

        <DesignSection
          eyebrow="Writing Direction"
          title="Precise, grounded, and purpose-led"
          description="Professional experience, developing knowledge, advocacy, and future direction should remain clearly distinguished."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Specimen
              label="Recruiter-Facing"
              description="Concrete, evidence-based, and immediately relevant."
            >
              <p className="text-foreground text-base leading-relaxed">
                I bring professional experience managing production software, structured data,
                documentation, testing, troubleshooting, accessibility, and operational workflows.
                I&apos;m now applying that foundation within health information and healthcare
                systems.
              </p>
            </Specimen>

            <Specimen
              label="Long-Term Direction"
              description="Purposeful, personal, and clearly identified as future-facing."
            >
              <p className="font-heading text-primary text-3xl leading-[1.08] font-medium tracking-[-0.02em]">
                I&apos;m building toward becoming a Women&apos;s Health Equity Advocate &amp;
                Informatician.
              </p>

              <p className="text-muted mt-4 text-sm leading-relaxed">
                My advocacy centers racially underserved and underrepresented women who are too
                often dismissed, diagnosed late, undertreated, overlooked in research, or left
                without clear information and coordinated care.
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

      <h3 className="font-heading text-primary mt-3 text-2xl leading-[1.12] font-semibold tracking-[-0.015em]">
        {title}
      </h3>

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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
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

function ReferenceCard({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <article className="border-default bg-surface shadow-card rounded-3xl border p-6">
      <Eyebrow>{label}</Eyebrow>

      <h3 className="font-heading text-primary mt-4 text-2xl font-semibold">{title}</h3>

      <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>
    </article>
  );
}
