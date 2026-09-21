import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/enmero-logo.png';

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logoSection}>
            <img src={logo} alt="enmero logo" className={styles.logoImage} />
            <span className={styles.logoText}>enmero</span>
          </div>

          {/* Desktop Left Menu Links */}
          <div className={styles.menuDesktopLeft}>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#how-it-works" className={styles.navLink}>Process</a>
          </div>
        </div>

        <div className={styles.menuDesktopRight}>
          {isLoggedIn ? (
            <a href="#" onClick={onLogout} className={styles.seeDemoButton}>Exit Console</a>
          ) : (
            <>
              <a href="#request-access" className={styles.seeDemoButton}>Get in Touch</a>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className={styles.menuMobile}>
          <a href="#services" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</a>
          <a href="#how-it-works" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Process</a>
          {isLoggedIn ? (
            <a href="#" className={styles.mobileLink} onClick={(e) => { setIsOpen(false); onLogout(e); }}>Exit Console</a>
          ) : (
            <>
              <a href="#request-access" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Get in Touch</a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
