import { Outlet, Scripts, ScrollRestoration } from 'react-router';
import './global-styles.css';
import type { ReactNode } from 'react';

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

export function ErrorBoundary() {}
