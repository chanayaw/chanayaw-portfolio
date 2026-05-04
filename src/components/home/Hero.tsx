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
            <p className="text-poetic-soft mb-4 text-xs font-medium tracking-[0.28em] uppercase md:text-sm">
              Digital Health Technologist · Software Engineer · Product-Oriented Systems
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
                , a Digital Health Technologist and software engineer focused on full-stack
                applications, internal tools, and system-driven products using TypeScript, React,
                Next.js, Node.js, and SQL.
              </p>

              <p>
                I build maintainable software that supports real-world workflows, improves
                operational clarity, and turns complex requirements into usable systems. I&apos;m
                especially interested in health technology, product-oriented engineering, and the
                design of tools that are both technically sound and practical to use.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA link="/projects" label="View Projects" />
              <SecondaryCTA link="/about" label="About Me" />
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
                    Full-stack applications, internal tools, product-oriented systems, and health
                    technology
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-medium tracking-wide">Target Roles</p>
                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Software Engineer (Frontend or Full-Stack), HealthTech Software Engineer,
                    Associate Product Manager (Technical), and digital health roles
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-medium tracking-wide">
                    Technical Strengths
                  </p>
                  <p className="text-muted mt-1 text-sm leading-relaxed md:text-base">
                    Frontend architecture, API design, system design, operational workflows, and
                    production-ready applications
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
