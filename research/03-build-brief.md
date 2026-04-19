---
phase: 3
doc: build-brief
---

# Business Services Today — Website Build Brief

## Executive Summary

BST's existing Weebly site buries its biggest advantages — the physical Corporate Identity Binder, Houston family-run service, and veteran SB 938 specialization — under a flat list of services and decade-old templates. The rebuild positions BST as the **editorial, Texas-first alternative** to ZenBusiness / LegalZoom: warm paper tones, deep navy + gold, serif headlines, and photography of the actual binder.

---

## 1. Design Direction

### Color Palette

| Role | Hex | Use |
|------|-----|-----|
| Primary (Ink) | `#0B2545` | Headlines, nav, primary body text |
| Gold | `#C9962B` | Accent borders, price tags, binder motifs |
| Texas Orange | `#C45D3E` | Primary CTAs, underlines on hover |
| Paper | `#F6F2EC` | Page background, warm editorial feel |
| Cream | `#FBF8F2` | Card backgrounds |
| Dusk | `#1A1F26` | Body text |
| Stone | `#6F6A62` | Secondary text |
| Hairline | `#E5DFD3` | Dividers |

### Typography

- **Headings:** `Fraunces` — variable serif, editorial authority, pairs with the physical-binder premium positioning.
- **Body:** `Inter` — modern sans-serif for strong legibility at small sizes.
- **Numerals:** Tabular `Inter` variant inside pricing cards to keep digits aligned.

### Photography & Assets

- Flat-lay photography of the actual Corporate Identity Binder
- Family / team portrait
- Texas Capitol or Houston skyline as atmospheric secondary imagery
- Paper-grain SVG texture overlay on hero + major section backgrounds
- Subtle gold foil motif on binder-related callouts

### Animation

- Scroll-triggered fade + slide on all section entrances (GSAP + ScrollTrigger)
- Parallax depth on the hero binder shot
- Number roll-up on stats (binders shipped, years in Houston, SB 938 filings completed)
- Hover: underline ink draw on all CTAs; lift + shadow on pricing cards
- `prefers-reduced-motion` respected

### What to AVOID

- Generic SaaS teal/mint palette — every competitor does this
- Illustration-first hero — we have a REAL product to show
- Dense legal-site typography (Northwest, Wolters look)
- Trust badges salad in the footer — we earn trust with photography and place
- Em-dashes as sentence openers (editorial trap)

---

## 2. Site Architecture

```
/
├── /                       Home — premium landing with 3-pillar services
├── /llc                    Texas LLC Formation (standard)
├── /veteran                Texas Veterans SB 938 (free filing)
├── /grants                 Grant Database (300+ grants, lead magnet)
├── /about                  The Whitener Group story
├── /contact                Office visit, phone, form
└── /competitive-analysis   Client-only report (noindex)
```

### Navigation

- Logo (left)
- Services dropdown: LLC Formation | Veteran LLC | Grant Database
- About
- Contact
- **Primary CTA (right):** "Start Your LLC" — burnt orange, pattern-break

### CTA Strategy

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Home | Start Your LLC ($558) | Download Grant List |
| LLC | Order Standard Binder | Call Houston Office |
| Veteran | Claim SB 938 Free Filing | Download Veteran's Guide |
| Grants | Get the 300+ Grant List | Book a Consultation |
| About | Visit Our Houston Office | Call 281-972-8472 |
| Contact | Send a Message | Call Now |

---

## 3. Content Framework

### Homepage Headline — 3 Options

