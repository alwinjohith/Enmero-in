import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo/enmero-logo.png';
import { LEGAL_PAGES } from '../routes.js';
import { SERVICES, servicePath } from '../data/services.js';

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
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <a href="#top" onClick={goHome} className={styles.brandLink} aria-label="Enmero homepage">
            <img src={logo} alt="Enmero" className={styles.footerLogo} />
          </a>

          <div className={styles.linkGrid}>
            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Company</span>
              <a href="#/blog" className={styles.footerLink}>Blog</a>
              <a href="#/contact" className={styles.footerLink}>Contact Us</a>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Services</span>
              {SERVICES.map((service) => (
                <a key={service.id} href={`#${servicePath(service.id)}`} className={styles.footerLink}>
                  {service.name}
                </a>
              ))}
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Product</span>
              <a href="#/watch-tower" className={styles.footerLink}>Watchtower</a>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Support</span>
              <a href="#/contact" className={styles.footerLink}>Get in touch</a>
              <a href="mailto:contact@enmero.in" className={styles.footerLink}>contact@enmero.in</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <nav className={styles.legalNav} aria-label="Legal">
            {LEGAL_PAGES.map((page) => (
              <a key={page.path} href={`#${page.path}`} className={styles.legalLink}>
                {page.label}
              </a>
            ))}
          </nav>

          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} enmero. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
