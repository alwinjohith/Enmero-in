'use client';

import { useEffect } from 'react';
import { DOMAINS } from '@/data/site';

export default function DomainsSpy() {
  useEffect(() => {
    const spySections = document.querySelectorAll<HTMLElement>('[data-spy]');
    const spyLinks = document.querySelectorAll<HTMLAnchorElement>('[data-spy-link]');
    if (!spySections.length || !spyLinks.length || !('IntersectionObserver' in window)) {
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            spyLinks.forEach((l) => {
              l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    spySections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="subnav">
      <nav className="container subnav-inner" aria-label="Domains">
        {DOMAINS.map((d) => (
          <a href={`#${d.id}`} className="subnav-link" data-spy-link key={d.id}>
            {d.name}
          </a>
        ))}
      </nav>
    </div>
  );
}