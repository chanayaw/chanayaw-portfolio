import { PrimaryCTA, SecondaryCTA } from '../ui/Buttons';
import { ChipThinBorder } from '../ui/Chips';
import { GlassCard } from '../ui/Cards';
import BackgroundFX from './BackgroundFX';

export default function Hero() {
  return (
    <section className="overflow-hidden lg:min-h-screen">
      <BackgroundFX opacityClass="opacity-10" showParticles />

      <div className="relative z-10 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-poetic-soft mb-4 text-xs font-medium tracking-[0.28em] uppercase md:text-sm">
              Software Engineer · Data &amp; Analytics Systems · Health Technology
            </p>

            <h1 className="max-w-4xl text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl md:leading-[1.05] lg:text-7xl">
              Building data-driven systems for healthcare and real-world operations
            </h1>

            <div className="text-muted mt-6 max-w-3xl space-y-4 text-base leading-relaxed font-light md:text-lg">
              <p>
                I&apos;m Chanaya
                <span className="text-poetic-soft ml-2 align-top text-sm font-light tracking-wide opacity-70 md:text-base">
                  (shh-nay-yuh)
                </span>
                , a software engineer focused on full-stack applications, analytics workflows, and
                structured data systems using TypeScript, React, Next.js, Node.js, and SQL.
              </p>

              <p>
                My work centers on building maintainable software that supports decision-making,
                improves operational clarity, and translates complex data into usable tools, with a
                growing focus on health data systems and women&apos;s health outcomes.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA link="/projects" label="View Projects" />
              <SecondaryCTA link="/health-data" label="Health Data Work" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <GlassCard>
              <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                Current Direction
              </p>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-foreground text-sm font-medium tracking-wide">Current Focus</p>
                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Data-driven web systems, analytics dashboards, internal tools, and health data
                    exploration.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-medium tracking-wide">Target Roles</p>
                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Software Engineer, Full-Stack Engineer, Analytics Engineer, and
                    HealthTech-focused roles.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-medium tracking-wide">
                    Technical Strengths
                  </p>
                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Frontend architecture, API design, structured data modeling, operational
                    workflows, and production-ready systems.
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
