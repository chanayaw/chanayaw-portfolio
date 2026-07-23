"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

import CloseIcon from "../../assets/icons/close.svg";

import type { MenuItem, SocialIcon } from "../../data/navData";

import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

interface NavDrawerProps {
  menuItems: MenuItem[];
  socialIcons: SocialIcon[];
  onClose: () => void;
}

const NavDrawer = ({ menuItems, socialIcons, onClose }: NavDrawerProps) => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const isCurrentPage = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    openerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    closeButtonRef.current?.focus();

    const drawer = drawerRef.current;

    if (!drawer) {
      return;
    }

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          [
            "a[href]",
            "button:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            '[tabindex]:not([tabindex="-1"])',
          ].join(","),
        ),
      ).filter((element) => element.getAttribute("aria-hidden") !== "true");

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    drawer.addEventListener("keydown", handleTabKey);

    return () => {
      drawer.removeEventListener("keydown", handleTabKey);

      window.requestAnimationFrame(() => {
        openerRef.current?.focus();
      });
    };
  }, []);

  return (
    <motion.div
      ref={drawerRef}
      key="mobile-menu"
      className="bg-background text-foreground fixed inset-0 z-9999 h-screen w-screen overflow-y-auto lg:hidden"
      initial={reduceMotion ? { opacity: 0 } : { x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { x: "100%", opacity: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 300,
              damping: 30,
            }
      }
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div
        aria-hidden="true"
        className="bg-background/86 fixed inset-0 -z-10 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}
      />

      <div
        aria-hidden="true"
        className="data-grid pointer-events-none absolute inset-0 opacity-[0.12]"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Chanaya W — home"
            onClick={onClose}
            className="ring-brand text-accent hover:text-primary font-heading inline-flex items-center rounded-lg py-1 text-xl font-normal tracking-[0.2em] lowercase transition-colors"
          >
            chanaya w
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="ring-brand border-default bg-surface text-foreground shadow-card hover:bg-surface-soft inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition"
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
            {menuItems.map((item) => {
              const current = isCurrentPage(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`group border-default shadow-card hover:shadow-pop flex items-center justify-between rounded-3xl border px-5 py-4 backdrop-blur transition hover:-translate-y-0.5 ${
                      current ? "bg-surface-soft" : "bg-card hover:bg-surface-soft"
                    }`}
                    onClick={onClose}
                  >
                    <span
                      className={`font-heading text-3xl leading-tight font-medium tracking-[-0.025em] ${
                        current ? "text-accent" : "text-primary"
                      }`}
                    >
                      {item.label}
                    </span>

                    <span className="flex items-center gap-3">
                      {current ? (
                        <span className="font-mono-brand text-accent text-[0.62rem] font-semibold tracking-[0.18em] uppercase">
                          Current
                        </span>
                      ) : null}

                      <span
                        aria-hidden="true"
                        className="text-accent transition group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-auto pt-12">
          <div className="border-default bg-surface-soft/70 rounded-[2rem] border p-5">
            <p className="font-heading text-primary text-2xl leading-[1.08] font-medium tracking-[-0.025em]">
              Pink, precise, and patient-centered.
            </p>

            <p className="text-muted mt-3 text-sm leading-relaxed">
              Technology professional transitioning into health information, healthcare data, and
              informatics.
            </p>

            <p className="text-subtle mt-3 text-sm leading-relaxed">
              Building toward Women’s Health Equity Advocacy & Informatics through systems, data,
              research, and patient-centered technology.
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
