import React, { useLayoutEffect, useRef } from 'react';
import styles from './AnnouncementBar.module.css';
import { ArrowUpRight } from 'lucide-react';
import useOfferPrice from '../hooks/useOfferPrice.js';

function OfferGroup({ price, className, decorative = false }) {
  return (
    <div className={className} aria-hidden={decorative || undefined}>
      <p className={styles.offer}>
        <span className={styles.price}>
          {price}<span className={styles.period}>/month</span>
        </span>
        <span className={styles.duration}>for 15 months</span>
      </p>
      <span className={styles.divider} aria-hidden="true" />
      <p className={styles.scarcity}>First 50 customers only</p>
    </div>
  );
}

/**
 * Homepage offer bar for the introductory pricing offer. It sits directly above
 * the navbar and reports the space it occupies so the navbar can sit below it.
 * On narrow screens the offer scrolls in a loop next to a fixed call to action.
 * To retire the offer, remove the single render in App.jsx.
 */
export default function AnnouncementBar({ onOffsetChange }) {
  const barRef = useRef(null);
  const price = useOfferPrice();

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return undefined;

    const report = () => {
      const rect = bar.getBoundingClientRect();
      onOffsetChange(rect.bottom > 0 ? rect.height : 0);
    };

    report();
    window.addEventListener('scroll', report, { passive: true });
    window.addEventListener('resize', report);

    return () => {
      window.removeEventListener('scroll', report);
      window.removeEventListener('resize', report);
      onOffsetChange(0);
    };
  }, [onOffsetChange]);

  return (
    <aside className={styles.bar} aria-label="Introductory offer" ref={barRef}>
      <div className={`${styles.inner} container`}>
        <div className={styles.viewport}>
          <div className={styles.track}>
            <OfferGroup className={styles.group} price={price} />
            <OfferGroup className={styles.group} price={price} decorative />
          </div>
        </div>

        <a href="#/contact" className={styles.cta}>
          <span className={styles.ctaLabel}>Claim the Offer</span>
          <span className={styles.ctaLabelShort}>Claim</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </aside>
  );
}
