import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import CtaBanner from '@/components/CtaBanner';
import ResearchCard from '@/components/cards/ResearchCard';
import { RESEARCH_AREAS } from '@/data/site';
import styles from './page.module.css';

const milestones = [
  {
    date: 'January 2026',
    title: 'eoAI Research Division established',
    text: 'Artificial intelligence research division of Enmero formally established.',
  },
  {
    date: 'February 2026',
    title: 'Compute infrastructure expanded',
    text: 'Dedicated neural training clusters and high-performance infrastructure expanded.',
  },
  {
    date: 'March 2026',
    title: 'Leaf Singularity prototype development',
    text: 'Core Rust and Tauri foundations established for ultra-low latency rendering.',
  },
  {
    date: 'May 2026',
    title: 'Alpha stage reached',
    text: 'Core architecture passes its first internal alpha milestone with fluid morphological adaptation.',
  },
];

export const metadata = makeMetadata({
  title: 'Research',
  description:
    'Enmero research advances the science of AI safety — alignment, interpretability, scalable oversight, and cognitive synthesis, integrated at the architectural level.',
  path: '/research',
});

export default function ResearchPage() {
  return (
    <>
      <PageHero
        index="Research"
        eyebrow="Engineering what comes next"
        title="Advancing the science of AI safety."
        lead="Our work focuses on ensuring safety is integrated at the architectural level. Technical reports and publications will be shared as our systems mature."
        meta={[
          { label: 'Program', value: 'eoAI Research Division' },
          { label: 'Focus areas', value: '4' },
          { label: 'Stance', value: 'Safety at the architectural level' },
        ]}
      />

      {/* Research statement */}
      <section className={`section theme-light ${styles.stanceSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-6">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">Research philosophy</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.stanceTitle}>
                  The foundation of the research is the foundation of the systems.
                </h2>
              </Reveal>
            </div>
            <div className="col-6">
              <Reveal asInline={false} delay={0.14}>
                <p className={styles.stanceBody}>
                  We are currently building the research foundation for our core models. Our
                  work focuses on ensuring safety is integrated at the architectural level — not
                  as an afterthought, but as the substrate everything else is built on.
                </p>
              </Reveal>
              <Reveal asInline={false} delay={0.22}>
                <p className={styles.stanceBody}>
                  We conduct frontier research, develop AI products, and work to ensure the
                  safety of AI systems — because we believe transformative AI should help people
                  and society flourish.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Current R&D */}
      <section className="section section--dark rd-section">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">Current R&amp;D</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">Four areas. One program.</h2>
              </Reveal>
            </div>
          </div>

          <div className={styles.rdGrid}>
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
      </section>

      {/* Milestones timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="section-top">
            <div>
              <span className="section-index">Milestones</span>
              <Reveal asInline={false} delay={0.05}>
                <h2 className="section-title">Progress, openly reported.</h2>
              </Reveal>
            </div>
            <Reveal asInline={false} delay={0.15}>
              <Button href="/publications" variant="ghost" arrow>
                All Publications
              </Button>
            </Reveal>
          </div>

          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <Reveal asInline={false} delay={0.05 + i * 0.09} key={m.title}>
                <article className={styles.timelineItem}>
                  <span className={styles.timelineDate}>{m.date}</span>
                  <div className={styles.timelineMarker} aria-hidden="true">
                    <i></i>
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA under development */}
      <section className={`section section--dark-alt ${styles.devSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-7">
              <Reveal asInline={false} delay={0}>
                <h2 className={styles.devTitle}>Research is under development.</h2>
              </Reveal>
              <Reveal asInline={false} delay={0.1}>
                <p className={`muted ${styles.devBody}`}>
                  We are currently building our models and conducting internal safety
                  evaluations. Technical reports and publications will be shared as our systems
                  mature.
                </p>
              </Reveal>
            </div>
            <div className="col-5">
              <Reveal asInline={false} delay={0.18}>
                <div
                  className={styles.devTerminal}
                  role="img"
                  aria-label="Research status terminal output"
                >
                  <div className={styles.devTerminalHead}>
                    <span>ENMERO // RESEARCH</span>
                    <span>SECURE</span>
                  </div>
                  <div className={styles.devTerminalBody}>
                    <p>
                      <span className={styles.tPrompt}>$</span> status --division eoai
                    </p>
                    <p>
                      <span className={styles.tGreen}>✓</span> safety integrated at
                      architectural level
                    </p>
                    <p>
                      <span className={styles.tGreen}>✓</span> internal safety evaluations in
                      progress
                    </p>
                    <p>
                      <span className={styles.tBlue}>▶</span> publications queued behind
                      maturing systems
                    </p>
                    <p>
                      <span className={styles.tPrompt}>$</span>{' '}
                      <span className={styles.tCursor}>▍</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Follow the research"
        title="Watch the roadmap unfold."
        lead="Progress is reported openly — from division milestones to platform developments. Keep up with every update."
        ctaLabel="Read Publications"
        ctaHref="/publications"
      />
    </>
  );
}