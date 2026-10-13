import type { ReactElement } from 'react';
import Link from '#components/link';
import styles from './skip-link.module.css';

// This id ends up in the url hash, so it's user-facing
export const SKIP_LINK_TARGET_ID = 'main';

/**
 * SkipLink component to enable keyboard users to skip focus to the main content.
 */
export default function SkipLink(): ReactElement {
  return (
    <div className={styles.skipLink}>
      <Link hasPadding={true} href={`#${SKIP_LINK_TARGET_ID}`}>
        Skip to main content
      </Link>
    </div>
  );
}
