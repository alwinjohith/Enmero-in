import Reveal from '../Reveal';
import { ArrowRightIcon } from '../icons';
import './DocCard.css';

interface DocCardProps {
  tag: string;
  title: string;
  body: string;
  delay?: number;
}

export default function DocCard({ tag, title, body, delay = 0 }: DocCardProps) {
  return (
    <Reveal delay={delay} asInline={false}>
      <article className="doc-card card">
        <span className="doc-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{body}</p>
        <span className="doc-arrow" aria-hidden="true">
          <ArrowRightIcon size={16} />
        </span>
      </article>
    </Reveal>
  );
}