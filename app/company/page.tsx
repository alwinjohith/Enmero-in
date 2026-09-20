import Link from 'next/link';
import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import CtaBanner from '@/components/CtaBanner';
import { ArrowRightIcon } from '@/components/icons';
import { DOMAINS } from '@/data/site';
import styles from './page.module.css';

export const metadata = makeMetadata({
  title: 'Company',
  description:
    'Enmero is a global technology and engineering corporation developing advanced artificial intelligence systems, next-generation software platforms, and autonomous infrastructure. Founded 2025, headquartered in India.',
  path: '/company',
});

export default function CompanyPage() {
  return (
    <>
      <PageHero
        index="Company"
        eyebrow="Technology & Engineering"
        title="Enmero"
        titleAccent="Engineering future standards."
        lead="A global technology and engineering corporation developing advanced artificial intelligence systems, next-generation software platforms, and autonomous infrastructure."
        actions={[
          <Button key="domains" href="/domains" variant="primary" size="lg" arrow>
            Explore the Domains
          </Button>,
          <Button key="solutions" href="/solutions" variant="ghost" size="lg">
            How We Build
          </Button>,
        ]}
      />

      {/* Who we are */}
      <section className={`section theme-light ${styles.whoSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">Who we are</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.whoTitle}>Engineering is how we answer the future.</h2>
              </Reveal>
              <Reveal asInline={false} delay={0.24}>
                <div className={styles.specPanel}>
                  <div className={styles.specHead}>
                    <span className="label-mono">Enmero · Identity register</span>
                  </div>
                  <dl className={styles.specRows}>
                    <div className={styles.specRow}>
                      <dt>Founded</dt>
                      <dd>2025</dd>
                    </div>
                    <div className={styles.specRow}>
                      <dt>Headquartered</dt>
                      <dd>India</dd>
                    </div>
                    <div className={styles.specRow}>
                      <dt>Form</dt>
                      <dd>Public benefit company</dd>
                    </div>
                    <div className={styles.specRow}>
                      <dt>Horizon</dt>
                      <dd>For the long term</dd>
                    </div>
                    <div className={styles.specRow}>
                      <dt>Research division</dt>
                      <dd>eoAI</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
            <div className="col-7">
              <Reveal asInline={false} delay={0.14}>
                <p className={styles.whoBody}>
                  Enmero is a technology and engineering company that develops artificial
                  intelligence systems and software platforms. Our work spans advanced AI,
                  next-generation software, and the autonomous infrastructure required to run
                  both: a single, intentional stack built around how people actually think and
                  work.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <p className={styles.whoBody}>
                  It begins with people: their thought, their effort, their intent. Technology
                  exists in response to them, shaped by human need and direction, never above
                  it. Every system we build is an extension of human capability, not a
                  replacement of it.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.3}>
                <p className={styles.whoBody}>
                  We conduct frontier research, develop intelligent platforms, and work to
                  ensure the safety of the systems we create, as a public benefit company, for
                  the long term.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section section--dark what-section">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">What we do</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">Three disciplines, one company.</h2>
              </Reveal>
            </div>
            <Reveal asInline={false} delay={0.15}>
              <Button href="/domains" variant="ghost" arrow>
                Explore Domains
              </Button>
            </Reveal>
          </div>

          <div className={styles.whatList}>
            {DOMAINS.map((d, i) => (
              <Reveal asInline={false} delay={0.06 + i * 0.08} key={d.id}>
                <Link href={`/domains#${d.id}`} className={styles.whatRow}>
                  <span className={styles.whatIndex}>{d.index}</span>
                  <div className={styles.whatNameWrap}>
                    <h3 className={styles.whatName}>{d.name}</h3>
                    <span className={styles.whatTags}>{d.tags.join(' · ')}</span>
                  </div>
                  <p className={styles.whatDesc}>{d.short}</p>
                  <span className="card-arrow" aria-hidden="true">
                    <ArrowRightIcon size={17} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research division */}
      <section className={`section ${styles.eoaiDivSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">Research division</span>
              </Reveal>
              <Reveal asInline={false} delay={0.1}>
                <div className={styles.divPanel}>
                  <img
                    src="/img/eoai-logo-white.png"
                    alt="eoAI research division"
                    className={styles.divLogo}
                    width="150"
                    height="40"
                  />
                  <span className="label-mono">ENM · Artificial Intelligence Research</span>
                </div>
              </Reveal>
            </div>
            <div className="col-7">
              <Reveal asInline={false} delay={0.06}>
                <h2 className={styles.divTitle}>
                  eoAI, our artificial intelligence research division.
                </h2>
              </Reveal>
              <Reveal asInline={false} delay={0.14}>
                <p className={styles.divBody}>
                  eoAI focuses on reasoning systems, autonomous architectures, multimodal
                  intelligence, and next-generation AI infrastructure. Through eoAI, Enmero is
                  engineering the next generation of cognitive architectures and unified
                  reasoning frameworks.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <div className={styles.divCtAs}>
                  <Button href="/eoai" variant="primary" arrow>
                    The eoAI Division
                  </Button>
                  <Button href="https://eoai.enmero.in" variant="ghost" external arrow>
                    Visit eoAI Website
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={`section theme-light ${styles.leadSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">Leadership</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.whoTitle}>Founded to build for the long term.</h2>
              </Reveal>
            </div>
            <div className="col-7">
              <Reveal asInline={false} delay={0.14}>
                <div className={styles.leadCard}>
                  <div className={styles.leadMonogram} aria-hidden="true">
                    AM
                  </div>
                  <div className={styles.leadInfo}>
                    <h3>Ashwanth Megas</h3>
                    <p>Founder &amp; Chief Executive Officer</p>
                  </div>
                </div>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <p className={styles.whoBody} style={{ marginTop: 'var(--s-24)' }}>
                  Enmero was founded by Ashwanth Megas with a clear conviction: that technology
                  and engineering, done with discipline and care for people, can set new
                  standards for what the future looks like.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Next"
        title="See what Enmero is building."
        lead="From adaptive software platforms to frontier AI research: explore the solutions, research, and publications across the company."
        ctaLabel="Explore Solutions"
        ctaHref="/solutions"
      />
    </>
  );
}