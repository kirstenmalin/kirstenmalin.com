import type { ReactElement } from 'react';
import Main from '#components/main';
import H1 from '#components/h1';
import Link from '#components/link';

export default function Projects(): ReactElement {
  return (
    <Main>
      <H1>Projects</H1>
      I don't have much to see here yet. In the meanwhile, take a look at my <Link href="https://github.com/kirstenmalin/ukulele">Ukulele Chords app on Github.</Link> I'll be adding it here live soon (as of mid-October 2026).
    </Main>
  );
}
