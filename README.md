# Business Services Today — Premium Rebuild

A research-driven rebuild of [businessservicestoday.com](https://www.businessservicestoday.com/) for **The Whitener Group LLC**, the Houston-based Texas LLC formation and Corporate Identity Binder firm.

## Stack

- Static HTML / CSS / vanilla JavaScript (no framework)
- Google Fonts: Fraunces (serif) + Inter (sans)
- Paper-grain SVG texture, scroll-reveal animations, mobile drawer nav
- Deploy-ready for Vercel (`vercel.json`) or Netlify (`netlify.toml`)

## Project structure

```
.
├── netlify.toml                 Pins publish dir to site/, caches assets
├── vercel.json                  Same, for Vercel
├── README.md
├── research/
│   ├── 01-client-brand.md       Brand extraction from current site
│   ├── 02-competitor-analysis.md  Top-10 scoreboard + deep profiles
│   ├── 03-build-brief.md        Master design + content brief
│   └── 04-quality-audit.md      Audit results
└── site/                        Publish directory
    ├── index.html               Home
    ├── llc.html                 Texas LLC formation + pricing
    ├── veteran.html             SB 938 veteran pathway
    ├── grants.html              300+ grant database lead magnet
    ├── about.html               Whitener Group story
    ├── contact.html             Address, phone, message form
    ├── 404.html
    ├── competitive-analysis.html   Client-only report (noindex)
    ├── robots.txt               Disallows the analysis report
    ├── sitemap.xml
    ├── css/styles.css
    ├── js/main.js
    └── assets/
        ├── favicon.svg
        └── logo/                Downloaded client graphics
```

## Run locally

```bash
cd site
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy

### Vercel
```bash
vercel deploy           # preview
vercel deploy --prod    # production
```
`vercel.json` pins `outputDirectory: "site"` so you can run from repo root.

### Netlify
Drag the repo to Netlify or connect via Git — `netlify.toml` handles the rest.

## Known placeholders

- **Hero 3D binder asset.** The homepage includes a CSS binder mockup as a placeholder. Replace with a scroll-animated 3D render or video — see the `<!-- 3D SCROLL ASSET HERE -->` comment in `site/index.html`.
- **Forms.** All forms currently `alert()` on submit. Wire to Formspree, HubSpot, Wave, or your backend of choice.
- **Founder photography.** The `story__attribution-portrait` uses a monogrammed placeholder. Swap in a real family portrait in `site/assets/founders/` when available.
- **Stat numbers.** "1,200+ filings" and "11 years" are realistic defaults; confirm with client and update `[data-count]` attributes.

## Competitive analysis report

`site/competitive-analysis.html` is a client-only, PDF-ready report with `<meta name="robots" content="noindex, nofollow">`. It's also blocked in `robots.txt`. Share the URL directly with the client.

To export to PDF: open in Chrome, Print → Save as PDF, A4 format, no margins, background graphics enabled.
