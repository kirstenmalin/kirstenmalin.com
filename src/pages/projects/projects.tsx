import type { ReactElement } from 'react';
import H1 from '#components/h1';
import Link from '#components/link';
import Main from '#components/main';
import ProjectCard from '#components/project-card';
import styles from './projects.module.css';

export default function Projects(): ReactElement {
  return (
    <Main>
      <H1>Projects</H1>
      <p>
        I'm still working on geting some projects set up here to show off, so there will be more
        coming soon (as of mid-October 2026). In the meanwhile, here are some links to projects
        I have worked on, both personally and professionally.
      </p>
      <div className={styles.projectList}>
        <ProjectCard
          description="While I was working at BambooHR, I was the technical lead on the design system team. Our main responsibility was to develop and maintain the component library, which is called Fabric. Along with my team, I wrote new components, added new functionality to existing ones, and documented them to make them easier to use for the feature teams. I led an accessibility audit across the entire library, then worked with my team to remediate the problems we found. With an increased focus on accessibility across the organization, I wanted to get the biggest impact for our work up front by addressing problems in a centralized location as much as possible."
          link="https://fabric.bamboohr.net"
          title="BambooHR's component library"
        />
        <ProjectCard
          description={(
            <>
              This is a small web app I made to display lyrics and chords on my tablet while
              I play the ukulele. The main architectural constraint I had for this is that I
              ran it on my Android tablet via Termux, so I didn't have easy access to developer
              tools or the browser console to surface errors. That is reflected in the utility
              functions I wrote to surface errors and other messages in the UI. It's easier to
              use a tablet than a laptop while holding a ukulele, and I wanted to be able to edit
              the song lyrics and chords easily as I was playing.
              <Link href="https://github.com/kirstenmalin/ukulele">See the code on Github</Link>
            </>
          )}
          // Make this a relative link after I add a return link in the ukulele app
          // link="https://kirstenmalin.com/projects/ukulele"
          title="Ukulele Chords app"
        />
      </div>
    </Main>
  );
}
