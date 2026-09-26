# AGENTS.md

## Enmero Website Agent Instructions

This repository contains the Enmero website.

You are working on a professional technology consultancy website. Your job is to improve and maintain the website while preserving Enmero's actual identity, information, credibility, and design standards.

Read `DESIGN.md` before making any significant visual or UX decision.

`DESIGN.md` defines the visual direction.

This file defines how you should work.

---

# 1. Core Principle

Build a website that feels intentionally designed by a strong professional technology design and engineering team.

Do not optimize for:

* More visual effects
* More components
* More animations
* More gradients
* More content
* More dependencies
* More abstraction
* More "wow" effects

Optimize for:

* Clarity
* Trust
* Quality
* Restraint
* Performance
* Accessibility
* Maintainability
* Strong visual hierarchy
* Good typography
* Real content
* Real functionality

## When in doubt, do less.

Do not add a visual effect, animation, icon, gradient, component, dependency, abstraction, section, or piece of copy merely because it is possible.

Every addition should have a reason.

---

# 2. No AI Slop

This is one of the highest-priority rules in the project.

The website must not look AI-generated.

Do not automatically reach for common AI-generated design patterns such as:

* Purple and blue gradients
* Glowing orbs
* Floating glassmorphism cards
* Excessive rounded cards
* Random 3D objects
* Generic futuristic illustrations
* Neural-network graphics
* Random particles
* Excessive blur
* Excessive shadows
* Gradient text everywhere
* Giant meaningless headings
* Generic SaaS layouts
* Repeated card grids
* Fake dashboards
* Decorative code blocks
* Random terminal windows
* Excessive pills
* Excessive badges
* Animated backgrounds with no purpose
* Cursor effects with no purpose
* Generic "future of technology" visual language

Do not use a design pattern simply because it is common in AI-generated websites.

If a visual treatment does not improve communication, remove it.

---

# 3. No Emojis

Do not use emojis anywhere in the project.

This includes:

* Website copy
* Buttons
* Navigation
* Headings
* Metadata
* Error messages
* Empty states
* Tooltips
* UI
* Accessibility labels
* Code comments
* Generated content
* Placeholder content
* Documentation written for the website

Do not replace icons with emoji characters.

For example, never use:

```text
→
✓
★
🚀
💡
🔥
```

as decorative substitutes for UI icons.

Use an actual icon where an icon is appropriate.

---

# 4. No Em Dashes

Do not use the em dash character:

```text
—
```

Anywhere in website content or generated copy.

Use normal punctuation instead.

Prefer:

```text
Enmero builds reliable software.
```

instead of writing sentences that rely on an em dash.

This rule applies to:

* Website copy
* Headings
* Metadata
* UI text
* Documentation
* Generated content
* Comments

---

# 5. No Invented Information

Never invent information about Enmero.

This includes:

* Clients
* Customers
* Partners
* Awards
* Certifications
* Statistics
* Employee counts
* Revenue
* Project results
* Performance metrics
* Testimonials
* Case studies
* Products
* Services
* Technologies
* Research
* Publications
* Offices
* Locations
* Years of experience
* Industry claims
* Customer logos
* Quotes
* Business achievements

If the information is not known from the existing project content or a reliable source explicitly provided for the project, do not create it.

Do not invent content simply to make a section look better.

Do not create fake statistics because a design contains space for statistics.

Do not create fake testimonials because a testimonial component exists.

Do not create fake logos because a logo strip looks visually appealing.

---

# 6. No Fake Placeholders

Do not use fake production-looking placeholder content.

Never write:

```text
Lorem ipsum
Company Name
Client Name
250+ clients
10+ years
99.9% uptime
Trusted by thousands
Your project here
Project title
Coming soon
```

unless that exact information is actually part of the intended content.

If there is insufficient real content for a section, simplify the section or remove it.

Do not fabricate content to satisfy a visual layout.

---

# 7. Content Rewriting

Existing Enmero content may be professionally rewritten when appropriate.

The rule is:

