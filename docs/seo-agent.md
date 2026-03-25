# 🔍 AsyncOwl — SEO Optimization Prompt
## Karan Singh Sisodia's Portfolio Website

> **How to use this prompt:** Feed this to your AI coding agent AFTER the main portfolio has been built using the AsyncOwl Agentic Prompt. This prompt handles all SEO layers — technical, on-page, structured data, social graph, and performance signals — specifically tuned for a personal engineering portfolio on Next.js 14 with ISR.

---

## AGENT IDENTITY & MISSION

You are an elite SEO engineering agent. Your task is to fully optimize the personal portfolio website of **Karan Singh Sisodia** (screen name: **@AsyncOwl**) for maximum search engine visibility, discoverability, and rich result eligibility.

The site is built on **Next.js 14 App Router with ISR**, deployed on **Vercel**. Every SEO implementation must be idiomatic Next.js — using the Metadata API, `generateMetadata()`, structured data via JSON-LD, `next/image`, `next/font`, and `sitemap.ts` / `robots.ts` file conventions. No third-party SEO libraries unless explicitly specified.

**Primary SEO goal:** When someone searches for "Karan Singh Sisodia", "AsyncOwl developer", "AI software engineer Chandigarh", or "Technical Lead IoT engineer India" — this site should rank on page 1.

---

## TARGET AUDIENCE & SEARCH INTENT

Understand who is searching for Karan and what they want to find:

| Searcher Type | Likely Query | Intent |
|---|---|---|
| Recruiters / HR | "Karan Singh Sisodia software engineer" | Find his experience & contact |
| Tech hiring managers | "AsyncOwl GitHub developer" | Validate his open source work |
| Startup founders | "AI IoT engineer India hire" | Assess fit for a role |
| Collaborators | "Node-RED Atomberg integration developer" | Find the project author |
| Conference organizers | "Karan Singh Sisodia technical lead speaker" | Contact for talks |
| Industry peers | "AsyncOwl developer portfolio" | See his work & philosophy |

The SEO strategy must serve **all six** of these searcher types.

---

## KEYWORD STRATEGY

### Primary Keywords (High Priority — use in title, H1, meta description)
```
Karan Singh Sisodia
Karan Singh Sisodia software engineer
AsyncOwl developer
Karan Sisodia Technical Lead
```

### Secondary Keywords (use in body copy, headings, alt text)
```
AI software engineer Chandigarh India
IoT engineer India
software architect Node-RED
ESP32 firmware developer
agentic AI systems engineer
full stack developer India
technical lead LuminoGuru
Alfa Intellitech software architect
sisodiakaran GitHub
```

### Long-Tail Keywords (use in project descriptions, skills section, blog posts)
```
Node-RED Atomberg smart fan integration
WLED ESP8266 LED strip controller developer
software engineer bridging hardware software IoT
16 years software engineering experience India
AI automation engineer Chandigarh
Python IoT firmware developer portfolio
Neo4j big data engineer India
Rajasthan Technical University alumnus software engineer
```

### Semantic / LSI Keywords (support topical authority)
```
embedded systems developer, smart home automation,
machine learning engineer, agentic workflows,
CI/CD DevOps India, VOIP Twilio developer,
Android developer Java, PHP Python full stack,
CAD CAM software integration, open source contributor
```

---

## TECHNICAL SEO IMPLEMENTATION

### 1. Root Layout Metadata (`app/layout.tsx`)

