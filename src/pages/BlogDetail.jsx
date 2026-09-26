import React from 'react';
import styles from './BlogDetail.module.css';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { findArticleById, articlePath, formatDate, BLOG_ARTICLES } from '../data/blog.js';

export default function BlogDetail({ articleId }) {
  const article = findArticleById(articleId);

  if (!article) return null;

  const otherArticles = BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div>
      <section className={styles.hero}>
        <div className={`${styles.container} container`}>
          <a href="#/blog" className={styles.backLink}>
            <ArrowLeft size={14} aria-hidden="true" />
            All articles
          </a>
          <span className={styles.eyebrow}>{article.category}</span>
          <h1 className={styles.heroTitle}>{article.title}</h1>
          <div className={styles.heroMeta}>
            <span className={styles.heroDate}>{formatDate(article.date)}</span>
            <span className={styles.heroReadTime}>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <div className={styles.articleContent}>
            {article.content.map((paragraph, index) => (
              <p key={index} className={styles.articleParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.sectionTitle}>Continue reading</h2>
          <div className={styles.otherGrid}>
            {otherArticles.map((other) => (
              <a key={other.id} href={`#${articlePath(other.id)}`} className={styles.otherCard}>
                <span className={styles.otherCategory}>{other.category}</span>
                <h3 className={styles.otherTitle}>{other.title}</h3>
                <p className={styles.otherExcerpt}>{other.excerpt}</p>
                <div className={styles.otherMeta}>
                  <span>{formatDate(other.date)}</span>
                  <span>{other.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`${styles.container} container`}>
          <span className={styles.ctaEyebrow}>Next step</span>
          <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
          <p className={styles.ctaDesc}>
            Tell us what you are trying to do. We will discuss your requirements
            and let you know how Enmero can help.
          </p>
          <a href="#/contact" className={styles.primaryBtn}>
            Get in Touch
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