> Preserve factual meaning while improving clarity, grammar, structure, and presentation.

You may:

* Improve grammar
* Remove awkward wording
* Shorten unnecessarily long copy
* Improve readability
* Improve headings
* Improve information hierarchy
* Make copy more professional
* Remove repetitive wording

You may not:

* Add unsupported claims
* Change the meaning
* Invent capabilities
* Exaggerate results
* Turn a factual statement into a marketing claim without evidence
* Add statistics
* Add clients or partnerships

When uncertain whether a rewrite changes meaning, preserve the original wording.

---

# 8. Technology Stack

The website uses:

* React 18
* Vite 5
* JavaScript and JSX
* CSS Modules

This is a client-rendered single page application. It is not Next.js. There is no server rendering, no `app/` directory, no `next.config`, no `middleware.ts`, and no Server Components.

Do not migrate the project to Next.js or to any other framework.

## Actual project structure

```text
api/                 Vercel serverless functions
assets/              images, video, logos
public/              files served at the site root
src/
  components/        reusable UI, one CSS Module per component
  data/              static content and pricing tables
  hooks/             reusable React hooks
  pages/             one component per route
  App.jsx            root component, owns routing state
  main.jsx           React entry point
  index.css          global styles and design tokens only
  routes.js          route table and route matching
index.html           document shell, meta tags, font loading
vite.config.js       Vite configuration
```

## Routing

There is no routing library. Routing is a hand-rolled hash router:

* `src/routes.js` exports the route table and `getStaticPage(hash)`.
* `src/App.jsx` reads `window.location.hash` into state and listens for `hashchange`.
* Links are plain anchors such as `href="#/contact"`.
* Query strings use `#/blog/post?slug=...` and arrive as `URLSearchParams`.

To add a page, add it to the route table. Do not install a router library for this.

## Serverless functions

`api/` holds Vercel serverless functions using the Node request and response signature. This is the only server-side code in the project.

Note that the `api/` directory does not exist during `vite dev`, so any function must degrade gracefully when its endpoint returns 404.

## Styling

Styling uses CSS Modules, not Tailwind and not a CSS-in-JS library.

* One `Component.module.css` next to each component.
* Class names are accessed through the imported `styles` object.
* `src/index.css` holds global tokens, resets, and the shared `.container` class.
* Do not add global class names for component-specific styling.

## Adding components

Place a component in `src/components/` and a matching page in `src/pages/`. There is no `src/app/` directory and no route segment convention.

---

# 9. Dependencies

Keep dependencies intentionally small.

Before adding an npm package, ask:

1. Do we actually need this functionality?
2. Can the existing stack accomplish it cleanly?
3. Can a small amount of native JavaScript or CSS solve it?
4. Does the package provide enough value to justify adding a dependency?
5. Is the package maintained and appropriate for a production React application?

Do not add a package simply because it makes a small task easier.

For example, do not install a library just to:

* Create one simple animation
* Render one icon
* Add a basic utility
* Implement a simple hover state
* Solve something that CSS already handles well

If a package is genuinely useful, use it.

If it is not necessary, do not install it.

---

# 10. Icons

Icons should look intentional and consistent.

Use two approaches.

## UI Icons

For generic interface icons such as:

* Menu
* Search
* Arrow
* Chevron
* External link
* Close
* Mail
* Phone
* Navigation

use a reputable icon library when appropriate.

Prefer an established icon system rather than manually drawing random SVG icons.

## Brand Icons

When representing a real company, technology, platform, or product, use the correct official or recognized brand icon.

Examples:

* GitHub
* Microsoft
* AWS
* Google
* React
* Next.js
* Docker
* etc.

Do not manually recreate brand logos.

Do not use text approximations.

Do not use emoji characters.

Do not use an unrelated icon because it is convenient.

If a valid icon or official asset is available online, you may use it.

The availability of an online asset does not need to block implementation.

---

# 11. Internet Research

You may browse the internet when it materially improves the implementation.

Use the web to:

