import type { ReactNode } from 'react';
import { ArrowRightIcon } from './icons';

type ButtonVariant = 'primary' | 'ghost' | 'ghost-light' | 'accent' | 'dark' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  external?: boolean;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}

const internalPath = (href: string | undefined) =>
  href === undefined ||
  href.startsWith('/') ||
  href.startsWith('#') ||
  href.startsWith('mailto:') ||
  href.startsWith('tel:');

export default function Button({
  href = '#',
  variant = 'primary',
  size = 'md',
  arrow = false,
  external = false,
  ariaLabel,
  className,
  children,
}: ButtonProps) {
  const variantClass =
    variant === 'primary'
      ? 'btn--primary'
      : variant === 'ghost'
        ? 'btn--ghost'
        : variant === 'ghost-light'
          ? 'btn--ghost-light'
          : variant === 'accent'
            ? 'btn--accent'
            : variant === 'dark'
              ? 'btn--dark'
              : 'btn--primary';
  const sizeClass = size === 'sm' ? 'btn--sm' : size === 'lg' || size === 'xl' ? 'btn--lg' : '';

  return (
    <a
      href={href}
      className={['btn', variantClass, sizeClass, className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      target={!internalPath(href) && external ? '_blank' : undefined}
      rel={!internalPath(href) && external ? 'noopener noreferrer' : undefined}
    >
      {children}
      {arrow && (
        <span className="btn-arrow" aria-hidden="true">
          <ArrowRightIcon size={15} />
        </span>
      )}
    </a>
  );
}