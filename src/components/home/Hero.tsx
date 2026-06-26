import { PrimaryCTA, SecondaryCTA } from '../ui/Buttons';
import { ChipThinBorder } from '../ui/Chips';
import { GlassCard } from '../ui/Cards';
import BackgroundFX from './BackgroundFX';

export default function Hero() {
  return (
    <section className="overflow-hidden lg:min-h-screen">
      <BackgroundFX opacityClass="opacity-10" showParticles />

      <div className="relative z-10 pt-16 pb-12 md:pt-18 md:pb-20 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="lg:col-span-7">
            <p className="font-mono-brand text-accent mb-4 text-xs font-semibold tracking-[0.28em] uppercase md:text-sm">
              Software · Digital Health Technology · Women&apos;s Health Equity Advocacy
            </p>

            <h1 className="font-heading max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-balance md:text-6xl md:leading-[1.05] lg:text-7xl">
              Building health-tech software and advocacy-centered digital tools for clearer care
            </h1>

            <div className="text-muted mt-6 max-w-3xl space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                I&apos;m Chanaya
                <span className="text-accent ml-2 align-top text-sm font-medium tracking-wide opacity-80 md:text-base">
                  (shh-nay-yuh)
                </span>
                , a software developer and Health Services Management student building toward
                Digital Health Technologist work, biomedical informatics, health data, and
                women&apos;s health equity advocacy. My work connects health-tech software, patient
                education, care navigation, health information systems, and research-informed
                advocacy for underrepresented women.
              </p>

              <p>
                Sometimes that work looks like building technical foundations and digital health
                product concepts. Sometimes it looks like writing about women&apos;s health
                disparities, patient dismissal, delayed diagnosis, care access, and whole-body
                women&apos;s health. The advocacy and research fuel the technology, not the other
                way around.
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
                    Health-tech software, digital health products, health data, patient education,
                    care navigation, and women&apos;s health equity advocacy.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Building Toward
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Digital Health Technologist work across biomedical informatics, clinical
                    decision support concepts, health information systems, patient-centered tools,
                    and research-informed advocacy.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Academic Path
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    BS in Health Services Management at UMGC with confirmed certificate pathways in
                    Health Information Management & Data Analytics and Data Analytics.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Technical Strengths
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Frontend architecture, API design, structured data systems, workflow design,
                    accessibility, and full-stack health-tech applications.
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
