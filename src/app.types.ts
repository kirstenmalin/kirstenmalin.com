import type { ReactNode } from 'react';

export interface AppProps {
  /**
   * The content to display in the page
   */
  children?: ReactNode;
  /**
	 * The current URL path
	 */
  path: string;
}
