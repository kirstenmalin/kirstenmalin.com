import type { ReactElement, ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }): ReactElement {
  return <div id="kirstens-layout">{children}</div>;
}
