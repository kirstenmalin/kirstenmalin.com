import type { ReactElement } from 'react';
import ExternalLinkIcon from './external-link-icon';
import PdfIcon from './pdf-icon';
import type { LinkProps } from './link.types';
import styles from './link.module.css';

/**
 * Link component. Used for standard text links.
 * If the href statrs with `http`, then it is treated as an external link:
 * - it opens in a new tab
 * - it gets a external link icon appended to the text
 * If the href ends with `.pdf`, then it gets a PDF icon appended to the text
 */
export default function Link({
  ariaCurrent,
  children,
  href,
  hasPadding = false,
}: LinkProps): ReactElement {
  let isPdf, rel, target;
  if (href.slice(0, 4) === 'http') {
    rel = 'noreferrer';
    target = '_blank';
  }
  if (href.slice(-4) === '.pdf') {
    isPdf = true;
  }

  return (
    <a
      aria-current={ariaCurrent}
      className={`${styles.link} ${hasPadding ? styles.padding : ''}`}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
      {rel && <ExternalLinkIcon className={styles.externalLinkIcon} />}
      {isPdf && <PdfIcon />}
    </a>
  );
}
