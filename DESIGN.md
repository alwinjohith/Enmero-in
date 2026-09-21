# Enmero Website Design Guide

## Purpose

This document defines the design constraints for the current Enmero website transformation.

The existing website was originally created for a cybersecurity infrastructure company. We are transforming the existing React website into the website for **Enmero, a technology consultancy**.

### Current phase

**Content and identity transformation only.**

The existing visual design is intentionally being preserved for now.

Do not redesign the visual system during this phase.

The immediate goal is to make the existing website communicate Enmero clearly and professionally while keeping its current aesthetic, layout language, animation style, component architecture, and colour system largely intact.

A future design phase may change the visual direction. That is a separate task.

---

# 1. Core Principle

**Do not redesign the website. Transform what the website is saying.**

The existing website already has a usable visual language.

Preserve that language while replacing the old cybersecurity/product identity with Enmero's consultancy identity.

Think:

> Same visual foundation, completely different company and message.

Do not introduce a new design system just because the content is changing.

---

# 2. What Must Stay

Unless a specific change is required to support the new content, preserve:

* React
* Vite
* JavaScript/JSX
* CSS Modules
* existing component structure
* existing responsive breakpoints
* existing spacing system
* existing typography system
* existing colour palette
* existing border treatment
* existing button styling
* existing general layout patterns
* existing animation techniques
* existing transition behaviour
* existing navigation structure
* existing footer structure
* existing working form behaviour
* existing useful assets

Do not migrate React to Next.js.

Do not introduce TypeScript.

Do not replace Vite.

Do not replace CSS Modules.

Do not install a new UI framework.

Do not rebuild the website from scratch.

---

# 3. Current Visual Identity

For this phase, the existing visual identity is the source of truth.

The current aesthetic is:

* clean
* light
* editorial
* spacious
* modern
* minimal
* typography-led
* image-led
* technically sophisticated without being visually aggressive

The current site primarily uses:

* white
* off-white
* black/dark text
* subtle neutral borders
* restrained accent colours
* large typography
* generous whitespace
* simple grids
* occasional visual effects

**Keep this aesthetic.**

Do not switch the website to a new cream/white system.

Do not introduce a dark theme.

Do not make `#0B0D1A` the primary page background yet.

Do not introduce a new colour palette.

That can happen later in a dedicated visual redesign phase.

---

# 4. Colour

For the current phase, preserve the existing colour system.

Existing primary colours include:

* `#FFFFFF`
* `#FAF9F6`
* `#111111`
* `#5A5A58`
* `#8A8986`
* `#E6E5E2`
* `#0D0D0D`

The current neon green, blue, brown, and other accent colours should only remain where they are already part of an existing component and do not conflict with the new Enmero content.

Do not introduce new brand colours unnecessarily.

### Future Enmero colour

Enmero's signature colour is:

`#0B0D1A`

However:

**Do not redesign the current colour theme around it yet.**

It may be introduced in a later visual design phase.

---

# 5. Typography

Preserve the existing typography.

### Primary font

**Plus Jakarta Sans**

It is already used throughout the website and should remain the primary typeface.

Use it for:

* headings
* body text
* navigation
* buttons
* labels
* UI
* supporting text

Do not replace it with another font during this phase.

### Existing secondary fonts

The project currently contains:

* Instrument Serif
* Outfit

Do not introduce additional fonts.

Do not redesign the typography system.

If Instrument Serif or Outfit are currently unused, leave them alone unless there is a specific content-related reason to change their usage.

---

# 6. Content Transformation

This is the main purpose of the current task.

Replace the old cybersecurity company/product content with accurate Enmero consultancy content.

The website should no longer communicate that Enmero is:

* a cybersecurity product
* an autonomous systems infrastructure company
* a decentralized identity platform
* a zero-trust product
* a cryptographic infrastructure company
* a security console/dashboard product
* a developer access platform

Remove old terminology associated with the cybersecurity product.

Examples of content that must eventually disappear:

* AIS
* ADS
* AZT
* ATL
* AFW
* ADN
* ARM
* AGW
* autonomous systems
* decentralized identity
* cryptographic identity
* trust ledger
* capability tokens
* zero-trust product language
* firewall/product-security terminology
* cybersecurity-specific product claims

---

# 7. Enmero Positioning

Enmero should now be presented as a **technology consultancy**.

The content should communicate that Enmero works with businesses to understand problems, design solutions, build technology, and deliver useful digital products.

