import PageHeader from '@/src/components/shared/PageHeader';

export default function About() {
  return (
    <main>
      <PageHeader
        heading="About"
        subtext={
          <>
            I&apos;m Chanaya Wheeler, a software engineer focused on building research driven
            systems that make women&apos;s health disparities visible and actionable.
          </>
        }
      />

      <div className="mx-auto w-full max-w-7xl space-y-12 p-10">
        <section className="space-y-4 px-8">
          <p>
            My work sits at the intersection of engineering, applied research, and research
            translation. I design and implement systems that model real-world workflows, handle
            imperfect data responsibly, and document assumptions, constraints, and limitations
            clearly.
          </p>
          <p>
            I am particularly interested in how technical infrastructure shapes what becomes
            measurable, interpretable, and actionable in health contexts. This includes scheduling
            systems, data ingestion pipelines, internal tools, and research-adjacent platforms that
            support clarity, reproducibility, and ethical data practice.
          </p>
          <p>
            While my long-term focus is women&apos;s health equity across the lifespan, my
            engineering work is grounded in generalizable system design. I build tools that
            prioritize correctness over convenience, transparency over abstraction, and
            maintainability over novelty.
          </p>
        </section>
        <section className="px-8">
          <h2 className="mb-6 text-4xl font-bold tracking-widest uppercase">Background</h2>
          <div className="space-y-4">
            <p>
              I have professional experience as a fullstack software engineer designing and
              delivering internal tools, operational systems, and user-facing applications. My work
              has included owning projects end-to-end, collaborating with non-technical
              stakeholders, and bringing legacy or third-party workflows in-house.
            </p>
            <p>
              I am comfortable working across the stack, from frontend interfaces to backend APIs
              and relational data models, and I place a strong emphasis on documentation,
              validation, and clear communication.
            </p>
            <p>
              My technical training is complemented by a strong interest in research literacy and
              technical writing, particularly where software supports scientific, public-interest,
              or equity-driven work.
            </p>
          </div>
        </section>
        <section className="px-8">
          <h2 className="mb-6 text-4xl font-bold tracking-widest uppercase">Approach</h2>
          <div className="space-y-4">
            <p>
              I approach engineering as a discipline of careful decision-making. I am attentive to
              tradeoffs, failure modes, and the social context in which systems operate.
            </p>
            <p>
              I value clarity over cleverness, explicit documentation over implicit assumptions, and
              systems that can be understood and maintained by others.
            </p>
          </div>
        </section>
        <aside className="text-poetic-soft px-8">
          This site documents my engineering work, research-oriented projects, and ongoing learning.
          Each project is presented as a representative system rather than a finished product.
        </aside>
      </div>
    </main>
  );
}
