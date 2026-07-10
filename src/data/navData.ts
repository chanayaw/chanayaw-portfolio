import GitHub from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Substack from '../assets/icons/substack.svg';
import YouTube from '../assets/icons/youtube.svg';
import Instagram from '../assets/icons/instagram.svg';
import Threads from '../assets/icons/threads.svg';
import TikTok from '../assets/icons/tiktok.svg';

export type MenuItem = {
  label: string;
  href: string;
  active?: boolean;
  subLinks?: MenuItem[];
};

export type SocialIcon = {
  label: string;
  href: string;
  active?: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const MenuItems: MenuItem[] = [
  { label: 'Home', href: '/', active: true },
  { label: 'Projects', href: '/projects', active: true },
  { label: 'Diary', href: '/field-notes', active: true },
  { label: 'About', href: '/about', active: true },
  { label: 'Contact', href: '/contact', active: true },
];

export const SocialIcons: SocialIcon[] = [
  { label: 'GitHub', href: 'https://github.com/chanayaw', icon: GitHub, active: true },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/chanaya-wheeler',
    icon: LinkedIn,
    active: true,
  },
  {
    label: 'The Informatics Diary on Substack',
    href: 'https://theinformaticsdiary.substack.com',
    icon: Substack,
    active: true,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@chanayaw',
    icon: YouTube,
    active: true,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/chanayaw',
    icon: Instagram,
    active: true,
  },
  {
    label: 'Threads',
    href: 'https://threads.com/chanayaw',
    icon: Threads,
    active: true,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@chanaya.w',
    icon: TikTok,
    active: true,
  },
];
