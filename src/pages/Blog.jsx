import React from 'react';
import styles from './Blog.module.css';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_ARTICLES, articlePath, formatDate } from '../data/blog.js';
import techroroLogo from '../../assets/logo/techroro-logo.png';

export default function Blog() {
  const featured = BLOG_ARTICLES[0];
  const remaining = BLOG_ARTICLES.slice(1);

  return (
    <div>
      <section className={styles.hero}>
        <div className={`${styles.container} container`}>
          <h1 className={styles.heroTitle}>Insights from Enmero</h1>
          <p className={styles.heroSubtitle}>
            Practical perspectives on technology, digital transformation,
            software, and building better digital products.
          </p>
          <p className={styles.poweredBy}>
            Powered by{' '}
            <a href="https://techroro.com" target="_blank" rel="noopener noreferrer" className={styles.poweredByLink}>
              <img src={techroroLogo} alt="Techroro" className={styles.poweredByLogo} />
            </a>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <a href={`#${articlePath(featured.id)}`} className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <span className={styles.featuredCategory}>{featured.category}</span>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredDate}>{formatDate(featured.date)}</span>
                <span className={styles.featuredReadTime}>{featured.readTime}</span>
              </div>
              <span className={styles.featuredCta}>
                Read article
                <ArrowUpRight size={14} />
              </span>
            </div>
            <div className={styles.featuredVisual}>
              <div className={styles.featuredPlaceholder}>
                <span>{featured.category.charAt(0)}</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>All articles</h2>
          <div className={styles.articleGrid}>
            {remaining.map((article) => (
              <a key={article.id} href={`#${articlePath(article.id)}`} className={styles.articleCard}>
                <div className={styles.cardVisual}>
                  <div className={styles.cardPlaceholder}>
                    <span>{article.category.charAt(0)}</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>{article.category}</span>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardDate}>{formatDate(article.date)}</span>
                    <span className={styles.cardReadTime}>{article.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
