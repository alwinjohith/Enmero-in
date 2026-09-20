import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import { SITE } from '@/data/site';
import styles from './page.module.css';

const expectations = [
  'Real engineering — nothing theatrical, nothing decorative.',
  'Research and products under active development.',
  'An environment built around safety and long-term thinking.',
  'Direct exposure to frontier AI, software, and infrastructure work.',
];

export const metadata = makeMetadata({
  title: 'Careers',
  description:
    'Careers at Enmero. We are building the team that will engineer future standards. Reach out to explore how you can contribute.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        index="Careers"
        eyebrow="Build what comes next"
        title="The team that will engineer future standards."
        lead="Enmero is assembling the people, engineers, and researchers who will build the artificial intelligence systems, software platforms, and infrastructure of tomorrow."
      />

      <section className={`section section--dark ${styles.teamSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">Working at Enmero</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.teamTitle}>Small team. Big standards.</h2>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.14}>
                <p className={`muted ${styles.teamBody}`}>
                  Enmero is an early-stage technology company building a small, high-intent
                  team. We favor people who think from first principles, who are comfortable
                  with ambiguity, and who care deeply about craft.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <p className={`muted ${styles.teamBody}`}>
                  Openings are published through official channels as roles are formalized. If
                  you are an exceptional engineer, researcher, or builder who wants to help
                  define what Enmero becomes, we want to hear from you.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal asInline={false} delay={0.2}>
            <div className={styles.teamCta}>
              <div className={styles.teamCtaCopy}>
                <h3>Interested in joining?</h3>
                <p>Reach out to the team directly or follow Enmero on LinkedIn for updates.</p>
              </div>
              <div className={styles.teamCtaActions}>
                <Button href={SITE.linkedin} variant="primary" arrow external>
                  Enmero on LinkedIn
                </Button>
                <Button href="/contact" variant="ghost" arrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section theme-light ${styles.ethicSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">What to expect</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.ethicTitle}>Work that matters, honestly.</h2>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.14}>
                <ul className={styles.ethicList}>
                  {expectations.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}