import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import CtaBanner from '@/components/CtaBanner';
import DomainsSpy from '@/components/DomainsSpy';
import DomainCard from '@/components/cards/DomainCard';
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
        index="01 · Domains"
        eyebrow="Core domains"
        title="Three disciplines."
        titleAccent="One standard."
        lead="Enmero operates across three engineering disciplines: advanced artificial intelligence systems, next-generation software platforms, and autonomous infrastructure. Together they form the stack behind everything we build."
        actions={[
          <Button key="solutions" href="/solutions" variant="primary" size="lg" arrow>
            Explore Solutions
          </Button>,
          <Button key="research" href="/research" variant="ghost" size="lg">
            Research
          </Button>,
        ]}
      />

      {/* Overview grid */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">No. 01 · The three domains</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">One company. Three engineering disciplines.</h2>
              </Reveal>
            </div>
          </div>

          <div className={styles.overviewGrid}>
            {DOMAINS.map((d, i) => (
              <DomainCard
                key={d.id}
                index={d.index}
                title={d.name}
                short={d.short}
                tags={d.tags}
                href={`#${d.id}`}
                delay={0.06 + i * 0.08}
                featured={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

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
                    <Reveal asInline={false} delay={0.24}>
                      <div className={styles.domainFoot}>
                        {d.tags.map((t) => (
                          <span key={t} className={styles.domainFootTag}>
                            {t}
                          </span>
                        ))}
                      </div>
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
        lead="Explore the solutions that emerge from these disciplines, including Leaf Singularity, the adaptive computing platform in development at the eoAI research division."
        ctaLabel="Explore Solutions"
        ctaHref="/solutions"
      />
    </>
  );
}