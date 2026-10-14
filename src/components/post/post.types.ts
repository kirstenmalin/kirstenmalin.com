import type { BlogPost } from '#data/blog-posts.types';

export type PostProps = BlogPost & {
  hasDivider?: boolean;
}