1. **"Your Texas business, on paper — and in a binder on your shelf."**
   *(Ownership + tangibility — our #1 moat)*

2. **"Houston's boutique alternative to the LLC filing assembly line."**
   *(Local + positioning against SaaS directly)*

3. **"From Secretary of State to shelf-ready — your business, filed and bound."**
   *(Process + product)*

**Recommendation:** Option 1. It names the product, the place, and the premium feel in one line.

### Homepage Subheadline

"We file your LLC or C-Corp with the Texas Secretary of State, deliver a Corporate Identity Binder of every document your business needs, and stand behind the annual compliance paperwork for years to come."

### Value Proposition — Three Pillars

1. **FILED.** Every Texas SoS document prepared, filed, and tracked.
2. **BOUND.** A real Corporate Identity Binder in your hands — EIN, operating agreement, compliance docs, the works.
3. **BACKED.** Houston-based service that picks up the phone, year after year.

### Section-by-Section Homepage

1. **Hero** — Headline, sub, primary + secondary CTA, 3D placeholder for scroll-animated binder asset
2. **Three Pillars** — Filed / Bound / Backed with icons
3. **Our Binders** — Standard ($558) vs Elite ($750) side-by-side pricing cards
4. **Veteran Pathway** — SB 938 dedicated band with free-filing callout
5. **Grant Database** — 300+ grants teaser, email gate for PDF
6. **The Whitener Group Story** — Houston family-run badge, office address
7. **Proof** — Testimonials (placeholder), Trustpilot stars, BBB badge
8. **FAQ** — Texas SoS fees, binder turnaround, refund policy, sister companies
9. **Final CTA** — Large band with phone + "Start Your LLC" button
10. **Footer** — Full nav, sister companies ecosystem, address, hours

### SEO Keyword Targets

Primary: `texas llc formation houston`, `corporate identity binder texas`, `texas veteran llc free sb 938`
Secondary: `houston llc filing service`, `texas c-corp formation`, `texas small business grants list`
Long-tail: `how to file texas llc veteran honorable discharge`, `texas llc operating agreement template`, `300 corporate grants list nonprofit`

---

## 4. Conversion Playbook

- **Primary conversion:** Standard Binder purchase ($558) or Veteran BIB ($240)
- **Lead capture:** Grant Database PDF gate (email + optional phone)
- **Secondary conversion:** Call Houston office or book consultation

### Social Proof Plan

- Testimonial band with names + company + city (ask client for 3-5)
- "X binders shipped from Houston since 2015" stat (need exact number)
- BBB accreditation badge (if held — confirm with client)
- Sister companies band — credible ecosystem signal

### Trust Signal Checklist

- [ ] Physical Houston address in nav + footer
- [ ] Phone number clickable, in nav
- [ ] Real team photo above the fold on About
- [ ] Binder flat-lay photography on Home + LLC pages
- [ ] Texas SoS reference links on relevant pages
- [ ] Veteran DD214 / SB 938 documentation linked
- [ ] Privacy policy + Terms pages (stubs for launch)

---

## 5. Tech Stack

- **Static HTML / CSS / vanilla JS** (portable, fast, no framework lock-in)
- **GSAP + ScrollTrigger** via CDN for scroll animations
- **Fraunces + Inter** via Google Fonts (preloaded)
- **Paper grain SVG filter** for background texture
- **`vercel.json`** pinning `"outputDirectory": "site"` for Vercel deploy
- `prefers-reduced-motion` + mobile-first responsive

---

## 6. What We're Leaving as Placeholders

- Hero 3D binder scroll asset (user will generate separately)
- Founder / family portrait photo
- Real binder flat-lay photography
- Testimonial copy (need 3-5 from client)
- Stripe / payment provider endpoint (checkout buttons link to placeholder)

---

## 7. Ready to Build?

**Decisions that need confirmation:**

1. Color palette (navy / gold / burnt orange on warm paper) — approve or adjust?
2. Homepage headline Option 1 ("Your Texas business, on paper — and in a binder on your shelf.") — approve or swap?
3. Three-pillar framing (Filed / Bound / Backed) — approve?
4. Site architecture (6 main pages + client-only analysis) — approve?

**Once approved, build time:** ~30-40 min to full site with all pages, animations, and PDF-ready competitive-analysis report.
