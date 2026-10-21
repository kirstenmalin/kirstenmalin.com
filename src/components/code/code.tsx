import type { CodeProps } from './code.types';
import styles from './code.module.css';

/**
 * Component for displaying code snippets
 * Displays text in a monospace font with whitespace preserved
 */
export default function Code({ block = false, children }: CodeProps) {
  const Element = block ? 'div' : 'span';
  return <Element className={styles.code}>{children}</Element>;
}
