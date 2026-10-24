import type { ReactElement } from 'react';
import PageHeading from '#components/page-heading';
import Link from '#components/link';
import Main from '#components/main';
import ProjectCard from '#components/project-card';
import styles from './projects.module.css';
import Code from '#components/code';

export default function Projects(): ReactElement {
  return (
    <Main>
      <PageHeading>Projects</PageHeading>
      <p>
        These are projects I have worked on, both professionally and on my own time.
        Most of my professional work is behind a paywall because I've been working at
        B2B SaaS companies since 2015, but here's what I can share.
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
        <ProjectCard
          description={
            <>
              <p>
                This website is not just a place to showcase my work but part of my portfolio.{' '}
                <Link href="https://github.com/kirstenmalin/kirstenmalin.com">
                  The code is available on Github
                </Link>
                {' '}so that you can see my architectural decisions and how I like to work.
              </p>
              <p>
                This site is built with an <Link href="https://expressjs.com">Express.js</Link>{' '}
                server running in <Link href="https://nodejs.org">Node.js</Link> with server-side
                rendered <Link href="https://react.dev">React</Link>. I have worked with
                client-side React for about 7 years, but I wanted to try my hand at getting it
                working server-side to improve the way the site gets indexed and gets read by AI
                agents. I haven't done much server-side rendering since early in my career (with
                the exception of some side projects theming a couple of Wordpress sites and a
                static site in PHP), when I used {' '}
                <Link href="https://handlebarsjs.com">Handlebars</Link> and{' '}
                <Link href="https://jade-lang.com">Jade</Link>. The build is handled by{' '}
                <Link href="https://vite.dev">Vite</Link>.
              </p>
              <p>
                For styling, I'm sticking with CSS modules. Given recent developments in CSS
                capabilities, there aren't as many benefits to CSS preprocessors or CSS-in-JS as
                there used to be. Native CSS vars and nested styling, along with Vite handling
                class-scoping for <Code>*.module.css</Code> files, give me what I need for a small
                project like this.
              </p>
              <p>
                I designed my site and created all images and icons used throughout.
                The font I'm using is{' '}
                <Link href="https://www.brailleinstitute.org/freefont/">Atkinson Hyperlegible Next</Link>,
                created by the{' '}
                <Link href="https://www.brailleinstitute.org">Braille Institute</Link>,
                which I like for its readability. In particular, capital <Code>I</Code>,
                lowercase <Code>l</Code> and the number <Code>1</Code> are visually distinct
                without context.
              </p>
            </>
          }
          image="/images/kirstenmalin-com-projects-page.png"
          imageAlt="This Projects page"
          link="/"
          title="This Website - KirstenMalin.com"
        />
        <ProjectCard
          description={
            <>
              <p>
                <Link href="https://andrewmalindesign.com">AndrewMalinDesign.com</Link> is a
                portfolio site showcasing Andrew Malin's design work. Andrew created the visual
                design of the site with suggestions from me about how to handle responsiveness.
                I created a lightweight PHP framework to manage the navigation elements and display
                the artwork in a consistent way.
              </p>
              <p>
                Andrew asked for an interactive animation on the home page featuring his character
                Mushroom Moose. I assembled the animation using stacked images of Mushroom Moose,
                his pupils, and his mask. The pupils move to track the mouse, and the mouth closes
                into a smile when the mouse is over the image.
              </p>
              <p>
                The most interesting part of creating this interaction was determining how far
                to move the pupils based on the mouse movements and constraining the pupils to
                the eye holes in the mask. Since Mushroom Moose's head is at an angle, the eye
                holes are not the same size and not aligned horizontally. Combined with wanting
                the pupils to move in a way that looks like he's looking at the mouse rather
                than past it, this required calculating the movement of each pupil independently
                and accounting for the shapes of the eye holes.
              </p>
              <p>
                In addition, Mushroom Moose's word balloons adjust to fit the space in order to
                keep the page responsive.
              </p>
            </>
          }
          image="/images/andrew-malin-design-decals.png"
          imageAlt="Andrew Malin Design's portfolio page showing decals he has designed"
          link="https://andrewmalindesign.com"
          title="Andrew Malin Design portfolio site"
        />
        <ProjectCard
          description={
            <>
              <p>
                I created a Wordpress theme for the Varied Techniques small business website.
                Visual design was done by {' '}
                <Link href="https://andrewmalindesign.com">Andrew Malin</Link>.
                The theme is a child theme on top of the default TwentyNineteen Wordpress theme.
              </p>
            </>
          }
          image="/images/varied-techniques-store.png"
          imageAlt="The Varied Techniques store page with a green and white color scheme"
          link="https://variedtechniques.com/store"
          title="Varied Techniques Wordpress Theme"
        />
      </div>
    </Main>
  );
}
