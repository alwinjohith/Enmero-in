import React from 'react';
import styles from './LegalPage.module.css';
import { ArrowLeft } from 'lucide-react';

export default function LegalPage({ title, lastUpdated = '[DATE TO BE CONFIRMED]', children }) {
  const goHome = (e) => {
    e.preventDefault();
    window.location.hash = '';
  };

  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="#top" onClick={goHome} className={styles.backLink}>
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </a>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lastUpdated}>Last updated: {lastUpdated}</p>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </article>
  );
}