import type { ReactNode } from 'react';
import H1 from '#components/h1';
import Main from '#components/main';
import Post from '#components/post';
import blogPosts from '#data/blog-posts';

export default function Blog(): ReactNode {
  return (
    <Main>
      <H1>Blog</H1>
      { blogPosts.map((post) => <Post key={post.date} hasDivider={true} {...post} />) }
    </Main>
  );
}
