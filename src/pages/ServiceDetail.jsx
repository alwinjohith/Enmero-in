import React from 'react';
import styles from './ServiceDetail.module.css';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { SERVICES } from '../data/services.js';
import ServiceOffer from '../components/ServiceOffer.jsx';

export default function ServiceDetail({ serviceId }) {
  const service = SERVICES.find((item) => item.id === serviceId);

  if (!service) return null;

  return (
    <div>
      <section className={styles.hero}>
        <div className={`${styles.container} container`}>
          <a href="#/services" className={styles.backLink}>
            <ArrowLeft size={14} aria-hidden="true" />
            All services
          </a>
          <h1 className={styles.heroTitle}>{service.name}</h1>
          <p className={styles.heroHeadline}>{service.headline}</p>
          <p className={styles.heroSubtitle}>{service.summary}</p>
          <div className={styles.heroCta}>
            <a href={`#/contact?service=${service.id}`} className={styles.primaryBtn}>
              Get in Touch
              <ArrowUpRight size={14} />
            </a>
            <a href="#/services" className={styles.secondaryBtn}>All services</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>What this service includes</h2>
          <div className={styles.includeList}>
            {service.includes.map((item) => (
              <div key={item.title} className={styles.includeItem}>
                <h3 className={styles.includeTitle}>{item.title}</h3>
                <p className={styles.includeDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>How we approach it</h2>
          <ul className={styles.detailList}>
            {service.details.map((detail) => (
              <li key={detail} className={styles.detailItem}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceOffer serviceId={service.id} />

      <section className={styles.ctaSection}>
        <div className={`${styles.container} container`}>
          <span className={styles.ctaEyebrow}>{service.name}</span>
          <h2 className={styles.ctaTitle}>Start a conversation</h2>
          <p className={styles.ctaDesc}>
            Tell us what you are trying to do. We will discuss your requirements and let you know
            whether this service is the right fit.
          </p>
          <a href={`#/contact?service=${service.id}`} className={styles.primaryBtn}>
            Get in Touch
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
