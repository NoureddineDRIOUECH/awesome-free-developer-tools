# WebUtil — Free Online Developer Tools

**https://webutil.tech**

17 free online developer tools built with Astro, TailwindCSS v4, and TypeScript.  
100% client-side — no server uploads, no tracking.

## Stack

- **Framework:** Astro v6 (static site generation)
- **CSS:** TailwindCSS v4
- **Language:** TypeScript
- **Font:** Geist Variable (self-hosted)
- **Blog:** MDX via @astrojs/mdx
- **Sitemap:** @astrojs/sitemap
- **Analytics:** Vercel Analytics + Speed Insights
- **Deploy:** Vercel

## Commands

| Command | Action |
|---|---|
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build 33 static pages to `./dist/` |
| `pnpm preview` | Preview production build locally |

## Project Structure

```
src/
├── pages/
│   ├── index.astro                  # Homepage
│   ├── 404.astro                    # Custom 404
│   ├── faq.astro                    # FAQ
│   ├── contact.astro                # Contact
│   ├── privacy.astro                # Privacy policy
│   ├── terms.astro                  # Terms of service
│   ├── blog/
│   │   ├── index.astro              # Blog index
│   │   └── [...slug].astro          # Dynamic blog posts (8)
│   └── tools/
│       ├── index.astro              # Tool index + search
│       ├── [tool].astro             # Fallback (excluded all 17)
│       ├── json-formatter.astro     # 17 dedicated tool pages
│       └── ... (16 more)
├── layouts/
│   ├── BaseLayout.astro             # Main layout
│   ├── BlogLayout.astro             # Blog layout
│   └── ToolLayout.astro             # Tool fallback layout
├── components/
│   ├── SEOHead.astro                # Meta/OG/JSON-LD
│   ├── Navbar.astro / Footer.astro  # Shell
│   ├── ToolCard.astro               # Tool grid cards
│   ├── CategoryGrid.astro           # Category sections
│   └── AdSlot.astro                 # AdSense-ready
├── lib/
│   ├── tools.ts                     # Tool definitions (17)
│   └── tool-runtime.ts              # Client tool UIs
└── styles/
    └── global.css                   # Tailwind + fonts + tokens
```

## Lighthouse

Performance 100 · Accessibility 100 · Best Practices 96 · SEO 100

## License

MIT
