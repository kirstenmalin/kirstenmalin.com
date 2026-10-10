import type { ReactElement } from 'react';
import type { PostTagsProps } from './post-tags.types';
import styles from './post-tags.module.css';

/**
 * PostTag component to display category/content tags on blog posts
 */
export default function PostTags({ tags }: PostTagsProps): ReactElement {
  return (
    <div className={styles.postTags}>
      { tags.map((tag) => <span className={styles.postTag} key={tag}>{tag}</span>) }
    </div>
  );
}
