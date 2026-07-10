import Link from 'next/link';
import { SocialIcons } from '../../data/navData';
import SocialLinks from './SocialLinks';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-default bg-surface-soft/45 border-t">
      <div className="mx-auto flex max-w-360 flex-col gap-8 px-6 py-10 md:px-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <Link href="/" className="ring-brand inline-flex flex-col rounded-xl leading-none -ml-4 -mt-4">
            <Image
              src="/logos/cw-primary-wordmark-pink.svg"
              alt="Chanaya W"
              width={220}
              height={64}
              priority
              className="h-auto w-40 md:w-80 dark:hidden"
            />
          </Link>

          <p className="text-muted max-w-xl text-sm leading-relaxed md:text-base">
            Software developer, Health Services Management student, and Digital Health Technologist
            in training building patient-centered tools for clearer, more equitable care.
          </p>

          <p className="font-heading text-primary text-2xl leading-tight">
            Pink, precise, and patient-centered.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <SocialLinks icons={SocialIcons} />

          <p className="text-subtle text-sm">
            © {new Date().getFullYear()} Chanaya W · The advocacy and research fuel the technology,
            not the other way around.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
