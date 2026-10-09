import type { ReactNode } from 'react';
import { isRouteErrorResponse, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';
import './global-styles.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/icon" href="/eclipse.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Kirsten Malin" />
        <meta name="description" content="Kirsten Malin is a frontend software engineer with 15 years experience building web applications. She specializes in design systems and web accessibility." />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({
  error,
}: Route.ErrorBoundaryProps) {
  let message = '';
  let details = '';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (
    import.meta.env.DEV &&
    error &&
    error instanceof Error
  ) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main id="error-page">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
