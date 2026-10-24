import type { ReactNode } from 'react';
import SectionHeading from '#components/section-heading';
import PostTags from '#components/post-tags';
import toKebabCase from '#utils/to-kebab-case';
import type { PostProps } from './post.types';
import styles from './post.module.css';

export default function Post({ content, date, hasDivider, tags, title }: PostProps): ReactNode {
  const postId = toKebabCase(title);

  return (
    <article aria-labelledby={postId} className={`${styles.post} ${hasDivider ? styles.divider : ''}`}>
      <SectionHeading id={postId}>{title}</SectionHeading>
      <time dateTime={date}>{date}</time>
      { content }
      <PostTags tags={tags} />
    </article>
  );
}
