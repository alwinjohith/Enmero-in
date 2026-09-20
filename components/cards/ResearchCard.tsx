import Reveal from '../Reveal';
import './ResearchCard.css';

interface ResearchCardProps {
  index?: string;
  title: string;
  body: string;
  delay?: number;
}

export default function ResearchCard({ index, title, body, delay = 0 }: ResearchCardProps) {
  return (
    <Reveal delay={delay} asInline={false}>
      <article className="research-card">
        {index && <span className="research-index">{index}</span>}
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    </Reveal>
  );
}