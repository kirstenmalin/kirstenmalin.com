import type { ReactNode } from 'react';
import type { PageHeadingProps } from './page-heading.types';
import styles from './page-heading.module.css';

/**
 * The primary heading for the page.
 * Only one should be used per page.
 */
export default function PageHeading({ children }: PageHeadingProps): ReactNode {
  return (
    <h1 className={styles.pageHeading}>{children}</h1>
  );
}
