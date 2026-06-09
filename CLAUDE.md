# PainFreeTendon — Project Context

This file gives Claude full context on the PainFreeTendon project. Read this before making any changes.

---

## Who Paul Is

**Paul Cramer, RMT** — Registered Massage Therapist. Clinical focus on tendon rehabilitation. Founder of PainFreeTendon.

- Email: paul@movementspark.com
- GitHub: movementspark
- Domain: painfreetendon.com
- Course platform: Systeme.io
- YouTube: planned, not yet active

---

## What PainFreeTendon Is

An education-first platform and rehab guidance hub for people with tendon pain. It sits between overly technical clinical resources and oversimplified "just rest" advice.

**Three pathways for visitors:**
1. **Learn** — free articles, guides, resources
2. **Program** — structured rehab courses on Systeme.io
3. **1-on-1** — virtual sessions with Paul (telehealth, in development)

**Core philosophy:**
- Build capacity, don't just avoid pain
- Pain is information, not damage
- Tendons adapt to what you ask of them
- Recovery is a guided process, not rest and hope

---

## Brand Voice

- First person ("I've seen this in practice...")
- Clear, conversational, calm and confident
- Evidence-informed but never academic or jargon-heavy
- Clinician educating a patient — not selling, not lecturing
- Honest about uncertainty and timelines
- Never hype, never aggressive marketing

**Tone examples:**
- ✅ "Rest almost never resolves tendon pain long-term. Here's why."
- ✅ "Some discomfort during loading is normal and acceptable."
- ❌ "FINALLY cure your tendon pain for good!"
- ❌ "Revolutionary new approach..."

---

## Design System

- **Primary:** Blue `#1D6FD8`
- **Secondary:** Teal `#0D9A8A`
- **Text:** Slate `#1A2540`
- **Background alt:** `#F5F8FF`
- **Font:** Inter
- **Framework:** Astro + Tailwind CSS
- **Deployment:** Vercel (auto-deploys on git push)

---

## Site Structure

```
painfreetendon.com/
├── /                    Home
├── /lower-body          Achilles, patellar, hamstring
├── /upper-body          Tennis elbow, golfer's elbow, rotator cuff
├── /resources           Articles, guides, email signup
├── /programs            Course listings (Systeme.io)
├── /book                Session request form
├── /about               Paul's background and philosophy
├── /contact             Contact form
├── /privacy             Privacy policy
├── /terms               Terms of use
└── /blog/               Articles (growing)
    ├── heel-raises-achilles-tendinopathy-guide
    ├── why-tendon-pain-isnt-about-damage
    └── isometric-exercise-explained
```

**Key components:**
- `Nav.astro` — sticky nav, mobile menu via Alpine.js
- `Footer.astro` — links, disclaimer, copyright
- `Hero.astro` — reusable hero with optional image panel
- `PathwayCard.astro` — Learn / Program / Coach cards
- `TendonCard.astro` — body region link cards
- `TrustSection.astro` — dark trust section
- `CTABanner.astro` — flexible CTA sections
- `BlogLayout.astro` — article layout with author bio

**Images in /public:**
- `hero.jpg` — gym photo (two active women, calf raise)
- `paul-cramer.png` — Paul's photo (250×300px, used in blog/about)
- `favicon.svg` — site icon

---

## Content Strategy

**Goal:** Become the go-to free resource for tendon pain education online. Build audience → funnel to courses → establish Paul as a credible voice for clinicians and patients.

**Priority topic:** Achilles tendinopathy first, then expand to other tendons.

**Content cadence:** 2 articles per week (drafted by Claude, reviewed by Paul, then published).

**Article format:**
- Written in first person as Paul
- 800–1500 words
- Clear H2 structure
- Blockquotes for key insights
- Internal links to related articles and programs
- CTA at bottom pointing to /programs or /book
- Saved as `.astro` files in `src/pages/blog/`

**To publish a draft article:**
1. Remove `draft: true` flag from the resources.astro article list (or add to publishedArticles array)
2. Run `push.bat`

---

## Deployment Workflow

```bash
# Paul runs this after any change is approved:
push.bat   # double-click in the painfreethendon folder
           # prompts for a commit message
           # pushes to GitHub
           # Vercel auto-deploys in ~60 seconds
```

**GitHub repo:** `https://github.com/movementspark/painfreetendon`
**Live site:** `https://painfreetendon.com`

---

## Strategic Goals (6–12 months)

1. Rank for Achilles tendinopathy search terms
2. Build email list via Resources page
3. Launch first Systeme.io course (Achilles 12-week program)
4. Build clinician-focused course (tendinopathy for RMTs/physios) — higher price point
5. Launch virtual telehealth consultations
6. Start YouTube / short-form video (scripts written by Claude, filmed by Paul)
7. Newsletter — biweekly, curated research + clinical tips

**Key differentiators:**
- Dedicated tendinopathy site (not general rehab)
- Accessible price point vs Maliaras/Rio courses
- Biopsychosocial model, not just mechanical
- AI-assisted content pipeline = consistent output
- Both patient-facing AND clinician-facing content

---

## Things Still To Do

- [ ] Connect email capture forms to ConvertKit or Mailchimp
- [ ] Add real booking link to /book page (Calendly or similar)
- [ ] Replace hero.jpg with better image when available
- [ ] Add Paul's full bio and real photo to /about
- [ ] Build first Systeme.io course and link /programs to it
- [ ] Set up Vercel Analytics
- [ ] Start YouTube channel and link from site
- [ ] Write articles for patellar, hamstring, tennis elbow, golfer's elbow

---

## Notes for Claude

- Always write blog posts in Paul's first-person voice (see Brand Voice above)
- When adding new articles, add them to the `publishedArticles` array in `resources.astro`
- Use `BlogLayout.astro` for all new blog posts
- Don't change the colour system or typography without Paul's approval
- The `push.bat` file handles all git operations — remind Paul to run it after changes
- Paul is not a developer — keep explanations plain and step-by-step
