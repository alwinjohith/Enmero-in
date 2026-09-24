import React, { useState } from 'react';
import styles from './WatchTower.module.css';
import { ArrowUpRight } from 'lucide-react';
import { MARKETS, detectMarket, watchTowerPriceFor, WATCH_TOWER_MANAGEMENT } from '../data/pricing.js';

const benefits = [
  {
    title: 'Predictable monthly pricing',
    desc: 'A fixed monthly rate for the management engagement, so costs stay clear and simple.'
  },
  {
    title: 'Country-specific pricing',
    desc: 'Pricing is shown for your region using Enmero\u2019s published regional rates.'
  },
  {
    title: 'A direct team',
    desc: 'You work directly with the people maintaining your product. No account managers or intermediaries.'
  },
  {
    title: 'Built to last',
    desc: 'Ongoing maintenance, updates, and performance optimization keep the product dependable over time.'
  }
];

const steps = [
  {
    step: 'Step 1',
    title: 'Onboarding',
    desc: 'We review your product and agree what will be managed, so the engagement starts with a clear baseline.'
  },
  {
    step: 'Step 2',
    title: 'Managed month to month',
    desc: 'Across the 15 months, the Enmero team handles the agreed maintenance, updates, and support.'
  },
  {
    step: 'Step 3',
    title: 'Long-term continuity',
    desc: 'The engagement is structured as a 15-month plan, giving your product a dependable partner after launch.'
  }
];

export default function WatchTower() {
  const [selectedMarketId, setSelectedMarketId] = useState(null);
  const market = MARKETS.find((m) => m.id === (selectedMarketId || detectMarket().id)) || detectMarket();
  const managementPrice = watchTowerPriceFor(market.id);

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${styles.container} container`}>
          <span className={styles.eyebrow}>Enmero key service</span>
          <h1 className={styles.heroTitle}>Watch Tower</h1>
          <p className={styles.heroSubtitle}>
            Watch Tower is one of Enmero&apos;s key services. It is a long-term management offering that keeps
            your product reliable, maintained, and moving forward after launch.
          </p>
          <div className={styles.heroCta}>
            <a href="#watch-tower-pricing" className={styles.primaryBtn}>See pricing</a>
            <a href="#/contact" className={styles.secondaryBtn}>Talk to us</a>
          </div>
        </div>
      </section>

      {/* What Watch Tower does */}
      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>What Watch Tower does</h2>
          <p className={styles.sectionLead}>
            Watch Tower is Enmero&apos;s management service. After a product is built, Watch Tower keeps the
            work going with maintenance, updates, and support delivered by the same team over a defined
            engagement.
          </p>
          <div className={styles.plainList}>
            <div className={styles.plainItem}>
              <h3>Maintenance and updates</h3>
              <p>Long-term support, updates, and performance optimization keep the product dependable.</p>
            </div>
            <div className={styles.plainItem}>
              <h3>Continuity after launch</h3>
              <p>The team that built your product stays involved, so nothing gets lost in the handoff.</p>
            </div>
            <div className={styles.plainItem}>
              <h3>A defined timeframe</h3>
              <p>Watch Tower runs as a 15-month engagement with a clear monthly rate.</p>
            </div>
            <div className={styles.plainItem}>
              <h3>Confirmed scope</h3>
              <p>What is included for your specific product is agreed during onboarding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How the service works */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>How Watch Tower works</h2>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.step} className={styles.stepCard}>
                <span className={styles.stepBadge}>{s.step}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>Key benefits</h2>
          <div className={styles.benefitGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15-month management offering */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.container} container`}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredText}>
              <span className={styles.featuredBadge}>Primary offering</span>
              <h2 className={styles.featuredTitle}>Watch Tower Management</h2>
              <p className={styles.featuredDuration}>{WATCH_TOWER_MANAGEMENT.durationLabel}</p>
              <p className={styles.featuredDesc}>
                The full Watch Tower management engagement. A 15-month plan that keeps your product
                maintained, updated, and supported by the Enmero team.
              </p>
            </div>
            <div className={styles.featuredPrice}>
              <span className={styles.featuredPriceLabel}>India</span>
              <span className={styles.featuredPriceAmount}>₹399/month</span>
              <span className={styles.featuredPriceNote}>{WATCH_TOWER_MANAGEMENT.billingNote}</span>
              <a href="#/contact" className={styles.featuredBtn}>
                Start a conversation
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.section} id="watch-tower-pricing">
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>Pricing</h2>
          <p className={styles.sectionLead}>
            Pricing is country-specific and shown for your region.
          </p>

          <div className={styles.pricingHeaderRow}>
            <label htmlFor="watchTowerMarketSelect" className={styles.pricingRegionLabel}>
              Pricing for
            </label>
            <select
              id="watchTowerMarketSelect"
              className={styles.pricingSelect}
              value={market.id}
              onChange={(e) => setSelectedMarketId(e.target.value)}
            >
              {MARKETS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.tiersRow}>
            <div className={styles.tier}>
              <span className={styles.tierLabel}>Website</span>
              <div className={styles.tierAmount}>{market.website}</div>
              <span className={styles.tierNote}>per month</span>
              <span className={styles.tierDesc}>Website service</span>
            </div>
            <div className={styles.tier}>
              <span className={styles.tierLabel}>Consultancy</span>
              <div className={styles.tierAmount}>{market.consultancy}</div>
              <span className={styles.tierNote}>per month</span>
              <span className={styles.tierDesc}>Consultancy add-on</span>
            </div>
            <div className={`${styles.tier} ${styles.tierFeatured}`}>
              <span className={styles.tierLabel}>Combined</span>
              <div className={styles.tierAmount}>{market.combined}</div>
              <span className={styles.tierNote}>per month</span>
              <span className={styles.tierDesc}>Website and consultancy</span>
            </div>
          </div>

          <div className={styles.managementRow}>
            <div className={styles.managementRowText}>
              <span className={styles.managementRowLabel}>Watch Tower Management</span>
              <span className={styles.managementRowDetail}>{WATCH_TOWER_MANAGEMENT.durationLabel}</span>
            </div>
            <div className={styles.managementRowPrice}>
              {managementPrice ? (
                <span className={styles.managementPriceAmount}>{managementPrice}/month</span>
              ) : (
                <span className={styles.managementPricePending}>To be confirmed</span>
              )}
              {!managementPrice && (
                <span className={styles.managementRowNote}>Not currently published for this region</span>
              )}
            </div>
          </div>

          <p className={styles.pricingFootnote}>
            Pricing shown is indicative, may differ by region, and may change. Final pricing is agreed for
            each engagement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.ctaTitle}>Ready to talk about Watch Tower?</h2>
          <p className={styles.ctaDesc}>
            Tell us about your product. We will schedule a conversation to understand your needs and
            discuss how Watch Tower can help.
          </p>
          <a href="#/contact" className={styles.primaryBtn}>Get in touch</a>
        </div>
      </section>
    </div>
  );
}