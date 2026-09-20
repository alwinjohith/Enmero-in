import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import CtaBanner from '@/components/CtaBanner';
import { ArrowRightIcon } from '@/components/icons';
import { PLATFORMS, ROADMAP_PLATFORMS } from '@/data/site';
import styles from './page.module.css';

export const metadata = makeMetadata({
  title: 'Solutions',
  description:
    "Explore Enmero's solutions, including Leaf Singularity, a unified adaptive workspace in development at the eoAI research division.",
  path: '/solutions',
});

export default function SolutionsPage() {
  const leaf = PLATFORMS[0];
  return (
    <>
      <PageHero
        index="Solutions"
        eyebrow="What we are building"
        title="Platforms for"
        titleAccent="how work evolves."
        lead="Our solutions are engineered in development: adaptive, context-aware software that surfaces the right environment as work evolves, built on foundations designed for ultra-low latency."
        meta={[
          { label: 'Status', value: 'In development' },
          { label: 'Managed by', value: 'eoAI Research Division' },
          { label: 'Foundations', value: 'Rust · Tauri' },
        ]}
        actions={[
          <Button
            key="waitlist"
            href="https://eoai.enmero.in/waitlist"
            variant="primary"
            size="lg"
            arrow
            external
          >
            Request Early Access
          </Button>,
          <Button key="updates" href="/publications" variant="ghost" size="lg">
            Read the Updates
          </Button>,
        ]}
      />

      {/* Leaf Singularity feature */}
      <section className={`section section--dark ${styles.leafSection}`} id="leaf-singularity">
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">Featured solution</span>
              </Reveal>
              <Reveal asInline={false} delay={0.06}>
                <h2 className={styles.leafName}>{leaf.name}</h2>
              </Reveal>
              <Reveal asInline={false} delay={0.12}>
                <span className={styles.leafStatus}>
                  <span className={styles.leafDot} aria-hidden="true"></span> In development,
                  alpha stage
                </span>
              </Reveal>
              <Reveal asInline={false} delay={0.2}>
                <p className={styles.leafBody}>{leaf.body}</p>
              </Reveal>
              <Reveal asInline={false} delay={0.28}>
                <div className={styles.leafCtAs}>
                  <Button
                    href="https://eoai.enmero.in/waitlist"
                    variant="primary"
                    arrow
                    external
                    size="lg"
                  >
                    Request Early Access
                  </Button>
                  <Button href="/publications" variant="ghost" size="lg">
                    Read the Updates
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="col-6">
              <Reveal asInline={false} delay={0.16} variant="scale">
                <div className={styles.leafMedia}>
                  <video
                    src="/video/leaf_singularity_project.mp4"
                    poster="/img/prototype_leaf.jpeg"
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    aria-label="Leaf Singularity adaptive computing workspace preview"
                  ></video>
                  <div className={styles.leafMediaShade} aria-hidden="true"></div>
                  <div className={styles.leafMediaTag} aria-hidden="true">
                    <span className="label-mono">LEAF SINGULARITY · CORE SYSTEMS</span>
                    <span className={styles.leafTagPill}>ALPHA</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`section theme-light ${styles.howSection}`}>
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index" style={{ color: 'var(--l-muted)' }}>
                Design philosophy
              </span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title" style={{ color: 'var(--l-ink)' }}>
                  Software that adapts to the work, not the other way around.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className={styles.howGrid}>
            <Reveal asInline={false} delay={0.08}>
              <article className={styles.howCard}>
                <span className={styles.howIdx}>01</span>
                <h3>Contextual</h3>
                <p>
                  Leaf Singularity reads the shape of a task and restructures its interface
                  around it, dynamically, without asking.
                </p>
              </article>
            </Reveal>
            <Reveal asInline={false} delay={0.16}>
              <article className={styles.howCard}>
                <span className={styles.howIdx}>02</span>
                <h3>Ultra-low latency</h3>
                <p>
                  Core foundations in Rust and Tauri for rendering and reasoning engines that
                  stay responsive as complexity scales.
                </p>
              </article>
            </Reveal>
            <Reveal asInline={false} delay={0.24}>
              <article className={styles.howCard}>
                <span className={styles.howIdx}>03</span>
                <h3>One workspace</h3>
                <p>
                  A cohesive environment that replaces scattered traditional applications with a
                  single, fluid surface for work.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section section--dark portfolio-section">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">Portfolio</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">What&rsquo;s named in the portfolio.</h2>
              </Reveal>
            </div>
          </div>

          <Reveal asInline={false} delay={0.08}>
            <article className={styles.band}>
              <div className={styles.bandMain}>
                <span className={styles.bandStatus}>{leaf.status}</span>
                <h3 className={styles.bandName}>{leaf.name}</h3>
                <p className={styles.bandBody}>{leaf.body}</p>
                <a
                  href="https://eoai.enmero.in/products"
                  className="link link--underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product page at eoAI
                  <span className="link-arrow" aria-hidden="true">
                    <ArrowRightIcon size={15} />
                  </span>
                </a>
              </div>
              <div className={styles.bandRail} aria-hidden="true">
                <span className={styles.bandRailId}>PTF-01</span>
                <span className={styles.bandRailLine}></span>
              </div>
            </article>
          </Reveal>

          <div className="grid-split" style={{ marginTop: 'var(--s-24)' }}>
            <div className="col-5">
              <Reveal asInline={false} delay={0.1}>
                <span className="section-index">Additional platforms</span>
              </Reveal>
              <Reveal asInline={false} delay={0.18}>
                <h3 className={styles.roadmapTitle}>Emerging research streams.</h3>
              </Reveal>
              <Reveal asInline={false} delay={0.26}>
                <p className={styles.roadmapCopy}>
                  Further platforms named within eoAI&rsquo;s programs as the roadmap proceeds.
                </p>
              </Reveal>
            </div>
            <div className="col-7">
              <Reveal asInline={false} delay={0.2}>
                <ul className={styles.platformList}>
                  {ROADMAP_PLATFORMS.map((p) => (
                    <li key={p.name}>
                      <strong>{p.name}</strong>
                      <span>{p.note}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships note */}
      <section className={`section section--dark-alt ${styles.noteSection}`}>
        <div className="container">
          <Reveal asInline={false} delay={0}>
            <p className={styles.noteCopy}>
              Partnerships with the eoAI program are evaluated on a case-by-case basis through
              restricted channels.
            </p>
          </Reveal>
          <Reveal asInline={false} delay={0.1}>
            <div className={styles.noteCtAs}>
              <Button href="https://eoai.enmero.in/trust-center" variant="ghost" arrow external>
                Trust &amp; Safety
              </Button>
              <Button href="/contact" variant="ghost" arrow>
                Contact Enmero
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        eyebrow="Early access"
        title="Be the first to know."
        lead="Our models and platforms are under development. Join the eoAI waitlist to be notified when we're ready for more users."
        ctaLabel="Join the Waitlist"
        ctaHref="https://eoai.enmero.in/waitlist"
      />
    </>
  );
}