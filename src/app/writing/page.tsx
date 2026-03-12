import PageHeader from '@/src/components/shared/PageHeader';

export default function Writing() {
  return (
    <main>
      <PageHeader
        heading="Writing"
        subtext={<>Research translation, technical explanation, and reflective documentation.</>}
      />

      <div className="mx-auto w-full max-w-7xl space-y-12 p-10">
        <section className="space-y-4 px-8">
          <p>
            Writing is a core part of my technical practice. I use writing to document systems,
            clarify assumptions, and translate complex material into accessible language without
            sacrificing accuracy.
          </p>
          <p>
            The pieces collected here support engineering work, research-adjacent analysis, and
            public understanding.
          </p>
        </section>
        <section className="px-8">
          <h2 className="mb-6 text-4xl font-bold tracking-widest uppercase">
            Research Translation
          </h2>
          <div className="space-y-4">
            <p>
              Research translation focuses on explaining what data can and cannot say. This includes
              contextualizing findings, surfacing limitations, and avoiding overgeneralization.
            </p>
          </div>
        </section>
        <section className="px-8">
          <h2 className="mb-6 text-4xl font-bold tracking-widest uppercase">Technical Writing</h2>
          <div className="space-y-4">
            <p>
              Technical writing includes documentation, system explanations, and design rationale
              intended for engineers and adjacent collaborators.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
