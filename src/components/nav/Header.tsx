'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import MenuButton from './MenuButton';
import NavDrawer from './NavDrawer';
import PrimaryNav from './PrimaryNav';
import { MenuItems, SocialIcons } from '../../data/navData';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSublinks, setOpenSublinks] = useState<Record<string, boolean>>({});

  // Close on Escape
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
    <header>
      <nav
        aria-label="Primary"
        className="bg-surface flex flex-row items-center justify-between p-4 backdrop-blur"
      >
        <Link href={'/'} className="link text-2xl font-light tracking-widest">
          chanaya w
        </Link>
        <MenuButton onClick={() => setMenuOpen(true)} />

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

        <PrimaryNav
          menuItems={MenuItems}
          socialIcons={SocialIcons}
          onToggleSublinks={toggleSublinks}
          openSublinks={openSublinks}
        />
      </nav>
    </header>
  );
};

export default Header;
