import { PrimaryCTA, SecondaryCTA } from '../ui/Buttons';
import { ChipThinBorder } from '../ui/Chips';
import { GlassCard } from '../ui/Cards';
import BackgroundFX from './BackgroundFX';

export default function Hero() {
  return (
    <section className="overflow-hidden lg:min-h-screen">
      <BackgroundFX opacityClass="opacity-10" showParticles />

      <div className="relative z-10 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="lg:col-span-7">
            <p className="font-mono-brand text-accent mb-4 text-xs font-semibold tracking-[0.28em] uppercase md:text-sm">
              Software · Digital Health · Women’s Health Equity
            </p>

            <h1 className="font-heading max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-balance md:text-6xl md:leading-[1.05] lg:text-7xl">
              Software, systems, and digital health products for better care
            </h1>

            <div className="text-muted mt-6 max-w-3xl space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                I&apos;m Chanaya
                <span className="text-accent ml-2 align-top text-sm font-medium tracking-wide opacity-80 md:text-base">
                  (shh-nay-yuh)
                </span>
                , a software developer and Health Services Management student building toward
                biomedical informatics, digital health product development, and women&apos;s health
                equity.
              </p>

              <p>
                I design and build software systems, patient-centered tools, and product concepts
                that connect health systems, data, workflows, and real-world care needs.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA link="/projects" label="View Projects" />

              <SecondaryCTA link="/field-notes" label="Read Field Notes" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <GlassCard>
              <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
                Current Direction
              </p>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Current Focus
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Full-stack software, digital health products, patient-centered tools, and health
                    systems.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Building Toward
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Biomedical informatics, clinical decision support, precision medicine, and
                    women&apos;s health equity.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Technical Strengths
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Frontend architecture, API design, structured data systems, workflow design, and
                    production-ready applications.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ChipThinBorder>TypeScript</ChipThinBorder>

                <ChipThinBorder>React</ChipThinBorder>

                <ChipThinBorder>Next.js</ChipThinBorder>

                <ChipThinBorder>Node.js</ChipThinBorder>

                <ChipThinBorder>SQL</ChipThinBorder>

                <ChipThinBorder>PostgreSQL</ChipThinBorder>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
