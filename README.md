# PainFreeTendon — Astro Website

Evidence-informed tendon rehab guidance by Paul Cramer, RMT.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the build
```

## Project Structure

```
painfreethendon/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro          # Sticky nav with mobile menu (Alpine.js)
│   │   ├── Footer.astro       # Site-wide footer
│   │   ├── Hero.astro         # Reusable hero section
│   │   ├── PathwayCard.astro  # Learn / Program / Coach cards
│   │   ├── TendonCard.astro   # Body region link cards
│   │   ├── TrustSection.astro # Dark trust / credibility section
│   │   └── CTABanner.astro    # Flexible CTA sections
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell, Nav + Footer wrapper
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── lower-body.astro   # Achilles, patellar, hamstring
│   │   ├── upper-body.astro   # Tennis elbow, golfer's elbow, rotator cuff
│   │   ├── about.astro        # About Paul Cramer, RMT
│   │   └── resources.astro    # Articles, guides, video
│   └── styles/
│       └── global.css         # Tailwind directives + custom component classes
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

## Design System

| Token       | Value      | Usage                   |
|-------------|------------|-------------------------|
| Blue        | `#1D6FD8`  | Primary, CTAs, links    |
| Teal        | `#0D9A8A`  | Secondary, growth       |
| Slate       | `#1A2540`  | Body text, headings     |
| Slate-mid   | `#3D4E6B`  | Body paragraphs         |
| Slate-soft  | `#6B7A99`  | Captions, metadata      |
| bg-alt      | `#F5F8FF`  | Section backgrounds     |
| bg-teal     | `#F0FBF9`  | Teal-tinted sections    |

Font: **Inter** (Google Fonts)

## Utility Classes (global.css)

- `.btn-primary` — blue filled button
- `.btn-outline` — blue outlined button
- `.btn-ghost`   — arrow link
- `.badge`       — blue uppercase tag
- `.badge-teal`  — teal badge
- `.section-title` — responsive heading
- `.section-sub`   — subheading paragraph
- `.card`          — white card with shadow + hover

## Deployment (Vercel)

```bash
# No configuration needed — Vercel detects Astro automatically
vercel deploy
```

Or connect the GitHub repo to Vercel for automatic deployments.

## Next Steps

1. Replace placeholder avatar on `/about` with a real photo
2. Connect `/programs` to your Thinkific or course platform
3. Wire up the email capture form on `/resources` (ConvertKit / Mailchimp)
4. Add blog post MDX files under `src/pages/resources/`
5. Set `site:` in `astro.config.mjs` to your final domain
