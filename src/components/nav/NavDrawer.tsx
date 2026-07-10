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
      className="bg-background text-foreground fixed inset-0 z-9999 h-screen w-screen overflow-y-auto lg:hidden"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.div
        className="bg-background/86 fixed inset-0 -z-10 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      <div className="data-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="relative z-10 flex min-h-screen flex-col px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose} className="inline-flex flex-col leading-none">
            <span className="font-heading text-primary text-3xl font-normal tracking-tight">
              Chanaya W
            </span>

            <span className="font-mono-brand text-accent mt-1 text-[0.62rem] font-semibold tracking-[0.24em] uppercase">
              Health Equity Informatics
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="ring-brand border-default bg-surface text-foreground shadow-card hover:bg-surface-soft inline-flex h-10 w-10 items-center justify-center rounded-full border transition"
            >
              <CloseIcon className="h-5 w-5 stroke-current" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-16">
          <p className="font-mono-brand text-accent mb-6 text-xs font-semibold tracking-[0.24em] uppercase">
            Navigation
          </p>

          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group border-default bg-card shadow-card hover:bg-surface-soft hover:shadow-pop flex items-center justify-between rounded-3xl border px-5 py-4 backdrop-blur transition hover:-translate-y-0.5"
                  onClick={onClose}
                >
                  <span className="font-heading text-primary text-3xl font-normal tracking-tight">
                    {item.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-accent transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-12">
          <div className="border-default bg-surface-soft/70 rounded-[2rem] border p-5">
            <p className="font-heading text-primary text-2xl leading-tight">
              Pink, precise, and patient-centered.
            </p>

            <p className="text-muted mt-3 text-sm leading-relaxed">
              Digital health, health data, patient education, care navigation, and Women’s Health
              Equity Advocacy & Informatics.
            </p>

            <div className="mt-5">
              <SocialLinks icons={socialIcons} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavDrawer;
