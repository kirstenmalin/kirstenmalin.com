import type { ReactNode } from 'react';

export type Tag =
  'accessibility' |
  'components' |
  'design' |
  'job search' |
  'mvp' |
  'portfolio' |
  'react' |
  'react-router' |
  'ssr' |
  'user experience'
  ;

export type BlogPost = {
  /**
   * The post content, where each paragraph is a string in the array
   */
  content: ReactNode[];
  /**
   * ISO date string yyyy-mm-dd
   */
  date: string;
  tags: Tag[];
  title: string;
}

export type BlogPosts = BlogPost[];
