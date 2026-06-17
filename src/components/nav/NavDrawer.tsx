import { motion } from 'motion/react';
import Link from 'next/link';
import CloseIcon from '../../assets/icons/close.svg';
import { MenuItem, SocialIcon } from '../../data/navData';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

interface NavDrawerProps {
  menuItems: MenuItem[];
  socialIcons: SocialIcon[];
  onClose: () => void;
  onToggleSublinks: (label: string) => void;
  openSublinks: Record<string, boolean>;
}

const NavDrawer = ({ menuItems, socialIcons, onClose }: NavDrawerProps) => {
  return (
    <motion.div
      key="mobile-menu"
      className="bg-background text-foreground fixed inset-0 z-9999 h-screen w-screen p-4 pt-5 text-right lg:hidden"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      role="dialog"
      aria-hidden={false}
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.div
        className="bg-background/80 fixed inset-0 -z-10 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      <div className="mb-4 flex items-center justify-between">
        <ThemeToggle />

        <button type="button" onClick={onClose} aria-label="Close navigation">
          <CloseIcon className="stroke-foreground h-6 w-6 cursor-pointer" aria-hidden="true" />
        </button>
      </div>

      <ul className="mt-10 space-y-5">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="link font-heading text-3xl font-semibold tracking-tight"
              onClick={onClose}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-end">
        <SocialLinks icons={socialIcons} />
      </div>
    </motion.div>
  );
};

export default NavDrawer;
