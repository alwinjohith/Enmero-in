import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import CtaBanner from '@/components/CtaBanner';
import PublicationCard from '@/components/cards/PublicationCard';
import DocCard from '@/components/cards/DocCard';
import { PUBLICATIONS, TRUST_DOCS } from '@/data/site';
import styles from './page.module.css';

export const metadata = makeMetadata({
  title: 'Publications & Updates',
  description:
    'Publications, updates, and open reports from the Enmero ecosystem — from division milestones to platform developments and trust documents.',
  path: '/publications',
});

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        index="Publications"
        eyebrow="Open reporting"
        title="Updates, published openly."
        lead="Progress at Enmero is reported as it happens — milestones, developments, announcements, and documents. Here is everything shared so far."
        meta={[
          { label: 'Updates', value: String(PUBLICATIONS.length) },
          { label: 'Documents', value: String(TRUST_DOCS.length) },
          { label: 'First published', value: 'January 2026' },
        ]}
      />

      <section className="section section--dark updates-section">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">News &amp; updates</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">From the Enmero ecosystem.</h2>
              </Reveal>
            </div>
          </div>

          <div className={styles.pubGrid}>
            {PUBLICATIONS.map((p, i) => (
              <PublicationCard
                key={p.title}
                date={p.date}
                tag={p.tag}
                title={p.title}
                body={p.body}
                media={p.media}
                delay={0.05 + i * 0.07}
                featured={i === 0}
                href={`#entry-${i}`}
                id={`entry-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`section theme-light ${styles.docsSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">Documents</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.docsTitle}>Governance, published.</h2>
              </Reveal>
            </div>
            <div className="col-7">
              <Reveal asInline={false} delay={0.14}>
                <p className={styles.docsLead}>
                  We work closely with regulators and standards bodies to ensure our development
                  processes meet and exceed global AI safety guidelines. Our governance
                  documents have been published as part of the Trust Center.
                </p>
              </Reveal>
              <div className={styles.docsGrid}>
                {TRUST_DOCS.map((d, i) => (
                  <DocCard
                    key={d.title}
                    tag={d.tag}
                    title={d.title}
                    body={d.body}
                    delay={0.16 + i * 0.08}
                  />
                ))}
              </div>
              <Reveal asInline={false} delay={0.3}>
                <div className={styles.docsCta}>
                  <Button href="/trust" variant="dark" arrow>
                    Visit the Trust Center
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Stay current"
        title="More is on the way."
        lead="Technical reports and publications will be shared as our systems mature. Check back as the roadmap unfolds."
        ctaLabel="Explore Research"
        ctaHref="/research"
      />
    </>
  );
}