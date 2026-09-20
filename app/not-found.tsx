import Button from '@/components/Button';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Page Not Found | Enmero',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className={styles.nf}>
      <div className={styles.nfBg} aria-hidden="true">
        <div className={styles.nfGrid}></div>
      </div>
      <div className={`container ${styles.nfInner}`}>
        <span className="eyebrow">Error 404</span>
        <h1 className={styles.nfTitle}>This standard isn&apos;t published yet.</h1>
        <p className={`muted ${styles.nfBody}`}>
          The page you&apos;re looking for doesn&apos;t exist or has moved. Return to the
          Enmero homepage to explore the company, domains, and research.
        </p>
        <div className={styles.nfActions}>
          <Button href="/" variant="primary" arrow size="lg">
            Back to Homepage
          </Button>
          <Button href="/solutions" variant="ghost" size="lg">
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}