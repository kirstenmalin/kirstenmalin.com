import express from 'express';
import getBlogPosts from './get-blog-posts';

const router = express.Router();

router.use('/', async (req, _res, next) => {
  const posts = await getBlogPosts();
  req.blogPosts = posts;
  req.pageTitle = 'Blog | ';
  next();
});

export default router;

