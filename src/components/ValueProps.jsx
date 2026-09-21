import React from 'react';
import styles from './ValueProps.module.css';

export default function ValueProps() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>
            Why work with enmero
          </h2>
          <p className={styles.subtitle}>
            We are a small team that cares about the work. Here is what you get when you work with us.
          </p>
        </div>

        {/* 3-Column Props Grid */}
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.propTitle}>Engineering and design, together</h3>
            <p className={styles.propDesc}>We handle both the technical build and the visual design. No need to coordinate between separate teams.</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.propTitle}>You work with us directly</h3>
            <p className={styles.propDesc}>No account managers or intermediaries. You communicate with the people actually building your product.</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.propTitle}>Built to last</h3>
            <p className={styles.propDesc}>We write clean, maintainable code and design interfaces that hold up over time. Quality is not optional.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
