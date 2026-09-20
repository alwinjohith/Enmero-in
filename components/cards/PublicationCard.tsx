import Reveal from '../Reveal';
import { ArrowRightIcon } from '../icons';
import './PublicationCard.css';

interface PublicationCardProps {
  date: string;
  tag: string;
  title: string;
  body: string;
  media?: string;
  delay?: number;
  featured?: boolean;
  href?: string;
  id?: string;
}

export default function PublicationCard({
  date,
  tag,
  title,
  body,
  media,
  delay = 0,
  featured = false,
  href = '/publications',
  id,
}: PublicationCardProps) {
  const classes = featured ? 'pub-card card pub-card--featured' : 'pub-card card';
  return (
    <Reveal delay={delay} asInline={false}>
      <a href={href} id={id} className={classes}>
        {media && (
          <div className="pub-media">
            <img src={media} alt={`${title} — Enmero ecosystem update`} loading="lazy" />
          </div>
        )}
        <div className="pub-body">
          <div className="pub-meta">
            <span className="pub-tag">{tag}</span>
            <time className="pub-date">{date}</time>
          </div>
          <h3>{title}</h3>
          <p>{body}</p>
          <span className="pub-more">
            Read update
            <span className="card-arrow" aria-hidden="true">
              <ArrowRightIcon size={16} />
            </span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}