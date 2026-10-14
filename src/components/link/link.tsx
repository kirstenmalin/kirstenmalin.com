import type { ReactElement } from 'react';
import ExternalLinkIcon from './external-link-icon';
import type { LinkProps } from './link.types';
import styles from './link.module.css';

/**
 * Link component. Used for standard text links.
 * If the href statrs with `http`, then it is treated as an external link:
 * it gets the attribute target="_blank"
 * it gets an aria-label that appends "Opens in a new tab." to the link text
 */
export default function Link({
  ariaCurrent,
  children,
  href,
  hasPadding = false,
}: LinkProps): ReactElement {
  let ariaLabel, rel, target;
  if (href.slice(0, 4) === 'http') {
    ariaLabel = `${children}. Opens in a new tab.`;
    rel = 'noreferrer';
    target = '_blank';
  }
  return (
    <a
      aria-current={ariaCurrent}
      aria-label={ariaLabel}
      className={`${styles.link} ${hasPadding ? styles.padding : ''}`}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
      {ariaLabel && <ExternalLinkIcon />}
    </a>
  );
}
