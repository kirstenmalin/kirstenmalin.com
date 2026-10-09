import type { ReactNode } from 'react';
import Header from '#components/header';
import Blog from '#pages/blog';
import Home from '#pages/home';
import { type AppProps } from './app.types';
import './app.css';

function App({ path }: AppProps) {
  let page: ReactNode;
  switch (path) {
    case 'blog':
      page = <Blog />;
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
