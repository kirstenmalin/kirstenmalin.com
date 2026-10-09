import type { BlogPosts } from './blog.types';

const blogPosts: BlogPosts = [
  // {
  //   date: '',
  //   title: '',
  //   tags: [],
  //   content: '',
  // },
  {
    date: '2026-10-08',
    title: '',
    tags: ['job search', 'portfolio'],
    content: (<>
      <p>I have worked in web application development for fifteen years, but I don't have
        anything publicly visible to show for it because all my work in the last decade has
        been B2B SaaS applications. All my customer-facing production code is paywalled. This
        makes things a bit rough now that I'm looking for a job.
      </p>
      <p>As a result, I'm finally getting around to making a portfolio website. Aside from this
        site itself, I'm working on sprucing up some personal projects to post them here.
      </p>
    </>),
  }
];

export default blogPosts;
