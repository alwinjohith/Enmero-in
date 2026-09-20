'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

export type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'line';

interface RevealProps {
  delay?: number;
  variant?: RevealVariant;
  asInline?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Reveal({
  delay = 0,
  variant = 'up',
  asInline = false,
  id,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === 'left'
      ? ' reveal--left'
      : variant === 'right'
        ? ' reveal--right'
        : variant === 'scale'
          ? ' reveal--scale'
          : '';
  const cls = variant === 'line' ? 'reveal-line' : `reveal${variantClass}`;
  const style = { '--d': `${delay}s` } as CSSProperties;
  const Tag = asInline ? 'span' : 'div';

  return (
    <Tag
      ref={ref as never}
      className={className ? `${cls} ${className}` : cls}
      style={style}
      id={id}
    >
      {children}
    </Tag>
  );
}