import type { ReactNode } from 'react';
import type { PostContent, PostObject } from '#types/blog-posts.types';
import { componentMap } from '#utils/component-map';
import type { PostProps } from '#components/post/post.types';


export default function transformPostsForDisplay(posts: PostObject[]): PostProps[] {
  if (!Array.isArray(posts) || posts.length === 0) {
    return [];
  }
  return posts.map((post) => {
    const { content, date, ...rest } = post;
    const contentJsx = transformContent(content);
    return {
      content: contentJsx,
      date: date.toISOString().slice(0,10),
      ...rest
    };
  });
}

function transformContent(content: PostObject['content']): ReactNode {
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }
  if (!Array.isArray(content)) {
    return '';
  }
  return content.map(transformContentItem);
}

function transformContentItem(item: string | PostContent): ReactNode {
  if (typeof item === 'string') {
    return item;
  }
  if (
    typeof item === 'object' &&
      'component' in item &&
      typeof item.component === 'string'
  ) {
    const Component = componentMap[item.component as keyof typeof componentMap];
    const { children: childrenProp, ...props } = item.props || {};
    const children = childrenProp ? transformContentItem(childrenProp) : undefined;
    return Component ?
      <Component {...props}>{children}</Component> :
      <>{children}</>;
  }

}
