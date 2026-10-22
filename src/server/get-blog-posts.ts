import mysqlx from '@mysql/xdevapi';

export default async function getBlogPosts() {
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
    const posts = (await postsTable
      .select('post_id', 'date', 'slug', 'title', 'content')
      .orderBy(['date DESC'])
      .execute())
      .fetchAll();
    session.close();
    return posts;
  } catch (error) {
    console.error('Database error:', error);
  }
}
