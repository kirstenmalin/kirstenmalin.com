import type { ReactNode } from 'react';
import type { H2Props } from './h2.types';
import styles from './h2.module.css';

export default function H2({ children, id }: H2Props): ReactNode {
  return (
    <h2 className={styles.h2} id={id}>{children}</h2>
  );
}
