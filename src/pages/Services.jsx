import React from 'react';
import styles from './Services.module.css';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, WATCHTOWER_SERVICE, servicePath } from '../data/services.js';

const approach = [
  {
    title: 'Understand the problem',
    desc: 'We start by understanding your business, your users, and the problem you are trying to solve, then agree what is in scope.'
  },
  {
    title: 'Design and build',
    desc: 'Interface design, architecture, and development happen in focused sprints, with progress you can review and feedback you can give.'
  },
  {
    title: 'Deliver and support',
    desc: 'We handle deployment, testing, and handoff, and we provide documentation so your team can work with the product after launch.'
  }
];

export default function Services() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={`${styles.container} container`}>
          <span className={styles.eyebrow}>Services</span>
          <h1 className={styles.heroTitle}>What we do</h1>
          <p className={styles.heroSubtitle}>
            Enmero is a technology consultancy. These are the services we work on. Every service has
            its own page, so you can read how we approach it before getting in touch.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>Our services</h2>
          <p className={styles.sectionLead}>
            Every engagement is scoped around your requirements, so what you get from each service is
            agreed before work begins.
          </p>

          <ol className={styles.serviceList}>
            {SERVICES.map((service, index) => (
              <li key={service.id} className={styles.serviceItem}>
                <a href={`#${servicePath(service.id)}`} className={styles.serviceLink}>
                  <span className={styles.serviceIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.serviceBody}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.serviceHeadline}>{service.headline}</span>
                    <span className={styles.serviceSummary}>{service.summary}</span>
                  </span>
                  <span className={styles.serviceArrow} aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>How every engagement runs</h2>
          <p className={styles.sectionLead}>
            The service you choose, the way we work stays the same. We keep the process clear and
            you stay involved throughout.
          </p>
          <div className={styles.approachGrid}>
            {approach.map((item) => (
              <div key={item.title} className={styles.approachItem}>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <span className={styles.ctaEyebrow}>Ongoing management</span>
          <h2 className={styles.ctaTitle}>Looking for ongoing product management?</h2>
          <p className={styles.ctaDesc}>{WATCHTOWER_SERVICE.summary}</p>
          <div className={styles.ctaActions}>
            <a href="#/watch-tower" className={styles.primaryBtn}>
              Explore Watchtower
              <ArrowUpRight size={14} />
            </a>
            <a href="#/contact" className={styles.secondaryBtn}>
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
