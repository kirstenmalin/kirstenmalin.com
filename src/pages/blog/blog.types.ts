import type { ReactNode } from 'react';

export type Tag =
  'accessibility' |
  'components' |
  'design' |
  'job search' |
  'portfolio' |
  'react';

export type BlogPost = {
  content: ReactNode;
  /**
   * ISO date string yyyy-mm-dd
   */
  date: string;
  tags: Tag[];
  title: string;
}

export type BlogPosts = BlogPost[];
