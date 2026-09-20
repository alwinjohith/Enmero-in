import Reveal from './Reveal';
import Button from './Button';
import styles from './CtaBanner.module.css';

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'dark' | 'light';
}

export default function CtaBanner({
  eyebrow = "Let's work together",
  title,
  lead,
  ctaLabel,
  ctaHref = '/contact',
  variant = 'dark',
}: CtaBannerProps) {
  const bannerClass =
    variant === 'light'
      ? `${styles.ctaBanner} ${styles.ctaBannerLight}`
      : styles.ctaBanner;

  return (
    <section className={bannerClass}>
      <div className={styles.ctaBg} aria-hidden="true">
        <div className={styles.ctaGrid}></div>
        <div className={styles.ctaOrb}></div>
      </div>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaCopy}>
            <Reveal delay={0}>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className={styles.ctaTitle}>{title}</h2>
            </Reveal>
            {lead && (
              <Reveal delay={0.16}>
                <p className={styles.ctaLead}>{lead}</p>
              </Reveal>
            )}
          </div>
          {ctaLabel && (
            <Reveal delay={0.24}>
              <Button href={ctaHref} arrow size="lg" variant="primary">
                {ctaLabel}
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}