import PageHeader from '@/src/components/shared/PageHeader';

export default function Engineering() {
  return (
    <main>
      <PageHeader
        heading="Engineering Systems"
        subtext={
          <>
            This page documents engineering systems I have designed and built to model real-world
            workflows, data constraints, and operational requirements.
            <br />
            <br />
            Each project emphasizes system design, data integrity, and clarity of tradeoffs, with
            explicit assumptions and limitations documented throughout.
          </>
        }
      />

      <section className="mx-auto w-full max-w-7xl space-y-5 p-10">
        <div className="space-y-4 p-8">
          <p className="font-bold">Resource Allocation System</p>

          <div>
            <p>Role-based scheduling and coordination architecture</p>
            <ul className="list-inside list-disc">
              <li>Focus: system design, access control, data integrity</li>
              <li>Contexts: healthcare, research, operations</li>
            </ul>
          </div>

          <div>
            <a href="#" className="text-link hover:brightness-110">
              → Case Study
            </a>
            <br />
            <a href="#" className="text-link hover:brightness-110">
              → Repository
            </a>
          </div>
        </div>

        <div className="micro-accent-bar w-full" />

        <div className="space-y-4 p-8">
          <p className="font-bold">Environmental Conditions Monitoring System</p>

          <div>
            <p>External data ingestion and contextual alerting interface</p>
            <ul className="list-inside list-disc">
              <li>Focus: data ingestion, normalization, uncertainty handling</li>
              <li>Contexts: public health, environmental exposure, research</li>
            </ul>
          </div>

          <div>
            <a href="#" className="text-link hover:brightness-110">
              → Case Study
            </a>
            <br />
            <a href="#" className="text-link hover:brightness-110">
              → Repository
            </a>
          </div>
        </div>

        <div className="micro-accent-bar w-full" />

        <div className="space-y-4 p-8">
          <p className="font-bold">Inventory & Transaction Management System</p>

          <div>
            <p>Operational inventory tracking and transactional workflows</p>
            <ul className="list-inside list-disc">
              <li>Focus: transactional integrity, record keeping, validation</li>
              <li>Contexts: clinics, community programs, internal operations</li>
            </ul>
          </div>

          <div>
            <a href="#" className="text-link hover:brightness-110">
              → Case Study
            </a>
            <br />
            <a href="#" className="text-link hover:brightness-110">
              → Repository
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
