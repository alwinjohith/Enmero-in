import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        
        {/* Top half: split content */}
        <div className={styles.topHalf}>
          {/* Left: long disclaimer text */}
          <div className={styles.disclaimerCol}>
            <p className={styles.disclaimerText}>
              Enmero is a technology consultancy that builds software, web applications, and digital products. We work with startups and established businesses to deliver technology that works.
            </p>
          </div>

          {/* Right: navigation links columns */}
          <div className={styles.linksBlock}>
            <div className={styles.linkCol}>
              <h4 className={styles.colHeader}>enmero</h4>
              <ul className={styles.linkList}>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colHeader}>Legal</h4>
              <ul className={styles.linkList}>
                <li><a href="#privacy">Privacy policy</a></li>
                <li><a href="#terms">Terms of service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <a href="https://enmero.com" target="_blank" rel="noreferrer" className={styles.bottomUrl}>
              https://enmero.com
            </a>
          </div>
          <div className={styles.bottomRight}>
            <span>© {new Date().getFullYear()} enmero. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
