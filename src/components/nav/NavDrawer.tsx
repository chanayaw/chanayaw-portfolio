import { motion } from 'motion/react';
import Link from 'next/link';
import CloseIcon from '../../assets/icons/close.svg';
import { MenuItem, SocialIcon } from '../../data/navData';
import SocialLinks from './SocialLinks';

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
      className="fixed inset-0 z-50 h-screen w-screen bg-neutral-900/95 p-4 pt-5 text-right lg:hidden"
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
      {/* backdrop (click to close) */}
      <motion.div
        className="bg-[rgba(0, 0, 0, 0.762)] fixed inset-0 -z-10 opacity-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      <div className="mb-4 flex justify-end">
        <CloseIcon
          className="stroke-foreground h-6 w-6 cursor-pointer"
          aria-hidden="true"
          onClick={onClose}
        />
      </div>

      <ul className="mt-8 space-y-3">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="link text-2xl tracking-widest" onClick={onClose}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <SocialLinks icons={socialIcons} />
      </div>
    </motion.div>
  );
};

export default NavDrawer;
