import Link from 'next/link';
import { MenuItem, SocialIcon } from '../../data/navData';
import SocialLinks from './SocialLinks';

interface PrimaryNavProps {
  menuItems: MenuItem[];
  socialIcons: SocialIcon[];
  onToggleSublinks: (label: string) => void;
  openSublinks: Record<string, boolean>;
}

const PrimaryNav = ({ menuItems, socialIcons }: PrimaryNavProps) => {
  return (
    <ul className="hidden flex-row space-x-10 lg:flex">
      {menuItems.map((item) => (
        <li key={item.label} className="group relative">
          <Link href={item.href} className="link text-xl tracking-widest">
            {item.label}
          </Link>
        </li>
      ))}
      <SocialLinks icons={socialIcons} />
    </ul>
  );
};

export default PrimaryNav;
