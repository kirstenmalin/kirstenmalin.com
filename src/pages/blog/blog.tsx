import type { ReactNode } from 'react';
import PageHeading from '#components/page-heading';
import Main from '#components/main';
import Post from '#components/post';
import blogPosts from '#data/blog-posts';

export default function Blog(): ReactNode {
  return (
    <Main>
      <PageHeading>Blog</PageHeading>
      { blogPosts.map((post) => <Post key={post.date} hasDivider={true} {...post} />) }
    </Main>
  );
}
