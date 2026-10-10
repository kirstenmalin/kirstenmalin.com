import type { ReactNode } from 'react';
import Post from '#components/post';
import blogPosts from './blog-posts';
import Main from '#components/main';

export default function Blog(): ReactNode {
  return (
    <Main>
      <h1>Blog</h1>
      { blogPosts.map((post) => <Post key={post.date} {...post} />) }
    </Main>
  );
}
