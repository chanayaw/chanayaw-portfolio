import type { ComponentType, SVGProps } from 'react';

import GitHub from '../assets/icons/github.svg';
import Instagram from '../assets/icons/instagram.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Substack from '../assets/icons/substack.svg';
import Threads from '../assets/icons/threads.svg';
import TikTok from '../assets/icons/tiktok.svg';
import YouTube from '../assets/icons/youtube.svg';

export type MenuItem = {
  label: string;
  href: string;
  active?: boolean;
  subLinks?: MenuItem[];
};

export type RecruiterAction = {
  label: string;
  href: string;
  available: boolean;
  download?: boolean;
};

export type SocialIcon = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/*
 * Keep primary navigation limited to routes that currently exist.
 *
 * Experience will be added when /experience is created in Phase 4.
 * Resume will be activated when the targeted resume PDF is ready.
 */
export const MenuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Diary',
    href: '/field-notes',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

/*
 * These actions establish the intended recruiter journey without
 * publishing links to destinations that do not exist yet.
 */
export const RecruiterActions: RecruiterAction[] = [
  {
    label: 'Experience',
    href: '/experience',
    available: false,
  },
  {
    label: 'Resume',
    href: '/resume/chanaya-w-resume.pdf',
    available: false,
    download: true,
  },
];

export const SocialIcons: SocialIcon[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/chanayaw',
    icon: GitHub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/chanaya-wheeler',
    icon: LinkedIn,
  },
  {
    label: 'The Informatics Diary on Substack',
    href: 'https://theinformaticsdiary.substack.com',
    icon: Substack,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@chanayaw',
    icon: YouTube,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/chanayaw',
    icon: Instagram,
  },
  {
    label: 'Threads',
    href: 'https://threads.com/chanayaw',
    icon: Threads,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@chanaya.w',
    icon: TikTok,
  },
];
