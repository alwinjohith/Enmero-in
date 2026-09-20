import Reveal from './Reveal';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  align?: 'start' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'start',
  light = false,
  className,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? styles.headingCenter : '';
  const headingClass = className
    ? `${styles.sectionHeading} ${alignClass} ${className}`
    : `${styles.sectionHeading} ${alignClass}`;

  return (
    <div className={headingClass} data-reveal-group>
      {eyebrow && (
        <Reveal asInline delay={0}>
          <span className={light ? 'eyebrow eyebrow--light' : 'eyebrow'}>{eyebrow}</span>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.08}>
          <h2>{title}</h2>
        </Reveal>
      )}
      {lead && (
        <Reveal delay={0.16}>
          <p className={`muted ${styles.headingLead}`}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}