Implement the base metadata object. Every field is required:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────
  metadataBase: new URL('https://asyncowl.dev'), // replace with actual domain
  title: {
    default: 'Karan Singh Sisodia (@AsyncOwl) — AI & Software Engineering',
    template: '%s | Karan Singh Sisodia',
  },
  description:
    'Personal portfolio of Karan Singh Sisodia (@AsyncOwl) — Technical Lead with 16+ years bridging AI, IoT, and full-stack engineering. Based in Chandigarh, India.',
  keywords: [
    'Karan Singh Sisodia',
    'AsyncOwl',
    'AI software engineer',
    'IoT developer India',
    'Technical Lead Chandigarh',
    'Node-RED developer',
    'ESP32 firmware engineer',
    'software architect India',
    'sisodiakaran',
  ],
  authors: [{ name: 'Karan Singh Sisodia', url: 'https://asyncowl.dev' }],
  creator: 'Karan Singh Sisodia',
  publisher: 'Karan Singh Sisodia',
  category: 'Technology',

  // ── Canonical & Alternates ────────────────────────────────────────
  alternates: {
    canonical: 'https://asyncowl.dev',
    languages: {
      'en-IN': 'https://asyncowl.dev',
      'en-US': 'https://asyncowl.dev',
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────
  openGraph: {
    type: 'profile',
    url: 'https://asyncowl.dev',
    title: 'Karan Singh Sisodia (@AsyncOwl) — AI & Software Engineering',
    description:
      'Technical Lead with 16+ years bridging AI, IoT, and full-stack engineering. Open source contributor. Based in Chandigarh, India.',
    siteName: 'Karan Singh Sisodia — AsyncOwl',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',       // 1200×630px — see OG Image spec below
        width: 1200,
        height: 630,
        alt: 'Karan Singh Sisodia — @AsyncOwl — AI & Software Engineer',
        type: 'image/png',
      },
    ],
    // Profile-specific OG tags
    firstName: 'Karan',
    lastName: 'Singh Sisodia',
    username: 'AsyncOwl',
    gender: 'male',
  },

  // ── Twitter / X Card ─────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@sisodiakaran',
    creator: '@sisodiakaran',
    title: 'Karan Singh Sisodia (@AsyncOwl) — AI & Software Engineer',
    description:
      'Technical Lead • 16+ yrs • AI, IoT, Full-Stack • Chandigarh, India',
    images: ['/og-image.png'],
  },

  // ── Robots ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Verification ─────────────────────────────────────────────────
  // Add these after verifying in respective consoles
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
    // yandex: 'REPLACE_IF_NEEDED',
    // bing: 'REPLACE_IF_NEEDED',
  },

  // ── App / PWA ─────────────────────────────────────────────────────
  applicationName: 'AsyncOwl Portfolio',
  appleWebApp: {
    capable: true,
    title: 'AsyncOwl',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
```

---

### 2. Sitemap (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asyncowl.dev'
  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#timeline`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: now,
      changeFrequency: 'weekly',   // GitHub data revalidates hourly
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
```

---

### 3. Robots (`app/robots.ts`)

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'GPTBot',       // Allow AI crawlers for visibility in AI search
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
    ],
    sitemap: 'https://asyncowl.dev/sitemap.xml',
    host: 'https://asyncowl.dev',
  }
}
```

---

### 4. Structured Data — JSON-LD (`components/seo/JsonLd.tsx`)

Inject all schemas as a Server Component in `app/layout.tsx`. Use `<script type="application/ld+json">`.

#### Schema 1 — Person (most important for personal portfolio)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://asyncowl.dev/#person",
  "name": "Karan Singh Sisodia",
  "alternateName": "AsyncOwl",
  "url": "https://asyncowl.dev",
  "image": {
    "@type": "ImageObject",
    "url": "https://asyncowl.dev/og-image.png",
    "width": 1200,
    "height": 630
  },
  "jobTitle": "Technical Lead",
  "worksFor": {
    "@type": "Organization",
    "name": "LuminoGuru Pvt Ltd",
    "url": "https://luminoguru.com"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Rajasthan Technical University",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kota",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chandigarh",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "contact",
    "url": "https://asyncowl.com/#contact"
  },
  "sameAs": [
    "https://github.com/sisodiakaran",
    "https://www.linkedin.com/in/karansinghsisodia",
    "https://twitter.com/sisodiakaran"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Internet of Things",
    "Software Architecture",
    "Embedded Systems",
    "Node-RED",
    "Python",
    "JavaScript",
    "ESP32",
    "Agentic AI Systems",
    "Big Data",
    "Neo4j",
    "VOIP",
    "Android Development"
  ],
  "knowsLanguage": [
    { "@type": "Language", "name": "Hindi" },
    { "@type": "Language", "name": "Punjabi" },
    { "@type": "Language", "name": "English" },
    { "@type": "Language", "name": "Portuguese" }
  ],
  "description": "AI & Software Engineering Professional with 16+ years of experience bridging software and hardware. Technical Lead at LuminoGuru Pvt Ltd. Open source contributor. Known online as @AsyncOwl."
}
```

#### Schema 2 — WebSite (enables sitelinks search box in Google)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://asyncowl.dev/#website",
  "url": "https://asyncowl.dev",
  "name": "Karan Singh Sisodia — AsyncOwl",
  "description": "Personal portfolio of Karan Singh Sisodia (@AsyncOwl), AI & Software Engineering Professional.",
  "author": { "@id": "https://asyncowl.dev/#person" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://asyncowl.dev/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

#### Schema 3 — ProfilePage (new 2023 schema, ideal for personal portfolios)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2025-01-01T00:00:00Z",
  "dateModified": "2026-01-01T00:00:00Z",
  "url": "https://asyncowl.dev",
  "name": "Karan Singh Sisodia (@AsyncOwl) — Portfolio",
  "mainEntity": { "@id": "https://asyncowl.dev/#person" },
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "node-red-contrib-atomberg",
      "description": "Node-RED integration for Atomberg smart fans",
      "url": "https://github.com/sisodiakaran/node-red-contrib-atomberg",
      "author": { "@id": "https://asyncowl.dev/#person" },
      "programmingLanguage": "JavaScript"
    },
    {
      "@type": "CreativeWork",
      "name": "WLED Fork",
      "description": "Control WS2812B LEDs with ESP8266/ESP32 over WiFi",
      "url": "https://github.com/sisodiakaran/WLED",
      "author": { "@id": "https://asyncowl.dev/#person" },
      "programmingLanguage": "C++"
    }
  ]
}
```

