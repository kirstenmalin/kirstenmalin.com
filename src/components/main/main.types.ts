import type { ReactNode } from 'react';

export type MainProps = {
  /**
   * The main page content
   */
  children: ReactNode;
  /**
   * By default, Main has a max-width of 1200px.
   * Use this to remove the max-width.
   */
  noMaxWidth?: boolean;
};