Do not invent a highly specific positioning statement until the actual Enmero information is available.

Use factual information from the existing Enmero website and approved Enmero source material.

The website should communicate:

* technology expertise
* software development capability
* web development capability
* consulting
* thoughtful problem solving
* design quality
* engineering quality
* practical delivery

Only include services that are actually supported by Enmero's real information.

---

# 8. Homepage Content Structure

The existing homepage structure can remain.

The important change is what each section communicates.

### Hero

Transform the cybersecurity/product hero into a clear Enmero consultancy introduction.

The hero should answer:

**What is Enmero?**

**What does Enmero help people/businesses with?**

Use concise, confident language.

Keep the existing hero layout and visual treatment unless a content change genuinely requires adjustment.

---

### Text Highlight

Keep the existing scroll-driven text treatment if it works with the new content.

Replace the cybersecurity statement with an Enmero brand/consultancy statement.

The statement should communicate Enmero's approach to technology and problem solving.

Do not create an entirely new animation.

---

### Services

The existing service exploration pattern can remain.

Replace the cybersecurity services with actual Enmero consultancy services.

Possible categories may include things such as:

* web development
* software development
* technology consulting
* product development

But only use categories confirmed by real Enmero information.

Do not assume these are official services without verification.

The existing accordion/service-preview interaction may remain.

---

### Process

The existing three-step process structure can remain.

Transform it from the cybersecurity workflow into Enmero's consulting/delivery process.

A potential conceptual structure is:

1. Understand
2. Design and Build
3. Deliver and Improve

However, use actual Enmero language if available.

Do not invent claims about methodology.

Keep the existing alternating-row visual structure.

---

### Value Propositions

The existing three-column layout can remain.

Replace cybersecurity infrastructure benefits with real Enmero value propositions.

Focus on what Enmero actually offers.

Do not invent statistics or measurable outcomes.

---

### Testimonials

The existing testimonial carousel component can remain.

However:

**The existing fictional cybersecurity testimonials must not remain.**

Do not replace them with invented Enmero testimonials.

If real Enmero testimonials are available, use them.

If real testimonials are not available:

* remove the testimonial content
* simplify the section
* or repurpose the space for factual company information

Never fabricate a client quote.

---

### FAQ

The existing FAQ interaction can remain.

Replace cybersecurity questions with real Enmero questions if sufficient factual information exists.

If there is not enough real information for useful FAQs, remove the section rather than inventing questions and answers that imply unsupported company policies or capabilities.

---

### CTA

Transform the cybersecurity waitlist CTA into an Enmero consultancy/contact CTA.

The CTA should encourage a potential client to:

* contact Enmero
* discuss a project
* discuss a business/technology problem
* request a consultation

Only use language supported by the actual Enmero business.

The existing form implementation may be preserved if it is appropriate.

---

### Footer

Keep the existing footer structure.

Replace the cybersecurity disclaimer with accurate Enmero company information.

Keep only links that actually exist.

Do not leave links pointing to nonexistent pages simply because the old navigation had them.

---

# 9. Navigation

The current navigation contains several links to content that does not actually exist.

Do not invent those pages.

Before changing navigation, determine which sections/pages are genuinely supported by Enmero's current content.

The navigation should eventually represent the actual Enmero information architecture.

During this phase:

* preserve the existing navigation component
* change its content
* remove clearly irrelevant cybersecurity/product links
* avoid creating fake destinations
* avoid adding pages merely to fill navigation

---

# 10. Cybersecurity Dashboard

The existing `DashboardSetup.jsx` is a very large cybersecurity-specific component.

It should **not be automatically rewritten into an Enmero dashboard**.

Do not invent an Enmero product or dashboard just because the old site contains one.

Unless there is a real Enmero use for this component, it should be considered obsolete content.

Before deleting it, verify whether anything else depends on it.

Do not spend significant effort refactoring the 1475-line component during this content transformation.

---

# 11. Existing Assets

Use existing assets where they are still appropriate.

Important findings from the audit:

* `assets/logo/enmero-logo.png` exists
* `assets/logo/enmero-white.png` exists
* `assets/logo/favicon.png` exists
* `lockersea_logo.png` is an old brand asset
* `herosection.mp4` is existing media
* several other images exist
* Stardom artwork is not currently present in this project

Replace clearly obsolete Lockersea branding with the proper Enmero assets.

