import { PrimaryCTA, SecondaryCTA } from '../ui/Buttons';
import BackgroundFX from './BackgroundFX';
// import { ChipThinBorder } from '../ui/Chips';

export default function Hero() {
  return (
    <section className="overflow-hidden lg:h-screen">
      <BackgroundFX opacityClass="opacity-10" showParticles />

      <div className="pt-12 lg:py-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-end lg:col-span-2 lg:text-right">
            <p className="text-poetic-soft mb-4 text-xs font-medium tracking-[0.28em] uppercase md:text-sm">
              Software Engineer · Data &amp; Analytics Systems · Health Technology
            </p>
            <h1 className="mb-6 max-w-208 font-sans text-3xl font-medium uppercase md:mb-10 md:text-6xl">
              Building data-driven systems for healthcare and real-world operations
            </h1>

            <div className="text-muted max-w-200 space-y-4 text-lg leading-normal font-light md:text-justify md:text-xl md:leading-relaxed">
              <p>
                I&apos;m Chanaya
                <span className="text-poetic-soft ml-2 align-top text-sm font-light tracking-wider opacity-70">
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
            {/* <div className="text-subtle mt-8 flex flex-wrap gap-3 text-sm tracking-wide">
              <ChipThinBorder>TypeScript</ChipThinBorder>
              <ChipThinBorder>React</ChipThinBorder>
              <ChipThinBorder>Next.js</ChipThinBorder>
              <ChipThinBorder>Node.js</ChipThinBorder>
              <ChipThinBorder>SQL</ChipThinBorder>
              <ChipThinBorder>PostgreSQL</ChipThinBorder>
            </div> */}
          </div>

          <div className="max-w-4xl">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                Current Direction
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-md font-bold">Current Focus</p>
                  <p className="text-muted text-md mt-1 leading-relaxed">
                    Data-driven web systems, analytics dashboards, internal tools, and health data
                    exploration.
                  </p>
                </div>

                <div>
                  <p className="text-md font-bold">Target Roles</p>
                  <p className="text-muted text-md mt-1 leading-relaxed">
                    Software Engineer, Full-Stack Engineer, Data &amp; Analytics Systems, and
                    HealthTech-focused roles.
                  </p>
                </div>

                <div>
                  <p className="text-md font-bold">Technical Strengths</p>
                  <p className="text-muted text-md mt-1 leading-relaxed">
                    Frontend architecture, API design, structured data modeling, operational
                    workflows, and production-ready systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex w-full flex-row justify-center gap-x-4 gap-y-4 lg:justify-start">
              <PrimaryCTA link="/projects" label="View Projects" />
              <SecondaryCTA link="/health-data" label="Health Data Work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
