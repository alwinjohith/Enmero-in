import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo/enmero-logo.png';

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
            <a href="#request-access" className={styles.contactLink}>
              Get in touch
            </a>
            <a href="https://enmero.in" target="_blank" rel="noreferrer" className={styles.contactLink}>
              https://enmero.in
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} enmero. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}