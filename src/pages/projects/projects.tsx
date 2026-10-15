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
        These are projects I have worked on, both personally and professionally.
        Most of my professional work is behind a paywall because I've been working at
        B2B SaaS companies since 2015, but I'll share what I can.
      </p>
      <div className={styles.projectList}>
        <ProjectCard
          description={<>
            <p>
              While I was working at BambooHR, I was the technical lead on the design system team.
              Our main responsibility was to develop and maintain the component library,
              which is called Fabric. The pages where Fabric is used are paywalled, but
              the Storybook documentation is publicly available.
            </p>
            <p>
              Along with my team, I wrote new components, added new functionality to existing ones,
              and documented them to make them easier to use for the feature teams.
              I also led an accessibility audit across the entire library, then worked with my team
              to remediate the problems we found. With an increased focus on accessibility across
              the organization, I wanted to get the biggest impact for our work up front by
              addressing problems in a centralized location as much as possible.
            </p>
            <p>
              Some of the Fabric components I had a particularly large role in creating are
              the <Link href="https://fabric.bamboohr.net/?path=/docs/components-cropper--guide">Cropper</Link>,
              the <Link href="https://fabric.bamboohr.net/?path=/docs/components-photouploadmodal--guide">PhotoUploadModal</Link>,
              and the <Link href="https://fabric.bamboohr.net/?path=/docs/components-globaltemplate--guide">GlobalTemplate</Link>.
            </p>
            <p>
              See the <Link href="https://fabric.bamboohr.net">Fabric Storybook documentation</Link>
            </p>
          </>}
          image="/images/fabric-intro-screenshot.png"
          imageAlt="The Fabric component library documentation intro page."
          link="https://fabric.bamboohr.net"
          title="BambooHR's component library"
        />
        <ProjectCard
          description={(
            <>
              <p>
                This is a small web app I made to display lyrics and chords on my tablet while
                I play the ukulele.
              </p>
              <p>
                It's easier to use a tablet than a laptop while holding a ukulele, and I wanted to
                be able to edit the song lyrics and chords easily as I was playing.
                As a result, I wrote and ran this project on my Android tablet
                using Termux as the terminal. This led to some architectural and logistical
                constraints, including that I didn't have easy access to developer
                tools or the browser console to surface errors. That is reflected in the utility
                functions I wrote to surface errors and other messages in the UI.
              </p>
              <p>
                I also wanted to avoid any build or compliation step so that I could make a change
                and immediately get back to playing, which is why I opted for statically serving
                plain HTML files and accepting the duplication across song files. With the
                improvement in build tools since I started this project, I may go back and refactor
                things to make it more DRY.
              </p>
              <p>
                See the <Link href="./ukulele">Ukulele Chords app</Link> in action!
              </p>
              <p>
                See the <Link href="https://github.com/kirstenmalin/ukulele">code on Github</Link>
              </p>
            </>
          )}
          image="/images/ukulele-app-screenshot.png"
          imageAlt="Ukulele chords and fret diagrams for the Beatle's song Let It Be"
          link="/projects/ukulele"
          title="Ukulele Chords app"
        />
      </div>
    </Main>
  );
}
