---
name: Sacris Eruditio
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4b463c'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7d766b'
  outline-variant: '#cec5b8'
  surface-tint: '#6a5d3e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#231a03'
  on-primary-container: '#918261'
  inverse-primary: '#d6c59f'
  secondary: '#745b13'
  on-secondary: '#ffffff'
  secondary-container: '#ffdc89'
  on-secondary-container: '#795f18'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002204'
  on-tertiary-container: '#469446'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f3e1b9'
  primary-fixed-dim: '#d6c59f'
  on-primary-fixed: '#231a03'
  on-primary-fixed-variant: '#514629'
  secondary-fixed: '#ffdf96'
  secondary-fixed-dim: '#e5c372'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4400'
  tertiary-fixed: '#a3f69c'
  tertiary-fixed-dim: '#88d982'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005312'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
  wood-noble: '#5a4530'
  ink-deep: '#2c1f0e'
  paper-dark: '#d5c9b5'
  liturgical-green: '#2e7d32'
  altar-gold: '#8b6a3e'
typography:
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
  title-md:
    fontFamily: Libre Caslon Text
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Source Sans 3
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.8px
  tagline:
    fontFamily: Source Sans 3
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 1.8px
  meta:
    fontFamily: Source Sans 3
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin-desktop: 22px
  container-margin-mobile: 14px
  gutter: 16px
---

## Brand & Style

The design system is anchored in the concepts of **solemnity, academic tradition, and liturgical order**. It is designed for an ecclesiastical institution where the digital interface must feel like a natural extension of a physical library or a sacred space. The brand personality is institutional yet welcoming, balancing the weight of historical authority with the clarity required for modern administration.

The chosen design style is **Corporate / Modern** with a **Tactile / Paper** influence. It avoids the coldness of pure "flat" design by using a warm, cream-based palette and subtle elevation that mimics the layering of high-quality vellum or parchment. High-contrast typography serves as the primary decorative element, ensuring the interface remains functional while projecting an image of disciplined excellence.

## Colors

The color palette is derived from traditional liturgical and academic environments. 

- **Primary (#1a1200):** A deep, near-black "Ebony" used for headers, primary actions, and high-level structural anchors. It represents authority and the clerical life.
- **Secondary (#c8a85a):** "Academic Gold," used sparingly for accents, taglines, and decorative borders to denote excellence and the sacred.
- **Background (#fdfbf7):** A "Soft Cream" that reduces eye strain and reinforces the parchment-like aesthetic, moving away from sterile digital whites.
- **Accents:** "Wood Noble" (#5a4530) is used for secondary text and labels to maintain warmth. "Liturgical Green" (#2e7d32) is reserved for success states and growth-related indicators.

For status signaling, use the defined Success (Green), Warning (Gold/Amber), and Error (Red) tones, always ensuring they are paired with their respective soft-tinted backgrounds for legibility.

## Typography

This design system utilizes a sophisticated typographic pairing to distinguish between **Institutional Identity** and **Functional Utility**.

- **Serif (Libre Caslon Text):** Used for all headlines, section titles, and names. It evokes the feel of traditional typesetting and theological manuscripts.
- **Sans-Serif (Source Sans 3):** Used for body text, form fields, and UI labels. It ensures high legibility in data-heavy views and administrative tasks.

**Hierarchy Rules:**
- Use `label-caps` (all caps) for form labels and small section headers to create a disciplined, organized feel.
- `tagline` is reserved for institutional mottos or very high-level descriptors, always with increased letter spacing.
- On mobile devices, large headlines should scale down to `headline-lg-mobile` to maintain balance.

## Layout & Spacing

The layout follows a **fixed grid** philosophy for desktop to maintain a sense of structured "printed" pages, transitioning to a fluid model for mobile devices.

- **Grid Model:** A 12-column grid for desktop (max-width 1200px) with 16px gutters.
- **Rhythm:** All spacing is based on a 4px baseline. Most components use `md` (16px) or `lg` (24px) for internal padding to ensure the UI feels airy and unhurried.
- **Safe Areas:** Standard page margins are 22px on desktop and 14px on mobile. 
- **Grouping:** Use `xl` (32px) vertical spacing between major sections (e.g., between a header and a data table) and `sm` (12px) for related items within a list or grid.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. The goal is to make elements look like they are sitting on a physical desk.

- **Surface Tiers:** The main background is the "Soft Cream" surface. Cards and inputs use a pure white surface to pop forward visually.
- **Shadow Character:** Shadows must be extremely soft and tinted with the "Ink Deep" (#2c1f0e) color rather than pure black. This creates a more natural, warm depth.
- **Standard Cards:** Use a soft elevation (`0 2px 16px rgba(44,31,14,.08)`) to group content.
- **Emphasis (Login/Modals):** Use a heavy shadow (`0 8px 40px rgba(44,31,14,.15)`) to focus the user's attention entirely on the entry point or critical decision.
- **Interactivity:** Elements like seminarian cards or request items should slightly increase their shadow depth on hover to provide tactile feedback.

## Shapes

The shape language is **Rounded**, reflecting a modern institutional approach that avoids the harshness of sharp corners while remaining more formal than "pill-heavy" social apps.

- **Base (0.5rem):** Used for buttons, standard cards, and list items.
- **Soft (0.375rem):** Used for form inputs and smaller interactive components to maintain precision.
- **Pills (Full Radius):** Reserved exclusively for status badges (e.g., "Pending", "Approved") and category tags to differentiate them from actionable buttons.
- **Circular (50%):** Used for avatars and status icons to create focus points within the rectangular grid.

## Components

### Buttons
- **Primary:** Background "Ebony" (#1a1200) with white text. High contrast, formal.
- **Secondary:** Outlined with "Academic Gold" (#c8a85a) or "Altar Gold" (#8b6a3e).
- **States:** Hover states should involve a subtle lightening of the background or a soft inner glow. Active states should feel "pressed" via a slight reduction in elevation.

### Form Fields
- **Idle:** Background "Subtle Surface" (#faf8f4) with a "Paper Dark" (#d5c9b5) border.
- **Active/Focus:** Border changes to "Altar Gold" (#8b6a3e) with a 1px solid stroke.
- **Labels:** Always use `label-caps` in "Wood Noble" (#5a4530).

### Request Cards
- **Structure:** Use a white surface with the 0.5rem roundedness. 
- **Header:** Include a small iconography cue (system emoji) in a circular container.
- **Footer:** Use the "Pill" shape for status badges (e.g., Pending, Approved).

### Navigation
- **Top Header:** Should feature a 3px bottom border in "Altar Gold" (#8b6a3e) to act as a visual anchor for the entire application.
- **Tabs:** Use "Ebony" text and a bold bottom indicator for active states; "Altar Gold" text for inactive states.

### Status Indicators
- **Success:** Liturgical Green (#2e7d32) text on an ultra-light green background.
- **Warning:** Altar Gold (#8b6a3e) text on an ultra-light gold background.
- **Error:** Deep Red (#c62828) text on a soft pink background.