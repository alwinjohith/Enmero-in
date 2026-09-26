import React from 'react';
import styles from './Services.module.css';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, servicePath } from '../data/services.js';

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
          <h1 className={styles.heroTitle}>What we do</h1>
          <p className={styles.heroSubtitle}>
            Enmero is a technology consultancy. We help businesses solve problems,
            build digital products, and modernize how they operate. These are the
            four areas we work in.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>Our services</h2>
          <p className={styles.sectionLead}>
            Every engagement is scoped around your requirements, so what you get
            from each service is agreed before work begins.
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
            The service you choose, the way we work stays the same. We keep the
            process clear and you stay involved throughout.
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

      <section className={`${styles.section} ${styles.offerSection}`}>
        <div className={`${styles.container} container`}>
          <div className={styles.offerContent}>
            <span className={styles.offerEyebrow}>Introductory offer</span>
            <h2 className={styles.offerTitle}>
              Get started with Enmero
            </h2>
            <p className={styles.offerDesc}>
              We are offering early customers access to our services at a simple
              monthly rate. No long-term contracts, no hidden costs.
            </p>

            <div className={styles.offerDetails}>
              <div className={styles.offerPriceBlock}>
                <span className={styles.offerPrice}>₹399</span>
                <span className={styles.offerPeriod}>/month</span>
              </div>
              <div className={styles.offerMeta}>
                <span className={styles.offerDuration}>15 months</span>
                <span className={styles.offerNote}>Limited to the first 50 customers</span>
              </div>
            </div>

            <div className={styles.offerCta}>
              <a href="#/contact" className={styles.primaryBtn}>
                Claim the Offer
                <ArrowUpRight size={14} />
              </a>
              <a href="#/contact" className={styles.secondaryBtn}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <span className={styles.ctaEyebrow}>Next step</span>
          <h2 className={styles.ctaTitle}>Ready to start?</h2>
          <p className={styles.ctaDesc}>
            Tell us what you are trying to do. We will discuss your requirements
            and let you know how Enmero can help.
          </p>
          <div className={styles.ctaActions}>
            <a href="#/contact" className={styles.primaryBtn}>
              Get in Touch
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
