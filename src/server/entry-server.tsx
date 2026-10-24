import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app';

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <App path={url} />
    </StrictMode>,
  );
  return { html };
}
