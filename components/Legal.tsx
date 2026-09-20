import Reveal from './Reveal';
import Button from './Button';
import styles from './Legal.module.css';

interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalProps {
  label: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  ctaTitle?: string;
  ctaLead?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function Legal({
  label,
  title,
  intro,
  sections,
  ctaTitle = 'Questions about your data?',
  ctaLead = 'Contact our team for more information.',
  ctaHref = '/contact',
  ctaLabel = 'Contact Support',
}: LegalProps) {
  return (
    <div className={styles.legal}>
      <section className={styles.legalHero}>
        <div className={`container ${styles.heroInner}`}>
          <Reveal delay={0}>
            <span className="eyebrow">{label}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>{title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.legalIntro}>{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.legalBody}>
        <div className={`container ${styles.bodyInner}`}>
          {sections.map((s, i) => (
            <Reveal asInline={false} delay={0.04} key={s.heading}>
              <article className={styles.legalSection}>
                <span className={styles.legalNum}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal asInline={false} delay={0.14}>
            <div className={styles.legalCta}>
              <div>
                <h2>{ctaTitle}</h2>
                <p>{ctaLead}</p>
              </div>
              <Button href={ctaHref} variant="primary" arrow>
                {ctaLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}