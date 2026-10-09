import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('./components/layout', [
    index('./pages/home'),
    route('blog', './pages/blog'),
  ]),
] satisfies RouteConfig;
