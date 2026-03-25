import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Karan Singh Sisodia — AsyncOwl',
  description:
    'Contact Karan Singh Sisodia for AI, IoT, and software engineering collaborations, consulting, and technical leadership opportunities.',
  alternates: {
    canonical: 'https://asyncowl.com/contact',
  },
  openGraph: {
    url: 'https://asyncowl.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-w-0">
        <ContactForm />
        <section className="pb-20 px-4" aria-label="Related pages">
          <div className="max-w-4xl mx-auto rounded-lg border border-theme-subtle bg-theme-surface p-6">
            <h2 className="font-mono text-lg font-bold text-theme-primary mb-2">Before you reach out</h2>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <Link href="/projects" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}See selected project work
              </Link>
              <Link href="/about" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}Read profile overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
