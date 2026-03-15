# AsyncOwl — Karan Singh Sisodia's Portfolio

A retro-futuristic terminal-styled portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features an AI-powered chat assistant, ISR rendering, GitHub integration, and dark/light theme support.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/sisodiakaran/async-owl-website.git
cd async-owl-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | Yes (for AI chat) | OpenAI API key for the Ask AsyncOwl chat feature |
| `GITHUB_TOKEN` | Optional | GitHub PAT to increase API rate limits for repo stats |
| `RESEND_API_KEY` | Optional | Resend API key for contact form email delivery |
| `CONTACT_EMAIL` | Optional | Destination email for contact form (defaults to karansinghsisodia@gmail.com) |

## Tech Stack

- **Framework:** Next.js 14+ (App Router, ISR)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3 + CSS custom animations
- **Animation:** Framer Motion 11
- **AI:** OpenAI GPT-4o (streaming, server-side)
- **Icons:** Lucide React
- **Fonts:** Space Mono + DM Sans via next/font

## Architecture

- `app/page.tsx` — ISR root page (revalidates every hour)
- `app/api/chat/` — Dynamic AI chat endpoint with streaming, rate limiting, input sanitization
- `app/api/github/` — ISR GitHub stats endpoint (revalidates every hour)
- `app/api/contact/` — Dynamic contact form handler with optional Resend integration
- `components/sections/` — Page sections (Hero, About, Timeline, Skills, Projects, AI Chat, Contact)
- `components/ui/` — Reusable UI primitives (OwlLogo, TerminalWindow, GlowBadge, etc.)
- `lib/` — Server utilities (OpenAI client, GitHub fetcher, rate limiter, sanitizer)

## Features

- Terminal boot sequence hero animation
- Git-log-styled career timeline
- Interactive skill matrix with hover details
- GitHub repository cards with live star counts
- AI chat assistant (AsyncOwl persona) with streaming responses
- Terminal-styled contact form
- Dark/light theme with localStorage persistence
- Scroll-triggered animations with reduced-motion support
- Server-side rate limiting (10 messages/IP/hour)
- Prompt injection detection and blocking

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy — ISR is automatically configured

```bash
npm run build   # Verify build succeeds locally
npm run start   # Test production build
```

## License

MIT
