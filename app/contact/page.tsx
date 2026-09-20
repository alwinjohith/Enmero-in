import { makeMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/data/site';
import styles from './page.module.css';
import './contact-form.css';

export const metadata = makeMetadata({
  title: 'Contact',
  description:
    'Contact Enmero. Reach the team via email, LinkedIn, or the eoAI research division. Headquartered in India.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="Contact"
        eyebrow="Get in touch"
        title="Let's build something that matters."
        lead="Engineering conversations, research inquiries, and partnership discussions all begin the same way — a direct line to the people doing the work."
        meta={[
          { label: 'Email', value: SITE.email },
          { label: 'Headquarters', value: SITE.headquarters },
          { label: 'Division', value: 'eoAI Research' },
        ]}
      />

      <section className={`section section--dark ${styles.contactSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-5">
              <Reveal asInline={false} delay={0}>
                <span className="section-index">Direct channels</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h2 className={styles.contactTitle}>Human answers, no queues.</h2>
              </Reveal>

              <Reveal asInline={false} delay={0.18}>
                <div className={styles.channels}>
                  <a href={`mailto:${SITE.email}`} className={styles.channel}>
                    <span className={styles.channelLabel}>Email</span>
                    <span className={styles.channelValue}>{SITE.email}</span>
                    <span className={styles.channelGo} aria-hidden="true">
                      →
                    </span>
                  </a>
                  <a
                    href={SITE.linkedin}
                    className={styles.channel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.channelLabel}>LinkedIn</span>
                    <span className={styles.channelValue}>linkedin.com/company/enmero</span>
                    <span className={styles.channelGo} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                  <a
                    href={SITE.eoaiUrl}
                    className={styles.channel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.channelLabel}>eoAI Research Division</span>
                    <span className={styles.channelValue}>eoai.enmero.in</span>
                    <span className={styles.channelGo} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-7">
              <Reveal asInline={false} delay={0.16} variant="right">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`section theme-light ${styles.responseSection}`}>
        <div className="container">
          <div className="grid-split">
            <div className="col-4">
              <Reveal asInline={false} delay={0}>
                <span className="eyebrow eyebrow--light">Response time</span>
              </Reveal>
              <Reveal asInline={false} delay={0.08}>
                <h3 className={styles.respTitle}>Within 24–48 business hours.</h3>
              </Reveal>
            </div>
            <div className="col-4">
              <Reveal asInline={false} delay={0.16}>
                <span className="eyebrow eyebrow--light">For press</span>
              </Reveal>
              <Reveal asInline={false} delay={0.24}>
                <h3 className={styles.respTitle}>
                  Media &amp; speaking inquiries are handled by the communications team.
                </h3>
              </Reveal>
            </div>
            <div className="col-4">
              <Reveal asInline={false} delay={0.32}>
                <span className="eyebrow eyebrow--light">Support</span>
              </Reveal>
              <Reveal asInline={false} delay={0.4}>
                <h3 className={styles.respTitle}>
                  Early contributors and research partners receive dedicated assistance.
                </h3>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}