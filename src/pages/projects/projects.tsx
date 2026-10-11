import type { ReactElement } from 'react';
import Main from '#components/main';
import H1 from '#components/h1';
import Link from '#components/link';

export default function Projects(): ReactElement {
  return (
    <Main>
      <H1>Projects</H1>
      <p>
        I'm still working on geting some projects set up here to show off, so there will be more
        coming soon (as of mid-October 2026). In the meanwhile, here are some links to projects
        I have worked on, both personally and professionally.
      </p>
      <ul>
        <li>
          <Link href="https://fabric.bamboohr.net">BambooHR's component library</Link>
          <br /><br />
          While I was working at BambooHR, I was the technical lead on the design system team.
          Our main responsibility was to develop and maintain the component library, which is
          called Fabric. Along with my team, I wrote new components, added new functionality to
          existing ones, and documented them to make them easier to use for the feature teams.
          I led an accessibility audit across the entire library, then worked with my team to
          remediate the problems we found. With an increased focus on accessibility across the
          organization, I wanted to get the biggest impact for our work up front by addressing
          problems in a centralized location as much as possible.
        </li>
        <br /><br />
        <li>
          <Link href="https://github.com/kirstenmalin/ukulele">Ukulele Chords app on Github</Link>
          <br /><br />
          This is a small web app I made to display lyrics and chords on my tablet while
          I play the ukulele. The main architectural constraint I had for this is that I
          ran it on my Android tablet via Termux, so I didn't have easy access to developer
          tools or the browser console to surface errors. That is reflected in the utility
          functions I wrote to surface errors and other messages in the UI. It's easier to
          use a tablet than a laptop while holding a ukulele, and I wanted to be able to edit
          the song lyrics and chords easily as I was playing.
        </li>
      </ul>
    </Main>
  );
}
