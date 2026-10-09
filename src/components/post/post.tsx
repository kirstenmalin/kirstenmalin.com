import type { ReactNode } from 'react';
import type { BlogPost } from '#pages/blog';

export default function Post({ content, date, tags, title }: BlogPost): ReactNode {
  return (
    <article>
      <h2>{title}</h2>
      <p>{date}</p>
      { content }
      { tags.map((tag) => <span key={tag}>{tag}</span>) }
    </article>
  );
}
