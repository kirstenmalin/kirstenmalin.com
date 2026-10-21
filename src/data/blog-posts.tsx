import Link from '#components/link';
import type { BlogPosts } from './blog-posts.types';

const blogPosts: BlogPosts = [
  // {
  //   date: '',
  //   title: '',
  //   tags: [],
  //   content: [],
  // },
  {
    date: '2026-10-12',
    title: 'Phone numbers and shifting focus',
    tags: ['accessibility', 'user experience'],
    content: [
      'When filling out forms online (buying stuff, paying bills, etc.), I frequently need to fill out my phone number. Usually, the phone number field is one input, but a significant minority of the time, it\'s three separate fields. A common, but not consistent, pattern I run across in these situations is for the form to automatically move the focus to the next field when I\'ve finished the current field. This annoys me because it\'s unexpected and not consistent across websites.',
      'I felt vindicated when I was going through Deque\'s course on Form Labels, Instructions, and Validation and ran across a "bad example" of shifting focus based on user input in a text field that was exactly this case: a three-input phone number. This corresponds to WCAG criterion 3.2.2 On Input, which states, "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component." It just goes to show that accessibility really is for everyone.',
      <>For more information, see <Link href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html">Understanding SC 3.2.1 On Focus</Link></>,
    ],
  },
  {
    date: '2026-10-11',
    title: 'Form submission results and accessibility',
    tags: ['accessibility', 'user experience'],
    content: [
      'I have been working my way through the web accessibility courses offered by Deque with the goal of getting the IAAP WAS certification. A lot of the content is stuff I already know, but there are a lot of details to learn and cases that I haven\'t considered, so I\'m still learning a lot. One thing I thought was interesting in their course on forms is how to handle validation messaging when submitting the form triggers a page load, such as when using a form\'s POST method rather than AJAX. The guidance was to make the page title reflect the error or success state, such as prepending "Success! Your account has been created." or "There are 3 errors in the form." to the title. The idea is that the first thing a screen reader reads on page load is the page title, so this gives the user immediate feedback, and they don\'t have to go hunting through the page to find out what happened when they submitted the form.',
      'One of the things I like about these courses is the way that they explain the experience from the point of view of the user in a way that builds empathy and shows why the accessibility functionality is necessary. I have used screen readers for testing my work, but I don\'t use one on a regular basis for my normal computer use. I suppose that this is also a lesson that actually using assistive technology to do my normal tasks would help me build more empathy and understand better where the main pain points are.'
    ],
  },
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
