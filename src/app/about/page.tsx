import PageHeader from "@/src/components/shared/PageHeader";
import { SectionLabel } from "@/src/components/projects/SectionLabel";
import { Card, GlassCard, SoftWashCard } from "@/src/components/ui/Cards";
import { PrimaryCTA, SecondaryCTA } from "@/src/components/ui/Buttons";
import { ChipMono, ChipThinBorder } from "@/src/components/ui/Chips";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn about Chanaya W's transition from software systems into health information, healthcare data, informatics, and Women's Health Equity Advocacy & Informatics.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About",
    description:
      "From software systems to health information, healthcare data, informatics, and women's health equity.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="About Chanaya W."
        heading="From software systems to health information and informatics"
        description="I'm a software developer and Health Services Management student bringing a systems-and-data foundation into healthcare."
        supportingText="My immediate focus is gaining experience in health information, medical records, healthcare data, documentation workflows, and healthcare operations while building toward Women's Health Equity Advocacy & Informatics."
        actions={
          <>
            <PrimaryCTA link="/experience" label="View Experience" />
            <SecondaryCTA link="/projects" label="View Projects" />
          </>
        }
      />

      <section aria-labelledby="professional-path-heading" className="mt-16 md:mt-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="max-w-3xl">
              <SectionLabel>Professional Path</SectionLabel>

              <h2
                id="professional-path-heading"
                className="font-heading text-primary mt-3 text-4xl leading-tight font-bold tracking-tight md:text-5xl"
              >
                Technology, information, and healthcare systems
              </h2>

              <div className="text-muted mt-6 space-y-5 text-base leading-relaxed md:text-lg">
                <p>
                  My professional background is in full-stack software development. I&apos;ve worked with
                  structured data, databases, APIs, documentation, testing, troubleshooting,
                  accessibility, and operational workflows using technologies including TypeScript,
                  React, Next.js, Node.js, SQL, and PostgreSQL.
                </p>

                <p>
                  Most recently, I served as the sole full-stack developer for Walton Arts Center
                  and Walmart AMP, where I built and maintained production applications used by
                  staff and the public. That experience strengthened how I approach technical
                  ownership, information accuracy, usability, reliability, and systems operating
                  under real organizational constraints.
                </p>

                <p>
                  I&apos;m now developing healthcare-domain knowledge through my Health Services
                  Management degree and certificate pathways in Health Information Management & Data
                  Analytics and Data Analytics. I&apos;m intentionally seeking hands-on work where
                  healthcare information, documentation, data, systems, and operations intersect.
                </p>

                <p>
                  Long term, I&apos;m building toward Women&apos;s Health Equity Advocacy & Informatics: work
                  connecting health information, data, research, digital health, and
                  patient-centered systems to support clearer information and more equitable care.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard>
              <div className="space-y-6">
                <InfoBlock
                  label="Current Focus"
                  body="Health information, medical records, documentation and data workflows, healthcare operations, and healthcare data support."
                />

                <InfoBlock
                  label="Professional Foundation"
                  body="Full-stack development, structured data, SQL and PostgreSQL, documentation, quality assurance, accessibility, troubleshooting, and workflow analysis."
                />

                <InfoBlock
                  label="Academic Path"
                  body="BS in Health Services Management at UMGC, 2026-2029."
                />

                <div>
                  <SectionLabel>Certificates in Progress</SectionLabel>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <ChipThinBorder>Health Information Management & Data Analytics</ChipThinBorder>

                    <ChipThinBorder>Data Analytics</ChipThinBorder>
                  </div>
                </div>

                <InfoBlock
                  label="Long-Term Direction"
                  body="Women's Health Equity Advocacy & Informatics, connecting health information, data, research, digital health, and patient-centered technology."
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section aria-labelledby="equity-lens-heading" className="mt-20">
        <SoftWashCard>
          <div className="grid gap-8 pb-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionLabel>Equity Lens</SectionLabel>

              <h2
                id="equity-lens-heading"
                className="font-heading text-primary mt-3 text-4xl leading-tight font-bold tracking-tight md:text-5xl"
              >
                Why women&apos;s health equity remains central
              </h2>
            </div>

            <div className="text-muted space-y-5 text-base leading-relaxed md:text-lg">
              <p>
                I&apos;m especially interested in women who are dismissed, diagnosed late, undertreated,
                or left without understandable information and clear next steps.
              </p>

              <p>
                My advocacy interests include reproductive, endocrine, metabolic, cardiovascular,
                autoimmune, chronic illness, and mental health concerns, particularly where
                fragmented information, delayed diagnosis, and gaps between systems make care harder
                to navigate.
              </p>

              <p>
                This long-term direction is why I&apos;m learning how healthcare information is
                documented, managed, interpreted, and moved through real systems. The technical work
                matters because the people affected by those systems matter.
              </p>
            </div>
          </div>
        </SoftWashCard>
      </section>

      <section aria-labelledby="working-approach-heading" className="mt-20">
        <div className="max-w-3xl">
          <SectionLabel>Working Approach</SectionLabel>

          <h2
            id="working-approach-heading"
            className="font-heading text-primary mt-3 text-4xl leading-tight font-bold tracking-tight md:text-5xl"
          >
            How I approach information and systems
          </h2>

          <p className="text-muted mt-4 text-base leading-relaxed md:text-lg">
            I&apos;m drawn to work that requires accuracy, organization, systems thinking, clear
            documentation, and respect for the people who rely on the information.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <PrincipleCard
              label="SYSTEMS"
              title="Understand the workflow"
              body="I break complex work into people, information, processes, tools, constraints, and decisions."
            />
          </Card>

          <Card>
            <PrincipleCard
              label="QUALITY"
              title="Protect clarity and accuracy"
              body="I value careful documentation, testing, consistency, accessibility, and information people can understand."
            />
          </Card>

          <Card>
            <PrincipleCard
              label="PURPOSE"
              title="Connect the work to people"
              body="I want technology, data, and research to support useful systems and more informed, equitable experiences."
            />
          </Card>
        </div>
      </section>

      <section className="border-default mt-20 border-t pt-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Explore</SectionLabel>

            <h2 className="font-heading text-primary mt-3 text-3xl leading-tight font-bold md:text-4xl">
              See the experience behind the direction
            </h2>

            <p className="text-muted mt-4 text-base leading-relaxed">
              Review my professional background, selected projects, and current
              healthcare-information learning path.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <PrimaryCTA link="/experience" label="View Experience" />
            <SecondaryCTA link="/contact" label="Contact Me" />
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>

      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function PrincipleCard({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <ChipMono>{label}</ChipMono>

      <h3 className="font-heading text-foreground mt-4 text-xl font-semibold">{title}</h3>

      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
