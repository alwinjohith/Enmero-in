import Link from 'next/link';
import { SITE } from '@/data/site';
import { ArrowRightIcon, ExternalIcon } from '@/components/icons';
import styles from './Footer.module.css';

const year = new Date().getFullYear();

const col1 = [
  { label: 'Company', href: '/company' },
  { label: 'Domains', href: '/domains' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
];

const col2 = [
  { label: 'eoAI Division', href: '/eoai' },
  { label: 'Trust Center', href: '/trust' },
  { label: 'Careers', href: '/careers' },
  { label: 'Investors', href: '/investors' },
  { label: 'Contact', href: '/contact' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Settings', href: '/cookies' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <img
              src="/img/enmero-white.png"
              alt="Enmero"
              className={styles.footerLogo}
              width="160"
              height="33"
              loading="lazy"
            />
            <p className={styles.footerTagline}>{SITE.tagline}</p>
            <div className={styles.footerByline}>
              <span className={styles.footerPill}>Technology &amp; Engineering</span>
              <span className={styles.footerPill}>Founded {SITE.founded}</span>
              <span className={styles.footerPill}>{SITE.headquarters}</span>
            </div>
          </div>

          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <p className={styles.footerHeading}>Company</p>
              <ul>
                {col1.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerHeading}>Divisions &amp; More</p>
              <ul>
                {col2.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerHeading}>Resources</p>
              <ul>
                <li>
                  <a
                    href="https://eoai.enmero.in"
                    className={styles.footerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    eoAI Website
                    <ExternalIcon size={14} />
                  </a>
                </li>
                <li>
                  <Link href="/publications" className={styles.footerLink}>
                    News &amp; Updates
                  </Link>
                </li>
                <li>
                  <a
                    href={SITE.linkedin}
                    className={styles.footerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <ExternalIcon size={14} />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className={styles.footerLink}>
                    Email
                  </a>
                </li>
              </ul>
              <Link href="/contact" className={styles.footerCta}>
                Work with Enmero
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerMid}>
          <p className={styles.footerStatement}>{SITE.description}</p>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            © <span data-year>{year}</span> {SITE.name}. All rights reserved.
          </p>
          <ul className={styles.footerLegal}>
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.footerLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}