import Link from 'next/link';
import { makeMetadata } from '@/lib/metadata';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import CtaBanner from '@/components/CtaBanner';
import HeroCanvas from '@/components/HeroCanvas';
import Parallax from '@/components/Parallax';
import DomainCard from '@/components/cards/DomainCard';
import ResearchCard from '@/components/cards/ResearchCard';
import PublicationCard from '@/components/cards/PublicationCard';
import ProductCard from '@/components/cards/ProductCard';
import { DOMAINS, RESEARCH_AREAS, PUBLICATIONS, PLATFORMS, ROADMAP_PLATFORMS } from '@/data/site';
import styles from './page.module.css';

const latest = PUBLICATIONS.slice(0, 3);
const tickerItems = [
  'Artificial Intelligence',
  'Next-generation Software Platforms',
  'Autonomous Infrastructure',
  'Cognitive Architectures',
  'Unified Reasoning Frameworks',
  'Advanced Computing',
  'Technology & Engineering',
];

export const metadata = makeMetadata({
  title: 'Enmero',
  description:
    'Enmero is a global technology and engineering corporation developing advanced artificial intelligence systems, next-generation software platforms, and autonomous infrastructure.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} aria-hidden="true">
          <HeroCanvas />
          <div className={styles.heroGrid}></div>
          <div className={`${styles.heroOrb} ${styles.heroOrb1}`}></div>
          <div className={`${styles.heroOrb} ${styles.heroOrb2}`}></div>
          <div className={styles.heroVignette}></div>
        </div>

        <div className={`container ${styles.heroInner}`}>
          <Reveal asInline={false} delay={0.05}>
            <span className={`eyebrow ${styles.heroEyebrow}`}>
              Technology &amp; Engineering Corporation
            </span>
          </Reveal>

          <Reveal asInline={false} delay={0.12}>
            <h1 className={styles.heroTitle}>
              Engineering<br />
              <span className={styles.heroTitleAccent}>future standards.</span>
            </h1>
          </Reveal>

          <Reveal asInline={false} delay={0.22}>
            <p className={styles.heroLead}>
              Enmero is a global technology and engineering corporation developing advanced
              artificial intelligence systems, next-generation software platforms, and
              autonomous infrastructure.
            </p>
          </Reveal>

          <Reveal asInline={false} delay={0.3}>
            <div className={styles.heroCtAs}>
              <Button href="/solutions" variant="primary" size="lg" arrow>
                Explore Solutions
              </Button>
              <Button href="/company" variant="ghost" size="lg">
                Discover Enmero
              </Button>
            </div>
          </Reveal>

          <Reveal asInline={false} delay={0.4}>
            <Link href="/eoai" className={styles.heroDivision}>
              <span className={styles.heroDivisionLabel}>Research Division</span>
              <span className={styles.heroDivisionName}>eoAI</span>
              <span className={styles.heroDivisionDesc}>
                Reasoning systems · Autonomous architectures · Multimodal intelligence
              </span>
              <span className={styles.heroDivisionGo} aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className={styles.heroScroll} aria-hidden="true">
          <span></span>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track" data-ticker>
          {[0, 1].map((group) => (
            <div className="ticker-group" key={group}>
              {tickerItems.map((t) => (
                <span className="ticker-item" key={t}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ ABOUT INTRO (LIGHT) ============ */}
      <section className={`section theme-light ${styles.introSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">About Enmero</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.introStatement}>
                  Technology and engineering, in service of what comes next.
                </h2>
              </Reveal>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <Reveal asInline={false} delay={0.16}>
                <p className={styles.introBody}>
                  Enmero is a global technology and engineering corporation developing advanced
                  artificial intelligence systems, next-generation software platforms, and
                  autonomous infrastructure.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.24}>
                <p className={styles.introBody}>
                  It begins with people — their thought, their effort, their intent. Technology
                  exists in response to them, shaped by human need and direction. What we build
                  is not separate from human capability, but rooted in it.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.32}>
                <div className={styles.introMeta}>
                  <div className={styles.introMetaItem}>
                    <span>Founded</span>
                    <strong>2025</strong>
                  </div>
                  <div className={styles.introMetaItem}>
                    <span>Discipline</span>
                    <strong>Technology &amp; Engineering</strong>
                  </div>
                  <div className={styles.introMetaItem}>
                    <span>Headquartered</span>
                    <strong>India</strong>
                  </div>
                  <div className={styles.introMetaItem}>
                    <span>Founded by</span>
                    <strong>Ashwanth Megas</strong>
                  </div>
                </div>
              </Reveal>
              <Reveal asInline={false} delay={0.4}>
                <div className="intro-cta">
                  <Button href="/company" variant="dark" arrow>
                    Explore the Company
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DOMAINS (DARK) ============ */}
      <section className="section section--dark domains-section">
        <div className="container">
          <div className={styles.sectionTop}>
            <div>
              <span className="section-index">No. 01 — Domains</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className={styles.sectionTitle}>
                  Engineering across three<br />
                  disciplines.
                </h2>
              </Reveal>
            </div>
            <Reveal asInline={false} delay={0.15}>
              <Button href="/domains" variant="ghost" arrow>
                All Domains
              </Button>
            </Reveal>
          </div>

          <div className={styles.domainsGrid}>
            <DomainCard
              index={DOMAINS[0].index}
              title={DOMAINS[0].name}
              short={DOMAINS[0].short}
              tags={DOMAINS[0].tags}
              href="/domains#ai-systems"
              featured
              delay={0.05}
            />
            <DomainCard
              index={DOMAINS[1].index}
              title={DOMAINS[1].name}
              short={DOMAINS[1].short}
              tags={DOMAINS[1].tags}
              href="/domains#software-platforms"
              delay={0.12}
            />
            <DomainCard
              index={DOMAINS[2].index}
              title={DOMAINS[2].name}
              short={DOMAINS[2].short}
              tags={DOMAINS[2].tags}
              href="/domains#autonomous-infrastructure"
              delay={0.19}
            />
          </div>
        </div>
      </section>

      {/* ============ EOAI DIVISION (DARK AMBIENT) ============ */}
      <section className={`section ${styles.eoaiSection}`}>
        <div className={styles.eoaiAmbient} aria-hidden="true">
          <div className={styles.eoaiGrid}></div>
          <div className={styles.eoaiOrb}></div>
          <div className={styles.eoaiLines}></div>
        </div>

        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">No. 02 — Research Division</span>
              </Reveal>
              <Reveal asInline={false} delay={0.06}>
                <h2 className={styles.eoaiTitle}>
                  Building the next generation of intelligence.
                </h2>
              </Reveal>
              <Reveal asInline={false} delay={0.14}>
                <p className={styles.eoaiCopy}>
                  eoAI is the artificial intelligence research division of Enmero — engineering
                  the next generation of cognitive architectures, unified reasoning frameworks,
                  multimodal intelligence, and advanced computing environments.
                </p>
              </Reveal>

              <Reveal asInline={false} delay={0.22}>
                <ul className={styles.eoaiPoints}>
                  <li>Reasoning systems &amp; autonomous architectures</li>
                  <li>Multimodal intelligence</li>
                  <li>Next-generation AI infrastructure</li>
                </ul>
              </Reveal>

              <Reveal asInline={false} delay={0.3}>
                <div className={styles.eoaiCtAs}>
                  <Button href="https://eoai.enmero.in" variant="accent" arrow external size="lg">
                    Visit eoAI Website
                  </Button>
                  <Button href="/eoai" variant="ghost" size="lg">
                    eoAI at Enmero
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="col-7">
              <Reveal asInline={false} delay={0.18} variant="scale">
                <Parallax speed={0.06}>
                  <div className={styles.eoaiMedia}>
                    <video
                      src="/video/leaf_singularity_project.mp4"
                      poster="/img/prototype_leaf.jpeg"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-label="eoAI — Leaf Singularity adaptive computing platform preview"
                    ></video>
                    <div className={styles.eoaiMediaRect} aria-hidden="true"></div>
                    <div className={styles.eoaiMediaLabel}>
                      <span className="label-mono">LEAF SINGULARITY</span>
                      <span className={styles.eoaiMediaStatus}>In development</span>
                    </div>
                  </div>
                </Parallax>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTIONS (LIGHT) ============ */}
      <section className={`section theme-light ${styles.solutionsSection}`}>
        <div className="container">
          <div className={styles.sectionTop}>
            <div>
              <span className="section-index" style={{ color: 'var(--l-muted)' }}>
                No. 03 — Solutions
              </span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className={styles.sectionTitle} style={{ color: 'var(--l-ink)' }}>
                  What we are building.
                </h2>
              </Reveal>
            </div>
            <Reveal asInline={false} delay={0.15}>
              <Button href="/solutions" variant="ghost-light" arrow>
                All Solutions
              </Button>
            </Reveal>
          </div>

          <div className={styles.solutionsGrid}>
            <div className={styles.solutionsFeature}>
              <ProductCard
                status={PLATFORMS[0].status}
                name={PLATFORMS[0].name}
                body={PLATFORMS[0].body}
                href={PLATFORMS[0].href}
                featured
                delay={0.08}
              />
            </div>

            <div className={styles.solutionsSide}>
              <Reveal asInline={false} delay={0.16}>
                <div className={`${styles.solutionsCard} solutions-card--muted`}>
                  <span className="label-mono">More in the portfolio</span>
                  <p>
                    Additional platforms and research streams are named across the eoAI portfolio
                    as the roadmap progresses.
                  </p>
                  <ul className={styles.roadmapList}>
                    {ROADMAP_PLATFORMS.map((p) => (
                      <li key={p.name}>
                        <strong>{p.name}</strong>
                        <span>{p.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal asInline={false} delay={0.2}>
            <div className={styles.solutionsFoot}>
              <p>Early access to Leaf Singularity is managed through the eoAI waitlist.</p>
              <Button href="https://eoai.enmero.in/waitlist" variant="dark" arrow external>
                Join the Waitlist
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RESEARCH (DARK) ============ */}
      <section className={`section section--dark ${styles.researchSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">No. 04 — Research</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.researchStatement}>
                  Engineering<br />
                  what comes next.
                </h2>
              </Reveal>
              <Reveal asInline={false} delay={0.16}>
                <p className={`muted ${styles.researchCopy}`}>
                  Our work focuses on ensuring safety is integrated at the architectural level —
                  alignment, interpretability, oversight, and cognitive synthesis in a single
                  research program.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.24}>
                <Button href="/research" variant="primary" arrow size="lg">
                  Explore Research
                </Button>
              </Reveal>
            </div>
            <div className="col-7">
              <div className={styles.researchGrid}>
                {RESEARCH_AREAS.map((r, i) => (
                  <ResearchCard
                    key={r.title}
                    index={`R/${String(i + 1).padStart(2, '0')}`}
                    title={r.title}
                    body={r.body}
                    delay={0.06 + i * 0.07}
                  />
                ))}
              </div>
            </div>
          </div>

          <Reveal asInline={false} delay={0.2}>
            <p className={styles.researchNote}>
              <span className={styles.researchNoteMark} aria-hidden="true">
                ◈
              </span>
              Research is under development. Technical reports and publications will be shared as
              our systems mature.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ PUBLICATIONS (LIGHT) ============ */}
      <section className={`section theme-light ${styles.pubsSection}`}>
        <div className="container">
          <div className={styles.sectionTop}>
            <div>
              <span className="section-index" style={{ color: 'var(--l-muted)' }}>
                No. 05 — Updates
              </span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className={styles.sectionTitle} style={{ color: 'var(--l-ink)' }}>
                  From the Enmero ecosystem.
                </h2>
              </Reveal>
            </div>
            <Reveal asInline={false} delay={0.15}>
              <Button href="/publications" variant="ghost-light" arrow>
                View All Updates
              </Button>
            </Reveal>
          </div>

          <div className={styles.pubsGrid}>
            {latest.map((p, i) => (
              <PublicationCard
                key={p.title}
                date={p.date}
                tag={p.tag}
                title={p.title}
                body={p.body}
                media={p.media}
                delay={0.06 + i * 0.08}
                featured={i === 0}
                href={`/publications#entry-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA (DARK) ============ */}
      <CtaBanner
        eyebrow="Let's build together"
        title="Engineering the future, together."
        lead="Enmero is building the technologies that define what comes next. Explore the roadmap, follow the research, or get in touch."
        ctaLabel="Contact Enmero"
        ctaHref="/contact"
      />
    </>
  );
}