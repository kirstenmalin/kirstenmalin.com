import type { ReactNode } from 'react';

export type CodeProps = {
  /**
   * Whether to display the code as a block element
   * @default false which is inline
   */
  block?: boolean;
  /**
   * The code text to display
   * Whitespace is preserved
   */
  children: ReactNode;
};
