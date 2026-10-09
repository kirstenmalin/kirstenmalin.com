import type { ReactNode } from 'react';
import Post from '../../components/post';
import blogPosts from './blog-posts';

export default function Blog(): ReactNode {
  return (
    <main>
      <h1>Blog</h1>
      { blogPosts.map((post) => <Post key={post.date} {...post} />) }
    </main>
  );
}
