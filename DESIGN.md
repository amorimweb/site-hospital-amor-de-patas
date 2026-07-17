---
name: Hospital Amor de Patas
description: Landing page de hospital veterinário 24h e pet shop em Parauapebas, PA
colors:
  green: "#286b4c"
  deep: "#174632"
  pink: "#efd6d0"
  cream: "#fbf7ed"
  lime: "#dce5a0"
  ink: "#173229"
  line: "rgba(23,50,41,.18)"
typography:
  display:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "clamp(48px, 8vw, 145px)"
    fontWeight: 600
    lineHeight: 0.8
    letterSpacing: "-0.05em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "9px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  pill: "99px"
  soft: "15px"
  bulb: "140px"
spacing:
  sm: "20px"
  md: "35px"
  lg: "80px"
  xl: "130px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "18px 20px"
  button-primary-hover:
    backgroundColor: "{colors.pink}"
  chip-cta:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "13px 18px"
---

# Design System: Hospital Amor de Patas

## 1. Overview

**Creative North Star: "The Warm Veterinary Storybook"**

Amor de Patas reads like a hand-illustrated storybook for a 24h veterinary hospital, not a clinical healthcare brand. A deep forest green ("cuidado de verdade") carries most surfaces, punctuated by blush pink and lime accents borrowed from a pet-shop palette rather than a hospital one. Oversized serif display type (Petrona) paired with clean grotesque body copy (DM Sans) gives every section an editorial, poster-like scale — headlines are the art, not just labels. Organic blob shapes, morphing image masks, hand-drawn scribble text, and floating paw/heart motifs replace the sterile card grids and stock-photo tiles typical of veterinary sites; this is the system's explicit rejection of "generic clinic site with blue/white palette and stock photography."

**Key Characteristics:**
- Deep green as the dominant surface color, not a mere accent — the brand commits to it (Committed color strategy).
- Oversized italic/serif display headlines with tight, negative letter-spacing for a poster feel.
- Organic, hand-cut shapes (blobs, arches, circles) instead of rectangular cards.
- Playful motion (float, wiggle, sway, morph) used sparingly to keep the hospital tone warm, never chaotic.
- Every section carries a pill-shaped WhatsApp CTA — urgency is always one tap away.

## 2. Colors

A single saturated forest green anchors the system; pink and lime act as playful, high-contrast accents rather than neutrals.

