import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('./components/layout/layout.tsx', [
    index('./pages/home/home.tsx'),
    route('blog', './pages/blog/blog.tsx'),
  ]),
] satisfies RouteConfig;
