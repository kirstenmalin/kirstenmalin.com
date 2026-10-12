import type { ReactNode } from 'react';
import Link from '#components/link';
import Main from '#components/main';
import Post from '#components/post';
import blogPosts from '#data/blog-posts';
import styles from './home.module.css';

export default function Home(): ReactNode {
  return (
    <Main>
      <p className={styles.intro}>
        I've been a frontend software enginner since 2011, working mostly on B2B SaaS applications.
        I'm currently looking for a job at a Senior or Staff level,
        either remote or in the Salt Lake area.
        If you know of anything that might fit, feel free to contact me on <Link href="https://www.linkedin.com/in/kirstenmalin">LinkedIn.</Link> You can also take a look at <Link href="/assets/KirstenMalinResume-2026.pdf">my resume (PDF).</Link>
      </p>
      { blogPosts.map((post) => <Post key={post.date} {...post} />) }
    </Main>
  );
}
