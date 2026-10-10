import type { ReactElement } from 'react';
import { SKIP_LINK_TARGET_ID } from '#components/skip-link';
import type { MainProps } from './main.types';
import styles from './main.module.css';

/**
 * The main page content container
 * Facilitates SkipLink behavior, so each page component needs to use this as its outer wrapper
 */
export default function Main({ children, noMaxWidth = false }: MainProps): ReactElement {
  return (
    <main
      className={noMaxWidth ? undefined : styles.main}
      id={SKIP_LINK_TARGET_ID}
      tabIndex={-1}
    >
      {children}
    </main>);
}
