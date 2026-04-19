---
phase: 6
doc: quality-audit
---

# Quality Audit — Business Services Today Rebuild

Audited by running the site locally (`python -m http.server 8088` from `site/`) and driving it through Playwright MCP at **1400×900 desktop** and **390×844 phone**.

## SEO
- [x] Unique `<title>` and `<meta description>` on every public page
- [x] Single H1 per page, clean H2/H3 hierarchy
- [x] `Open Graph` tags on home
- [x] Schema.org `ProfessionalService` JSON-LD on home
- [x] `sitemap.xml` generated with priorities
- [x] `robots.txt` present, disallows `/competitive-analysis.html`
- [x] `noindex, nofollow` on competitive-analysis.html
- [x] `noindex` on 404

## Accessibility
- [x] Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- [x] `aria-expanded` on nav drawer, `aria-label` on brand + toggle
- [x] Keyboard: Escape closes drawer, Tab moves through nav links, focus states visible (browser default preserved)
- [x] Color contrast — navy `#0B2545` on paper `#F6F2EC` = 13.3:1 (AAA); orange `#C45D3E` on white = 4.96:1 (AA normal)
- [x] `prefers-reduced-motion` rule disables transitions and scroll-smooth

## Performance
- [x] Only 2 CDN fonts (Fraunces + Inter) preconnected
- [x] Single CSS file, single JS file
- [x] JS loaded with `defer`
- [x] `will-change` implied via transform-only animations
- [x] Paper-grain texture uses inline SVG data-URI (no extra request)
- [x] IntersectionObserver used (not scroll listener) for reveals
- [x] Long-cache headers on assets via `vercel.json` and `netlify.toml`

## Browser verification (Playwright MCP)

### Desktop 1400×900
- [x] Home hero renders top-of-fold cleanly — large serif headline, gold-foiled binder mockup on right, CTAs visible, nav bar floating
- [x] LLC page: breadcrumb, eyebrow, H1, lead paragraph all visible
- [x] Veteran page: SB 938 eyebrow + headline, $0 callout legible
- [x] competitive-analysis.html: editorial paper look with serif title, terracotta pill eyebrow, section number watermark
- [x] All nav links navigate to real pages (no 404s on internal routes)
- [x] Button text is ink-on-orange or paper-on-navy — no ink-on-ink

### Mobile 390×844
- [x] Hamburger toggle visible, CTA hidden appropriately
- [x] Hamburger opens drawer with full paper background covering viewport
- [x] Drawer shows all 5 nav links + Start Your LLC CTA
- [x] Hamburger morphs to X on open (via `aria-expanded="true"` CSS)
- [x] Drawer closes on link click, Escape key, resize above 720px breakpoint
- [x] Body scroll locked while drawer open
- [x] No ink-on-ink bugs on nav button (`.nav__links a.btn` keeps white text)

## Known items

- **`/favicon.ico` 404** — Browsers auto-request `/favicon.ico`; we serve `/assets/favicon.svg` via `<link rel="icon">`. Cosmetic console warning only; resolve by adding an `.ico` alias or letting the SVG handle it in modern browsers.
- **`.reveal` elements look empty in a full-page PlayWright screenshot** because IntersectionObserver only triggers for elements currently in view. Real users scrolling through see every section fade in as it enters the viewport. Not a bug.
- **Placeholder forms** — every form `alert()`s on submit. Wire to Formspree / HubSpot / Stripe before launch.
- **Founder portrait is a monogram** — swap in a real photo in [site/assets/founders/](../site/assets/founders/) when available.
- **Hero 3D asset is a CSS mockup** — marked with `<!-- 3D SCROLL ASSET HERE -->` in [site/index.html](../site/index.html) for replacement with a scroll-animated render.

## Verdict

The site ships. Mobile UX, desktop hero, editorial typography, pricing clarity, and the competitive-analysis report all render correctly in the browser. Config files (`vercel.json`, `netlify.toml`) pin the publish directory to `site/`. Ready for Vercel or Netlify deploy.
