import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SkillsMatrix from '@/components/sections/SkillsMatrix'

export const metadata: Metadata = {
  title: 'Skills & Technology Stack — Karan Singh Sisodia',
  description:
    'Technical skill matrix covering Agentic AI, IoT firmware, backend engineering, DevOps, and leadership experience.',
  alternates: {
    canonical: 'https://asyncowl.com/skills',
  },
  openGraph: {
    url: 'https://asyncowl.com/skills',
  },
}

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-w-0">
        <SkillsMatrix />
        <section className="pb-20 px-4" aria-label="Related pages">
          <div className="max-w-4xl mx-auto rounded-lg border border-theme-subtle bg-theme-surface p-6">
            <h2 className="font-mono text-lg font-bold text-theme-primary mb-2">Put the stack in context</h2>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <Link href="/projects" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}See projects using these skills
              </Link>
              <Link href="/timeline" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}View when skills evolved
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
