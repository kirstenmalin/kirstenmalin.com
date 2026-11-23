import mysqlx from '@mysql/xdevapi';
import type { PostArray, PostObject } from '#types/blog-posts.types';

const columns = ['post_id', 'date', 'slug', 'title', 'content'] as const;

export default async function getBlogPosts(): Promise<PostObject[]> {
  const config = {
    host: process.env.DB_HOST || '',
    password: process.env.DB_PASSWORD || '',
    port: 33060,
    schema: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
  };

  try {
    const session = await mysqlx.getSession(config);
    const database = session.getSchema(config.schema);
    const postsTable = database.getTable('posts');
    const data = await postsTable
      .select(...columns)
      .orderBy(['date DESC'])
      .execute();
    const postArrays = data.fetchAll() as PostArray[];
    const posts = postArrays.map((postArray) => {
      return postArray.reduce((acc, postColumn, index) => {
        acc[columns[index]] = postColumn;
        return acc;
      }, {} as PostObject);
    });
    session.close();
    return posts;
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
}
