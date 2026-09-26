import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo/enmero-logo.png';
import { SERVICES, servicePath } from '../data/services.js';

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  // Desktop and mobile menus are tracked separately. The document outside-click
  // handler below belongs to the desktop Product dropdown only, and sharing one
  // flag made it tear down the mobile submenu before a touch could reach a link.
  const [isDesktopProductOpen, setIsDesktopProductOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const productRef = useRef(null);

  const onPage = () => window.location.hash.startsWith('#/');

  const goHome = (e) => {
    e.preventDefault();
    if (onPage()) {
      window.location.hash = '';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileProductOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Navigation links close the menus on hashchange rather than in their own click
  // handler. Unmounting a link while its click is being handled cancels the
  // browser's pending navigation, so the route would never change.
  useEffect(() => {
    const handleHashChange = () => closeMobileMenu();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleProduct = () => {
    setIsMobileProductOpen((open) => !open);
    setIsMobileServicesOpen(false);
  };

  const toggleServices = () => {
    setIsMobileServicesOpen((open) => !open);
    setIsMobileProductOpen(false);
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

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setIsDesktopProductOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setIsDesktopProductOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <a
            href="#top"
            className={styles.logoSection}
            onClick={goHome}
            aria-label="Enmero homepage"
          >
            <img src={logo} alt="Enmero" className={styles.logoImage} />
          </a>

          {/* Desktop Left Menu Links */}
          <div className={styles.menuDesktopLeft}>
            <div className={styles.navItemContainer}>
              <a
                href="#/services"
                className={styles.navLink}
                aria-controls="services-menu"
              >
                Services
                <ChevronDown size={14} className={styles.chevron} aria-hidden="true" />
              </a>
              <div className={`${styles.dropdown} ${styles.dropdownWide}`} id="services-menu">
                {SERVICES.map((service) => (
                  <a
                    key={service.id}
                    href={`#${servicePath(service.id)}`}
                    className={styles.dropdownLink}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <div
              className={styles.navItemContainer}
              ref={productRef}
              data-open={isDesktopProductOpen ? 'true' : 'false'}
              onMouseLeave={() => setIsDesktopProductOpen(false)}
            >
              <button
                type="button"
                className={styles.navLink}
                onClick={() => setIsDesktopProductOpen((open) => !open)}
                aria-expanded={isDesktopProductOpen}
                aria-haspopup="true"
                aria-controls="product-menu"
              >
                Product
                <ChevronDown size={14} className={styles.chevron} />
              </button>
              <div className={styles.dropdown} id="product-menu">
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
            if (isOpen) {
              setIsMobileProductOpen(false);
              setIsMobileServicesOpen(false);
            }
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
          <button
            type="button"
            className={`${styles.mobileLink} ${styles.mobileParentButton}`}
            onClick={toggleServices}
            aria-expanded={isMobileServicesOpen}
            aria-controls="mobile-services-menu"
          >
            Services
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`${styles.chevron} ${isMobileServicesOpen ? styles.mobileChevronOpen : ''}`}
            />
          </button>
          {isMobileServicesOpen && (
            <div className={styles.mobileSubMenu} id="mobile-services-menu">
              <a href="#/services" className={`${styles.mobileLink} ${styles.mobileOverviewLink}`}>
                All services
              </a>
              {SERVICES.map((service) => (
                <a
                  key={service.id}
                  href={`#${servicePath(service.id)}`}
                  className={styles.mobileLink}
                >
                  {service.name}
                </a>
              ))}
            </div>
          )}

          <button
            type="button"
            className={`${styles.mobileLink} ${styles.mobileParentButton}`}
            onClick={toggleProduct}
            aria-expanded={isMobileProductOpen}
            aria-controls="mobile-product-menu"
          >
            Product
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`${styles.chevron} ${isMobileProductOpen ? styles.mobileChevronOpen : ''}`}
            />
          </button>
          {isMobileProductOpen && (
            <div className={styles.mobileSubMenu} id="mobile-product-menu">
              <a href="#/watch-tower" className={styles.mobileLink}>Watchtower</a>
            </div>
          )}

          <a href="#/contact" className={styles.mobileLink}>Get in Touch</a>
        </div>
      )}
    </nav>
  );
}
