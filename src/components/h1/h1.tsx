import type { ReactNode } from 'react';
import type { H1Props } from './h1.types';
import styles from './h1.module.css';

export default function H1({ children }: H1Props): ReactNode {
  return (
    <h1 className={styles.h1}>{children}</h1>
  );
}
