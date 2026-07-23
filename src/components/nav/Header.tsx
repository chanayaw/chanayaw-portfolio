'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';

import { MenuItems, SocialIcons } from '../../data/navData';
import MenuButton from './MenuButton';
import NavDrawer from './NavDrawer';
import PrimaryNav from './PrimaryNav';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const handleDesktopBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu();
      }
    };

    const desktopBreakpoint = window.matchMedia('(min-width: 64rem)');

    window.addEventListener('keydown', handleKeyDown);
    desktopBreakpoint.addEventListener('change', handleDesktopBreakpoint);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      desktopBreakpoint.removeEventListener('change', handleDesktopBreakpoint);

      document.body.style.overflow = previousOverflow;
    };
  }, [closeMenu, menuOpen]);

  return (
    <header className="border-default bg-background/90 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-360 items-center justify-between gap-6 px-6 py-4 md:px-10"
      >
        <Link
          href="/"
          aria-label="Chanaya W — home"
          className="ring-brand text-accent hover:text-primary font-heading inline-flex shrink-0 items-center rounded-lg py-1 text-xl font-normal tracking-[0.2em] lowercase transition-colors md:text-2xl md:tracking-[0.24em]"
          onClick={closeMenu}
        >
          chanaya w
        </Link>

        <div className="flex items-center gap-3">
          <PrimaryNav menuItems={MenuItems} socialIcons={SocialIcons} />

          <MenuButton onClick={() => setMenuOpen(true)} />
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <NavDrawer menuItems={MenuItems} socialIcons={SocialIcons} onClose={closeMenu} />
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