* Verify official icons
* Find official brand assets
* Read current package documentation
* Verify API usage
* Check current Vite conventions
* Check current React conventions
* Verify technology information
* Inspect design references
* Confirm information about third-party technologies

Prefer primary sources.

For technical questions, prefer:

* Official documentation
* Official GitHub repositories
* Official brand resources
* Official product websites

Do not rely on random tutorials when official documentation is available.

Do not copy code blindly from websites.

Understand what the code does before using it.

---

# 12. Reference Websites

The following websites are visual references only:

* NVIDIA
* SanDisk
* Oracle

They are not templates.

Do not copy:

* Their code
* Their layouts
* Their branding
* Their copy
* Their assets
* Their navigation
* Their exact animations
* Their visual identity

Study their design principles.

The goal is to understand why their websites communicate scale, credibility, technology, and clarity.

Then apply those principles to Enmero.

Read `DESIGN.md` for the detailed visual direction.

---

# 13. Stardom

Stardom is Enmero's mascot.

Stardom is a turtle wearing an Enmero T-shirt.

Stardom is a brand companion, not the primary subject of the website.

Use existing Stardom artwork as the source of truth.

Do not invent a new Stardom design.

Do not redraw Stardom unless explicitly instructed.

Do not place Stardom everywhere.

Good uses include:

* Small illustrations
* Section accents
* Footer details
* Empty states where appropriate
* 404 page
* Contact section
* Small editorial moments
* Hover interactions
* Contextual illustrations
* Occasional playful details

Use Stardom when it strengthens the experience.

Do not add Stardom simply to satisfy a quota.

The mascot should be discovered throughout the site rather than constantly displayed.

---

# 14. Component Architecture

Build reusable components when there is a genuine repeated pattern.

Do not over-abstract.

Bad:

```text
Hero.jsx
HeroWrapper.jsx
HeroContainer.jsx
HeroContent.jsx
HeroTitle.jsx
HeroDescription.jsx
HeroButton.jsx
```

when those components have no meaningful reuse or independent behavior.

Prefer a clear component structure that reflects actual design patterns.

Good candidates for reusable components may include:

* Header
* Footer
* Navigation
* Button
* SectionHeading
* ProjectCard
* CaseStudy
* MediaTextSection
* CTA
* LogoGroup
* Breadcrumbs

But only create them when reuse or clarity justifies them.

Avoid creating components solely to make a directory look organized.

---

# 15. CSS Modules

Use CSS Modules for component styling. Tailwind is not part of this project.

Keep the design system consistent through:

* Shared spacing
* Typography scales
* Container widths
* Border styles
* Radius rules
* Colour tokens
* Breakpoints
* Motion conventions

Put the reusable values in `src/index.css` as custom properties and consume them with `var(--token)`. Do not repeat raw hex values or spacing steps across modules.

Avoid arbitrary one-off values when an existing design token can be used.

Do not turn every element into a long unreadable class list.

If a repeated style genuinely deserves abstraction, create a component or a shared class rather than a utility framework.

---

# 16. Colour

The primary Enmero colour is:

```text
#0B0D1A
```

Treat it as a signature brand colour.

Do not introduce random colours.

Do not turn the site into a gradient-heavy visual system.

Use light backgrounds and dark backgrounds deliberately.

Refer to `DESIGN.md` for the complete colour philosophy.

---

# 17. Typography

Typography is one of the main tools for creating the premium feel.

Prioritize:

* Hierarchy
* Spacing
* Readability
* Consistency
* Responsive sizing

Do not use enormous headings simply because large text looks impressive.

Headlines should communicate something.

Do not use decorative or futuristic fonts unless explicitly required by the brand.

---

# 18. Motion

Use premium motion.

Do not use motion everywhere.

Animation should communicate:

* Hierarchy
* Continuity
* Interaction
* State changes
* Spatial relationships

Good examples:

* Subtle reveal
* Image transition
* Navigation transition
* Hover state
* Small movement on interaction
* Controlled page transition

Bad examples:

* Constant floating
* Excessive parallax
* Bouncing content
* Animated gradients
* Random particles
* Cursor trails
* Continuous background animation
* Animating every card independently

Motion should support the design.

It should never become the design.

Respect `prefers-reduced-motion`.

---

# 19. Responsive Design

Every meaningful UI change should consider:

* Desktop
* Laptop
* Tablet
* Mobile

Do not assume that a desktop composition can simply be scaled down.

Reconsider:

* Content order
* Typography
* Navigation
* Image cropping
* Grid structure
* Spacing
* Interaction patterns

Mobile should feel intentionally designed.

---

# 20. Accessibility

Accessibility is required.

Use:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible labels
* Useful alt text
* Sufficient contrast
* Reduced motion support
* Correct button/link semantics

Do not use a clickable `div` when a button or link is appropriate.

Do not sacrifice accessibility for aesthetics.

---

# 21. Performance

Avoid unnecessary performance costs.

Prefer:

* Vite's asset hashing and build-time minification
* Appropriate image sizes
* `loading="lazy"` on below-the-fold images
* Minimal JavaScript
* Minimal dependencies
* Efficient animations

Do not load large libraries for tiny interactions.

Do not load huge images when smaller assets are sufficient.

Do not add heavy visual effects without considering their performance impact.

The only server-side code is the Vercel functions in `api/`. There is no server rendering, so there is no server component equivalent to prefer over client components.

---

# 22. SEO

Maintain proper SEO fundamentals.

Because there is no server rendering, metadata lives in `index.html` for the site shell and is updated per page at runtime. Update `document.title` and the description meta tag from the page component when a route needs its own metadata.

Important pages should have:

* Appropriate title
* Appropriate description
* Canonical URL where needed
* Open Graph metadata where appropriate
* Correct heading hierarchy

Do not create keyword-stuffed copy.

SEO should not damage the quality of the writing.

---

# 23. Browser Testing

Visual browser testing is required when it is useful for the task.

Do not launch a browser for every tiny change.

Browser testing is particularly useful after:

* Major layout changes
* New pages
* Navigation changes
* Responsive changes
* Animation changes
* Hero redesigns
* Complex interactive components
* Significant visual refactors

When testing a significant UI change, inspect at least:

* Desktop
* Mobile

Look for:

* Overflow
* Broken layouts
* Incorrect spacing
* Typography problems
* Animation issues
* Image problems
* Navigation problems
* Accessibility issues
* Unexpected scrollbars
* Mobile layout failures

Do not declare a major visual task complete solely because the build succeeds.

---

# 24. Verification

Do not run every possible check after every tiny change.

Use judgment.

For meaningful code changes, use appropriate checks such as:

```bash
npm run build
```

Run the checks that are relevant to the change.

For significant changes, the final implementation should build successfully and should not introduce obvious build errors.

There is no ESLint configuration and no TypeScript in this project, so `npm run lint` and `npx tsc --noEmit` are not available. Do not recommend them.

If a check fails because of an existing unrelated problem, identify it clearly rather than pretending the project is clean.

---

# 25. Preserve Existing Functionality

When modifying an existing page, preserve working functionality unless the task specifically requires changing it.

Do not accidentally remove:

* Routes
* Navigation
* Forms
* Links
* Metadata
* Images
* Content
* Interactive elements
* Responsive behavior

Before removing something, understand why it exists.

---

# 26. File and Asset Management

Keep the project organized.

Use sensible locations for:

* Components
* Pages
* Styles
* Images
* Icons
* Fonts
* Data
* Utilities

Do not duplicate assets unnecessarily.

Do not create multiple copies of the same image simply because different components use it.

Use the correct asset source.

---

# 27. Existing Assets

Before creating a new visual asset, check whether an appropriate Enmero asset already exists.

Prefer:

1. Existing Enmero assets
2. Official third-party assets
3. Properly licensed assets
4. Carefully created new assets when necessary

Do not replace existing Enmero artwork with generic generated imagery without a reason.

Stardom artwork is especially important.

---

# 28. Do Not Overwrite Good Work