#### Schema 4 — BreadcrumbList (improves SERP appearance)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://asyncowl.dev"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://asyncowl.dev/#projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://asyncowl.dev/#contact"
    }
  ]
}
```

**Implementation in `app/layout.tsx`:**
```tsx
// components/seo/JsonLd.tsx — Server Component
export function JsonLd() {
  const schemas = [personSchema, websiteSchema, profilePageSchema, breadcrumbSchema]
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
```

---

### 5. On-Page SEO — HTML Semantics

The agent must enforce correct semantic HTML throughout all components:

#### Heading Hierarchy (strict — only one H1 per page)
```
H1: "Karan Singh Sisodia"           ← Hero section, real name, singular
  H2: "About"                       ← Section headings
  H2: "Career Timeline"
  H2: "Skills & Stack"
  H2: "Projects"
  H2: "Ask AsyncOwl"
  H2: "Get in Touch"
    H3: Individual job titles       ← Inside timeline
    H3: Skill category names        ← Inside skills matrix
    H3: Project names               ← Inside project cards
```

#### Semantic Elements Required
```html
<header>       ← Navbar + hero
<main>         ← All content sections
<section>      ← Each named section (with id="" for anchor links)
<article>      ← Each project card, each timeline entry
<nav>          ← Navigation links
<footer>       ← Footer with social links
<address>      ← Contact information block
<time>         ← All dates in timeline (with datetime attribute)
<mark>         ← Highlighted keywords in about section (use sparingly)
```

#### Example — Timeline Entry with Correct Semantics
```tsx
<article itemScope itemType="https://schema.org/WorkExperience">
  <h3 itemProp="jobTitle">Technical Lead</h3>
  <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
    <span itemProp="name">LuminoGuru Pvt Ltd</span>
  </span>
  <time dateTime="2025-08" itemProp="startDate">August 2025</time>
  <span> – Present</span>
  <address itemProp="jobLocation">Chandigarh, India</address>
</article>
```

#### Example — Project Card
```tsx
<article itemScope itemType="https://schema.org/SoftwareSourceCode">
  <h3 itemProp="name">node-red-contrib-atomberg</h3>
  <meta itemProp="programmingLanguage" content="JavaScript" />
  <meta itemProp="author" content="Karan Singh Sisodia" />
  <p itemProp="description">Node-RED integration for Atomberg smart fans</p>
  <a href="https://github.com/sisodiakaran/node-red-contrib-atomberg"
     itemProp="codeRepository"
     rel="noopener noreferrer"
     aria-label="View node-red-contrib-atomberg on GitHub">
    View on GitHub
  </a>
</article>
```

---

### 6. Image SEO (`next/image` + Alt Text Rules)

Every image must follow these rules:

| Image | Alt Text | Priority | Size |
|---|---|---|---|
| OG / hero image | `"Karan Singh Sisodia — @AsyncOwl — AI & Software Engineer, Chandigarh"` | `true` (above fold) | 1200×630 |
| Owl logo/avatar | `"AsyncOwl — Karan Singh Sisodia's developer avatar"` | `true` | 80×80 |
| Project screenshots | `"[Project name] by Karan Singh Sisodia — [brief description]"` | `false` | 800×450 |
| Skills icons | `aria-hidden="true"` (decorative) | `false` | 32×32 |

**OG Image Spec (`/public/og-image.png`):**
- Dimensions: exactly **1200 × 630px**
- Must contain: Full name "Karan Singh Sisodia", handle "@AsyncOwl", current title "Technical Lead", location "Chandigarh, India"
- Brand colors: dark background `#2E294E`, accent `#D90368`, text `#F1E9DA`
- Generate dynamically using `app/opengraph-image.tsx` with Next.js OG image generation:

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Karan Singh Sisodia — @AsyncOwl — AI & Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: '#2E294E',
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', justifyContent: 'center',
        padding: '80px',
        fontFamily: 'monospace',
      }}>
        <div style={{ color: '#FFD400', fontSize: 20, marginBottom: 16 }}>
          @AsyncOwl
        </div>
        <div style={{ color: '#F1E9DA', fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Karan Singh Sisodia
        </div>
        <div style={{ color: '#D90368', fontSize: 28, marginTop: 20 }}>
          Technical Lead · AI & Software Engineering
        </div>
        <div style={{ color: '#F1E9DA', fontSize: 20, marginTop: 12, opacity: 0.7 }}>
          Chandigarh, India · 16+ Years Experience
        </div>
      </div>
    ),
    { ...size }
  )
}
```

---

### 7. Performance SEO (Core Web Vitals)

Google uses CWV as a ranking signal. All targets are hard requirements:

| Metric | Target | Next.js Implementation |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | `priority` on hero image, `next/font` preload, no render-blocking CSS |
| **FID / INP** (Interaction to Next Paint) | < 200ms | Minimize Client Component JS, defer non-critical scripts |
| **CLS** (Cumulative Layout Shift) | < 0.1 | `width`+`height` on all images, `next/font` for zero FOUT, no dynamic ads |
| **TTFB** (Time to First Byte) | < 800ms | ISR serves pre-rendered HTML from CDN edge — this is free with Vercel |
| **FCP** (First Contentful Paint) | < 1.8s | Preconnect to Google Fonts (though next/font eliminates this), defer animations |

#### Required `<head>` Hints
Add these to `app/layout.tsx` inside the metadata or as a custom `<head>` component:
```tsx
// Resource hints — add to <head> via Next.js metadata
export const metadata = {
  // ... existing metadata
  other: {
    'link': [
      '<https://asyncowl.dev>; rel="preconnect"',
      '<https://github.com>; rel="preconnect"',    // for GitHub API calls
    ]
  }
}
```

#### next.config.ts — Security & Performance Headers
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security (also a ranking signal via HTTPS enforcement)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",  // needed for JSON-LD
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://api.openai.com https://api.github.com",
            ].join('; ')
          },
          // Caching — ISR pages served from CDN
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },

  // Compress output
  compress: true,

  // Enable ISR
  experimental: {
    staleTimes: { dynamic: 30, static: 180 },
  },
}
```

