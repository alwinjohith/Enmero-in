import Reveal from '../Reveal';
import './PillarCard.css';

interface PillarCardProps {
  index?: string;
  title: string;
  body: string;
  delay?: number;
}

export default function PillarCard({ index, title, body, delay = 0 }: PillarCardProps) {
  return (
    <Reveal delay={delay} asInline={false}>
      <article className="pillar-card card">
        {index && <span className="pillar-index">{index}</span>}
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    </Reveal>
  );
}