'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import MenuButton from './MenuButton';
import NavDrawer from './NavDrawer';
import PrimaryNav from './PrimaryNav';
import { MenuItems, SocialIcons } from '../../data/navData';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSublinks, setOpenSublinks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleSublinks = (label: string) => {
    setOpenSublinks((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-default bg-background/82 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-360 items-center justify-between px-6 py-4 md:px-10"
      >
        <Link
          href="/"
          className="ring-brand inline-flex items-center rounded-xl"
          aria-label="Chanaya W home"
        >
          <Image
            src="/logos/cw-secondary-wordmark-pink.svg"
            alt="Chanaya W"
            width={220}
            height={64}
            priority
            className="h-auto w-40 md:w-52"
          />
        </Link>

        <div className="flex items-center gap-3">
          <PrimaryNav
            menuItems={MenuItems}
            socialIcons={SocialIcons}
            onToggleSublinks={toggleSublinks}
            openSublinks={openSublinks}
          />

          <MenuButton onClick={() => setMenuOpen(true)} />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <NavDrawer
              menuItems={MenuItems}
              socialIcons={SocialIcons}
              onClose={closeMenu}
              onToggleSublinks={toggleSublinks}
              openSublinks={openSublinks}
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
