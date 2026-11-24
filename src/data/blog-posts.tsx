import Code from '#components/code';
import Figure from '#components/figure';
import Link from '#components/link';
import SubHeading from '#components/sub-heading';
import type { BlogPosts } from './blog-posts.types';

const blogPosts: BlogPosts = [
  // {
  //   date: '',
  //   title: '',
  //   tags: [],
  //   content: (<></>),
  // },
  {
    date: '2026-11-23',
    title: '',
    tags: ['accessibility', 'user experience'],
    content: (<>
      <p>
        Alt text on images as an accessibility requirement is interesting to me because it's trivial
        to determine whether it exists but non-trivial to determine whether it's good.
      </p>
      <p>
        The idea behind image alt text is to give people who can't see the image the same
        information as people who can see it. This means that the description for an image depends
        on not just what's in the image, but also why the image is there. One of the earliest
        examples I ran across for this was a painting of a guy in a suit and stovepipe hat. Is the
        article that the image accompanies about the artist who painted the portrait? Maybe the
        description needs to be about the art style. Or is the article about men's fashion in the
        1860's? The alt text should describe the suit and hat. But if the article is about Abraham
        Lincoln, then the alt text needs to say that it's Abraham Lincoln.
      </p>
      <p>
        As I have been paying more attention to it, I have run across some excellent alt text and
        some&hellip; less good alt text. I'd like to share a few examples, starting with the bad
        and ending with the good.
      </p>
      <SubHeading>
        Sort of descriptive but useless
      </SubHeading>
      <Figure
        alt="Example of bad alt text."
        caption="Screenshot from my phone of the offending alt text, along with the blue circle in question"
        float="inline-end"
        src="/images/ai-aria-label 20250926_232010.jpg"
      />
      <p>
        I ran across this example when I was looking through a list of items, where some items had
        badges or indicators of some sort. The badges were small, blue circles with tiny white text
        that was illegible when I zoomed in. I couldn't find any legend or key anywhere to explain
        the badges, so I checked the alt text, hoping that it contained the image's text.
      </p>
      <p>Nope. No luck.</p>
      <p>
        The alt text read: "A blue circle with white text AI-generated content may be incorrect."
      </p>
      <p>
        That alt text is not inaccurate, but it is worse than useless. I guess it gives screen
        reader users the exact same experience I had while looking at the page, so we both know that
        the image is a blue circle with white text, but there are two problems with this:
      </p>
      <ol>
        <li>I still don't know what the image means.</li>
        <li>
          Screen reader users who can't see the image don't know that they are getting the same
          (lack of) information as sighted users. If all I had to go on was that alt text, I would
          assume that the "white text" on the "blue circle" was legible to people who could see it.
          This would make me feel pretty excluded. I can only imagine how people feel when they have
          to deal with this sort of thing on a daily basis.
        </li>
      </ol>
      <p>
        The solution: Make the alt text be the actual text that's in the image, and add a key
        somewhere on the page for sighted users.
      </p>
      <SubHeading>Accurate, but gives away the game</SubHeading>
      <p>
        I ran across this one yesterday as I was going through a <Link href="https://www.marinebio.org/creatures/ocean-quizzes/marine-biology/">
          marine biology quiz
        </Link> with my kids.
      </p>
      <Figure
        alt="Multiple-choice question with an image whose alt text contains the answer"
        caption="The quiz question next to the devtools accessibility tree, which shows the image's alt text"
        src="/images/alt-text-gives-quiz-answer-2026-11-23.png"
      />
      <p>
        The quiz question asks, "Which NASA satellite instrument has been widely used to measure
        sea-surface temperature and ocean color?" The possible answers are MODIS, GPS, LIDAR, and
        SONAR. As we were going through the quiz, I checked out the alt text for some of the images,
        which on my phone takes just a long-press on the image to pull up,
        because I was curious about what would be described. Some of the pictures showed fish to
        help illustrate the question, and the alt text said what kind of fish it was, which was
        cool and informative and not what the question was asking. I happened to look at the alt
        text for this question's image before reading the question. Hey, why not? I like space. I
        thought it would say something like, "A satellite in orbit around Earth."
      </p>
      <p>
        Nope, the alt text was "MODIS", which was the answer to the question. This is not actually
        good alt text in this situation because it gives screen reader users (and people like me
        who like to poke into things) information that they shouldn't have. Here's a description of
        how to handle this situation
        from <Link href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html">
          Understanding SC 1.1.1 Non-text Content (Level A)
        </Link>:
      </p>
      <blockquote>
        Test: If non-text content is a test or exercise that would be invalid if presented in text,
        then text alternatives at least provide descriptive identification of the non-text content.
      </blockquote>
      <p>
        In this case, we were going through the quiz for fun, so it's not a big deal, but if this
        had been an actual test for school, giving away the answer in the alt text would be
        a problem.
      </p>
      <SubHeading>The best alt text I've seen</SubHeading>
      <p>
        Last, I'd like to share the best alt text I've ever seen, which comes from marketing emails
        from <Link href="https://myfahlo.com">Fahlo</Link>, which is a cool website where you can buy
        a bracelet or a plushie animal that comes with a QR code that lets you track an animal's
        movements on their app, and they donate part of their profits to organizations that help
        the kind of animals that you're tracking. I first ran across Fahlo when I bought one of
        their sea turtle bracelets at the local aquarium's gift shop.
      </p>
      <p>
        Anyway, once I started getting promotional emails from them, I was pleasantly surprised
        by how awesome their alt text is. The emails are entirely images, aside from the footer
        with the unsubscribe link. What I found really interesting is that the alt text for each
        image does not contain the exact text that displays. Instead, it gives the information that
        the set of images as a whole are conveying, written just like an advertisement blurb.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }}>
        <Figure
          alt="Fahlo email with images sharks and bracelets with hammerhead shark beads. 3 New Bracelets. 1 Epic Partnership. Discovery Shark Week X Fahlo. Tidal Wave, Anemone, Deep Sea. Follow the Frenzy! We teamed up with Discovery Shark Week to celebrate the hammerhead hysteria! Hook yours before they're gone with the tide. Track a hammerhead. Look out for a fin! You might just spot your shark on TV."
          caption="An email about sharks with images displayed. Note the text that is embedded in the images."
          src="/images/fahlo-email-images-2026-07-01.jpg"
        />
        <Figure
          alt="Fahlo email with images of a cheetah and cheetah plushies. Introducing: Cheetah Tracking Plush. Track a real cheetah in the wild before they leave with Season 1. Shop Now. Discover new adventures through the grasslands of Namibia. Shop Now."
          caption="An email about cheetahs with images displayed. Note the text that is embedded in the images."
          src="/images/fahlo-email-images-2026-09-27.jpg"
        />
        <Figure
          alt="Fahlo email showing alt text for several images, reading: Shark week is approaching! There are 3 new bracelets waiting just below the surface! Three new bracelets and one epic partnership have arrived as Fahlo teams up with Discovery Shark Week to celebrate the hammerhead hysteria. Track a hammerhead before they are gone with the tide. The Hammerhead tracking bracelet is come in 3 new colors! Shop the Tidal Wave bead color now! The Hammerhead tracking bracelet is come in 3 new colors! Shop the Anemone bead color now! The Hammerhead tracking bracelet is come in 3 new colors! Shop the Deep Sea bead color now! The hammerhead hysteria is here thanks to the Discovery Shark Week and Fahlo partnership. Track a real hammerhead shark with one of three new bracelet designs before they swim away with the tide. Follow the frenzy and celebrate Discovery Shark Week with Fahlo's newest collection of hammerhead tracking bracelets. Track a hammerhead today and keep an eye out, your shark might just make an appearance on TV."
          caption="The shark email with images hidden. The alt text conveys the intent and message of the images, rather than describing the images themselves."
          src="/images/fahlo-email-alt-text-2026-07-01.png"
        />
        <Figure
          alt="Fahlo email showing alt text: Don’t miss out! 🐆 Our Season 1 journeys are wrapping up, which means it’s your last chance to grab a tracking plush before they’re gone! Introducing the Cheetah Tracking Plush! Cuddle a soft companion while you track a real-life cheetah across the savanna. Start tracking a real wild cheetah today! Secure your spot in Season 1 of Wild Journeys before it closes. Every tracking experience directly funds wildlife conservation and protects endangered cheetah habitats. Shop now and gear up for new adventures through the wild grasslands of Namibia. A real wild cheetah is on the move right now. Will you follow her journey? Shop now!"
          caption="The cheetah email with images hidden. The alt text conveys the intent and message of the images, rather than describing the images themselves."
          src="/images/fahlo-email-alt-text-2026-09-27.png"
        />
      </div>
      <p>
        As you can see, writing good alt text is very situational.
      </p>
    </>),
  },
  {
    date: '2026-10-20',
    title: 'Some observations on component libraries',
    tags: ['design systems', 'components', 'component libraries', 'accessibility', 'user experience'],
    content: (
      <>
        <p>
          I've spent the last few years maintaining and expanding my company's design system
          component library. In my previous job, I made some accessibility fixes to their component
          library, and at the job before that, they didn't have one, though they were in the
          process of planning one out. Through all of this, I've learned some things and come to
          some conclusions about component libraries in general.
        </p>
        <SubHeading>
          1. Every website should have some sort of design system, and every website of more than
          trivial scale should have a component library.
        </SubHeading>
        <p>
          A sufficiently small site could get away with some shared CSS classes to make styling
          consistent. Anything bigger needs a set of shared components. Visual consistency across
          a website is like sound design in a movie and lettering in a comic book: when it's done
          well, people don't notice it, but when it's done poorly, it's glaring and makes for a bad
          user experience. A design system with a set of shared code considerably simplifies
          maintaining visual consistency and can help add a professional polish to the UI. It also
          helps to streamline site-wide design changes. Would you rather change the color scheme in
          one file and have it apply everywhere or go track down every style rule that sets a color?
        </p>
        <SubHeading>
          2. If you're just starting to create a component library, start small but high-impact.
        </SubHeading>
        <p>
          One button component that's shared across your site is still a benefit. It's not as
          useful to create an "entire" set of shared components before starting to use any of them.
          While you're making all those components, the first ones shouldn't be languishing,
          unused. Take a look at what elements are the most used throughout your site. Which ones
          have visual inconsistencies? Which ones cause the most friction for developers? Start
          with those, especially smaller building blocks like buttons, links, and inputs. Work your
          way to more complex and less-used widgets. As soon as a component is done, use it in a
          feature and get feedback on what works and where the rough edges are. It's a lot easier
          to work out any rough edges on the design or component API for a text input and
          incorporate those learnings into the plans for other form components than it is to have
          to overhaul your whole set of form components after the fact.
        </p>
        <SubHeading>
          3. If there is no existing nor anticipated use case for a proposed component, don't
          make it.
        </SubHeading>
        <p>
          An unused component is a waste of time (and therefore money) in terms of both creating it
          and maintaining it. Maintenance costs are non-zero, especially if the component uses any
          third-party code. When it comes time to upgrade React/Angular/Vue or your CSS
          preprocessor or your date library or Storybook, will that component need any changes? At
          a minimum, someone will need to take the time to answer that question.
        </p>
        <SubHeading>
          4. Be judicious in your use of third-party component libraries.
        </SubHeading>
        <p>
          Using something like <Link href="https://mui.com">MUI</Link> can really speed up your
          work, but it can also introduce a lot of problems. Unfortunately, my experience falls
          more into the latter. One thing to consider is how opinionated the library is about
          styling and how easy it is to customize the styles. Are you planning to just use a custom
          color scheme? Or do you need more customization? What does the library allow in terms of
          customization? There comes a point where it's more trouble to override built-in styling
          than to just create the component yourself. In this regard, I'd opt for a headless set of
          components over restyling pre-styled ones.
        </p>
        <p>
          Another thing to consider is the effort involved in upgrading the library package. Does
          the library reliably stick to semantic versioning? If you do a minor version upgrade, is
          it likely to break your code? In previous major versions, how much changed that would
          require changes in your code? Management doesn't like to hear that development of new
          features has stopped for a month in order to upgrade a dependency, and frankly, I don't
          enjoy it, either. I'm not saying that you shouldn't use a third-party library, but do
          your research to decide how much it will benefit you compared to the maintenance cost.
        </p>
        <SubHeading>
          5. Make your components flexible, but not too flexible.
        </SubHeading>
        <p>
          This one requires some collaboration with Design and Product, and it can be tricky to get
          right. Minimizing the options or variants for a component helps with UI and UX
          consistency and helps keep the component implementation simpler. On the other hand, it
          might also make things so rigid that it ties designers' hands when they're creating new
          features. As an example, when I worked on a global navigation component, we expected all
          the navigation items to be links, so the component accepted a string for the link text
          and an href. Later, there was a need to allow buttons, too, so we made the component
          polymorphic such that it could be either an <Code>&lt;a&gt;</Code> or
          a <Code>&lt;button&gt;</Code>. We thought we were being flexible, but this wasn't enough.
          There was a push to move to React Router links where possible, but our global navigation
          component (and several others) didn't support that. We ended up opening up the
          polymorphism to accept any component in order to allow passing in React Router links.
          This would allow anything to be put into the global navigation, at least from a technical
          perspective. The result is that making components more flexible moves the responsibility
          for maintaining consistency from the code to the design team. If you're going to err
          here, I'd err on the side of being more restrictive in code because it's a lot easier to
          dd new capabilities after the fact than to lock things down and add restrictions later.
        </p>
        <SubHeading>
          6. Build as much accessibility into the component library as you can.
        </SubHeading>
        <p>
          Make input labels part of the input components so that the library can handle associating
          them correctly. Manage keyboard focus when dialogs and modals open and close. Make sure
          that comboboxes and dropdowns have the right aria roles and attributes so that screen
          reader users know which option is highlighted. Build all of that in to the components
          so that the developers using your components don't have to think about it and so that
          the user experience stays as consistent for people with disabilities as it does for
          people without disabilities. Not every accessibility concern can be handled from inside
          the component library, but building your components with accessibility in mind (or
          fixing them after the fact if needed) gives you a good foundation to work from.
        </p>
        <p>
          In the end, a design system with a component library is a vital part of any website or
          web application, but it needs careful planning and maintenance to give you the most
          benefit.
        </p>
      </>
    ),
  },
  {
    date: '2026-10-12',
    title: 'Phone numbers and shifting focus',
    tags: ['accessibility', 'user experience'],
    content: (<>
      <p>
        When filling out forms online (buying stuff, paying bills, etc.), I frequently need to fill
        out my phone number. Usually, the phone number field is one input, but a significant
        minority of the time, it's three separate fields. A common, but not consistent, pattern I
        run across in these situations is for the form to automatically move the focus to the next
        field when I've finished the current field. This annoys me because it's unexpected and not
        consistent across websites.
      </p>
      <p>
        I felt vindicated when I was going through Deque's course on Form Labels, Instructions,
        and Validation and ran across a "bad example" of shifting focus based on user input in a
        text field that was exactly this case: a three-input phone number. This corresponds to WCAG
        criterion 3.2.2 On Input, which states, "Changing the setting of any user interface
        component does not automatically cause a change of context unless the user has been advised
        of the behavior before using the component." It just goes to show that accessibility really
        is for everyone.
      </p>
      <p>
        For more information, see <Link href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html">Understanding SC 3.2.1 On Focus</Link>
      </p>
    </>),
  },
  {
    date: '2026-10-11',
    title: 'Form submission results and accessibility',
    tags: ['accessibility', 'user experience'],
    content: (<>
      <p>
        I have been working my way through the web accessibility courses offered by Deque with the
        goal of getting the IAAP WAS certification. A lot of the content is stuff I already know,
        but there are a lot of details to learn and cases that I haven't considered, so I'm still
        learning a lot. One thing I thought was interesting in their course on forms is how to
        handle validation messaging when submitting the form triggers a page load, such as when
        using a form's POST method rather than AJAX. The guidance was to make the page title
        reflect the error or success state, such as prepending "Success! Your account has been
        created." or "There are 3 errors in the form." to the title. The idea is that the first
        thing a screen reader reads on page load is the page title, so this gives the user
        immediate feedback, and they don't have to go hunting through the page to find out what
        happened when they submitted the form.
      </p>
      <p>
        One of the things I like about these courses is the way that they explain the experience
        from the point of view of the user in a way that builds empathy and shows why the
        accessibility functionality is necessary. I have used screen readers for testing my work,
        but I don't use one on a regular basis for my normal computer use. I suppose that this is
        also a lesson that actually using assistive technology to do my normal tasks would help me
        build more empathy and understand better where the main pain points are.
      </p>
    </>),
  },
  {
    date: '2026-10-10',
    title: 'Gotta keep MVP in mind',
    tags: ['mvp', 'portfolio', 'react-router', 'ssr'],
    content: (<>
      <p>
        They say that if something is hard, you need to do it more often. That applies a little too
        well to setting up new code projects, in my case. Very rarely in my career have I set up a
        new repo from scratch. Sure, I've done it, but it just doesn't come up much.
      </p>
      <p>
        For this website, I wanted to use server-side rendering with React. I've used PHP,
        Handlebars, EJS, and good, old-fashioned SHTML for server-side rendering, but despite using
        React for years, I haven't used it on the server. I've come to appreciate server-side
        rendering after years of only client-side because it involves actually sending content in
        the HTML response. At any rate, aside from React, I needed to choose a server library.
        After considering Vite, I picked Next.js. It didn't go well. I got things running ok, but
        in order to start the server, you have to run <Code>npm start</Code> from the command line,
        but... the way my web host handles Node.JS instances is to give it a .js file to start
        from. I tried a few things, none of which worked. So, back to Vite, which I should have
        just gone with in the first place.
      </p>
      <p>
        I got Vite + Express set up for SSR relatively easily-ish... and then I tried to add React
        Router. I'm picturing a site that renders on the server when you initially load the page,
        then has nice, smooth client-side routing while navigating around the site. Easy, right?
        Well, it turns out that Vite wants to handle the SSR its own way, but React Router has a
        completely different idea (at least they both work with Express).
      </p>
      <p>
        But what's my goal here? I still don't have any content and barely any styling. This wasn't
        helping. Every time I run into another rabbit hole of trouble, I keep coming back to this
        question: What is my MVP? It doesn't matter whether I have the best architecture ever if I
        never get around to actually putting content up. So here it is, my MVP website with routing
        via a switch statement. I've only got 3 pages; I don't need anything more complicated yet.
      </p>
    </>),
  },
  {
    date: '2026-10-08',
    title: 'Hello World?',
    tags: ['job search', 'portfolio', 'react'],
    content: (<>
      <p>
        I have worked in web application development for fifteen years, but I don't have anything
        publicly visible to show for it because all my work in the last decade has been B2B SaaS
        applications. All my customer-facing production code is paywalled. This makes things a bit
        rough now that I'm looking for a job.
      </p>
      <p>
        As a result, I'm finally getting around to making a portfolio website. Aside from this site
        itself, I'm working on sprucing up some personal projects to post them here.
      </p>
    </>),
  }
];

export default blogPosts;
