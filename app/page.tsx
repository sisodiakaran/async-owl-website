import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroTerminal from '@/components/sections/HeroTerminal'
import AskAsyncOwl from '@/components/sections/AskAsyncOwl'
import { SITE_CONFIG } from '@/lib/content'

export const revalidate = 3600

export const metadata: Metadata = {
  title: `${SITE_CONFIG.fullName} (@AsyncOwl) — AI, IoT & Technical Leadership`,
  description:
    'Technical Lead and AI/IoT engineer with 16+ years of experience. Explore projects, skills, and career timeline across dedicated pages.',
  alternates: {
    canonical: 'https://asyncowl.com',
  },
  openGraph: {
    url: 'https://asyncowl.com',
  },
}

const HOME_SECTIONS = [
  {
    title: 'About',
    href: '/about',
    description: 'Background, philosophy, and how Karan bridges AI, IoT, and software architecture.',
    cta: 'Read full profile',
  },
  {
    title: 'Timeline',
    href: '/timeline',
    description: '16+ years of engineering and leadership milestones from freelance to Technical Lead.',
    cta: 'View career timeline',
  },
  {
    title: 'Skills',
    href: '/skills',
    description: 'Agentic AI, embedded systems, cloud/backend, and leadership capabilities with project context.',
    cta: 'Explore skill matrix',
  },
  {
    title: 'Projects',
    href: '/projects',
    description: 'Featured GitHub work including Node-RED, ESP32, and production-focused software systems.',
    cta: 'Browse projects',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Reach out for collaborations, consulting, or technical leadership opportunities.',
    cta: 'Start a conversation',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-w-0">
        <HeroTerminal />
        <section className="py-20 md:py-24 px-4" aria-label="Portfolio sections">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-theme-primary mb-4 text-center">
              Explore by topic
            </h2>
            <p className="font-mono text-sm text-theme-secondary text-center mb-10">
              Dedicated pages for deeper context and better discoverability.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {HOME_SECTIONS.map((section) => (
                <article
                  key={section.href}
                  className="rounded-lg border border-theme-subtle bg-theme-surface p-6"
                >
                  <h3 className="font-mono text-lg font-bold text-theme-primary mb-2">{section.title}</h3>
                  <p className="font-sans text-sm text-theme-secondary mb-4">{section.description}</p>
                  <Link
                    href={section.href}
                    className="font-mono text-sm text-brand-pink-hot hover:text-brand-yellow-electric transition-colors"
                    aria-label={`${section.cta} on ${section.title} page`}
                  >
                    {'> '}{section.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <AskAsyncOwl />
      </main>
      <Footer />
    </>
  )
}
