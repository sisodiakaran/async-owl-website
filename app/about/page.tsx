import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'About Karan Singh Sisodia — Technical Lead, AI & IoT Engineer',
  description:
    'Learn about Karan Singh Sisodia (@AsyncOwl), a Technical Lead in Chandigarh, India with 16+ years across AI systems, IoT, and full-stack engineering.',
  alternates: {
    canonical: 'https://asyncowl.com/about',
  },
  openGraph: {
    url: 'https://asyncowl.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-w-0">
        <About />
        <section className="pb-20 px-4" aria-label="Related pages">
          <div className="max-w-4xl mx-auto rounded-lg border border-theme-subtle bg-theme-surface p-6">
            <h2 className="font-mono text-lg font-bold text-theme-primary mb-2">Continue exploring</h2>
            <p className="font-sans text-sm text-theme-secondary mb-4">
              See Karan&apos;s role progression and technical strengths in more detail.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <Link href="/timeline" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}View full career timeline
              </Link>
              <Link href="/skills" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}Explore skills and stack
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
