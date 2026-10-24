# KirstenMalin.com, my portfolio website

I'm a senior frontend software engineer, and [my website](https://kirstenmalin.com) serves as a place to show my professional portfolio and part of the portfolio itself.

## Architecture

This project is built with an [Express.js](https://expressjs.com) server running in [Node.js](https://nodejs.org/en) with server-side rendered [React](https://react.dev). 
I have worked with client-side React for about 7 years, but I wanted to try my hand at getting it working server-side to improve the way the site gets indexed and gets 
read by AI agents. I haven't done much server-side rendering since early in my career (with the exception of some side projects theming a couple of Wordpress sites and
a static site in PHP), when I used [Handlebars](https://handlebarsjs.com) and [Jade](https://jade-lang.com). The build is handled by [Vite](https://vite.dev).

For styling, I'm sticking with CSS modules. Given recent developments in CSS capabilities, there aren't as many benefits to CSS preprocessors or CSS-in-JS as there used to be.
Native CSS vars and nested styling, along with Vite handling class-scoping for `*.module.css` files, give me what I need for a small project like this.

## Future Plans

This website is a work in progress and will continue to be an ongoing project.

I'm in the process of moving my blog posts from `.json` files to a MySQL database and moving more of the routing into the Express server. Once that is done, I'll add pagination
to the Blog page (for when I have enough posts to need it...), separate URLs for each post, archive pages by month, and pages for each tag.

I also have plans to update the styling of my [Ukulele Chords](https://kirstenmalin.com/projects) project to match the rest of my site, now that it's publicly available,
rather than only for my own use. I'd like to make the project more DRY, especially in regards to the HTML files, but I still have the constraint that I need it to
be able to run independently and locally on my phone via [Termux](https://termux.dev/en/) while I'm playing the ukulele. I've had some trouble trying to get Vite to run
in Termux. Apparently, there are known issues, and a fix has been implemented, but for whatever reason, my particular flavor of Android isn't playing well with it.
I could just load the production site, but that would defeat the purpose of being able to easily and quickly edit lyrics and chords on the fly.
