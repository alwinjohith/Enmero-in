import Reveal from '../Reveal';
import { ArrowRightIcon } from '../icons';
import './ProductCard.css';

interface ProductCardProps {
  status: string;
  name: string;
  body: string;
  href: string;
  delay?: number;
  featured?: boolean;
}

export default function ProductCard({
  status,
  name,
  body,
  href,
  delay = 0,
  featured = false,
}: ProductCardProps) {
  const classes = featured
    ? 'product-card card product-card--featured'
    : 'product-card card';
  return (
    <Reveal delay={delay} asInline={false}>
      <a href={href} className={classes}>
        <div className="product-card-top">
          <span className="product-status">
            <span className="product-dot" aria-hidden="true"></span>
            {status}
          </span>
          <span className="card-arrow" aria-hidden="true">
            <ArrowRightIcon size={17} />
          </span>
        </div>
        <h3 className="product-name">{name}</h3>
        <p className="product-body">{body}</p>
      </a>
    </Reveal>
  );
}