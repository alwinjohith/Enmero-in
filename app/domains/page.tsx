import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBanner from '@/components/CtaBanner';
import DomainsSpy from '@/components/DomainsSpy';
import { DOMAINS } from '@/data/site';
import styles from './page.module.css';

export const metadata = makeMetadata({
  title: 'Domains',
  description:
    "Enmero's engineering domains: advanced artificial intelligence systems, next-generation software platforms, and autonomous infrastructure.",
  path: '/domains',
});

export default function DomainsPage() {
  return (
    <>
      <PageHero
        index="01 — Domains"
        eyebrow="Core domains"
        title="Three disciplines. One standard."
        lead="Enmero operates across three engineering disciplines — advanced artificial intelligence systems, next-generation software platforms, and autonomous infrastructure. Together they form the stack behind everything we build."
        meta={[
          { label: 'Domains', value: '3' },
          { label: 'AI Division', value: 'eoAI' },
          { label: 'Stance', value: 'Engineering future standards' },
        ]}
      />

      {/* Sticky subnav */}
      <DomainsSpy />

      {/* Domain sections */}
      <div className={styles.domainSections}>
        {DOMAINS.map((d, i) => {
          const light = i % 2 === 1;
          return (
            <section
              id={d.id}
              className={`section ${i % 2 === 0 ? 'section--dark' : 'theme-light'} domain-block`}
              data-spy
              key={d.id}
            >
              <div className="container">
                <div className="grid-split">
                  <div className="col-5">
                    <Reveal asInline={false} delay={0}>
                      <span
  className={light ? `${styles.diLight} section-index di-light` : 'section-index'}
>
                        {d.index}
                      </span>
                    </Reveal>
                    <Reveal asInline={false} delay={0.08}>
                      <h2 className={light ? `${styles.domainName} dn-light` : styles.domainName}>
                        {d.name}
                      </h2>
                    </Reveal>
                    <Reveal asInline={false} delay={0.16}>
                      <p className={light ? `muted ${styles.domainLede}` : styles.domainLede}>
                        {d.short}
                      </p>
                    </Reveal>
                  </div>
                  <div className="col-7">
                    <Reveal asInline={false} delay={0.14} variant={i % 2 === 0 ? 'right' : 'left'}>
                      <div
                        className={
                          light ? `${styles.domainVisual} domain-visual--light` : styles.domainVisual
                        }
                        aria-hidden="true"
                      >
                        <div className={styles.dvHead}>
                          <span className={styles.dvId}>ENM-{d.index}</span>
                          <span className={styles.dvSys}>ACTIVE</span>
                        </div>
                        <div className={styles.dvBody}>
                          <span className={`${styles.dvRing} ${styles.dvRing1}`}></span>
                          <span className={`${styles.dvRing} ${styles.dvRing2}`}></span>
                          <span className={`${styles.dvRing} ${styles.dvRing3}`}></span>
                          <span className={styles.dvCore}></span>
                          <div className={styles.dvTraces}>
                            {Array.from({ length: 5 }).map((_, n) => (
                              <i key={n}></i>
                            ))}
                          </div>
                        </div>
                        <div className={styles.dvFoot}>
                          {d.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </Reveal>

                    <Reveal asInline={false} delay={0.28}>
                      <div className={styles.domainNotes}>
                        <div className={styles.domainNote}>
                          <span className={styles.dnLabel}>Tag</span>
                          <p className={styles.dnText}>{d.tags.join(' · ')}</p>
                        </div>
                        <div className={styles.domainNote}>
                          <span className={styles.dnLabel}>Related</span>
                          <p className={styles.dnText}>Engineering &amp; Research — {d.index}</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner
        eyebrow="From domains to delivery"
        title="Follow the engineering."
        lead="Explore the solutions that emerge from these disciplines — including Leaf Singularity, the adaptive computing platform in development at eoAI."
        ctaLabel="Explore Solutions"
        ctaHref="/solutions"
      />
    </>
  );
}