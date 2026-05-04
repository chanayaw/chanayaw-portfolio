import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { Card, GlassCard } from '@/src/components/ui/Cards';
import { getCaseStudyBySlug } from '@/src/data/caseStudyData';

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-10 pb-24">
      <section className="pt-20 md:pt-28">
        <div className="">
          <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
            {caseStudy.status === 'Planned' ? 'Project Brief' : 'Case Study'}
          </p>

          <div className="mt-4 max-w-4xl">
            <h1 className="text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl">
              {caseStudy.title}
            </h1>

            <p className="text-subtle mt-6 max-w-3xl text-base leading-relaxed md:text-lg">
              {caseStudy.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ChipRegBorder>{caseStudy.category}</ChipRegBorder>
            <ChipRegBorder>{caseStudy.status}</ChipRegBorder>
            {caseStudy.stack.map((item) => (
              <ChipThinBorder key={item}>{item}</ChipThinBorder>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={caseStudy.backHref}
              className="text-foreground hover:text-link text-sm font-medium transition"
            >
              ← Back to Projects
            </Link>

            {caseStudy.repoHref ? (
              <Link
                href={caseStudy.repoHref}
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-link text-sm font-medium transition"
              >
                Repository →
              </Link>
            ) : null}

            {caseStudy.demoHref ? (
              <Link
                href={caseStudy.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-link text-sm font-medium transition"
              >
                Live Demo ↗
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="">
          <GlassCard>
            <div className="grid gap-6 md:grid-cols-4">
              {caseStudy.meta.map((item) => (
                <MetaItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="mt-16">
        <div className="">
          <Section
            eyebrow={caseStudy.overview.eyebrow}
            title={caseStudy.overview.title}
            body={caseStudy.overview.body}
          />
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionInner
              eyebrow={caseStudy.problem.eyebrow}
              title={caseStudy.problem.title}
              body={caseStudy.problem.body}
              list={caseStudy.problem.list}
            />
          </Card>

          <Card>
            <SectionInner
              eyebrow={caseStudy.goals.eyebrow}
              title={caseStudy.goals.title}
              body={caseStudy.goals.body}
              list={caseStudy.goals.list}
            />
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <div className="">
          <Section
            eyebrow={caseStudy.system.eyebrow}
            title={caseStudy.system.title}
            body={caseStudy.system.body}
          />

          <div className="bg-card border-default shadow-card mt-8 rounded-3xl border p-8">
            <div className="space-y-4 text-center">
              {caseStudy.system.architecture.map((step, index) => (
                <div key={step.label}>
                  <p className="text-foreground text-lg font-medium">{step.label}</p>
                  {index < caseStudy.system.architecture.length - 1 ? (
                    <p className="text-poetic-soft text-sm">↓</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionInner
              eyebrow={caseStudy.technology.eyebrow}
              title={caseStudy.technology.title}
              body={caseStudy.technology.body}
              list={caseStudy.technology.list}
            />
          </Card>

          <Card>
            <SectionInner
              eyebrow={caseStudy.features.eyebrow}
              title={caseStudy.features.title}
              body={caseStudy.features.body}
              list={caseStudy.features.list}
            />
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <div className="">
          <Section
            eyebrow={caseStudy.technicalDecisions.eyebrow}
            title={caseStudy.technicalDecisions.title}
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {caseStudy.technicalDecisions.decisions.map((decision) => (
              <Card key={decision.title}>
                <DecisionCard title={decision.title} body={decision.body} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionInner
              eyebrow={caseStudy.constraints.eyebrow}
              title={caseStudy.constraints.title}
              body={caseStudy.constraints.body}
              list={caseStudy.constraints.list}
            />
          </Card>

          <Card>
            <SectionInner
              eyebrow={caseStudy.outcome.eyebrow}
              title={caseStudy.outcome.title}
              body={caseStudy.outcome.body}
              list={caseStudy.outcome.list}
            />
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <div className="">
          <Card>
            <SectionInner
              eyebrow={caseStudy.nextSteps.eyebrow}
              title={caseStudy.nextSteps.title}
              body={caseStudy.nextSteps.body}
              list={caseStudy.nextSteps.list}
            />
          </Card>
        </div>
      </section>
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-poetic-soft text-xs font-medium tracking-[0.22em] uppercase">{label}</p>
      <p className="text-foreground mt-2 text-sm font-medium">{value}</p>
    </div>
  );
}

function Section({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance">{title}</h2>
      {body ? <p className="text-muted mt-4 text-base leading-relaxed">{body}</p> : null}
    </div>
  );
}

function SectionInner({
  eyebrow,
  title,
  body,
  list,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  list?: string[];
}) {
  return (
    <div>
      <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-medium tracking-tight">{title}</h3>
      {body ? <p className="text-muted mt-4 text-base leading-relaxed">{body}</p> : null}
      {list ? (
        <ul className="text-muted mt-4 space-y-3 text-base leading-relaxed">
          {list.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function DecisionCard({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-foreground text-lg font-medium tracking-tight">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
