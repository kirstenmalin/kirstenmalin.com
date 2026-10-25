import type { ReactNode } from 'react';
import type { SubHeadingProps } from './sub-heading.types';
import styles from './sub-heading.module.css';

export default function SubHeading({ children, id }: SubHeadingProps): ReactNode {
  return (
    <h3 className={styles.subHeading} id={id}>{children}</h3>
  );
}
