import React, { useState } from 'react';
import styles from './TestimonialsFAQ.module.css';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with enmero was straightforward. They understood what we needed, communicated clearly throughout the project, and delivered a product that worked exactly as expected.",
    author: "Client",
    title: "Web Application Project",
    avatarColor: "#e0f2fe"
  },
  {
    quote: "The team at enmero cares about the details. Our project was handled professionally from start to finish, and the final result was better than we initially envisioned.",
    author: "Client",
    title: "Digital Transformation Project",
    avatarColor: "#fef3c7"
  },
  {
    quote: "Enmero helped us build our product from the ground up. Their combination of technical skill and design thinking made a real difference in the quality of what was delivered.",
    author: "Client",
    title: "Product Development Project",
    avatarColor: "#d1fae5"
  }
];

const faqs = [
  {
    q: "What services does enmero offer?",
    a: "We offer custom software development, web and app development, UI/UX design, digital transformation consulting, and ongoing technical support. Every project is tailored to your specific needs."
  },
  {
    q: "How does enmero approach a new project?",
    a: "We start by understanding your business and the problem you are trying to solve. Then we design and build the solution iteratively, keeping you involved throughout the process."
  },
  {
    q: "What types of businesses does enmero work with?",
    a: "We work with startups and established businesses across different industries. Whether you are building a new product or modernizing existing systems, we can help."
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on scope and complexity. After our initial discovery conversation, we provide a clear timeline with milestones before work begins."
  },
  {
    q: "Does enmero provide ongoing support after launch?",
    a: "Yes. We offer maintenance and support packages to keep your product running smoothly after launch. We are available as a long-term technology partner."
  },
  {
    q: "How do I get started with enmero?",
    a: "The best way to start is by reaching out through our contact form. We will schedule a conversation to understand your needs and discuss how we can help."
  }
];

export default function TestimonialsFAQ() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const toggleFaq = (index) => {
    setExpandedFaq(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        
        {/* Testimonials Block */}
        <div className={styles.testimonialContainer}>
          <span className={styles.sublabel}>What our customers say about us</span>
          
          <div className={styles.carouselWrapper}>
            <div className={styles.testimonialContent}>
              <blockquote className={styles.quoteText}>
                “{testimonials[currentSlide].quote}”
              </blockquote>
              
              <div className={styles.authorSection}>
                <div className={styles.authorLeft}>
                  {/* Custom SVG Avatar */}
                  <div className={styles.avatar} style={{ backgroundColor: testimonials[currentSlide].avatarColor }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="transparent"/>
                      <path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22ZM24 25C19.0294 25 15 29.0294 15 34V36H33V34C33 29.0294 28.9706 25 24 25Z" fill="#4b5563"/>
                    </svg>
                  </div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorName}>{testimonials[currentSlide].author}</div>
                    <div className={styles.authorTitle}>{testimonials[currentSlide].title}</div>
                  </div>
                </div>

                <div className={styles.carouselNav}>
                  <button className={styles.navBtn} onClick={handlePrevSlide} aria-label="Previous quote">
                    <ChevronLeft size={20} />
                  </button>
                  <button className={styles.navBtn} onClick={handleNextSlide} aria-label="Next quote">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className={styles.divider} />

        {/* FAQs Block */}
        <div className={styles.faqSection}>
          <h3 className={styles.faqHeader}>Frequently Asked Questions</h3>
          
          <div className={styles.accordionList}>
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div key={index} className={styles.accordionItem}>
                  <button className={styles.accordionQuestion} onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className={styles.iconWrapper}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div className={`${styles.accordionAnswer} ${isOpen ? styles.answerOpen : ''}`}>
                    <div className={styles.answerInner}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
