---
name: Vitality Flow
colors:
  surface: '#f4fbf4'
  surface-dim: '#d4dcd5'
  surface-bright: '#f4fbf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6ee'
  surface-container: '#e8f0e9'
  surface-container-high: '#e3eae3'
  surface-container-highest: '#dde4dd'
  on-surface: '#161d19'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2b322d'
  inverse-on-surface: '#ebf3eb'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#52625c'
  on-secondary: '#ffffff'
  secondary-container: '#d3e3dc'
  on-secondary-container: '#566660'
  tertiary: '#416656'
  on-tertiary: '#ffffff'
  tertiary-container: '#84ab98'
  on-tertiary-container: '#1b3f31'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d5e6df'
  secondary-fixed-dim: '#bacac3'
  on-secondary-fixed: '#101e1a'
  on-secondary-fixed-variant: '#3b4a44'
  tertiary-fixed: '#c3ecd7'
  tertiary-fixed-dim: '#a8cfbc'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#294e3f'
  background: '#f4fbf4'
  on-background: '#161d19'
  surface-variant: '#dde4dd'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered for a premium Colombian health and fitness audience, balancing high-performance technology with an approachable wellness aesthetic. The brand personality is energetic yet disciplined, evoking a sense of "frescura" (freshness) and peak vitality. 

The visual direction follows a **Corporate / Modern** style with **Minimalist** influences. It prioritizes clarity and high-fidelity execution to build immediate trust. The UI utilizes generous whitespace to allow product photography to breathe, creating an aspirational "lifestyle" feel. The emotional response should be one of confidence and ease—positioning the portable blender as a seamless, high-end tool for a modern healthy lifestyle.

## Colors

The palette is rooted in a "Vital Green" spectrum that symbolizes health, nature, and Colombian biodiversity. 

- **Primary (Emerald Green):** Used exclusively for high-priority actions, conversion points, and brand signifiers. It represents energy and trust.
- **Secondary (Soft Mint):** Utilized for subtle background accents, secondary containers, and announcement bars to create a refreshing "wash" of color without overwhelming the content.
- **Neutral (Charcoal & Grays):** Dark Charcoal is reserved for core typography to ensure maximum legibility and a premium "weighted" feel. Light grays provide structural definition and subtle layering.
- **Surface (White):** The primary canvas, reinforcing the clean, medical-grade hygiene associated with premium health tech.

## Typography

This design system employs a dual-font strategy to balance impact with utility. 

**Montserrat** is used for all headlines and display text. Its geometric construction feels modern and athletic. Heavy weights (600-700) are preferred to create a strong visual hierarchy and emphasize value propositions.

**Inter** is used for body copy and interface labels. Its neutral, systematic nature ensures high legibility across technical specifications and e-commerce checkout flows. 

Tighten letter-spacing on display headings for a more "designed" and high-end appearance. Use sentence case for headings to maintain a friendly, contemporary tone.

## Layout & Spacing

The design system uses a **Fluid Grid** model based on an 8px spacing rhythm. 

- **Desktop:** 12-column grid with 24px gutters and 48px outside margins. 
- **Tablet:** 8-column grid with 20px gutters and 32px outside margins.
- **Mobile:** 4-column grid with 16px gutters and 16px margins.

Vertical rhythm is maintained through "stack" units. Use `stack-lg` to separate major sections, and `stack-sm` for grouping related elements like icons and their descriptions. Safe areas around CTAs should be strictly enforced to emphasize their importance in the conversion funnel.

## Elevation & Depth

Depth is used sparingly and purposefully to highlight interactive components. The system utilizes **Ambient Shadows** to create a sense of tactile premium quality.

- **Level 1 (Default):** Flat surfaces with a subtle 1px border (#E5E7EB) for cards and input fields.
- **Level 2 (Hover/Active):** An extra-diffused shadow (0px 10px 15px -3px rgba(31, 41, 55, 0.08)) that makes elements appear to "lift" slightly toward the user.
- **Level 3 (Overlay):** Used for modals and navigation menus, featuring a more pronounced shadow and a subtle backdrop blur (8px) to maintain context.

Avoid harsh, high-opacity shadows. Depth should feel like natural, soft studio lighting.

## Shapes

The shape language is defined by "Rounded" logic (0.5rem base), which creates a friendly and ergonomic feel reminiscent of the product's physical design.

- **Standard Elements:** Buttons, cards, and input fields use the `rounded-md` (8px) setting.
- **Large Containers:** Hero sections and feature cards use `rounded-xl` (24px) for a modern, "app-like" aesthetic.
- **Icon Enclosures:** Small tags or badges use a full pill-shape to distinguish them from actionable buttons.

## Components

- **Buttons:** The primary CTA is a solid Emerald Green (#10B981) button with white text, utilizing `rounded-md`. Secondary buttons use a mint background (#ECFDF5) with emerald text for less urgent actions.
- **Input Fields:** Clean white backgrounds with a subtle light gray border. On focus, the border transitions to Primary Emerald with a soft 2px glow.
- **Cards:** White surfaces with a Level 1 border. Use for product features, customer testimonials, and blog posts. Headers within cards should be Montserrat Bold.
- **Chips/Badges:** Pill-shaped tags used for "New," "Best Seller," or "In Stock" indicators. Use high-contrast text on a Soft Mint background.
- **Lists:** Clean, icon-led lists for product specs. Icons should be minimalist line-art in Emerald Green.
- **Progressive Disclosure:** Use accordion-style lists for "Technical Specs" or "FAQs" to keep the landing page clean while providing necessary detail for power users.