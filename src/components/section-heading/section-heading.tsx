import type { ReactNode } from 'react';
import type { SectionHeadingProps } from './section-heading.types';
import styles from './section-heading.module.css';

export default function H2({ children, id }: SectionHeadingProps): ReactNode {
  return (
    <h2 className={styles.sectionHeading} id={id}>{children}</h2>
  );
}
