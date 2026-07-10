import { PrimaryCTA, SecondaryCTA } from '../ui/Buttons';
import { ChipThinBorder } from '../ui/Chips';
import { GlassCard } from '../ui/Cards';
import BackgroundFX from './BackgroundFX';

export default function Hero() {
  return (
    <section className="overflow-hidden lg:min-h-screen">
      <BackgroundFX opacityClass="opacity-10" showParticles />

      <div className="relative z-10 pt-16 pb-12 md:pt-18 md:pb-20 lg:pt-28 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="lg:col-span-7">
            <p className="text-accent mb-4 font-mono text-xs font-semibold tracking-[0.28em] uppercase md:text-sm">
              Women&apos;s Health Equity Advocacy & Informatics
            </p>

            <h1 className="font-heading max-w-4xl text-5xl leading-[0.95] font-normal text-balance md:text-7xl md:leading-[0.95] lg:text-8xl">
              Pink, precise, and patient-centered.
            </h1>

            <p className="text-foreground mt-5 max-w-3xl text-2xl leading-snug font-semibold md:text-3xl">
              Building digital health, health data, and patient education tools for clearer, more
              equitable care.
            </p>

            <div className="text-muted mt-6 max-w-3xl space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                I&apos;m Chanaya
                <span className="text-accent ml-2 align-top text-sm font-semibold tracking-wide opacity-85 md:text-base">
                  (shh-nay-yuh)
                </span>
                , a software developer, Health Services Management student, and Digital Health
                Technologist in training building toward Women&apos;s Health Equity Advocacy &
                Informatics.
              </p>

              <p>
                My work connects health data, biomedical informatics, patient education, care
                navigation, early detection, delayed diagnosis, research translation, and
                patient-centered digital tools.
              </p>

              <p>The advocacy and research fuel the technology, not the other way around.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA link="/projects" label="View Projects" />

              <SecondaryCTA link="/field-notes" label="Read Field Notes" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <GlassCard>
              <p className="text-accent font-mono text-xs font-semibold tracking-[0.24em] uppercase">
                Current Direction
              </p>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Current Focus
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Women&apos;s Health Equity Advocacy & Informatics, early detection, delayed
                    diagnosis, precision health, health data, patient education, care navigation,
                    and patient-centered digital health tools.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-semibold tracking-wide">
                    Building Toward
                  </p>

                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Digital Health Technologist work across biomedical informatics, healthcare data
                    analytics, early detection, precision health, clinical decision support
                    concepts, health information systems, patient-centered tools, and
                    research-informed advocacy.
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
                    Full-stack development, frontend architecture, API design, structured data
                    systems, workflow design, accessibility, documentation, and product-oriented
                    technical thinking.
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
                <ChipThinBorder>Python</ChipThinBorder>
                <ChipThinBorder>Power BI</ChipThinBorder>
                <ChipThinBorder>Health Data</ChipThinBorder>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
