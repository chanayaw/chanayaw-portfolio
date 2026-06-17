import Link from 'next/link';
import { MenuItem, SocialIcon } from '../../data/navData';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

interface PrimaryNavProps {
  menuItems: MenuItem[];
  socialIcons: SocialIcon[];
  onToggleSublinks: (label: string) => void;
  openSublinks: Record<string, boolean>;
}

const PrimaryNav = ({ menuItems, socialIcons }: PrimaryNavProps) => {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <ul className="flex flex-row items-center gap-8">
        {menuItems.map((item) => (
          <li key={item.label} className="group relative">
            <Link
              href={item.href}
              className="link font-mono-brand text-sm font-semibold tracking-[0.18em] uppercase"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <SocialLinks icons={socialIcons} />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default PrimaryNav;
