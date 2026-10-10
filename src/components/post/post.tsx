import type { ReactNode } from 'react';
import PostTags from '#components/post-tags';
import type { BlogPost } from '#data/blog-posts.types';
import styles from './post.module.css';

export default function Post({ content, date, tags, title }: BlogPost): ReactNode {
  return (
    <article className={styles.post}>
      <h2 className={styles.postTitle}>{title}</h2>
      <p>{date}</p>
      { content.map((paragraph) => <p key={paragraph.slice(0,10)}>{paragraph}</p>) }
      <PostTags tags={tags} />
    </article>
  );
}
