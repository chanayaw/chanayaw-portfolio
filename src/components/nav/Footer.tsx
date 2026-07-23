import Link from "next/link";

import { SocialIcons } from "../../data/navData";
import SocialLinks from "./SocialLinks";

const footerLinks = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Diary",
    href: "/field-notes",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="border-default bg-surface-soft/45 border-t">
      <div className="mx-auto grid w-full max-w-360 gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-2xl space-y-5">
          <Link
            href="/"
            aria-label="Chanaya W — home"
            className="ring-brand text-accent hover:text-primary font-heading inline-flex rounded-lg py-1 text-2xl font-normal tracking-[0.24em] lowercase transition-colors md:text-3xl"
          >
            chanaya w
          </Link>

          <div className="space-y-3">
            <p className="text-foreground max-w-xl text-base leading-relaxed font-semibold">
              Software developer and Health Services Management student transitioning into health
              information, healthcare data, and informatics.
            </p>

            <p className="text-muted max-w-xl text-sm leading-relaxed md:text-base">
              I bring experience with structured data, digital systems, documentation,
              quality-focused workflows, accessibility, and technical problem-solving as I build
              hands-on healthcare experience.
            </p>
          </div>

          <p className="font-heading text-primary text-2xl leading-[1.08] font-medium tracking-tight">
            Pink, precise, and patient-centered.
          </p>

          <p className="text-subtle max-w-xl text-sm leading-relaxed">
            Long-term direction: Women’s Health Equity Advocacy & Informatics through health
            information, data, research, and patient-centered technology.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-end">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="ring-brand text-subtle hover:text-accent rounded-md py-1 font-mono text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks icons={SocialIcons} />

          <div className="space-y-2 lg:text-right">
            <Link
              href="/contact"
              className="ring-brand text-link hover:text-accent inline-flex rounded-md text-sm font-bold transition-colors"
            >
              Open to aligned professional opportunities →
            </Link>

            <p className="text-subtle text-sm">© {new Date().getFullYear()} Chanaya W</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