---

### 8. URL Strategy (Multi-Page Architecture)

The site uses route-first navigation for crawlability. Core SEO URLs are:

| Page | Canonical URL |
|---|---|
| Home | `https://asyncowl.com/` |
| About | `https://asyncowl.com/about` |
| Timeline | `https://asyncowl.com/timeline` |
| Skills | `https://asyncowl.com/skills` |
| Projects | `https://asyncowl.com/projects` |
| Contact | `https://asyncowl.com/contact` |

Anchor IDs may still exist for UX, but they are secondary and must not be primary canonical targets.

---

### 9. Link Strategy

#### Internal Links
- Navbar links to route URLs (`/about`, `/timeline`, `/skills`, `/projects`, `/contact`)
- Homepage uses summary cards with descriptive links to route pages
- Route pages include contextual cross-links (for example: About -> Timeline, Projects -> Skills)

#### External Links — Must have correct attributes
```tsx
// All external links must have:
<a
  href="https://github.com/sisodiakaran"
  rel="noopener noreferrer"   // security
  target="_blank"
  aria-label="Karan Singh Sisodia on GitHub (@sisodiakaran)"
>
  GitHub
</a>

// LinkedIn — rel="me" signals identity to search engines
<a
  href="https://linkedin.com/in/karansinghsisodia"
  rel="me noopener noreferrer"
  target="_blank"
  aria-label="Karan Singh Sisodia on LinkedIn"
>
  LinkedIn
</a>

// Twitter/X — rel="me" for identity verification
<a
  href="https://twitter.com/sisodiakaran"
  rel="me noopener noreferrer"
  target="_blank"
  aria-label="Karan Singh Sisodia on Twitter/X (@sisodiakaran)"
>
  @sisodiakaran
</a>
```

