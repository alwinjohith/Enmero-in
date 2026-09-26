import React from 'react';
import styles from './ServiceOffer.module.css';
import { ArrowUpRight } from 'lucide-react';

/**
 * Introductory offer shown on the service pages. The rupee amount is fixed on
 * purpose and is never converted, so the figure stays the same for everyone.
 *
 * The call to action reuses the existing enquiry form and passes the service so
 * the visitor does not have to choose it again.
 */
export default function ServiceOffer({ serviceId }) {
  if (!serviceId) return null;

  return (
    <section className={styles.section} aria-labelledby="service-offer-title">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.body}>
            <span className={styles.eyebrow}>Introductory offer</span>
            <h2 id="service-offer-title" className={styles.title}>
              ₹399/month for 15 months
            </h2>
            <p className={styles.desc}>
              Full support is included throughout, with no separate support charge. Available to
              the first 50 customers.
            </p>
          </div>

          <div className={styles.action}>
            <a href={`#/contact?service=${serviceId}`} className={styles.cta}>
              Claim the ₹399 offer
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
