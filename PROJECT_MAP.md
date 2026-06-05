# WebUtil — Project Map

**URL:** https://webutil.io  
**Stack:** Astro v6 + TailwindCSS v4 + TypeScript  
**Deploy:** Static site to Vercel  
**Build:** 33 pages, `pnpm build`

---

## Pages (33 total)

### Tools (18 pages)
| Route | Description | Status |
|---|---|---|
| `/tools` | Tool index with search + category filter | Live |
| `/tools/json-formatter` | JSON format, validate, beautify | Live, dedicated page |
| `/tools/base64-encoder` | Base64 encode/decode | Live, dedicated page |
| `/tools/url-encoder` | URL encode/decode | Live, dedicated page |
| `/tools/uuid-generator` | UUID v4 generator | Live, dedicated page |
| `/tools/jwt-decoder` | JWT decode + inspect | Live, dedicated page |
| `/tools/hash-generator` | MD5/SHA1/SHA256/SHA512 | Live, dedicated page |
| `/tools/password-generator` | Secure random passwords | Live, dedicated page |
| `/tools/html-entities` | HTML entity encode/decode | Live, dedicated page |
| `/tools/lorem-ipsum` | Lorem ipsum generator | Live, dedicated page |
| `/tools/yaml-converter` | YAML ↔ JSON converter | Live, dedicated page |
| `/tools/color-converter` | HEX ↔ RGB ↔ HSL | Live, dedicated page |
| `/tools/case-converter` | Text case converter | Live, dedicated page |
| `/tools/markdown-preview` | Markdown editor + preview | Live, dedicated page |
| `/tools/text-diff` | Text diff checker | Live, dedicated page |
| `/tools/image-converter` | Image format converter | Live, dedicated page |
| `/tools/sql-formatter` | SQL formatter | Live, dedicated page |
| `/tools/xml-formatter` | XML formatter | Live, dedicated page |

### Blog (9 pages)
| Route | Topic | Status |
|---|---|---|
| `/blog` | Blog index | Live |
| `/blog/json-formatting-guide` | JSON formatting guide | Live |
| `/blog/common-json-errors` | Common JSON errors | Live |
| `/blog/url-encoding-decoding` | URL encoding/decoding | Live |
| `/blog/base64-encoding-methods` | Base64 encoding | Live |
| `/blog/password-security-best-practices` | Password security | Live |
| `/blog/color-converter-guide` | Color conversion guide | Live |
| `/blog/uuid-guide` | UUID guide | Live |
| `/blog/online-tools-security` | Online tool security | Live |

### Static Pages (5)
| Route | Description |
|---|---|
| `/` | Homepage with hero + features + tools grid |
| `/faq` | FAQ for SEO |
| `/contact` | Contact form placeholder |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/404` | Custom 404 page |

---

## Architecture

### Layouts
- **BaseLayout.astro** — Main layout, `<html lang="en">`, SEOHead, Navbar, Footer, Vercel Analytics
- **ToolLayout.astro** — Tool page wrapper (used only by `[tool].astro` fallback)
- **BlogLayout.astro** — Blog post wrapper

### Components
- **SEOHead.astro** — Meta tags, OG/Twitter cards, canonical (no double slashes), JSON-LD, theme-color
- **Navbar.astro** — Sticky nav, category dropdown
- **Footer.astro** — Links, copyright
- **ToolCard.astro** — Tool card with category, icon, description, link
- **CategoryGrid.astro** — Category section grid
- **AdSlot.astro** — AdSense-ready placeholder (banner, rectangle, sidebar, in-article)

### Data Layer
- `src/lib/tools.ts` — 17 tools across 8 categories, slug→id mapping, related tools
- `src/lib/tool-runtime.ts` — 15 client-side tool UIs (for `[tool].astro` fallback, now unused)

### Style
- `src/styles/global.css` — TailwindCSS v4, `@font-face` for Geist Variable, design tokens
  - Background: `#0c141f`, Primary: `#7e51e0`, Surface: `#1a2533`
  - Roundness: 8px via `container-main` max-width

### SEO per tool page
- Unique `<title>` + `<meta name="description">`
- OpenGraph + Twitter Card tags
- 3x JSON-LD: SoftwareApplication + BreadcrumbList + FAQPage
- `<link rel="canonical">`
- `robots.txt` allows all, points to sitemap
- `sitemap-index.xml` (auto-generated, filters `/404`)

