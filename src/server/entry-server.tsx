import { StrictMode, type ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app';

export function render(url: string, pageContent: ReactNode) {
  const html = renderToString(
    <StrictMode>
      <App path={url}>{pageContent}</App>
    </StrictMode>,
  );
  return { html };
}
