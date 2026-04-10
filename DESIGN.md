# Maison B-Sun - Revised DESIGN.md

This document defines the target visual and UX direction for the Maison B-Sun website.
It is based on the uploaded brochure PDF and adapted for a modern, high-conversion marketing website.

Use this file as the source of truth for future UI work.
The brochure is the visual reference. The website is the product.
That means the site should preserve the brochure's character while improving scanability, contact conversion, accessibility, and maintainability.

---

## 1. Design Goal

Maison B-Sun should feel like a sunny Mediterranean holiday brochure translated into a clean, memorable website.

The website is not a booking platform dashboard and not a beige editorial portfolio.
It should quickly do four things:

1. Create immediate emotional appeal through photography and distinctive typography.
2. Explain the essentials fast: what it is, where it is, who it is for, and why it is attractive.
3. Build trust through clear facts, calm structure, and polished presentation.
4. Make contacting the owners feel easy and obvious.

Success criteria:

- Within 5 seconds, a visitor understands: holiday house, south of France, sunny, private pool, family/friends, direct contact.
- Within 15 seconds, a visitor can find capacity, rooms, location basics, and contact path.
- The site feels distinctive and brochure-led, not like a generic rental template.
- The page remains fast, accessible, and easy to maintain.

---

## 2. What Must Be Preserved From the Brochure

These are the non-negotiable visual cues from the brochure:

### 2.1 Color character

The brochure identity comes from:

- clean white / very light neutral backgrounds
- strong cobalt-blue typography
- sunflower-yellow accents
- bright Mediterranean photography

Blue and yellow create the identity.
The site must not drift into terracotta-led, beige-luxury, or dark editorial styling.

### 2.2 Typography character

The brochure does **not** use a refined serif-led luxury look.
Its personality comes from a contrast between:

- a playful hand-drawn / marker-like display treatment for key titles
- a cleaner supporting sans-serif for body copy, labels, and practical information

Important:
The hero wordmark/title should feel visually close to the brochure cover.
It should look hand-drawn, friendly, and memorable - not elegant, literary, or high-fashion.

### 2.3 Layout character

The brochure repeatedly uses:

- text blocks on the left, imagery on the right
- large white space fields
- rounded image frames
- occasional playful organic color shapes
- simple page compositions with a strong focal image

This asymmetrical brochure rhythm is more important than copying every brochure page literally.

### 2.4 Contact moment

The brochure ends with a strong contact page and a bold yellow band.
The website should also build toward a clear, high-visibility contact section rather than treating contact as an afterthought.

---

## 3. Translating Brochure Into Web

A brochure and a website are not used the same way.
The website should borrow the brochure's mood, but improve usability.

### 3.1 What to keep from print

Keep:

- the blue/yellow/white palette
- the hand-made title personality
- large rounded images
- spacious layouts
- calm surfaces with very little shadow
- simple split compositions

### 3.2 What to change for the web

Do not recreate the brochure as a long sequence of static poster pages.
Instead:

- reduce repetition
- make key information scannable
- keep one primary CTA path
- group similar content together
- use fewer, larger, better-chosen image moments
- make navigation and section anchors clear

### 3.3 Website-first priorities

The live site should prioritize, in this order:

1. Emotional first impression
2. Property essentials
3. Interior and exterior confidence-building visuals
4. Practical information
5. Contact conversion

---

## 4. Brand Personality

Maison B-Sun should feel:

- sunny
- relaxed
- bright
- welcoming
- simple
- family-friendly
- lightly playful
- polished but not formal

Avoid these tones:

- luxury editorial
- minimalist fashion
- rustic Provence nostalgia overload
- app-like rental marketplace
- corporate hospitality

---

## 5. Visual System

### 5.1 Color palette

Use a restrained palette.
White and blue do most of the work.
Yellow is the signature accent.
Other colors should mainly come from the photos.

| Token | Hex | Role |
|---|---|---|
| `brand-blue` | `#1843A8` | Main identity color for headings, nav, links, labels, and key text |
| `brand-blue-deep` | `#12378E` | Hover/focus states and stronger contrast text |
| `sun-yellow` | `#FFD84A` | Signature accent for CTAs, logo accent, footer/contact band, highlight moments |
| `sun-yellow-soft` | `#FFE98A` | Soft decorative fills and subtle accent surfaces |
| `paper` | `#FCFBF7` | Default page background |
| `paper-cool` | `#F3F4F6` | Optional very light cool neutral if pure white needs variation |
| `stone` | `#D8D6CF` | Hairline borders and separators |
| `charcoal-soft` | `#2E3650` | Optional long-form copy color when blue is too strong |
|
Color rules:

