import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import styles from './page.module.css';

const stances = [
  'We are building for the long term, not for a moment.',
  'Public statements will only ever reflect verified reality.',
  'Formal investor communications are handled directly via official channels.',
];

export const metadata = makeMetadata({
  title: 'Investors',
  description:
    'Investor information for Enmero. Enmero is a privately held technology and engineering company founded in 2025.',
  path: '/investors',
});

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        index="Investors"
        eyebrow="For investors"
        title="Built for the long term."
        lead="Enmero is a privately held technology and engineering company. We build systems for the long term, and we treat capital the way we treat software — structurally, responsibly, and with intent."
      />

      <section className={`section section--dark ${styles.statusSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">Company status</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.statusTitle}>An honest picture.</h2>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.14}>
                <p className={`muted ${styles.statusBody}`}>
                  Enmero is privately held. As an early-stage company, investor information and
                  formal communications are shared selectively and directly. There is no
                  published financial history or public securities data for Enmero — and we
                  will not fabricate any.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <dl className={styles.statusFacts}>
                  <div>
                    <dt>Entity</dt>
                    <dd>Private technology &amp; engineering company</dd>
                  </div>
                  <div>
                    <dt>Founded</dt>
                    <dd>2025</dd>
                  </div>
                  <div>
                    <dt>Headquarters</dt>
                    <dd>India</dd>
                  </div>
                  <div>
                    <dt>Industries</dt>
                    <dd>Software · Artificial intelligence</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`section theme-light ${styles.principleSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">Our stance</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.principleTitle}>Standards apply to capital, too.</h2>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.14}>
                <ul className={styles.principleList}>
                  {stances.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal asInline={false} delay={0.24}>
                <div className={styles.investCta}>
                  <Button href="/contact" variant="dark" arrow>
                    Reach Enmero Directly
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}