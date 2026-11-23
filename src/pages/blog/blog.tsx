import type { ReactNode } from 'react';
import PageHeading from '#components/page-heading';
import Main from '#components/main';
import Post from '#components/post';
import type { PostProps } from '#components/post/post.types';

export default function Blog({ posts }: { posts: PostProps[] }): ReactNode {
  return (
    <Main>
      <PageHeading>Blog</PageHeading>
      { posts.map((post) => <Post key={post.date} hasDivider={true} {...post} />) }
    </Main>
  );
}
