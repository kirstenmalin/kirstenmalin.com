import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './app';

const path = window.location.pathname.replace('/', '');

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App path={path} />
  </StrictMode>,
);
