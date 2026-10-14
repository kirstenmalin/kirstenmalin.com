import type { ReactNode } from 'react';
import H2 from '#components/h2';
import PostTags from '#components/post-tags';
import type { BlogPost } from '#data/blog-posts.types';
import toKebabCase from '#utils/to-kebab-case';
import styles from './post.module.css';

export default function Post({ content, date, tags, title }: BlogPost): ReactNode {
  const postId = toKebabCase(title);

  return (
    <article aria-labelledby={postId} className={styles.post}>
      <H2 id={postId}>{title}</ H2>
      <time dateTime={date}>{date}</time>
      { content.map((paragraph) => <p key={paragraph?.toString().slice(0,10)}>{paragraph}</p>) }
      <PostTags tags={tags} />
    </article>
  );
}