Do not redesign or recolour existing assets unnecessarily.

Do not create fake Enmero photography.

Do not invent project imagery.

If an asset is clearly cybersecurity-specific and has no legitimate Enmero purpose, remove it from the user-facing experience rather than forcing it into the new design.

---

# 12. Stardom

Stardom is Enmero's turtle mascot wearing an Enmero T-shirt.

The current audited project contains no Stardom artwork.

Therefore:

**Do not invent Stardom artwork.**

If official Stardom assets are provided later, they may be introduced deliberately.

Do not create a replacement mascot.

Do not use random turtle illustrations.

---

# 13. Animation

Preserve the existing animation language for now.

Existing techniques include:

* scroll-driven text highlighting
* subtle floating animations
* typewriter effects
* accordion transitions
* wave animations
* image/video movement
* chat-panel transitions
* subtle texture effects

Do not remove animations simply because the content is changing.

However, remove animations that only exist to support the old cybersecurity/product story.

Do not add a new animation system.

Do not add unnecessary animation.

---

# 14. Cards and Components

Do not redesign the card system during this phase.

Existing cards and component patterns may remain if they still support the new content.

The following patterns are potentially reusable:

* two-column hero
* service accordion
* alternating process rows
* three-column value propositions
* testimonial carousel
* FAQ accordion
* CTA form
* navigation
* footer

The visual treatment of these components should remain substantially unchanged for now.

Only change:

* content
* labels
* images where necessary
* links
* brand identity
* cybersecurity-specific behaviour

---

# 15. No Fake Content

This rule is absolute.

Never invent:

* clients
* customers
* testimonials
* statistics
* awards
* certifications
* case studies
* project outcomes
* revenue
* employee counts
* offices
* partnerships
* technologies
* services
* industries
* quotes
* performance metrics

If information is unavailable, remove or simplify the section.

Do not fill empty sections with generic consultancy language presented as fact.

---

# 16. Writing Style

Enmero's content should feel:

* clear
* confident
* professional
* concise
* human
* technically knowledgeable
* straightforward

Avoid:

* exaggerated marketing language
* generic startup language
* buzzword stacking
* cybersecurity terminology
* vague claims
* "revolutionary" language
* unnecessary jargon
* AI-generated sounding copy

Do not make every headline enormous.

Do not make every sentence sound like a pitch deck.

---

# 17. What NOT to Do in This Phase

Do NOT:

* redesign the entire website
* change the colour theme
* introduce the dark `#0B0D1A` theme
* change fonts
* migrate to Next.js
* introduce TypeScript
* replace Vite
* replace CSS Modules
* replace the existing component architecture
* install a new UI framework
* rewrite all animations
* redesign the navigation visually
* rebuild every component
* introduce a new design system
* copy SanDisk's website
* copy NVIDIA's website
* copy Oracle's website
* introduce a generic "technology startup" aesthetic

This phase is about **content transformation, not visual transformation.**

---

# 18. Implementation Rule

Before modifying a component:

1. Understand what the existing component does.
2. Identify which parts are cybersecurity-specific.
3. Preserve the visual structure.
4. Replace only the content/behaviour that needs to change.
5. Keep existing styles where possible.
6. Remove obsolete functionality only when it is clearly tied to the old cybersecurity product.
7. Verify that nothing else depends on the changed component.

Prefer the smallest change that successfully transforms the component into an Enmero component.

---

# 19. Current Goal

At the end of this phase, someone should be able to visit the website and understand:

**This is Enmero.**

They should no longer see evidence that the website is for a cybersecurity infrastructure product.

The website should communicate:

**Enmero is a technology consultancy that helps businesses solve problems and build useful digital technology.**

The visual system should still feel recognizably like the existing website.

---

# 20. Future Design Phase

A separate phase may later explore:

* Enmero's `#0B0D1A` signature colour
* cream/white editorial design
* typography refinement
* new photography direction
* Stardom integration
* new navigation design
* homepage composition
* new visual hierarchy
* refined motion
* stronger Enmero brand identity

Do not perform that work now.

First make the existing website **correctly represent Enmero**.

Then redesign it.

---

# Final Principle

For this phase:

**Preserve the design. Replace the identity. Replace the content. Remove the cybersecurity product. Do not invent what Enmero does.**

The existing website is the visual foundation.

Enmero's real information is the source of truth.

When uncertain, make the smaller change.