- Default background should be `paper`, not beige.
- Main headings and nav should use `brand-blue`.
- Yellow should be bold but selective.
- Avoid terracotta as a primary UI accent.
- Avoid large warm beige overlays.
- Avoid gradients as a core style device.

### 5.2 Typography

The biggest correction versus the earlier design doc:

The brochure's title treatment is better described as **hand-drawn display** than as **rounded display**.

Recommended typography roles:

- **Hero / signature display:** playful hand-drawn display with irregular stroke personality
- **Section display:** same family or a closely related handwritten display
- **Body / UI:** clean humanist sans-serif or lightly condensed sans-serif

Suggested web font candidates to test visually against the PDF:

- Display candidates: `"Knewave"`, `"Mansalva"`, `"Patrick Hand SC"`, `"Gaegu"`
- Body/UI candidates: `"Nunito Sans"`, `"Avenir Next"`, `"Source Sans 3"`, `"Barlow"`

Typography rules:

- The hero title should feel custom and memorable.
- Use display typography only for high-impact headings, not large blocks of copy.
- Keep body copy clean and readable.
- Prefer left alignment.
- Keep paragraphs narrow enough to scan easily.
- Use fewer font styles, but make the contrast between headline and body very clear.

Type scale guidance:

| Element | Style |
|---|---|
| Hero label | 14-18px, body font, semibold, blue |
| Hero title | 64-96px desktop, 42-56px tablet, 34-42px mobile, display font, tight line-height |
| Section title | 34-54px desktop, 28-38px mobile, display font |
| Intro/body copy | 17-20px, body font, 1.5-1.7 line-height |
| Labels/meta | 12-14px, body font, semibold, uppercase or short title case |
| Contact details | 22-32px depending on prominence |

### 5.3 Shape language

Use shape sparingly but confidently.

Allowed:

- large rounded image rectangles
- one-sided rounded hero panel corners
- occasional yellow blob or curved crop
- blue corner accent shape in isolated sections

Not allowed:

- glassmorphism
- frosted sticky pills
- glossy buttons
- heavy layered cards everywhere

### 5.4 Depth and surfaces

This design is mostly flat.

- Prefer white space over shadow.
- Use very subtle borders when needed.
- Keep shadow usage minimal and soft.
- Large sections should often feel like open layout zones, not boxed containers.

Recommended shadow system:

- `shadow-none`: `none`
- `shadow-soft`: `0 8px 24px rgba(24, 67, 168, 0.08)`

---

## 6. Website Structure

The website should feel curated, not exhaustive.
Avoid turning every photo into a standalone card.

Recommended page structure:

### 6.1 Header

- Simple white header
- Blue logo/wordmark
- Blue nav links
- Optional sticky behavior, but only with a clean solid or near-solid background
- No blur glass effect

### 6.2 Hero

- Split layout: text left, image right
- Strong title with brochure-inspired display type
- One short supporting paragraph
- One primary CTA and one secondary CTA
- Immediate visibility of place + core promise

Suggested core content:

- Bagnols-en-Forêt
- Holiday house for 6 people
- Private pool
- Close to village and sea

### 6.3 Quick facts strip

Turn property facts into a clean brochure facts row or grouped summary.
Do not style them like product analytics tiles.

Good formats:

- inline fact row
- 2-column or 3-column fact summary
- lightly separated key-value groups

Avoid:

- many identical boxed metric cards
- dashboard styling

### 6.4 House overview

One calm section that explains the house in a few lines with one strong supporting image.

### 6.5 Interior section

Show the interior through a limited number of high-quality compositions:

- 1 overview composition
- 2-3 featured room moments
- optional secondary gallery or carousel

Do not give every room equal visual weight if the result becomes long and repetitive.

### 6.6 Exterior section

Exterior should be a major emotional section.
The pool, terrace, and sunny views are likely among the most persuasive assets.
Give them more visual emphasis than smaller secondary interior details.

### 6.7 Practical information

Keep practical details short, useful, and easy to scan.
Examples:

- parking
- Wi-Fi
- distance to village
- travel context / nearby places