When modifying the website:

* Inspect existing implementation first.
* Understand what already works.
* Change only what needs changing.
* Preserve good components.
* Preserve useful utilities.
* Avoid unnecessary rewrites.

Do not rewrite an entire page simply because a small section needs improvement.

Do not replace a working architecture with a new architecture without a clear reason.

---

# 29. Before Starting a Task

Before making changes:

1. Read the relevant files.
2. Understand the current implementation.
3. Check existing components.
4. Check existing assets.
5. Check existing styles.
6. Check whether the required functionality already exists.
7. Determine the smallest clean change that solves the task.

Do not start coding immediately after reading a one-line request.

Understand the surrounding system first.

---

# 30. During Implementation

Work incrementally.

Prefer:

```text
Inspect
→ Plan
→ Implement
→ Verify
→ Refine
```

rather than:

```text
Guess
→ Rewrite everything
→ Add 12 dependencies
→ Hope it looks good
```

If a task is large, divide it into logical stages.

Keep the implementation understandable.

---

# 31. Visual Decision Making

When deciding between two valid implementations, prefer the one that is:

1. Clearer
2. Simpler
3. More maintainable
4. More consistent with `DESIGN.md`
5. More performant
6. More accessible

Do not choose something merely because it looks more complicated.

Complexity is not quality.

---

# 32. No Unnecessary Redesign

If the task is technical, do not redesign unrelated parts of the website.

If the task is visual, do not rewrite unrelated functionality.

Keep the scope controlled.

A request to fix one section does not mean the entire website needs a new design system.

---

# 33. Error Handling

Do not hide errors.

If something fails:

* Understand the cause.
* Fix it when it is within scope.
* Report meaningful blockers.
* Do not silently remove functionality to make the build pass.

Never fake a successful result.

---

# 34. Git

Do not automatically commit or push changes.

The developer decides when changes are committed.

Before committing, the developer should be able to inspect the work.

If asked to commit, create a meaningful commit message that describes the actual change.

Do not create meaningless commits such as:

```text
update
changes
fix
website
done
```

---

# 35. Completion Standard

A task is not complete simply because code was written.

A meaningful implementation should satisfy:

* Correct functionality
* Correct content
* No invented information
* No emojis
* No em dashes
* No unnecessary dependencies
* Consistent icons
* Consistent typography
* Consistent spacing
* Responsive behavior
* Accessibility considerations
* Appropriate performance
* Visual consistency with `DESIGN.md`
* Appropriate verification

For significant visual work, inspect the result in a browser.

For significant code changes, run appropriate validation.

---

# 36. Final Quality Check

Before declaring a significant task complete, ask:

### Brand

Does this feel like Enmero?

### Trust

Does this make the company feel more credible?

### Design

Does this follow `DESIGN.md`?

### Restraint

Did I add anything that did not need to exist?

### Content

Did I invent anything?

### Icons

Are the icons correct and legitimate?

### Motion

Is the animation necessary?

### Performance

Did I introduce unnecessary JavaScript or dependencies?

### Responsive

Does it work on mobile as well as desktop?

### Accessibility

Can people actually use it?

### Maintainability

Will another developer understand this code?

### Slop test

Does any part of this look like something an AI website generator would have produced?

If yes, reconsider it.

---

# 37. The Most Important Rules

If the entire file had to be reduced to a few rules, they would be:

1. **Do not invent Enmero information.**
2. **Do not use emojis.**
3. **Do not use em dashes.**
4. **Do not make the site look AI-generated.**
5. **Use real, appropriate icons.**
6. **Use Stardom sparingly and intentionally.**
7. **Do not add dependencies unless they are actually needed.**
8. **Do not over-abstract the code.**
9. **Use motion with restraint.**
10. **When in doubt, do less.**
11. **Read `DESIGN.md` before making major visual decisions.**
12. **Make the final result feel trustworthy, technically capable, and professionally designed.**

The goal is not to make the most complicated website.

The goal is to make an Enmero website that feels like someone cared about every decision.

