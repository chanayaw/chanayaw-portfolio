import { PrimaryCTA, SecondaryCTA } from '../ui/Buttons';
import BackgroundFX from './BackgroundFX';

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden">
      <BackgroundFX opacityClass="opacity-10" showParticles />

      <div className="relative pt-16 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="items-center gap-10 lg:flex lg:flex-row">
            <div className="lg:text-right">
              <h1 className="mb-10 font-sans text-2xl leading-6 font-medium tracking-widest lowercase md:text-6xl md:leading-16">
                Software Engineer building research driven systems for women&apos;s health equity
              </h1>

              <p className="text-subtle mt-5 text-base tracking-wide md:text-lg">
                Women’s Health Data and Equity Technologist | Research Translator
              </p>
            </div>

            <div className="max-w-4xl">
              <div className="space-y-4">
                <p className="text-muted text-lg leading-relaxed font-light md:text-xl">
                  I am Chanaya Wheeler, a software engineer focused on building data driven systems,
                  research tooling, and technical infrastructure that make women&apos;s health
                  disparities visible and actionable.
                </p>

                <p className="text-muted text-base leading-relaxed font-light md:text-lg">
                  My work sits at the intersection of engineering, applied research, and
                  translation, with an emphasis on clarity, reproducibility, and ethical data
                  practice.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                <PrimaryCTA link="/engineering" label="View Engineering Projects" />
                <SecondaryCTA link="/research" label="Read Lab Notes" />
              </div>

              <p className="text-poetic mt-4 text-sm tracking-wide">
                Building systems that make disparities measurable, interpretable, and accountable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
