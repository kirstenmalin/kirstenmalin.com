import type { ReactNode } from 'react';
import Link from '#components/link';
import styles from './header.module.css';
import type { HeaderProps } from './header.types';

export default function Header({ path }: HeaderProps): ReactNode {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.siteName}>Kirsten Malin</p>
        <p className={styles.tagline}>Frontend Software Engineer</p>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><Link ariaCurrent={path === '' ? 'page' : undefined} href="/">Home</Link></li>
          <li><Link ariaCurrent={path === 'blog' ? 'page' : undefined} href="/blog">Blog</Link></li>
          <li><Link ariaCurrent={path === 'projects' ? 'page' : undefined} href="/projects">Projects</Link></li>
          <li><Link href="https://www.linkedin.com/in/kirstenmalin">LinkedIn</Link></li>
          <li><Link href="https://github.com/kirstenmalin">Github</Link></li>
        </ul>
      </nav>
    </header>
  );
}