The `rel="me"` attribute on social profile links helps Google confirm Karan's identity across platforms — critical for personal portfolio SEO.

---

### 10. Canonical & Duplicate Content

```tsx
// app/page.tsx
export const metadata = {
  alternates: {
    canonical: 'https://asyncowl.com',
  },
}
```

- Canonical rule: dedicated route pages are canonical for section-depth intent.
- Homepage must remain a distinct summary experience (teasers + "read more" links), not a full duplicate of all route page content.
- The site must redirect `www.asyncowl.com` → `asyncowl.com` (configure in Vercel dashboard)
- The site must redirect `http://` → `https://` (Vercel handles this automatically)
- If the domain is ever changed, update `metadataBase` in `layout.tsx` and all JSON-LD `@id` URLs

---

## ON-PAGE CONTENT SEO

### Hero Section Copy
The H1 and subtitle are the most important on-page SEO elements. Use this exact copy (agent must not change it):

```
H1:       Karan Singh Sisodia
Subtitle: @AsyncOwl · Technical Lead · AI & Software Engineering
Body:     16+ years bridging software and hardware. Building intelligent systems,
          leading teams, and shipping IoT solutions from Chandigarh, India.
```

This copy hits: full name (primary keyword), screen name, current title, core skills, location — all above the fold.

### About Section Copy
Must naturally include these keyword phrases without keyword stuffing:
- "AI and software engineering"
- "IoT and embedded systems"
- "software architect"
- "Node-RED" and "ESP32"
- "Chandigarh, India"
- "@AsyncOwl" or "AsyncOwl"

### Skills Section — SEO-Friendly Labels
Each skill badge must render as visible text (not just icons), because crawlers read text. The section heading must be:
```html
<h2>Skills & Technology Stack</h2>
```
Not just "Skills" — the longer form has more keyword value.

### Projects Section
Each project card must have:
- A descriptive `<h3>` with the project name
- A `<p>` description that naturally includes technology keywords
- A visible language/stack badge rendered as text
- A link to the GitHub repo with descriptive anchor text (not just "View" or "Link")

```
✗ Bad anchor text:  "View Project" / "Click here" / "GitHub"
✓ Good anchor text: "View node-red-contrib-atomberg on GitHub"
                    "See WLED fork source code"
```

---

## SOCIAL & OFF-PAGE SEO SIGNALS

### Profile Consistency (NAP — Name, Account, Profile)
Ensure the **exact same name** is used everywhere — search engines use cross-platform consistency to build entity authority:

| Platform | Name to Use | Handle |
|---|---|---|
| Website | Karan Singh Sisodia | asyncowl.dev |
| GitHub | Karan Singh Sisodia | @sisodiakaran |
| LinkedIn | Karan Singh Sisodia | /in/karansinghsisodia |
| Twitter/X | Karan Singh Sisodia | @sisodiakaran |
| npm (if applicable) | karansinghsisodia | — |
| DEV.to / Hashnode (recommended) | Karan Singh Sisodia | @asyncowl |

### Recommended Off-Page Actions (advise Karan to do these)
Generate a `README_SEO_ACTIONS.md` file with these instructions for Karan:

