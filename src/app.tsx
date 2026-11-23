import type { ReactNode } from 'react';
import Header from '#components/header';
import Home from '#pages/home';
import Projects from '#pages/projects';
import { type AppProps } from './app.types';
import './app.css';
import SkipLink from '#components/skip-link';

function App({ children, path }: AppProps) {
  let page: ReactNode;
  if (children) {
    page = children;
  } else {
    const pathFirstPart = path.split('/')[0];
    switch (pathFirstPart) {
      case 'projects':
        page = <Projects />;
        break;
      default:
        page = <Home />;
        break;
    }
  }
  return (
    <>
      <SkipLink />
      <Header path={path} />
      { page }
    </>
  );
}

export default App;
