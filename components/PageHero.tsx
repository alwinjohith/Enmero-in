import type { ReactNode } from 'react';
import Reveal from './Reveal';
import styles from './PageHero.module.css';

interface PageHeroMeta {
  label: string;
  value: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  lead?: string;
  index?: string;
  meta?: PageHeroMeta[];
  compact?: boolean;
  actions?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  lead,
  index,
  meta = [],
  compact = false,
  actions,
}: PageHeroProps) {
  return (
    <header className={compact ? `${styles.pageHero} ${styles.pageHeroCompact}` : styles.pageHero}>
      <div className={styles.pageHeroBg} aria-hidden="true">
        <div className={styles.pageHeroGrid}></div>
        <div className={styles.pageHeroTopLight}></div>
        <div className={`${styles.pageHeroOrb} ${styles.pageHeroOrb1}`}></div>
        <div className={`${styles.pageHeroOrb} ${styles.pageHeroOrb2}`}></div>
        <div className={styles.pageHeroScan}></div>
      </div>

      <div className={`container ${styles.inner}`}>
        {index && (
          <Reveal delay={0}>
            <span className={`section-index ${styles.pageHeroIndex}`}>{index}</span>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal delay={0.05}>
            <span className={`eyebrow ${styles.pageHeroEyebrow}`}>{eyebrow}</span>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <h1 className={styles.pageHeroTitle}>
            {title}
            {titleAccent && (
              <span className={styles.pageHeroTitleAccent}>
                <br />
                {' '}
                {titleAccent}
              </span>
            )}
          </h1>
        </Reveal>

        {lead && (
          <Reveal delay={0.18}>
            <p className={styles.pageHeroLead}>{lead}</p>
          </Reveal>
        )}

        {actions && (
          <Reveal delay={0.24}>
            <div className={styles.pageHeroActions}>{actions}</div>
          </Reveal>
        )}

        {meta.length > 0 && (
          <Reveal delay={0.26}>
            <dl className={styles.pageHeroMeta}>
              {meta.map((m) => (
                <div className={styles.pageHeroMetaItem} key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </header>
  );
}