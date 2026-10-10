import type { BlogPosts } from './blog-posts.types';

const blogPosts: BlogPosts = [
  // {
  //   date: '',
  //   title: '',
  //   tags: [],
  //   content: [],
  // },
  {
    date: '2026-10-10',
    title: 'Gotta keep MVP in mind',
    tags: ['mvp', 'portfolio', 'react-router', 'ssr'],
    content: [
      "They say that if something is hard, you need to do it more often. That applies a little too well to setting up new code projects, in my case. Very rarely in my career have I set up a new repo from scratch. Sure, I've done it, but it just doesn't come up much.",
      "For this website, I wanted to use server-side rendering with React. I've used PHP, Handlebars, EJS, and good, old-fashioned SHTML for server-side rendering, but despite using React for years, I haven't used it on the server. I've come to appreciate server-side rendering after years of only client-side because it involves actually sending content in the HTML response. At any rate, aside from React, I needed to choose a server library. After considering Vite, I picked Next.js. It didn't go well. I got things running ok, but in order to start the server, you have to run `npm start` from the command line, but... the way my web host handles Node.JS instances is to give it a .js file to start from. I tried a few things, none of which worked. So, back to Vite, which I should have just gone with in the first place.",
      "I got Vite + Express set up for SSR relatively easily-ish... and then I tried to add React Router. I'm picturing a site that renders on the server when you initially load the page, then has nice, smooth client-side routing while navigating around the site. Easy, right? Well, it turns out that Vite wants to handle the SSR its own way, but React Router has a completely different idea (at least they both work with Express).",
      "But what's my goal here? I still don't have any content and barely any styling. This wasn't helping. Every time I run into another rabbit hole of trouble, I keep coming back to this question: What is my MVP? It doesn't matter whether I have the best architecture ever if I never get around to actually putting content up. So here it is, my MVP website with routing via a switch statement. I've only got 3 pages; I don't need anything more complicated yet."
    ],
  },
  {
    date: '2026-10-08',
    title: 'Hello World?',
    tags: ['job search', 'portfolio', 'react'],
    content: [
      "I have worked in web application development for fifteen years, but I don't have anything publicly visible to show for it because all my work in the last decade has been B2B SaaS applications. All my customer-facing production code is paywalled. This makes things a bit rough now that I'm looking for a job.",
      "As a result, I'm finally getting around to making a portfolio website. Aside from this site itself, I'm working on sprucing up some personal projects to post them here."
    ],
  }
];

export default blogPosts;
