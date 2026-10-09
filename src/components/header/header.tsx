import type { ReactNode } from 'react';
import styles from './header.module.css';

export default function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <p className={styles.siteName}>Kirsten Malin</p>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kirstenmalin">LinkedIn</a>
          </li>
          {/* <li><a href="https://github.com/kirstenmalin">Github</a></li> */}
        </ul>
      </nav>
    </header>
  );
}