---

## Lighthouse Scores
| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 100 |

---

## Content Strategy

### Tool Categories (8)
1. **Formatters** (3): JSON, SQL, XML
2. **Encoders & Decoders** (3): Base64, URL, HTML Entities
3. **Generators** (3): UUID, Password, Lorem Ipsum
4. **Converters** (2): YAML, Color
5. **Text Tools** (3): Case Converter, Markdown Preview, Text Diff
6. **Image Tools** (1): Image Converter
7. **Security** (2): Hash Generator, JWT Decoder
8. **Web Tools** (0): unfilled category

### Blog-to-Tool Cross-linking
- 8 blog posts linked to 7 tools via explicit slug→id mapping
- 7 tool pages with "Related Guide" sections
- Tools without matching blog posts: hash-generator, html-entities, lorem-ipsum, yaml-converter, case-converter, markdown-preview, text-diff, image-converter, sql-formatter, xml-formatter

---

## Production Setup

### Vercel
- Vercel Analytics + Speed Insights scripts in BaseLayout (no-op on non-Vercel hosts)
- Custom domain: `webutil.io`
- Build command: `astro build` (33 pages)

### AdSense
- AdSlot component ready with 4 formats: banner, rectangle, sidebar, in-article
- `<ins>` tags with placeholder `data-ad-client` — replace `ca-pub-XXXXXXXXX` before going live

### Assets
- `/public/favicon.ico` + `.svg`
- `/public/og-image.svg` (1200×630, SVG)
- `/public/robots.txt`
- `/public/fonts/GeistVariableVF.woff2` (69 KB, self-hosted)

---

## Deployment Checklist

- [x] All 17 tools have dedicated SEO pages
- [x] Lighthouse 100/100/96/100
- [x] No double slashes in canonical URLs
- [x] Self-hosted font (no Google Fonts dependency)
- [x] Vercel Analytics integrated
- [x] robots.txt + sitemap
- [x] Custom 404 page
- [x] Blog cross-linked to tools
- [ ] **Replace `ca-pub-XXXXXXXXX`** with real AdSense client ID (AdSlot + tool pages)
- [ ] **Set custom domain** `webutil.io` DNS on Vercel
- [ ] **Submit sitemap** to Google Search Console
- [ ] **Submit sitemap** to Bing Webmaster Tools
- [ ] **Write 10+ more blog posts** covering uncovered tools
- [ ] **Add more tools** (regex tester, CSS gradient generator, cron parser, etc.)
- [ ] **Enable Cloudflare** for CDN + DDoS protection + caching

---

## Future Growth Plan (Traffic → AdSense → Scale)

### Phase 1: Indexing & Traffic (Now–Month 2)
1. Deploy to Vercel with custom domain
2. Submit sitemap to Google Search Console + Bing
3. Add 8 blog posts for uncovered tools (hash, html-entities, lorem-ipsum, yaml, case-converter, markdown, text-diff, image-converter, sql-formatter, xml-formatter)
4. Basic backlinks: GitHub, Dev.to cross-post, Reddit (r/webdev, r/javascript), Hacker News
5. Internal linking: ensure every tool page links to 3+ related tools

### Phase 2: Traffic Growth (Month 2–4)
1. Expand to 50+ tools (fill "Web Tools" category + new categories)
2. Add weekly blog posts (programming tutorials, tool deep-dives)
3. Enable AdSense after traffic validation (50+ daily visitors)
4. Optimize high-traffic tool pages with more content

### Phase 3: Monetization (Month 4+)
1. AdSense banner + in-article ads live
2. Consider premium features (bulk processing, export formats)
3. A/B test ad placements (AdSlot configs)
4. SEO refresher on top-10 ranking pages every quarter

---

## Commands
| Command | Action |
|---|---|
| `pnpm dev` | Start dev server on port 4321 |
| `pnpm build` | Build 33 static pages to `dist/` |
| `pnpm preview` | Preview production build locally |
| `npx lighthouse http://localhost:4321/ --chrome-flags="--headless=new --no-sandbox" --output=json` | Run Lighthouse audit |
