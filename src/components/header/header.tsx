import type { ReactNode } from 'react';
import Link from '#components/link';
import type { HeaderProps } from './header.types';
import styles from './header.module.css';

export default function Header({ path }: HeaderProps): ReactNode {
  const NameWrapper = path === '' ? 'h1' : 'div';

  return (
    <header className={styles.header}>
      <a className={styles.nameLogoWrapper} href="/">
        <img className={styles.logo} src="/images/eclipse.jpg" alt="Digital painting of an eclipse." />
        <NameWrapper className={styles.nameWrapper}>
          <span className={styles.siteName}>Kirsten Malin</span>
          <span className={styles.tagline}>Frontend Software Engineer</span>
        </NameWrapper>
      </a>
      <nav className={styles.navigation}>
        <ul>
          <li><Link ariaCurrent={path === '' ? 'page' : undefined} hasPadding={true} href="/">Home</Link></li>
          <li><Link ariaCurrent={path === 'blog' ? 'page' : undefined} hasPadding={true} href="/blog">Blog</Link></li>
          <li><Link ariaCurrent={path === 'projects' ? 'page' : undefined} hasPadding={true} href="/projects">Projects</Link></li>
          <li><Link hasPadding={true} href="https://www.linkedin.com/in/kirstenmalin">LinkedIn</Link></li>
          <li><Link hasPadding={true} href="https://github.com/kirstenmalin">Github</Link></li>
        </ul>
      </nav>
    </header>
  );
}
