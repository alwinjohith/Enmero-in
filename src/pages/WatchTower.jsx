import React from 'react';
import styles from './WatchTower.module.css';
import { ArrowUpRight } from 'lucide-react';
import watchtowerLogo from '../../assets/logo/watchtower-logo.png';

const capabilities = [
  {
    title: 'Traffic Protection',
    desc: 'Incoming traffic is inspected before reaching your website. Suspicious or unwanted requests can be identified and filtered, so only legitimate visitors reach your server.'
  },
  {
    title: 'DDoS Protection',
    desc: 'Protection against traffic floods designed to overwhelm your website. The system helps absorb and filter excessive traffic so your site stays available for real visitors.'
  },
  {
    title: 'Bot Protection',
    desc: 'The system distinguishes normal visitors from automated or suspicious traffic. This helps reduce unwanted bot activity on your website without blocking legitimate users.'
  },
  {
    title: 'Web Application Firewall',
    desc: 'Requests are checked against security rules before being passed to your website. This adds a layer of filtering that helps block common attack patterns and malicious input.'
  },
  {
    title: 'Rate Limiting',
    desc: 'Excessive requests from a single source can be limited to prevent abuse and unnecessary load on your server. This helps keep your website stable during traffic spikes.'
  },
  {
    title: 'HTTPS / Secure Traffic',
    desc: 'The protection layer sits in front of your website while maintaining secure HTTPS traffic. Your visitors see the same secure connection they expect.'
  }
];

const steps = [
  {
    step: '01',
    title: 'Visitor',
    desc: 'Someone visits your website by entering your URL or clicking a link.'
  },
  {
    step: '02',
    title: 'Enmero Protection Layer',
    desc: 'Traffic reaches the Enmero protection layer first. Every request is inspected and evaluated before reaching your server.'
  },
  {
    step: '03',
    title: 'Filter',
    desc: 'Suspicious, abusive, or unwanted traffic is blocked or limited. Clean traffic is passed through without delay.'
  },
  {
    step: '04',
    title: 'Your Website',
    desc: 'Legitimate traffic arrives at your website. Your visitors experience the same site, but with an added layer of protection behind the scenes.'
  }
];

const benefits = [
  {
    title: 'Sits in front of your website',
    desc: 'The protection layer acts as a barrier between your visitors and your server, filtering traffic before it reaches your infrastructure.'
  },
  {
    title: 'Does not affect normal visitors',
    desc: 'Legitimate traffic passes through without interruption. Your visitors will not notice any difference in how your website loads or behaves.'
  },
  {
    title: 'Reduces attack surface',
    desc: 'By filtering unwanted traffic early, your website receives fewer malicious requests, reducing the load on your server and applications.'
  }
];

export default function WatchTower() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${styles.container} container`}>
          <img src={watchtowerLogo} alt="Enmero Protection Layer" className={styles.heroLogo} />
          <span className={styles.eyebrow}>Enmero product</span>
          <h1 className={styles.heroTitle}>Website Protection Layer</h1>
          <p className={styles.heroSubtitle}>
            A protection layer that sits between your website visitors and your server.
            Traffic is inspected and filtered before it reaches your website, helping
            keep your site available and your infrastructure clean.
          </p>
          <div className={styles.heroCta}>
            <a href="#/demo" className={styles.primaryBtn}>
              Request a Demo
              <ArrowUpRight size={14} />
            </a>
            <a href="#protection-how-it-works" className={styles.secondaryBtn}>See how it works</a>
          </div>
        </div>
      </section>

      {/* What it protects against */}
      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>What it protects against</h2>
          <p className={styles.sectionLead}>
            The protection layer helps your website handle a range of unwanted traffic.
            Here are the main capabilities.
          </p>
          <div className={styles.capabilityGrid}>
            {capabilities.map((cap) => (
              <div key={cap.title} className={styles.capabilityCard}>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="protection-how-it-works">
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.sectionLead}>
            The protection layer sits in front of your existing website. Here is what happens
            when someone visits your site.
          </p>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.step} className={styles.stepCard}>
                <span className={styles.stepBadge}>{s.step}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why use it */}
      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>Why use it</h2>
          <div className={styles.benefitGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.ctaTitle}>See it in action</h2>
          <p className={styles.ctaDesc}>
            Request a demo and we will show you how the protection layer works with your website.
          </p>
          <a href="#/demo" className={styles.primaryBtn}>
            Get a Demo
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
