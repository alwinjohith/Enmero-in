import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo/enmero-logo.png';
import { LEGAL_PAGES } from '../routes.js';

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>

        <div className={styles.footerInner}>
          <a href="#top" onClick={scrollToTop} className={styles.brandLink} aria-label="Enmero homepage">
            <img src={logo} alt="Enmero" className={styles.footerLogo} />
          </a>

          <div className={styles.contactGroup}>
            <a href="#/contact" className={styles.contactLink}>
              Get in touch
            </a>
            <a href="#/watch-tower" className={styles.contactLink}>
              Watchtower
            </a>
            <a href="mailto:contact@enmero.in" className={styles.contactLink}>
              contact@enmero.in
            </a>
          </div>
        </div>

        <nav className={styles.legalNav} aria-label="Legal">
          {LEGAL_PAGES.map((page) => (
            <a key={page.path} href={`#${page.path}`} className={styles.legalLink}>
              {page.label}
            </a>
          ))}
        </nav>

        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} enmero. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}