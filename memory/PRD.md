# PRD — Rita Sharma Personal Brand Landing Page

## Original Problem Statement
Build a minimal, modern, highly attractive personal-brand landing page for premium Life Insurance Advisor Rita Sharma. Must NOT look like an LIC/government insurance site — no shields, no corporate blue-yellow, no stock clichés. Premium editorial feel: clean cream space, deep navy/charcoal text, one warm gold accent, large bold typography, subtle premium motion, mobile-first. Target: millennials, young professionals, newly married couples, parents. Every CTA connects to WhatsApp +91 7889789814. Rita's 2 professional photos used in hero + about; no other faces except one reassuring family photo.

## User Personas
- Young professional (25–35) researching term insurance for the first time
- Newly married couple planning joint financial security
- Young parent securing children's education/lifestyle
- Parent of the advisor's generation verifying trustworthiness

## Core Requirements (static)
- Hero: "SECURE YOUR FAMILY'S TOMORROW, TODAY." + supporting line + 2 CTAs + Rita portrait + floating WhatsApp button
- About: "15+ YEARS OF TRUST. ONE SIMPLE PROMISE." + 4 stats (15+ years, 1000s families, personalized guidance, pan-India)
- Why Insurance: "YOUR FUTURE DESERVES A PLAN." + 4 numbered points + preparedness quote
- Why Rita: "INSURANCE, WITHOUT THE CONFUSION." + 4 benefits as numbered manifesto chapters
- Trust band (user follow-up: "people trust related something") — navy section, 3 principles
- Location: Kathua, J&K • pan-India + city pill CTAs (Jammu, Delhi, Mumbai, Bengaluru, Anywhere)
- Final CTA: "DON'T WAIT FOR THE 'RIGHT TIME'." + form (Name, Age, Mobile) → WhatsApp prefilled message
- Floating WhatsApp button; footer with disclaimer

## Architecture
- React (CRA + craco) + Tailwind + framer-motion + lenis; single-page landing (src/pages/Landing.jsx)
- Components: Nav, Hero, Marquee, About, WhyInsurance, WhyRita, TrustBand, LocationSec, FinalCta, Footer, WhatsAppFloat, motion helpers
- Photo constants in src/lib/site.js (HERO_PORTRAIT, ABOUT_PORTRAIT, FAMILY_PHOTO, WA links)
- Backend: untouched FastAPI template (no data storage needed; form goes to WhatsApp per user choice)

## Implemented (2026-09-09)
- Full landing page with all sections above; Fraunces/Plus Jakarta Sans/JetBrains Mono type system
- Kinetic masked line-by-line hero reveal; slow editorial marquee; hero parallax; framed About portrait with slow zoom-out; family photo band; city pill CTAs; WhatsApp form submit; floating WhatsApp pulse button; lenis smooth scroll with anchor handling; grain overlay; ErrorBoundary
- Fixed: masked-line whileInView never firing (overflow-hidden clipping broke IntersectionObserver) → variant propagation from unclipped parent
- Fixed: About portrait alignment (objectPosition 50% 26%, resting scale 1.12, gallery frame max-w-md)

## Backlog / P0-P2
- P0: Swap in any better-resolution version of Rita's photos if provided (constants in site.js)
- P1: Real client testimonials (waiting on genuine quotes — none invented)
- P1: SEO polish (OG image, sitemap) on request
- P2: Coverage gap calculator widget (design agent suggestion, not requested)
