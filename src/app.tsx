import type { ReactNode } from 'react';
import Header from '#components/header';
import Blog from '#pages/blog';
import Home from '#pages/home';
import Projects from '#pages/projects';
import { type AppProps } from './app.types';
import './app.css';

function App({ path }: AppProps) {
  let page: ReactNode;
  const pathFirstPart = path.split('/')[0];
  switch (pathFirstPart) {
    case 'blog':
      page = <Blog />;
      break;
    case 'projects':
      page = <Projects />;
      break;
    default:
      page = <Home />;
      break;
  }
  return (
    <>
      <Header />
      { page }
    </>
  );
}

export default App;