```markdown
## Off-Page SEO Actions for Karan Singh Sisodia

1. **Google Search Console**
   - Verify asyncowl.dev at search.google.com/search-console
   - Submit sitemap: https://asyncowl.dev/sitemap.xml
   - Request indexing for the homepage URL

2. **LinkedIn Profile**
   - Add asyncowl.dev as your website URL
   - Ensure job titles match exactly what's on the portfolio
   - LinkedIn profiles rank extremely well for "[Name] software engineer" queries

3. **GitHub Profile README**
   - Add asyncowl.dev link prominently in your GitHub bio
   - Pin the most impressive repos (node-red-contrib-atomberg, WLED fork)
   - GitHub profiles are highly indexed — your bio keywords matter

4. **Twitter/X Bio**
   - Include asyncowl.dev in your bio link
   - Bio keywords: "Technical Lead • AI • IoT • @sisodiakaran"

5. **npm / Node packages**
   - If publishing node-red-contrib-atomberg to npm, add homepage: asyncowl.dev

6. **DEV.to or Hashnode** (recommended — write 2-3 articles)
   - "Building a Node-RED integration for Atomberg smart fans"
   - "ESP32 over WiFi: lessons from the WLED project"
   - These articles will rank for long-tail keywords and link back to the portfolio

7. **Google Business Profile** (optional but effective for local SEO)
   - Create a profile as "Karan Singh Sisodia — Software Engineer"
   - Category: Software Engineer / Technology Consultant
   - Location: Chandigarh, India
   - This makes you appear in "software engineer Chandigarh" local searches
```

---

## SEO AUDIT CHECKLIST (Agent must verify before completing)

**Technical SEO**
- [ ] `metadataBase` set to production domain
- [ ] `title.template` configured in root layout
- [ ] Meta description is 150–160 characters
- [ ] `sitemap.ts` includes all canonical routes (`/`, `/about`, `/timeline`, `/skills`, `/projects`, `/contact`)
- [ ] `robots.ts` allows indexing, blocks `/api/` and `/_next/`
- [ ] All 4 JSON-LD schemas injected in `<head>` as Server Component
- [ ] `app/opengraph-image.tsx` generates dynamic OG image
- [ ] `rel="canonical"` present on homepage
- [ ] HTTP → HTTPS redirect configured
- [ ] `www` → non-www redirect configured

**On-Page SEO**
- [ ] Exactly one `<h1>` on the page containing "Karan Singh Sisodia"
- [ ] Heading hierarchy is H1 → H2 → H3 (no skipped levels)
- [ ] All sections use semantic HTML elements (`<section>`, `<article>`, `<time>`, etc.)
- [ ] Primary navbar uses route URLs (not hash-only section links)
- [ ] Homepage content is summary-level and links to route pages for full detail
- [ ] All `<time>` elements have `datetime` attributes
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Social links have `rel="me"` in addition to noopener
- [ ] No generic anchor text ("click here", "view", "link")
- [ ] All images have descriptive alt text
- [ ] Decorative images/icons have `aria-hidden="true"`

**Structured Data**
- [ ] Person schema validated at schema.org/Person
- [ ] WebSite schema includes SearchAction
- [ ] ProfilePage schema present
- [ ] BreadcrumbList schema present
- [ ] All schemas validated with Google Rich Results Test

**Performance (Core Web Vitals)**
- [ ] LCP element identified and has `priority` in `next/image`
- [ ] No layout shift from fonts (`next/font` used, no CDN font links)
- [ ] No layout shift from images (all have explicit `width` + `height`)
- [ ] Security headers configured in `next.config.ts`
- [ ] `Cache-Control` header set for ISR pages
- [ ] `compress: true` in `next.config.ts`

**Content Quality**
- [ ] Primary keyword "Karan Singh Sisodia" in H1, meta title, meta description, JSON-LD
- [ ] Secondary keywords naturally distributed across section headings and body copy
- [ ] No keyword stuffing (max 2–3% keyword density)
- [ ] All project descriptions contain technology keywords
- [ ] Location "Chandigarh, India" mentioned in hero, JSON-LD, and meta description
- [ ] `README_SEO_ACTIONS.md` generated with off-page instructions for Karan