### Primary
- **Forest Green** (#286b4c): Dominant surface for hero, services, promise, and contact sections. Text sits in white on top of it.
- **Deep Forest** (#174632): Darker end of the hero/services gradient; also used as ink color for text sitting on light (pink/lime) surfaces.

### Secondary
- **Blush Pink** (#efd6d0): Warm accent — tag pills, hero emphasis text, small blob borders, the "24H badge" section background, scribble text.
- **Meadow Lime** (#dce5a0): High-energy accent reserved for CTAs and active states (primary WhatsApp buttons, active service label).

### Neutral
- **Warm Cream** (#fbf7ed): Page background for light sections (care, gallery).
- **Deep Ink** (#173229): Body text color on cream/light surfaces.
- **Hairline** (rgba(23,50,41,.18)): Dividers and section rules on light backgrounds.

### Named Rules
**The Green-First Rule.** Green is not an accent; it's the default surface for hero, services, promise, and contact — roughly half the page. Pink and lime never compete with it for dominance; they punctuate.
**The Warm-Neutral Ban.** No cream/sand "AI default" body background on green sections — white text sits directly on saturated green, never on a softened tint.

## 3. Typography

**Display Font:** Petrona (with Georgia, serif fallback)
**Body Font:** DM Sans (with system sans-serif fallback)

**Character:** A restrained serif/grotesque pairing on a strong contrast axis — Petrona's warm italic curves for emotion and scale, DM Sans's clean geometry for legibility at small sizes (labels, nav, body copy).

### Hierarchy
- **Display** (600, clamp(48px–145px), line-height 0.78–0.95, letter-spacing -0.045 to -0.065em): Hero and section headlines (`h1`, `h2`). Petrona italic for the emphasized word inside a headline (e.g. "cuida.").
- **Title** (600, 20–45px, Petrona): Sub-headers like the collage "24H" badge, service item names, gallery captions.
- **Body** (400, 17–18px, line-height 1.6–1.7): Paragraph copy, capped implicitly by narrow column widths (max-width ~430px on hero copy).
- **Label** (700, 7–10px, letter-spacing 0.12–0.22em, uppercase by convention): Tags, nav links, CTA buttons, the ticker strip, section eyebrows ("01 / NOSSO JEITO").

### Named Rules
**The Poster-Scale Rule.** Section headlines are allowed to reach ~145px on desktop; they are meant to dominate the viewport like a magazine spread, not sit modestly above body copy.

## 4. Elevation

The system is flat by default — depth comes from color contrast and organic shape overlap (blobs layered over each other), not shadows. The single exception is the floating WhatsApp button, which needs to visually detach from whatever content scrolls beneath it.

### Shadow Vocabulary
- **Floating-action** (`box-shadow: 0 8px 30px rgba(0,0,0,.13)`): Used only on `.float`, the persistent WhatsApp button, to lift it above page content.

### Named Rules
**The Flat-By-Default Rule.** No shadows on cards, buttons, or images. Depth reads through color blocking, layered blobs, and z-index stacking, not drop shadows.

## 5. Components

### Buttons
- **Shape:** Full pill (`border-radius: 99px`).
- **Primary (CTA):** Lime background (#dce5a0), deep-green text (#174632), bold 10px uppercase label with wide tracking, generous horizontal padding (18–35px), often full-width on mobile.
- **Secondary (header chip):** Pink background (#efd6d0), deep-green text, smaller padding — reserved for the header's compact "PLANTÃO 24H" chip.
- **Hover / Focus:** No dedicated hover state defined yet; buttons rely on color contrast alone. (Gap — see Do's and Don'ts.)

### Chips / Badges
- **Style:** Circular white badge (`.collage > p`), 130×130px, rotated -8deg, deep-green text, used as a floating "ABERTO 24H" stamp over the hero image collage.
- **State:** Static decorative badge; the section-eyebrow chips ("01 / NOSSO JEITO", "02 / TUDO PARA SEU PET") are plain uppercase label text, not boxed.

### Cards / Containers
- **Corner Style:** Organic, asymmetric — blobs use irregular `border-radius` percentages; photo containers use paired large/small radii (e.g. `180px 180px 25px 25px`) to read as an arch rather than a rectangle.
- **Background:** Photography fills the container (`object-fit: cover`); no card chrome or border.
- **Shadow Strategy:** None (see Elevation).
- **Border:** None on image containers; a single hairline divider (`rgba(23,50,41,.18)`) separates text blocks like the "careCopy" strong line and the contact info grid.

### Inputs / Fields
- Not present in the current design — the page has no forms; all conversion funnels through WhatsApp/Instagram links.

### Navigation
- **Style:** Transparent header overlaid on the hero, white text/links, no background until the mobile menu opens (which switches to a cream sheet with deep-green text).
- **Typography:** 11px label-weight links, wide letter-spacing, no underline; active/hover state not yet defined.
- **Mobile treatment:** Nav collapses into a hamburger-style "MENU"/"FECHAR" text button; open state reveals a full-width dropdown sheet with large Petrona links.

### Signature Component: Hero Collage
A two-blob photo composition — one large organic "main" blob with a slow morphing border-radius animation, one small circular blob outlined in pink — overlaid with a rotated heart glyph and the circular "ABERTO 24H" badge. This pattern (organic photo blob + badge + scribble caption) is the brand's signature visual device and should be reused for any new hero or feature-image treatment rather than inventing a new photo-container shape.

## 6. Do's and Don'ts

### Do:
- **Do** keep green (#286b4c → #174632) as the dominant surface for at least half the page; it is the brand's committed color, not a rare accent.
- **Do** use the pill shape (`border-radius: 99px`) for every clickable CTA, and lime (#dce5a0) for the primary WhatsApp action specifically — reserve pink for secondary/header chips.
- **Do** use organic, asymmetric border-radius (blobs, arches) for photo containers instead of plain rectangles or uniform rounded corners.
- **Do** keep display headlines large and confident (Petrona, up to ~145px on desktop) with an italic word for emotional emphasis.
- **Do** respect `prefers-reduced-motion`: every decorative animation (morph, float, wiggle, spin, sway, bob) must degrade to a static state, as already implemented globally.

### Don't:
- **Don't** introduce a cream/sand "AI-default" near-white background behind text that should sit directly on the green surface — this is explicitly the generic-clinic look the brand rejects.
- **Don't** use stock-photo-style rectangular card grids for services or gallery content; this system uses organic blobs and asymmetric arches instead.
- **Don't** add drop shadows to buttons, cards, or images — the system is flat by design; the one exception is the floating WhatsApp action button.
- **Don't** add gradient text, side-stripe card borders, or tiny uppercase "eyebrow" labels beyond the two that already exist structurally (section numbering "01/02/03/04" is a real sequence here, not decorative scaffolding — keep it that way, don't add more).
- **Don't** let any CTA go without a clear WhatsApp/contact path — urgency (24h plantão) is the single conversion goal of this page.
