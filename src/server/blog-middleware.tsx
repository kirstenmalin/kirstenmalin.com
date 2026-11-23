import express from 'express';
import Blog from '#pages/blog';
import transformPostsForDisplay from '#utils/transform-posts-for-display';
import getBlogPosts from './get-blog-posts';

const router = express.Router();

router.use('/', async (req, _res, next) => {
  const postsData = await getBlogPosts();
  const posts = transformPostsForDisplay(postsData);
  req.pageContent = <Blog posts={posts} />;
  req.pageTitle = 'Blog | ';
  next();
});

export default router;

