import type { ReactNode } from 'react';
import Link from '#components/link';
import styles from './header.module.css';

export default function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <p className={styles.siteName}>Kirsten Malin</p>
      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="https://www.linkedin.com/in/kirstenmalin">LinkedIn</Link></li>
          <li><Link href="https://github.com/kirstenmalin">Github</Link></li>
        </ul>
      </nav>
    </header>
  );
}
