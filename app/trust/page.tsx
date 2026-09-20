import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBanner from '@/components/CtaBanner';
import PillarCard from '@/components/cards/PillarCard';
import DocCard from '@/components/cards/DocCard';
import { TRUST_PILLARS, TRUST_DOCS } from '@/data/site';
import styles from './page.module.css';

const principles = [
  'Users should own their data across every Enmero service.',
  'Every model undergoes rigorous safety testing and alignment research.',
  'Enterprise-grade security protects systems from the hardware layer up.',
  'Development processes are governed, documented, and published.',
  'Vulnerabilities can be reported safely through our disclosure program.',
];

export const metadata = makeMetadata({
  title: 'Trust Center',
  description:
    'At Enmero, trust is built into every layer of our systems: data sovereignty, safety alignment, and security by design, with governance documents published openly.',
  path: '/trust',
});

export default function TrustPage() {
  return (
    <>
      <PageHero
        index="Trust Center"
        eyebrow="Privacy & Security"
        title="Trust, built into every layer."
        lead="Enmero is committed to the highest standards of safety, security, and privacy in everything we build. Trust is not a feature. It is architecture."
        meta={[
          { label: 'Pillars', value: '3' },
          { label: 'Governance', value: 'Safety Governance Framework' },
          { label: 'Program', value: 'Responsible Disclosure' },
        ]}
      />

      {/* Commitments */}
      <section className="section section--dark commitments-section">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">Our architectural pillars</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">Commitments, engineered in.</h2>
              </Reveal>
            </div>
          </div>

          <div className={styles.trustGrid}>
            {TRUST_PILLARS.map((p, i) => (
              <PillarCard
                key={p.title}
                index={`P/0${i + 1}`}
                title={p.title}
                body={p.body}
                delay={0.06 + i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & governance */}
      <section className={`section section--dark-alt ${styles.governanceSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">Standards &amp; Governance</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.govTitle}>
                  Governance that grows with the systems.
                </h2>
              </Reveal>
              <Reveal asInline={false} delay={0.16}>
                <p className={`muted ${styles.govBody}`}>
                  We work closely with regulators and standards bodies to ensure our development
                  processes meet and exceed global AI safety guidelines.
                </p>
              </Reveal>
            </div>
            <div className="col-7">
              <div className={styles.docsGrid}>
                {TRUST_DOCS.map((d, i) => (
                  <DocCard
                    key={d.title}
                    tag={d.tag}
                    title={d.title}
                    body={d.body}
                    delay={0.1 + i * 0.08}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className={`section theme-light ${styles.principleSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">How we work</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.principleTitle}>Transparency as a default.</h2>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.14}>
                <ul className={styles.principleList}>
                  {principles.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Our commitment"
        title="Building trust through transparency."
        lead="Learn more about how we govern our research and products."
        ctaLabel="Our Mission"
        ctaHref="/company"
      />
    </>
  );
}