### 6.8 Contact section

This should be a strong finish.
Recommended treatment:

- yellow horizontal band or strong yellow-backed block
- large blue contact details
- one clear call to action
- contact copy that feels inviting and direct

---

## 7. Component Rules

### Navigation

- Blue text, restrained styling
- Clean background
- Good contrast
- No dark sticky bar
- No translucent capsule look

### Buttons

Primary CTA:

- `sun-yellow` background
- `brand-blue` text
- pill or heavily rounded rectangle
- medium-bold weight

Secondary CTA:

- white or transparent
- blue border/text

Behavior:

- subtle hover only
- no glossy gradients
- no oversized drop shadows

### Images

- Use fewer images, but larger and better cropped
- Generous rounded corners: typically 24-36px desktop
- Bright, natural color treatment
- Maintain strong focal points on small screens

### Fact groups

- Short labels, strong values
- Minimal borders
- Clear spacing
- Should read like brochure highlights, not statistics widgets

### Contact cards

If multiple contact methods are shown, they should feel like one coordinated contact block, not disconnected product cards.

---

## 8. Layout Principles

### Desktop

- Prefer split layouts and spread-like compositions
- Container width: 1200-1320px
- Strong gutters and breathing room
- Use asymmetry deliberately

### Tablet

- Preserve hierarchy
- Allow split sections to become stacked when needed
- Keep hero strong

### Mobile

- Stack content clearly
- Keep title large and distinctive
- Preserve rounded image language
- Reduce decorative shapes
- Make CTA buttons easy to tap
- Keep contact section immediately usable

Spacing scale:

| Token | Size |
|---|---|
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |

---

## 9. Accessibility and Web UX Requirements

Because this is a website, not only a visual mockup, the design must also satisfy these requirements:

- Text contrast must remain strong, especially blue on white/yellow.
- Buttons and links must have visible hover/focus states.
- Navigation and CTA labels must be clear.
- Body copy must remain readable on mobile.
- Decorative shapes must never reduce legibility.
- Important facts must not be embedded only inside images.
- Images should use meaningful alt text.
- The page should remain performant: compress images, avoid excessive decorative effects, and minimize font overhead.

---

## 10. Content Strategy for This Site

This is a brochure-inspired website for direct inquiries.
That means content should be edited for confidence and clarity, not for maximum word count.

Content rules:

- Keep copy concise.
- Lead with atmosphere and essentials.
- Reduce repeated room descriptions.
- Let photography carry emotional weight.
- Use captions only when they add value.
- Keep one clear contact path throughout the page.

---

## 11. Anti-Patterns to Avoid

Do not:

- use serif-led editorial styling as the main identity
- use beige gradients as the main page background
- rely on glassmorphism or blurred sticky panels
- put most content into uniform bordered cards
- create long runs of equal-weight image cards
- over-explain every room in separate repeated blocks
- make the site feel like a SaaS landing page or booking portal
- introduce unrelated accent colors as main UI signals

---

## 12. Migration Guidance From the Current Site

When updating the current implementation, prioritize changes in this order:

1. Replace typography direction (remove serif-led hero/section identity).
2. Replace beige/editorial surface system with white/blue/yellow brochure system.
3. Simplify header styling and remove glassy sticky treatment.
4. Reduce card density and box-heavy layouts.
5. Curate the image rhythm: fewer, larger, more intentional image moments.
6. Strengthen the contact section with yellow emphasis.
7. Keep the existing content architecture only where it supports clarity.

---

## 13. Agent Prompt Guide

Use these instructions when generating or editing UI for this project:

- Build Maison B-Sun as a brochure-inspired holiday website, not a booking app or editorial portfolio.
- Base the design on white space, cobalt-blue typography, sunflower-yellow accents, and bright rounded photography.
- Use a hand-drawn display for signature headings and a clean sans-serif for body/UI.
- Favor split compositions with strong image moments.
- Minimize shadows and heavy containers.
- Keep content concise and easy to scan.
- End with a strong yellow contact section.

Quick summary:

- Primary color: `#1843A8`
- Accent color: `#FFD84A`
- Background: `#FCFBF7`
- Tone: sunny, relaxed, brochure-like, welcoming
- Priority: emotional clarity + practical trust + easy contact
- Avoid: serif editorial luxury, beige gradients, glass effects, card-heavy layouts
