import type { ReactNode } from 'react';
import H2 from '#components/h2';
import Link from '#components/link';
import Main from '#components/main';
import styles from './home.module.css';

export default function Home(): ReactNode {
  return (
    <Main>
      <p className={styles.intro}>
        I've been a frontend software enginner since 2011, working mostly on B2B SaaS applications.
        I'm currently looking for a job at a Senior or Staff level, either remote or in the
        Salt Lake area. If you know of anything that might fit, feel free to contact me
        on <Link href="https://www.linkedin.com/in/kirstenmalin">LinkedIn</Link>. You can also take
        a look at <Link href="/files/KirstenMalinResume-2026.pdf">my resume (PDF)</Link>.
      </p>
      <H2>About Me</H2>
      <p>
        I originally got into web development as a hobby.
        I tried out a WYSIWYG editor to make a personal website, but I couldn't get it to do exactly
        what I wanted. I decided to take a look at the HTML that it output, and my first thought
        was, "This is a mess. I can do better than that myself." So I did. Fortunately, the internet
        is full of information on how to make the internet.
      </p>
      <p>
        That hobby turned into a career in frontend web development. Most of my experience
        has been on cross-functional teams, where I worked closely with backend developers
        to determine API interfaces and data structures. In my most recent role, I was on
        a frontend platform team, where we owned the design system and component library.
        This gave me an opportunity to work on projects that impacted frontend developers
        and designers across the organization. My work helped to unify the UI across features,
        improve the user experience and accessibility across the site, and reduce developer
        friction when implementing new experiences.
      </p>
      <p>
        When I'm not programming, I enjoy cross stitching, playing the ukulele, and reading comics.
        I have several editing credits to my name from my work
        at <Link href="https://www.instagram.com/velleitystudios/">Velleity Studios</Link>, a small comic
        book publisher. I occasionally (rarely) dabble in art, and my logo image is a digital
        painting I did of a total solar eclipse.
      </p>
    </Main>
  );
}
