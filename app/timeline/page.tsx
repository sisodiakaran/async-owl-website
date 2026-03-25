import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Timeline from '@/components/sections/Timeline'

export const metadata: Metadata = {
  title: 'Career Timeline — Karan Singh Sisodia',
  description:
    'Explore Karan Singh Sisodia’s 16+ year engineering timeline across software architecture, AI product leadership, and IoT platform delivery.',
  alternates: {
    canonical: 'https://asyncowl.com/timeline',
  },
  openGraph: {
    url: 'https://asyncowl.com/timeline',
  },
}

export default function TimelinePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-w-0">
        <Timeline />
        <section className="pb-20 px-4" aria-label="Related pages">
          <div className="max-w-4xl mx-auto rounded-lg border border-theme-subtle bg-theme-surface p-6">
            <h2 className="font-mono text-lg font-bold text-theme-primary mb-2">Related pages</h2>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <Link href="/about" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}Read background and philosophy
              </Link>
              <Link href="/projects" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}See project outcomes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
