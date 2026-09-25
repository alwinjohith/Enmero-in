import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo/enmero-logo.png';

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsProductOpen(false);
  };

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
          <a
            href="#top"
            className={styles.logoSection}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Enmero homepage"
          >
            <img src={logo} alt="Enmero" className={styles.logoImage} />
          </a>

          {/* Desktop Left Menu Links */}
          <div className={styles.menuDesktopLeft}>
            <a href="#services" className={styles.navLink}>Services</a>
            <div className={styles.navItemContainer}>
              <a href="#how-it-works" className={styles.navLink}>
                Product
                <ChevronDown size={14} className={styles.chevron} />
              </a>
              <div className={styles.dropdown}>
                <a href="#/watch-tower" className={styles.dropdownLink}>Watchtower</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.menuDesktopRight}>
          {isLoggedIn ? (
            <a href="#" onClick={onLogout} className={styles.seeDemoButton}>Exit Console</a>
          ) : (
            <>
              <a href="#/contact" className={styles.seeDemoButton}>Get in Touch</a>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => {
            setIsOpen((open) => !open);
            if (isOpen) setIsProductOpen(false);
          }}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className={styles.menuMobile} id="mobile-navigation">
          <a href="#services" className={styles.mobileLink} onClick={closeMobileMenu}>Services</a>
          <button
            type="button"
            className={`${styles.mobileLink} ${styles.mobileProductButton}`}
            onClick={() => setIsProductOpen((open) => !open)}
            aria-expanded={isProductOpen}
            aria-controls="mobile-product-menu"
          >
            Product
            <ChevronDown size={16} className={`${styles.chevron} ${isProductOpen ? styles.mobileChevronOpen : ''}`} />
          </button>
          {isProductOpen && (
            <div className={styles.mobileSubMenu} id="mobile-product-menu">
              <a href="#/watch-tower" className={styles.mobileLink} onClick={closeMobileMenu}>Watchtower</a>
            </div>
          )}
          <a href="#/contact" className={styles.mobileLink} onClick={closeMobileMenu}>Get in Touch</a>
        </div>
      )}
    </nav>
  );
}
