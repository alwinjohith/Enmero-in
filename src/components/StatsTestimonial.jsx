import React, { useState, useEffect } from 'react';
import styles from './StatsTestimonial.module.css';
import { ChevronDown } from 'lucide-react';
import scenicBg from '../../assets/scenic_landscape_bg.png';

// The homepage keeps a short, high-level view of the work. The full service
// catalogue, including every service page, lives on /services.
const services = [
  {
    id: 'SWD',
    title: 'Software & Web Development',
    desc: 'We build custom web applications using modern frameworks. From single-page apps to complex platforms, our development process focuses on clean code, performance, and maintainability.'
  },
  {
    id: 'ADD',
    title: 'App Development',
    desc: 'We develop mobile and cross-platform applications for iOS and Android. Whether you need a native app or a cross-platform solution, we build products that work reliably across devices.'
  },
  {
    id: 'DT',
    title: 'Digital Transformation',
    desc: 'We help businesses modernize their operations through technology. From workflow automation to cloud migration, we identify where technology can create real efficiency gains.'
  },
  {
    id: 'TS',
    title: 'Technical Consulting & Support',
    desc: 'We provide ongoing technical consulting and support. Whether you need help making technology decisions, maintaining existing systems, or scaling your infrastructure, we are available as a long-term partner.'
  }
];

export default function StatsTestimonial() {
  const [activeId, setActiveId] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setTypedText('');

    if (!activeId) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);

    const fullText = services.find((service) => service.id === activeId)?.desc || '';
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setTypedText(fullText.substring(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 12);

    return () => {
      clearInterval(interval);
    };
  }, [activeId]);

  const toggleService = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} id="services">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          
          {/* Left Column: Landscape background + Translucent Create Insight Dialog */}
          <div className={styles.mediaContainer} style={{ backgroundImage: `url(${scenicBg})` }}>
            <div className={styles.dialog}>
              {/* Header */}
              <div className={styles.dialogHeader}>
                <div className={styles.dialogLogoSphere} />
              </div>

              {/* Chat Container */}
              <div className={styles.chatContainer}>
                {/* AI typing response */}
                <div className={`${styles.chatMessage} ${styles.aiMsg}`}>
                  <div className={styles.msgBubble}>
                    {activeId ? (
                      <>
                        <span>{typedText}</span>
                        {isTyping && <span className={styles.cursor} />}
                      </>
                    ) : (
                      'Select a service to learn more about how we can help.'
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Title + Description + Services Accordion */}
          <div className={styles.contentColumn}>
            <div className={styles.headerRow}>
              <h2 className={styles.title}>What we do</h2>
            </div>
            
            <p className={styles.description}>
              We offer a range of technology services tailored to your needs. Select a service to learn more about how we can help.
            </p>

            <a href="#/services" className={styles.exploreBtn}>Explore Our Services</a>

            {/* Accordion list */}
            <div className={styles.accordionList}>
              {services.map((service) => {
                const isActive = activeId === service.id;
                return (
                  <div key={service.id} className={styles.accordionItem}>
                    <button 
                      className={`${styles.accordionHeader} ${isActive ? styles.accordionHeaderActive : ''}`}
                      onClick={() => toggleService(service.id)}
                      aria-expanded={isActive}
                      aria-controls={`service-answer-${service.id}`}
                    >
                      <span>{service.title}</span>
                      <ChevronDown size={16} className={`${styles.accordionChevron} ${isActive ? styles.chevronRotate : ''}`} />
                    </button>
                    
                    <div
                      id={`service-answer-${service.id}`}
                      className={`${styles.accordionBody} ${isActive ? styles.bodyOpen : ''}`}
                    >
                      <p className={styles.bodyText}>{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
