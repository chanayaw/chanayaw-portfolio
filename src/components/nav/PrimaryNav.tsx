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
    <div className="hidden items-center gap-6 lg:flex">
      <ul className="border-default bg-surface/70 shadow-card flex flex-row items-center gap-1 rounded-full border pb-1 backdrop-blur">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="font-mono-brand text-subtle hover:bg-surface-soft hover:text-accent rounded-full px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase transition"
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
