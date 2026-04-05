# Gentleman's Craft - Premium Men's Wear Website

A premium single-page brand website for a luxury menswear label. The experience blends editorial-style layouts, cinematic scroll reveals, and smooth parallax motion to present collections, services, trust signals, and contact pathways in one continuous flow.

## Website Experience (Current Build)

The website is currently configured as **Gentleman's Craft**, with brand copy and content focused on:

- Bespoke tailoring and premium materials
- Seasonal and business-casual collections
- Personal styling and wardrobe consulting
- Client testimonials, FAQ, and conversion-focused contact footer

## Section Flow

The page renders in this order:

1. **Hero**
	- Layered full-screen composition with giant background wordmark, cutout model image, overlay tagline, and top navigation.
	- Scroll-driven parallax moves text and model at different speeds for depth.

2. **Intro Grid**
	- Split-line title reveal and editorial description.
	- 5-image masonry grid with directional clip-path reveals, subtle Ken Burns zoom, and per-card parallax.

3. **Services**
	- Two-column dark section with animated heading and a 2x2 service card grid.
	- Icon-mapped service cards with hover transitions.

4. **Why Choose Us**
	- Feature cards with image overlays.
	- Animated statistics counters.
	- Wide landscape image with center-expand reveal and text overlay.

5. **Featured Collections**
	- Alternating project layout.
	- Viewfinder-style image overlays, clip-path reveals, parallax image motion, and staggered text entrance.

6. **Testimonials**
	- Auto-playing Swiper carousel.
	- Hover inversion styling and edge fade overlays.

7. **FAQ**
	- Accessible accordion (Radix UI).
	- Staggered reveal and final CTA button.

8. **Footer**
	- Oversized SVG brand wordmark.
	- Contact, navigation, social links, and legal row.

## Animation and Interaction System

- **GSAP + ScrollTrigger** power section entrances, clip-path reveals, staggered text, and parallax motion.
- **Lenis** provides smooth scrolling and is synced with GSAP's ticker.
- Anchor links are intercepted for smooth in-page scrolling.
- Lazy-loaded images fade in once loaded for a cleaner visual experience.

## Design System

- **Theme:** Deep forest charcoal and off-white contrast
- **Primary colors:**
  - `#0d1310` (forest dark)
  - `#1a2420` (forest mid)
  - `#f4f4f4` (off-white)
  - `#1a1a1a` (soft black)
- **Typography:**
  - Manrope (headings)
  - Playfair Display (italic accents)
  - DM Sans (body)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 3
- GSAP + ScrollTrigger
- Lenis
- Swiper
- Radix UI (Accordion and UI primitives)
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start dev server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Content Configuration

All editable website content is centralized in `src/config.ts`.

### Config Objects

- `siteConfig` - document language, tab title, meta description
- `heroConfig` - hero text, image, brand name, top navigation links
- `introGridConfig` - intro title, description, masonry images, accent text
- `servicesConfig` - section heading and service cards
- `whyChooseMeConfig` - feature cards, stats, wide image, overlay copy
- `featuredProjectsConfig` - featured collection cards and CTA text
- `testimonialsConfig` - testimonial items and heading copy
- `faqConfig` - FAQ items and final CTA
- `footerConfig` - large logo text, contact info, social links, legal links

### Conditional Rendering Behavior

Each section contains null checks. If required content is empty (for example no heading and no items), that section returns `null` and does not render.

## Required Public Assets

Place assets in `public/` using the filenames referenced in `src/config.ts`:

- `/hero-model.png`
- `/grid-1.jpg` to `/grid-5.jpg`
- `/project-1.jpg` to `/project-3.jpg`
- `/feature-1.jpg`, `/feature-2.jpg`, `/wide-image.jpg`
- `/testimonial-1.jpg` to `/testimonial-3.jpg`

## Key Source Files

- `src/App.tsx` - page composition and section order
- `src/config.ts` - all content, labels, and media paths
- `src/hooks/useLenis.ts` - smooth-scroll setup and anchor handling
- `src/sections/*.tsx` - section implementations and GSAP logic
- `src/index.css` and `src/App.css` - tokens, typography, and global behavior

## Notes

- This build is currently branded as **Gentleman's Craft** (premium menswear), not the previous photography portfolio concept.
- Navigation anchors should match section IDs for best in-page scroll behavior.
