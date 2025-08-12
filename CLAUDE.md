# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is the Berkeley Technology and Justice Lab website - a modern SvelteKit 2.x SPA with TypeScript, Tailwind CSS 4.x, and PostHog analytics integration.

## Essential Commands

### Development
```bash
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run check        # Run type checking (svelte-check)
npm run lint         # Run ESLint and Prettier checks
npm run format       # Auto-format code with Prettier
```

## Architecture Overview

### Component Structure
The site is a single-page application with hash-based navigation. All main sections are Svelte components in `src/lib/components/`:
- Components communicate via props and follow a modular design pattern
- Each section component is self-contained with its own animations and responsive behavior
- The main page (`src/routes/+page.svelte`) orchestrates all section components

### Animation System
The site uses a sophisticated CSS-based animation framework:
- Intersection Observer API triggers scroll-based animations
- Custom keyframes defined in `src/app.css` for floating background shapes
- Staggered reveal animations using CSS classes and delays
- All animations are performance-optimized and respect user preferences

### Styling Approach
- **Tailwind CSS 4.x** with custom configuration
- **Design tokens** in `src/app.css` define the color palette (--apple-white, --cerulean-blue, --roman-silver, --dark-blue)
- **Mobile-first responsive design** using Tailwind breakpoints
- **Typography**: EB Garamond for headings, Georgia serif fallback for body

### State Management
- Uses Svelte's built-in reactivity (`$state()` and `$props()` with Svelte 5.0 syntax)
- Browser-side features check with `browser` from `$app/environment`
- PostHog analytics initialized client-side only

### Asset Management
- Static assets in `static/` directory (logos, favicon)
- Component-specific images in `src/lib/assets/` (team photos, partner logos)
- Images imported directly in components for build-time optimization

## Development Guidelines

### Adding New Sections
1. Create component in `src/lib/components/`
2. Import and add to `src/routes/+page.svelte`
3. Follow existing animation patterns with intersection observer
4. Ensure responsive design with Tailwind classes

### Modifying Animations
- Global animations defined in `src/app.css`
- Component-specific animations use Tailwind utilities
- Test performance on mobile devices
- Respect `prefers-reduced-motion` media query

### Working with Analytics
- PostHog configuration in `src/routes/+layout.svelte`
- Only initialize on client-side (`if (browser)` check)
- Track events using `posthog.capture()` method

### Deployment
- Configured for Vercel deployment via `@sveltejs/adapter-vercel`
- Environment variables should be set in Vercel dashboard
- Build output optimized for serverless functions