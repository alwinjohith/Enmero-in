import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import CtaBanner from '@/components/CtaBanner';
import ResearchCard from '@/components/cards/ResearchCard';
import PillarCard from '@/components/cards/PillarCard';
import { RESEARCH_AREAS, TRUST_PILLARS } from '@/data/site';
import styles from './page.module.css';

const values = [
  { label: 'bold innovation', note: 'Innovation without restraint, guided by care.' },
  { label: 'technology', note: 'Engineering as the instrument of progress.' },
  { label: 'humanity', note: 'People remain the center of everything we build.' },
];

export const metadata = makeMetadata({
  title: 'eoAI Research Division',
  description:
    'eoAI is the artificial intelligence research division of Enmero — engineering the next generation of cognitive architectures, unified reasoning frameworks, multimodal intelligence, and advanced computing environments.',
  path: '/eoai',
});

export default function EoaiPage() {
  return (
    <>
      <PageHero
        index="Division"
        eyebrow="Artificial Intelligence Research Division"
        title="eoAI, by Enmero."
        lead="eoAI is the artificial intelligence research division of Enmero — engineering the next generation of cognitive architectures, unified reasoning frameworks, multimodal intelligence, and advanced computing environments."
        meta={[
          { label: 'Parent', value: 'Enmero' },
          { label: 'Focus', value: 'AI research & systems' },
          { label: 'Platforms', value: 'Leaf Singularity & more' },
        ]}
      />

      {/* Philosophy */}
      <section className={`section theme-light ${styles.philSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">Philosophy</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.philTitle}>
                  Intelligence, designed to serve people and progress.
                </h2>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.14}>
                <p className={styles.philBody}>
                  It begins with people — their thought, their effort, their intent. Technology
                  exists in response to them, shaped by human need and direction, never above
                  it.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <p className={styles.philBody}>
                  Humanity has always led through curiosity, adaptation, and creation. Every
                  system we build is not separate from human capability, but rooted in it. When
                  intelligence supports that expansion, progress becomes continuous — not
                  constrained.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.3}>
                <div className={styles.philCtAs}>
                  <Button href="https://eoai.enmero.in" variant="dark" arrow external>
                    Visit the eoAI Website
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">What guides us</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">Three words, held constant.</h2>
              </Reveal>
            </div>
          </div>

          <div className={styles.valuesRow}>
            {values.map((v, i) => (
              <Reveal asInline={false} delay={0.06 + i * 0.08} variant="up" key={v.label}>
                <article className={styles.valueCell}>
                  <span className={styles.valueIdx}>0{i + 1}</span>
                  <h3 className={styles.valueWord}>{v.label}</h3>
                  <p className={styles.valueNote}>{v.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leaf Singularity */}
      <section className={`section ${styles.leafSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">Flagship platform</span>
              </Reveal>
              <Reveal asInline={false} delay={0.06}>
                <h2 className={styles.leafName}>Leaf Singularity</h2>
              </Reveal>
              <Reveal asInline={false} delay={0.14}>
                <p className={`muted ${styles.leafBody}`}>
                  A unified adaptive workspace that replaces traditional applications. It
                  silently reconfigures itself in response to context, surfacing the right
                  environment as work evolves — merging AI, fluid interfaces, and contextual
                  workflows into a single cohesive workspace.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <div className={styles.leafCtAs}>
                  <Button
                    href="https://eoai.enmero.in/waitlist"
                    variant="accent"
                    arrow
                    external
                    size="lg"
                  >
                    Request Early Access
                  </Button>
                  <Button href="/solutions#leaf-singularity" variant="ghost" size="lg">
                    At Solutions
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.16} variant="scale">
                <div className={styles.leafMedia}>
                  <video
                    src="/video/alpha_stage.mp4"
                    poster="/img/prototype_leaf.jpeg"
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    aria-label="Leaf Singularity — alpha stage demonstration"
                  ></video>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Research focus */}
      <section className={`section section--dark ${styles.rfSection}`}>
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">Current R&amp;D</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">The research program.</h2>
              </Reveal>
            </div>
          </div>

          <div className={styles.rfGrid}>
            {RESEARCH_AREAS.map((r, i) => (
              <ResearchCard
                key={r.title}
                index={`R/${String(i + 1).padStart(2, '0')}`}
                title={r.title}
                body={r.body}
                delay={0.05 + i * 0.07}
              />
            ))}
          </div>

          <Reveal asInline={false} delay={0.24}>
            <div className={styles.rfCta}>
              <Button href="/research" variant="primary" arrow>
                Explore the Research Program
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust pillars */}
      <section className={`section section--dark-alt ${styles.trustSection}`}>
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">Trust &amp; safety</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">Trust, built into every layer.</h2>
              </Reveal>
            </div>
            <Reveal asInline={false} delay={0.15}>
              <Button href="/trust" variant="ghost" arrow>
                Trust Center
              </Button>
            </Reveal>
          </div>

          <div className={styles.trustGrid}>
            {TRUST_PILLARS.map((p, i) => (
              <PillarCard
                key={p.title}
                index={`Trust / 0${i + 1}`}
                title={p.title}
                body={p.body}
                delay={0.06 + i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Early access"
        title="The future is being built in silence."
        lead="Our models are under development. Be the first to know when we're ready."
        ctaLabel="Join the Waitlist"
        ctaHref="https://eoai.enmero.in/waitlist"
      />
    </>
  );
}