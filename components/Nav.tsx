'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { NAV } from '@/data/site';
import Button from './Button';
import { ChevronIcon, ExternalIcon, ArrowRightIcon } from './icons';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 16;
      setScrolled(isScrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-locked');
      burgerRef.current?.setAttribute('aria-expanded', 'true');
    } else {
      document.body.classList.remove('menu-locked');
      burgerRef.current?.setAttribute('aria-expanded', 'false');
    }
    return () => {
      document.body.classList.remove('menu-locked');
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const headerClass = scrolled ? `${styles.nav} is-scrolled` : styles.nav;

  return (
    <header className={headerClass} data-nav>
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.navBrand} aria-label="Enmero — Home">
          <img
            src="/img/enmero-white.png"
            alt="Enmero"
            className={styles.navLogo}
            width="132"
            height="27"
            draggable="false"
          />
        </Link>

        <nav className={styles.navMenu} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV.primary.map((item) => (
              <li className={`${styles.navItem} nav-item`} data-dropdown key={item.label}>
                {item.items ? (
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                    <ChevronIcon size={10} className={styles.navCaret} />
                  </Link>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}
                {item.items && (
                  <div className={`${styles.dropdown} dropdown`}>
                    <ul className={styles.dropdownList}>
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link href={sub.href} className={styles.dropdownLink}>
                            <span>{sub.label}</span>
                            <ArrowRightIcon size={14} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.navCta}>
            <a
              href="https://eoai.enmero.in"
              className={styles.navExternal}
              target="_blank"
              rel="noopener noreferrer"
            >
              eoAI Research
              <ExternalIcon size={12} />
            </a>
            <Link href={NAV.cta.href} className={styles.navChip}>
              {NAV.cta.label}
            </Link>
          </div>
        </nav>

        <button
          ref={burgerRef}
          className={styles.navBurger}
          data-menu-toggle
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={menuOpen ? `${styles.mobileMenu} is-open` : styles.mobileMenu}
        id="mobile-menu"
        data-menu
      >
        <nav className={`container ${styles.mobileInner}`} aria-label="Mobile">
          <ul className={styles.mobileList}>
            {NAV.primary.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.items && (
                  <ul className={styles.mobileSublist}>
                    {item.items.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className={styles.mobileSublink}
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a
                href="https://eoai.enmero.in"
                className={styles.mobileLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                eoAI Research ↗
              </a>
            </li>
          </ul>
          <div className={styles.mobileFooter}>
            <Button href="/contact" arrow size="lg">
              Contact Enmero
            </Button>
            <p className={styles.mobileTagline}>Engineering future standards.</p>
          </div>
        </nav>
      </div>
    </header>
  );
}