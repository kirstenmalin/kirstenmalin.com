import type { ReactElement } from 'react';
import type { LinkProps } from './link.types';
import styles from './link.module.css';

/**
 * Link component. Used for standard text links.
 * If the href statrs with `http`, then it is treated as an external link:
 * it gets the attribute target="_blank"
 * it gets an aria-label that appends "Opens in a new tab." to the link text
 */
export default function Link({ children, href }: LinkProps): ReactElement {
  let target, ariaLabel;
  if (href.slice(0, 4) === 'http') {
    target = '_blank';
    ariaLabel = `${children}. Opens in a new tab.`;
  }
  return (
    <a
      aria-label={ariaLabel}
      className={styles.link}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}
