export type Tag =
  'accessibility' |
  'components' |
  'design' |
  'job search' |
  'portfolio' |
  'react';

export type BlogPost = {
  /**
   * The post content, where each paragraph is a string in the array
   */
  content: string[];
  /**
   * ISO date string yyyy-mm-dd
   */
  date: string;
  tags: Tag[];
  title: string;
}

export type BlogPosts = BlogPost[];
