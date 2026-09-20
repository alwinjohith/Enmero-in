import Reveal from '../Reveal';
import { ArrowRightIcon } from '../icons';
import './DomainCard.css';

interface DomainCardProps {
  index: string;
  title: string;
  short: string;
  tags?: string[];
  href: string;
  delay?: number;
  featured?: boolean;
}

export default function DomainCard({
  index,
  title,
  short,
  tags = [],
  href,
  delay = 0,
  featured = false,
}: DomainCardProps) {
  const classes = featured
    ? 'domain-card domain-card--featured card'
    : 'domain-card';
  return (
    <Reveal delay={delay} asInline={false}>
      <a href={href} className={classes}>
        <div className="domain-card-top">
          <span className="domain-index">{index}</span>
          <span className="card-arrow" aria-hidden="true">
            <ArrowRightIcon size={17} />
          </span>
        </div>
        <div className="domain-card-body">
          <h3>{title}</h3>
          <p>{short}</p>
        </div>
        {tags.length > 0 && (
          <div className="domain-tags">
            {tags.map((t) => (
              <span className="domain-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}
      </a>
    </Reveal>
  );
}