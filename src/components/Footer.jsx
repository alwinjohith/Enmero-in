import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo/enmero-logo.png';
import { LEGAL_PAGES } from '../routes.js';

const goHome = (e) => {
  e.preventDefault();
  if (window.location.hash.startsWith('#/')) {
    window.location.hash = '';
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>

        <div className={styles.footerInner}>
          <a href="#top" onClick={goHome} className={styles.brandLink} aria-label="Enmero homepage">
            <img src={logo} alt="Enmero" className={styles.footerLogo} />
          </a>

          <nav className={styles.linkGroups} aria-label="Site">
            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Services</span>
              <a href="#/services" className={styles.footerLink}>
                All services
              </a>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Products</span>
              <a href="#/watch-tower" className={styles.footerLink}>
                Watchtower
              </a>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Contact</span>
              <a href="#/contact" className={styles.footerLink}>
                Get in touch
              </a>
              <a href="mailto:contact@enmero.in" className={styles.footerLink}>
                contact@enmero.in
              </a>
            </div>
          </nav>
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
