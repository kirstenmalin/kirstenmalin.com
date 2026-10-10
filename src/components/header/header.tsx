import type { ReactNode } from 'react';
import Link from '#components/link';
import styles from './header.module.css';

export default function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.siteName}>Kirsten Malin</p>
        <p className={styles.tagline}>Frontend Software Engineer</p>
      </div>
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
